# Detektivspillet · 3D-grafik med Blender.
# Tegner portrætter, gerningsstedsfotos og overvågningsbilleder ud fra 3d/jobs.json
# og skriver billederne i art/ samt oversigten art/art.js, som spor.js læser.
#
# Brug (Blender som Python-modul, `pip install bpy pillow`):
#   node 3d/jobs.js 9            # vælg sager
#   python 3d/render.py          # tegn det, der mangler
#   python 3d/render.py --alt    # tegn alt igen
#   python 3d/render.py --kun p  # kun portrætter (p, ph, cc, f)
# Eller med Blender selv: blender -b -P 3d/render.py -- --alt
import bpy, json, math, os, sys, random
from mathutils import Vector

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ART = os.path.join(ROOT, 'art')
CACHE = os.path.join(ROOT, '3d', 'cache')
os.makedirs(CACHE, exist_ok=True)
ARGS = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else sys.argv[1:]
REDO = '--alt' in ARGS
SAMPLES = 64
SKIN_IDX = {c: i for i, c in enumerate(['#f3d6bd', '#e9c19f', '#d6a27a', '#b37c54', '#8c5b3b', '#5f3c27'])}

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

# ── Portræt med MakeHuman (MPFB2) ─────────────────────────────────────────────
# Kræver MPFB2 installeret som Blender-udvidelse og MakeHumans "system assets" (CC0).
# Se 3d/README.md. Personen bygges ud fra beskrivelsen i sagen: køn, alder, hudfarve,
# frisure, hårfarve, skæg, briller, øreringe, krave og tøjfarve.
_MH = {}
def mh():
    import importlib
    bpy.ops.preferences.addon_enable(module='bl_ext.user_default.mpfb')   # skal på igen efter hver nulstilling
    if not _MH:
        P = 'bl_ext.user_default.mpfb.services.'
        _MH['HS'] = importlib.import_module(P + 'humanservice').HumanService
        _MH['AS'] = importlib.import_module(P + 'assetservice').AssetService
        _MH['TS'] = importlib.import_module(P + 'targetservice').TargetService
        _MH['LS'] = importlib.import_module(P + 'locationservice').LocationService
    return _MH['HS'], _MH['AS']

def face_targets(h, rnd, f, age):
    # Giv hvert ansigt sit eget præg med små, tilfældige justeringer.
    import glob
    TS, root = _MH['TS'], _MH['LS'].get_mpfb_data('targets')
    pool = []
    for cat in ('head', 'chin', 'nose', 'mouth', 'forehead', 'eyebrows', 'neck'):
        files = sorted(fn for fn in glob.glob(os.path.join(root, cat, '*.target.gz')) if not os.path.basename(fn)[:2] in ('l-', 'r-'))
        pool += [fn for fn in files if 'trans' not in fn]
    picks = rnd.sample(pool, 9)
    if not f:
        picks += [os.path.join(root, 'chin', 'chin-width-incr.target.gz'), os.path.join(root, 'head', 'head-square.target.gz')]
    seen = set()
    if age > 35:   # alder i ansigtet: poser under øjnene og ældre hovedform
        a = min(1.0, (age - 35) / 35)
        TS.load_target(h, os.path.join(root, 'head', 'head-age-incr.target.gz'), weight=a)
        for side in 'lr':
            TS.load_target(h, os.path.join(root, 'eyes', side + '-eye-bag-incr.target.gz'), weight=a * 0.8)
        seen.add(os.path.join(root, 'head', 'head-age-incr.target.gz'))
    for fn in picks:
        if fn in seen or not os.path.exists(fn):
            continue
        seen.add(fn)
        TS.load_target(h, fn, weight=rnd.uniform(0.25, 0.6))

ETH = ['caucasian', 'caucasian', 'caucasian', 'asian', 'african', 'african']
RACE = [(1, 0, 0), (1, 0, 0), (.75, .25, 0), (.2, .8, 0), (.1, .1, .8), (0, 0, 1)]   # (kaukasisk, asiatisk, afrikansk)
HAIR = {'short': ('short02', 'short03'), 'bob': ('bob01', 'long01'), 'long': ('long01', 'long01'), 'bun': ('ponytail01', 'ponytail01'), 'curly': ('afro01', 'afro01')}

