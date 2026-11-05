'use strict';
// Sagsbunke 13.

KK.push({nr:129,theme:'Nytårsaften',no:'K-4401',title:'Tolv slag',when:'Torsdag 31. december · ca. 23:50',where:'Penthouse ved Nyhavn',
victim:'Christian Krone (60), skibsreder',victimLook:{sex:'m',hair:'short',hc:'sølv',age:'old',shirt:'#111111',collar:'shirt'},
intro:'Ved midnat, da fyrværkeriet brager, dør skibsrederen. Ingen hørte noget.',
brief:'Kl. 00:05 fandt en tjener skibsreder Christian Krone død på terrassen. Christian ville ved midnat annoncere, at rederiet skulle sælges, og at to af hans nærmeste ville stå uden job.',
options:[['Signe Krone, datter','Mogens Hav, direktør','Lis Krone, hustru','Peter Skib, revisor'],['Raket (forbrænding)','Slag med champagneflaske','Gift i champagne'],['Terrassen','Biblioteket','Køkkenet']],answer:[1,1,1],
info:[['Datter. Skulle have overtaget rederiet.','Direktør i rederiet.','Christians kone.','Revisor.'],
['Fyrværkeri.','Magnum champagne.','Champagne.'],
['Terrassen. Her blev han fundet.','Biblioteket.','Køkkenet.']],
timeline:[['20:00','Middag.'],['23:30','Christian beder to om en snak.'],['23:40','Christian ses sidst.'],['00:05','Christian findes.']],
sketch:{title:'Terrassen · fundsted',items:[['table',200,80,100,40,0],['plant',60,60,24,24,0],['plant',340,60,24,24,0]],body:[200,180,80,.85],markers:[[1,240,160,'Bogstøv']]},
evidence:[[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Gæstens video',meta:'23:30',lines:[['Christian Krone','Signe og Mogens. Jeg vil tale med jer, før jeg siger det til alle ved midnat. Kom.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 00:40',text:'Ingen forbrændinger. Slag mod hovedet med noget tungt af glas, eller tegn på gift. Han døde mellem 23:40 og 00:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Christians smoking',bg:'carpet',stamp:'K-4401 / 02',items:[['book',100,90,1.4,0],['stain',220,100,1.2,0,'#f2e0c0']],caption:'Bogstøv og champagne. Bogstøv er i biblioteket, og champagne i biblioteket og køkkenet. Terrassen har sne og ingen bøger.'}
],[
{type:'cctv',kind:'Overvågning',title:'Stuen',date:'31-12',camera:'STUE',doors:[[160,'TERRASSE']],cast:[['Ung kvinde i sølvkjole','#c9ccd0']],frames:[{t:'23:40:00',at:[[50,.3]],txt:'Signe tæller ned med gæsterne.'},{t:'23:50:00',at:[[50,.3]],txt:'Stadig.'},{t:'00:00:00',at:[[50,.3]],txt:'Godt nytår!'}],text:'Signe Krone er i stuen fra 23:35 til 00:05.'},
{type:'doc',style:'table',kind:'Laboratoriesvar',title:'Toksikologi',rows:[['Prøve','Fund'],['Blod','Ingen gift']],after:'Han døde af slaget med en champagneflaske.'},
{type:'doc',kind:'Rapport',title:'Køkkenet',src:'Kokken',text:'Vi var fem i køkkenet. Christian kom ikke.'}
]],
epilogue:'Mogens Hav ville miste sit job ved salget. I biblioteket slog han Christian med en magnum champagne og bar ham ud på terrassen, mens fyrværkeriet bragede.',
headline:'Direktør anholdt for drab nytårsnat'});

