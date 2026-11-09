# Detektivspillet · 3D-grafik med Blender.
# Tegner portrætter, gerningsstedsfotos og overvågningsbilleder ud fra 3d/jobs.json
# og skriver billederne i art/ samt oversigten art/art.js, som spor.js læser.
#
# Brug (Blender som Python-modul, `pip install bpy pillow`):
#   node 3d/jobs.js 9            # vælg sager
#   python 3d/render.py          # tegn det, der mangler
#   python 3d/render.py --alt    # tegn alt igen
# Eller med Blender selv: blender -b -P 3d/render.py -- --alt
import bpy, json, math, os, sys, random
from mathutils import Vector

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ART = os.path.join(ROOT, 'art')
ARGS = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else sys.argv[1:]
REDO = '--alt' in ARGS
SAMPLES = 64

# ── Hjælpere ─────────────────────────────────────────────────────────────────
def lin(h):
    h = h.lstrip('#')
    c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return tuple((x / 12.92 if x <= 0.04045 else ((x + 0.055) / 1.055) ** 2.4) for x in c) + (1.0,)

def mix(a, b, t):
    return tuple(a[i] * (1 - t) + b[i] * t for i in range(3)) + (1.0,)

MATS = {}
def mat(color, rough=0.6, metal=0.0, spec=0.5, coat=0.0, sss=0.0, alpha=1.0):
    key = (tuple(round(x, 4) for x in color), rough, metal, spec, coat, sss, alpha)
    if key in MATS:
        return MATS[key]
    m = bpy.data.materials.new('m%d' % len(MATS))
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = color
    b.inputs['Roughness'].default_value = rough
    b.inputs['Metallic'].default_value = metal
    b.inputs['Specular IOR Level'].default_value = spec
    b.inputs['Coat Weight'].default_value = coat
    if sss:
        b.inputs['Subsurface Weight'].default_value = sss
        b.inputs['Subsurface Radius'].default_value = (0.9, 0.35, 0.2)
        b.inputs['Subsurface Scale'].default_value = 0.03
    if alpha < 1:
        b.inputs['Alpha'].default_value = alpha
    MATS[key] = m
    return m

def put(obj, m, smooth=True, sub=0):
    obj.data.materials.append(m)
    if smooth:
        obj.data.shade_smooth()
    if sub:
        md = obj.modifiers.new('sub', 'SUBSURF')
        md.levels = md.render_levels = sub
    return obj

def sphere(loc, scale, m, rot=(0, 0, 0), seg=40, sub=1):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=seg, ring_count=seg // 2, location=loc, rotation=rot)
    o = bpy.context.object
    o.scale = scale
    return put(o, m, sub=sub)

def box(loc, size, m, rot=(0, 0, 0), bevel=0.0, smooth=False):
    bpy.ops.mesh.primitive_cube_add(location=loc, rotation=rot)
    o = bpy.context.object
    o.scale = (size[0] / 2, size[1] / 2, size[2] / 2)
    if bevel:
        bpy.ops.object.transform_apply(scale=True)
        md = o.modifiers.new('bev', 'BEVEL')
        md.width = bevel
        md.segments = 3
    return put(o, m, smooth=smooth)

def cyl(loc, r, depth, m, rot=(0, 0, 0), verts=40, scale=None):
    bpy.ops.mesh.primitive_cylinder_add(vertices=verts, radius=r, depth=depth, location=loc, rotation=rot)
    o = bpy.context.object
    if scale:
        o.scale = scale
    return put(o, m)

def torus(loc, R, r, m, rot=(0, 0, 0), scale=None):
    bpy.ops.mesh.primitive_torus_add(major_radius=R, minor_radius=r, location=loc, rotation=rot, major_segments=48, minor_segments=12)
    o = bpy.context.object
    if scale:
        o.scale = scale
    return put(o, m)

def area(loc, target, power, size, color=(1, 1, 1)):
    d = bpy.data.lights.new('l', 'AREA')
    d.energy = power
    d.size = size
    d.color = color
    o = bpy.data.objects.new('l', d)
    bpy.context.collection.objects.link(o)
    o.location = loc
    o.rotation_euler = (Vector(target) - Vector(loc)).to_track_quat('-Z', 'Y').to_euler()
    return o

