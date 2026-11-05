'use strict';
// Sagsbunke 15.

KK.push({nr:149,theme:'Boghandel',no:'K-4601',title:'Signeret',when:'Lørdag 28. november · ca. 17:00',where:'Boghandlen Ordet, Aarhus',
victim:'Lone Ord (58), boghandler',victimLook:{sex:'f',hair:'curly',hc:'grå',glasses:true,age:'old',shirt:'#6b3a3a',collar:'v'},
intro:'Boghandleren findes død i baglokalet under en forfatter-signering. Signerede bøger er forfalsket.',
brief:'Kl. 17:40 fandt en kunde boghandler Lone Ord død. Under dagens signering havde Lone opdaget, at nogen solgte bøger med falske forfattersignaturer.',
options:[['Rasmus Signatur, ansat','Mette Hylde, ansat','Jens Forfatter, forfatter','Kim Ord, søn'],['Slag med bogkasse','Kvælning med gavebånd','Gift i gløgg'],['Baglokalet','Kælderlageret','Signeringsbordet']],answer:[0,1,1],
info:[['Ansat. Pakker de signerede bøger.','Ansat.','Forfatter. Signerer i dag.','Søn.'],
['Kasse med bøger.','Gavebånd.','Gløgg.'],
['Baglokalet. Her blev hun fundet.','Kælderlager.','Bordet hvor forfatteren signerer.']],
timeline:[['14:00','Signering.'],['16:00','Lone beder to om en snak.'],['16:15','Lone ses sidst.'],['17:40','Lone findes.']],
sketch:{title:'Baglokalet · fundsted',items:[['crate',80,80,40,40,0],['table',300,200,80,40,0]],body:[200,140,40,.85],markers:[[1,240,120,'Kælderstøv']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Lones telefon',owner:'Lone Ord',pin:'2811',pinHint:'Dagens dato (ddmm).',lockTime:'17:45',wall:'linear-gradient(160deg,#6b3a3a,#e9d4a6)',msgs:[{with:'Rasmus + Jens',m:[['me','16:00','Falske signaturer! Rasmus pakker dem, Jens skriver dem. Kom nu.']]}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 18:10',text:'Mærker om halsen fra et bånd, og en bule fra noget kantet. Ingen tegn på gift. Hun døde mellem 16:15 og 16:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Lones cardigan',bg:'stone',stamp:'K-4601 / 02',items:[['stain',100,90,1.4,0,'#888'],['rope',220,100,1.2,0,'#c94a3b']],caption:'Kælderstøv og røde gavebånd-fibre. Kælderstøv er i lageret, og gavebånd ved signeringsbordet og i lageret. Baglokalet er nyrengjort.'}
],[
{type:'cctv',kind:'Overvågning',title:'Signeringsbordet',date:'28-11',camera:'BUTIK',doors:[[160,'BORD']],cast:[['Forfatter med pen','#2f3b55']],frames:[{t:'16:15:00',at:[[50,.3]],txt:'Jens signerer bøger for en lang kø.'},{t:'16:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'16:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Jens Forfatter signerer fra 14:00 til 17:00 uden pause. Lone kom ikke til bordet efter kl. 16.'},
{type:'doc',kind:'Supplerende obduktion',title:'Bulen',src:'Retsmedicinsk Institut',text:'Bulen er fra faldet. Hun døde af kvælning med et gavebånd.'}
]],
epilogue:'Rasmus Signatur forfalskede forfatternes underskrifter og solgte bøgerne dyrt på nettet. I kælderlageret kvalte han Lone med et gavebånd og bar hende op i baglokalet.',
headline:'Boghandelsansat anholdt for drab under signering'});

KK.push({nr:150,theme:'Politistation',no:'K-4602',title:'Den sidste sag',when:'Fredag 18. december · ca. 22:00',where:'Politigården, Kriminalkludderafdelingen',
victim:'Vicepolitiinspektør Karin Stål (59)',victimLook:{sex:'f',hair:'short',hc:'sølv',glasses:true,age:'old',shirt:'#1f2a44',collar:'shirt'},
intro:'Finalen. Politimesteren, der har sendt jer alle sagerne, findes død på sit kontor. Morderen er en af jeres egne.',
brief:'Kl. 22:40 fandt en betjent vicepolitiinspektør Karin Stål død i bevisrummet på Politigården. Det var hende, der havde sendt jer alle de andre sager. Hun havde opdaget, at nogen i afdelingen solgte beslaglagte beviser. I hendes lomme lå en seddel: "Kriminalkludderne vil forstå."',
options:[['Kommissær Jonas Lund','Politiassistent Maja Holt','Kriminaltekniker Erik Dahl','Sekretær Bodil Krog'],['Slag med bevispose (pistol)','Kvælning med slips','Gift i julekaffe'],['Bevisrummet','Kriminalteknisk laboratorium','Arkivet']],answer:[2,0,2],
info:[['Kommissær. Har nøgle til bevisrummet.','Politiassistent. Ny i afdelingen.','Kriminaltekniker. Har nøgle til bevisrummet og laboratoriet.','Sekretær i 30 år.'],
['En beslaglagt pistol i en tung bevispose.','Slips.','Kaffe fra julefrokosten.'],
['Bevisrummet. Her blev hun fundet.','Laboratoriet.','Kælderarkivet med gamle sager.']],
timeline:[['18:00','Julefrokost i afdelingen.'],['21:00','Karin beder to om en snak.'],['21:15','Karin ses sidst.'],['22:40','Karin findes.']],
sketch:{title:'Bevisrummet · fundsted',items:[['shelf',60,130,24,200,0,'Bevisposer'],['shelf',200,130,24,200,0],['shelf',340,130,24,200,0]],body:[130,150,10,.8],markers:[[1,150,110,'Arkivstøv'],[2,270,200,'Tom bevispose']]},
evidence:[[
{type:'computer',kind:'Computer',title:'Karins pc',owner:'Karin Stål',user:'Karin',password:'kriminalkludder',hint:'Navnet på jeres afdeling. Ét ord, små bogstaver.',mail:[{from:'Karin Stål',to:'Jonas Lund; Erik Dahl',time:'21:00',subject:'Beviserne',body:'Der mangler beviser fra 14 sager. Kun I to har nøgle til bevisrummet. Mød mig nu.'}],files:[{name:'Til kriminalkludderne.txt',time:'20:55',body:'Hvis I læser det her, er jeg ikke her længere. I har løst 149 sager. Løs også denne.\n– K.'}]},
{type:'autopsy',kind:'Obduktion',title:'Obduktionserklæring',jnr:'RM-1218/99',fields:[['Afdøde','Karin Stål'],['Obducent','Overlæge Birgit Wolff'],['Anslået dødstidspunkt','Kl. 21:15–21:45']],sections:[['Udvendige fund','Slag mod hovedet med noget tungt og kantet. Rødlige striber om halsen fra stof. Ingen andre skader.'],['Indvendige fund','Kraniebrud. Det er ikke afgjort, om slaget eller striberne var dødelige. Maveindholdet med julekaffe er undersøgt: ingen gift.']],marks:[[48,20,'1'],[60,38,'2']],signer:'Birgit Wolff, overlæge',city:'KØBENHAVN'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Karins uniform',bg:'stone',stamp:'K-4602 / 01',items:[['paper',100,90,1.4,0],['stain',220,100,1.2,0,'#c9ccd0']],caption:'Gammelt arkivstøv og fingeraftrykspulver. Arkivstøv er i kælderarkivet; fingeraftrykspulver i laboratoriet og arkivet, hvor gamle beviser bliver undersøgt. Bevisrummet er rent.'}
],[
{type:'cctv',kind:'Overvågning',title:'Julefrokosten',date:'18-12',camera:'KANTINE',doors:[[160,'SCENE']],cast:[['Kommissær med nissehue','#c94a3b']],frames:[{t:'21:15:00',at:[[50,.3]],txt:'Jonas holder tale for afdelingen.'},{t:'21:30:00',at:[[55,.3]],txt:'Jonas synger julesange.'},{t:'21:45:00',at:[[50,.3]],txt:'Stadig ved bordet.'}],text:'Kommissær Jonas Lund er i kantinen fra 21:05 til 22:30 foran 30 kolleger.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Striberne om halsen er fra hendes eget slips, der strammede i faldet. Hun døde af slaget med en tung bevispose med en pistol.'},
{type:'audio',style:'voicemail',kind:'Vidneforklaring',label:'Betjenten i laboratoriet',meta:'Optaget 18.12 kl. 23:30',lines:[['Betjent','Jeg sad i laboratoriet hele aftenen fra ni til halv elleve og ventede på en DNA-maskine.'],['Afhører','Kom Karin derind?'],['Betjent','Nej. Og ingen andre heller.']]},
{type:'doc',style:'note',kind:'Seddel',title:'Fundet i Karins lomme',text:'Kriminalkludderne vil forstå.\n(pc-koden er vores navn)'}
]],
epilogue:'Kriminaltekniker Erik Dahl havde i årevis solgt beslaglagte beviser. I kælderarkivet viste Karin ham listen over de 14 sager. Erik slog hende med en bevispose med en tung pistol og bar hende op i bevisrummet. Men han havde ikke regnet med jer. Tak, kriminalkludderne. Det var den sidste sag.',
headline:'Kriminaltekniker anholdt – Kriminalkludderne løser deres sidste sag'});