KK.push({nr:130,theme:'Sankthans',no:'K-4402',title:'Heksen på bålet',when:'Tirsdag 23. juni · ca. 22:00',where:'Sankthansbål ved Skovshoved Havn',
victim:'Peder Bål (61), formand for grundejerforeningen',victimLook:{sex:'m',hair:'short',hc:'grå',beard:'full',age:'old',shirt:'#3e5b46',collar:'shirt'},
intro:'Ved sankthansbålet findes foreningens formand død bag bådehuset.',
brief:'Kl. 22:40 fandt en nabo formand Peder Bål død bag bådehuset. Peder havde opdaget, at foreningens kasse manglede penge.',
options:[['Grete Kasse, kasserer','Hans Hus, næstformand','Lis Bål, hustru','Jens Båd, havnefoged'],['Slag med åre','Kvælning med flagline','Gift i bålpunch'],['Bag bådehuset','Klubhuset','Bådehuset']],answer:[0,1,2],
info:[['Kasserer.','Næstformand.','Hustru.','Havnefoged.'],
['Åre.','Flagline.','Punch.'],
['Bag bådehuset. Her blev han fundet.','Klubhuset.','Inde i bådehuset.']],
timeline:[['20:00','Bål.'],['21:00','Peder beder to om en snak.'],['21:15','Peder ses sidst.'],['22:40','Peder findes.']],
sketch:{title:'Bag bådehuset · fundsted',items:[['wall',40,40,320,0,0],['label',200,30,0,0,0,'BÅDEHUS'],['car',200,200,120,40,0,'Jolle']],body:[200,130,40,.85],markers:[[1,240,110,'Tovfibre']]},
evidence:[[
{type:'doc',style:'note',kind:'Seddel',title:'Peders notat',text:'Kassen mangler 60.000. Grete og Hans har adgang. Taler med dem efter talen.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 23:10',text:'Mærker om halsen fra en tynd line, og en bule fra noget af træ. Ingen tegn på gift. Han døde mellem 21:15 og 21:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Peders jakke',bg:'deck',stamp:'K-4402 / 02',items:[['rope',100,90,1.4,0,'#f2f2f2'],['stain',220,100,1.2,0,'#3a3a3a']],caption:'Hvide tovfibre og bundmaling. Det findes inde i bådehuset og i klubhuset, hvor flaglinen opbevares. Bag bådehuset er der græs, og der er ingen græs på ham.'}
],[
{type:'cctv',kind:'Overvågning',title:'Bålet',date:'23-06',camera:'BÅL',doors:[],cast:[['Næstformand med mikrofon','#5a3a22']],frames:[{t:'21:15:00',at:[[50,.3]],txt:'Hans holder båltalen.'},{t:'21:30:00',at:[[50,.3]],txt:'Synger "Vi elsker vort land".'},{t:'21:45:00',at:[[50,.3]],txt:'Stadig ved bålet.'}],text:'Hans Hus er ved bålet fra 21:10 til 22:00.'},
{type:'doc',kind:'Supplerende obduktion',title:'Bulen',src:'Retsmedicinsk Institut',text:'Bulen er fra faldet. Han døde af kvælning med en flagline.'},
{type:'doc',kind:'Rapport',title:'Klubhuset',src:'Bartender',text:'Klubhuset var fyldt med gæster. Peder kom ikke ind.'}
]],
epilogue:'Grete Kasse havde lånt foreningens penge. Inde i bådehuset kvalte hun Peder med en flagline og slæbte ham ud bag huset.',
headline:'Kasserer anholdt for drab sankthansaften'});