def camera(loc, target, lens=50, ortho=None, shift=(0, 0)):
    d = bpy.data.cameras.new('c')
    if ortho:
        d.type = 'ORTHO'
        d.ortho_scale = ortho
    else:
        d.lens = lens
    d.shift_x, d.shift_y = shift
    o = bpy.data.objects.new('c', d)
    bpy.context.collection.objects.link(o)
    o.location = loc
    o.rotation_euler = (Vector(target) - Vector(loc)).to_track_quat('-Z', 'Y').to_euler()
    bpy.context.scene.camera = o
    return o

def world(color, strength):
    w = bpy.data.worlds.new('w')
    bpy.context.scene.world = w
    bg = w.node_tree.nodes['Background']
    bg.inputs['Color'].default_value = color
    bg.inputs['Strength'].default_value = strength

def fresh(w, h, transparent):
    bpy.ops.wm.read_factory_settings(use_empty=True)
    MATS.clear()
    s = bpy.context.scene
    s.render.engine = 'CYCLES'
    s.cycles.device = 'CPU'
    s.cycles.samples = SAMPLES
    s.cycles.use_denoising = True
    s.render.resolution_x, s.render.resolution_y = w, h
    s.render.resolution_percentage = 100
    s.render.film_transparent = transparent
    s.render.image_settings.file_format = 'PNG'
    s.render.image_settings.color_mode = 'RGBA' if transparent else 'RGB'
    s.view_settings.view_transform = 'AgX'
    s.view_settings.look = 'AgX - Medium High Contrast'
    return s

def shoot(name):
    from PIL import Image
    png = os.path.join(ART, name + '.png')
    bpy.context.scene.render.filepath = png
    bpy.ops.render.render(write_still=True)
    out = os.path.join(ART, name + '.webp')
    Image.open(png).save(out, 'WEBP', quality=84, method=6)
    os.remove(png)
    return name + '.webp'