def years(p):
    import re
    m = re.search(r'\((\d{1,3})\)', p['name'])
    if m:
        return int(m.group(1))
    return {'young': 26, 'mid': 45, 'old': 72}.get(p['age'], 40)

def bbox(o):
    pts = [o.matrix_world @ Vector(c) for c in o.bound_box]
    lo = Vector((min(v.x for v in pts), min(v.y for v in pts), min(v.z for v in pts)))
    hi = Vector((max(v.x for v in pts), max(v.y for v in pts), max(v.z for v in pts)))
    return lo, hi

def tint(o, color, lift=(0.0, 0.7, 0.25, 1.15)):
    # Farv et tekstureret materiale om, men behold teksturens lys og skygge.
    for m in o.data.materials:
        nt = m.node_tree
        b = next(n for n in nt.nodes if n.bl_idname == 'ShaderNodeBsdfPrincipled')
        sock = b.inputs['Base Color']
        if not sock.links:
            sock.default_value = color
            continue
        src = sock.links[0].from_socket
        bw = nt.nodes.new('ShaderNodeRGBToBW')
        mr = nt.nodes.new('ShaderNodeMapRange')
        mr.inputs[1].default_value, mr.inputs[2].default_value = lift[0], lift[1]
        mr.inputs[3].default_value, mr.inputs[4].default_value = lift[2], lift[3]
        mx = nt.nodes.new('ShaderNodeMix')
        mx.data_type = 'RGBA'
        mx.blend_type = 'MULTIPLY'
        mx.inputs['Factor'].default_value = 1.0
        nt.links.new(src, bw.inputs[0])
        nt.links.new(bw.outputs[0], mr.inputs[0])
        nt.links.new(mr.outputs[0], mx.inputs[6])
        mx.inputs[7].default_value = color
        nt.links.new(mx.outputs[2], sock)

def shell(body, keep, thick, m, name, noise=0.0):
    # Et tyndt lag oven på huden (skæg, skægstubbe, rullekrave), lavet af kroppens egne flader.
    import bmesh
    dg = bpy.context.evaluated_depsgraph_get()
    me = bpy.data.meshes.new_from_object(body.evaluated_get(dg))
    bm = bmesh.new()
    bm.from_mesh(me)
    mw = body.matrix_world
    from mathutils.kdtree import KDTree
    fade = bm.verts.layers.float.new('fade')   # 0 ved kanten, 1 et stykke inde: bløde overgange
    out = [v for v in bm.verts if not keep(mw @ v.co)]
    kd = KDTree(len(out))
    for i, v in enumerate(out):
        kd.insert(mw @ v.co, i)
    kd.balance()
    for v in bm.verts:
        d = kd.find(mw @ v.co)[2] if out else 1.0
        v[fade] = min(1.0, (d or 0.0) / 0.007)
    bmesh.ops.delete(bm, geom=out, context='VERTS')
    bm.to_mesh(me)
    bm.free()
    me.materials.clear()
    me.materials.append(m)
    o = bpy.data.objects.new(name, me)
    bpy.context.collection.objects.link(o)
    o.matrix_world = mw
    sm = o.modifiers.new('sub', 'SUBSURF')
    sm.levels = sm.render_levels = 1
    so = o.modifiers.new('tyk', 'SOLIDIFY')
    so.thickness = thick
    so.offset = 1
    if noise:
        tex = bpy.data.textures.new(name, 'CLOUDS')
        tex.noise_scale = 0.004
        dm = o.modifiers.new('ujævn', 'DISPLACE')
        dm.texture = tex
        dm.strength = noise
        dm.mid_level = 0.5
    me.shade_smooth()
    return o