KK.push({nr:131,theme:'Halloween',no:'K-4403',title:'Græskar',when:'Lørdag 31. oktober · ca. 22:30',where:'Halloweenfest i Villa Skygge, Klampenborg',
victim:'Morten Skygge (45), værten',victimLook:{sex:'m',hair:'short',hc:'sort',beard:'stubble',shirt:'#d46a1f',collar:'round'},
intro:'Ved en udklædningsfest findes værten død i kælderen. Alle var maskerede.',
brief:'Kl. 23:10 fandt en gæst i vampyrkostume værten Morten Skygge død i kælderen. Morten havde opdaget, at hans forretningspartner og en anden gæst havde snydt ham for millioner.',
options:[['Rasmus Vampyr, partner','Sofie Heks, ven','Kim Zombie, bror','Lene Spøgelse, hustru'],['Slag med græskar-lysestage','Kvælning med kappe','Gift i bowle'],['Kælderen','Vinkælderen','Garagen']],answer:[0,0,2],
info:[['Partner. Klædt ud som vampyr.','Ven. Klædt ud som heks.','Bror. Klædt ud som zombie.','Hustru. Klædt ud som spøgelse.'],
['Tung lysestage formet som græskar.','Kappe.','Bowle.'],
['Kælderen. Her blev han fundet.','Vinkælderen.','Garagen.']],
timeline:[['20:00','Fest.'],['21:30','Morten beder to om en snak.'],['21:45','Morten ses sidst.'],['23:10','Morten findes.']],
sketch:{title:'Kælderen · fundsted',items:[['shelf',60,130,24,200,0],['crate',300,200,40,30,0]],body:[200,140,40,.85],markers:[[1,240,120,'Olie']]},
evidence:[[
{type:'cctv',kind:'Overvågning',title:'Trappen',date:'31-10',camera:'TRAPPE',doors:[[80,'KÆLDER'],[240,'GARAGE']],cast:[['Vampyr','#111'],['Heks','#5b3f66']],frames:[{t:'21:45:00',at:[[50,.5],[60,.5]],txt:'Vampyr og heks følger Morten.'},{t:'21:48:00',at:[[78,0],null],txt:'Vampyren går mod garagen med Morten.'},{t:'21:50:00',at:[[78,0],[22,0]],txt:'Heksen går mod kælderen.'},{t:'22:20:00',at:[[22,0],[60,.5]],txt:'Vampyren går ned i kælderen med noget tungt. Heksen kommer op.'}],text:'Kun Rasmus er klædt ud som vampyr, og kun Sofie som heks.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 23:40',text:'Slag mod hovedet med noget tungt, eller mærker om halsen fra stof. Ingen tegn på gift. Han døde mellem 21:50 og 22:20.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Mortens kostume',bg:'stone',stamp:'K-4403 / 02',items:[['stain',100,90,1.4,0,'#3a3a3a'],['stain',220,100,1.2,0,'#5a1a2a']],caption:'Olie og vin. Olie er i garagen; vin i vinkælderen og garagen, hvor festens kasser stod. Kælderen er tør.'}
],[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Sofies Instagram live',meta:'21:50–22:20',lines:[['Sofie Heks','Hej alle! Jeg er i vinkælderen og vælger vin til festen. Se alle de flasker!'],['Sofie Heks','Klokken er ti. Jeg er her stadig, sammen med to andre gæster.'],['Sofie Heks','Klokken er tyve over ti. Nu går jeg op.']]},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne er fra kappen på hans kostume. Han døde af slaget med en græskar-lysestage.'}
]],
epilogue:'Rasmus Vampyr havde snydt Morten for millioner. I garagen slog han ham med en græskar-lysestage og bar ham ned i kælderen.',
headline:'Vampyr anholdt for halloweendrab'});

KK.push({nr:132,theme:'Guldbryllup',no:'K-4404',title:'Halvtreds år',when:'Lørdag 16. maj · ca. 21:00',where:'Kro i Ribe',
victim:'Karl Guld (78), guldbrudgom',victimLook:{sex:'m',hair:'short',hc:'hvid',beard:'moustache',age:'old',glasses:true,shirt:'#c9a43a',collar:'shirt'},
intro:'Ved et guldbryllup dør guldbrudgommen. Testamentet var lige ændret.',
brief:'Kl. 21:40 fandt en tjener Karl Guld død. Karl havde samme formiddag ændret sit testamente, så hans to sønner kun fik lidt.',
options:[['Poul Guld, søn','Jens Guld, søn','Ruth Guld, hustru','Inger Kok, kroejer'],['Gift i kaffe','Slag med stok','Kvælning med serviet'],['Krostuen','Haven','Værelse 4']],answer:[1,1,2],
info:[['Ældste søn.','Yngste søn.','Hustru.','Kroejer.'],
['Kaffe.','Spadserestok.','Serviet.'],
['Krostuen.','Kroens have.','Værelse 4.']],
timeline:[['18:00','Fest.'],['20:30','Karl siger det til sønnerne.'],['20:45','Karl ses sidst.'],['21:40','Karl findes.']],
sketch:{title:'Krostuen · fundsted',items:[['table',200,100,200,60,0,'Festbord'],['chair',140,60],['chair',260,60]],body:[200,200,80,.85],markers:[[1,240,180,'Sengetøjsfnug']]},
evidence:[[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Gæstens video',meta:'20:30',lines:[['Karl Guld','Poul og Jens. I får ikke det, I troede. Kom med op på værelset.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 22:10',text:'Slag mod hovedet med noget langt af træ, eller gift. Ingen kvælningsmærker. Han døde mellem 20:45 og 21:15.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Karls jakke',bg:'carpet',stamp:'K-4404 / 02',items:[['stain',100,90,1.4,0,'#f4f4f0'],['flower',220,100,1.2,0,'#c94a3b']],caption:'Sengetøjsfnug og rosenblade. Sengetøj er på værelse 4; rosenblade i haven og på værelset, hvor der var pyntet. Krostuen har ingen sengetøj.'}
],[
{type:'cctv',kind:'Overvågning',title:'Krostuen',date:'16-05',camera:'STUE',doors:[[160,'SCENE']],cast:[['Mand med guitar','#3e5b46']],frames:[{t:'20:45:00',at:[[50,.3]],txt:'Poul synger for gæsterne.'},{t:'21:00:00',at:[[50,.3]],txt:'Stadig.'},{t:'21:15:00',at:[[50,.3]],txt:'Stadig.'}],text:'Poul Guld synger i krostuen fra 20:40 til 21:20.'},
{type:'doc',style:'table',kind:'Laboratoriesvar',title:'Toksikologi',rows:[['Prøve','Fund'],['Blod','Ingen gift']],after:'Han døde af slaget med en stok.'},
{type:'doc',kind:'Rapport',title:'Haven',src:'Kriminalteknisk Center',text:'Haven var mørk og våd. Ingen spor af Karl.'}
]],
epilogue:'Jens Guld havde brug for arven. På værelse 4 slog han sin far med hans egen stok og bar ham ned i krostuen.',
headline:'Søn anholdt for drab til guldbryllup'});