# ── Portræt (buste set forfra, gennemsigtig baggrund) ──────────────────────────
def portrait(p):
    fresh(360, 450, True)
    rnd = random.Random(p['key'])
    f = p['sex'] == 'f'
    old, young = p['age'] == 'old', p['age'] == 'young'
    skin = lin(p['skin'])
    if old:
        skin = mix(skin, lin('#c9b3a4'), 0.18)
    sk = mat(skin, 0.55, sss=0.25)
    hair = mat(lin(p['hc']), 0.75, spec=0.35)
    shirt = mat(lin(p['shirt']), 0.85, spec=0.2)
    hw = 0.86 if f else 0.92          # hovedets bredde
    hz = 1.62                          # hovedets midte
    # Krop og hals
    sphere((0, 0.05, 0.25), (1.55 if not f else 1.4, 0.72, 0.95), shirt)
    cyl((0, 0.02, 1.02), 0.3 if f else 0.34, 0.7, sk)
    # Krave
    if p['collar'] == 'turtle':
        cyl((0, 0.02, 1.0), 0.4, 0.5, shirt, scale=(1, 0.95, 1))
        torus((0, 0.02, 1.24), 0.34, 0.07, shirt)
    elif p['collar'] == 'shirt':
        white = mat(lin('#f1ede4'), 0.7)
        for sgn in (-1, 1):
            box((0.17 * sgn, -0.3, 1.0), (0.32, 0.05, 0.22), white, rot=(math.radians(-25), 0, math.radians(32 * sgn)), bevel=0.015)
        torus((0, 0.02, 0.9), 0.36, 0.05, white, scale=(1, 0.9, 1))
    elif p['collar'] == 'round':
        torus((0, 0.03, 0.86), 0.38, 0.06, shirt, scale=(1, 0.9, 1))
    else:  # v-hals
        torus((0, 0.03, 0.86), 0.38, 0.05, shirt, scale=(1, 0.9, 0.6))
    # Hoved, ører, næse
    sphere((0, 0, hz), (hw, 0.96, 1.1 if f else 1.14), sk, sub=1)
    sphere((0, -0.32, hz - 0.62), (0.52 if f else 0.6, 0.5, 0.35), sk)      # kæbe
    for sgn in (-1, 1):
        sphere((sgn * (hw + 0.02), 0.05, hz - 0.02), (0.11, 0.07, 0.2), sk)
    sphere((0, -0.95, hz - 0.12), (0.11, 0.13, 0.17), sk)
    sphere((0, -0.9, hz - 0.27), (0.15, 0.1, 0.07), sk)
    # Øjne
    white = mat(lin('#f4f1ec'), 0.25)
    iris = mat(lin(rnd.choice(['#3d2b1f', '#4a6378', '#4f5d3a', '#2a211c'])), 0.2, coat=1)
    for sgn in (-1, 1):
        x = sgn * 0.3
        sphere((x, -0.78, hz + 0.08), (0.13, 0.08, 0.1), white, sub=0)
        sphere((x, -0.855, hz + 0.08), (0.065, 0.03, 0.065), iris, sub=0)
        lid = sphere((x, -0.74, hz + 0.15), (0.16, 0.1, 0.06), sk, sub=0)
        brow_c = mat(lin('#5a4636'), 0.8) if p['hair'] == 'bald' else hair
        box((x, -0.82, hz + 0.3), (0.3, 0.06, 0.05 if f else 0.07), brow_c, rot=(0, math.radians(-8 * sgn), 0), bevel=0.02, smooth=True)
        if old:
            torus((x, -0.8, hz - 0.04), 0.1, 0.012, mat(mix(skin, lin('#6b4a3a'), 0.25), 0.7), rot=(math.radians(80), 0, 0), scale=(1.3, 1, 0.5))
    # Mund
    lip = mat(lin('#a85a55') if f else mix(skin, lin('#8a4a40'), 0.45), 0.4)
    sphere((0, -0.84, hz - 0.5), (0.2 if f else 0.22, 0.06, 0.045 if f else 0.03), lip, sub=0)
    # Hår
    hb = (hw + 0.06)
    if p['hair'] in ('short', 'curly', 'bun', 'bob', 'long'):
        if p['hair'] == 'curly':
            for i in range(40):
                a = rnd.uniform(0, math.tau); b = rnd.uniform(0.15, 1.15)
                v = Vector((math.cos(a) * math.sin(b) * hb, math.sin(a) * math.sin(b) * 0.98 + 0.08, math.cos(b) * 1.1))
                if v.y < -0.55 and v.z < 0.7:
                    continue
                sphere((v.x, v.y, hz + 0.12 + v.z), (0.24, 0.24, 0.24), hair, seg=16, sub=0)
        else:
            cap = sphere((0, 0.1, hz + 0.24), (hb, 1.0, 0.98 if p['hair'] != 'short' else 0.92), hair, sub=1)
            sphere((0, -0.52, hz + 0.62), (hw * 0.95, 0.45, 0.3), hair, sub=1)     # pandehår/forkant
        if p['hair'] == 'bun':
            sphere((0, 0.45, hz + 1.05), (0.32, 0.32, 0.3), hair)
        if p['hair'] in ('bob', 'long'):
            low = hz - (0.45 if p['hair'] == 'bob' else 1.2)
            for sgn in (-1, 1):
                sphere((sgn * (hw + 0.02), 0.12, (hz + low) / 2 + 0.2), (0.22, 0.6, (hz - low) / 2 + 0.35), hair)
            sphere((0, 0.42, (hz + low) / 2 + 0.2), (hw + 0.1, 0.5, (hz - low) / 2 + 0.45), hair)
    elif p['hair'] == 'bald':
        for sgn in (-1, 1):
            sphere((sgn * (hw - 0.04), 0.25, hz + 0.05), (0.14, 0.45, 0.22), hair)
        sphere((0, 0.55, hz + 0.05), (hw * 0.8, 0.2, 0.22), hair)
    # Skæg
    if p['beard'] == 'full':
        sphere((0, -0.3, hz - 0.62), (0.68, 0.62, 0.45), hair, sub=1)
        for sgn in (-1, 1):
            sphere((sgn * 0.62, -0.1, hz - 0.3), (0.2, 0.4, 0.38), hair)
        sphere((0, -0.86, hz - 0.36), (0.28, 0.08, 0.07), hair)
        sphere((0, -0.86, hz - 0.5), (0.2 if f else 0.22, 0.06, 0.03), lip, sub=0)
    elif p['beard'] == 'stubble':
        st = mat(mix(skin, lin(p['hc']), 0.55), 0.95, spec=0.1, alpha=0.75)
        sphere((0, -0.31, hz - 0.62), (0.53 if f else 0.61, 0.51, 0.36), st)
    elif p['beard'] == 'moustache':
        sphere((0, -0.9, hz - 0.37), (0.26, 0.08, 0.06), hair)
    # Briller og øreringe
    if p['glasses']:
        frame = mat(lin('#2a2420'), 0.3, coat=0.6)
        for sgn in (-1, 1):
            torus((sgn * 0.3, -0.92, hz + 0.08), 0.19, 0.025, frame, rot=(math.radians(90), 0, 0))
            cyl((sgn * 0.7, -0.45, hz + 0.12), 0.02, 0.85, frame, rot=(math.radians(90), 0, math.radians(-6 * sgn)))
        cyl((0, -0.95, hz + 0.12), 0.02, 0.2, frame, rot=(0, math.radians(90), 0))
    if p['earrings']:
        gold = mat(lin('#d7b350'), 0.25, metal=1)
        for sgn in (-1, 1):
            sphere((sgn * (hw + 0.04), -0.02, hz - 0.24), (0.05, 0.05, 0.05), gold, seg=16, sub=0)
    # Lys og kamera
    world(lin('#8c8070'), 0.35)
    area((-2.6, -3.2, 3.6), (0, 0, hz), 520, 2.2, (1, 0.95, 0.88))
    area((3.0, -2.6, 1.8), (0, 0, hz), 160, 3.0, (0.85, 0.9, 1))
    area((0.5, 3.0, 3.4), (0, 0, hz + 0.4), 380, 1.5)
    camera((0, -9.5, hz - 0.2), (0, 0, hz - 0.28), lens=72)
    return shoot('p-' + p['key'])

