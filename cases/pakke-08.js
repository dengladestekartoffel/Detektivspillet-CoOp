'use strict';
// Sagsbunke 8.

KK.push({nr:79,theme:'Lakrids',no:'K-3901',title:'Sort guld',when:'Onsdag 9. september · ca. 13:00',where:'Lakridsfabrikken Salmiak, Svaneke',
victim:'Jens Salmiak (44), lakridsfabrikant',victimLook:{sex:'m',hair:'short',hc:'sort',beard:'stubble',shirt:'#111111',collar:'round'},
intro:'Lakridskongen findes død ved kogekedlen. Hans hemmelige opskrift er stjålet.',
brief:'Kl. 13:40 fandt en medarbejder lakridsfabrikant Jens Salmiak død i fabrikken. Jens havde en hemmelig opskrift, som en stor koncern ville betale 30 mio. kr. for. Han havde nægtet at sælge.',
options:[['Maja Dyb, produktionschef','Allan Kure, sælger','Signe Salmiak, søster','Tim Rank, koncernchef'],['Kogende lakridsmasse','Slag med røreske','Kvælning med pakkebånd'],['Kogerummet','Pakkeriet','Kontoret']],answer:[1,1,1],
info:[['Produktionschef. Kender opskriften.','Sælger. Har mødtes med koncernen.','Søster. Ejer 30 %.','Koncernchef. Ville købe.'],
['Varm, sort masse i kedlen.','Lang røreske af stål.','Pakkebånd.'],
['Rum med kogekedler. Her blev han fundet.','Hal med pakkemaskiner.','Kontor med pengeskab.']],
timeline:[['11:00','Koncernen ringer.'],['12:00','Jens opdager tyveri.'],['12:30','Jens ses sidst.'],['13:40','Jens findes.']],
sketch:{title:'Kogerummet · fundsted',items:[['barrel',120,80,60,60,0,'Kedel'],['barrel',280,80,60,60,0,'Kedel']],body:[200,190,80,.85],markers:[[1,240,170,'Pakkebånd']]},
evidence:[[
{type:'computer',kind:'Computer',title:'Jens’ pc',owner:'Jens Salmiak',user:'Jens',password:'salmiak',hint:'Det samme som firmaets navn, små bogstaver.',files:[{name:'Opskrift.docx',time:'12:05',body:'Filen er kopieret 08.09 kl. 22:10 på en USB med navnet "MAJA-USB" eller "ALLAN-USB" (loggen er uklar).'}],mail:[{from:'Jens',to:'Maja; Allan',time:'12:10',subject:'Opskriften',body:'Kom til mig. Nu.'}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 14:10',text:'Ingen forbrændinger: han er ikke faldet i kedlen. Slag mod hovedet med noget langt af metal, eller mærker om halsen fra et bånd. Han døde mellem 12:30 og 13:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Jens’ forklæde',bg:'tile',stamp:'K-3901 / 02',items:[['stain',100,90,1.4,0,'#111'],['paper',220,100,1.2,0]],caption:'Lakridsstøv og papp-fibre. Det er der i pakkeriet og på kontoret, hvor prøvekasser står. Kogerummet har ingen pap.'}
],[
{type:'cctv',kind:'Overvågning',title:'Prøvekøkkenet',date:'09-09',camera:'KØKKEN',doors:[[160,'KØKKEN']],cast:[['Produktionschef i hvid kittel','#f4f4f0']],frames:[{t:'12:30:00',at:[[50,.3]],txt:'Maja tester ny smag med to medarbejdere.'},{t:'12:45:00',at:[[50,.3]],txt:'Stadig.'},{t:'13:00:00',at:[[50,.3]],txt:'Stadig.'}],text:'Maja Dyb er i prøvekøkkenet fra 12:20 til 13:15.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne om halsen er fra hans id-kort-snor. Han døde af slaget med en røreske.'},
{type:'doc',kind:'Rapport',title:'Kontoret',src:'Kriminalteknisk Center',text:'Kontoret var låst med kode. Koden blev ikke brugt mellem 12:00 og 14:00.'},
{type:'doc',style:'note',kind:'Seddel',title:'Post-it ved pc',text:'Jens’ kode: salmiak'}
]],
epilogue:'Allan Kure havde kopieret opskriften og solgt den til koncernen. I pakkeriet sagde Jens, at han ville anmelde ham. Allan slog ham med en røreske og bar ham ind til kedlerne.',
headline:'Sælger anholdt for lakridsdrab'});

KK.push({nr:80,theme:'Mejeri',no:'K-3902',title:'Skummet',when:'Tirsdag 24. marts · ca. 05:30',where:'Hvidbjerg Andelsmejeri, Vestjylland',
victim:'Karen Mælk (57), mejeribestyrer',victimLook:{sex:'f',hair:'bun',hc:'blond',age:'mid',shirt:'#f4f4f0',collar:'shirt'},
intro:'Mejeribestyreren findes død i ostelageret. Prisvindende ost er byttet ud.',
brief:'Kl. 06:00 fandt en mejerist bestyrer Karen Mælk død i ostelageret. Hun havde opdaget, at nogen byttede mejeriets prisvindende oste ud med billige, og solgte de gode selv.',
options:[['Ole Vind, mejerist','Bente Gram, sælger','Hans Mælk, ægtemand','Pia Ost, laborant'],['Ostestang','Kvælning i kølerum','Gift i mælk'],['Ostelageret','Tapperiet','Laboratoriet']],answer:[1,0,2],
info:[['Mejerist.','Sælger. Kører ostene ud.','Karens mand.','Laborant. Tester mælken.'],
['Tung stang til at vende oste.','Kold luft i lukket rum.','Mælk.'],
['Lager med oste. Her blev hun fundet.','Hal hvor mælk tappes.','Laboratorium.']],
timeline:[['04:30','Karen kommer ind.'],['04:45','Karen beder to om en snak.'],['05:00','Karen ses sidst.'],['06:00','Karen findes.']],
sketch:{title:'Ostelageret · fundsted',items:[['shelf',60,130,24,200,0,'Oste'],['shelf',340,130,24,200,0,'Oste']],body:[200,140,10,.85],markers:[[1,240,120,'Reagensglas-skår']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Karens telefon',owner:'Karen Mælk',lockTime:'06:05',wall:'linear-gradient(160deg,#f4f4f0,#c9a43a)',msgs:[{with:'Ole + Bente',m:[['me','04:45','Ostene er byttet. Kun I to håndterer dem. Mød mig.'],['them','04:47','Kommer. (Bente)']]}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 06:30',text:'Slag mod hovedet med noget langt af metal. Huden er kold og bleg, hvilket også kan skyldes kulde. Ingen tegn på gift. Hun døde mellem 05:00 og 05:30.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Karens kittel',bg:'tile',stamp:'K-3902 / 02',items:[['glass',100,90,1.4,0],['stain',220,100,1.2,0,'#f4f4f0']],caption:'Glasskår fra reagensglas og mælkepletter. Reagensglas er i laboratoriet, men også i tapperiet, hvor prøver tages. Ostelageret har ingen glas.'}
],[
{type:'cctv',kind:'Overvågning',title:'Tapperiet',date:'24-03',camera:'TAPPERI',doors:[[160,'HAL']],cast:[['Mejerist med hårnet','#f4f4f0']],frames:[{t:'05:00:00',at:[[50,.3]],txt:'Ole ved tappemaskinen.'},{t:'05:15:00',at:[[50,.3]],txt:'Stadig.'},{t:'05:30:00',at:[[50,.3]],txt:'Stadig.'}],text:'Ole Vind står ved tappemaskinen i tapperiet fra 04:50 til 05:45. Karen kom ikke derind.'},
{type:'doc',kind:'Supplerende obduktion',title:'Kulden',src:'Retsmedicinsk Institut',text:'Kulden kom efter døden, da hun lå i lageret. Hun døde af slaget med en ostestang.'}
]],
epilogue:'Bente Gram havde solgt de gode oste selv. I laboratoriet sagde Karen, at hun ville anmelde det. Bente greb en ostestang, der lå til rengøring, og slog. Hun bar Karen ind i ostelageret.',
headline:'Sælger anholdt for drab på mejeri'});

KK.push({nr:81,theme:'Røgeri',no:'K-3903',title:'Røget',when:'Lørdag 27. juni · ca. 22:00',where:'Røgeriet ved Gudhjem',
victim:'Niels Røg (65), røgemester',victimLook:{sex:'m',hair:'short',hc:'hvid',beard:'full',age:'old',shirt:'#f4f4f0',collar:'shirt'},
intro:'Den gamle røgemester findes død i røgeovnen. Sildene er brændt.',
brief:'Kl. 22:30 fandt en servitrice røgemester Niels Røg død i røgeovnen. Niels skulle sælge røgeriet til en kæde, og to af de ansatte ville miste alt.',
options:[['Jesper Kok, kok','Anne Fisk, servitrice','Bo Røg, søn','Tine Hav, kæde-direktør'],['Røggas','Slag med elletræ','Fiskekniv'],['Røgeovnen','Køkkenet','Kølerummet']],answer:[0,1,2],
info:[['Kok i 20 år.','Servitrice.','Søn.','Direktør i kæden.'],
['Røgen fra ovnen.','Tungt stykke elletræ.','Skarp fiskekniv.'],
['Røgeovnen. Her blev han fundet.','Køkkenet.','Kølerum med fisk.']],
timeline:[['20:00','Fest.'],['21:00','Niels fortæller om salget.'],['21:15','Niels ses sidst.'],['22:30','Niels findes.']],
sketch:{title:'Røgeovnen · fundsted',items:[['stove',200,80,140,80,0,'Røgeovn'],['crate',80,200,40,30,0,'Brænde']],body:[200,190,80,.85],markers:[[1,240,170,'Is på skjorten']]},
evidence:[[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Gæstens video',meta:'21:02',lines:[['Niels Røg','Jeg sælger. Jesper og Bo, I to bliver ikke ansat i kæden. Det er sådan.'],['Jesper Kok','Efter 20 år?'],['Niels Røg','Kom bagud, så taler vi.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 23:00',text:'Ingen røg i lungerne: han var død, før han kom i ovnen. Slag mod hovedet med noget tungt af træ, eller et snit. Han døde mellem 21:15 og 21:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Niels’ skjorte',bg:'deck',stamp:'K-3903 / 02',items:[['stain',100,90,1.4,0,'#cfe0f0'],['stain',220,100,1.2,0,'#c9b48a']],caption:'Is og fiskeskæl. Det findes i kølerummet og i køkkenet, hvor fisken renses. Røgeovnen har kun sod.'}
],[
{type:'cctv',kind:'Overvågning',title:'Terrassen',date:'27-06',camera:'TERRASSE',doors:[[160,'BAR']],cast:[['Ung mand med guitar','#3e7b46']],frames:[{t:'21:15:00',at:[[50,.3]],txt:'Bo spiller for gæsterne.'},{t:'21:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'21:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Bo Røg spiller guitar på terrassen fra 21:10 til 22:00.'},
{type:'doc',kind:'Supplerende obduktion',title:'Såret',src:'Retsmedicinsk Institut',text:'Såret har træsplinter af el. Ingen snit.'},
{type:'doc',kind:'Rapport',title:'Køkkenet',src:'Opvasker',text:'Jeg vaskede op i køkkenet hele aftenen. Niels kom ikke ind efter talen.'}
]],
epilogue:'Jesper Kok havde givet røgeriet 20 år og blev smidt ud. I kølerummet skændtes de. Jesper slog Niels med et stykke elletræ og lagde ham i røgeovnen, så det skulle ligne et uheld.',
headline:'Kok anholdt for drab i røgeri'});

KK.push({nr:82,theme:'Kaffebar',no:'K-3904',title:'Dobbelt espresso',when:'Mandag 16. november · ca. 08:00',where:'Bønnen Kaffebar, Aarhus',
victim:'Viktor Bønne (34), barista og ejer',victimLook:{sex:'m',hair:'curly',hc:'brun',beard:'full',age:'young',shirt:'#5a3a22',collar:'round'},
intro:'En prisvindende barista findes død bag disken. Hans kaffe var forgiftet.',
brief:'Kl. 08:20 fandt den første kunde barista Viktor Bønne død bag disken. Viktor havde vundet DM i barista og opdaget, at nogen havde stjålet fra kassen i månedsvis.',
options:[['Ida Krop, medarbejder','Malte Sund, medarbejder','Rie Bønne, søster','Lars Mørk, udlejer'],['Gift i espresso','Slag med portafilter','Kvælning med forklæde'],['Bag disken','Baglokalet','Ristelokalet']],answer:[1,1,2],
info:[['Medarbejder.','Medarbejder.','Søster.','Udlejer.'],
['Espresso.','Tungt portafilter.','Forklæde.'],
['Bag disken. Her blev han fundet.','Baglokale med lager.','Rum med kafferister.']],
timeline:[['06:30','Viktor åbner.'],['07:00','Viktor beder to om en snak.'],['07:15','Viktor ses sidst.'],['08:20','Viktor findes.']],
sketch:{title:'Bag disken · fundsted',items:[['counter',200,60,300,30,0,'Disk'],['desk',300,200,80,30,0]],body:[200,150,80,.85],markers:[[1,240,130,'Kaffeskaller']]},
evidence:[[
{type:'doc',style:'table',kind:'Kassekontrol',title:'Hvem lukkede kassen',rows:[['Dato','Lukket af','Manko'],['02.11','I. Krop','-2.300'],['09.11','M. Sund','-3.100'],['13.11','I. Krop','-1.900']],after:'Viktor skrev "Ida og Malte, kl. 7" på tavlen.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 08:50',text:'Små pupiller og blå læber, som ved gift, men også en bule på hovedet fra noget tungt og rundt. Ingen mærker om halsen. Han døde mellem 07:15 og 07:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Viktors forklæde',bg:'wood',stamp:'K-3904 / 02',items:[['stain',100,90,1.4,0,'#6b4a2b'],['stain',220,100,1.2,0,'#c9b48a']],caption:'Kaffeskaller fra ristningen. Det findes i ristelokalet og i baglokalet, hvor sækkene står. Der er ingen kaffeskaller bag disken.'}
],[
{type:'cctv',kind:'Overvågning',title:'Disken',date:'16-11',camera:'DISK',doors:[[160,'DISK']],cast:[['Medarbejder med rødt hår','#c94a3b']],frames:[{t:'07:15:00',at:[[50,.3]],txt:'Ida betjener kunder.'},{t:'07:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'07:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Ida Krop er ved disken fra 07:00 til 08:00. Viktor kom ikke frem til disken efter 07:10.'},
{type:'doc',style:'table',kind:'Laboratoriesvar',title:'Toksikologi',rows:[['Prøve','Fund'],['Blod','Ingen gift'],['Espresso','Ingen gift']],after:'Han døde af slaget.'},
{type:'doc',kind:'Rapport',title:'Baglokalet',src:'Leverandør',text:'Jeg læssede kaffesække af i baglokalet fra 07:10 til 07:50. Viktor kom ikke derind.'}
]],
epilogue:'Malte Sund havde stjålet fra kassen. I ristelokalet sagde Viktor, at han ville anmelde ham. Malte slog ham med et portafilter og bar ham om bag disken.',
headline:'Barista anholdt for drab i kaffebar'});

KK.push({nr:83,theme:'Loppemarked',no:'K-3905',title:'Fund til en femmer',when:'Søndag 10. maj · ca. 14:00',where:'Loppemarkedet på Israels Plads',
victim:'Grete Loppe (70), loppesælger',victimLook:{sex:'f',hair:'curly',hc:'hvid',age:'old',glasses:true,shirt:'#7a6a4f',collar:'v'},
intro:'En gammel loppesælger findes død bag sin bod. Hun havde solgt et maleri for 50 kr. — der var værd millioner.',
brief:'Kl. 14:40 fandt en nabo-sælger Grete Loppe død bag sin bod. Om formiddagen havde hun solgt et maleri for 50 kr. Det viste sig at være en ægte Krøyer. Grete ville have det tilbage.',
options:[['Henrik Bo, køber','Vibe Lund, kunsthandler','Allan Rask, nabo-sælger','Ditte Loppe, barnebarn'],['Slag med lysestage','Kvælning med tørklæde','Skub mod bord'],['Bag boden','Kunsthandlerens varevogn','Parkeringskælderen']],answer:[1,0,1],
info:[['Købte maleriet for 50 kr.','Kunsthandler. Vurderede maleriet.','Nabo-sælger.','Gretes barnebarn.'],
['Messinglysestage fra boden.','Silketørklæde.','Bordkant.'],
['Bag Gretes bod. Her blev hun fundet.','Kunsthandlerens bil.','Kælder under pladsen.']],
timeline:[['10:00','Grete sælger maleriet.'],['13:00','Grete finder ud af, hvad det var.'],['13:30','Grete ses sidst.'],['14:40','Grete findes.']],
sketch:{title:'Bag boden · fundsted',items:[['table',200,60,200,40,0,'Bod'],['crate',100,180,40,30,0],['crate',300,180,40,30,0]],body:[200,150,70,.85],markers:[[1,240,130,'Olie på skoen']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Gretes telefon',owner:'Grete Loppe',lockTime:'14:45',wall:'linear-gradient(160deg,#7a6a4f,#e9d4a6)',calls:[['Henrik Bo','13:05','out','4 min'],['Vibe Lund','13:12','out','2 min']],notes:[['Maleriet','Henrik købte det. Vibe vurderede det. Begge løj om værdien. Jeg vil have det tilbage.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 15:10',text:'Slag mod hovedet med noget tungt af metal, eller mærker om halsen fra stof. Hun er ikke faldet mod et bord. Hun døde mellem 13:30 og 14:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Gretes sko',bg:'asphalt',stamp:'K-3905 / 03',items:[['shoe',100,90,1.4,0],['stain',220,100,1.2,0,'#3a3a3a']],caption:'Motorolie og beton-støv på skoene. Olie og beton er i parkeringskælderen og i kunsthandlerens varevogn, som stod dernede. Pladsen er flisebelagt og ren.'}
],[
{type:'audio',style:'voicemail',kind:'Vidneforklaring',label:'Henriks kæreste',meta:'Optaget 10.05 kl. 16:00',lines:[['Kæreste','Henrik og jeg spiste frokost på caféen fra halv to til tre. Han viste maleriet til alle.'],['Betjent','Gik han nogen steder?'],['Kæreste','Kun på toilettet i to minutter.']]},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne er fra hendes tørklæde, som hun bar stramt. Hun døde af slaget med en lysestage.'},
{type:'doc',kind:'Rapport',title:'Parkeringskælderen',src:'Kriminalteknisk Center',text:'Ingen spor i selve kælderen ud over varevognen. Blodet er fundet inde i kunsthandlerens varevogn.'}
]],
epilogue:'Vibe Lund havde vidst, at maleriet var en ægte Krøyer, og købt det af Henrik for 10.000 kr. Grete fandt hende i varevognen i parkeringskælderen. Vibe slog hende med en lysestage, hun havde købt i boden, og bar hende tilbage bag boden.',
headline:'Kunsthandler anholdt for drab på loppemarked'});

KK.push({nr:84,theme:'Food truck',no:'K-3906',title:'Street food',when:'Fredag 21. august · ca. 21:00',where:'Food truck-festival, Refshaleøen',
victim:'Omar Kassem (38), food truck-ejer',victimLook:{sex:'m',hair:'short',hc:'sort',beard:'full',skin:3,shirt:'#c94a3b',collar:'round'},
intro:'Festivalens bedste food truck mister sin kok. Han findes død i sin vogn.',
brief:'Kl. 21:40 fandt en kunde Omar Kassem død i sin food truck. Omar havde vundet festivalens pris for tredje år og havde opdaget, at nogen havde kopieret hans hemmelige krydderiblanding.',
options:[['Lotte Brink, konkurrent','Mads Holm, festivalchef','Yusuf Kassem, bror','Ane Dal, kok i Omars vogn'],['Gas fra grill','Slag med stegepande','Kvælning med forklæde'],['Omars vogn','Festivalkontoret','Lotte Brinks vogn']],answer:[0,1,2],
info:[['Konkurrent med en vogn ved siden af.','Festivalchef.','Bror og medejer.','Kok i Omars vogn. Kender blandingen.'],
['Gasgrill.','Tung jernpande.','Forklæde.'],
['Omars food truck. Her blev han fundet.','Festivalens kontor-container.','Konkurrentens vogn.']],
timeline:[['17:00','Festival.'],['20:00','Omar vinder prisen.'],['20:30','Omar konfronterer to.'],['21:40','Omar findes.']],
sketch:{title:'Omars vogn · fundsted',items:[['counter',200,60,300,30,0,'Grill og disk'],['shelf',360,140,20,140,0]],body:[200,150,80,.85],markers:[[1,240,130,'Fremmed krydderi']]},
evidence:[[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Omars takketale',meta:'20:05',lines:[['Omar Kassem','Tak! Men nogen har kopieret min krydderiblanding. Lotte, Ane, kom over til mig efter talen. Vi skal tale.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 22:10',text:'Slag mod hovedet med noget fladt og tungt af jern, eller mærker om halsen fra stof. Ingen tegn på gasforgiftning. Han døde mellem 20:30 og 21:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Omars forklæde',bg:'asphalt',stamp:'K-3906 / 02',items:[['stain',100,90,1.4,0,'#d46a1f'],['stain',220,100,1.2,0,'#a3231b']],caption:'Et fremmed krydderi (røget chili), som Omar aldrig brugte. Det findes i Lotte Brinks vogn og i festivalkontoret, hvor alle vogne afleverede smagsprøver. Ikke i Omars vogn.'}
],[
{type:'cctv',kind:'Overvågning',title:'Omars vogn indefra',date:'21-08',camera:'VOGN',doors:[[160,'LUGE']],cast:[['Kok med hårnet','#f4f4f0']],frames:[{t:'20:30:00',at:[[50,.3]],txt:'Ane steger og serverer.'},{t:'20:45:00',at:[[50,.3]],txt:'Stadig.'},{t:'21:00:00',at:[[50,.3]],txt:'Stadig.'}],text:'Ane Dal er i Omars vogn og serverer fra 20:20 til 21:30. Omar er ikke i vognen i det tidsrum.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne om halsen er fra hans kæde. Han døde af slaget med en stegepande.'},
{type:'doc',kind:'Rapport',title:'Festivalkontoret',src:'Festivalchefen',text:'Kontoret var låst, mens jeg var på scenen. Ingen havde nøgle udover mig.'}
]],
epilogue:'Lotte Brink havde stjålet Omars krydderiblanding. I sin egen vogn bad hun ham om ikke at sige noget. Omar truede med at fortælle det til alle. Lotte slog ham med en stegepande og fik ham båret over i hans egen vogn, da Ane gik pause.',
headline:'Konkurrent anholdt for drab på food truck-festival'});

KK.push({nr:85,theme:'Cocktailbar',no:'K-3907',title:'Sidste omgang',when:'Lørdag 31. januar · ca. 02:00',where:'Baren "Neon", Vesterbro',
victim:'Carla Mendez (36), bartender og ejer',victimLook:{sex:'f',hair:'long',hc:'sort',earrings:true,skin:2,shirt:'#111111',collar:'v'},
intro:'Byens bedste bartender findes død i kælderen efter lukketid.',
brief:'Kl. 02:30 fandt en dørmand ejer Carla Mendez død i bar-kælderen. Carla havde opdaget, at nogen havde fortyndet de dyre flasker med billig sprut og solgt resten.',
options:[['Jonas Bay, bartender','Silke Moe, bartender','Brian Dør, dørmand','Felix Mendez, bror'],['Isstykke','Kvælning med barhåndklæde','Gift i cocktail'],['Kælderen','Baren','Toilettet']],answer:[0,2,1],
info:[['Bartender.','Bartender.','Dørmand.','Bror.'],
['Stor isblok.','Barhåndklæde.','Cocktail.'],
['Kælder med flasker. Her blev hun fundet.','Selve baren.','Gæstetoilettet.']],
timeline:[['01:00','Sidste omgang.'],['01:30','Lukket.'],['01:35','Carla beder to om en snak.'],['02:30','Carla findes.']],
sketch:{title:'Kælderen · fundsted',items:[['shelf',60,130,24,200,0,'Flasker'],['shelf',340,130,24,200,0],['stairs',200,40,40,30,0]],body:[200,150,40,.85],markers:[[1,240,130,'Cocktailglas']]},
evidence:[[
{type:'doc',style:'table',kind:'Vareoptælling',title:'Fortyndede flasker',rows:[['Flaske','Sidst åbnet af'],['Rom XO','J. Bay'],['Gin Premium','S. Moe'],['Whisky 18','J. Bay']],after:'Carla skrev på tavlen: "Jonas og Silke, bliv efter lukning."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 03:00',text:'Små pupiller og blå læber som ved gift, eller mærker om halsen fra stof. Ingen slag mod hovedet. Hun døde mellem 01:35 og 02:05.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Carlas skjorte',bg:'wood',stamp:'K-3907 / 02',items:[['glass',100,90,1.4,0],['stain',220,100,1.2,0,'#e8a0b4']],caption:'Cocktailplet og citrusskal. Det er der ved baren og på toilettet, hvor gæsterne efterlod glas. Kælderen har ingen citrus.'}
],[
{type:'cctv',kind:'Overvågning',title:'Gaden udenfor',date:'31-01',camera:'GADE',doors:[[160,'DØR']],cast:[['Kvinde i lang frakke','#5b3f66']],frames:[{t:'01:36:00',at:[[50,0]],txt:'Silke går ud ad døren.'},{t:'01:38:00',at:[[80,.3]],txt:'Hun tager en taxa.'},{t:'02:10:00',at:[null],txt:'Hun er ikke kommet tilbage.'}],text:'Silke Moe forlader baren kl. 01:36. Taxaselskabet bekræfter turen til Valby.'},
{type:'doc',style:'table',kind:'Laboratoriesvar',title:'Toksikologi',rows:[['Prøve','Fund'],['Cocktail','GHB'],['Blod','GHB i dødelig dosis']],after:'Mærkerne om halsen er fra hendes halskæde. Hun døde af GHB, som hun drak efter kl. 01:40. Cocktailen blev blandet efter, at Silke var gået.'},
{type:'doc',kind:'Rapport',title:'Toilettet',src:'Rengøringen',text:'Toilettet var spærret fra 01:30, fordi det var stoppet. Ingen gik derind.'}
]],
epilogue:'Jonas Bay havde fortyndet de dyre flasker og solgt dem videre. Ved baren blandede han Carla en "fredscocktail" med GHB. Da hun faldt om, bar han hende ned i kælderen.',
headline:'Bartender anholdt for giftmord i cocktailbar'});

KK.push({nr:86,theme:'Slagter',no:'K-3908',title:'Kødkrog',when:'Torsdag 12. november · ca. 18:30',where:'Slagter Brask, Viborg',
victim:'Henning Brask (61), slagtermester',victimLook:{sex:'m',hair:'bald',hc:'grå',beard:'moustache',age:'old',shirt:'#f4f4f0',collar:'shirt'},
intro:'Slagtermesteren findes død i kølerummet. Butikken skulle overtages af en kæde.',
brief:'Kl. 19:10 fandt en svend slagtermester Henning Brask død i kølerummet. Henning havde opdaget, at nogen solgte udenlandsk kød som "dansk økologisk" i hans butik.',
options:[['Kim Svend, slagtersvend','Pia Brask, datter','Lasse Kok, leverandør','Bente Holm, ekspedient'],['Kødkrog','Kødhammer','Kvælning med pølsesnor'],['Kølerummet','Pølsemageriet','Butikken']],answer:[2,1,1],
info:[['Slagtersvend.','Datter.','Leverandør af kød.','Ekspedient.'],
['Stor kødkrog.','Tung kødhammer.','Pølsesnor.'],
['Kølerummet. Her blev han fundet.','Rum hvor pølser laves.','Butikken.']],
timeline:[['17:30','Lukketid.'],['17:40','Henning beder to om en snak.'],['18:00','Henning ses sidst.'],['19:10','Henning findes.']],
sketch:{title:'Kølerummet · fundsted',items:[['shelf',200,40,320,20,0,'Kroge'],['crate',100,200,40,30,0]],body:[200,150,70,.85],markers:[[1,240,130,'Krydderi']]},
evidence:[[
{type:'doc',style:'table',kind:'Følgesedler',title:'Kødleverancer',rows:[['Dato','Kvitteret af','Oprindelse'],['03.11','K. Svend','Polen'],['06.11','L. Kok','Polen'],['10.11','L. Kok','Polen']],after:'Henning skrev på følgesedlen: "Kim og Lasse. 17:40."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 19:40',text:'Kraftigt slag mod hovedet med noget tungt og kantet, eller et stik fra en krog. Ingen mærker om halsen. Han døde mellem 18:00 og 18:30.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Hennings forklæde',bg:'tile',stamp:'K-3908 / 02',items:[['stain',100,90,1.4,0,'#a3231b'],['rope',220,100,1.2,0,'#f2e0c0']],caption:'Pølsekrydderi og tarmskind. Det findes i pølsemageriet, men pølser hænger også i butikken. Kølerummet har kun kroge og kød.'}
],[
{type:'doc',style:'receipt',kind:'Kvittering',title:'Kims kvittering',shop:'Viborg Fitness',rows:[['17:55','Check ind'],['18:45','Check ud']],text:'Kim Svend var i fitnesscentret. Kameraet ved indgangen bekræfter.'},
{type:'doc',kind:'Supplerende obduktion',title:'Krogen',src:'Retsmedicinsk Institut',text:'Der er intet stik. Han døde af slaget med en kødhammer.'},
{type:'doc',kind:'Rapport',title:'Butikken',src:'Ekspedienten',text:'Jeg gjorde butikken ren fra 17:30 til 18:45. Henning kom ikke ud i butikken.'}
]],
epilogue:'Lasse Kok solgte billigt udenlandsk kød, som han satte danske mærker på. I pølsemageriet sagde Henning, at han ville anmelde ham. Lasse slog ham med en kødhammer og bar ham ind i kølerummet.',
headline:'Leverandør anholdt for drab hos slagteren'});

KK.push({nr:87,theme:'Iskiosk',no:'K-3909',title:'Smeltet',when:'Lørdag 18. juli · ca. 20:00',where:'Isbaren ved Skagen Havn',
victim:'Benny Is (50), isbar-ejer',victimLook:{sex:'m',hair:'short',hc:'blond',beard:'stubble',shirt:'#7ab0d8',collar:'round'},
intro:'Isbarens ejer findes død i fryseren efter sommerens travleste dag.',
brief:'Kl. 20:40 fandt en ansat isbar-ejeren Benny Is død i den store fryser. Benny havde opdaget, at nogen havde kopieret hans berømte "Skagensis" og solgte den fra en konkurrerende kiosk.',
options:[['Rikke Fløde, ansat','Thomas Krem, konkurrent','Maja Is, datter','Erik Vaffel, leverandør'],['Frysning','Slag med isske','Kvælning med forklæde'],['Fryseren','Baglokalet','Vaffelbageriet']],answer:[1,1,2],
info:[['Ansat.','Konkurrent med kiosk ved siden af.','Datter.','Leverer vafler.'],
['Indespærret i fryseren.','Tung isske i metal.','Forklæde.'],
['Den store fryser. Her blev han fundet.','Baglokale.','Rum hvor vaflerne bages.']],
timeline:[['18:00','Travl aften.'],['19:00','Benny konfronterer to.'],['19:15','Benny ses sidst.'],['20:40','Benny findes.']],
sketch:{title:'Fryseren · fundsted',items:[['shelf',60,130,24,200,0,'Is'],['shelf',340,130,24,200,0,'Is']],body:[200,140,0,.8],markers:[[1,240,120,'Vaffeldej']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Bennys telefon',owner:'Benny Is',pin:'1807',pinHint:'Dagens dato (ddmm).',lockTime:'20:45',wall:'linear-gradient(160deg,#7ab0d8,#f4e0e8)',msgs:[{with:'Rikke + Thomas',m:[['me','19:00','Opskriften er kopieret. Rikke, du har den. Thomas, du sælger den. Kom nu.']]}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 21:10',text:'Iskrystaller i ansigtet, men hjertet stoppede ikke af kulde: slag mod hovedet med noget lille og tungt af metal, eller mærker om halsen. Han døde mellem 19:15 og 19:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Bennys trøje',bg:'tile',stamp:'K-3909 / 02',items:[['stain',100,90,1.4,0,'#e9c46a'],['stain',220,100,1.2,0,'#f4f1ea']],caption:'Vaffeldej og flormelis. Det findes i vaffelbageriet og i baglokalet, hvor dejen står. Fryseren har ingen dej.'}
],[
{type:'cctv',kind:'Overvågning',title:'Isdisken',date:'18-07',camera:'DISK',doors:[[160,'DISK']],cast:[['Ansat med sommerkasket','#d8b53e']],frames:[{t:'19:15:00',at:[[50,.3]],txt:'Rikke laver is til køen.'},{t:'19:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'19:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Rikke Fløde står ved disken fra 19:05 til 20:30 med lang kø.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne er fra hans halskæde. Han døde af slaget med en isske.'},
{type:'doc',kind:'Rapport',title:'Baglokalet',src:'Leverandør',text:'Jeg læssede vafler af i baglokalet fra 19:00 til 20:00. Benny kom ikke.'}
]],
epilogue:'Thomas Krem havde købt Bennys opskrift af en tidligere ansat. I vaffelbageriet sagde Benny, at han ville sagsøge ham. Thomas slog ham med en isske og bar ham ind i fryseren.',
headline:'Konkurrent anholdt for drab i isbar'});

KK.push({nr:88,theme:'Bageri',no:'K-3910',title:'Hævet',when:'Torsdag 5. februar · ca. 04:00',where:'Bageriet Morgengry, Aalborg',
victim:'Poul Bager (58), bagermester',victimLook:{sex:'m',hair:'short',hc:'grå',beard:'moustache',age:'old',shirt:'#f4f4f0',collar:'shirt'},
intro:'Bagermesteren findes død i dejrummet ved morgengry. Rugbrødene er ikke bagt.',
brief:'Kl. 04:40 fandt en lærling bagermester Poul Bager død i dejrummet. Poul havde opdaget, at nogen havde snydt bageriets mel-leverandør og stukket pengene i lommen.',
options:[['Lise Mel, svend','Ahmed Ali, lærling','Gitte Bager, hustru','Ole Kværn, mel-leverandør'],['Kagerulle','Dejmaskine','Kvælning med mel (røgforgiftning)'],['Dejrummet','Ovnrummet','Melkammeret']],answer:[3,0,2],
info:[['Bagersvend.','Lærling.','Pouls kone. Fører regnskabet.','Mel-leverandør.'],
['Tung kagerulle.','Dejmaskinens krog.','Melstøv i lukket rum.'],
['Dejrummet. Her blev han fundet.','Rum med ovne.','Lille kammer med melsække.']],
timeline:[['02:30','Poul begynder.'],['03:00','Poul ringer til to.'],['03:15','Poul ses sidst.'],['04:40','Poul findes.']],
sketch:{title:'Dejrummet · fundsted',items:[['table',200,80,200,50,0,'Dejbord'],['barrel',320,200,40,40,0,'Dejmaskine']],body:[160,190,70,.85],markers:[[1,240,170,'Mel på ryggen']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Pouls telefon',owner:'Poul Bager',lockTime:'04:45',wall:'linear-gradient(160deg,#f4f1ea,#c9a43a)',calls:[['Gitte','03:00','out','3 min'],['Ole Kværn','03:05','out','2 min']],notes:[['Mel-regning','Fakturaerne stemmer ikke. Gitte eller Ole. Taler med dem i nat.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 05:10',text:'Slag mod hovedet med noget rundt og tungt, eller fra dejmaskinens krog. Ingen mel i lungerne. Han døde mellem 03:15 og 03:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Pouls ryg',bg:'wood',stamp:'K-3910 / 02',items:[['stain',100,90,1.4,0,'#f4f1ea'],['stain',220,100,1.2,0,'#8a6a3a']],caption:'Masser af mel og jute-fibre fra sække. Det er der i melkammeret, men jutesække står også i ovnrummet. Dejrummet har ingen jutesække.'}
],[
{type:'cctv',kind:'Overvågning',title:'Butikken',date:'05-02',camera:'BUTIK',doors:[[160,'DØR']],cast:[['Kvinde i rød cardigan','#c94a3b']],frames:[{t:'03:15:00',at:[[50,.3]],txt:'Gitte gør kassen klar.'},{t:'03:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'03:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Gitte Bager er i butikken fra 03:10 til 04:30.'},
{type:'doc',kind:'Supplerende obduktion',title:'Krogen',src:'Retsmedicinsk Institut',text:'Såret er rundt og bredt. Det er en kagerulle, ikke en krog.'},
{type:'doc',kind:'Rapport',title:'Ovnrummet',src:'Svenden',text:'Jeg var i ovnrummet fra 03:00 til 04:30 og satte brød ind. Poul kom ikke.'}
]],
epilogue:'Ole Kværn havde sendt for store fakturaer i et år. I melkammeret viste Poul ham papirerne. Ole greb en kagerulle og slog. Han bar Poul ind i dejrummet.',
headline:'Mel-leverandør anholdt for drab i bageri'});