KK.push({nr:133,theme:'Studenterfest',no:'K-4405',title:'Huen',when:'Fredag 26. juni · ca. 23:00',where:'Gymnasiet Fjordby',
victim:'Anders Rektor (59), rektor',victimLook:{sex:'m',hair:'short',hc:'grå',glasses:true,age:'old',shirt:'#2f3b55',collar:'shirt'},
intro:'Rektoren findes død i et klasselokale under studenterfesten.',
brief:'Kl. 23:40 fandt to studenter rektor Anders Rektor død i et klasselokale. Anders havde opdaget, at nogen havde solgt eksamensopgaver på forhånd.',
options:[['Tina Lærer, lærer','Kristian Kopi, pedel','Mads Student, student','Bente Rektor, hustru'],['Slag med globus','Kvælning med studenterhue-bånd','Gift i bowle'],['Klasselokale 12','Kopirummet','Lærerværelset']],answer:[1,0,1],
info:[['Lærer.','Pedel. Har nøgler til kopirummet.','Student.','Hustru.'],
['Globus.','Bånd fra en hue.','Bowle.'],
['Klasselokale 12. Her blev han fundet.','Kopirummet.','Lærerværelset.']],
timeline:[['20:00','Fest.'],['22:00','Anders beder to om en snak.'],['22:15','Anders ses sidst.'],['23:40','Anders findes.']],
sketch:{title:'Klasselokale 12 · fundsted',items:[['table',120,80,60,30,0],['table',280,80,60,30,0],['desk',200,200,120,30,0,'Kateder']],body:[200,140,40,.85],markers:[[1,240,120,'Toner']]},
evidence:[[
{type:'doc',style:'table',kind:'Kopilog',title:'Hvem kopierede opgaverne',rows:[['Dato','Kode'],['20.05','T. Lærer'],['21.05','K. Kopi']],after:'Anders skrev: "Tina og Kristian, mød mig."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 00:10',text:'Slag mod hovedet med noget rundt og hårdt, eller mærker om halsen fra et bånd. Ingen tegn på gift. Han døde mellem 22:15 og 22:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Anders’ jakke',bg:'carpet',stamp:'K-4405 / 02',items:[['stain',100,90,1.4,0,'#222'],['paper',220,100,1.2,0]],caption:'Toner og papir. Det findes i kopirummet og lærerværelset. Klasselokalet har ingen printer.'}
],[
{type:'cctv',kind:'Overvågning',title:'Festsalen',date:'26-06',camera:'SAL',doors:[[160,'SCENE']],cast:[['Lærer i rød kjole','#a3231b']],frames:[{t:'22:15:00',at:[[50,.3]],txt:'Tina danser med studenterne.'},{t:'22:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'22:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Tina Lærer er i festsalen fra 22:00 til 23:00.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Ingen kvælning. Han døde af slaget med en globus.'},
{type:'doc',kind:'Rapport',title:'Lærerværelset',src:'Vagt',text:'Lærerværelset var låst under festen.'}
]],
epilogue:'Kristian Kopi havde solgt opgaverne til studenter. I kopirummet slog han Anders med en globus og bar ham ind i klasselokale 12.',
headline:'Pedel anholdt for drab til studenterfest'});

KK.push({nr:134,theme:'Fastelavn',no:'K-4406',title:'Kattekongen',when:'Søndag 15. februar · ca. 15:00',where:'Fastelavnsfest i Gamle Kirkevej Forsamlingshus',
victim:'Ib Tønde (65), festudvalgsformand',victimLook:{sex:'m',hair:'bald',hc:'grå',beard:'moustache',age:'old',shirt:'#c94a3b',collar:'shirt'},
intro:'Til fastelavnsfesten findes formanden død i baglokalet. Tøndekassen er tom.',
brief:'Kl. 15:40 fandt en mor festudvalgsformand Ib Tønde død i baglokalet. Ib havde opdaget, at nogen havde taget penge fra festkassen år efter år.',
options:[['Dorthe Bolle, kasserer','Kurt Kat, næstformand','Mona Tønde, datter','Ole Slik, købmand'],['Slag med tøndekølle','Kvælning med serpentiner','Gift i fastelavnsbolle'],['Baglokalet','Køkkenet','Scenen']],answer:[0,0,1],
info:[['Kasserer.','Næstformand.','Datter.','Købmand. Leverer slik.'],
['Tøndekølle.','Serpentiner.','Fastelavnsbolle.'],
['Baglokalet. Her blev han fundet.','Køkkenet.','Scenen.']],
timeline:[['13:00','Tøndeslagning.'],['14:00','Ib beder to om en snak.'],['14:15','Ib ses sidst.'],['15:40','Ib findes.']],
sketch:{title:'Baglokalet · fundsted',items:[['crate',80,80,40,40,0],['table',300,200,80,40,0]],body:[200,140,40,.85],markers:[[1,240,120,'Flormelis']]},
evidence:[[
{type:'doc',style:'table',kind:'Festkassen',title:'Hvem har talt kassen',rows:[['År','Talt af'],['2023','D. Bolle + K. Kat'],['2024','D. Bolle + K. Kat']],after:'Ib skrev: "Dorthe og Kurt, baglokalet kl. 14."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 16:10',text:'Slag mod hovedet med noget tungt af træ, eller gift. Ingen kvælningsmærker. Han døde mellem 14:15 og 14:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Ibs skjorte',bg:'wood',stamp:'K-4406 / 02',items:[['stain',100,90,1.4,0,'#f4f1ea'],['stain',220,100,1.2,0,'#e9c46a']],caption:'Flormelis og creme. Det findes i køkkenet, hvor bollerne laves, og på scenen, hvor bolle-bordet står. Baglokalet har ingen bolle.'}
],[
{type:'cctv',kind:'Overvågning',title:'Salen',date:'15-02',camera:'SAL',doors:[[160,'SCENE']],cast:[['Næstformand som kat','#222']],frames:[{t:'14:15:00',at:[[50,.3]],txt:'Kurt kårer kattekonge.'},{t:'14:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'14:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Kurt Kat er i salen fra 14:10 til 15:00.'},
{type:'doc',style:'table',kind:'Laboratoriesvar',title:'Toksikologi',rows:[['Prøve','Fund'],['Blod','Ingen gift']],after:'Han døde af slaget med en tøndekølle.'},
{type:'doc',kind:'Rapport',title:'Scenen',src:'Musikeren',text:'Jeg spillede på scenen hele eftermiddagen. Ib kom ikke op.'}
]],
epilogue:'Dorthe Bolle havde taget fra festkassen i årevis. I køkkenet slog hun Ib med en tøndekølle og bar ham ind i baglokalet.',
headline:'Kasserer anholdt for fastelavnsdrab'});

KK.push({nr:135,theme:'Påskefrokost',no:'K-4407',title:'Påskeæg',when:'Lørdag 4. april · ca. 16:00',where:'Familiens sommerhus i Hornbæk',
victim:'Gunhild Æg (74), familiens overhoved',victimLook:{sex:'f',hair:'short',hc:'hvid',glasses:true,age:'old',shirt:'#d8c27a',collar:'v'},
intro:'Ved påskefrokosten falder familiens overhoved om. Hun skulle fordele arven.',
brief:'Kl. 16:30 fandt et barnebarn Gunhild Æg død i drivhuset. Gunhild havde sagt, at hun ville give sommerhuset til sit barnebarn i stedet for sine børn.',
options:[['Bent Æg, søn','Hanne Æg, datter','Sofie Æg, barnebarn','Peter Nabo, nabo'],['Gift i snaps','Slag med havespade','Kvælning med påskebånd'],['Drivhuset','Spisestuen','Redskabsskuret']],answer:[1,0,2],
info:[['Søn.','Datter.','Barnebarn.','Nabo.'],
['Snaps.','Havespade.','Gult bånd.'],
['Drivhuset. Her blev hun fundet.','Spisestuen.','Redskabsskuret.']],
timeline:[['12:00','Påskefrokost.'],['15:00','Gunhild fortæller om arven.'],['15:15','Gunhild ses sidst.'],['16:30','Gunhild findes.']],
sketch:{title:'Drivhuset · fundsted',items:[['table',200,60,300,30,0,'Bord med planter'],['plant',100,200,24,24,0]],body:[200,150,70,.85],markers:[[1,240,130,'Snapsglas']]},
evidence:[[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Barnebarnets video',meta:'15:00',lines:[['Gunhild Æg','Bent og Hanne. Sommerhuset går til Sofie. Kom med ud, så forklarer jeg.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 17:00',text:'Krampe og blå læber som ved gift, eller en bule fra noget af metal. Ingen kvælningsmærker. Hun døde mellem 15:15 og 15:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Gunhilds kjole',bg:'wood',stamp:'K-4407 / 02',items:[['glass',100,90,1.4,0],['stain',220,100,1.2,0,'#6a5a3a']],caption:'Snaps og jord. Snaps blev drukket i spisestuen og i redskabsskuret. Drivhuset har ingen snaps.'}
],[
{type:'cctv',kind:'Overvågning',title:'Stranden (drone)',date:'04-04',camera:'DRONE',doors:[],cast:[['Mand i grøn jakke','#3e7b46']],frames:[{t:'15:15:00',at:[[50,.3]],txt:'Bent går på stranden.'},{t:'15:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'15:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Bent Æg går tur på stranden fra 15:10 til 16:00. Giften virker inden for få minutter.'},
{type:'doc',kind:'Supplerende obduktion',title:'Bulen',src:'Retsmedicinsk Institut',text:'Bulen er fra faldet. Hun døde af gift i snaps.'},
{type:'doc',kind:'Rapport',title:'Spisestuen',src:'Barnebarnet',text:'Vi sad i spisestuen og spillede kort. Mormor kom ikke ind igen.'}
]],
epilogue:'Hanne Æg ville ikke miste sommerhuset. I redskabsskuret skænkede hun en "forsonings-snaps" med gift. Gunhild faldt om, og Hanne bar hende ind i drivhuset.',
headline:'Datter anholdt for påskedrab'});

KK.push({nr:136,theme:'Fødselsdag',no:'K-4408',title:'Halvtreds',when:'Lørdag 12. september · ca. 23:00',where:'Festlokale i Aalborg',
victim:'Tina Kage (50), fødselar',victimLook:{sex:'f',hair:'long',hc:'blond',age:'mid',earrings:true,shirt:'#c94a8a',collar:'v'},
intro:'Fødselaren findes død på sin egen 50-års fødselsdag.',
brief:'Kl. 23:40 fandt en gæst Tina Kage død i garderoben. Tina havde samme aften opdaget, at hendes mand havde en affære, og at nogen havde stjålet fra hendes firma.',
options:[['Jakob Kage, ægtemand','Lise Ven, veninde','Morten Kollega, kollega','Ida Kage, datter'],['Kvælning med pynt-guirlande','Slag med kagekniv','Gift i drink'],['Garderoben','Toilettet','Køkkenet']],answer:[1,0,2],
info:[['Ægtemand.','Bedste veninde.','Kollega.','Datter.'],
['Guirlande.','Stor kagekniv.','Drink.'],
['Garderoben. Her blev hun fundet.','Toilettet.','Køkkenet.']],
timeline:[['19:00','Fest.'],['22:00','Tina beder to om en snak.'],['22:15','Tina ses sidst.'],['23:40','Tina findes.']],
sketch:{title:'Garderoben · fundsted',items:[['shelf',200,40,300,20,0,'Frakker']],body:[200,150,40,.85],markers:[[1,240,130,'Glimmer']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Tinas telefon',owner:'Tina Kage',pin:'1209',pinHint:'Hendes fødselsdag (ddmm).',lockTime:'23:45',wall:'linear-gradient(160deg,#c94a8a,#f2e0c0)',msgs:[{with:'Jakob + Lise',m:[['me','22:00','Jeg ved det. Om jer to. Kom til mig nu.']]}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 00:10',text:'Mærker om halsen fra noget bredt med glimmer, og et lille snit. Ingen tegn på gift. Hun døde mellem 22:15 og 22:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Tinas kjole',bg:'tile',stamp:'K-4408 / 02',items:[['stain',100,90,1.4,0,'#f2e0c0'],['coin',220,100,1.2,0,'#c9a43a']],caption:'Kagecreme og guldglimmer. Det findes i køkkenet og toilettet, hvor guirlander var hængt op. Garderoben har ingen kage.'}
],[
{type:'cctv',kind:'Overvågning',title:'Dansegulvet',date:'12-09',camera:'SAL',doors:[[160,'DJ']],cast:[['Mand i blåt jakkesæt','#1f4e8a']],frames:[{t:'22:15:00',at:[[50,.3]],txt:'Jakob holder tale.'},{t:'22:30:00',at:[[50,.3]],txt:'Danser.'},{t:'22:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Jakob Kage er i salen fra 22:10 til 23:00.'},
{type:'doc',kind:'Supplerende obduktion',title:'Snittet',src:'Retsmedicinsk Institut',text:'Snittet er fra en negl. Hun døde af kvælning med en guirlande.'},
{type:'doc',kind:'Rapport',title:'Toilettet',src:'Gæst',text:'Toilettet var optaget af gæster hele tiden. Tina var der ikke.'}
]],
epilogue:'Lise Ven var den, der havde en affære med Jakob, og hun havde også stjålet fra Tinas firma. I køkkenet kvalte hun Tina med en guirlande og bar hende ind i garderoben.',
headline:'Veninde anholdt for drab til 50-års fødselsdag'});

KK.push({nr:137,theme:'Mindehøjtidelighed',no:'K-4409',title:'Sidste ord',when:'Fredag 20. marts · ca. 15:00',where:'Mindehøjtidelighed på Hotel Marina, Vedbæk',
victim:'Lars Erindring (56), afdødes bror',victimLook:{sex:'m',hair:'short',hc:'grå',glasses:true,age:'old',shirt:'#111111',collar:'shirt'},
intro:'Ved en mindehøjtidelighed dør den afdødes bror. Han ville sige sandheden om dødsfaldet.',
brief:'Kl. 15:40 fandt en tjener Lars Erindring død i et mødelokale. Lars var bror til en rig mand, der døde for en måned siden, og havde sagt: "Min bror blev slået ihjel."',
options:[['Vivi Enke, enke','Thomas Arv, søn','Bjarne Advokat, advokat','Jette Søster, søster'],['Gift i kaffe','Slag med mindeplade','Kvælning med sørgebånd'],['Mødelokalet','Terrassen','Salen']],answer:[0,1,1],
info:[['Enken.','Søn.','Advokat.','Søster.'],
['Kaffe.','Messingplade.','Sort bånd.'],
['Mødelokalet. Her blev han fundet.','Terrassen.','Salen.']],
timeline:[['13:00','Mindehøjtidelighed.'],['14:30','Lars siger, han vil tale.'],['14:45','Lars ses sidst.'],['15:40','Lars findes.']],
sketch:{title:'Mødelokalet · fundsted',items:[['table',200,100,160,60,0],['chair',140,60],['chair',260,60]],body:[200,190,70,.85],markers:[[1,240,170,'Cigaret']]},
evidence:[[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Mindetalen',meta:'14:30',lines:[['Lars Erindring','Min bror døde ikke naturligt. Vivi, Thomas, I ved, hvad der skete. Lad os tale.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 16:10',text:'Gift i blodet er ikke udelukket, men der er også et slag mod hovedet med noget fladt af metal. Ingen kvælningsmærker. Han døde mellem 14:45 og 15:15.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Lars’ jakke',bg:'deck',stamp:'K-4409 / 02',items:[['cigarette',100,90,1.4,0],['stain',220,100,1.2,0,'#cfe0f0']],caption:'Cigaretaske og havsprøjt. Det findes på terrassen, men også i salen ved den åbne havdør. Mødelokalet er røgfrit.'}
],[
{type:'cctv',kind:'Overvågning',title:'Salen',date:'20-03',camera:'SAL',doors:[[160,'SCENE']],cast:[['Ung mand med blomster','#2f3b55']],frames:[{t:'14:45:00',at:[[50,.3]],txt:'Thomas holder sin tale.'},{t:'15:00:00',at:[[50,.3]],txt:'Stadig.'},{t:'15:15:00',at:[[50,.3]],txt:'Stadig.'}],text:'Thomas Arv er på scenen i salen fra 14:40 til 15:20. Lars var ikke i salen.'},
{type:'doc',style:'table',kind:'Laboratoriesvar',title:'Toksikologi',rows:[['Prøve','Fund'],['Blod','Ingen gift']],after:'Han døde af slaget med en mindeplade.'}
]],
epilogue:'Vivi Enke havde forgiftet sin mand en måned tidligere. På terrassen sagde Lars, at han ville gå til politiet. Hun slog ham med en mindeplade og bar ham ind i mødelokalet.',
headline:'Enke anholdt for to drab'});

KK.push({nr:138,theme:'Juletræer',no:'K-4410',title:'Nordmannsgran',when:'Søndag 13. december · ca. 16:00',where:'Juletræsplantagen Grangården, Himmerland',
victim:'Niels Gran (64), juletræsavler',victimLook:{sex:'m',hair:'short',hc:'grå',beard:'full',age:'old',shirt:'#a3231b',collar:'shirt'},
intro:'Juletræsavleren findes død mellem granerne. Sæsonens penge er væk.',
brief:'Kl. 16:40 fandt en kunde juletræsavler Niels Gran død mellem træerne. Niels havde opdaget, at nogen solgte træer bag hans ryg.',
options:[['Kim Sav, medhjælper','Lene Net, sælger','Ole Gran, søn','Bodil Kunde, kunde'],['Motorsav','Slag med økse','Kvælning med juletræsnet'],['Mellem træerne','Salgsboden','Laden']],answer:[1,1,2],
info:[['Medhjælper. Fælder træer.','Sælger.','Søn.','Kunde.'],
['Motorsav.','Økse.','Net.'],
['Mellem granerne. Her blev han fundet.','Boden.','Laden.']],
timeline:[['10:00','Salg.'],['15:00','Niels beder to om en snak.'],['15:15','Niels ses sidst.'],['16:40','Niels findes.']],
sketch:{title:'Mellem granerne · fundsted',items:[['tree',80,60,30,30,0],['tree',180,60,30,30,0],['tree',280,60,30,30,0],['tree',80,200,30,30,0],['tree',280,200,30,30,0]],body:[200,140,40,.85],markers:[[1,240,120,'Halm']]},
evidence:[[
{type:'doc',style:'table',kind:'Salgsliste',title:'Træer uden kvittering',rows:[['Dato','Solgt af'],['05.12','K. Sav'],['07.12','L. Net'],['10.12','L. Net']],after:'Niels skrev: "Kim og Lene, mød mig kl. 15."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 17:10',text:'Hug i hovedet fra noget tungt og skarpt, eller mærker om halsen fra et net. Ingen savskader. Han døde mellem 15:15 og 15:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Niels’ jakke',bg:'snow',stamp:'K-4410 / 02',items:[['stain',100,90,1.4,0,'#d9c294'],['stain',220,100,1.2,0,'#6a8a3a']],caption:'Halm og grannåle. Det findes i laden og boden. Mellem træerne er der sne, men ingen sne på ryggen.'}
],[
{type:'cctv',kind:'Overvågning',title:'Fældeområdet',date:'13-12',camera:'MARK',doors:[],cast:[['Medhjælper med motorsav','#d46a1f']],frames:[{t:'15:15:00',at:[[50,.3]],txt:'Kim fælder træer.'},{t:'15:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'15:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Kim Sav fælder træer 1 km væk fra 15:00 til 16:00.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Ingen kvælning. Han døde af hug med en økse.'},
{type:'doc',kind:'Rapport',title:'Boden',src:'Kunde',text:'Boden var fyldt med kunder. Niels var der ikke efter kl. 15.'}
]],
epilogue:'Lene Net havde solgt træer bag Niels’ ryg. I laden slog hun ham med en økse og slæbte ham ud mellem granerne.',
headline:'Sælger anholdt for juletræsdrab'});
