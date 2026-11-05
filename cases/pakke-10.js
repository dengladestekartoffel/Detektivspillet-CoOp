'use strict';
// Sagsbunke 10.

KK.push({nr:99,theme:'Bank',no:'K-4101',title:'Boksen',when:'Fredag 13. marts · ca. 18:00',where:'Fjordbanken, Silkeborg',
victim:'Lennart Krone (59), bankdirektør',victimLook:{sex:'m',hair:'short',hc:'grå',glasses:true,age:'old',shirt:'#2f3b55',collar:'shirt'},
intro:'Bankdirektøren findes død i boksen efter lukketid. Tre bankbokse er tømt.',
brief:'Kl. 18:40 fandt en vagt bankdirektør Lennart Krone død i bankboks-rummet. Tre kunders bokse var tømt for guld og smykker. Lennart havde opdaget, at nogen havde kopieret boksenøglerne.',
options:[['Marie Kasse, kasserer','Johan Lås, sikkerhedschef','Anne Krone, datter','Peter Guld, kunde'],['Pengeskabsdør (klemt)','Slag med pengekassette','Kvælning med slips'],['Boksrummet','Sikkerhedskontoret','Kassehallen']],answer:[1,1,1],
info:[['Kasserer.','Sikkerhedschef. Har adgang til nøglerne.','Datter.','Kunde.'],
['Tung boksdør.','Pengekassette i stål.','Slips.'],
['Rummet med bankbokse. Her blev han fundet.','Sikkerhedschefens kontor.','Kassehallen.']],
timeline:[['16:00','Banken lukker.'],['17:00','Lennart opdager tyveriet.'],['17:15','Lennart ses sidst.'],['18:40','Lennart findes.']],
sketch:{title:'Boksrummet · fundsted',items:[['locker',200,40,320,30,0,'Bankbokse'],['table',200,160,80,40,0]],body:[200,200,80,.8],markers:[[1,240,180,'Kaffekop']]},
evidence:[[
{type:'doc',style:'table',kind:'Nøglelog',title:'Hvem havde boksenøglerne',rows:[['Dato','Hvem'],['10.03','M. Kasse'],['11.03','J. Lås'],['12.03','J. Lås']],after:'Lennart skrev: "Marie og Johan, mit kontor kl. 17:15."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 19:10',text:'Ingen klemskader. Kraftigt slag mod hovedet med noget kantet af stål, eller mærker om halsen fra stof. Han døde mellem 17:15 og 17:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Lennarts jakkesæt',bg:'carpet',stamp:'K-4101 / 02',items:[['cup',100,90,1.4,0],['paper',220,100,1.2,0]],caption:'Kaffe og papir fra videoprint. Det findes i sikkerhedskontoret og kassehallen. Boksrummet har ingen kaffe eller printere.'}
],[
{type:'cctv',kind:'Overvågning',title:'Kassehallen',date:'13-03',camera:'HAL',doors:[[160,'KASSE']],cast:[['Kasserer i grøn bluse','#3e7b46']],frames:[{t:'17:15:00',at:[[50,.3]],txt:'Marie tæller kassen op.'},{t:'17:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'17:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Marie Kasse tæller kassen op i kassehallen fra 17:00 til 18:00. Lennart kom ikke ind i kassehallen.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne er fra hans eget slips. Han døde af slaget med en pengekassette.'}
]],
epilogue:'Johan Lås havde kopieret nøglerne og tømt boksene. På sikkerhedskontoret konfronterede Lennart ham. Johan slog ham med en pengekassette og bar ham ind i boksrummet.',
headline:'Sikkerhedschef anholdt for drab i bank'});

KK.push({nr:100,theme:'Kasino',no:'K-4102',title:'All in',when:'Lørdag 19. september · ca. 02:00',where:'Casino Nord, Aalborg',
victim:'Vincent Rød (48), kasinodirektør',victimLook:{sex:'m',hair:'short',hc:'sort',beard:'moustache',shirt:'#111111',collar:'shirt'},
intro:'Kasinodirektøren findes død i tælle-rummet. Natten har kostet nogen alt.',
brief:'Kl. 02:40 fandt en dealer kasinodirektør Vincent Rød død i tællerummet. Vincent havde opdaget, at nogen havde snydt ved pokerbordene med markerede kort.',
options:[['Sonja Ess, dealer','Mikkel Bluf, pokerspiller','Rasmus Jeton, kasserer','Lise Rød, hustru'],['Jetonkasse','Kvælning med kortslips','Gift i drink'],['Tællerummet','VIP-rummet','Garderoben']],answer:[0,0,1],
info:[['Dealer ved pokerbordet.','Professionel pokerspiller.','Kasserer.','Hustru.'],
['Tung kasse af jetoner.','Slips.','Drink.'],
['Rum hvor penge tælles. Her blev han fundet.','VIP-rum med pokerbord.','Garderoben.']],
timeline:[['22:00','Turnering.'],['01:30','Vincent opdager snyd.'],['01:45','Vincent ses sidst.'],['02:40','Vincent findes.']],
sketch:{title:'Tællerummet · fundsted',items:[['table',200,100,200,60,0,'Tællebord'],['locker',200,220,300,30,0]],body:[200,170,80,.8],markers:[[1,240,150,'Fløjlsfnug']]},
evidence:[[
{type:'doc',style:'note',kind:'Seddel',title:'Vincents notat',text:'Markerede kort ved bord 3. Kun Sonja (dealer) og Mikkel (spiller) sad der hele aftenen. Taler med dem.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 03:10',text:'Slag mod hovedet med noget tungt og kantet, eller mærker om halsen fra stof. Ingen tegn på gift. Han døde mellem 01:45 og 02:15.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Vincents jakke',bg:'carpet',stamp:'K-4102 / 02',items:[['coin',100,90,1.4,0,'#a3231b'],['stain',220,100,1.2,0,'#3e7b46']],caption:'Grønt fløjlsfnug fra pokerborde og en jeton. Det findes i VIP-rummet og i garderoben, hvor dealerne skifter. Tællerummet har ingen fløjl.'}
],[
{type:'cctv',kind:'Overvågning',title:'Hovedsalen',date:'19-09',camera:'SAL',doors:[[160,'BORD 1']],cast:[['Pokerspiller med solbriller','#222']],frames:[{t:'01:45:00',at:[[50,.3]],txt:'Mikkel spiller ved bord 1.'},{t:'02:00:00',at:[[50,.3]],txt:'Stadig.'},{t:'02:15:00',at:[[50,.3]],txt:'Stadig.'}],text:'Mikkel Bluf spiller ved bord 1 i hovedsalen fra 01:40 til 02:30.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne er fra hans slips. Han døde af slaget med en jetonkasse.'},
{type:'doc',kind:'Rapport',title:'Garderoben',src:'Garderobedamen',text:'Jeg sad i garderoben hele natten. Vincent kom ikke.'}
]],
epilogue:'Sonja Ess havde markeret kortene og delt gevinsten med en ven. I VIP-rummet sagde Vincent, at hun var fyret. Hun slog ham med en jetonkasse og bar ham ind i tællerummet.',
headline:'Dealer anholdt for drab på kasino'});

KK.push({nr:101,theme:'Talentshow',no:'K-4103',title:'Finalen',when:'Fredag 27. marts · ca. 22:00',where:'Tv-studiet i Valby · "Danmark har Talent"',
victim:'Christina Stjerne (45), dommer',victimLook:{sex:'f',hair:'long',hc:'blond',earrings:true,shirt:'#c94a8a',collar:'v'},
intro:'Tv-dommeren findes død i sin garderobe efter finalen. Vinderen var afgjort på forhånd.',
brief:'Kl. 22:40 fandt en sminkør dommer Christina Stjerne død i garderoben. Christina havde opdaget, at nogen havde snydt med seernes stemmer for at få en bestemt deltager til at vinde.',
options:[['Jonas Glimmer, producer','Ella Sang, deltager','Kim Klap, medvært','Rita Stjerne, søster'],['Kvælning med mikrofonledning','Slag med statuette','Gift i vand'],['Garderoben','Kontrolrummet','Scenen']],answer:[0,1,1],
info:[['Producer. Styrer afstemningen.','Deltager. Vandt i aften.','Medvært.','Søster.'],
['Mikrofonledning.','Tung guldstatuette.','Vandflaske.'],
['Christinas garderobe. Her blev hun fundet.','Rum med skærme og stemmetal.','Scenen.']],
timeline:[['20:00','Finale.'],['21:30','Vinderen kåres.'],['21:40','Christina konfronterer to.'],['22:40','Christina findes.']],
sketch:{title:'Garderoben · fundsted',items:[['desk',200,40,300,24,0,'Spejl'],['sofa',300,190,100,36,0]],body:[180,170,40,.85],markers:[[1,240,150,'Kabelbinder']]},
evidence:[[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Christinas mikrofon (glemt tændt)',meta:'21:41',lines:[['Christina Stjerne','Stemmerne er snydt. Jonas, Ella, jeg ved det. Kom til mig nu.'],['Jonas Glimmer','Ikke her!']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 23:10',text:'Slag mod hovedet med noget tungt af metal, eller mærker om halsen fra en ledning. Ingen tegn på gift. Hun døde mellem 21:45 og 22:15.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Christinas kjole',bg:'carpet',stamp:'K-4103 / 02',items:[['stain',100,90,1.4,0,'#d8b53e'],['stain',220,100,1.2,0,'#333']],caption:'Guldglimmer og kabelstøv. Det findes i kontrolrummet og på scenen. Garderoben har ingen kabler.'}
],[
{type:'cctv',kind:'Overvågning',title:'Pressezonen',date:'27-03',camera:'PRESSE',doors:[[160,'SCENE']],cast:[['Vinder i guldkjole','#d8b53e']],frames:[{t:'21:45:00',at:[[50,.3]],txt:'Ella giver interviews.'},{t:'22:00:00',at:[[50,.3]],txt:'Stadig.'},{t:'22:15:00',at:[[50,.3]],txt:'Stadig.'}],text:'Ella Sang er hos pressen fra 21:40 til 22:30.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne er fra halskæden. Hun døde af slaget med en guldstatuette.'},
{type:'doc',kind:'Rapport',title:'Scenen',src:'Scenemester',text:'Scenen blev revet ned af 20 teknikere fra 21:40. Christina var der ikke.'}
]],
epilogue:'Jonas Glimmer havde snydt med stemmerne for at få bedre seertal. I kontrolrummet sagde Christina, at hun ville fortælle det på direkte tv. Jonas slog hende med årets statuette og bar hende til garderoben.',
headline:'Tv-producer anholdt for drab på dommer'});

KK.push({nr:102,theme:'Filmoptagelse',no:'K-4104',title:'Klap og tag',when:'Mandag 11. maj · ca. 15:00',where:'Filmoptagelse på Kronborg',
victim:'Anton Klap (55), filminstruktør',victimLook:{sex:'m',hair:'short',hc:'grå',beard:'full',age:'old',shirt:'#3e5b46',collar:'shirt'},
intro:'Instruktøren findes død mellem kulisserne under optagelsen af en Hamlet-film.',
brief:'Kl. 15:40 fandt en statist instruktør Anton Klap død i en af slottets kældre. Anton havde opdaget, at nogen havde solgt råoptagelser fra filmen til en streamingtjeneste.',
options:[['Lea Scene, skuespiller','Jakob Rulle, fotograf','Sofie Klap, datter','Max Penge, producer'],['Rekvisitsværd','Kvælning med kabel','Slag med kamera-stativ'],['Kasematterne','Riddersalen','Teknikvognen']],answer:[1,2,2],
info:[['Skuespiller. Spiller Ofelia.','Fotograf. Har alle optagelser.','Datter.','Producer.'],
['Sløvt rekvisitsværd.','Kamerakabel.','Tungt stativ.'],
['Slottets kasematter. Her blev han fundet.','Den store riddersal.','Vogn med harddiske.']],
timeline:[['12:00','Optagelse.'],['14:00','Anton opdager læk.'],['14:15','Anton ses sidst.'],['15:40','Anton findes.']],
sketch:{title:'Kasematterne · fundsted',items:[['wall',40,40,320,0,0],['label',200,30,0,0,0,'Stenvæg'],['crate',300,200,40,30,0]],body:[200,140,40,.85],markers:[[1,240,120,'Harddisk-label']]},
evidence:[[
{type:'computer',kind:'Computer',title:'Antons laptop',owner:'Anton Klap',user:'Anton',password:'ofelia',hint:'Navnet på Leas rolle.',mail:[{from:'Anton',to:'Jakob Rulle; Max Penge',time:'14:05',subject:'Lækket',body:'Optagelserne er solgt. Kun Jakob og Max har haft harddiskene. Kom nu.'}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 16:10',text:'Slag mod hovedet med noget tungt af metal, eller mærker om halsen fra et kabel. Ingen snit fra et sværd. Han døde mellem 14:15 og 14:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Antons jakke',bg:'stone',stamp:'K-4104 / 02',items:[['paper',100,90,1.4,0],['stain',220,100,1.2,0,'#555']],caption:'En lille label fra en harddisk og olie. Det findes i teknikvognen og i riddersalen, hvor udstyret stod. Kasematterne er fugtige og har ingen labels.'}
],[
{type:'cctv',kind:'Overvågning',title:'Optagelsen i riddersalen',date:'11-05',camera:'FILM',doors:[[160,'SAL']],cast:[['Producer i blå jakke','#1f4e8a']],frames:[{t:'14:15:00',at:[[50,.3]],txt:'Max taler med statister.'},{t:'14:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'14:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Max Penge er i riddersalen med 40 statister fra 14:00 til 15:00. Anton kom ikke ind.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Ingen kvælning. Han døde af slaget med et kamerastativ.'},
{type:'doc',style:'note',kind:'Seddel',title:'I manuskriptet',text:'pc: ofelia'}
]],
epilogue:'Jakob Rulle havde solgt optagelserne. I teknikvognen konfronterede Anton ham. Jakob slog ham med et kamerastativ og bar ham ned i kasematterne.',
headline:'Fotograf anholdt for drab under filmoptagelse'});

KK.push({nr:103,theme:'Spejderlejr',no:'K-4105',title:'Bålet',when:'Lørdag 18. juli · ca. 23:00',where:'Spejderlejr ved Holmegaard Mose',
victim:'Bjarne Knob (56), lejrchef',victimLook:{sex:'m',hair:'short',hc:'grå',beard:'full',age:'old',shirt:'#3e5b46',collar:'shirt'},
intro:'Lejrchefen findes død i skoven efter lejrbålet. Lejrkassen er tom.',
brief:'Kl. 23:40 fandt to spejdere lejrchef Bjarne Knob død ved bålpladsen. Bjarne havde opdaget, at nogen havde taget 40.000 kr. fra lejrkassen.',
options:[['Søs Knude, leder','Henrik Snor, kasserer','Ole Bål, kok','Mia Knob, datter'],['Økse','Kvælning med tov','Slag med brændeknude'],['Bålpladsen','Ledernes telt','Køkkenteltet']],answer:[1,2,1],
info:[['Leder.','Kasserer. Har kassen.','Kok.','Datter. Spejder.'],
['Økse.','Tov.','Tungt stykke brænde.'],
['Bålpladsen. Her blev han fundet.','Ledernes telt.','Køkkenteltet.']],
timeline:[['21:00','Lejrbål.'],['22:00','Bjarne beder to om en snak.'],['22:15','Bjarne ses sidst.'],['23:40','Bjarne findes.']],
sketch:{title:'Bålpladsen · fundsted',items:[['roundtable',200,120,60,60,0,'Bål'],['tree',60,60,30,30,0],['tree',340,200,30,30,0]],body:[200,200,80,.85],markers:[[1,240,180,'Teltdug']]},
evidence:[[
{type:'doc',style:'letter',kind:'Brev',title:'Bjarnes brev',text:'Søs og Henrik – kun I to har nøgle til lejrkassen. 40.000 kr. mangler. Mød mig efter bålet.\nBjarne'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 00:10',text:'Slag mod hovedet med noget tungt af træ, eller mærker om halsen fra et tov. Ingen hug fra en økse. Han døde mellem 22:15 og 22:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Bjarnes uniform',bg:'grass',stamp:'K-4105 / 02',items:[['stain',100,90,1.4,0,'#6a8a3a'],['stain',220,100,1.2,0,'#c9b48a']],caption:'Grøn teltdug og myggespray. Det findes i ledernes telt og i køkkenteltet. Bålpladsen har aske, og der er ingen aske på ham.'}
],[
{type:'cctv',kind:'Overvågning',title:'Natløbet (pandelampe-kamera)',date:'18-07',camera:'NATLØB',doors:[],cast:[['Leder med tørklæde','#c94a3b']],frames:[{t:'22:15:00',at:[[50,.3]],txt:'Søs leder natløbet med 20 spejdere.'},{t:'22:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'22:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Søs Knude er på natløb fra 22:10 til 23:20.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne er fra hans spejdertørklæde. Han døde af slaget med brænde.'},
{type:'doc',kind:'Rapport',title:'Køkkenteltet',src:'Kokken',text:'Jeg vaskede op i køkkenteltet hele aftenen med fem spejdere. Bjarne kom ikke.'}
]],
epilogue:'Henrik Snor havde taget pengene til sin egen gæld. I ledernes telt sagde Bjarne, at han ville gå til forbundet. Henrik slog ham med et stykke brænde og bar ham ud til bålpladsen.',
headline:'Kasserer anholdt for drab på spejderlejr'});

KK.push({nr:104,theme:'Camping',no:'K-4106',title:'Telt nr. 12',when:'Onsdag 22. juli · ca. 23:00',where:'Klitcamping, Løkken',
victim:'Leif Klit (63), campingvært',victimLook:{sex:'m',hair:'bald',hc:'grå',beard:'moustache',age:'old',shirt:'#d8b53e',collar:'round'},
intro:'Campingværten findes død i en campingvogn. Kassen fra sommerens leje er væk.',
brief:'Kl. 23:40 fandt en gæst campingvært Leif Klit død i campingvogn nr. 12. Leif havde opdaget, at nogen udlejede pladser bag hans ryg og stak pengene i lommen.',
options:[['Trine Klit, datter','Ronni Vogn, medhjælper','Hans Telt, fastliggers','Bodil Sand, kioskdame'],['Gaskogeapparat (gas)','Slag med teltpløk-hammer','Kvælning med barduner'],['Campingvognen','Kiosken','Servicebygningen']],answer:[1,1,2],
info:[['Leifs datter.','Medhjælper. Booker pladser.','Fast gæst.','Kioskdame. Tager imod kontanter.'],
['Gasblus.','Gummihammer til teltpløkke.','Teltbarduner.'],
['Campingvogn nr. 12. Her blev han fundet.','Kiosken.','Bygning med toiletter og bad.']],
timeline:[['20:00','Leif tæller kassen.'],['21:30','Leif beder to om en snak.'],['22:00','Leif ses sidst.'],['23:40','Leif findes.']],
sketch:{title:'Campingvognen · fundsted',items:[['bed',100,120,80,140,0,'Køjer'],['table',260,90,80,40,0],['stove',330,190,30,30,0]],body:[220,180,40,.8],markers:[[1,250,160,'Sæberester']]},
evidence:[[
{type:'doc',style:'table',kind:'Bookingsystem',title:'Pladser udlejet uden registrering',rows:[['Plads','Booket af'],['44','R. Vogn'],['51','B. Sand'],['60','R. Vogn']],after:'Leif skrev: "Ronni og Bodil, kom til mig kl. 21:30."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 00:10',text:'Slag mod hovedet med noget hårdt og rundt, eller mærker om halsen fra en snor. Ingen gas i blodet. Han døde mellem 22:00 og 22:30.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Leifs skjorte',bg:'sand',stamp:'K-4106 / 02',items:[['stain',100,90,1.4,0,'#cfe0f0'],['paper',220,100,1.2,0]],caption:'Sæbe og toiletpapir-fnug. Det findes i servicebygningen og i kiosken, som også sælger toiletpapir. Campingvognen har ikke sæbe som denne.'}
],[
{type:'cctv',kind:'Overvågning',title:'Kiosken',date:'22-07',camera:'KIOSK',doors:[[160,'LUGE']],cast:[['Kioskdame i stribet bluse','#3a6ad8']],frames:[{t:'22:00:00',at:[[50,.3]],txt:'Bodil sælger is.'},{t:'22:15:00',at:[[50,.3]],txt:'Stadig.'},{t:'22:30:00',at:[[50,.3]],txt:'Lukker lugen.'}],text:'Bodil Sand står i kiosken fra 21:40 til 22:40. Leif kom ikke ind.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne er fra hans nøglesnor. Han døde af slaget med en gummihammer.'}
]],
epilogue:'Ronni Vogn havde udlejet pladser sort hele sommeren. I servicebygningen konfronterede Leif ham. Ronni slog ham med en teltpløk-hammer og bar ham ind i campingvogn nr. 12.',
headline:'Medhjælper anholdt for drab på campingplads'});

KK.push({nr:105,theme:'Dukketeater',no:'K-4107',title:'Trådene',when:'Søndag 6. december · ca. 16:00',where:'Marionetteatret, Kongens Have',
victim:'Gerda Tråd (71), dukkefører',victimLook:{sex:'f',hair:'bun',hc:'hvid',glasses:true,age:'old',shirt:'#5b3f66',collar:'turtle'},
intro:'Den gamle dukkefører findes død bag scenen. Hendes kostbare marionetter er væk.',
brief:'Kl. 16:40 fandt en lærling dukkefører Gerda Tråd død bag dukketeatrets scene. Hendes 100 år gamle marionetter, værd en halv million, var forsvundet.',
options:[['Pelle Pind, lærling','Agnes Tråd, niece','Johnny Dukke, samler','Lis Scene, medhjælper'],['Kvælning med marionettråd','Slag med dukkehoved','Gift i te'],['Bag scenen','Dukkeværkstedet','Billetboden']],answer:[2,0,1],
info:[['Lærling.','Niece. Arving.','Samler. Har budt på dukkerne.','Medhjælper.'],
['Fin, stærk tråd.','Træhoved fra en dukke.','Te.'],
['Bag scenen. Her blev hun fundet.','Værksted med dukker.','Lille billetbod.']],
timeline:[['14:00','Forestilling.'],['15:00','Gerda viser dukkerne til to.'],['15:30','Gerda ses sidst.'],['16:40','Gerda findes.']],
sketch:{title:'Bag scenen · fundsted',items:[['shelf',200,40,300,20,0,'Dukkebro'],['crate',100,200,40,30,0]],body:[200,140,40,.85],markers:[[1,240,120,'Træspåner']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Gerdas telefon',owner:'Gerda Tråd',lockTime:'16:45',wall:'linear-gradient(160deg,#5b3f66,#f2e0a0)',calls:[['Agnes','15:00','out','2 min'],['Johnny Dukke','15:02','out','1 min']],notes:[['Dukkerne','Kun Agnes og Johnny ved, hvor de ligger. Taler med dem.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 17:10',text:'Meget fine, dybe striber om halsen, eller en bule fra noget hårdt af træ. Ingen tegn på gift. Hun døde mellem 15:30 og 16:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Gerdas forklæde',bg:'wood',stamp:'K-4107 / 02',items:[['stain',100,90,1.4,0,'#d9c294'],['stain',220,100,1.2,0,'#a3231b']],caption:'Træspåner og maling. Det findes i værkstedet og i billetboden, hvor dukker males om vinteren. Bag scenen er ryddet.'}
],[
{type:'doc',style:'receipt',kind:'Kvittering',title:'Agnes’ biografbillet',shop:'Palads',rows:[['15:15','Film','Sal 4'],['17:20','Slut','']],text:'Agnes sad i biografen. Hun er filmet ved indgangen.'},
{type:'doc',kind:'Supplerende obduktion',title:'Bulen',src:'Retsmedicinsk Institut',text:'Bulen er fra faldet. Hun døde af kvælning med marionettråd.'},
{type:'doc',kind:'Rapport',title:'Billetboden',src:'Billetsælger',text:'Jeg sad i billetboden fra 15:00 til 17:00. Gerda kom ikke.'}
]],
epilogue:'Johnny Dukke ville have marionetterne for enhver pris. I værkstedet nægtede Gerda at sælge. Han kvalte hende med marionettråd, bar hende om bag scenen og tog dukkerne.',
headline:'Samler anholdt for drab i dukketeater'});

KK.push({nr:106,theme:'Rapstudie',no:'K-4108',title:'Beef',when:'Lørdag 10. oktober · ca. 03:00',where:'Studie Bas, Nørrebro',
victim:'Mustafa "MC Storm" Ali (29), rapper',victimLook:{sex:'m',hair:'short',hc:'sort',beard:'stubble',skin:4,age:'young',shirt:'#111111',collar:'round'},
intro:'En stjernerapper findes død i lydstudiet. Hans nye album er væk.',
brief:'Kl. 03:40 fandt en producer rapperen MC Storm død i studiet. Hans nye album var slettet fra serveren. Storm havde opdaget, at nogen havde stjålet hans beats og solgt dem.',
options:[['DJ Lyn, producer','Sara Rim, manager','Kasim Ali, bror','Jonas Beat, lydtekniker'],['Kvælning med mikrofonkabel','Slag med højttaler','Overdosis'],['Lydstudiet','Kontrolrummet','Sofaområdet']],answer:[3,0,1],
info:[['Producer.','Manager.','Bror.','Lydtekniker. Har adgang til serveren.'],
['Mikrofonkabel.','Tung højttaler.','Piller.'],
['Lydstudiet. Her blev han fundet.','Rum med mixerpult.','Sofaområde.']],
timeline:[['22:00','Indspilning.'],['02:00','Storm opdager tyveri.'],['02:15','Storm ses sidst.'],['03:40','Storm findes.']],
sketch:{title:'Lydstudiet · fundsted',items:[['roundtable',200,80,40,40,0,'Mikrofon'],['sofa',300,190,100,36,0]],body:[200,170,40,.85],markers:[[1,240,150,'Kaffe på hætten']]},
evidence:[[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Sidste optagelse',meta:'02:02',lines:[['MC Storm','Jeg ved det, I to. DJ Lyn og Jonas, mine beats er solgt. Ingen anden har adgang.'],['DJ Lyn','Ro på, bror.'],['MC Storm','Vi tager den nu.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 04:10',text:'Mærker om halsen fra et kabel, eller tegn på overdosis: små pupiller. Ingen slag. Han døde mellem 02:15 og 02:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Storms hættetrøje',bg:'carpet',stamp:'K-4108 / 02',items:[['cup',100,90,1.4,0],['stain',220,100,1.2,0,'#333']],caption:'Kaffe og kabelstøv. Det er der i kontrolrummet og sofaområdet. Lydstudiet har skum og ingen kaffe.'}
],[
{type:'cctv',kind:'Overvågning',title:'Gaden',date:'10-10',camera:'GADE',doors:[[160,'DØR']],cast:[['Mand med kasket','#c94a3b']],frames:[{t:'02:12:00',at:[[50,0]],txt:'DJ Lyn går ud.'},{t:'02:15:00',at:[[80,.3]],txt:'Han tager en taxa.'},{t:'03:00:00',at:[null],txt:'Ikke tilbage.'}],text:'DJ Lyn forlader studiet kl. 02:12.'},
{type:'doc',style:'table',kind:'Laboratoriesvar',title:'Toksikologi',rows:[['Prøve','Fund'],['Blod','Ingen stoffer']],after:'Pupillerne skyldes kvælningen. Han døde af kvælning med et kabel.'},
{type:'doc',kind:'Rapport',title:'Sofaområdet',src:'Kriminalteknisk Center',text:'Sofaområdet var fyldt med venner, der sov. De så ikke Storm.'}
]],
epilogue:'Jonas Beat havde solgt Storms beats og slettet albummet for at skjule det. I kontrolrummet kvalte han Storm med et mikrofonkabel og bar ham ind i studiet.',
headline:'Lydtekniker anholdt for drab på rapper'});

KK.push({nr:107,theme:'Pantelåner',no:'K-4109',title:'Pant',when:'Tirsdag 17. februar · ca. 17:30',where:'Pantelåneren på Vesterbrogade',
victim:'Ernst Pant (68), pantelåner',victimLook:{sex:'m',hair:'bald',hc:'grå',glasses:true,age:'old',shirt:'#5a3a22',collar:'shirt'},
intro:'Den gamle pantelåner findes død bag sin disk. En pantsat diamant er væk.',
brief:'Kl. 18:10 fandt en kunde pantelåner Ernst Pant død bag disken. En diamantring til 800.000 kr. var forsvundet. Ernst havde opdaget, at ringen var stjålet, før den blev pantsat.',
options:[['Rikke Ring, kunde','Torben Guld, ansat','Hilda Pant, søster','Jesper Lås, låsesmed'],['Lup (stik)','Slag med pengeskabsdør','Kvælning med guldkæde'],['Bag disken','Pengeskabsrummet','Baggården']],answer:[1,2,1],
info:[['Kunde. Pantsatte ringen.','Ansat i 5 år.','Søster.','Låsesmed. Har lavet pengeskabet.'],
['Spids lup.','Tung pengeskabsdør.','Tyk guldkæde.'],
['Bag disken. Her blev han fundet.','Rum med pengeskab.','Gården bagved.']],
timeline:[['15:00','Rikke pantsætter ringen.'],['16:30','Ernst opdager tyveriet.'],['17:00','Ernst ses sidst.'],['18:10','Ernst findes.']],
sketch:{title:'Bag disken · fundsted',items:[['counter',200,60,300,30,0,'Disk'],['shelf',40,180,20,80,0]],body:[200,170,70,.85],markers:[[1,240,150,'Metalstøv']]},
evidence:[[
{type:'doc',style:'note',kind:'Seddel',title:'Ernsts notat',text:'Ringen er stjålet! Rikke pantsatte den, Torben tog imod den. Taler med dem begge.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 18:40',text:'Mærker om halsen fra en tyk kæde, eller et lille stik fra noget spidst. Ingen slag. Han døde mellem 17:00 og 17:30.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Ernsts vest',bg:'carpet',stamp:'K-4109 / 02',items:[['stain',100,90,1.4,0,'#c9a43a'],['stain',220,100,1.2,0,'#555']],caption:'Guldstøv og metalstøv. Det findes i pengeskabsrummet og i baggården, hvor smelteovnen står. Bag disken er der fejet.'}
],[
{type:'cctv',kind:'Overvågning',title:'Fitnesscentret',date:'17-02',camera:'FITNESS',doors:[[160,'SAL']],cast:[['Kvinde i lilla','#7a5ab0']],frames:[{t:'17:00:00',at:[[50,.3]],txt:'Rikke på løbebånd.'},{t:'17:15:00',at:[[50,.3]],txt:'Stadig.'},{t:'17:30:00',at:[[50,.3]],txt:'Stadig.'}],text:'Rikke Ring er i fitnesscentret fra 16:50 til 17:45.'},
{type:'doc',kind:'Supplerende obduktion',title:'Stikket',src:'Retsmedicinsk Institut',text:'Stikket er fra en ring. Han døde af kvælning med en guldkæde.'},
{type:'doc',kind:'Rapport',title:'Baggården',src:'Nabo',text:'Jeg stod og røg i baggården fra 16:45 til 17:45. Ingen kom ud.'}
]],
epilogue:'Torben Guld vidste, at ringen var stjålet, og havde planlagt at stjæle den igen. I pengeskabsrummet opdagede Ernst ham. Torben kvalte ham med en guldkæde og bar ham om bag disken.',
headline:'Ansat anholdt for drab hos pantelåner'});

KK.push({nr:108,theme:'Bingo',no:'K-4110',title:'Banko',when:'Torsdag 29. oktober · ca. 21:00',where:'Bankohallen, Vejle',
victim:'Inge Kugle (66), bankoleder',victimLook:{sex:'f',hair:'curly',hc:'blond',age:'old',glasses:true,shirt:'#c94a8a',collar:'v'},
intro:'Bankolederen findes død i kontoret. Præmiekassen på 200.000 kr. er væk.',
brief:'Kl. 21:40 fandt en spiller bankoleder Inge Kugle død på kontoret. Præmiekassen var væk. Inge havde opdaget, at nogen snød med tallene, så de samme vandt hver uge.',
options:[['Ole Tal, opråber','Grethe Plade, kasserer','Bent Vinder, spiller','Ulla Kugle, datter'],['Slag med bankohjul','Kvælning med halstørklæde','Gift i kaffe'],['Kontoret','Opråberscenen','Køkkenet']],answer:[0,0,1],
info:[['Opråber. Trækker tallene.','Kasserer.','Spiller. Vinder hver uge.','Datter.'],
['Tungt bankohjul i messing.','Halstørklæde.','Kaffe.'],
['Kontoret. Her blev hun fundet.','Lille scene med tallene.','Køkkenet med kaffe.']],
timeline:[['19:00','Banko.'],['20:15','Inge opdager snyd.'],['20:30','Inge ses sidst.'],['21:40','Inge findes.']],
sketch:{title:'Kontoret · fundsted',items:[['desk',200,60,140,40,0],['shelf',40,130,20,160,0]],body:[200,170,40,.85],markers:[[1,240,150,'Messingstøv']]},
evidence:[[
{type:'doc',style:'table',kind:'Vinderliste',title:'Sidste 8 uger',rows:[['Uge','Vinder','Opråber'],['36–43','B. Vinder','O. Tal']],after:'Inge skrev: "Ole og Bent. Altid de samme. Mød mig nu."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 22:10',text:'Slag mod hovedet med noget rundt af metal, eller mærker om halsen fra stof. Ingen tegn på gift. Hun døde mellem 20:30 og 21:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Inges cardigan',bg:'carpet',stamp:'K-4110 / 02',items:[['stain',100,90,1.4,0,'#c9a43a'],['coin',220,100,1.2,0]],caption:'Messingstøv og en bankokugle. Det er der på opråberscenen og i køkkenet, hvor hjulet bliver pudset. Kontoret er ryddeligt.'}
],[
{type:'cctv',kind:'Overvågning',title:'Salen',date:'29-10',camera:'SAL',doors:[[160,'SCENE']],cast:[['Spiller med heldig hat','#3e7b46']],frames:[{t:'20:30:00',at:[[40,.6]],txt:'Bent spiller ved bord 4.'},{t:'20:45:00',at:[[40,.6]],txt:'Stadig.'},{t:'21:00:00',at:[[40,.6]],txt:'Stadig.'}],text:'Bent Vinder sidder ved bord 4 fra 19:00 til 21:30.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne er fra hendes halskæde. Hun døde af slaget med et bankohjul.'},
{type:'doc',kind:'Rapport',title:'Køkkenet',src:'Køkkenhjælp',text:'Jeg lavede kaffe i køkkenet hele aftenen. Inge kom ikke.'}
]],
epilogue:'Ole Tal havde snydt med tallene og delt gevinsten med Bent. På opråberscenen i pausen sagde Inge, at hun vidste det. Ole slog hende med det tunge bankohjul og bar hende ind på kontoret.',
headline:'Opråber anholdt for drab i bankohal'});