# ── Gerningsstedsfoto (set oppefra; 1 enhed = 100 punkter i 320×200-billedet) ──
def to_world(x, y):
    return (x / 100 - 1.6, 1.0 - y / 100)

def floor(job):
    a, b = lin(job['colors'][0]), lin(job['colors'][1])
    bg, rnd = job['bg'], random.Random(job['key'])
    if bg in ('wood', 'deck'):
        w = 0.24
        for i in range(10):
            c = mix(a, b, rnd.uniform(0, 0.8))
            off = rnd.uniform(-1, 1)
            for seg in (-1, 1):
                box((seg * 1.2 + off * 0.4, 1.1 - i * w, -0.03), (2.38, w - 0.012, 0.06), mat(c, 0.55 if bg == 'deck' else 0.45, coat=0.2), bevel=0.006)
        box((0, 0, -0.08), (6, 4, 0.04), mat(mix(b, (0, 0, 0, 1), 0.6), 0.9))
    elif bg == 'tile':
        for i in range(-1, 9):
            for j in range(-1, 6):
                box((-1.6 + i * 0.4 + 0.2, 1.0 - j * 0.4 - 0.2, -0.02), (0.39, 0.39, 0.04), mat(mix(a, b, rnd.uniform(0, 0.3)), 0.25), bevel=0.01)
        box((0, 0, -0.05), (6, 4, 0.02), mat(b, 0.9))
    else:
        box((0, 0, -0.02), (4.2, 3.0, 0.04), mat(a, 0.85))
        for _ in range(160):
            sphere((rnd.uniform(-2, 2), rnd.uniform(-1.4, 1.4), 0), (0.02, 0.02, 0.008), mat(b, 0.9), seg=8, sub=0)

