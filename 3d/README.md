# 3D-grafik med Blender og MakeHuman

`3d/render.py` tegner spillets grafik i 3D og skriver den i `art/`:

- **Portrætter** af offer og mistænkte (`p-*.webp`), bygget med MakeHuman ud fra beskrivelsen i sagen
- **Gerningsstedsfotos** (`ph-*.webp`): gulv og genstande set oppefra. Markører og målestok lægges ovenpå af spillet.
- **Overvågning**: gangen (`cc-*.webp`) og figurerne (`f-*.webp`), som spillet flytter rundt

`art/art.js` fortæller `spor.js`, hvilke billeder der findes. Mangler et billede, tegner spillet sporet som før.

## Opsætning (én gang)

1. Blender som Python-modul: `pip install bpy pillow`
2. MPFB2 (MakeHuman til Blender): `git clone --depth 1 https://github.com/makehumancommunity/mpfb2` og læg en
   symlink fra `~/.config/blender/<version>/extensions/user_default/mpfb` til `mpfb2/src/mpfb`.
3. MakeHumans "system assets" (CC0) fra
   https://files.makehumancommunity.org/asset_packs/makehuman_system_assets/makehuman_system_assets_cc0.zip,
   pakket ud i MPFB's datamappe: `~/.config/blender/<version>/extensions/.user/user_default/mpfb/data/`

## Brug

    node 3d/jobs.js 9 10 11      # vælg sager (uden tal: alle sager)
    python 3d/render.py          # tegn det, der mangler
    python 3d/render.py --alt    # tegn alt igen
    python 3d/render.py --kun p  # kun portrætter (p, ph, cc, f)

MakeHuman-modellerne og -teksturerne er CC0. MPFB2-koden er GPL, men den bruges kun som værktøj og følger ikke med spillet.
