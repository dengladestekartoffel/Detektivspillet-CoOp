// Laver 3d/jobs.json: en liste over de billeder, Blender skal tegne.
// Brug: node 3d/jobs.js 9 10 11   (sagsnumre; uden tal = alle sager)
// Nøglerne er de samme, som spor.js slår op i window.ART, så billederne passer til sagerne.
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const stub = { appendChild() {}, querySelectorAll: () => [], addEventListener() {} };
const ctx = { window: {}, document: { createElement: () => ({}), head: stub, addEventListener() {}, querySelectorAll: () => [] }, localStorage: { getItem: () => null, setItem() {} }, console };
ctx.window.KK = [];
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, 'spor.js'), 'utf8') + ';window.SPOR=SPOR;', ctx);
const KK = ctx.window.KK; ctx.KK = KK;
for (const f of fs.readdirSync(path.join(root, 'cases')).sort()) vm.runInContext(fs.readFileSync(path.join(root, 'cases', f), 'utf8'), ctx);
const { hash, look } = ctx.window.SPOR;
const want = process.argv.slice(2).map(Number);
const cases = KK.filter(c => !want.length || want.includes(c.nr));
const SKIN = ['#f3d6bd', '#e9c19f', '#d6a27a', '#b37c54', '#8c5b3b', '#5f3c27'];
const BG = { wood: ['#8b6440', '#7a5534'], tile: ['#cfd2cf', '#b9bdb9'], carpet: ['#6b2f35', '#5e282e'], grass: ['#4c6b35', '#43602e'], asphalt: ['#4a4a4a', '#3f3f3f'], paper: ['#efe9da', '#e4dcc8'], snow: ['#e8eef2', '#dbe3e9'], stone: ['#8d8a83', '#7f7c75'], deck: ['#9a7550', '#86643f'], sand: ['#d9c294', '#cdb585'] };
const jobs = { portraits: [], photos: [], cctv: [], figs: [] }, figSeen = new Set();
const person = (name, l) => { const L = look(l, name); jobs.portraits.push({ key: String(hash(name)), name, ...L, skin: SKIN[L.skin] || L.skin }); };
for (const c of cases) {
  person(c.victim, c.victimLook);
  c.options[0].forEach((v, k) => person(v, c.looks && c.looks[k]));
  for (const e of c.evidence.flat()) {
    if (e.type === 'photo') jobs.photos.push({ key: String(hash(JSON.stringify({ bg: e.bg, items: e.items }))), case: c.nr, bg: e.bg || 'wood', colors: BG[e.bg] || BG.wood, items: e.items || [] });
    if (e.type === 'cctv') {
      jobs.cctv.push({ key: String(hash(JSON.stringify(e.doors || []))), case: c.nr, doors: e.doors || [] });
      for (const [label, col] of e.cast || []) { const key = col.replace('#', '') + '-' + hash(label); if (!figSeen.has(key)) { figSeen.add(key); jobs.figs.push({ key, label, color: col }); } }
    }
  }
}
fs.writeFileSync(path.join(__dirname, 'jobs.json'), JSON.stringify(jobs, null, 1));
console.log(`${cases.length} sager: ${jobs.portraits.length} portrætter, ${jobs.photos.length} fotos, ${jobs.cctv.length} videobaggrunde, ${jobs.figs.length} figurer`);