def item(name, x, y, s, r, c):
    wx, wy = to_world(x, y)
    k = s * 0.4 / 40            # ikonets enhed (40 punkter) i verdens-enheder
    rot = math.radians(-(r or 0))
    rnd = random.Random('%s%s%s' % (name, x, y))
    made = []
    def at(px, py):             # punkt i ikonets 40×40-koordinater
        dx, dy = (px - 20) * k, -(py - 20) * k
        return (wx + dx * math.cos(rot) - dy * math.sin(rot), wy + dx * math.sin(rot) + dy * math.cos(rot))
    if name == 'stain':
        m = mat(lin(c or '#6e1a1a'), 0.08, coat=1, spec=0.8)
        for _ in range(9):
            px, py = rnd.uniform(9, 31), rnd.uniform(10, 30)
            made.append(sphere((*at(px, py), 0.0), (rnd.uniform(5, 9) * k, rnd.uniform(4, 8) * k, 0.006), m, rot=(0, 0, rnd.uniform(0, 6)), sub=1))
    elif name == 'footprint':
        m = mat(lin(c or '#4a3a2a'), 0.7, alpha=0.85)
        made.append(sphere((*at(19, 23), 0.001), (6.5 * k, 13 * k, 0.003), m, rot=(0, 0, rot + 0.15), sub=1))
        for px, py, rr in ((13, 5, 2.4), (18, 3, 2.2), (23, 4, 2), (27, 6, 1.8)):
            made.append(sphere((*at(px, py), 0.001), (rr * k, rr * k, 0.003), m, sub=0))
    elif name == 'shoe':
        leather = mat(lin(c or '#3a2a20'), 0.35, coat=0.6)
        sole = mat(lin('#1a1715'), 0.8)
        L = 32 * k
        cx, cy = at(20, 24)
        made.append(sphere((cx, cy, 0.06 * s / 1.4), (L / 2, 7 * k, 0.07 * s / 1.4), leather, rot=(0, 0, rot), sub=1))
        made.append(sphere((*at(10, 22), 0.1 * s / 1.4), (6 * k, 6 * k, 0.07 * s / 1.4), leather, rot=(0, 0, rot), sub=1))
        made.append(box((cx, cy, 0.012), (L * 1.02, 15 * k, 0.025), sole, rot=(0, 0, rot), bevel=0.01))
        made.append(torus((*at(10, 22), 0.16 * s / 1.4), 3.5 * k, 0.9 * k, mat(lin('#0e0c0b'), 0.6)))
    else:  # ukendt genstand: en lille bevispose
        made.append(box((wx, wy, 0.01), (22 * k, 28 * k, 0.012), mat(lin('#e9e4d4'), 0.3, coat=0.4, alpha=0.9), rot=(0, 0, rot), bevel=0.004))
    return made

def photo(job):
    fresh(960, 600, False)
    floor(job)
    for it in job['items']:
        n, x, y = it[0], it[1], it[2]
        s = it[3] if len(it) > 3 and it[3] else 1.4
        item(n, x, y, s, it[4] if len(it) > 4 else 0, it[5] if len(it) > 5 else None)
    world(lin('#2a2a2a'), 0.25)
    area((0.3, -0.6, 4.5), (0, 0, 0), 900, 0.6, (1, 0.97, 0.92))     # blitz ved kameraet
    area((-3, 2, 2.5), (0, 0, 0), 250, 3, (0.8, 0.85, 1))
    camera((0, 0, 6), (0, 0, 0), ortho=3.2)
    return shoot('ph-' + job['key'])

# ── Overvågning: gangen bag figurerne (320×180, gulvlinje ved y=100) ──────────
def cctv(job):
    fresh(960, 540, False)
    D, lens = 8.0, 24
    fpx = lens / 36 * 320
    X = lambda px: (px - 160) / fpx * D
    wall = mat(lin('#5d6563'), 0.8)
    floor_m = mat(lin('#6b716d'), 0.35, coat=0.3)
    box((0, D + 0.1, 3), (30, 0.2, 6), wall)
    box((0, D / 2, -0.05), (30, D + 4, 0.1), floor_m)
    for i in range(-12, 13):  # gulvfliser
        box((i * 1.0, D / 2, 0.002), (0.02, D + 4, 0.004), mat(lin('#4c5250'), 0.9))
    for j in range(0, 12):
        box((0, j * 1.0, 0.002), (30, 0.02, 0.004), mat(lin('#4c5250'), 0.9))
    box((0, D - 0.02, 0.06), (30, 0.06, 0.12), mat(lin('#3a403e'), 0.6))  # fodliste
    door = mat(lin('#2a2f2f'), 0.5, coat=0.3)
    frame = mat(lin('#6a7272'), 0.4, metal=0.6)
    for px, lab in job['doors']:
        x = X(px)
        box((x, D - 0.02, 1.05), (1.05, 0.08, 2.1), door)
        for sgn in (-1, 1):
            box((x + sgn * 0.56, D - 0.05, 1.07), (0.08, 0.12, 2.14), frame)
        box((x, D - 0.05, 2.16), (1.2, 0.12, 0.08), frame)
        box((x + 0.38, D - 0.1, 1.0), (0.12, 0.08, 0.03), mat(lin('#b8bcbc'), 0.2, metal=1))
        box((x, D - 0.06, 2.45), (0.7, 0.04, 0.22), mat(lin('#1f2a26'), 0.4))
        area((x, D - 0.4, 2.7), (x, D, 1.0), 60, 0.4, (0.85, 1, 0.9))
    for i in range(-2, 3):  # loftslys
        area((i * 3.2, D / 2 + 1, 3.6), (i * 3.2, D / 2 + 1, 0), 260, 1.2, (0.9, 1, 0.95))
    world(lin('#1a1f1e'), 0.4)
    hc = 0.3125 * D
    camera((0, 0, hc), (0, 1, hc), lens=lens, shift=(0, -56.7 / 320))
    return shoot('cc-' + job['key'])