def hairmat(color, density, scale, name):
    # Hår/skæg-materiale: små tætte prikker og streger, der lader huden skinne igennem.
    m = bpy.data.materials.new(name)
    nt = m.node_tree
    b = nt.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = color
    b.inputs['Roughness'].default_value = 0.7
    b.inputs['Specular IOR Level'].default_value = 0.3
    tc = nt.nodes.new('ShaderNodeTexCoord')
    n = nt.nodes.new('ShaderNodeTexNoise')
    n.inputs['Scale'].default_value = scale
    nt.links.new(tc.outputs['Object'], n.inputs['Vector'])
    n.inputs['Detail'].default_value = 8
    v = nt.nodes.new('ShaderNodeTexVoronoi')
    v.inputs['Scale'].default_value = scale * 2.2
    nt.links.new(tc.outputs['Object'], v.inputs['Vector'])
    mul = nt.nodes.new('ShaderNodeMath')
    mul.operation = 'MULTIPLY'
    nt.links.new(n.outputs['Fac'], mul.inputs[0])
    nt.links.new(v.outputs['Distance'], mul.inputs[1])
    ramp = nt.nodes.new('ShaderNodeValToRGB')
    t = 0.04 + density * 0.3
    ramp.color_ramp.elements[0].position = t
    ramp.color_ramp.elements[1].position = t + 0.03
    ramp.color_ramp.elements[0].color = (1, 1, 1, 1)
    ramp.color_ramp.elements[1].color = (0, 0, 0, 1)
    nt.links.new(mul.outputs[0], ramp.inputs[0])
    at = nt.nodes.new('ShaderNodeAttribute')
    at.attribute_name = 'fade'
    sm = nt.nodes.new('ShaderNodeMath')
    sm.operation = 'POWER'
    sm.inputs[1].default_value = 0.7
    nt.links.new(at.outputs['Fac'], sm.inputs[0])
    am = nt.nodes.new('ShaderNodeMath')
    am.operation = 'MULTIPLY'
    nt.links.new(ramp.outputs[0], am.inputs[0])
    nt.links.new(sm.outputs[0], am.inputs[1])
    nt.links.new(am.outputs[0], b.inputs['Alpha'])
    bump = nt.nodes.new('ShaderNodeBump')
    bump.inputs['Strength'].default_value = 0.6
    nt.links.new(mul.outputs[0], bump.inputs['Height'])
    nt.links.new(bump.outputs['Normal'], b.inputs['Normal'])
    return m

