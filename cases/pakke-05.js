'use strict';
// Sagsbunke 5.

KK.push({nr:49,theme:'Håndbold',no:'K-3601',title:'Straffekast',when:'Søndag 15. marts · ca. 18:00',where:'Arena Syd, Kolding',
victim:'Marianne Dal (48), landstræner',victimLook:{sex:'f',hair:'short',hc:'blond',age:'mid',shirt:'#a3231b',collar:'round'},
intro:'Landstræneren findes død i fysioterapien efter pokalfinalen. Landsholdets trup skulle udtages i morgen.',
brief:'Kl. 18:40 fandt en fysioterapeut landstræner Marianne Dal død på briksen. Marianne skulle udtage landsholdet mandag og havde fortalt to spillere, at de ikke kom med.',
options:[['Camilla Holt, spiller','Sara Ebbe, spiller','Ditte Krog, assistenttræner','Lone Dal, søster'],['Håndboldsko (slag)','Sportstape (kvælning)','Smertestillende overdosis'],['Fysioterapien','Spillerboksen','Isbad-rummet']],answer:[1,2,0],
info:[['Spiller. Røg af landsholdet.','Spiller. Røg af landsholdet. Har adgang til fysioterapiens medicin.','Assistenttræner.','Mariannes søster.'],
['Tung håndboldsko.','Rulle sportstape.','Stærke smertestillende piller fra fysioterapien.'],
['Fysioterapi med briks. Her blev hun fundet.','Bænken ved banen.','Rum med iskolde kar.']],
timeline:[['16:00','Pokalfinale.'],['17:30','Marianne siger fra til to spillere.'],['17:40','Marianne går til fysioterapien.'],['18:40','Marianne findes.']],
sketch:{title:'Fysioterapien · fundsted',items:[['bed',200,120,80,160,0,'Briks'],['shelf',40,130,20,160,0],['sink',340,60,30,20,0]],body:[200,120,0,.7],markers:[[1,250,100,'Pillepakke']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Mariannes telefon',owner:'Marianne Dal',pin:'1503',pinHint:'Datoen for finalen (ddmm).',lockTime:'18:45',wall:'linear-gradient(160deg,#a3231b,#f2f2f2)',msgs:[{with:'Camilla + Sara',m:[['me','17:32','I er ikke med. Det er endeligt. Vil I høre hvorfor, så kom til fysioterapien.'],['them','17:35','Det her er uretfærdigt. (Camilla)'],['them','17:36','Kommer. (Sara)']]}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 19:10',text:'Små pupiller og langsom vejrtrækning op til døden, som ved en overdosis, men også svage mærker om halsen fra noget fladt og klæbrigt. Ingen slag mod hovedet. Hun døde mellem 17:45 og 18:20.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Mariannes trøje',bg:'tile',stamp:'K-3601 / 02',items:[['pills',100,90,1.4,0],['stain',220,100,1.2,0,'#cfe0f0']],caption:'Massageolie og vanddråber. Massageolie bruges i fysioterapien, men der står også en flaske ved isbadene. Ingen harpiks fra bolden: hun var ikke ved banen.'}
],[
{type:'cctv',kind:'Overvågning',title:'Mixed zone',date:'15-03',camera:'PRESSE',doors:[[160,'BANE']],cast:[['Spiller nr. 7','#c94a3b']],frames:[{t:'17:40:00',at:[[50,.3]],txt:'Nr. 7 (Camilla) giver interview om udtagelsen.'},{t:'18:00:00',at:[[45,.3]],txt:'Stadig interview.'},{t:'18:25:00',at:[[50,.3]],txt:'Går med holdkammerater i bussen.'}],text:'Camilla Holt er hos pressen fra 17:38 til 18:25.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne om halsen er fra tape, hun selv havde om halsen til et ømt muskelparti. Ingen kvælning. Hun døde af en overdosis smertestillende.'},
{type:'doc',kind:'Rapport',title:'Isbad-rummet',src:'Fysioterapeuten',text:'Isbad-rummet var lukket med skilt i dag, fordi pumpen var i stykker. Døren var låst.'}
]],
epilogue:'Sara Ebbe havde drømt om landsholdet hele livet. I fysioterapien tilbød hun at lave Marianne en kop te "som tak for chancen". Hun kom knuste smertestillende piller i. Marianne lagde sig på briksen og vågnede aldrig.',
headline:'Håndboldspiller anholdt for drab på landstræner'});

KK.push({nr:50,theme:'Bedemand',no:'K-3602',title:'Sidste farvel',when:'Fredag 30. oktober · ca. 15:00',where:'Bedemand Lindholt, Randers',
victim:'Arne Lindholt (66), bedemand',victimLook:{sex:'m',hair:'short',hc:'grå',age:'old',shirt:'#111111',collar:'shirt'},
intro:'En bedemand findes død i en af sine egne kister. Han skulle ikke begraves endnu.',
brief:'Kl. 15:45 åbnede en assistent en kiste for at lægge en blomst i og fandt bedemand Arne Lindholt. Arne havde opdaget, at nogen tog ringe og ure fra de afdøde, før kisterne blev lukket.',
options:[['Brian Holm, assistent','Karin Juhl, præst','Mads Lindholt, søn','Trine Aagaard, blomsterhandler'],['Kistelåg','Balsameringsvæske','Kvælning med blomsterbånd'],['Kølerummet','Kapellet','Værkstedet']],answer:[0,1,2],
info:[['Assistent. Lukker kisterne.','Præst. Holder ofte bisættelser her.','Søn. Skal overtage firmaet.','Blomsterhandler. Leverer kranse.'],
['Tungt egetræslåg.','Kemikalier til at bevare de døde.','Silkebånd fra en krans.'],
['Kølerum til de afdøde.','Det lille kapel. Her blev han fundet i en kiste.','Værksted med kister, kemikalier og værktøj.']],
timeline:[['11:00','Bisættelse.'],['13:30','Arne beder to om en snak.'],['14:00','Arne ses sidst.'],['15:45','Arne findes.']],
sketch:{title:'Kapellet · fundsted',items:[['table',200,100,80,140,0,'Kiste'],['plant',100,60,24,24,0],['plant',300,60,24,24,0],['table',200,220,180,20,0]],body:[200,100,0,.6],markers:[[1,240,80,'Kemisk lugt']]},
evidence:[[
{type:'computer',kind:'Computer',title:'Arnes computer',owner:'Arne Lindholt',user:'Arne',password:'lilje',hint:'Firmaets logo er en hvid blomst.',files:[{name:'Mistanke.docx',time:'13:20',body:'Ringe forsvundet fra tre afdøde. Kun to har været alene med de åbne kister: Brian og Mads. Jeg taler med dem i dag.'}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 16:20',text:'Ætsninger i munden og en skarp kemisk lugt, som fra balsameringsvæske, men også en bule i panden fra noget hårdt og fladt. Ingen mærker om halsen. Han døde mellem 14:00 og 14:40.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Arnes hænder',bg:'wood',stamp:'K-3602 / 03',items:[['stain',100,90,1.4,0,'#7ab0d8'],['stain',220,100,1.2,0,'#c9b48a']],caption:'Kemikalier og savsmuld på hænderne. Det findes i værkstedet, men kemikalier står også i kølerummet. Kapellet er rent: han blev lagt i kisten efter døden.'}
],[
{type:'doc',style:'table',kind:'Arbejdsseddel',title:'Mads Lindholt',rows:[['Tid','Opgave','Sted'],['13:45–15:30','Hente afdød','Regionshospitalet Viborg (kvitteret)']],after:'Mads var i Viborg hele eftermiddagen.'},
{type:'doc',kind:'Supplerende obduktion',title:'Bulen',src:'Retsmedicinsk Institut',text:'Bulen er fra kistens kant, da han blev lagt i. Dødsårsagen er indtagelse af balsameringsvæske, sandsynligvis tvunget ned.'},
{type:'doc',style:'table',kind:'Temperaturlog',title:'Kølerummet',rows:[['Tid','Dør'],['13:00–16:00','Lukket']],after:'Ingen åbnede kølerummet.'},
{type:'doc',style:'note',kind:'Seddel',title:'På skrivebordet',text:'PC: lilje (logoet)'}
]],
epilogue:'Brian Holm havde stjålet ringe og ure fra de afdøde i et år. I værkstedet truede Arne med politiet. Brian overmandede ham og tvang balsameringsvæske i ham. Bagefter lagde han Arne i en kiste i kapellet og håbede, at ingen ville åbne den før begravelsen.',
headline:'Bedemandens assistent anholdt for drab'});

KK.push({nr:51,theme:'Seance',no:'K-3603',title:'Åndernes time',when:'Fredag 31. oktober · ca. 23:50',where:'Villa Mørkemose, Klampenborg',
victim:'Madame Esther Blom (72), medie',victimLook:{sex:'f',hair:'curly',hc:'hvid',age:'old',earrings:true,shirt:'#5b3f66',collar:'v'},
intro:'Til en seance på Halloween dør mediet midt i ritualet. Var det ånderne?',
brief:'Kl. 00:00 tændte gæsterne lyset efter seancen og så, at mediet Esther Blom var død ved bordet. Esther havde lovet at "afsløre en hemmelighed fra den anden side": hvem der havde forfalsket et testamente.',
options:[['Holger Ask, arving','Nina Ask, arving','Elvira Blom, assistent','Tom Riis, skeptiker'],['Gift i te','Kvælning i mørket','Slag med lysestage'],['Seancebordet','Biblioteket','Vinterhaven']],answer:[0,0,1],
info:[['Arving. Fik det meste efter sin far.','Holgers søster. Fik næsten intet.','Esthers assistent.','Journalist og skeptiker. Vil afsløre Esther som svindler.'],
['Te med urter, Esther drak før seancer.','I mørket kunne alt ske.','Tung sølvlysestage.'],
['Det runde bord i salonen. Her blev hun fundet.','Biblioteket ved siden af.','Glasvinterhave med planter.']],
timeline:[['23:00','Gæsterne ankommer.'],['23:30','Esther drikker te i biblioteket.'],['23:40','Seancen begynder.'],['00:00','Esther er død.']],
sketch:{title:'Salonen · fundsted',items:[['roundtable',200,130,120,120,0,'Seancebord'],['chair',130,130],['chair',270,130],['chair',200,60],['chair',200,200]],body:[200,170,0,.6],markers:[[1,240,150,'Tekop']]},
evidence:[[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Seancen (optaget af skeptikeren)',meta:'23:40–00:00',lines:[['Esther Blom','Ånden siger… testamentet blev ændret… af en, der sidder her.'],['Esther Blom','Holger… Nina… en af jer to. Ånden viser mig en pen.'],['Holger Ask','Stop det her!'],['Esther Blom','Jeg… kan ikke… trække vejret.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 00:30',text:'Krampe og bleg hud, som ved forgiftning, men også rødlige mærker om halsen. Ingen slag mod hovedet. Hun døde mellem 23:50 og 00:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Esthers sjal',bg:'carpet',stamp:'K-3603 / 03',items:[['cup',100,90,1.4,0],['book',220,100,1.2,0]],caption:'Teplet og bogstøv på sjalet. Teen blev lavet i biblioteket, og en kop stod også ved bordet. Ingen jord eller blade fra vinterhaven.'}
],[
{type:'cctv',kind:'Overvågning',title:'Vinterhavens kamera (natkamera)',date:'31-10',camera:'IR · BIBLIOTEK',doors:[[160,'SALON']],cast:[['Kvinde med hat','#3e7b46']],frames:[{t:'23:25:00',at:[[40,.4]],txt:'Kvinde med hat (Nina) sidder i salonen.'},{t:'23:30:00',at:[[40,.4]],txt:'Hun bliver siddende, mens Esther går ind i biblioteket med en mand.'},{t:'23:40:00',at:[[45,.3]],txt:'Seancen begynder.'}],text:'Nina Ask var aldrig i biblioteket.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne er fra hendes egne perlekæder, der strammede i krampen. Hun døde af fingerbølplante (digitalis) i teen.'},
{type:'doc',kind:'Rapport',title:'Seancebordet',src:'Kriminalteknisk Center',text:'Koppen ved seancebordet var tom og ren. Teen med giften blev drukket i biblioteket kl. 23:30; giften virkede først 20 minutter senere ved bordet.'}
]],
epilogue:'Holger Ask havde forfalsket sin fars testamente. Han vidste, at Esther havde fundet ud af det. I biblioteket hældte han fingerbøl i hendes te. Giften virkede midt i seancen, og alle troede, det var ånderne.',
headline:'Arving anholdt for giftmord til seance'});

KK.push({nr:52,theme:'Tryllekunst',no:'K-3604',title:'Forsvindingsnummeret',when:'Lørdag 18. april · ca. 21:30',where:'Teater Illusion, Aalborg',
victim:'Den Store Magnus (55), tryllekunstner',victimLook:{sex:'m',hair:'short',hc:'sort',beard:'moustache',shirt:'#1d1d1d',collar:'shirt'},
intro:'Tryllekunstneren forsvinder i sit eget nummer og dukker op død i kassen.',
brief:'Kl. 21:45, under sit store forsvindingsnummer, skulle Den Store Magnus dukke op igen. Det gjorde han ikke. Han blev fundet død i den hemmelige kasse under scenen. Magnus ville afsløre, hvordan hans tidligere assistent havde stjålet hans numre.',
options:[['Lina Rose, assistent','Aksel Kvist, rival','Bo Holm, scenemester','Vera Magnus, hustru'],['Kvælning med tryllereb','Sværd fra sværdkassen','Gas i kassen'],['Kassen under scenen','Kulissen','Rekvisitrummet']],answer:[2,0,2],
info:[['Assistent på scenen.','Rival og tryllekunstner. Magnus påstår, Aksel stjal hans numre.','Scenemester. Styrer faldlemmen.','Magnus’ kone.'],
['Rød tryllereb.','Sværd fra sværdkassen. Sløvt i spidsen.','Røggas til effekter.'],
['Hemmelig kasse under scenen. Her blev han fundet.','Bag scenen.','Rum med rekvisitter.']],
timeline:[['20:00','Show begynder.'],['21:30','Forsvindingsnummer.'],['21:32','Magnus forsvinder ned i faldlemmen.'],['21:45','Magnus findes.']],
sketch:{title:'Under scenen · fundsted',items:[['crate',200,120,120,80,0,'Kasse'],['stairs',340,120,30,60,0],['shelf',60,120,20,140,0]],body:[200,120,0,.6],markers:[[1,240,100,'Rebfibre']]},
evidence:[[
{type:'doc',style:'table',kind:'Lyspult-log',title:'Hvem rørte faldlemmen?',rows:[['Tid','Hvem'],['21:31','Scenemester Bo · åbner faldlem'],['21:33','Gæst-kort 2 · bag scenen (Aksel Kvist)'],['21:35','Scenemester Bo · forlader pulten']],after:'Kun Bo og Aksel var under eller bag scenen efter 21:31.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 22:15',text:'Røde striber om halsen fra et reb, eller tegn på iltmangel fra gas. Ingen stik- eller snitsår. Han døde mellem 21:32 og 21:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Magnus’ kappe',bg:'wood',stamp:'K-3604 / 02',items:[['rope',100,90,1.4,0,'#a3231b'],['stain',220,100,1.2,0,'#ddd']],caption:'Røde rebfibre og glimmerkonfetti. Rebet og konfettien findes i rekvisitrummet og i kulissen. Kassen under scenen har ingen konfetti: han blev lagt der.'}
],[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Aksels optagelse fra salen',meta:'21:30–21:50 · på hans telefon',lines:[['Aksel Kvist','Jeg sidder på første række og filmer, så jeg kan bevise, at han har stjålet mit nummer.'],['Aksel Kvist','Nu forsvinder han. Klassisk. Jeg sidder stadig her.'],['Aksel Kvist','Hvor bliver han af? Folk begynder at blive urolige.']]},
{type:'doc',kind:'Supplerende obduktion',title:'Iltmangel',src:'Retsmedicinsk Institut',text:'Ingen røggas i lungerne. Dødsårsagen er kvælning med et reb.'},
{type:'doc',kind:'Rapport',title:'Kulissen',src:'Kriminalteknisk Center',text:'Kulissen var fyldt med dansere, der ventede på finalen. Ingen så Magnus der. Gæstekort 2 var lånt ud af Bo til en tekniker, der ikke var der.'}
]],
epilogue:'Bo Holm havde solgt Magnus’ hemmeligheder til en tv-station. Da Magnus faldt ned gennem faldlemmen, ventede Bo i rekvisitrummet. Han kvalte ham med et tryllereb og lagde ham i kassen under scenen, så det skulle ligne et uheld under nummeret.',
headline:'Scenemester anholdt: tryllekunstner forsvandt for altid'});

KK.push({nr:53,theme:'Biograf',no:'K-3605',title:'Premieren',when:'Torsdag 10. september · ca. 20:15',where:'Palads Biograf, København',
victim:'Lisbeth Krone (60), filminstruktør',victimLook:{sex:'f',hair:'bob',hc:'sort',glasses:true,shirt:'#2b2e33',collar:'turtle'},
intro:'En filminstruktør findes død i maskinrummet, mens hendes nye film kører på lærredet.',
brief:'Kl. 21:30, da rulleteksterne kørte, opdagede man, at instruktør Lisbeth Krone var væk. Hun blev fundet død i operatørrummet. Lisbeth ville samme aften fortælle pressen, at hendes producer havde snydt med filmens økonomi.',
options:[['Mikkel Hald, producer','Jonna Vind, skuespiller','Peter Bak, operatør','Amalie Krone, datter'],['Filmspole','Gift i popcorn','Kvælning med filmstrimmel'],['Operatørrummet','Foyeren','VIP-loungen']],answer:[0,0,2],
info:[['Producer. Har brugt filmens penge.','Filmens stjerne.','Operatør. Viser filmen.','Datter.'],
['Tung filmspole i metal.','Popcorn.','Gammel filmstrimmel.'],
['Rum med fremviser. Her blev hun fundet.','Foyer med presse.','Lounge for VIP-gæster.']],
timeline:[['19:30','Rød løber.'],['20:00','Filmen starter.'],['20:10','Lisbeth går op med to personer.'],['21:30','Lisbeth findes.']],
sketch:{title:'Operatørrummet · fundsted',items:[['desk',200,60,140,40,0,'Fremviser'],['shelf',40,130,20,160,0],['window',140,12,120,0,0]],body:[200,160,40,.85],markers:[[1,240,140,'Champagne-plet']]},
evidence:[[
{type:'cctv',kind:'Overvågning',title:'VIP-trappen',date:'10-09',camera:'TRAPPE',doors:[[160,'VIP / OPERATØR']],cast:[['Mand i hvid smoking','#f2f2f2'],['Kvinde i guldkjole','#d8b53e']],frames:[{t:'20:08:00',at:[[40,.5],[60,.5]],txt:'Hvid smoking og guldkjole går op med Lisbeth.'},{t:'20:12:00',at:[[50,0],[50,0]],txt:'De forsvinder op.'},{t:'20:13:30',at:[null,[55,.5]],txt:'Guldkjole kommer ned alene efter et minut.'},{t:'20:40:00',at:[[55,.5],null],txt:'Hvid smoking kommer ned.'}],text:'Kun Mikkel Hald har hvid smoking, og kun Jonna Vind har guldkjole.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 21:55',text:'Slag mod hovedet med noget rundt og hårdt af metal, eller mærker om halsen fra en tynd strimmel. Ingen tegn på forgiftning. Hun døde mellem 20:15 og 20:40.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Lisbeths kjole',bg:'carpet',stamp:'K-3605 / 01',items:[['stain',100,90,1.4,0,'#f2e0c0'],['glass',220,100,1.2,0]],caption:'Champagne og fløjlsfnug fra møbler. Det findes i VIP-loungen, men champagne blev også serveret i operatørrummet. Foyeren har ingen fløjl.'}
],[
{type:'audio',style:'radio',kind:'Lydoptagelse',label:'Live-radio fra foyeren',meta:'20:14–20:50',lines:[['Radiovært','Klokken er kvart over otte. Vi står med Jonna Vind, filmens stjerne. Jonna, du har lige været oppe hos Lisbeth?'],['Jonna Vind','Kun et øjeblik. Hun var i fin form.'],['Radiovært','Klokken er kvart i ni, og Jonna har givet interviews i en halv time.']]},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne om halsen er fra hendes egen halskæde. Dødsårsagen er slaget med en filmspole.'},
{type:'doc',kind:'Rapport',title:'Operatørrummet',src:'Operatøren',text:'Jeg var i operatørrummet hele tiden og passede fremviseren. Lisbeth kom aldrig derind, før hun blev båret ind kl. 20:38. Jeg var på toilettet i to minutter.'}
]],
epilogue:'Mikkel Hald havde brugt filmens penge på sig selv. I VIP-loungen sagde Lisbeth, at hun ville fortælle det til pressen. Mikkel slog hende med en gammel filmspole fra en udstillingsmontre. Han bar hende ind i operatørrummet, mens operatøren var på toilettet.',
headline:'Producer anholdt for drab ved filmpremiere'});

KK.push({nr:54,theme:'Ballet',no:'K-3606',title:'Den døende svane',when:'Fredag 4. december · ca. 19:45',where:'Det Kongelige Teater, Gamle Scene',
victim:'Ilse Brandt (44), balletmester',victimLook:{sex:'f',hair:'bun',hc:'sort',shirt:'#111111',collar:'turtle'},
intro:'Balletmesteren findes død i sminkerummet i pausen. Svanesøen fortsætter uden hende.',
brief:'Kl. 20:05, i pausen, fandt en påklæder balletmester Ilse Brandt død i sminkerummet. Ilse havde om eftermiddagen fortalt to dansere, at hun ville erstatte dem i hovedrollerne til næste sæson.',
options:[['Clara Juhl, primaballerina','Viktor Rask, solodanser','Nanna Moe, korps-danser','Henrik Brandt, ægtemand'],['Spidsskobånd (kvælning)','Glasskår fra spejl','Gift i vand'],['Sminkerummet','Balletsalen','Kulissen']],answer:[1,0,1],
info:[['Primaballerina i ti år. Mister rollen.','Solodanser. Mister rollen.','Ung danser. Får Claras rolle.','Ilses mand. Teaterets økonomichef.'],
['Satinbånd fra en spidssko.','Skår fra et knust spejl.','Vandflaske.'],
['Sminkerummet. Her blev hun fundet.','Balletsalen med spejle og barrer.','Bag scenetæppet.']],
timeline:[['19:00','Første akt.'],['19:40','Ilse går fra kulissen.'],['19:50','Pausen begynder.'],['20:05','Ilse findes.']],
sketch:{title:'Sminkerummet · fundsted',items:[['desk',200,40,320,24,0,'Spejle og lys'],['chair',120,70],['chair',200,70],['chair',280,70]],body:[200,170,70,.85],markers:[[1,240,150,'Kolofonium-støv']]},
evidence:[[
{type:'cctv',kind:'Overvågning',title:'Kulissegangen',date:'04-12',camera:'KULISSE',doors:[[70,'SALEN'],[250,'SMINKE']],cast:[['Hvid svanedragt','#f4f4f0'],['Sort prinsdragt','#222']],frames:[{t:'19:40:00',at:[[50,.5],[40,.5]],txt:'Hvid svanedragt og sort prinsdragt går af scenen.'},{t:'19:42:00',at:[[22,0],[22,0]],txt:'Begge går ind i balletsalen med Ilse.'},{t:'19:46:00',at:[[50,.5],[22,0]],txt:'Hvid svanedragt kommer ud.'},{t:'19:58:00',at:[null,[78,0]],txt:'Sort prinsdragt bærer noget tungt ind i sminkerummet.'}],text:'Kun Clara har hvid svanedragt, og kun Viktor har sort prinsdragt i aften.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 20:30',text:'Smal rød stribe om halsen fra et fladt bånd, og et lille snit på kinden fra glas. Ingen tegn på forgiftning. Hun døde mellem 19:47 og 19:55.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Ilses trøje',bg:'wood',stamp:'K-3606 / 02',items:[['stain',100,90,1.4,0,'#f2e0a0'],['shoe',220,100,1.2,0,'#f2c0c0']],caption:'Kolofonium-støv fra gulvet, som danserne bruger mod at glide. Det er i balletsalen og i kulissen. Sminkerummet har tæppe og ingen kolofonium.'}
],[
{type:'audio',style:'radio',kind:'Lydoptagelse',label:'Inspicientens mikrofon',meta:'19:46–20:00',lines:[['Inspicient','Clara, du er på scenen igen kl. 19:47 til svaneduetten med korpset.'],['Clara Juhl','Jeg står klar. Jeg er på scenen.'],['Inspicient','Klokken er 19:55, Clara danser stadig. Pause om fem minutter.']]},
{type:'doc',kind:'Supplerende obduktion',title:'Snittet',src:'Retsmedicinsk Institut',text:'Snittet er overfladisk og fra en spejlkant i faldet. Dødsårsagen er kvælning med et satinbånd.'},
{type:'doc',kind:'Rapport',title:'Kulissen',src:'Scenemesteren',text:'Kulissen var fyldt med 24 dansere fra korpset hele tiden. Ingen kunne have gjort noget der ubemærket.'}
]],
epilogue:'Viktor Rask kunne ikke tåle at miste sin rolle til en yngre danser. I balletsalen, mens Clara var på scenen, kvalte han Ilse med båndet fra en spidssko. Han bar liget ind i sminkerummet i håb om, at det ville ligne et overfald.',
headline:'Solodanser anholdt for drab på balletmester'});

KK.push({nr:55,theme:'Symfoniorkester',no:'K-3607',title:'Fortissimo',when:'Lørdag 14. marts · ca. 21:00',where:'Musikhuset, Aarhus',
victim:'Gustav Lerche (67), dirigent',victimLook:{sex:'m',hair:'curly',hc:'hvid',age:'old',shirt:'#111111',collar:'shirt'},
intro:'Den berømte dirigent dør i sin loge efter koncerten. Hans taktstok er knækket.',
brief:'Kl. 21:30 fandt en musiker dirigent Gustav Lerche død i hans loge. Han havde netop dirigeret Beethovens 9. symfoni. Gustav skulle udpege en ny koncertmester og havde valgt mellem to violinister.',
options:[['Ida Lund, violinist','Martin Bøg, violinist','Sven Aas, pianist','Grete Lerche, hustru'],['Violinstreng (kvælning)','Nodestativ','Gift i vand'],['Dirigentlogen','Instrumentrummet','Øvesalen']],answer:[0,0,1],
info:[['Violinist. Kandidat til koncertmester.','Violinist. Kandidat til koncertmester.','Pianist.','Gustavs kone.'],
['E-streng af stål.','Tungt nodestativ.','Vandglas på hans pult.'],
['Dirigentens loge. Her blev han fundet.','Rum med instrumentkasser.','Lille øvesal.']],
timeline:[['19:30','Koncert.'],['20:50','Applaus.'],['21:00','Gustav beder to violinister komme.'],['21:30','Gustav findes.']],
sketch:{title:'Dirigentlogen · fundsted',items:[['desk',200,60,140,40,0,'Pult'],['sofa',300,190,100,36,0],['shelf',40,130,20,160,0]],body:[180,170,40,.85],markers:[[1,230,150,'Kolofonium på jakken']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Gustavs telefon',owner:'Gustav Lerche',lockTime:'21:35',wall:'linear-gradient(160deg,#111,#c9a43a)',msgs:[{with:'Ida + Martin',m:[['me','21:00','Jeg har valgt. Kom til instrumentrummet, så siger jeg det til jer begge.']]}],notes:[['Koncertmester','Ida eller Martin. Den ene har løjet om sin uddannelse.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 22:00',text:'Tynd, dyb stribe om halsen fra en metaltråd, og et blåt mærke på skulderen fra noget tungt. Ingen tegn på forgiftning. Han døde mellem 21:00 og 21:20.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Gustavs frakke',bg:'carpet',stamp:'K-3607 / 03',items:[['stain',100,90,1.4,0,'#d8b53e'],['stain',220,100,1.2,0,'#6a4a2a']],caption:'Kolofonium og fløjl fra instrumentkasser. Det findes i instrumentrummet, og i øvesalen står også kasser. Logen har ingen instrumentkasser.'}
],[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Martins livestream',meta:'21:00–21:30 · Instagram',lines:[['Martin Bøg','Hej alle! Jeg sidder i foyeren og spiller for publikum, der går hjem.'],['Martin Bøg','Klokken er kvart over ni. En lille Bach mere.'],['Martin Bøg','Klokken er halv ti. Tak for i aften!']]},
{type:'doc',kind:'Supplerende obduktion',title:'Skulderen',src:'Retsmedicinsk Institut',text:'Mærket på skulderen er gammelt. Han døde af kvælning med en violinstreng.'},
{type:'doc',kind:'Rapport',title:'Øvesalen',src:'Musikhusets vagt',text:'Øvesalen var låst under koncerten. Nøglen hang hos vagten.'}
]],
epilogue:'Ida Lund havde løjet om sin uddannelse fra Wien, og Gustav havde opdaget det. I instrumentrummet sagde han, at Martin fik stillingen. Ida tog en E-streng fra sin violinkasse og kvalte ham. Hun bar ham ind i logen med hjælp fra en instrumentvogn.',
headline:'Violinist anholdt for drab på dirigent'});

KK.push({nr:56,theme:'Jazzklub',no:'K-3608',title:'Blue Note',when:'Torsdag 22. oktober · ca. 23:30',where:'Jazzklubben "Kælderen", Nyhavn',
victim:'Sammy Brask (58), klubejer',victimLook:{sex:'m',hair:'bald',hc:'sort',beard:'full',skin:4,shirt:'#2f3b55',collar:'shirt'},
intro:'Jazzklubbens ejer findes død bag scenen. Saxofonen spiller videre.',
brief:'Kl. 00:10 fandt bartenderen klubejer Sammy Brask død i lageret. Sammy skulle sælge klubben til en hotelkæde og lukke den efter 40 år.',
options:[['Leo Ras, saxofonist','Bitten Holm, sangerinde','Jørgen Fisk, bartender','Ann Brask, datter'],['Saxofonstativ','Gift i whisky','Kvælning med mikrofonledning'],['Lageret','Garderoben','Kontoret']],answer:[1,1,2],
info:[['Saxofonist i 30 år.','Sangerinde. Har en aftale om at købe klubben selv.','Bartender.','Sammys datter.'],
['Tungt stativ.','Whisky fra baren.','Mikrofonledning.'],
['Lager med fade og kasser. Her blev han fundet.','Lille garderobe.','Sammys kontor.']],
timeline:[['21:00','Koncert.'],['23:00','Sammy fortæller om salget.'],['23:10','Sammy går ud.'],['00:10','Sammy findes.']],
sketch:{title:'Lageret · fundsted',items:[['barrel',80,80,30,30,0],['barrel',140,80,30,30,0],['crate',300,180,40,30,0]],body:[200,150,40,.85],markers:[[1,240,130,'Whiskyglas']]},
evidence:[[
{type:'audio',style:'voicemail',kind:'Telefonsvarer',label:'Sammys besked til hotelkæden',meta:'Indtalt 23:12',lines:[['Sammy Brask','Det er Sammy. Jeg har fortalt det. Leo og Bitten er rasende. De vil begge tale med mig nu. Jeg ringer i morgen.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 00:40',text:'Krampe og opkast, som ved gift, men også mærker om halsen fra en ledning. Ingen slag. Han døde mellem 23:15 og 23:50.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Sammys jakke',bg:'wood',stamp:'K-3608 / 04',items:[['stain',100,90,1.4,0,'#c49a5a'],['paper',220,100,1.2,0]],caption:'Whisky og papirstøv fra arkivmapper. Mapper er der på kontoret og i garderoben, hvor gamle plakater står. Lageret har ingen mapper.'}
],[
{type:'cctv',kind:'Overvågning',title:'Scenen',date:'22-10',camera:'SCENE',doors:[[160,'SCENE']],cast:[['Saxofonist','#2f3b55']],frames:[{t:'23:15:00',at:[[50,.2]],txt:'Saxofonisten spiller solo.'},{t:'23:30:00',at:[[50,.2]],txt:'Stadig solo.'},{t:'23:50:00',at:[[55,.2]],txt:'Slutter sættet.'}],text:'Leo Ras er på scenen fra 23:13 til 23:52.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne om halsen er fra slipset. Han døde af rottegift i whisky. Giften virker inden for få minutter, så han drak den efter 23:15.'},
{type:'doc',kind:'Rapport',title:'Garderoben',src:'Garderobedamen',text:'Jeg sad i garderoben hele aftenen. Sammy kom ikke ind.'}
]],
epilogue:'Bitten Holm havde sparet op for at købe klubben selv. Da Sammy sagde, han ville sælge til hotelkæden, skænkede hun ham en whisky med rottegift på kontoret "for de gamle dage". Hun slæbte ham ud på lageret, mens Leo spillede sin solo.',
headline:'Sangerinde anholdt for drab på jazzklub'});

KK.push({nr:57,theme:'Podcast',no:'K-3609',title:'Sidste episode',when:'Onsdag 3. juni · ca. 15:30',where:'Podcaststudie "Lydbølgen", Vesterbro',
victim:'Rasmus Fjord (36), podcastvært',victimLook:{sex:'m',hair:'curly',hc:'brun',beard:'stubble',age:'young',shirt:'#3e5b46',collar:'round'},
intro:'En populær podcastvært findes død i studiet under optagelsen af en true crime-episode.',
brief:'Kl. 16:00 fandt en lydtekniker podcastvært Rasmus Fjord død i redigeringsrummet. Han var ved at optage en episode, der skulle afsløre, hvem der stod bag en gammel uopklaret sag. Han havde sagt: "Morderen kender jeg personligt."',
options:[['Søs Bang, medvært','Allan Krog, gæst','Mette Fjord, søster','Kristian Lyng, producer'],['Mikrofonarm','Kvælning med høretelefonledning','Sovemiddel i kaffe'],['Studiet','Redigeringsrummet','Køkkenet']],answer:[1,1,0],
info:[['Medvært.','Gæst i dag. Var vidne i den gamle sag.','Søster.','Producer.'],
['Tung mikrofonarm.','Høretelefonledning.','Kaffe.'],
['Studiet med mikrofoner.','Redigeringsrum. Her blev han fundet.','Lille køkken.']],
timeline:[['14:00','Optagelse begynder.'],['15:10','Pause.'],['15:15','Rasmus taler med to.'],['16:00','Rasmus findes.']],
sketch:{title:'Redigeringsrummet · fundsted',items:[['desk',200,60,200,40,0,'Skærme'],['chair',200,100],['sofa',300,200,100,30,0]],body:[200,170,60,.8],markers:[[1,240,150,'Skumstykke']]},
evidence:[[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Råoptagelse, sidste minutter',meta:'15:08–15:10',lines:[['Rasmus Fjord','Efter pausen siger jeg navnet. Allan, du ved, hvad jeg mener. Og Søs, du har vidst det længe.'],['Allan Krog','Det her var ikke aftalen.'],['Søs Bang','Lad os tage det off the record.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 16:30',text:'Fine striber om halsen fra en tynd ledning og en bule i tindingen fra noget hårdt af metal. Ingen tegn på sovemiddel. Han døde mellem 15:10 og 15:40.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Rasmus’ trøje',bg:'carpet',stamp:'K-3609 / 03',items:[['stain',100,90,1.4,0,'#555'],['stain',220,100,1.2,0,'#3a3a3a']],caption:'Sort akustikskum fra væggene. Det sidder i studiet, men også i redigeringsrummet. Køkkenet har ingen skum.'}
],[
{type:'doc',style:'receipt',kind:'Kvittering',title:'Søs Bangs kvittering',shop:'Kaffebaren rundt om hjørnet',rows:[['15:12','2 x kaffe','70,00'],['15:38','Kage','35,00']],text:'Søs sad i kaffebaren fra 15:12 til 15:40. Baristaen bekræfter det.'},
{type:'doc',kind:'Supplerende obduktion',title:'Bulen',src:'Retsmedicinsk Institut',text:'Bulen er fra faldet. Dødsårsagen er kvælning med en ledning.'},
{type:'doc',kind:'Rapport',title:'Redigeringsrummet',src:'Lydteknikeren',text:'Jeg sad i redigeringsrummet fra 15:10 til 15:45 og klippede. Rasmus kom ikke ind, før han blev lagt der, mens jeg var ude efter kaffe.'}
]],
epilogue:'Allan Krog havde selv begået den gamle forbrydelse. I studiet bad han Rasmus om at stoppe episoden. Rasmus nægtede, og Allan kvalte ham med ledningen til et par høretelefoner. Han bar ham ind i redigeringsrummet, mens teknikeren var ude.',
headline:'Podcastgæst anholdt: morderen kendte værten personligt'});

KK.push({nr:58,theme:'Escape room',no:'K-3610',title:'60 minutter',when:'Lørdag 8. august · ca. 19:30',where:'Escape Zone, Aarhus',
victim:'Peter Juul (42), escape room-ejer',victimLook:{sex:'m',hair:'short',hc:'brun',glasses:true,shirt:'#c94a3b',collar:'round'},
intro:'Ejeren af et escape room findes død inde i sit eget rum. Uret tikker stadig.',
brief:'Kl. 20:15 åbnede en gruppe kunder døren til rummet "Faraos grav" og fandt ejeren Peter Juul død inde i sarkofagen. Peter havde opdaget, at nogen havde stjålet kundedata og solgt dem.',
options:[['Line Holm, medarbejder','Bastian Ravn, medejer','Tobias Fisk, medarbejder','Rikke Juul, hustru'],['Tung rekvisit (sten)','Kvælning med reb','Gas i rummet'],['Faraos grav','Kontrolrummet','Lageret']],answer:[2,0,1],
info:[['Medarbejder. Guider grupper.','Medejer.','Medarbejder. Bygger rekvisitter.','Peters kone.'],
['Rekvisit-sten i gips med jernkerne.','Reb fra et rum.','Røgmaskine.'],
['Rummet med sarkofagen. Her blev han fundet.','Rum med skærme, hvor medarbejdere ser grupperne.','Lager med rekvisitter.']],
timeline:[['18:00','Gruppe 1.'],['19:00','Peter går til kontrolrummet.'],['19:30','Peter ses sidst.'],['20:15','Peter findes.']],
sketch:{title:'Faraos grav · fundsted',items:[['table',200,120,80,140,0,'Sarkofag'],['crate',80,80,30,30,0],['crate',320,200,30,30,0]],body:[200,120,0,.6],markers:[[1,250,100,'Gipsstøv']]},
evidence:[[
{type:'computer',kind:'Computer',title:'Kontrolrummets log',owner:'Escape Zone',user:'kontrol',password:'farao',hint:'Navnet på rummet, uden "grav". Små bogstaver.',files:[{name:'Log 08.08',time:'19:45',body:'19:05 Peter logger ind\n19:20 Database eksporteret (bruger: Line eller Tobias, fælles login)\n19:22 Peter: "Hvem af jer har gjort det?"'}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 20:40',text:'Slag mod hovedet med noget tungt med gipsstøv, eller røde mærker om halsen. Ingen tegn på gas. Han døde mellem 19:25 og 19:55.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Peters bukser',bg:'stone',stamp:'K-3610 / 02',items:[['stain',100,90,1.4,0,'#f4f1ea'],['stain',220,100,1.2,0,'#555']],caption:'Gipsstøv og kabelfnug. Gips er der på lageret, men også i kontrolrummet, hvor nye rekvisitter står. Graven har sand på gulvet, og der er intet sand på ham.'}
],[
{type:'cctv',kind:'Overvågning',title:'Rum "Hospitalet"',date:'08-08',camera:'RUM 3',doors:[[160,'DØR']],cast:[['Medarbejder i lægekittel','#f4f4f0']],frames:[{t:'19:20:00',at:[[40,.4]],txt:'Line i lægekittel guider en gruppe.'},{t:'19:40:00',at:[[50,.4]],txt:'Stadig med gruppen.'},{t:'20:00:00',at:[[45,.4]],txt:'Gruppen klarer rummet.'}],text:'Line Holm er inde i "Hospitalet" med en gruppe fra 19:15 til 20:05.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne om halsen er fra en snor med nøgler, han havde om halsen. Han døde af slaget.'},
{type:'doc',kind:'Rapport',title:'Lageret',src:'Teknikeren',text:'Lageret var låst med kode. Koden blev ikke brugt i aften.'},
{type:'doc',style:'note',kind:'Seddel',title:'Ved computeren',text:'Kode: farao'}
]],
epilogue:'Tobias Fisk havde solgt kundedata. I kontrolrummet spurgte Peter ham direkte. Tobias greb en rekvisit-sten med jernkerne fra bordet og slog. Han bar Peter ind i "Faraos grav" og lagde ham i sarkofagen.',
headline:'Medarbejder anholdt for drab i escape room'});