# ── Figur til overvågning (gennemsigtig, fødder nederst i billedet) ────────────
def fig(job):
    fresh(120, 324, True)
    cloth = mat(lin(job['color']), 0.85, spec=0.2)
    dark = mat(lin('#222222'), 0.7)
    skin = mat(lin('#c9a17f'), 0.6)
    for sgn in (-1, 1):
        cyl((sgn * 0.12, 0, 0.45), 0.09, 0.9, dark)
        sphere((sgn * 0.12, -0.06, 0.04), (0.1, 0.16, 0.06), mat(lin('#111111'), 0.5), sub=0)
        cyl((sgn * 0.3, 0, 1.12), 0.07, 0.62, cloth, rot=(0, math.radians(-8 * sgn), 0))
        sphere((sgn * 0.33, 0, 0.78), (0.07, 0.07, 0.08), skin, sub=0)
    sphere((0, 0, 1.18), (0.3, 0.19, 0.42), cloth)
    sphere((0, 0, 0.9), (0.26, 0.17, 0.12), cloth)
    sphere((0, 0, 1.62), (0.13, 0.15, 0.16), skin)
    sphere((0, 0.03, 1.69), (0.14, 0.155, 0.12), mat(lin('#2a2420'), 0.8))
    world(lin('#8a9590'), 0.6)
    area((0, -3, 4), (0, 0, 1), 400, 2, (0.9, 1, 0.95))
    # Samme vinkel som overvågningskameraet (ca. 17° ned)
    cam = camera((0, -9.0, 1.85 + 9.0 * 0.3), (0, 0, 0.85), ortho=None, lens=120)
    cam.data.sensor_fit = 'VERTICAL'
    return shoot('f-' + job['key'])

# ── Kør ──────────────────────────────────────────────────────────────────────
def main():
    os.makedirs(ART, exist_ok=True)
    jobs = json.load(open(os.path.join(ROOT, '3d', 'jobs.json'), encoding='utf-8'))
    man_path = os.path.join(ART, 'manifest.json')
    man = json.load(open(man_path)) if os.path.exists(man_path) else {'p': {}, 'ph': {}, 'cc': {}, 'f': {}}
    plan = [('p', jobs['portraits'], portrait), ('ph', jobs['photos'], photo), ('cc', jobs['cctv'], cctv), ('f', jobs['figs'], fig)]
    for kind, lst, fn in plan:
        for j in lst:
            if not REDO and j['key'] in man[kind] and os.path.exists(os.path.join(ART, man[kind][j['key']])):
                continue
            print('Tegner', kind, j.get('name', j['key']), flush=True)
            man[kind][j['key']] = fn(j)
            json.dump(man, open(man_path, 'w'), indent=1, sort_keys=True)
    with open(os.path.join(ART, 'art.js'), 'w', encoding='utf-8') as f:
        f.write('// Lavet af 3d/render.py. 3D-billeder, som spor.js bruger i stedet for de tegnede.\n')
        f.write('window.ART=' + json.dumps(man, sort_keys=True, separators=(',', ':')) + ';\n')
    print('Færdig:', {k: len(v) for k, v in man.items()})

main()
