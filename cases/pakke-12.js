'use strict';
// Sagsbunke 12.

KK.push({nr:119,theme:'Olieplatform',no:'K-4301',title:'Nordsøen',when:'Søndag 18. januar · ca. 03:00',where:'Olieplatformen Dan Bravo, Nordsøen',
victim:'Torben Boring (51), platformschef',victimLook:{sex:'m',hair:'short',hc:'grå',beard:'full',age:'old',shirt:'#d46a1f',collar:'round'},
intro:'Platformschefen findes død på en olieplatform midt i Nordsøen. Ingen kan forlade platformen i stormen.',
brief:'Kl. 03:40 fandt en arbejder platformschef Torben Boring død på et af dækkene. Stormen gjorde det umuligt for helikoptere at flyve. Torben havde opdaget, at nogen havde forfalsket sikkerhedstjek.',
options:[['Rune Ventil, ingeniør','Maja Gas, sikkerhedsleder','Kim Kran, kranfører','Søren Kok, kok'],['Fald fra dæk','Slag med skruenøgle','Gasforgiftning'],['Borevæsken-rummet','Kontrolrummet','Kantinen']],answer:[1,1,1],
info:[['Ingeniør.','Sikkerhedsleder. Underskriver tjek.','Kranfører.','Kok.'],
['Højt fald.','Stor skruenøgle.','Gas fra rørene.'],
['Rum med borevæske. Her blev han fundet.','Kontrolrummet.','Kantinen.']],
timeline:[['00:00','Nattevagt.'],['02:00','Torben beder to om en snak.'],['02:15','Torben ses sidst.'],['03:40','Torben findes.']],
sketch:{title:'Borevæsken-rummet · fundsted',items:[['barrel',80,80,40,40,0],['barrel',160,80,40,40,0],['stairs',340,180,30,60,0]],body:[220,170,40,.85],markers:[[1,250,150,'Kaffe på dragten']]},
evidence:[[
{type:'doc',style:'table',kind:'Tjekliste',title:'Forfalskede tjek',rows:[['Dato','Udført af','Godkendt af'],['10.01','R. Ventil','M. Gas'],['15.01','R. Ventil','M. Gas']],after:'Torben skrev: "Rune og Maja, kom til mig kl. 2."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Platformens læge · 04:10',text:'Ingen brud: han er ikke faldet. Slag mod hovedet med noget tungt af metal, og røde øjne, som kan være gas. Han døde mellem 02:15 og 02:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Torbens dragt',bg:'deck',stamp:'K-4301 / 02',items:[['cup',100,90,1.4,0],['paper',220,100,1.2,0]],caption:'Kaffe og printerpapir. Det findes i kontrolrummet og i kantinen, hvor rapporter printes. Borevæsken-rummet har ingen papir.'}
],[
{type:'audio',style:'radio',kind:'Radiolog',label:'Platformens radio',meta:'02:15–02:50',lines:[['Rune Ventil','Kontrol, Rune her. Jeg er på boredæk 3 og tjekker trykket.'],['Kontrol','Modtaget, Rune.'],['Rune Ventil','Kvart i tre. Stadig på boredæk 3. Det her tager hele natten.']]},
{type:'doc',kind:'Supplerende obduktion',title:'Øjnene',src:'Retsmedicinsk Institut',text:'Ingen gas i blodet. Han døde af slaget med en skruenøgle.'},
{type:'doc',kind:'Rapport',title:'Kantinen',src:'Kokken',text:'Jeg lavede morgenmad i kantinen fra kl. 2. Torben kom ikke.'}
]],
epilogue:'Maja Gas havde godkendt falske tjek for at spare tid. I kontrolrummet sagde Torben, at han ville anmelde hende. Hun slog ham med en skruenøgle og slæbte ham ned i borevæske-rummet.',
headline:'Sikkerhedsleder anholdt for drab på olieplatform'});