def portrait(p):
    fresh(360, 450, True)
    HS, AS = mh()
    f = p['sex'] == 'f'
    age = years(p)
    agev = 0.5 * age / 25 if age < 25 else 0.5 + (age - 25) / 65 * 0.5
    sk = SKIN_IDX.get(p['skin'], 1)
    rc = RACE[sk]
    rnd = random.Random(p['key'])
    macro = {'gender': 1.0 if f else 0.0, 'age': agev, 'muscle': rnd.uniform(0.4, 0.6), 'weight': rnd.uniform(0.4, 0.65) + (0.08 if age > 50 else 0),
             'proportions': 0.5, 'height': 0.5, 'cupsize': 0.5, 'firmness': 0.5,
             'race': {'caucasian': rc[0], 'asian': rc[1], 'african': rc[2]}}
    h = HS.create_human(macro_detail_dict=macro)
    face_targets(h, rnd, f, age)
    grp = 'young' if age < 32 else 'middleage' if age < 56 else 'old'
    HS.set_character_skin(AS.find_asset_absolute_path('%s_%s_%s.mhmat' % (grp, ETH[sk], 'female' if f else 'male'), asset_subdir='skins'), h)
    add = lambda sub, fn, t: HS.add_mhclo_asset(AS.find_asset_absolute_path(fn, asset_subdir=sub), h, asset_type=t, set_up_rigging=False)
    eyes = add('eyes', 'low-poly.mhclo', 'Eyes')
    add('eyebrows', 'eyebrow%03d.mhclo' % (rnd.choice([1, 2, 3, 6, 7, 10]) if f else rnd.choice([1, 4, 5, 8, 9, 11, 12])), 'Eyebrows')
    add('eyelashes', 'eyelashes0%d.mhclo' % (rnd.choice([1, 2]) if f else 3), 'Eyelashes')
    teeth = add('teeth', 'teeth_base.mhclo', 'Teeth')
    hc = lin(p['hc'])
    for o in bpy.data.objects:
        if 'eyebrow' in o.name.lower():
            tint(o, mix(hc, (0.05, 0.04, 0.03, 1), 0.35 if p['hair'] != 'bald' else 0.6))
    if p['hair'] in HAIR:
        hair = add('hair', HAIR[p['hair']][1 if f else 0] + '.mhclo', 'Hair')
        tint(hair, hc)
    cl = p['collar']
    suit = {'shirt': 'female_elegantsuit01' if f else 'male_casualsuit01', 'v': 'female_elegantsuit01' if f else 'male_casualsuit03'}.get(cl, 'male_casualsuit06')
    cloth = add('clothes', suit + '.mhclo', 'Clothes')
    tint(cloth, lin(p['shirt']), lift=(0.0, 1.0, 0.82, 0.98))
    # Mål på ansigtet
    elo, ehi = bbox(eyes)
    ec = (elo + ehi) / 2
    er = (ehi.y - elo.y) / 2
    hs = (ehi.x - elo.x) / 0.0869          # hovedets størrelse i forhold til standardmodellen
    mz = ec.z - 0.075 * hs                 # munden
    cb = ec.z - 0.108 * hs                 # hagens underkant
    front = elo.y
    if cl == 'turtle':
        shell(h, lambda v: cb - 0.13 < v.z < cb - 0.012 and not (v.z > cb - 0.035 and v.y < ec.y + 0.045), 0.012,
              mat(lin(p['shirt']), 0.9, spec=0.2), 'rullekrave', noise=0.002)
    hcol = mix(hc, (0.02, 0.015, 0.01, 1), 0.25)
    lips = lambda v: abs(v.x) < 0.022 and mz - 0.009 < v.z < mz + 0.006
    face = lambda v: v.y < ec.y + 0.07 and abs(v.x) < 0.078
    jaw = lambda v, low: v.z > cb - low and (v.y < ec.y + 0.03 or v.z > cb + 0.012)
    if p['beard'] == 'full':
        shell(h, lambda v: face(v) and jaw(v, 0.014) and v.z < ec.z - 0.045 and not lips(v) and (abs(v.x) > 0.03 or v.z < mz + 0.022),
              0.007, hairmat(hcol, 0.9, 900, 'skæg'), 'skæg', noise=0.003)
    elif p['beard'] == 'stubble':
        shell(h, lambda v: face(v) and jaw(v, 0.008) and v.z < ec.z - 0.05 and not lips(v) and (abs(v.x) > 0.03 or v.z < mz + 0.02),
              0.0012, hairmat(mix(hcol, (0.02, 0.015, 0.01, 1), 0.55), 0.55, 3800, 'stubbe'), 'stubbe')
    elif p['beard'] == 'moustache':
        shell(h, lambda v: face(v) and abs(v.x) < 0.032 and mz + 0.006 < v.z < mz + 0.022, 0.004, hairmat(hcol, 0.95, 900, 'overskæg'), 'overskæg')
    if p['glasses']:
        frame = mat(lin(rnd.choice(['#1d1a18', '#3a2a1f', '#2b2b30', '#6b5a4a'])), 0.3, coat=0.8)
        glass = mat((0.85, 0.9, 0.92, 1), 0.02, coat=1, alpha=0.08)
        hx = (ehi.x - elo.x) / 2 - er
        y = front - 0.012
        for sgn in (-1, 1):
            torus((sgn * hx, y, ec.z), 0.021, 0.0018, frame, rot=(math.radians(90), 0, 0), scale=(1.15, 1, 0.85))
            cyl((sgn * hx, y + 0.001, ec.z), 0.021, 0.001, glass, rot=(math.radians(90), 0, 0), scale=(1.15, 0.85, 1))
            cyl((sgn * (hx + 0.026), y + 0.05, ec.z + 0.006), 0.0015, 0.1, frame, rot=(math.radians(90), 0, 0))
        cyl((0, y, ec.z + 0.004), 0.0016, 2 * hx - 0.046, frame, rot=(0, math.radians(90), 0))
    if p['earrings']:
        gold = mat(lin('#d7b350'), 0.2, metal=1)
        mw = h.matrix_world
        ev = h.evaluated_get(bpy.context.evaluated_depsgraph_get()).to_mesh()
        side = [mw @ v.co for v in ev.vertices]
        for sgn in (-1, 1):
            cand = [v for v in side if abs(v.z - (mz + 0.005)) < 0.008 and ec.y + 0.02 < v.y < ec.y + 0.11 and v.x * sgn > 0]
            if cand:
                ear = max(cand, key=lambda v: v.x * sgn)
                sphere((ear.x - sgn * 0.004, ear.y, ear.z - 0.012), (0.0035, 0.0035, 0.0035), gold, seg=16, sub=0)
    # Lys og kamera (pasfoto)
    world(lin('#8c8478'), 0.25)
    tgt = Vector((0, ec.y, ec.z - 0.1))
    area((-1.0, ec.y - 0.75, ec.z + 0.5), tgt, 46, 0.6, (1, 0.94, 0.86))
    area((0.9, ec.y - 0.6, ec.z), tgt, 6, 1.2, (0.86, 0.9, 1))
    area((0.25, ec.y + 0.8, ec.z + 0.55), tgt, 30, 0.5)
    cam = camera((0, ec.y - 1.7, ec.z - 0.02), tgt, lens=85)
    cam.data.sensor_fit = 'VERTICAL'
    cam.data.sensor_height = 24
    return shoot('p-' + p['key'])

