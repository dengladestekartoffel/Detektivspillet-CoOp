'use strict';
// Kriminalkludder · spor-motor.
// Tegner sporene i en sag: dokumenter, obduktionsrapporter, mobiltelefoner, computere,
// lydoptagelser, overvågningsvideo, gerningsstedsfotos, gerningsstedsskitser og portrætter.
// Sagerne selv ligger i cases/*.js og registrerer sig med KK.push({...}).
window.KK = window.KK || [];
const SPOR = (() => {
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const nl = s => esc(s).replace(/\n/g, '<br>');
function hash(s){let h=2166136261;for(const c of String(s)){h^=c.charCodeAt(0);h=Math.imul(h,16777619);}return h>>>0;}
function rng(seed){let a=hash(seed);return()=>{a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
const pick=(r,arr)=>arr[Math.floor(r()*arr.length)];

// ── Portrætter ───────────────────────────────────────────────────────────────
const SKIN=['#f3d6bd','#e9c19f','#d6a27a','#b37c54','#8c5b3b','#5f3c27'];
const HAIRC={sort:'#1f1a17',brun:'#5a3a22',lysbrun:'#8a6240',blond:'#d8b56a',rød:'#a5482a',grå:'#9c9a96',hvid:'#e4e1da',sølv:'#bfc2c4'};
function look(l,seed){const r=rng(seed);l=l||{};const sex=l.sex||(r()<.5?'f':'m');return{sex,skin:l.skin??Math.floor(r()*4),hair:l.hair||(sex==='f'?pick(r,['long','bob','bun','curly','long']):pick(r,['short','short','bald','curly','short'])),hc:HAIRC[l.hc]||l.hc||pick(r,Object.values(HAIRC).slice(0,5)),beard:l.beard||(sex==='m'?pick(r,['none','none','stubble','full','moustache']):'none'),glasses:l.glasses??(r()<.3),age:l.age||pick(r,['young','mid','mid','old']),shirt:l.shirt||pick(r,['#3d5a73','#6b3a3a','#3e5b46','#4b4b52','#7a6a4f','#2f3b55','#8a5a2b','#5b3f66']),earrings:l.earrings??(sex==='f'&&r()<.5),collar:l.collar||pick(r,['v','round','shirt','turtle'])};}
function portrait(name,l,opt){opt=opt||{};const L=look(l,name),sk=SKIN[L.skin]||L.skin,f=L.sex==='f',id='p'+hash(name+(opt.mug?'m':''));
const bg=opt.mug?`<rect width="120" height="150" fill="#cfccc3"/>${[20,40,60,80,100,120,140].map(y=>`<line x1="0" x2="120" y1="${y}" y2="${y}" stroke="#9d998e" stroke-width=".8"/><text x="3" y="${y-2}" font-size="6" fill="#7c786e" font-family="monospace">${(200-y)/100}m</text>`).join('')}`:`<defs><radialGradient id="${id}g" cx=".5" cy=".35" r=".8"><stop offset="0" stop-color="#e9dcc0"/><stop offset="1" stop-color="#a99a7c"/></radialGradient></defs><rect width="120" height="150" fill="url(#${id}g)"/>`;
const hairBack=L.hair==='long'?`<path d="M31,58 C27,26 93,26 89,58 L95,116 C80,124 40,124 25,116 Z" fill="${L.hc}"/>`:L.hair==='bob'?`<path d="M31,58 C27,26 93,26 89,58 L92,96 C80,101 40,101 28,96 Z" fill="${L.hc}"/>`:L.hair==='bun'?`<circle cx="60" cy="27" r="12" fill="${L.hc}"/>`:'';
const shirt=`<path d="M8,150 C12,120 34,108 60,108 C86,108 108,120 112,150 Z" fill="${L.shirt}"/>`+(L.collar==='v'?`<path d="M48,108 L60,128 L72,108" fill="${sk}" stroke="rgba(0,0,0,.25)"/>`:L.collar==='shirt'?`<path d="M46,106 L60,122 L74,106 L70,114 L60,126 L50,114 Z" fill="#f1ede4" stroke="rgba(0,0,0,.3)"/>`:L.collar==='turtle'?`<rect x="47" y="98" width="26" height="16" rx="6" fill="${L.shirt}" stroke="rgba(0,0,0,.25)"/>`:`<path d="M48,108 Q60,118 72,108" fill="${sk}" stroke="rgba(0,0,0,.25)"/>`);
const neck=`<rect x="50" y="84" width="20" height="28" rx="6" fill="${sk}"/><rect x="50" y="84" width="20" height="10" fill="rgba(0,0,0,.12)"/>`;
const head=`<ellipse cx="36" cy="64" rx="4.5" ry="7" fill="${sk}"/><ellipse cx="84" cy="64" rx="4.5" ry="7" fill="${sk}"/><ellipse cx="60" cy="62" rx="${f?23:25}" ry="${f?29:31}" fill="${sk}"/>`;
const ear=L.earrings?`<circle cx="36" cy="73" r="2.2" fill="#d7b350"/><circle cx="84" cy="73" r="2.2" fill="#d7b350"/>`:'';
const hairFront=L.hair==='bald'?`<path d="M36,60 C34,50 38,46 40,52 Z M84,60 C86,50 82,46 80,52 Z" fill="${L.hc}"/>`:L.hair==='curly'?[...Array(11)].map((_,i)=>{const a=Math.PI*(1.05+i*.09);return `<circle cx="${60+Math.cos(a)*24}" cy="${56+Math.sin(a)*24}" r="8" fill="${L.hc}"/>`;}).join(''):L.hair==='short'?`<path d="M35,57 C31,28 89,28 85,57 C80,42 46,38 35,57 Z" fill="${L.hc}"/>`:`<path d="M35,62 C30,24 92,24 85,60 C78,40 58,36 48,46 C42,50 38,56 35,62 Z" fill="${L.hc}"/>`;
const lines=L.age==='old'?`<path d="M48,44 Q60,41 72,44 M50,48 Q60,46 70,48 M44,74 Q46,80 49,82 M76,74 Q74,80 71,82" stroke="rgba(80,50,30,.35)" fill="none"/>`:L.age==='mid'?`<path d="M50,46 Q60,44 70,46" stroke="rgba(80,50,30,.22)" fill="none"/>`:'';
const face=`<path d="M45,54 Q50,51 55,54 M65,54 Q70,51 75,54" stroke="${L.hair==='bald'?'#5a4636':L.hc}" stroke-width="2" fill="none" stroke-linecap="round"/><ellipse cx="50" cy="61" rx="3" ry="2.2" fill="#2a211c"/><ellipse cx="70" cy="61" rx="3" ry="2.2" fill="#2a211c"/><path d="M60,62 L57,74 L62,75" stroke="rgba(70,40,25,.5)" fill="none" stroke-width="1.4"/>${f?`<path d="M53,83 Q60,80 67,83 Q60,88 53,83 Z" fill="#a85a55"/>`:`<path d="M53,83 Q60,85.5 67,83" stroke="#6b3d33" stroke-width="2" fill="none" stroke-linecap="round"/>`}`;
const beard=L.beard==='full'?`<path d="M36,66 C38,100 82,100 84,66 C80,80 72,90 60,90 C48,90 40,80 36,66 Z M50,79 Q60,76 70,79 L68,82 Q60,80 52,82 Z" fill="${L.hc}"/>`:L.beard==='stubble'?`<path d="M38,70 C42,96 78,96 82,70 C78,86 70,92 60,92 C50,92 42,86 38,70 Z" fill="${L.hc}" opacity=".3"/>`:L.beard==='moustache'?`<path d="M50,80 Q60,74 70,80 Q60,78 50,80 Z" fill="${L.hc}" stroke="${L.hc}" stroke-width="2"/>`:'';
const gl=L.glasses?`<g fill="rgba(255,255,255,.15)" stroke="#2a2420" stroke-width="1.8"><circle cx="50" cy="61" r="7"/><circle cx="70" cy="61" r="7"/><path d="M57,61 L63,61 M43,60 L37,58 M77,60 L83,58" fill="none"/></g>`:'';
const tag=opt.mug&&opt.tag?`<rect x="30" y="128" width="60" height="16" fill="#1b1b1b"/><text x="60" y="139" font-size="8" fill="#eee" text-anchor="middle" font-family="monospace">${esc(opt.tag)}</text>`:'';
return `<svg class="portrait${opt.victim?' victim':''}" viewBox="0 0 120 150" role="img" aria-label="${esc((opt.victim?'Foto af ':'Portræt af ')+name)}">${bg}${hairBack}${shirt}${neck}${head}${ear}${lines}${face}${beard}${hairFront}${gl}${tag}</svg>`;}

// ── Ikoner til gerningsstedsfotos ───────────────────────────────────────────
const IC={
glass:c=>`<path d="M12,4 L28,4 L25,20 Q20,25 15,20 Z M20,23 L20,34 M13,35 L27,35" fill="${c||'rgba(200,220,230,.5)'}" stroke="#333" stroke-width="1.5"/><path d="M14,12 L26,12 L25,18 Q20,22 15,18 Z" fill="#7a1f2a" opacity=".8"/>`,
bottle:c=>`<path d="M17,3 L23,3 L23,11 Q29,15 29,21 L29,36 L11,36 L11,21 Q11,15 17,11 Z" fill="${c||'#2f5d3a'}" stroke="#222" stroke-width="1.5"/><rect x="13" y="20" width="14" height="9" fill="#efe3c8"/>`,
knife:c=>`<path d="M4,30 L26,8 Q30,6 31,9 L12,32 Z" fill="${c||'#c9ccd0'}" stroke="#333" stroke-width="1.3"/><path d="M12,32 L6,38 L2,34 L8,28" fill="#5a3a22" stroke="#222"/>`,
key:c=>`<circle cx="11" cy="20" r="7" fill="none" stroke="${c||'#b8952e'}" stroke-width="3"/><path d="M18,20 L36,20 M30,20 L30,26 M34,20 L34,25" stroke="${c||'#b8952e'}" stroke-width="3"/>`,
footprint:c=>`<path d="M14,36 Q8,26 12,16 Q15,8 21,9 Q27,11 26,20 Q24,30 20,36 Z" fill="${c||'#4a3a2a'}" opacity=".85"/><g fill="${c||'#4a3a2a'}"><circle cx="13" cy="5" r="2.4"/><circle cx="18" cy="3" r="2.2"/><circle cx="23" cy="4" r="2"/><circle cx="27" cy="6" r="1.8"/></g>`,
shoe:c=>`<path d="M4,28 L6,14 L16,14 Q20,22 30,24 Q37,26 36,32 L4,32 Z" fill="${c||'#3a2a20'}" stroke="#111" stroke-width="1.3"/>`,
glove:c=>`<path d="M12,36 L10,18 L9,8 Q10,5 12,8 L14,17 L14,5 Q16,2 18,5 L19,16 L20,4 Q22,2 24,5 L24,17 L26,8 Q28,6 29,9 L28,22 Q31,18 33,20 L28,30 L26,36 Z" fill="${c||'#f2f0ea'}" stroke="#444" stroke-width="1.2"/>`,
phone:c=>`<rect x="11" y="3" width="18" height="34" rx="3" fill="${c||'#1c1c1e'}" stroke="#000"/><rect x="13" y="7" width="14" height="25" fill="#33475a"/><path d="M15,10 L25,24 M24,9 L16,22" stroke="#9ab" stroke-width=".6"/>`,
note:c=>`<path d="M7,6 L33,4 L34,34 L8,36 Z" fill="${c||'#f6efd0'}" stroke="#777"/><path d="M11,12 L30,11 M11,17 L29,16 M11,22 L26,21 M11,27 L22,27" stroke="#3b4c8a" stroke-width="1"/>`,
pills:c=>`<rect x="5" y="14" width="16" height="7" rx="3.5" fill="${c||'#e8e2d0'}" stroke="#555"/><rect x="5" y="14" width="8" height="7" rx="3.5" fill="#b33" stroke="#555"/><circle cx="27" cy="26" r="5" fill="#fff" stroke="#555"/><circle cx="16" cy="30" r="4" fill="#fff" stroke="#555"/>`,
cup:c=>`<path d="M8,12 L28,12 L26,32 Q18,36 10,32 Z" fill="${c||'#f1ece2'}" stroke="#444" stroke-width="1.4"/><path d="M28,16 Q35,17 33,24 Q31,28 27,27" fill="none" stroke="#444" stroke-width="1.6"/><ellipse cx="18" cy="13" rx="9" ry="2" fill="#4a2a17"/>`,
ring:c=>`<circle cx="20" cy="22" r="9" fill="none" stroke="${c||'#d8b53e'}" stroke-width="3.5"/><path d="M15,13 L20,7 L25,13 Z" fill="#cfe6f7" stroke="#789"/>`,
watch:c=>`<rect x="15" y="2" width="10" height="36" rx="3" fill="${c||'#5a3a22'}"/><circle cx="20" cy="20" r="9" fill="#efe9dc" stroke="#555" stroke-width="2"/><path d="M20,20 L20,14 M20,20 L24,22" stroke="#222" stroke-width="1.3"/>`,
candlestick:c=>`<path d="M14,36 L26,36 L23,31 L21,31 L21,12 L23,9 L17,9 L19,12 L19,31 L17,31 Z" fill="${c||'#c49a3a'}" stroke="#6a5020"/><rect x="18" y="3" width="4" height="6" fill="#f3efe2"/>`,
ticket:c=>`<path d="M4,12 L36,12 L36,17 Q33,20 36,23 L36,28 L4,28 L4,23 Q7,20 4,17 Z" fill="${c||'#e9c46a'}" stroke="#7a5a1a"/><path d="M10,17 L28,17 M10,22 L22,22" stroke="#7a5a1a"/>`,
cigarette:c=>`<rect x="4" y="18" width="28" height="5" fill="${c||'#f4f1ea'}" stroke="#888" stroke-width=".8"/><rect x="4" y="18" width="9" height="5" fill="#d0893e"/><circle cx="33" cy="20.5" r="2" fill="#555"/><path d="M34,16 Q36,12 34,8" stroke="#aaa" fill="none"/>`,
book:c=>`<rect x="7" y="6" width="26" height="30" rx="2" fill="${c||'#7a2e2e'}" stroke="#3a1414"/><rect x="10" y="6" width="3" height="30" fill="rgba(0,0,0,.25)"/><rect x="16" y="12" width="13" height="4" fill="#d9c27a"/>`,
hammer:c=>`<rect x="18" y="12" width="4" height="26" fill="#8a5a2b" stroke="#4a2a10"/><path d="M8,6 L32,6 L32,13 L8,13 Q5,9.5 8,6 Z" fill="${c||'#777'}" stroke="#333"/>`,
rope:c=>`<path d="M6,30 C6,10 34,10 32,22 C30,32 14,30 16,20 C18,14 26,16 24,22" fill="none" stroke="${c||'#b9965a'}" stroke-width="4" stroke-linecap="round"/>`,
syringe:c=>`<path d="M6,34 L10,30 M10,30 L28,12 L32,16 L14,34 Z M28,12 L31,9 M30,6 L36,12" stroke="#444" stroke-width="1.5" fill="${c||'rgba(190,220,240,.6)'}"/>`,
lipstick:c=>`<rect x="13" y="20" width="14" height="16" rx="2" fill="#222"/><rect x="15" y="12" width="10" height="9" fill="#c9a43a"/><path d="M16,12 L16,5 L24,8 L24,12 Z" fill="${c||'#b1203a'}"/>`,
wrench:c=>`<path d="M10,34 L26,14 M26,14 Q24,6 31,4 L28,9 L31,12 L36,9 Q34,16 26,14 M10,34 Q6,36 5,32 Q7,30 10,34" stroke="${c||'#6e7378'}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
chess:c=>`<path d="M12,36 L28,36 L26,31 L14,31 Z M15,31 L17,20 L23,20 L25,31 M14,20 L26,20 L24,16 L16,16 Z M17,16 L17,9 L20,6 L23,9 L23,16" fill="${c||'#222'}" stroke="#555"/>`,
horseshoe:c=>`<path d="M10,34 L10,18 Q10,6 20,6 Q30,6 30,18 L30,34" fill="none" stroke="${c||'#777'}" stroke-width="6"/>`,
wallet:c=>`<rect x="5" y="10" width="30" height="22" rx="3" fill="${c||'#4a2e1c'}" stroke="#2a180c"/><path d="M5,16 L35,16" stroke="#2a180c"/><rect x="24" y="19" width="11" height="7" rx="2" fill="#6a4630"/>`,
laptop:c=>`<rect x="8" y="8" width="24" height="17" rx="1.5" fill="${c||'#2b2e33'}"/><rect x="10" y="10" width="20" height="13" fill="#4a6a8a"/><path d="M4,27 L36,27 L33,31 L7,31 Z" fill="#9aa0a6"/>`,
earring:c=>`<circle cx="20" cy="10" r="2" fill="none" stroke="${c||'#d8b53e'}" stroke-width="1.6"/><path d="M20,12 L20,20" stroke="${c||'#d8b53e'}" stroke-width="1.4"/><circle cx="20" cy="25" r="5" fill="#6aa6c9" stroke="${c||'#d8b53e'}" stroke-width="1.6"/>`,
button:c=>`<circle cx="20" cy="20" r="9" fill="${c||'#6b4a2b'}" stroke="#333"/><g fill="#222"><circle cx="17" cy="17" r="1.4"/><circle cx="23" cy="17" r="1.4"/><circle cx="17" cy="23" r="1.4"/><circle cx="23" cy="23" r="1.4"/></g>`,
stain:c=>`<path d="M8,20 Q6,10 16,9 Q22,4 28,10 Q36,14 32,22 Q34,32 24,31 Q16,36 11,29 Q4,27 8,20 Z" fill="${c||'#6e1a1a'}" opacity=".55"/>`,
badge:c=>`<rect x="6" y="8" width="28" height="24" rx="2" fill="${c||'#f2f2f2'}" stroke="#555"/><rect x="9" y="12" width="9" height="11" fill="#9aa"/><path d="M21,14 L31,14 M21,18 L29,18 M9,27 L31,27" stroke="#555"/><rect x="17" y="3" width="6" height="6" fill="none" stroke="#c22" stroke-width="2"/>`,
camera:c=>`<rect x="5" y="12" width="30" height="20" rx="3" fill="${c||'#2a2a2a'}"/><rect x="11" y="8" width="10" height="5" fill="#2a2a2a"/><circle cx="20" cy="22" r="7" fill="#556" stroke="#999" stroke-width="2"/>`,
flower:c=>`<path d="M20,36 L20,18" stroke="#3e6b2f" stroke-width="2"/><g fill="${c||'#c2334d'}"><circle cx="20" cy="10" r="4"/><circle cx="14" cy="14" r="4"/><circle cx="26" cy="14" r="4"/><circle cx="16" cy="20" r="4"/><circle cx="24" cy="20" r="4"/></g><circle cx="20" cy="15" r="3" fill="#e6c34a"/>`,
paper:c=>`<path d="M8,4 L28,4 L34,10 L34,36 L8,36 Z" fill="${c||'#fbfaf5'}" stroke="#777"/><path d="M28,4 L28,10 L34,10" fill="#ddd" stroke="#777"/><path d="M12,16 L30,16 M12,21 L30,21 M12,26 L24,26" stroke="#888"/>`,
coin:c=>`<circle cx="16" cy="18" r="8" fill="${c||'#c9a43a'}" stroke="#7a5a1a"/><circle cx="25" cy="24" r="8" fill="${c||'#c9a43a'}" stroke="#7a5a1a"/>`,
scarf:c=>`<path d="M6,10 Q20,4 34,10 L30,18 Q20,13 10,18 Z M24,15 L30,36 L24,36 L19,16" fill="${c||'#8a2b45'}" stroke="#4a1424"/>`,
microphone:c=>`<circle cx="20" cy="10" r="7" fill="#777" stroke="#333"/><path d="M20,17 L20,34 M13,36 L27,36" stroke="${c||'#333'}" stroke-width="3"/>`,
};
function icon(name,c,size){const f=IC[name]||IC.paper;return `<svg viewBox="0 0 40 40" width="${size||40}" height="${size||40}" aria-hidden="true">${f(c)}</svg>`;}
const BG={wood:['#8b6440','#7a5534'],tile:['#cfd2cf','#b9bdb9'],carpet:['#6b2f35','#5e282e'],grass:['#4c6b35','#43602e'],asphalt:['#4a4a4a','#3f3f3f'],paper:['#efe9da','#e4dcc8'],snow:['#e8eef2','#dbe3e9'],stone:['#8d8a83','#7f7c75'],deck:['#9a7550','#86643f'],sand:['#d9c294','#cdb585']};
function photo(p,label){const id='ph'+hash(JSON.stringify(p));const [a,b]=BG[p.bg]||BG.wood;const pat=p.bg==='tile'?`<pattern id="${id}" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="${a}"/><path d="M0,0 L40,0 L40,40" stroke="${b}" stroke-width="2" fill="none"/></pattern>`:p.bg==='wood'||p.bg==='deck'?`<pattern id="${id}" width="300" height="24" patternUnits="userSpaceOnUse"><rect width="300" height="24" fill="${a}"/><path d="M0,23 L300,23" stroke="${b}" stroke-width="2"/><path d="M0,9 Q80,6 160,10 T300,8" stroke="${b}" fill="none" opacity=".6"/></pattern>`:`<pattern id="${id}" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="${a}"/><circle cx="2" cy="3" r="1" fill="${b}"/><circle cx="6" cy="6" r=".8" fill="${b}"/></pattern>`;
const items=(p.items||[]).map((it,i)=>{const [n,x,y,s,r,c]=it,sc=s||1.4;return `<g transform="translate(${x},${y}) rotate(${r||0}) scale(${sc}) translate(-20,-20)">${IC[n]?IC[n](c):IC.paper()}</g><g transform="translate(${x+28*sc*.6},${y+22*sc*.6})"><path d="M0,-11 L10,7 L-10,7 Z" fill="#f2c230" stroke="#6a5010"/><text y="5" font-size="9" text-anchor="middle" font-family="Arial" font-weight="bold">${i+1}</text></g>`;}).join('');
return `<figure class="crimephoto"><svg viewBox="0 0 320 200" role="img" aria-label="${esc(label||'Gerningsstedsfoto')}"><defs>${pat}<radialGradient id="${id}v" cx=".5" cy=".5" r=".75"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".55"/></radialGradient></defs><rect width="320" height="200" fill="url(#${id})"/>${items}<g transform="translate(14,182)"><rect width="100" height="10" fill="#f4f4f0" stroke="#333" stroke-width=".6"/>${[...Array(11)].map((_,i)=>`<line x1="${i*10}" x2="${i*10}" y1="0" y2="${i%5?4:7}" stroke="#222" stroke-width=".7"/>`).join('')}<text x="104" y="8" font-size="7" fill="#f4f4f0" font-family="monospace">10 cm</text></g><rect width="320" height="200" fill="url(#${id}v)"/><text x="312" y="14" font-size="8" fill="#ffd27a" text-anchor="end" font-family="monospace">${esc(p.stamp||'')}</text></svg>${p.caption?`<figcaption>${nl(p.caption)}</figcaption>`:''}</figure>`;}

// ── Gerningsstedsskitse (set oppefra) ───────────────────────────────────────
function furn(t,w,h,lab){const s='stroke="#2c3b4f" stroke-width="1.4"',f='fill="#f6f1e2"';
switch(t){case'table':return `<rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h}" rx="3" ${f} ${s}/>`;
case'roundtable':return `<circle r="${w/2}" ${f} ${s}/>`;
case'chair':return `<rect x="-7" y="-7" width="14" height="14" rx="2" ${f} ${s}/><rect x="-7" y="-9" width="14" height="4" fill="#2c3b4f"/>`;
case'sofa':return `<rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h}" rx="5" ${f} ${s}/><rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h*.3}" rx="4" fill="#d9cfb6" ${s}/>`;
case'bed':return `<rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h}" rx="3" ${f} ${s}/><rect x="${-w/2+4}" y="${-h/2+4}" width="${w-8}" height="${h*.18}" rx="3" fill="#e2dccb" ${s}/>`;
case'desk':return `<rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h}" ${f} ${s}/><rect x="${-w/4}" y="${-h/2+3}" width="${w/2}" height="5" fill="#2c3b4f"/>`;
case'shelf':return `<rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h}" fill="#e9e1cc" ${s}/>${[...Array(Math.max(1,Math.floor(w/10)))].map((_,i)=>`<line x1="${-w/2+i*10+5}" x2="${-w/2+i*10+5}" y1="${-h/2}" y2="${h/2}" stroke="#2c3b4f" stroke-width=".6"/>`).join('')}`;
case'counter':return `<rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h}" fill="#e2d6b8" ${s}/><line x1="${-w/2}" x2="${w/2}" y1="${-h/2+3}" y2="${-h/2+3}" stroke="#2c3b4f" stroke-width=".6"/>`;
case'plant':return `<circle r="${w/2||8}" fill="#cfe0c1" ${s}/><path d="M0,0 L${w/3},${-w/4} M0,0 L${-w/3},${-w/5} M0,0 L${w/6},${w/3}" ${s}/>`;
case'rug':return `<rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h}" fill="none" stroke="#9a6a4a" stroke-dasharray="4 3" stroke-width="1.4"/>`;
case'stove':return `<rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h}" ${f} ${s}/>${[[-1,-1],[1,-1],[-1,1],[1,1]].map(([a,b])=>`<circle cx="${a*w/4}" cy="${b*h/4}" r="${Math.min(w,h)/7}" fill="none" ${s}/>`).join('')}`;
case'sink':return `<rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h}" ${f} ${s}/><ellipse rx="${w/3}" ry="${h/3}" fill="none" ${s}/>`;
case'stairs':return `<rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h}" ${f} ${s}/>${[...Array(Math.floor(h/6))].map((_,i)=>`<line x1="${-w/2}" x2="${w/2}" y1="${-h/2+i*6}" y2="${-h/2+i*6}" stroke="#2c3b4f" stroke-width=".7"/>`).join('')}`;
case'piano':return `<path d="M${-w/2},${-h/2} L${w/2},${-h/2} L${w/2},${h/2} Q${-w/4},${h/2} ${-w/2},0 Z" ${f} ${s}/>`;
case'car':return `<rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h}" rx="${h/3}" fill="#dfe4ea" ${s}/><rect x="${-w/4}" y="${-h/2+3}" width="${w/2}" height="${h-6}" rx="3" fill="#b8c4d0" ${s}/>`;
case'locker':return [...Array(Math.max(1,Math.floor(w/14)))].map((_,i)=>`<rect x="${-w/2+i*14}" y="${-h/2}" width="14" height="${h}" fill="#dfe4e8" ${s}/>`).join('');
case'stage':return `<rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h}" fill="#e9dcc0" ${s}/><path d="M${-w/2},${-h/2} L${w/2},${h/2} M${w/2},${-h/2} L${-w/2},${h/2}" stroke="#2c3b4f" stroke-width=".4"/>`;
case'tree':return `<circle r="${w/2||14}" fill="#d2e2c0" stroke="#4a6a3a" stroke-width="1.4" stroke-dasharray="5 2"/><circle r="3" fill="#4a6a3a"/>`;
case'barrel':return `<circle r="${w/2||9}" fill="#ead6b5" ${s}/><circle r="${(w/2||9)-3}" fill="none" ${s}/>`;
case'crate':return `<rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h}" fill="#ead6b5" ${s}/><path d="M${-w/2},${-h/2} L${w/2},${h/2} M${w/2},${-h/2} L${-w/2},${h/2}" ${s}/>`;
case'door':return `<rect x="0" y="-3" width="${w}" height="6" fill="#f6f1e2"/><path d="M0,0 L0,${-w} A${w},${w} 0 0,1 ${w},0" fill="none" stroke="#2c3b4f" stroke-width="1" stroke-dasharray="3 2"/>`;
case'window':return `<rect x="0" y="-3" width="${w}" height="6" fill="#f6f1e2" stroke="#2c3b4f" stroke-width="1"/><line x1="0" x2="${w}" y1="0" y2="0" stroke="#2c3b4f" stroke-width=".8"/>`;
case'wall':return `<rect x="0" y="-3" width="${w}" height="6" fill="#2c3b4f"/>`;
case'label':return `<text font-size="9" text-anchor="middle" fill="#2c3b4f" font-family="'Courier New',monospace" font-style="italic">${esc(lab)}</text>`;
default:return `<rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h}" ${f} ${s}/>`;}}
function sketch(sk,place){if(!sk)return '';const W=sk.w||400,H=sk.h||260;
const its=(sk.items||[]).map(([t,x,y,w,h,r,lab])=>`<g transform="translate(${x},${y}) rotate(${r||0})">${furn(t,w||20,h||20,lab)}</g>${lab&&t!=='label'?`<text x="${x}" y="${y+(h||20)/2+11}" font-size="8" text-anchor="middle" fill="#2c3b4f" font-family="'Courier New',monospace">${esc(lab)}</text>`:''}`).join('');
const body=sk.body?`<g transform="translate(${sk.body[0]},${sk.body[1]}) rotate(${sk.body[2]||0}) scale(${sk.body[3]||1})"><circle cy="-28" r="7" fill="none" stroke="#b3261e" stroke-width="2" stroke-dasharray="4 2"/><path d="M-6,-21 L-16,-12 L-27,-2 L-22,2 L-10,-7 L-9,10 L-14,34 L-8,35 L-1,14 L1,14 L8,35 L14,34 L9,10 L10,-7 L22,2 L27,-2 L16,-12 L6,-21 Z" fill="none" stroke="#b3261e" stroke-width="2" stroke-dasharray="4 2" stroke-linejoin="round"/></g>`:'';
const mk=(sk.markers||[]).map(([n,x,y])=>`<g transform="translate(${x},${y})"><path d="M0,-9 L8,5 L-8,5 Z" fill="#f2c230" stroke="#6a5010"/><text y="4" font-size="8" text-anchor="middle" font-weight="bold" font-family="Arial">${n}</text></g>`).join('');
return `<figure class="sketch"><div class="sk-head"><span>GERNINGSSTEDSSKITSE</span><span>${esc(sk.title||place||'')}</span></div><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Skitse over fundstedet"><defs><pattern id="skg" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M10,0 L0,0 L0,10" fill="none" stroke="#c7d3de" stroke-width=".5"/></pattern></defs><rect width="${W}" height="${H}" fill="url(#skg)"/><rect x="12" y="12" width="${W-24}" height="${H-24}" fill="none" stroke="#2c3b4f" stroke-width="5"/>${its}${body}${mk}<g transform="translate(${W-30},${H-34})"><path d="M0,-12 L4,0 L0,-3 L-4,0 Z" fill="#2c3b4f"/><text y="10" font-size="9" text-anchor="middle" font-family="Arial">N</text></g></svg>${(sk.markers||[]).length?`<ol class="legend">${sk.markers.map(([n,,,t])=>`<li value="${n}">${esc(t)}</li>`).join('')}</ol>`:''}</figure>`;}

// ── Lokal tilstand for interaktive spor (ulåst telefon, åben app osv.). Gemmes kun på denne enhed.
const UIKEY='kriminalkludder-spor-ui';let UI={};try{UI=JSON.parse(localStorage.getItem(UIKEY)||'{}')||{};}catch(e){}
const ui=k=>UI[k]||(UI[k]={});function saveUI(){try{localStorage.setItem(UIKEY,JSON.stringify(UI));}catch(e){}}

// ── Mobiltelefon ────────────────────────────────────────────────────────────
function phone(s,k){const u=ui(k),locked=s.pin&&!u.open;let body;
if(locked){const n=(u.typed||'').length;body=`<div class="ph-lock"><div class="ph-time">${esc(s.lockTime||'23:41')}</div><div class="ph-date">${esc(s.lockDate||'')}</div>${(s.notifs||[]).map(n=>`<div class="ph-notif"><b>${esc(n[0])}</b><span>${esc(n[1])}</span></div>`).join('')}<div class="ph-dots ${u.err?'err':''}">${[0,1,2,3].map(i=>`<i class="${i<n?'on':''}"></i>`).join('')}</div><div class="ph-pad">${['1','2','3','4','5','6','7','8','9','','0','⌫'].map(d=>d?`<button data-act="pin" data-v="${d}" aria-label="${d==='⌫'?'Slet':d}">${d}</button>`:'<span></span>').join('')}</div>${s.pinHint?`<div class="ph-hint">${esc(s.pinHint)}</div>`:''}</div>`;}
else if(!u.app){const apps=[['msgs','💬','Beskeder'],['calls','📞','Opkald'],['photos','🖼','Fotos'],['notes','📝','Noter'],['maps','📍','Lokation'],['mail','✉️','Mail']].filter(a=>s[a[0]]&&s[a[0]].length);body=`<div class="ph-home"><div class="ph-time sm">${esc(s.lockTime||'23:41')}</div><div class="ph-apps">${apps.map(([a,i,l])=>`<button data-act="app" data-v="${a}"><span>${i}</span>${l}</button>`).join('')}</div></div>`;}
else{const a=u.app,bar=(t,back)=>`<div class="ph-bar"><button data-act="${back||'home'}">‹ ${back?'Tilbage':'Hjem'}</button><b>${esc(t)}</b><span></span></div>`;
if(a==='msgs'&&u.th!=null){const th=s.msgs[u.th];body=bar(th.with,'thread')+`<div class="ph-chat">${th.m.map(([who,t,txt])=>`<div class="bub ${who==='me'?'me':''}"><span>${nl(txt)}</span><small>${esc(t)}</small></div>`).join('')}</div>`;}
else if(a==='msgs')body=bar('Beskeder')+`<div class="ph-list">${s.msgs.map((th,i)=>`<button data-act="th" data-v="${i}"><b>${esc(th.with)}</b><span>${esc(th.m[th.m.length-1][2]).slice(0,60)}</span><small>${esc(th.m[th.m.length-1][1])}</small></button>`).join('')}</div>`;
else if(a==='calls')body=bar('Opkald')+`<div class="ph-list">${s.calls.map(([n,t,dir,dur])=>`<div class="row ${dir==='missed'?'missed':''}"><b>${dir==='out'?'↗':dir==='missed'?'✕':'↙'} ${esc(n)}</b><small>${esc(t)}${dur?' · '+esc(dur):''}</small></div>`).join('')}</div>`;
else if(a==='photos'&&u.ph!=null){const p=s.photos[u.ph];body=bar('Foto','photo')+`<div class="ph-photo">${photo(p,p.caption)}${p.meta?`<div class="ph-meta">${esc(p.meta)}</div>`:''}</div>`;}
else if(a==='photos')body=bar('Fotos')+`<div class="ph-grid">${s.photos.map((p,i)=>`<button data-act="ph" data-v="${i}" aria-label="Foto ${i+1}">${photo({...p,caption:''})}</button>`).join('')}</div>`;
else if(a==='notes')body=bar('Noter')+`<div class="ph-notes">${s.notes.map(([t,txt])=>`<div class="pn"><b>${esc(t)}</b><p>${nl(txt)}</p></div>`).join('')}</div>`;
else if(a==='maps')body=bar('Lokationshistorik')+`<div class="ph-list">${s.maps.map(([t,p,d])=>`<div class="row"><b>📍 ${esc(p)}</b><small>${esc(t)}${d?' · '+esc(d):''}</small></div>`).join('')}</div>`;
else if(a==='mail')body=bar('Mail')+`<div class="ph-notes">${s.mail.map(m=>`<div class="pn"><small>${esc(m.time)} · fra ${esc(m.from)}</small><b>${esc(m.subject)}</b><p>${nl(m.body)}</p></div>`).join('')}</div>`;}
return `<div class="phone"><div class="ph-notch"></div><div class="ph-screen" style="--wall:${esc(s.wall||'linear-gradient(160deg,#2c3e50,#4a2c4a)')}">${body}</div></div>${s.owner?`<p class="small">Tilhører: ${esc(s.owner)}</p>`:''}`;}

// ── Computer ────────────────────────────────────────────────────────────────
function computer(s,k){const u=ui(k),locked=s.password&&!u.open;let body;
if(locked)body=`<div class="pc-login"><div class="pc-avatar">${esc((s.user||'?').slice(0,1))}</div><b>${esc(s.user||'Bruger')}</b><form data-act="pw"><input type="password" placeholder="Adgangskode" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Adgangskode"><button>→</button></form>${u.err?'<div class="pc-err">Forkert adgangskode</div>':''}${s.hint?`<div class="pc-hint">Hint: ${esc(s.hint)}</div>`:''}</div>`;
else{const tabs=[['mail','✉️ Mail'],['files','📁 Dokumenter'],['web','🌐 Historik'],['cal','📅 Kalender'],['trash','🗑 Papirkurv']].filter(t=>s[t[0]]&&s[t[0]].length),a=u.app||tabs[0]?.[0];let inner='';
if(a==='mail'||a==='files'||a==='trash'){const L=s[a],i=u.item;inner=i!=null&&L[i]?`<button class="pc-back" data-act="item" data-v="">‹ Tilbage</button><div class="pc-doc">${a==='mail'?`<div class="pc-mh"><b>${esc(L[i].subject)}</b><small>Fra: ${esc(L[i].from)}${L[i].to?' · Til: '+esc(L[i].to):''} · ${esc(L[i].time)}</small></div>`:`<div class="pc-mh"><b>${esc(L[i].name)}</b>${L[i].time?`<small>Ændret ${esc(L[i].time)}</small>`:''}</div>`}<div class="pc-body">${nl(L[i].body)}</div></div>`:`<div class="pc-list">${L.map((m,j)=>`<button data-act="item" data-v="${j}">${a==='mail'?`<b>${esc(m.from)}</b><span>${esc(m.subject)}</span><small>${esc(m.time)}</small>`:`<b>📄 ${esc(m.name)}</b><span></span><small>${esc(m.time||'')}</small>`}</button>`).join('')}</div>`;}
else if(a==='web')inner=`<div class="pc-list">${s.web.map(([t,q])=>`<div class="row"><small>${esc(t)}</small><span>${esc(q)}</span></div>`).join('')}</div>`;
else if(a==='cal')inner=`<div class="pc-list">${s.cal.map(([t,q])=>`<div class="row"><small>${esc(t)}</small><span>${esc(q)}</span></div>`).join('')}</div>`;
body=`<div class="pc-top">${tabs.map(([t,l])=>`<button data-act="papp" data-v="${t}" class="${t===a?'on':''}">${l}</button>`).join('')}</div><div class="pc-win">${inner}</div>`;}
return `<div class="laptop"><div class="pc-screen">${body}</div><div class="pc-base"></div></div>${s.owner?`<p class="small">Tilhører: ${esc(s.owner)}</p>`:''}`;}

// ── Obduktionsrapport ───────────────────────────────────────────────────────
function autopsy(s){const marks=(s.marks||[]).map(([x,y,n])=>`<g transform="translate(${x},${y})"><circle r="5" fill="none" stroke="#b3261e" stroke-width="1.6"/><text x="7" y="3" font-size="8" fill="#b3261e" font-family="Arial">${n}</text></g>`).join('');
const fig=`<svg class="au-fig" viewBox="0 0 120 220" aria-label="Kropsskema med markeringer"><g fill="none" stroke="#555" stroke-width="1.2"><circle cx="60" cy="22" r="14"/><path d="M52,35 L50,44 L30,50 L22,100 L18,140 M28,96 L34,58 L40,110 L38,150 L44,210 L56,210 L58,150 L62,150 L64,210 L76,210 L82,150 L80,110 L86,58 L92,96 M68,35 L70,44 L90,50 L98,100 L102,140"/></g>${marks}</svg>`;
return `<div class="autopsy"><div class="au-top"><div><b>RETSMEDICINSK INSTITUT</b><br><span>${esc(s.inst||'Københavns Universitet')}</span></div><div class="au-no">J.nr. ${esc(s.jnr||'RM-0000/00')}<br>Side 1 af 1</div></div><h4>OBDUKTIONSERKLÆRING</h4><table class="au-tab">${(s.fields||[]).map(([a,b])=>`<tr><th>${esc(a)}</th><td>${esc(b)}</td></tr>`).join('')}</table><div class="au-cols"><div>${(s.sections||[]).map(([h,t])=>`<h5>${esc(h)}</h5><p>${nl(t)}</p>`).join('')}</div>${fig}</div>${s.tox?`<h5>Toksikologisk analyse</h5><table class="au-tox"><tr><th>Stof</th><th>Fund</th><th>Bemærkning</th></tr>${s.tox.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</table>`:''}<div class="au-sign"><span>${esc(s.signer||'Overlæge, dr.med.')}</span><span class="au-stamp">RETSMEDICIN<br>${esc(s.city||'KØBENHAVN')}</span></div></div>`;}

// ── Lydoptagelse (læses op med enhedens danske stemme) ──────────────────────
function audio(s,k){const u=ui(k);return `<div class="tape ${s.style||''}"><div class="tp-top"><span class="tp-ico">${s.style==='voicemail'?'📳':s.style==='radio'?'📻':'📼'}</span><div><b>${esc(s.label||'Lydoptagelse')}</b><small>${esc(s.meta||'')}</small></div></div><div class="tp-wave" aria-hidden="true">${[...Array(40)].map((_,i)=>`<i style="--h:${20+Math.round(Math.abs(Math.sin(i*1.7+hash(k)%7))*80)}%"></i>`).join('')}</div><div class="tp-ctl"><button data-act="play">▶ Afspil</button><button data-act="stop" class="secondary">■ Stop</button><button data-act="tr" class="secondary">${u.tr?'Skjul udskrift':'Vis udskrift'}</button></div><div class="tp-voice"><label>🔊 Stemme <select data-voice>${voiceOptions()}</select></label><small>${voiceHint()}</small></div><div class="tp-tr ${u.tr?'':'hidden'}">${s.lines.map(([who,t],i)=>`<p data-line="${i}"><b>${esc(who)}:</b> ${esc(t)}</p>`).join('')}</div></div>`;}
// ── Stemmer: find de bedste danske stemmer på enheden (Premium/Forbedret/Neural/Natural først).
const VKEY='kriminalkludder-stemme';
function daVoices(){try{return speechSynthesis.getVoices().filter(v=>/^da/i.test(v.lang)||/dansk|danish/i.test(v.name));}catch(e){return [];}}
function vScore(v){const n=v.name.toLowerCase();let s=0;if(/premium|neural|natural/.test(n))s+=50;if(/enhanced|forbedret|siri|plus/.test(n))s+=35;if(/online|google|microsoft/.test(n))s+=20;if(/compact|kompakt|espeak/.test(n))s-=20;if(v.localService===false)s+=5;return s;}
function rankedVoices(){const all=daVoices().sort((a,b)=>vScore(b)-vScore(a));let pref=null;try{pref=localStorage.getItem(VKEY);}catch(e){}const i=all.findIndex(v=>v.voiceURI===pref);if(i>0)all.unshift(all.splice(i,1)[0]);return all;}
function voiceOptions(){const vs=rankedVoices();if(!vs.length)return '<option value="">Standard</option>';return vs.map(v=>`<option value="${esc(v.voiceURI)}">${esc(v.name)}${vScore(v)>=30?' ★':''}</option>`).join('');}
function voiceHint(){const vs=rankedVoices();if(!vs.length)return 'Ingen dansk stemme fundet. Udskriften vises i stedet.';if(vScore(vs[0])>=30)return 'Bedste stemme er valgt automatisk.';return 'Tip: Hent en bedre stemme. På iPad og iPhone: Indstillinger → Tilgængelighed → Oplæst indhold → Stemmer → Dansk → vælg en "Forbedret" eller "Premium" stemme.';}
try{speechSynthesis.onvoiceschanged=()=>document.querySelectorAll('select[data-voice]').forEach(sel=>{sel.innerHTML=voiceOptions();const h=sel.closest('.tp-voice').querySelector('small');if(h)h.textContent=voiceHint();});}catch(e){}
document.addEventListener('change',e=>{const sel=e.target.closest('select[data-voice]');if(!sel)return;try{localStorage.setItem(VKEY,sel.value);}catch(err){}document.querySelectorAll('select[data-voice]').forEach(x=>{x.innerHTML=voiceOptions();});});
// Båndsus under afspilning, så det lyder som en optagelse.
let hissCtx,hissNode;function hiss(on,style){try{if(!on){if(hissNode){hissNode.stop();hissNode=null;}return;}hissCtx=hissCtx||new (window.AudioContext||window.webkitAudioContext)();const a=hissCtx,b=a.createBuffer(1,a.sampleRate*2,a.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;const n=a.createBufferSource();n.buffer=b;n.loop=true;const f=a.createBiquadFilter();f.type='bandpass';f.frequency.value=style==='radio'?2200:style==='voicemail'?1500:4000;f.Q.value=.7;const g=a.createGain();g.gain.value=style==='radio'?.035:.018;n.connect(f).connect(g).connect(a.destination);n.start();hissNode=n;}catch(e){}}
let speaking=null;
function stopAudio(){try{speechSynthesis.cancel();}catch(e){}hiss(false);if(speaking){speaking.classList.remove('playing');speaking.querySelectorAll('.cur').forEach(x=>x.classList.remove('cur'));}speaking=null;}
function playAudio(el,s){stopAudio();if(!('speechSynthesis' in window)){el.querySelector('.tp-tr').classList.remove('hidden');return;}const vs=rankedVoices();if(!vs.length)el.querySelector('.tp-tr').classList.remove('hidden');speaking=el;el.classList.add('playing');hiss(true,s.style);const who=[];
s.lines.forEach(([name,t],i)=>{if(!who.includes(name))who.push(name);const n=who.indexOf(name),v=s.voices&&s.voices[name]||{};const u=new SpeechSynthesisUtterance(t.replace(/\[.*?\]/g,'').trim());u.lang='da-DK';if(vs.length)u.voice=vs[n%vs.length];const round=vs.length?Math.floor(n/vs.length):n;u.pitch=v.pitch??[1,.92,1.08,.96,1.04][round%5];u.rate=v.rate??.97;u.onstart=()=>{el.querySelectorAll('.cur').forEach(x=>x.classList.remove('cur'));const p=el.querySelector(`[data-line="${i}"]`);p&&p.classList.add('cur');};if(i===s.lines.length-1)u.onend=()=>{if(speaking===el)stopAudio();};speechSynthesis.speak(u);});}

// ── Overvågningsvideo ───────────────────────────────────────────────────────
function cctv(s,k){const u=ui(k),f=Math.min(u.f||0,s.frames.length-1),fr=s.frames[f],W=320,H=180;
const doors=(s.doors||[]).map(([x,lab])=>`<rect x="${x-14}" y="44" width="28" height="56" fill="#2a2f2f" stroke="#6a7272"/><text x="${x}" y="40" font-size="7" fill="#9fb0ad" text-anchor="middle" font-family="monospace">${esc(lab)}</text>`).join('');
const figs=(s.cast||[]).map((c,i)=>{const p=fr.at&&fr.at[i];const vis=p!=null&&p!==false;const x=vis?(Array.isArray(p)?p[0]:p):0,y=vis&&Array.isArray(p)?p[1]:0,sc=1+y*0.6;return `<g class="fig" style="transform:translate(${x*W/100}px,${118+y*40}px) scale(${sc});opacity:${vis?1:0}"><circle cy="-30" r="6" fill="${c[1]}" opacity=".9"/><rect x="-8" y="-24" width="16" height="26" rx="5" fill="${c[1]}"/><rect x="-6" y="2" width="5" height="14" fill="#222"/><rect x="1" y="2" width="5" height="14" fill="#222"/></g>`;}).join('');
return `<div class="cctv"><div class="cc-scr"><svg viewBox="0 0 ${W} ${H}" aria-label="Overvågningsbillede"><rect width="${W}" height="${H}" fill="#3b4242"/><polygon points="0,100 ${W},100 ${W},${H} 0,${H}" fill="#4d5555"/><g stroke="#5d6767">${[...Array(9)].map((_,i)=>`<line x1="${i*40}" y1="100" x2="${(i*40-160)*2.2+160}" y2="${H}"/>`).join('')}</g>${doors}${figs}</svg><div class="cc-osd"><span>● REC</span><span>${esc(s.camera||'KAM 01')}</span></div><div class="cc-ts">${esc(s.date||'')} ${esc(fr.t)}</div><div class="cc-cap">${esc(fr.txt||'')}</div></div><div class="cc-ctl"><button data-act="cprev" aria-label="Forrige">⏮</button><button data-act="cplay">${u.pl?'⏸ Pause':'▶ Afspil'}</button><button data-act="cnext" aria-label="Næste">⏭</button><input type="range" min="0" max="${s.frames.length-1}" value="${f}" data-act="cseek" aria-label="Tidslinje"><small>${f+1}/${s.frames.length}</small></div><div class="cc-legend">${(s.cast||[]).map(c=>`<span><i style="background:${c[1]}"></i>${esc(c[0])}</span>`).join('')}</div></div>`;}

// ── Dokumenter (rapport, brev, seddel, kvittering, avisudklip, sms-udskrift) ──
function docBody(s){const st=s.style||'report';if(st==='receipt')return `<div class="receipt"><b>${esc(s.shop||'')}</b><br><small>${esc(s.shopMeta||'')}</small><hr>${(s.rows||[]).map(([a,b])=>`<div class="rr"><span>${esc(a)}</span><span>${esc(b)}</span></div>`).join('')}<hr><small>${nl(s.text||'')}</small></div>`;
if(st==='note')return `<div class="hnote">${nl(s.text)}</div>`;
if(st==='letter')return `<div class="letter">${nl(s.text)}</div>`;
if(st==='clip')return `<div class="clip"><b>${esc(s.paper||'')}</b><h4>${esc(s.head||'')}</h4><p>${nl(s.text)}</p></div>`;
if(st==='table')return `${s.text?`<p>${nl(s.text)}</p>`:''}<table class="log">${(s.rows||[]).map((r,i)=>`<tr>${r.map(c=>i===0?`<th>${esc(c)}</th>`:`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</table>${s.after?`<p class="small">${nl(s.after)}</p>`:''}`;
return `<p>${nl(s.text)}</p>`;}

const KIND={doc:'Dokument',autopsy:'Obduktion',phone:'Mobiltelefon',computer:'Computer',audio:'Lydoptagelse',cctv:'Overvågning',photo:'Gerningsstedsfoto'};
function render(s,k,i,cls){const t=s.type||'doc';let b;
switch(t){case'autopsy':b=autopsy(s);break;case'phone':b=phone(s,k);break;case'computer':b=computer(s,k);break;case'audio':b=audio(s,k);break;case'cctv':b=cctv(s,k);break;case'photo':b=photo(s,s.title)+(s.text?`<p>${nl(s.text)}</p>`:'');break;default:b=docBody(s);}
return `<article class="evidence ${cls} spor spor-${t} doc-${s.style||''}" style="--i:${i}" data-spor="${esc(k)}"><div class="eyebrow">${esc(s.kind||KIND[t])}</div><h3>${esc(s.title||'')}</h3>${s.src?`<div class="src">${esc(s.src)}</div>`:''}<div class="spor-body">${b}</div></article>`;}

// Ét klik-håndtag for alle interaktive spor.
let LOOKUP=()=>null;let cctvTimers={};
function rerender(el){const k=el.dataset.spor,s=LOOKUP(k);if(!s)return;const body=el.querySelector('.spor-body');const t=s.type;body.innerHTML=t==='phone'?phone(s,k):t==='computer'?computer(s,k):t==='cctv'?cctv(s,k):body.innerHTML;}
function onClick(e){const b=e.target.closest('[data-act]');if(!b)return;const el=b.closest('[data-spor]');if(!el)return;const k=el.dataset.spor,s=LOOKUP(k),u=ui(k),a=b.dataset.act,v=b.dataset.v;if(!s||a==='pw'||a==='cseek')return;e.preventDefault();
if(a==='pin'){u.err=false;if(v==='⌫')u.typed=(u.typed||'').slice(0,-1);else u.typed=((u.typed||'')+v).slice(0,4);if(u.typed.length===4){if(u.typed===String(s.pin)){u.open=true;u.typed='';saveUI();}else{u.err=true;u.typed='';setTimeout(()=>{u.err=false;rerender(el);},700);}}rerender(el);return;}
if(a==='app'){u.app=v;u.th=null;u.ph=null;}else if(a==='home'){u.app=null;}else if(a==='th'){u.th=+v;}else if(a==='thread'){u.th=null;}else if(a==='ph'){u.ph=+v;}else if(a==='photo'){u.ph=null;}
else if(a==='papp'){u.app=v;u.item=null;}else if(a==='item'){u.item=v===''?null:+v;}
else if(a==='play'){playAudio(el,s);return;}else if(a==='stop'){stopAudio();return;}else if(a==='tr'){u.tr=!u.tr;saveUI();el.querySelector('.tp-tr').classList.toggle('hidden',!u.tr);b.textContent=u.tr?'Skjul udskrift':'Vis udskrift';return;}
else if(a==='cprev'){u.f=Math.max(0,(u.f||0)-1);u.pl=false;}else if(a==='cnext'){u.f=Math.min(s.frames.length-1,(u.f||0)+1);u.pl=false;}
else if(a==='cplay'){u.pl=!u.pl;if(u.pl){if((u.f||0)>=s.frames.length-1)u.f=0;clearInterval(cctvTimers[k]);cctvTimers[k]=setInterval(()=>{const live=document.querySelector(`[data-spor="${CSS.escape(k)}"]`);if(!live||!u.pl){clearInterval(cctvTimers[k]);return;}if((u.f||0)>=s.frames.length-1){u.pl=false;clearInterval(cctvTimers[k]);}else u.f=(u.f||0)+1;cctvPatch(live,s,k);},1800);}else clearInterval(cctvTimers[k]);}
saveUI();if(s.type==='cctv'){cctvPatch(el,s,k);return;}rerender(el);}
// Video: opdater kun figurerne, så de glider i stedet for at hoppe.
function cctvPatch(el,s,k){const u=ui(k),f=Math.min(u.f||0,s.frames.length-1),fr=s.frames[f],W=320;el.querySelectorAll('.fig').forEach((g,i)=>{const p=fr.at&&fr.at[i],vis=p!=null&&p!==false,x=vis?(Array.isArray(p)?p[0]:p):0,y=vis&&Array.isArray(p)?p[1]:0;if(vis)g.style.transform=`translate(${x*W/100}px,${118+y*40}px) scale(${1+y*.6})`;g.style.opacity=vis?1:0;});el.querySelector('.cc-ts').textContent=(s.date||'')+' '+fr.t;el.querySelector('.cc-cap').textContent=fr.txt||'';el.querySelector('[data-act="cplay"]').textContent=u.pl?'⏸ Pause':'▶ Afspil';el.querySelector('[data-act="cseek"]').value=f;el.querySelector('.cc-ctl small').textContent=(f+1)+'/'+s.frames.length;}
document.addEventListener('click',onClick);
document.addEventListener('input',e=>{const r=e.target.closest('[data-act="cseek"]');if(!r)return;const el=r.closest('[data-spor]'),k=el.dataset.spor,s=LOOKUP(k),u=ui(k);u.f=+r.value;u.pl=false;saveUI();cctvPatch(el,s,k);});
document.addEventListener('submit',e=>{const f=e.target.closest('[data-act="pw"]');if(!f)return;e.preventDefault();const el=f.closest('[data-spor]'),k=el.dataset.spor,s=LOOKUP(k),u=ui(k),v=f.querySelector('input').value.trim();if(v.toLowerCase()===String(s.password).toLowerCase()){u.open=true;u.err=false;}else u.err=true;saveUI();rerender(el);});

// ── Udseende ────────────────────────────────────────────────────────────────
const css=`
.spor .spor-body{margin-top:6px}
.portrait{display:block;width:100%;height:auto;border-radius:3px;box-shadow:0 0 0 3px #d5dade,0 0 0 4px #000,3px 5px 12px rgba(0,0,0,.6)}
.portrait.victim{filter:grayscale(1) contrast(1.05)}
.victimbox{display:grid;grid-template-columns:110px 1fr;gap:18px;align-items:start;margin:14px 0}
.victimbox .vp{position:relative}.victimbox .vp:after{content:'';position:absolute;top:-2px;right:-2px;width:34px;height:34px;background:linear-gradient(225deg,#111 0 40%,transparent 40%)}
.theme{display:inline-block;font:bold 11px monospace;letter-spacing:1px;text-transform:uppercase;background:#3d5226;color:#e8f0dc;border:1px solid #6b8a45;padding:2px 8px;border-radius:20px;margin-left:6px;vertical-align:2px}
.file .who .portrait{width:88px;flex:none}
.crimephoto{margin:8px 0;background:#fff;padding:8px 8px 4px;box-shadow:2px 4px 10px rgba(0,0,0,.3);transform:rotate(-.6deg)}
.crimephoto svg{display:block;width:100%;height:auto}
.crimephoto figcaption{font:13px/1.5 'Courier New',monospace;color:#3a2f24;padding:6px 2px}
.sketch{margin:14px 0;background:#f8f4ea;border:1px solid #9fb0c0;padding:10px}
:root[data-theme="dark"] .sketch{background:#0d1a28;border-color:#2a4a6a;box-shadow:inset 0 0 30px rgba(0,0,0,.5)}
:root[data-theme="dark"] .sk-head,:root[data-theme="dark"] .legend{color:#8fc3ec}
.sketch svg{display:block;width:100%;height:auto;background:#fbf8f0}
:root[data-theme="dark"] .sketch svg{filter:invert(.92) hue-rotate(180deg) saturate(1.4)}
.sk-head{display:flex;justify-content:space-between;font:bold 11px monospace;letter-spacing:1.5px;color:#2c3b4f;margin-bottom:6px;gap:10px;flex-wrap:wrap}
.legend{font:13px/1.6 'Courier New',monospace;color:#2c3b4f;margin:8px 0 0;padding-left:26px}
.phone{width:min(300px,100%);margin:8px auto;background:#111;border-radius:38px;padding:12px;box-shadow:0 0 0 2px #444,0 12px 30px rgba(0,0,0,.45);position:relative}
.ph-notch{position:absolute;top:14px;left:50%;transform:translateX(-50%);width:90px;height:20px;background:#111;border-radius:12px;z-index:2}
.ph-screen{height:520px;border-radius:28px;overflow:hidden;background:var(--wall);color:#fff;font:15px/1.4 -apple-system,'Helvetica Neue',Arial,sans-serif;display:flex;flex-direction:column}
.ph-screen button{font:inherit;min-height:0;box-shadow:none;border:0;border-radius:0;background:none;color:inherit;padding:0;font-weight:normal;transform:none}
.ph-lock,.ph-home{flex:1;display:flex;flex-direction:column;align-items:center;padding:40px 16px 16px;overflow:auto}
.ph-time{font:200 60px/1 -apple-system,'Helvetica Neue',Arial,sans-serif}.ph-time.sm{font-size:22px;margin-bottom:20px}
.ph-date{opacity:.85;margin-bottom:12px}
.ph-notif{width:100%;background:rgba(255,255,255,.18);backdrop-filter:blur(6px);border-radius:14px;padding:8px 12px;margin-bottom:6px;font-size:13px}.ph-notif b{display:block}
.ph-dots{display:flex;gap:14px;margin:14px 0 10px}.ph-dots i{width:12px;height:12px;border-radius:50%;border:1.5px solid #fff}.ph-dots i.on{background:#fff}.ph-dots.err{animation:shake .4s}
.ph-pad{display:grid;grid-template-columns:repeat(3,62px);gap:10px}
.ph-pad button{width:62px;height:62px;border-radius:50%!important;background:rgba(255,255,255,.2)!important;font-size:24px!important}
.ph-pad button:active{background:rgba(255,255,255,.45)!important}
.ph-hint{margin-top:10px;font-size:12px;opacity:.75;text-align:center}
.ph-apps{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;width:100%}
.ph-apps button{display:flex;flex-direction:column;align-items:center;gap:6px;font-size:12px}
.ph-apps span{width:58px;height:58px;border-radius:14px;background:rgba(255,255,255,.92);display:grid;place-items:center;font-size:30px;box-shadow:0 3px 8px rgba(0,0,0,.3)}
.ph-bar{display:grid;grid-template-columns:80px 1fr 80px;align-items:center;padding:36px 10px 10px;background:#f6f6f8;color:#111;border-bottom:1px solid #ddd}
.ph-bar button{color:#0a7aff!important;text-align:left}.ph-bar b{text-align:center;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ph-list,.ph-chat,.ph-notes,.ph-grid,.ph-photo{flex:1;overflow:auto;background:#fff;color:#111}
.ph-list button,.ph-list .row{display:grid;grid-template-columns:1fr auto;width:100%;text-align:left;padding:10px 14px;border-bottom:1px solid #eee}
.ph-list button span{grid-column:1/3;color:#666;font-size:13px}.ph-list small{color:#888;font-size:12px}.ph-list .missed b{color:#d22}
.ph-chat{padding:10px;display:flex;flex-direction:column;gap:6px}
.bub{max-width:80%;align-self:flex-start;background:#e9e9eb;color:#111;padding:7px 11px;border-radius:16px;font-size:14px}
.bub.me{align-self:flex-end;background:#0a7aff;color:#fff}.bub small{display:block;font-size:10px;opacity:.6;margin-top:2px}
.ph-notes{padding:12px}.pn{border-bottom:1px solid #eee;padding:8px 0}.pn b{display:block}.pn p{margin:4px 0 0;font-size:14px;white-space:normal}.pn small{color:#888}
.ph-grid{display:grid;grid-template-columns:1fr 1fr;gap:3px;padding:3px;align-content:start}
.ph-grid .crimephoto,.ph-photo .crimephoto{margin:0;padding:0;transform:none;box-shadow:none}
.ph-photo{padding:8px}.ph-meta{font-size:12px;color:#666;padding:6px 2px}
.laptop{max-width:560px;margin:8px auto}
.pc-screen{background:#1d2228;border:10px solid #2b2f35;border-radius:10px 10px 0 0;min-height:320px;color:#e8e8e8;font:14px/1.45 -apple-system,'Segoe UI',Arial,sans-serif;display:flex;flex-direction:column}
.pc-base{height:14px;background:linear-gradient(#c9cdd2,#9aa0a6);border-radius:0 0 14px 14px;margin:0 -18px}
.pc-screen button{font:inherit;min-height:0;box-shadow:none;border:0;background:none;color:inherit;padding:0;font-weight:normal;border-radius:0}
.pc-login{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:20px;background:linear-gradient(160deg,#20384f,#2c2440)}
.pc-avatar{width:64px;height:64px;border-radius:50%;background:#5a6f86;display:grid;place-items:center;font-size:28px}
.pc-login form{display:flex;gap:6px}.pc-login input{width:200px;background:rgba(255,255,255,.9);padding:8px;border-radius:6px;border:0;font-size:16px;color:#222}
.pc-login form button{background:#3a7bd5!important;border-radius:6px!important;padding:0 14px!important}
.pc-err{color:#ff8a80;font-size:13px}.pc-hint{font-size:12px;opacity:.75;text-align:center;max-width:300px}
.pc-top{display:flex;gap:2px;background:#2b3138;padding:4px;flex-wrap:wrap}
.pc-top button{padding:6px 10px!important;border-radius:5px!important;font-size:13px}.pc-top button.on{background:#3a434d}
.pc-win{flex:1;background:#f7f7f5;color:#222;overflow:auto;max-height:380px}
.pc-list button,.pc-list .row{display:grid;grid-template-columns:150px 1fr auto;gap:10px;width:100%;text-align:left;padding:9px 12px;border-bottom:1px solid #e3e3e0;font-size:13px}
.pc-list small{color:#777}
.pc-back{color:#1a64c8;padding:8px 12px!important}
.pc-doc{padding:4px 16px 16px}.pc-mh{border-bottom:1px solid #ddd;padding-bottom:8px;margin-bottom:10px}.pc-mh b{display:block;font-size:16px}.pc-mh small{color:#666}
.pc-body{font-size:14px;line-height:1.6}
.autopsy{background:#fff;color:#111;font:13px/1.5 Arial,Helvetica,sans-serif;padding:18px 20px;border:1px solid #bbb;box-shadow:2px 3px 8px rgba(0,0,0,.2)}
.au-top{display:flex;justify-content:space-between;border-bottom:2px solid #111;padding-bottom:8px;gap:10px}.au-top span{font-size:11px;color:#555}.au-no{text-align:right;font:11px monospace}
.autopsy h4{text-align:center;letter-spacing:3px;margin:12px 0}.autopsy h5{margin:12px 0 4px;font-size:12px;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid #ccc}
.autopsy p{margin:0 0 6px}
.au-tab,.au-tox{width:100%;border-collapse:collapse;font-size:12px}.au-tab th,.au-tox th{text-align:left;background:#f0f0f0;font-weight:bold}.au-tab th,.au-tab td,.au-tox th,.au-tox td{border:1px solid #ccc;padding:4px 6px;vertical-align:top}.au-tab th{width:34%}
.au-cols{display:grid;grid-template-columns:1fr 120px;gap:14px}.au-fig{width:120px}
.au-sign{display:flex;justify-content:space-between;align-items:center;margin-top:16px;font-style:italic}
.au-stamp{border:2px solid #1f4e8a;color:#1f4e8a;font:bold 10px/1.2 monospace;padding:4px 8px;text-align:center;transform:rotate(-8deg);font-style:normal;opacity:.8}
.tape{background:linear-gradient(#2e2a27,#1d1a18);color:#f2e6cc;border-radius:12px;padding:14px;box-shadow:inset 0 0 0 2px #4a4038}
.tp-top{display:flex;gap:12px;align-items:center}.tp-ico{font-size:30px}.tp-top b{display:block}.tp-top small{color:#cdbb98;font-family:monospace}
.tp-wave{display:flex;align-items:center;gap:2px;height:46px;margin:10px 0}
.tp-wave i{flex:1;height:var(--h);background:#c99a4a;border-radius:2px;opacity:.55;transform-origin:center}
.tape.playing .tp-wave i{animation:wave .9s ease-in-out infinite;animation-delay:calc(var(--h)*-9ms);opacity:1}
@keyframes wave{50%{transform:scaleY(.35)}}
.tp-ctl{display:flex;gap:8px;flex-wrap:wrap}
.tp-voice{margin-top:8px;display:flex;flex-direction:column;gap:2px}.tp-voice label{margin:0;font:13px monospace;color:#cdbb98}.tp-voice select{max-width:100%;background:#0f1316;color:#e6eaec;border:1px solid #3d464d;border-radius:5px;padding:6px;font:13px sans-serif;margin-left:6px}.tp-voice small{color:#9aa5ad;font-size:12px}
.tp-tr{margin-top:10px;background:#0f1316;color:#d6dce0;border:1px solid #3a434a;border-radius:6px;padding:10px 12px;font:14px/1.6 'Courier New',monospace;max-height:300px;overflow:auto}
.tp-tr p{margin:0 0 6px;padding:2px 4px;border-radius:3px}.tp-tr p.cur{background:#4a3a12;color:#ffd36b}
.cctv{background:#111;border-radius:8px;padding:8px}
.cc-scr{position:relative;overflow:hidden;border-radius:4px;filter:grayscale(.75) contrast(1.15)}
.cc-scr svg{display:block;width:100%;height:auto}
.cc-scr:after{content:'';position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(255,255,255,.05) 0 1px,transparent 1px 3px);pointer-events:none;animation:flick 3s infinite}
@keyframes flick{50%{opacity:.6}}
.fig{transition:transform 1.5s ease-in-out,opacity .6s;transform-box:fill-box}
.cc-osd{position:absolute;top:6px;left:8px;right:8px;display:flex;justify-content:space-between;font:bold 12px monospace;color:#fff;text-shadow:0 0 3px #000}.cc-osd span:first-child{color:#ff5050}
.cc-ts{position:absolute;top:24px;right:8px;font:12px monospace;color:#fff;text-shadow:0 0 3px #000}
.cc-cap{position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,.6);color:#ffe2a0;font:12px/1.4 monospace;padding:4px 8px;min-height:22px}
.cc-ctl{display:flex;align-items:center;gap:6px;margin-top:8px;color:#ddd}.cc-ctl input{flex:1;padding:0;accent-color:#c99a4a}.cc-ctl button{min-height:40px;padding:6px 12px}
.cc-legend{display:flex;flex-wrap:wrap;gap:10px;margin-top:6px;font:12px monospace;color:#ccc}.cc-legend i{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:4px;vertical-align:-1px}
.hnote{font:20px/1.5 'Bradley Hand','Segoe Print','Comic Sans MS',cursive;color:#1d3a8a;background:#fff8b8;padding:16px 18px;transform:rotate(-1.2deg);box-shadow:2px 3px 6px rgba(0,0,0,.25);max-width:420px}
.letter{font:16px/1.7 Georgia,serif;color:#1d1a17;background:#fffdf6;padding:18px 22px;border:1px solid #ddd5c0;white-space:normal}
.receipt{font:13px/1.5 'Courier New',monospace;color:#1d1a17;background:#fff;width:min(280px,100%);padding:14px;box-shadow:1px 2px 6px rgba(0,0,0,.25);margin:4px 0}.receipt hr{border:0;border-top:1px dashed #888}.rr{display:flex;justify-content:space-between;gap:10px}
.clip{color:#1d1a17;background:#efe7d2;padding:14px 16px;font:15px/1.5 'Times New Roman',serif;box-shadow:1px 2px 5px rgba(0,0,0,.2);transform:rotate(.6deg)}.clip h4{font:900 20px/1.1 Impact,'Arial Black',sans-serif;text-transform:uppercase;margin:4px 0 8px}
.log{width:100%;border-collapse:collapse;font:13px 'Courier New',monospace;background:#fff;color:#1d1a17}.log th{background:#e8dcc0;text-align:left}.log th,.log td{border:1px solid #c8b896;padding:4px 7px}
:root[data-theme="dark"] .log{background:#11161a;color:#d6dce0}:root[data-theme="dark"] .log th{background:#2a3036;color:var(--gold,#e0a526)}:root[data-theme="dark"] .log th,:root[data-theme="dark"] .log td{border-color:#3a434a}
.spor-phone:after,.spor-computer:after,.spor-cctv:after,.spor-audio:after{display:none}
.packbar{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin:18px 0 0}.packbar select{font:inherit;padding:10px;border-radius:6px;background:#fff9e9;color:#302b29;border:1px solid #a29273;min-height:46px}
:root[data-theme="dark"] .packbar select{background:#0f1316;color:#e6eaec;border-color:#3d464d}
@media(max-width:1000px){.cols{grid-template-columns:1fr!important}.board{position:static!important}}
@media(max-width:760px){.victimbox{grid-template-columns:80px 1fr}.au-cols{grid-template-columns:1fr}.au-fig{display:none}.pc-list button,.pc-list .row{grid-template-columns:1fr}.ph-screen{height:480px}}
`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
return {render,portrait,sketch,photo,icon,stopAudio,setLookup:f=>{LOOKUP=f;},hash,look};
})();