KK.push({nr:120,theme:'Kalkmine',no:'K-4302',title:'Under jorden',when:'Lørdag 31. oktober · ca. 21:00',where:'Mønsted Kalkgruber',
victim:'Helge Kalk (60), guide',victimLook:{sex:'m',hair:'short',hc:'hvid',beard:'full',age:'old',shirt:'#8a8a8a',collar:'round'},
intro:'Under en halloween-tur i kalkgruberne findes guiden død i en sidegang.',
brief:'Kl. 21:40 fandt gæster guiden Helge Kalk død i en sidegang i kalkgruberne. Helge havde opdaget, at nogen solgte gamle fund fra gruberne.',
options:[['Lise Lygte, guide','Erik Hule, vicevært','Bo Kalk, søn','Dorte Fund, samler'],['Nedfaldende kalksten','Slag med lygte','Kvælning med reb'],['Sidegangen','Ostelageret i gruben','Udstyrsrummet']],answer:[1,2,2],
info:[['Guide.','Vicevært. Har nøgler til alle gange.','Søn.','Samler.'],
['Løse kalksten.','Tung lygte.','Reb.'],
['Mørk sidegang. Her blev han fundet.','Gang hvor oste modner.','Rum med reb og hjelme.']],
timeline:[['19:00','Halloween-tur.'],['20:00','Helge beder to om en snak.'],['20:15','Helge ses sidst.'],['21:40','Helge findes.']],
sketch:{title:'Sidegangen · fundsted',items:[['wall',40,60,320,0,0],['wall',40,200,320,0,0]],body:[200,130,90,.85],markers:[[1,240,110,'Rebfibre']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Helges telefon',owner:'Helge Kalk',lockTime:'21:45',wall:'linear-gradient(160deg,#8a8a8a,#f4f1ea)',msgs:[{with:'Lise + Erik',m:[['me','20:00','Fundene er solgt. Kun I to har haft nøgler til lageret. Kom nu.']]}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 22:10',text:'Ingen knusning fra sten. Mærker om halsen fra et groft reb, og en bule fra noget af metal. Han døde mellem 20:15 og 20:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Helges jakke',bg:'stone',stamp:'K-4302 / 02',items:[['rope',100,90,1.4,0,'#d8c27a'],['stain',220,100,1.2,0,'#f2e0a0']],caption:'Rebfibre og ostesvamp. Det findes i udstyrsrummet og ostelageret. Sidegangen har kun kalk.'}
],[
{type:'cctv',kind:'Overvågning',title:'Hovedgangen',date:'31-10',camera:'GANG',doors:[[160,'GRUBE']],cast:[['Guide med heksehat','#111']],frames:[{t:'20:15:00',at:[[50,.3]],txt:'Lise fører en gruppe.'},{t:'20:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'20:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Lise Lygte fører en gruppe i hovedgangen fra 20:10 til 21:00.'},
{type:'doc',kind:'Supplerende obduktion',title:'Bulen',src:'Retsmedicinsk Institut',text:'Bulen er fra hjelmen. Han døde af kvælning med et reb.'},
{type:'doc',kind:'Rapport',title:'Ostelageret',src:'Ostemester',text:'Ostelageret var låst med alarm.'}
]],
epilogue:'Erik Hule havde solgt fund fra gruberne. I udstyrsrummet kvalte han Helge med et reb og bar ham ind i sidegangen.',
headline:'Vicevært anholdt for drab i kalkgruberne'});

KK.push({nr:121,theme:'Metro',no:'K-4303',title:'Sidste tog',when:'Fredag 4. december · ca. 00:30',where:'Metroens kontrolcenter, Ørestad',
victim:'Nadia Skinne (39), driftsleder',victimLook:{sex:'f',hair:'long',hc:'sort',shirt:'#1f4e8a',collar:'shirt'},
intro:'Metroens driftsleder findes død i et teknikrum. En sikkerhedsfejl blev skjult.',
brief:'Kl. 01:10 fandt en tekniker driftsleder Nadia Skinne død i et teknikrum. Nadia havde opdaget, at nogen havde skjult en fejl i sikkerhedssystemet.',
options:[['Jonas Signal, ingeniør','Karin Tog, operatør','Ali Spor, tekniker','Peter Skinne, bror'],['Strømstød','Slag med sikkerhedshjelm','Kvælning med kabel'],['Teknikrummet','Kontrolrummet','Serverrummet']],answer:[0,2,2],
info:[['Ingeniør.','Operatør.','Tekniker.','Bror.'],
['Højspænding.','Hjelm.','Kabel.'],
['Teknikrummet. Her blev hun fundet.','Kontrolrummet.','Serverrummet.']],
timeline:[['22:00','Nattevagt.'],['23:30','Nadia beder to om en snak.'],['23:45','Nadia ses sidst.'],['01:10','Nadia findes.']],
sketch:{title:'Teknikrummet · fundsted',items:[['shelf',60,130,24,200,0],['desk',300,60,100,30,0]],body:[200,170,40,.85],markers:[[1,240,150,'Serverstøv']]},
evidence:[[
{type:'computer',kind:'Computer',title:'Nadias pc',owner:'Nadia Skinne',user:'Nadia',password:'metro',hint:'Det hun arbejder med.',mail:[{from:'Nadia',to:'Jonas Signal; Ali Spor',time:'23:30',subject:'Fejlen',body:'Fejlen er skjult i loggen. Kun I to har adgang. Kom nu.'}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 01:40',text:'Mærker om halsen fra et kabel, og et lille brændemærke på hånden. Ingen slag. Hun døde mellem 23:45 og 00:15.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Nadias skjorte',bg:'tile',stamp:'K-4303 / 02',items:[['stain',100,90,1.4,0,'#888'],['stain',220,100,1.2,0,'#333']],caption:'Serverstøv og kabelfnug. Det findes i serverrummet og kontrolrummet. Teknikrummet er støvsuget.'}
],[
{type:'cctv',kind:'Overvågning',title:'Sporet ved Kongens Nytorv',date:'04-12',camera:'SPOR',doors:[],cast:[['Tekniker i gul vest','#d8e030']],frames:[{t:'23:45:00',at:[[50,.3]],txt:'Ali arbejder på sporet.'},{t:'00:00:00',at:[[50,.3]],txt:'Stadig.'},{t:'00:15:00',at:[[50,.3]],txt:'Stadig.'}],text:'Ali Spor er på sporet ved Kongens Nytorv fra 23:40 til 00:40.'},
{type:'doc',kind:'Supplerende obduktion',title:'Brændemærket',src:'Retsmedicinsk Institut',text:'Brændemærket er gammelt. Hun døde af kvælning med et kabel.'},
{type:'doc',kind:'Rapport',title:'Kontrolrummet',src:'Operatøren',text:'Jeg sad i kontrolrummet hele natten. Nadia kom ikke ind.'},
{type:'doc',style:'note',kind:'Seddel',title:'Post-it',text:'pc: metro'}
]],
epilogue:'Jonas Signal havde skjult fejlen for at undgå en dyr nedlukning. I serverrummet kvalte han Nadia med et kabel og bar hende ind i teknikrummet.',
headline:'Ingeniør anholdt for drab i metroen'});

KK.push({nr:122,theme:'Rally',no:'K-4304',title:'Speedstage',when:'Lørdag 12. september · ca. 14:00',where:'Rally Djursland',
victim:'Kim Gas (44), rallykører',victimLook:{sex:'m',hair:'short',hc:'blond',beard:'stubble',shirt:'#a3231b',collar:'round'},
intro:'Rallykøreren findes død i servicezonen. Bilen var saboteret.',
brief:'Kl. 14:40 fandt en mekaniker rallykører Kim Gas død i servicezonen. Kim havde opdaget, at nogen havde snydt med bilernes motorer i mesterskabet.',
options:[['Lars Motor, mekaniker','Tina Kort, co-driver','Bo Turbo, konkurrent','Mette Gas, hustru'],['Slag med donkraft','Udstødningsgas','Kvælning med sele'],['Servicezonen','Teltet','Lastbilen']],answer:[2,0,2],
info:[['Mekaniker.','Co-driver.','Konkurrent.','Hustru.'],
['Tung donkraft.','Gas fra motor.','Sikkerhedssele.'],
['Servicezonen. Her blev han fundet.','Holdets telt.','Lastbilen med reservedele.']],
timeline:[['10:00','Rally.'],['13:00','Kim konfronterer to.'],['13:15','Kim ses sidst.'],['14:40','Kim findes.']],
sketch:{title:'Servicezonen · fundsted',items:[['car',200,80,160,60,0,'Rallybil'],['crate',80,200,40,30,0]],body:[200,190,80,.85],markers:[[1,240,170,'Olie']]},
evidence:[[
{type:'audio',style:'radio',kind:'Radiolog',label:'Holdets radio',meta:'13:00',lines:[['Kim Gas','Motorerne er tunet ulovligt. Lars og Bo, det er jer. Vi tager den i pausen.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 15:10',text:'Slag mod hovedet med noget tungt af metal, eller tegn på gas. Ingen mærker om halsen. Han døde mellem 13:15 og 13:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Kims dragt',bg:'asphalt',stamp:'K-4304 / 02',items:[['stain',100,90,1.4,0,'#3a3a3a'],['wrench',220,100,1.2,0]],caption:'Olie og gummi. Det findes i lastbilen og teltet. Servicezonen er grus, og der er ingen grus på dragten.'}
],[
{type:'cctv',kind:'Overvågning',title:'Holdets bil',date:'12-09',camera:'BIL',doors:[],cast:[['Mekaniker','#3e7b46']],frames:[{t:'13:15:00',at:[[50,.3]],txt:'Lars skifter dæk.'},{t:'13:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'13:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Lars Motor skifter dæk ved holdets bil fra 13:10 til 14:00.'},
{type:'doc',kind:'Supplerende obduktion',title:'Gas',src:'Retsmedicinsk Institut',text:'Ingen gas i blodet. Han døde af slaget med en donkraft.'},
{type:'doc',kind:'Rapport',title:'Teltet',src:'Hold-kok',text:'Jeg lavede mad i teltet. Kim kom ikke.'}
]],
epilogue:'Bo Turbo havde snydt med sin motor. I lastbilen slog han Kim med en donkraft og bar ham ud i servicezonen.',
headline:'Rallykører anholdt for drab på konkurrent'});

KK.push({nr:123,theme:'Motorcykelklub',no:'K-4305',title:'Klubhuset',when:'Lørdag 6. juni · ca. 23:00',where:'MC-klubben Jernhestene, Næstved',
victim:'Steffen "Bjørn" Hald (55), præsident',victimLook:{sex:'m',hair:'long',hc:'grå',beard:'full',age:'old',shirt:'#111111',collar:'round'},
intro:'Motorcykelklubbens præsident findes død i garagen efter klubfesten.',
brief:'Kl. 23:40 fandt et medlem præsident Steffen Hald død i garagen. Steffen havde opdaget, at nogen havde taget klubbens penge til en tur.',
options:[['Rikke Ræs, kasserer','Jens Krom, vicepræsident','Ole Hald, bror','Lise Læder, kæreste'],['Slag med kæde','Udstødningsgas','Slag med skruenøgle'],['Garagen','Baren','Kontoret']],answer:[1,0,2],
info:[['Kasserer.','Vicepræsident.','Bror.','Kæreste.'],
['Motorcykelkæde.','Gas.','Skruenøgle.'],
['Garagen. Her blev han fundet.','Klubbens bar.','Kontoret.']],
timeline:[['20:00','Fest.'],['22:00','Steffen beder to om en snak.'],['22:15','Steffen ses sidst.'],['23:40','Steffen findes.']],
sketch:{title:'Garagen · fundsted',items:[['car',120,80,100,40,0,'MC'],['car',280,80,100,40,0,'MC']],body:[200,190,80,.85],markers:[[1,240,170,'Papirstøv']]},
evidence:[[
{type:'doc',style:'note',kind:'Seddel',title:'Steffens notat',text:'Turpengene mangler. Rikke og Jens har koden. Snak efter talen.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 00:10',text:'Slag mod hovedet med noget tungt og leddelt, eller gas. Ingen skader fra en skruenøgle. Han døde mellem 22:15 og 22:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Steffens vest',bg:'carpet',stamp:'K-4305 / 02',items:[['paper',100,90,1.4,0],['stain',220,100,1.2,0,'#6b4a2b']],caption:'Papirstøv og øl. Det findes på kontoret og i baren. Garagen har ingen papir.'}
],[
{type:'cctv',kind:'Overvågning',title:'Baren',date:'06-06',camera:'BAR',doors:[[160,'BAR']],cast:[['Kasserer i læderjakke','#5a3a22']],frames:[{t:'22:15:00',at:[[50,.3]],txt:'Rikke skænker øl.'},{t:'22:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'22:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Rikke Ræs står i baren fra 22:00 til 23:00. Steffen kom ikke ind i baren efter talen.'},
{type:'doc',kind:'Supplerende obduktion',title:'Gas',src:'Retsmedicinsk Institut',text:'Ingen gas. Han døde af slaget med en kæde.'}
]],
epilogue:'Jens Krom havde brugt klubbens turpenge. På kontoret slog han Steffen med en motorcykelkæde og bar ham ud i garagen.',
headline:'Vicepræsident anholdt for drab i MC-klub'});

KK.push({nr:124,theme:'Veteranbiler',no:'K-4306',title:'Krom og benzin',when:'Søndag 7. juni · ca. 16:00',where:'Veterantræf, Egeskov Slot',
victim:'Hugo Krom (70), samler',victimLook:{sex:'m',hair:'short',hc:'hvid',beard:'moustache',age:'old',shirt:'#c9a43a',collar:'shirt'},
intro:'En rig bilsamler findes død under sin sjældne Jaguar ved veterantræffet.',
brief:'Kl. 16:40 fandt en gæst samler Hugo Krom død under sin Jaguar fra 1961. Det lignede, at donkraften havde givet efter. Hugo havde opdaget, at hans bil var blevet byttet med en kopi.',
options:[['Søren Lak, mekaniker','Ib Motor, sælger','Ruth Krom, hustru','Kasper Bil, nabo'],['Bil faldt ned','Slag med hjulkryds','Kvælning med bilsele'],['Under bilen','Værkstedsteltet','Sælgerens telt']],answer:[1,1,2],
info:[['Mekaniker. Har passet Hugos biler.','Bilsælger. Solgte bilen til Hugo.','Hugos kone.','Nabo.'],
['Bilen kunne falde ned af donkraften.','Hjulkryds af stål.','Bilsele.'],
['Under Jaguaren. Her blev han fundet.','Telt med værktøj.','Sælgerens telt.']],
timeline:[['12:00','Træf.'],['15:00','Hugo opdager kopien.'],['15:15','Hugo ses sidst.'],['16:40','Hugo findes.']],
sketch:{title:'Under bilen · fundsted',items:[['car',200,110,200,70,0,'Jaguar E-type'],['crate',340,200,30,30,0]],body:[200,130,90,.7],markers:[[1,240,170,'Champagne']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Hugos telefon',owner:'Hugo Krom',pin:'1961',pinHint:'Årgangen på hans Jaguar.',lockTime:'16:45',wall:'linear-gradient(160deg,#c9a43a,#2f3b55)',msgs:[{with:'Søren + Ib',m:[['me','15:00','Min Jaguar er en kopi! Kun I to har haft den. Kom nu.']]}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 17:10',text:'Ingen knusning: bilen faldt ikke på ham. Slag mod hovedet med noget tungt af stål, eller mærker om halsen. Han døde mellem 15:15 og 15:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Hugos jakke',bg:'grass',stamp:'K-4306 / 02',items:[['glass',100,90,1.4,0],['paper',220,100,1.2,0]],caption:'Champagne og salgsbrochure. Det findes i sælgerens telt og i værkstedsteltet, hvor brochurer også lå. Under bilen er der kun græs.'}
],[
{type:'cctv',kind:'Overvågning',title:'Præmieoverrækkelsen',date:'07-06',camera:'SCENE',doors:[[160,'SCENE']],cast:[['Mekaniker i blå kedeldragt','#1f4e8a']],frames:[{t:'15:15:00',at:[[50,.2]],txt:'Søren får præmie for restaurering.'},{t:'15:30:00',at:[[50,.2]],txt:'Interview.'},{t:'15:45:00',at:[[50,.2]],txt:'Stadig.'}],text:'Søren Lak er på scenen fra 15:10 til 15:50.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Ingen kvælning. Han døde af slaget med et hjulkryds.'},
{type:'doc',kind:'Rapport',title:'Værkstedsteltet',src:'Arrangør',text:'Værkstedsteltet var lukket under præmieoverrækkelsen.'}
]],
epilogue:'Ib Motor havde solgt Hugo en kopi som ægte. I sit telt slog han Hugo med et hjulkryds og slæbte ham ind under bilen.',
headline:'Bilsælger anholdt for drab ved veterantræf'});

KK.push({nr:125,theme:'Motocross',no:'K-4307',title:'Mudder',when:'Søndag 26. april · ca. 15:00',where:'Motocrossbanen i Uggerby',
victim:'Danny Spring (34), motocrosskører',victimLook:{sex:'m',hair:'short',hc:'brun',beard:'stubble',age:'young',shirt:'#d8e030',collar:'round'},
intro:'En motocrosskører findes død i depotområdet. Hans cykel var saboteret.',
brief:'Kl. 15:40 fandt en mekaniker Danny Spring død bag sin trailer. Danny havde opdaget, at nogen havde snydt med doping i klubben.',
options:[['Kim Gas, træner','Jannie Hjul, mekaniker','Max Hop, konkurrent','Line Spring, kæreste'],['Fald på banen','Slag med hjelm','Kvælning med kædeslange'],['Bag traileren','Mekanikerteltet','Omklædningen']],answer:[0,2,1],
info:[['Træner. Har givet kørerne "vitaminer".','Mekaniker.','Konkurrent.','Kæreste.'],
['Fald.','Hjelm.','Gummislange fra en kæde.'],
['Bag traileren. Her blev han fundet.','Telt med reservedele.','Omklædningen.']],
timeline:[['10:00','Løb.'],['14:00','Danny beder to om en snak.'],['14:15','Danny ses sidst.'],['15:40','Danny findes.']],
sketch:{title:'Bag traileren · fundsted',items:[['car',200,80,200,60,0,'Trailer'],['crate',80,200,40,30,0]],body:[200,190,80,.85],markers:[[1,240,170,'Olie']]},
evidence:[[
{type:'audio',style:'voicemail',kind:'Telefonsvarer',label:'Danny til forbundet',meta:'14:02',lines:[['Danny Spring','Der er doping i klubben. Kim og Jannie ved det. Jeg taler med dem nu.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 16:10',text:'Ingen faldskader. Mærker om halsen fra en gummislange, og en bule fra noget hårdt. Han døde mellem 14:15 og 14:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Dannys dragt',bg:'grass',stamp:'K-4307 / 02',items:[['stain',100,90,1.4,0,'#3a3a3a'],['stain',220,100,1.2,0,'#cfe0f0']],caption:'Olie og sæbe. Olie er i mekanikerteltet, sæbe i omklædningen, men mekanikerne vasker også hænder i teltet. Bag traileren er der kun mudder, som ikke sidder på ryggen.'}
],[
{type:'cctv',kind:'Overvågning',title:'Startområdet',date:'26-04',camera:'START',doors:[],cast:[['Mekaniker med kasket','#3e7b46']],frames:[{t:'14:15:00',at:[[50,.3]],txt:'Jannie hjælper en kører.'},{t:'14:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'14:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Jannie Hjul er ved startområdet fra 14:10 til 15:00.'},
{type:'doc',kind:'Supplerende obduktion',title:'Bulen',src:'Retsmedicinsk Institut',text:'Bulen er fra hjelmen. Han døde af kvælning med en kædeslange.'},
{type:'doc',kind:'Rapport',title:'Omklædningen',src:'Rengøring',text:'Omklædningen var lukket for rengøring.'}
]],
epilogue:'Kim Gas havde givet kørerne doping. I mekanikerteltet kvalte han Danny med en kædeslange og slæbte ham om bag traileren.',
headline:'Træner anholdt for drab på motocrossbane'});

KK.push({nr:126,theme:'Bilværksted',no:'K-4308',title:'Syn',when:'Torsdag 17. september · ca. 17:30',where:'Autoværkstedet Gear, Vejle',
victim:'Brian Gear (49), værkstedsejer',victimLook:{sex:'m',hair:'short',hc:'brun',beard:'full',shirt:'#3a3a3a',collar:'round'},
intro:'Værkstedsejeren findes død under en bil på liften.',
brief:'Kl. 18:10 fandt en kunde Brian Gear død under en bil på liften. Brian havde opdaget, at nogen udstedte falske synsrapporter.',
options:[['Mads Olie, mekaniker','Sara Syn, synsmand','Ole Gear, far','Lone Kunde, kunde'],['Liften faldt','Slag med fælgnøgle','Udstødningsgas'],['Under liften','Kontoret','Lakboksen']],answer:[1,1,1],
info:[['Mekaniker.','Synsmand. Underskriver synsrapporter.','Brians far.','Kunde.'],
['Bilen på liften.','Fælgnøgle.','Gas.'],
['Under liften. Her blev han fundet.','Kontoret.','Rum hvor biler lakeres.']],
timeline:[['16:00','Lukketid.'],['16:15','Brian beder to om en snak.'],['16:30','Brian ses sidst.'],['18:10','Brian findes.']],
sketch:{title:'Under liften · fundsted',items:[['car',200,90,200,70,0,'Bil på lift']],body:[200,160,90,.75],markers:[[1,240,180,'Papirstøv']]},
evidence:[[
{type:'doc',style:'table',kind:'Synsrapporter',title:'Falske syn',rows:[['Bil','Synet af','Repareret af'],['AB12345','S. Syn','M. Olie'],['CD67890','S. Syn','M. Olie']],after:'Brian skrev: "Mads og Sara, efter lukketid."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 18:40',text:'Ingen knusning: liften faldt ikke. Slag mod hovedet med noget af stål, eller gas. Han døde mellem 16:30 og 17:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Brians kedeldragt',bg:'tile',stamp:'K-4308 / 02',items:[['paper',100,90,1.4,0],['stain',220,100,1.2,0,'#a3231b']],caption:'Papirstøv og lak. Papir er på kontoret, lak i lakboksen, men der lå også lakprøver på kontoret. Under liften er der kun olie.'}
],[
{type:'doc',style:'receipt',kind:'Kvittering',title:'Mads’ kvittering',shop:'Bauhaus Vejle',rows:[['16:25','Værktøj'],['17:05','Lim']],text:'Mads Olie var i Bauhaus. Kameraer bekræfter.'},
{type:'doc',kind:'Supplerende obduktion',title:'Gas',src:'Retsmedicinsk Institut',text:'Ingen gas. Han døde af slaget med en fælgnøgle.'},
{type:'doc',kind:'Rapport',title:'Lakboksen',src:'Kriminalteknisk Center',text:'Lakboksen var forseglet efter lakering kl. 15.'}
]],
epilogue:'Sara Syn havde udstedt falske synsrapporter for penge. På kontoret slog hun Brian med en fælgnøgle og slæbte ham ind under liften.',
headline:'Synsmand anholdt for drab på værksted'});

KK.push({nr:127,theme:'Togstation',no:'K-4309',title:'Spor 7',when:'Fredag 18. december · ca. 23:00',where:'Aarhus Hovedbanegård',
victim:'Leo Perron (58), stationsforstander',victimLook:{sex:'m',hair:'short',hc:'grå',beard:'moustache',age:'old',shirt:'#1f2a44',collar:'shirt'},
intro:'Stationsforstanderen findes død ved spor 7. Det sidste tog er kørt.',
brief:'Kl. 23:40 fandt en rengøringsmedarbejder stationsforstander Leo Perron død ved spor 7. Leo havde opdaget, at nogen havde stjålet fra billetautomaterne.',
options:[['Bente Billet, kontrollør','Ali Skinne, servicemedarbejder','Hans Perron, søn','Rita Kiosk, kioskejer'],['Påkørt af tog','Slag med automat-boks','Kvælning med halstørklæde'],['Ved spor 7','Kontoret','Kiosken']],answer:[1,1,1],
info:[['Kontrollør.','Servicemedarbejder. Tømmer automaterne.','Søn.','Kioskejer.'],
['Tog.','Pengeboks fra automat.','Halstørklæde.'],
['Ved spor 7. Her blev han fundet.','Kontoret.','Kiosken.']],
timeline:[['21:00','Leo opdager tyveri.'],['22:00','Leo beder to om en snak.'],['22:15','Leo ses sidst.'],['23:40','Leo findes.']],
sketch:{title:'Spor 7 · fundsted',items:[['table',200,60,320,24,0,'Perron'],['stairs',200,150,320,40,0,'Spor']],body:[200,100,80,.8],markers:[[1,240,90,'Mønter']]},
evidence:[[
{type:'doc',style:'table',kind:'Tømmelog',title:'Billetautomater',rows:[['Dato','Tømt af','Manko'],['14.12','B. Billet','-4.000'],['16.12','A. Skinne','-5.500']],after:'Leo skrev: "Bente og Ali, kom kl. 22."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 00:10',text:'Ingen skader fra et tog. Slag mod hovedet med noget kantet af metal, eller mærker om halsen fra stof. Han døde mellem 22:15 og 22:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Leos uniform',bg:'asphalt',stamp:'K-4309 / 02',items:[['coin',100,90,1.4,0],['paper',220,100,1.2,0]],caption:'Mønter og kvitteringsrulle. Det findes på kontoret og i kiosken. Perronen er ren.'}
],[
{type:'cctv',kind:'Overvågning',title:'Togets kamera',date:'18-12',camera:'IC 172',doors:[],cast:[['Kontrollør','#5b3f66']],frames:[{t:'22:15:00',at:[[50,.3]],txt:'Bente kontrollerer billetter.'},{t:'22:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'22:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Bente Billet er i IC-toget mod Aalborg fra 22:05.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne er fra hans eget halstørklæde. Han døde af slaget med en pengeboks.'},
{type:'doc',kind:'Rapport',title:'Kiosken',src:'Kioskejeren',text:'Jeg stod i kiosken til kl. 23. Leo kom ikke.'}
]],
epilogue:'Ali Skinne havde stjålet fra automaterne. På kontoret slog han Leo med en pengeboks fra en automat og bar ham ud til spor 7.',
headline:'Servicemedarbejder anholdt for drab på station'});

KK.push({nr:128,theme:'Lastbil',no:'K-4310',title:'Langturen',when:'Mandag 2. marts · ca. 04:00',where:'Rasteplads ved Kolding',
victim:'Bjarne Last (52), vognmand',victimLook:{sex:'m',hair:'short',hc:'grå',beard:'full',age:'old',shirt:'#c94a3b',collar:'round'},
intro:'En vognmand findes død i sin lastbils førerhus på en rasteplads.',
brief:'Kl. 04:40 fandt en chauffør vognmand Bjarne Last død i sit førerhus. Bjarne havde opdaget, at nogen smuglede varer i hans lastbiler.',
options:[['Karsten Hjul, chauffør','Pia Fragt, disponent','Lars Last, søn','Tom Told, tolder'],['Udstødningsgas','Slag med dækjern','Kvælning med lasterem'],['Førerhuset','Lastrummet','Rastepladsens café']],answer:[0,2,1],
info:[['Chauffør.','Disponent.','Søn.','Tolder.'],
['Gas fra motoren.','Dækjern.','Lasterem.'],
['Førerhuset. Her blev han fundet.','Lastrummet.','Caféen på rastepladsen.']],
timeline:[['02:00','Bjarne holder ind.'],['02:30','Bjarne beder to om en snak.'],['02:45','Bjarne ses sidst.'],['04:40','Bjarne findes.']],
sketch:{title:'Førerhuset · fundsted',items:[['desk',200,60,200,30,0,'Rat og instrumenter'],['bed',200,180,200,50,0,'Køje']],body:[200,130,80,.75],markers:[[1,240,110,'Træsplint']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Bjarnes telefon',owner:'Bjarne Last',lockTime:'04:45',wall:'linear-gradient(160deg,#c94a3b,#3a3a3a)',msgs:[{with:'Karsten + Pia',m:[['me','02:30','Der er smuglergods i mine biler. I to planlægger turene. Mød mig ved min bil.']]}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 05:10',text:'Ingen gas i blodet. Mærker om halsen fra en bred strop, og en bule fra noget af metal. Han døde mellem 02:45 og 03:15.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Bjarnes jakke',bg:'asphalt',stamp:'K-4310 / 02',items:[['stain',100,90,1.4,0,'#c9b48a'],['stain',220,100,1.2,0,'#6b4a2b']],caption:'Træsplinter fra paller og kaffe. Paller er i lastrummet, og caféen har kaffe og paller med varer. Førerhuset har ingen paller.'}
],[
{type:'doc',style:'table',kind:'Videoopkald',title:'Pias vagt',rows:[['Tid','Hvem'],['02:00–04:00','Pia Fragt · disponerer biler fra kontoret i Esbjerg']],after:'Pia er på kontoret i Esbjerg.'},
{type:'doc',kind:'Supplerende obduktion',title:'Bulen',src:'Retsmedicinsk Institut',text:'Bulen er fra rattet. Han døde af kvælning med en lasterem.'},
{type:'doc',kind:'Rapport',title:'Caféen',src:'Caféens personale',text:'Bjarne var ikke i caféen i nat.'}
]],
epilogue:'Karsten Hjul smuglede cigaretter i Bjarnes lastbiler. I lastrummet kvalte han Bjarne med en lasterem og satte ham i førerhuset.',
headline:'Chauffør anholdt for drab på rasteplads'});