# ── Gerningsstedsfoto (set oppefra; 1 enhed = 100 punkter i 320×200-billedet) ──
def to_world(x, y):
    return (x / 100 - 1.6, 1.0 - y / 100)

def woodmat(a, b, seed, rough=0.55):
    # Træ: årer (bølgetekstur forvredet af støj) mellem planke-farverne a og b.
    m = bpy.data.materials.new('træ%d' % seed)
    nt = m.node_tree
    bs = nt.nodes['Principled BSDF']
    tc = nt.nodes.new('ShaderNodeTexCoord')
    mp = nt.nodes.new('ShaderNodeMapping')
    mp.inputs['Location'].default_value = (seed * 3.7, seed * 1.3, 0)
    mp.inputs['Scale'].default_value = (0.25, 1, 1)
    wv = nt.nodes.new('ShaderNodeTexWave')
    wv.bands_direction = 'Y'
    wv.inputs['Scale'].default_value = 4
    wv.inputs['Distortion'].default_value = 7
    wv.inputs['Detail'].default_value = 4
    wv.inputs['Detail Scale'].default_value = 1.2
    ns = nt.nodes.new('ShaderNodeTexNoise')
    ns.inputs['Scale'].default_value = 40
    ramp = nt.nodes.new('ShaderNodeValToRGB')
    ramp.color_ramp.elements[0].color = a
    ramp.color_ramp.elements[1].color = b
    mixn = nt.nodes.new('ShaderNodeMath')
    mixn.operation = 'MULTIPLY_ADD'
    mixn.inputs[1].default_value = 0.85
    nt.links.new(tc.outputs['Object'], mp.inputs['Vector'])
    nt.links.new(mp.outputs['Vector'], wv.inputs['Vector'])
    nt.links.new(tc.outputs['Object'], ns.inputs['Vector'])
    nt.links.new(wv.outputs['Fac'], mixn.inputs[0])
    nt.links.new(ns.outputs['Fac'], mixn.inputs[2])
    nt.links.new(mixn.outputs[0], ramp.inputs['Fac'])
    nt.links.new(ramp.outputs['Color'], bs.inputs['Base Color'])
    bump = nt.nodes.new('ShaderNodeBump')
    bump.inputs['Strength'].default_value = 0.25
    nt.links.new(mixn.outputs[0], bump.inputs['Height'])
    nt.links.new(bump.outputs['Normal'], bs.inputs['Normal'])
    bs.inputs['Roughness'].default_value = rough
    bs.inputs['Specular IOR Level'].default_value = 0.35
    return m

def floor(job):
    a, b = lin(job['colors'][0]), lin(job['colors'][1])
    bg, rnd = job['bg'], random.Random(job['key'])
    if bg in ('wood', 'deck'):
        w = 0.24
        dark = mix(b, (0, 0, 0, 1), 0.35)
        for i in range(10):
            off = rnd.uniform(-1, 1)
            for seg in (-1, 1):
                sh = rnd.uniform(-0.12, 0.08)
                ca, cb = mix(a, (0, 0, 0, 1), -sh if sh < 0 else 0), mix(dark, b, 0.5 + sh)
                box((seg * 1.2 + off * 0.4, 1.1 - i * w, -0.03), (2.38, w - 0.01, 0.06), woodmat(ca, cb, rnd.randint(0, 999), 0.62 if bg == 'deck' else 0.45), bevel=0.006)
        box((0, 0, -0.08), (6, 4, 0.04), mat(mix(b, (0, 0, 0, 1), 0.75), 0.9))
    elif bg == 'tile':
        for i in range(-1, 9):
            for j in range(-1, 6):
                box((-1.6 + i * 0.4 + 0.2, 1.0 - j * 0.4 - 0.2, -0.02), (0.39, 0.39, 0.04), mat(mix(a, b, rnd.uniform(0, 0.3)), 0.25), bevel=0.01)
        box((0, 0, -0.05), (6, 4, 0.02), mat(b, 0.9))
    else:
        box((0, 0, -0.02), (4.2, 3.0, 0.04), mat(a, 0.85))
        for _ in range(160):
            sphere((rnd.uniform(-2, 2), rnd.uniform(-1.4, 1.4), 0), (0.02, 0.02, 0.008), mat(b, 0.9), seg=8, sub=0)

