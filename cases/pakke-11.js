'use strict';
// Sagsbunke 11.

KK.push({nr:109,theme:'Advokatkontor',no:'K-4201',title:'Fortrolig',when:'Onsdag 4. marts · ca. 20:00',where:'Advokatfirmaet Lov & Ret, Kongens Nytorv',
victim:'Henriette Lov (56), partner',victimLook:{sex:'f',hair:'bob',hc:'grå',glasses:true,age:'old',shirt:'#2b2e33',collar:'shirt'},
intro:'En advokat findes død i arkivet. En klients millioner er forsvundet fra klientkontoen.',
brief:'Kl. 20:40 fandt en rengøringsassistent advokat Henriette Lov død i arkivet. Henriette havde opdaget, at 5 mio. kr. var flyttet fra en klients konto.',
options:[['Mads Ret, partner','Julie Paragraf, fuldmægtig','Kim Klient, klient','Ole Lov, ægtemand'],['Slag med lovbog','Kvælning med slips','Gift i te'],['Arkivet','Mødelokalet','Mads Rets kontor']],answer:[0,0,2],
info:[['Partner. Har adgang til klientkontoen.','Fuldmægtig. Har adgang til klientkontoen.','Klienten.','Henriettes mand.'],
['Tyk, tung lovsamling.','Slips.','Te.'],
['Arkivet. Her blev hun fundet.','Mødelokalet.','Mads Rets kontor.']],
timeline:[['18:00','Henriette opdager overførslen.'],['19:00','Henriette beder to om en snak.'],['19:15','Henriette ses sidst.'],['20:40','Henriette findes.']],
sketch:{title:'Arkivet · fundsted',items:[['shelf',60,130,24,200,0],['shelf',200,130,24,200,0],['shelf',340,130,24,200,0]],body:[130,150,10,.8],markers:[[1,150,110,'Cigarlugt']]},
evidence:[[
{type:'computer',kind:'Computer',title:'Henriettes pc',owner:'Henriette Lov',user:'Henriette',password:'paragraf',hint:'Firmaets logo er et tegn: §. Skriv ordet.',mail:[{from:'Henriette',to:'Mads Ret; Julie Paragraf',time:'19:00',subject:'Klientkontoen',body:'5 mio. er flyttet. Kun I to har adgang. Jeg vil tale med jer.'}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 21:10',text:'Slag mod hovedet med noget tungt og firkantet, eller mærker om halsen fra stof. Ingen tegn på gift. Hun døde mellem 19:15 og 19:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Henriettes blazer',bg:'carpet',stamp:'K-4201 / 02',items:[['cigarette',100,90,1.4,0],['stain',220,100,1.2,0,'#6a4a2a']],caption:'Cigaraske og læderlugt. Cigarer ryges kun på Mads’ kontor og i mødelokalet efter møder. Arkivet er røgfrit.'}
],[
{type:'cctv',kind:'Overvågning',title:'Receptionen',date:'04-03',camera:'RECEPTION',doors:[[160,'DØR']],cast:[['Fuldmægtig i rød blazer','#a3231b']],frames:[{t:'19:10:00',at:[[50,0]],txt:'Julie går.'},{t:'19:12:00',at:[[80,.3]],txt:'Hun går mod metroen.'},{t:'19:45:00',at:[null],txt:'Ikke tilbage.'}],text:'Julie Paragraf forlader kontoret kl. 19:10.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Ingen kvælning. Hun døde af slaget med en lovsamling.'},
{type:'doc',kind:'Rapport',title:'Mødelokalet',src:'Kriminalteknisk Center',text:'Mødelokalet blev brugt til et klientmøde fra 19:00 til 20:30 med seks personer. Henriette var ikke der.'},
{type:'doc',style:'note',kind:'Seddel',title:'Logo på brevpapiret',text:'§ = "paragraf"'}
]],
epilogue:'Mads Ret havde flyttet klientens penge til sin egen konto. På sit kontor slog han Henriette med en tyk lovsamling, da hun truede med advokatsamfundet. Han bar hende ind i arkivet.',
headline:'Advokat anholdt for drab på partner'});

KK.push({nr:110,theme:'Fængsel',no:'K-4202',title:'Bag tremmer',when:'Søndag 22. februar · ca. 19:00',where:'Statsfængslet Østjylland',
victim:'Poul Vagt (54), fængselsbetjent',victimLook:{sex:'m',hair:'short',hc:'grå',beard:'stubble',age:'old',shirt:'#1f2a44',collar:'shirt'},
intro:'En fængselsbetjent findes død i fængslets vaskeri. Nogen smugler telefoner ind.',
brief:'Kl. 19:40 fandt en indsat fængselsbetjent Poul Vagt død i vaskeriet. Poul havde opdaget, at nogen smuglede telefoner ind til de indsatte.',
options:[['Kasper Nøgle, betjent','Line Celle, betjent','Ronni Fange, indsat','Bente Vagt, hustru'],['Kvælning med lagen','Slag med køllen','Gift i kaffe'],['Vaskeriet','Vagtstuen','Besøgsrummet']],answer:[1,1,2],
info:[['Fængselsbetjent.','Fængselsbetjent.','Indsat. Arbejder i vaskeriet.','Pouls kone.'],
['Lagen.','Betjentens kølle.','Kaffe.'],
['Vaskeriet. Her blev han fundet.','Vagtstuen.','Rum hvor indsatte får besøg.']],
timeline:[['17:00','Besøgstid.'],['18:00','Poul beder to om en snak.'],['18:15','Poul ses sidst.'],['19:40','Poul findes.']],
sketch:{title:'Vaskeriet · fundsted',items:[['barrel',80,60,40,40,0,'Maskine'],['barrel',160,60,40,40,0],['table',300,180,80,40,0]],body:[200,170,40,.85],markers:[[1,240,150,'Kaffeplet']]},
evidence:[[
{type:'doc',style:'table',kind:'Vagtplan',title:'Besøgsrummet',rows:[['Dag','Vagt'],['14.02','K. Nøgle'],['15.02','L. Celle'],['21.02','K. Nøgle']],after:'Telefonerne kom ind ved besøg. Poul skrev: "Kasper og Line, vagtstuen kl. 18."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 20:10',text:'Slag mod hovedet med noget rundt og hårdt, eller mærker om halsen fra stof. Ingen tegn på gift. Han døde mellem 18:15 og 18:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Pouls uniform',bg:'tile',stamp:'K-4202 / 02',items:[['cup',100,90,1.4,0],['paper',220,100,1.2,0]],caption:'Kaffeplet og besøgssedler. Kaffe og sedler er i vagtstuen og besøgsrummet. Vaskeriet har kun sæbe.'}
],[
{type:'cctv',kind:'Overvågning',title:'Gården',date:'22-02',camera:'GÅRD',doors:[[160,'CELLEFLØJ']],cast:[['Betjent med hund','#1f2a44']],frames:[{t:'18:15:00',at:[[50,.3]],txt:'Kasper går runde med hunden.'},{t:'18:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'18:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Kasper Nøgle går runde i gården fra 18:10 til 19:00.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Ingen kvælning. Han døde af slaget med en kølle.'},
{type:'doc',kind:'Rapport',title:'Vagtstuen',src:'Vagtchefen',text:'Jeg sad i vagtstuen hele aftenen. Poul kom ikke.'}
]],
epilogue:'Line Celle smuglede telefoner ind for penge. I besøgsrummet sagde Poul, at han ville anmelde hende. Hun slog ham med sin kølle og bar ham ind i vaskeriet.',
headline:'Fængselsbetjent anholdt for drab på kollega'});

KK.push({nr:111,theme:'Tandlæge',no:'K-4203',title:'Bedøvelsen',when:'Fredag 15. maj · ca. 17:00',where:'Tandklinikken Smil, Hellerup',
victim:'Dr. Karsten Smil (52), tandlæge',victimLook:{sex:'m',hair:'short',hc:'brun',glasses:true,shirt:'#f4f4f0',collar:'shirt'},
intro:'En tandlæge findes død i sin egen tandlægestol.',
brief:'Kl. 17:40 fandt en klinikassistent tandlæge Karsten Smil død i behandlingsstolen. Karsten havde opdaget, at nogen havde stjålet stærk bedøvelse fra klinikken.',
options:[['Tina Bor, klinikassistent','Jonas Plombe, tandlæge','Eva Smil, hustru','Rasmus Rod, tandtekniker'],['Overdosis bedøvelse','Slag med tandlægespejl','Kvælning med maske'],['Behandlingsrummet','Laboratoriet','Sterilrummet']],answer:[1,0,2],
info:[['Klinikassistent.','Tandlæge og partner. Har adgang til bedøvelsen.','Karstens kone.','Tandtekniker. Har adgang til bedøvelsen.'],
['Stærk bedøvelse.','Lille metalspejl.','Ilt-maske.'],
['Behandlingsrummet. Her blev han fundet.','Tandteknikerens laboratorium.','Rum hvor instrumenter steriliseres.']],
timeline:[['16:00','Sidste patient.'],['16:15','Karsten beder to om en snak.'],['16:30','Karsten ses sidst.'],['17:40','Karsten findes.']],
sketch:{title:'Behandlingsrummet · fundsted',items:[['bed',200,120,60,140,0,'Tandlægestol'],['desk',320,60,80,30,0]],body:[200,120,0,.7],markers:[[1,240,100,'Fugt på ærmet']]},
evidence:[[
{type:'doc',style:'table',kind:'Medicinlog',title:'Bedøvelse',rows:[['Dato','Udtaget af'],['12.05','J. Plombe'],['13.05','R. Rod'],['14.05','J. Plombe']],after:'Karsten skrev: "Jonas og Rasmus, mit rum kl. 16:15."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 18:10',text:'Små stikmærker i tandkødet og tegn på overdosis, men også et lille sår fra et metalinstrument. Ingen kvælningsmærker. Han døde mellem 16:30 og 17:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Karstens kittel',bg:'tile',stamp:'K-4203 / 02',items:[['stain',100,90,1.4,0,'#cfe0f0'],['stain',220,100,1.2,0,'#e8eef2']],caption:'Fugt fra damp og desinfektion. Det findes i sterilrummet og laboratoriet. Behandlingsrummet er tørt.'}
],[
{type:'doc',style:'receipt',kind:'Kvittering',title:'Rasmus’ tog',shop:'DSB',rows:[['16:10','Hellerup → Roskilde'],['16:45','Ankomst']],text:'Rasmus Rod var i toget. Kortdata bekræfter.'},
{type:'doc',kind:'Supplerende obduktion',title:'Såret',src:'Retsmedicinsk Institut',text:'Det lille sår er fra hans egen behandling i går. Han døde af overdosis bedøvelse.'},
{type:'doc',kind:'Rapport',title:'Laboratoriet',src:'Klinikassistent',text:'Laboratoriet var låst, efter Rasmus gik kl. 16. Jeg havde nøglen.'}
]],
epilogue:'Jonas Plombe havde stjålet bedøvelse til sit eget misbrug. I sterilrummet stak han Karsten med en overdosis, mens han vendte ryggen til. Han satte ham i tandlægestolen.',
headline:'Tandlæge anholdt for drab på partner'});

KK.push({nr:112,theme:'Plejehjem',no:'K-4204',title:'Natten på stue 7',when:'Tirsdag 10. november · ca. 02:00',where:'Plejehjemmet Solhjem, Randers',
victim:'Grete Omsorg (58), plejehjemsleder',victimLook:{sex:'f',hair:'short',hc:'grå',glasses:true,age:'old',shirt:'#7ab0d8',collar:'v'},
intro:'Plejehjemmets leder findes død i medicinrummet om natten. Beboernes penge er væk.',
brief:'Kl. 02:40 fandt en nattevagt leder Grete Omsorg død. Grete havde opdaget, at nogen stjal fra beboernes lommepenge og deres smykker.',
options:[['Søren Nat, nattevagt','Bente Pleje, sygeplejerske','Lars Omsorg, søn','Karen Kasse, administrator'],['Pude (kvælning)','Insulin-overdosis','Slag med rollator'],['Medicinrummet','Stue 7','Kontoret']],answer:[1,1,2],
info:[['Nattevagt.','Sygeplejerske.','Søn.','Administrator.'],
['Pude.','Insulin.','Rollator.'],
['Medicinrummet. Her blev hun fundet.','Beboerstue.','Kontoret.']],
timeline:[['23:00','Nattevagt.'],['01:00','Grete beder to om en snak.'],['01:15','Grete ses sidst.'],['02:40','Grete findes.']],
sketch:{title:'Medicinrummet · fundsted',items:[['shelf',60,130,24,200,0,'Medicin'],['desk',300,60,100,30,0]],body:[200,160,40,.85],markers:[[1,240,140,'Printerpapir']]},
evidence:[[
{type:'doc',style:'note',kind:'Seddel',title:'Gretes notat',text:'Penge og smykker mangler. Kun Søren og Bente har været alene med beboerne om natten. Taler med dem kl. 1.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 03:10',text:'Små blødninger i øjnene, som ved kvælning, men også et stikmærke på armen. Ingen slag. Hun døde mellem 01:15 og 01:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Gretes uniform',bg:'tile',stamp:'K-4204 / 02',items:[['paper',100,90,1.4,0],['stain',220,100,1.2,0,'#6b4a2b']],caption:'Printerpapir og kaffe. Det findes på kontoret og på stue 7, hvor en beboer har printer og kaffemaskine. Medicinrummet har ingen printer.'}
],[
{type:'cctv',kind:'Overvågning',title:'Gangen',date:'10-11',camera:'GANG',doors:[[80,'STUE 3'],[240,'STUE 4']],cast:[['Nattevagt med lommelygte','#1f2a44']],frames:[{t:'01:15:00',at:[[30,.3]],txt:'Søren går runde.'},{t:'01:30:00',at:[[60,.3]],txt:'Stadig.'},{t:'01:45:00',at:[[40,.3]],txt:'Stadig.'}],text:'Søren Nat går runde i gangen ved stue 1–6 fra 01:10 til 02:00.'},
{type:'doc',kind:'Supplerende obduktion',title:'Øjnene',src:'Retsmedicinsk Institut',text:'Blødningerne skyldes højt blodtryk. Hun døde af en overdosis insulin.'},
{type:'doc',kind:'Rapport',title:'Stue 7',src:'Beboeren på stue 7',text:'Jeg sov ikke. Ingen kom ind hos mig i nat.'}
]],
epilogue:'Bente Pleje stjal fra beboerne for at betale sit spillemisbrug. På kontoret sagde Grete, at hun ville anmelde hende. Bente stak hende med insulin og bar hende ind i medicinrummet.',
headline:'Sygeplejerske anholdt for drab på plejehjem'});

KK.push({nr:113,theme:'Universitet',no:'K-4205',title:'Ph.d.',when:'Torsdag 8. oktober · ca. 22:00',where:'Fysisk Institut, Aarhus Universitet',
victim:'Prof. Erik Atom (61), fysiker',victimLook:{sex:'m',hair:'curly',hc:'hvid',glasses:true,age:'old',shirt:'#3e5b46',collar:'shirt'},
intro:'En professor findes død i laboratoriet. Hans forskning er stjålet.',
brief:'Kl. 22:40 fandt en studerende professor Erik Atom død i laserlaboratoriet. Erik havde opdaget, at nogen havde sendt hans upublicerede forskning til et konkurrerende universitet.',
options:[['Signe Kvant, ph.d.','Jakob Lys, postdoc','Hanne Atom, hustru','Lars Laser, tekniker'],['Laserskade','Slag med mikroskop','Gift (laboratoriekemikalie)'],['Laserlaboratoriet','Kontoret','Kemilageret']],answer:[1,1,1],
info:[['Ph.d.-studerende.','Postdoc.','Eriks kone.','Tekniker.'],
['Kraftig laser.','Tungt mikroskop.','Kemikalie.'],
['Laserlaboratoriet. Her blev han fundet.','Eriks kontor.','Lager med kemikalier.']],
timeline:[['20:00','Erik arbejder.'],['21:00','Erik beder to om en snak.'],['21:15','Erik ses sidst.'],['22:40','Erik findes.']],
sketch:{title:'Laserlaboratoriet · fundsted',items:[['table',200,80,260,40,0,'Laserbord'],['shelf',40,180,20,80,0]],body:[200,180,80,.85],markers:[[1,240,160,'Kridt']]},
evidence:[[
{type:'computer',kind:'Computer',title:'Eriks pc',owner:'Erik Atom',user:'Erik',password:'foton',hint:'En lyspartikel.',mail:[{from:'Erik',to:'Signe Kvant; Jakob Lys',time:'21:00',subject:'Forskningen',body:'Mine data er sendt til Oxford. Kun I to havde dem. Kom til mig.'}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 23:10',text:'Ingen brændemærker fra laser. Slag mod hovedet med noget tungt af metal, eller tegn på forgiftning. Han døde mellem 21:15 og 21:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Eriks skjorte',bg:'paper',stamp:'K-4205 / 02',items:[['stain',100,90,1.4,0,'#f4f1ea'],['stain',220,100,1.2,0,'#7ab0d8']],caption:'Tavlekridt og kemikalier. Kridt er på kontoret, og kemikalierester både på kontoret og i kemilageret. Laserlaboratoriet har ingen tavle.'}
],[
{type:'cctv',kind:'Overvågning',title:'Forelæsningssalen',date:'08-10',camera:'AUDITORIUM',doors:[[160,'TAVLE']],cast:[['Ph.d. med hestehale','#c94a3b']],frames:[{t:'21:15:00',at:[[50,.3]],txt:'Signe holder øvelsestime.'},{t:'21:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'21:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Signe Kvant underviser fra 21:00 til 22:00.'},
{type:'doc',style:'table',kind:'Laboratoriesvar',title:'Toksikologi',rows:[['Prøve','Fund'],['Blod','Ingen kemikalier']],after:'Han døde af slaget med et mikroskop.'},
{type:'doc',kind:'Rapport',title:'Kemilageret',src:'Teknikeren',text:'Kemilageret er låst med to nøgler. Ingen åbnede det i aften.'},
{type:'doc',style:'note',kind:'Seddel',title:'På tavlen',text:'Kode til pc: foton'}
]],
epilogue:'Jakob Lys havde solgt Eriks data for en stilling i Oxford. På kontoret sagde Erik, at han ville ødelægge hans karriere. Jakob slog ham med et mikroskop og bar ham ind i laserlaboratoriet.',
headline:'Postdoc anholdt for drab på professor'});

KK.push({nr:114,theme:'Apotek',no:'K-4206',title:'Recept',when:'Mandag 23. februar · ca. 18:30',where:'Svaneapoteket, Aalborg',
victim:'Birgitte Pille (57), apoteker',victimLook:{sex:'f',hair:'bob',hc:'blond',glasses:true,age:'mid',shirt:'#f4f4f0',collar:'shirt'},
intro:'Apotekeren findes død i receptrummet. Morfin mangler i regnskabet.',
brief:'Kl. 19:10 fandt en farmakonom apoteker Birgitte Pille død. Birgitte havde opdaget, at nogen havde lavet falske recepter og solgt morfin.',
options:[['Niels Dosis, farmaceut','Anja Kapsel, farmakonom','Ove Pille, ægtemand','Jan Recept, læge'],['Morfin-overdosis','Slag med morter','Kvælning med kittelbælte'],['Receptrummet','Lageret','Kontoret']],answer:[1,2,1],
info:[['Farmaceut.','Farmakonom.','Birgittes mand.','Læge. Skriver mange recepter.'],
['Morfin.','Tung morter af marmor.','Bælte fra en kittel.'],
['Receptrummet. Her blev hun fundet.','Lager med medicin.','Kontoret.']],
timeline:[['17:30','Apoteket lukker.'],['17:45','Birgitte beder to om en snak.'],['18:00','Birgitte ses sidst.'],['19:10','Birgitte findes.']],
sketch:{title:'Receptrummet · fundsted',items:[['counter',200,60,300,30,0,'Disk'],['shelf',40,180,20,80,0]],body:[200,170,70,.85],markers:[[1,240,150,'Pappæske-fnug']]},
evidence:[[
{type:'doc',style:'table',kind:'Receptlog',title:'Falske recepter',rows:[['Dato','Ekspederet af'],['16.02','N. Dosis'],['18.02','A. Kapsel'],['20.02','A. Kapsel']],after:'Birgitte skrev: "Niels og Anja, efter lukning."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 19:40',text:'Små pupiller som ved morfin, men også mærker om halsen fra et bælte. Ingen slag. Hun døde mellem 18:00 og 18:30.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Birgittes kittel',bg:'tile',stamp:'K-4206 / 02',items:[['pills',100,90,1.4,0],['paper',220,100,1.2,0]],caption:'Pappæske-fnug og pillestøv. Det findes på lageret og på kontoret, hvor varer pakkes ud. Receptrummet er rent.'}
],[
{type:'cctv',kind:'Overvågning',title:'Parkeringspladsen',date:'23-02',camera:'P',doors:[[160,'DØR']],cast:[['Mand med cykelhjelm','#3a6ad8']],frames:[{t:'17:55:00',at:[[50,0]],txt:'Niels går.'},{t:'17:57:00',at:[[80,.3]],txt:'Cykler væk.'},{t:'18:30:00',at:[null],txt:'Ikke tilbage.'}],text:'Niels Dosis forlader apoteket kl. 17:55.'},
{type:'doc',kind:'Supplerende obduktion',title:'Pupillerne',src:'Retsmedicinsk Institut',text:'Ingen morfin i blodet. Pupillerne skyldes kvælningen. Hun døde af kvælning med et kittelbælte.'},
{type:'doc',kind:'Rapport',title:'Kontoret',src:'Kriminalteknisk Center',text:'Kontoret var låst. Kun Birgitte havde nøglen, og den lå i hendes taske i receptrummet.'}
]],
epilogue:'Anja Kapsel havde solgt morfin på falske recepter. På lageret sagde Birgitte, at hun ville ringe til politiet. Anja kvalte hende med bæltet fra sin kittel og bar hende ind i receptrummet.',
headline:'Farmakonom anholdt for drab på apotek'});

KK.push({nr:115,theme:'Ambassade',no:'K-4207',title:'Diplomati',when:'Torsdag 10. december · ca. 22:00',where:'En fremmed ambassade, Hellerup',
victim:'Klaus Brandt (58), dansk handelsattaché',victimLook:{sex:'m',hair:'short',hc:'grå',glasses:true,age:'old',shirt:'#111111',collar:'shirt'},
intro:'En dansk handelsattaché findes død på ambassadens bibliotek under en reception.',
brief:'Kl. 22:40 fandt en tjener handelsattaché Klaus Brandt død i ambassadens bibliotek. Klaus havde opdaget, at nogen solgte fortrolige handelsoplysninger.',
options:[['Mette Hemmelig, sekretær','Viktor Spion, attaché','Inger Brandt, hustru','Lars Pas, chauffør'],['Gift i champagne','Kvælning med slips','Slag med globus'],['Biblioteket','Arkivrummet','Haven']],answer:[1,2,1],
info:[['Sekretær.','Attaché fra et andet land.','Klaus’ kone.','Chauffør.'],
['Champagne.','Slips.','Tung messingglobus.'],
['Biblioteket. Her blev han fundet.','Arkivrum med dokumenter.','Ambassadens have.']],
timeline:[['20:00','Reception.'],['21:15','Klaus beder to om en snak.'],['21:30','Klaus ses sidst.'],['22:40','Klaus findes.']],
sketch:{title:'Biblioteket · fundsted',items:[['shelf',60,130,24,200,0],['roundtable',300,80,40,40,0,'Globus'],['sofa',300,200,100,36,0]],body:[180,150,40,.85],markers:[[1,240,130,'Papirfibre']]},
evidence:[[
{type:'audio',style:'voicemail',kind:'Telefonsvarer',label:'Klaus til Udenrigsministeriet',meta:'21:12',lines:[['Klaus Brandt','Det er Klaus. Oplysningerne er solgt. Mette og Viktor har haft adgang til papirerne. Jeg taler med dem nu.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 23:10',text:'Slag mod hovedet med noget rundt og tungt, eller tegn på forgiftning. Ingen mærker om halsen. Han døde mellem 21:30 og 22:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Klaus’ smoking',bg:'carpet',stamp:'K-4207 / 02',items:[['paper',100,90,1.4,0],['stain',220,100,1.2,0,'#6a8a3a']],caption:'Papirfibre fra gamle mapper og blade fra en buksbom. Mapper er i arkivrummet; buksbom står i arkivet og i haven. Biblioteket har ingen planter.'}
],[
{type:'cctv',kind:'Overvågning',title:'Festsalen',date:'10-12',camera:'SAL',doors:[[160,'SCENE']],cast:[['Sekretær i sort kjole','#111']],frames:[{t:'21:30:00',at:[[50,.3]],txt:'Mette taler med ambassadøren.'},{t:'21:45:00',at:[[50,.3]],txt:'Stadig.'},{t:'22:00:00',at:[[50,.3]],txt:'Stadig.'}],text:'Mette Hemmelig er i festsalen fra 21:20 til 22:20.'},
{type:'doc',style:'table',kind:'Laboratoriesvar',title:'Toksikologi',rows:[['Prøve','Fund'],['Champagne','Ingen gift'],['Blod','Ingen gift']],after:'Han døde af slaget med en globus.'},
{type:'doc',kind:'Rapport',title:'Haven',src:'Vagten',text:'Haven var oplyst og bevogtet. Klaus var ikke i haven.'}
]],
epilogue:'Viktor Spion havde købt oplysningerne af en ukendt kilde og ville ikke afsløres. I arkivrummet slog han Klaus med en messingglobus. Han bar ham ind i biblioteket.',
headline:'Udenlandsk attaché anholdt for drab på ambassade'});

KK.push({nr:116,theme:'Christiansborg',no:'K-4208',title:'Folketinget',when:'Tirsdag 6. oktober · ca. 23:00',where:'Christiansborg, København',
victim:'Lene Stemme (52), minister',victimLook:{sex:'f',hair:'bob',hc:'brun',age:'mid',shirt:'#1f4e8a',collar:'v'},
intro:'En minister findes død på sit kontor på Christiansborg aftenen før åbningsdebatten.',
brief:'Kl. 23:40 fandt en betjent minister Lene Stemme død på Christiansborg. Hun skulle næste dag afsløre en skandale om bestikkelse i sit eget ministerium.',
options:[['Jens Spin, rådgiver','Pia Partisk, departementschef','Ole Lobby, lobbyist','Kim Stemme, ægtemand'],['Slag med statuette','Kvælning','Gift i te'],['Ministerkontoret','Pressesalen','Wandelgangen']],answer:[2,0,2],
info:[['Særlig rådgiver.','Departementschef.','Lobbyist. Har adgangskort.','Ministerens mand.'],
['Bronzestatuette.','Med hænderne.','Te.'],
['Ministerens kontor. Her blev hun fundet.','Pressesalen.','Den lange gang.']],
timeline:[['21:00','Møde.'],['22:00','Lene beder to om en snak.'],['22:15','Lene ses sidst.'],['23:40','Lene findes.']],
sketch:{title:'Ministerkontoret · fundsted',items:[['desk',200,60,160,40,0],['shelf',40,130,20,160,0],['sofa',300,200,100,36,0]],body:[200,170,40,.85],markers:[[1,240,150,'Tæppefnug']]},
evidence:[[
{type:'doc',style:'note',kind:'Seddel',title:'Lenes notat',text:'Bestikkelsen gik gennem Ole og Pia. Mødes med dem kl. 22. Jens må ikke vide noget.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 00:10',text:'Slag mod hovedet med noget tungt af metal, eller kvælningsmærker. Ingen tegn på gift. Hun døde mellem 22:15 og 22:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Lenes blazer',bg:'carpet',stamp:'K-4208 / 02',items:[['stain',100,90,1.4,0,'#a3231b'],['stain',220,100,1.2,0,'#ddd']],caption:'Rødt tæppefnug og marmorstøv. Det findes i wandelgangen og i pressesalen. Kontoret har blåt tæppe.'}
],[
{type:'cctv',kind:'Overvågning',title:'Departementet',date:'06-10',camera:'DEP',doors:[[160,'DØR']],cast:[['Departementschef','#5b3f66']],frames:[{t:'22:15:00',at:[[50,.3]],txt:'Pia i møde.'},{t:'22:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'22:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Pia Partisk er i departementet på Slotsholmsgade fra 22:00 til 23:00.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Ingen kvælning. Hun døde af slaget med en bronzestatuette.'},
{type:'doc',kind:'Rapport',title:'Pressesalen',src:'Betjenten',text:'Pressesalen var låst efter kl. 20.'}
]],
epilogue:'Ole Lobby havde betalt bestikkelse gennem ministeriet. I wandelgangen sagde Lene, at hun ville afsløre ham. Han slog hende med en bronzestatuette og bar hende ind på hendes kontor.',
headline:'Lobbyist anholdt for drab på minister'});

KK.push({nr:117,theme:'Biotek',no:'K-4209',title:'Formlen',when:'Onsdag 18. marts · ca. 20:00',where:'BioNova, Hørsholm',
victim:'Dr. Mia Celle (44), forskningschef',victimLook:{sex:'f',hair:'long',hc:'sort',glasses:true,shirt:'#f4f4f0',collar:'shirt'},
intro:'En forskningschef findes død i laboratoriet. En ny medicin er værd milliarder.',
brief:'Kl. 20:40 fandt en laborant forskningschef Mia Celle død i et laboratorium. Mia havde opdaget, at nogen havde forfalsket testresultater for en ny medicin.',
options:[['Kasper Gen, forsker','Lone Test, laborant','Peter Aktie, direktør','Rune Celle, ægtemand'],['Gift (laboratoriekemikalie)','Slag med centrifuge-låg','Kvælning'],['Laboratorium 2','Kølerummet','Mødelokalet']],answer:[0,0,1],
info:[['Forsker.','Laborant.','Direktør.','Mias mand.'],
['Kemikalie.','Tungt låg.','Med hænderne.'],
['Laboratorium 2. Her blev hun fundet.','Kølerum med prøver.','Mødelokale.']],
timeline:[['18:00','Mia opdager fejl.'],['19:00','Mia beder to om en snak.'],['19:15','Mia ses sidst.'],['20:40','Mia findes.']],
sketch:{title:'Laboratorium 2 · fundsted',items:[['table',200,60,300,30,0,'Bænk'],['desk',300,200,80,30,0]],body:[200,150,70,.85],markers:[[1,240,130,'Is på ærmet']]},
evidence:[[
{type:'computer',kind:'Computer',title:'Mias pc',owner:'Mia Celle',user:'Mia',password:'helix',hint:'Formen på DNA.',mail:[{from:'Mia',to:'Kasper Gen; Lone Test',time:'19:00',subject:'Testene',body:'Resultaterne er forfalsket. Kun I to har ført data. Kom nu.'}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 21:10',text:'Kramper og blå læber som ved gift, eller en bule fra noget tungt. Ingen kvælningsmærker. Hun døde mellem 19:15 og 19:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Mias kittel',bg:'tile',stamp:'K-4209 / 02',items:[['stain',100,90,1.4,0,'#cfe0f0'],['paper',220,100,1.2,0]],caption:'Iskrystaller og labels fra prøveglas. Det findes i kølerummet og mødelokalet, hvor prøver blev fremvist. Laboratorium 2 har ingen is.'}
],[
{type:'doc',style:'table',kind:'Videomøde',title:'Lones møde',rows:[['Tid','Hvem'],['19:00–20:00','Lone Test · undervisning af studerende via video']],after:'Lone er på kamera hele tiden.'},
{type:'doc',kind:'Supplerende obduktion',title:'Bulen',src:'Retsmedicinsk Institut',text:'Bulen er fra faldet. Hun døde af en gift fra laboratoriet. Giften virker inden for få minutter, så hun fik den efter kl. 19:15.'},
{type:'doc',kind:'Rapport',title:'Mødelokalet',src:'Receptionen',text:'Mødelokalet var booket af direktionen fra 18:30 til 20:30. Mia var der ikke.'},
{type:'doc',style:'note',kind:'Seddel',title:'På Mias skærm',text:'helix'}
]],
epilogue:'Kasper Gen havde forfalsket testene for at få sin bonus. I kølerummet gav han Mia en kop kaffe med et giftigt kemikalie. Hun faldt om, og han bar hende ind i laboratorium 2.',
headline:'Forsker anholdt for giftmord i biotekfirma'});

KK.push({nr:118,theme:'Vandværk',no:'K-4210',title:'Rent vand',when:'Mandag 1. juni · ca. 07:00',where:'Fjordby Vandværk',
victim:'Svend Kilde (62), vandværksformand',victimLook:{sex:'m',hair:'short',hc:'grå',beard:'stubble',age:'old',shirt:'#3a6ad8',collar:'shirt'},
intro:'Vandværkets formand findes død i et filteranlæg. Vandprøverne var forfalsket.',
brief:'Kl. 07:40 fandt en tekniker formand Svend Kilde død i filterhallen. Svend havde opdaget, at nogen havde forfalsket vandprøver for at skjule forurening.',
options:[['Karin Prøve, laborant','Jens Rør, driftsleder','Ida Kilde, datter','Bo Gift, landmand'],['Drukning i filtertank','Slag med skruenøgle','Klor-gas'],['Filterhallen','Laboratoriet','Pumpehuset']],answer:[1,1,2],
info:[['Laborant. Tager prøverne.','Driftsleder.','Datter.','Landmand. Forurener med sprøjtemidler.'],
['Filtertank.','Stor skruenøgle.','Klor.'],
['Filterhallen. Her blev han fundet.','Laboratoriet.','Pumpehuset.']],
timeline:[['06:00','Svend kommer.'],['06:15','Svend beder to om en snak.'],['06:30','Svend ses sidst.'],['07:40','Svend findes.']],
sketch:{title:'Filterhallen · fundsted',items:[['barrel',100,80,60,60,0,'Tank'],['barrel',300,80,60,60,0,'Tank']],body:[200,190,80,.85],markers:[[1,240,170,'Olie']]},
evidence:[[
{type:'doc',style:'table',kind:'Prøvelog',title:'Forfalskede prøver',rows:[['Dato','Udtaget','Godkendt'],['20.05','K. Prøve','J. Rør'],['27.05','K. Prøve','J. Rør']],after:'Svend skrev: "Karin og Jens, kom kl. 6:15."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 08:10',text:'Ingen vand i lungerne: ingen drukning. Slag mod hovedet med noget tungt af metal, og let irritation i øjnene, som kan være klor. Han døde mellem 06:30 og 07:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Svends kedeldragt',bg:'stone',stamp:'K-4210 / 02',items:[['stain',100,90,1.4,0,'#3a3a3a'],['wrench',220,100,1.2,0]],caption:'Maskinolie og rust. Det findes i pumpehuset og laboratoriet, hvor gamle pumper står. Filterhallen er ren.'}
],[
{type:'cctv',kind:'Overvågning',title:'Prøvetagning ved boring 4',date:'01-06',camera:'BORING 4',doors:[],cast:[['Laborant med kasse','#f4f4f0']],frames:[{t:'06:30:00',at:[[50,.3]],txt:'Karin tager prøver.'},{t:'06:45:00',at:[[50,.3]],txt:'Stadig.'},{t:'07:00:00',at:[[50,.3]],txt:'Stadig.'}],text:'Karin Prøve er ved boring 4, 3 km væk, fra 06:20 til 07:10.'},
{type:'doc',kind:'Supplerende obduktion',title:'Øjnene',src:'Retsmedicinsk Institut',text:'Ingen klor i lungerne. Han døde af slaget med en skruenøgle.'},
{type:'doc',kind:'Rapport',title:'Laboratoriet',src:'Kriminalteknisk Center',text:'Laboratoriet var låst. Karin havde nøglen med til boringen.'}
]],
epilogue:'Jens Rør havde taget imod penge fra en landmand for at skjule forureningen. I pumpehuset slog han Svend med en skruenøgle og bar ham ind i filterhallen.',
headline:'Driftsleder anholdt for drab på vandværk'});