def decal(loc, size, rot, img_path, color, rough, name, gloss=False):
    # Et fladt "aftryk" på gulvet ud fra et gråtonebillede (hvid = synligt).
    bpy.ops.mesh.primitive_plane_add(location=loc, rotation=(0, 0, rot))
    o = bpy.context.object
    o.scale = (size[0] / 2, size[1] / 2, 1)
    m = bpy.data.materials.new(name)
    nt = m.node_tree
    bs = nt.nodes['Principled BSDF']
    tx = nt.nodes.new('ShaderNodeTexImage')
    tx.image = bpy.data.images.load(img_path)
    tx.image.colorspace_settings.name = 'Non-Color'
    tx.extension = 'CLIP'
    nt.links.new(tx.outputs['Color'], bs.inputs['Alpha'])
    bs.inputs['Base Color'].default_value = color
    bs.inputs['Roughness'].default_value = rough
    if gloss:
        bs.inputs['Coat Weight'].default_value = 1
        bs.inputs['Coat Roughness'].default_value = 0.02
        bump = nt.nodes.new('ShaderNodeBump')
        bump.inputs['Strength'].default_value = 0.4
        nt.links.new(tx.outputs['Color'], bump.inputs['Height'])
        nt.links.new(bump.outputs['Normal'], bs.inputs['Coat Normal'])
    o.data.materials.append(m)
    return o

def stain_img(seed):
    # Uregelmæssig pøl: bløde klatter + støj, tegnet med Pillow.
    from PIL import Image, ImageDraw, ImageFilter
    rnd = random.Random(seed)
    im = Image.new('L', (512, 512), 0)
    d = ImageDraw.Draw(im)
    for _ in range(14):
        x, y, r = rnd.gauss(256, 60), rnd.gauss(256, 55), rnd.uniform(40, 110)
        d.ellipse((x - r, y - r * rnd.uniform(0.6, 1), x + r, y + r * rnd.uniform(0.6, 1)), fill=255)
    for _ in range(26):  # små stænk
        x, y, r = rnd.gauss(256, 140), rnd.gauss(256, 130), rnd.uniform(3, 12)
        d.ellipse((x - r, y - r, x + r, y + r), fill=255)
    im = im.filter(ImageFilter.GaussianBlur(9)).point(lambda v: min(255, int(v * 1.25)))
    path = os.path.join(CACHE, 'pøl-%s.png' % seed)
    im.save(path)
    return path

def sole_img():
    # Skoaftryk: sål med tværriller og hæl, som efterlades i olie.
    from PIL import Image, ImageDraw, ImageFilter
    path = os.path.join(CACHE, 'sål.png')
    if os.path.exists(path):
        return path
    W, H = 256, 640
    mask = Image.new('L', (W, H), 0)
    d = ImageDraw.Draw(mask)
    d.ellipse((30, 20, 226, 300), fill=255)        # forfod
    d.polygon([(40, 170), (216, 170), (190, 420), (70, 420)], fill=255)
    d.ellipse((62, 400, 196, 620), fill=255)       # hæl
    tread = Image.new('L', (W, H), 0)
    t = ImageDraw.Draw(tread)
    for y in range(24, 640, 22):
        t.rectangle((0, y, W, y + 11), fill=255)
    rnd = random.Random(7)
    for _ in range(300):
        x, y = rnd.uniform(0, W), rnd.uniform(0, H)
        t.ellipse((x - 4, y - 4, x + 4, y + 4), fill=0)
    from PIL import ImageChops
    gap = Image.new('L', (W, H), 0)
    ImageDraw.Draw(gap).rectangle((0, 425, W, 445), fill=255)
    out = ImageChops.multiply(mask, tread)
    out = ImageChops.subtract(out, gap)
    out.filter(ImageFilter.GaussianBlur(1.5)).save(path)
    return path

def shoe_obj(color):
    # En rigtig sko fra MakeHuman (CC0), lagt på siden.
    HS, AS = mh()
    path = AS.find_asset_absolute_path('shoes01.obj', asset_subdir='clothes')
    bpy.ops.wm.obj_import(filepath=path)
    o = bpy.context.selected_objects[0]
    bpy.context.view_layer.objects.active = o
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    bpy.ops.object.mode_set(mode='EDIT')
    bpy.ops.mesh.select_all(action='DESELECT')
    bpy.ops.object.mode_set(mode='OBJECT')
    zs = [v.co.z for v in o.data.vertices]
    top = min(zs) + 0.4 * (max(zs) - min(zs))     # fjern sokken over skoen
    for v in o.data.vertices:
        v.select = v.co.x < 0 or v.co.z > top
    bpy.ops.object.mode_set(mode='EDIT')
    bpy.ops.mesh.delete(type='VERT')
    bpy.ops.object.mode_set(mode='OBJECT')
    bpy.ops.object.origin_set(type='ORIGIN_GEOMETRY', center='BOUNDS')
    d = os.path.dirname(path)
    m = bpy.data.materials.new('sko')
    nt = m.node_tree
    bs = nt.nodes['Principled BSDF']
    tx = nt.nodes.new('ShaderNodeTexImage')
    tx.image = bpy.data.images.load(os.path.join(d, 'shoes01_diffuse.png'))
    nm = nt.nodes.new('ShaderNodeTexImage')
    nm.image = bpy.data.images.load(os.path.join(d, 'shoes01_normal.png'))
    nm.image.colorspace_settings.name = 'Non-Color'
    nmap = nt.nodes.new('ShaderNodeNormalMap')
    nt.links.new(nm.outputs['Color'], nmap.inputs['Color'])
    nt.links.new(nmap.outputs['Normal'], bs.inputs['Normal'])
    bs.inputs['Coat Weight'].default_value = 0.4
    bs.inputs['Roughness'].default_value = 0.45
    o.data.materials.clear()
    o.data.materials.append(m)
    nt.links.new(tx.outputs['Color'], bs.inputs['Base Color'])
    if color:
        tint(o, lin(color), lift=(0.0, 0.8, 0.3, 1.1))
    return o

def item(name, x, y, s, r, c):
    wx, wy = to_world(x, y)
    k = s * 0.4 / 40            # ikonets enhed (40 punkter) i verdens-enheder
    rot = math.radians(-(r or 0))
    if name == 'stain':
        decal((wx, wy, 0.001), (30 * k, 30 * k), rot, stain_img('%d%d' % (x, y)), mix(lin(c or '#6e1a1a'), (0, 0, 0, 1), 0.75), 0.3, 'pøl', gloss=True)
    elif name == 'footprint':
        decal((wx, wy, 0.0015), (13 * k, 33 * k), rot + math.radians(8), sole_img(), lin(c or '#4a3a2a'), 0.35, 'aftryk', gloss=True)
    elif name == 'shoe':
        o = shoe_obj(c)
        L = max(o.dimensions)
        f = 34 * k / L
        o.scale = (f, f, f)
        o.rotation_euler = (0, math.radians(90), rot + math.radians(90))
        bpy.context.view_layer.update()
        o.location = (wx, wy, 0)
        bpy.context.view_layer.update()
        lo = min((o.matrix_world @ Vector(cc)).z for cc in o.bound_box)
        o.location.z -= lo
    else:  # ukendt genstand: en lille bevispose
        box((wx, wy, 0.01), (22 * k, 28 * k, 0.012), mat(lin('#e9e4d4'), 0.3, coat=0.4, alpha=0.9), rot=(0, 0, rot), bevel=0.004)

def photo(job):
    fresh(960, 600, False)
    floor(job)
    for it in job['items']:
        n, x, y = it[0], it[1], it[2]
        s = it[3] if len(it) > 3 and it[3] else 1.4
        item(n, x, y, s, it[4] if len(it) > 4 else 0, it[5] if len(it) > 5 else None)
    world(lin('#b8b4ac'), 0.35)
    area((-1.2, -1.6, 3.2), (0, 0, 0), 380, 1.6, (1, 0.96, 0.9))     # blitz skråt fra kameraet
    area((2.5, 1.5, 2.5), (0, 0, 0), 90, 3, (0.8, 0.85, 1))
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

# ── Figur til overvågning: et helt MakeHuman-menneske, set fra kameraets vinkel ──
OUTFIT = [(('kedeldragt', 'overall', 'arbejdstøj', 'dragt'), 'male_worksuit01'), (('uniform', 'skjorte'), 'male_casualsuit01'),
          (('jakke', 'frakke', 'regnjakke', 'blazer'), 'male_casualsuit05'), (('jakkesæt', 'habit'), 'male_elegantsuit01'),
          (('kjole', 'nederdel', 'bluse'), 'female_elegantsuit01'), (('trøje', 'sweater', 'hættetrøje', 'strik'), 'male_casualsuit02')]

def arms_down(rig):
    for sgn, side in ((1, 'L'), (-1, 'R')):
        pb = rig.pose.bones.get('upperarm01.' + side)
        if not pb:
            continue
        b = pb.bone
        v = (b.tail_local - b.head_local).normalized()
        q = v.rotation_difference(Vector((sgn * 0.12, 0.04, -1)).normalized())
        r0 = b.matrix_local.to_quaternion()
        pb.rotation_mode = 'QUATERNION'
        pb.rotation_quaternion = r0.inverted() @ q @ r0

def fig(job):
    fresh(120, 324, True)
    HS, AS = mh()
    rnd = random.Random(job['key'])
    label = job.get('label', '').lower()
    female = any(w in label for w in ('kjole', 'nederdel', 'bluse'))
    h = HS.create_human(macro_detail_dict={'gender': 1.0 if female else 0.0, 'age': 0.6, 'muscle': 0.5, 'weight': rnd.uniform(0.45, 0.6), 'proportions': 0.5,
                                           'height': 0.5, 'cupsize': 0.5, 'firmness': 0.5, 'race': {'caucasian': 1, 'asian': 0, 'african': 0}})
    rig = HS.add_builtin_rig(h, 'default')
    HS.set_character_skin(AS.find_asset_absolute_path('middleage_caucasian_%s.mhmat' % ('female' if female else 'male'), asset_subdir='skins'), h)
    add = lambda sub, fn, t: HS.add_mhclo_asset(AS.find_asset_absolute_path(fn, asset_subdir=sub), h, asset_type=t)
    suit = next((s for words, s in OUTFIT if any(w in label for w in words)), 'male_casualsuit06')
    cloth = add('clothes', suit + '.mhclo', 'Clothes')
    tint(cloth, lin(job['color']), lift=(0.0, 1.0, 0.7, 1.0))
    add('clothes', 'shoes0%d.mhclo' % rnd.choice([1, 3, 4]), 'Clothes')
    hair = add('hair', rnd.choice(['short02', 'short04', 'short01']) + '.mhclo', 'Hair')
    tint(hair, lin(rnd.choice(['#2a211c', '#5a3a22', '#8a6240', '#9c9a96'])))
    arms_down(rig)
    world(lin('#8a9590'), 0.5)
    area((0, -3, 4), (0, 0, 1), 260, 3, (0.9, 1, 0.95))
    area((2, 2, 3), (0, 0, 1), 120, 2)
    cam = camera((0, -12, 0.95 + 12 * 0.3), (0, 0, 0.9), ortho=1.95)
    return shoot('f-' + job['key'])

# ── Kør ──────────────────────────────────────────────────────────────────────
def main():
    os.makedirs(ART, exist_ok=True)
    jobs = json.load(open(os.path.join(ROOT, '3d', 'jobs.json'), encoding='utf-8'))
    man_path = os.path.join(ART, 'manifest.json')
    man = json.load(open(man_path)) if os.path.exists(man_path) else {'p': {}, 'ph': {}, 'cc': {}, 'f': {}}
    plan = [('p', jobs['portraits'], portrait), ('ph', jobs['photos'], photo), ('cc', jobs['cctv'], cctv), ('f', jobs['figs'], fig)]
    only = ARGS[ARGS.index('--kun') + 1].split(',') if '--kun' in ARGS else None
    for kind, lst, fn in plan:
        if only and kind not in only:
            continue
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
