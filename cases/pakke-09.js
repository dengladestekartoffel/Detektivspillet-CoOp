'use strict';
// Sagsbunke 9.

KK.push({nr:89,theme:'Arkæologi',no:'K-4001',title:'Udgravningen',when:'Onsdag 8. juli · ca. 16:00',where:'Arkæologisk udgravning ved Jelling',
victim:'Prof. Inger Mose (64), arkæolog',victimLook:{sex:'f',hair:'short',hc:'grå',glasses:true,age:'old',shirt:'#8a6a3a',collar:'shirt'},
intro:'En arkæolog findes død i sin egen udgravning. Et guldsmykke fra vikingetiden er væk.',
brief:'Kl. 16:40 fandt en studerende professor Inger Mose død i udgravningshullet. Samme morgen havde holdet fundet et guldarmbånd fra 900-tallet. Det var forsvundet, og Inger havde sagt: "Jeg ved, hvem der tog det."',
options:[['Frederik Bo, studerende','Laila Kran, assistent','Per Detektor, amatørarkæolog','Sara Mose, datter'],['Spade','Kvælning med målebånd','Sten fra udgravningen'],['Udgravningshullet','Fundteltet','Skurvognen']],answer:[2,2,1],
info:[['Ph.d.-studerende.','Assistent. Fører fundlisten.','Amatør med metaldetektor. Fandt armbåndet.','Ingers datter. På besøg.'],
['Spade.','Langt målebånd.','Stor rund sten fra udgravningen.'],
['Hullet. Her blev hun fundet.','Telt med fund og poser.','Skurvogn med kaffe.']],
timeline:[['09:00','Armbåndet findes.'],['14:00','Armbåndet er væk.'],['15:00','Inger konfronterer to.'],['16:40','Inger findes.']],
sketch:{title:'Udgravningen · fundsted',items:[['rug',200,130,260,160,0,'Udgravning'],['label',200,30,0,0,0,'Snore og pæle']],body:[200,140,40,.85],markers:[[1,240,120,'Fundpose']]},
evidence:[[
{type:'doc',style:'table',kind:'Fundlisten',title:'Hvem rørte armbåndet',rows:[['Tid','Hvem'],['09:05','P. Detektor (fandt det)'],['11:30','L. Kran (registrerede det)'],['13:55','Fundteltet åbnet med nøgle']],after:'Kun Per og Laila har rørt armbåndet. Inger skrev: "Begge til mig kl. 15."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 17:10',text:'Slag mod hovedet med noget rundt og tungt af sten, eller fra en spade. Ingen kvælningsmærker. Hun døde mellem 15:00 og 15:40.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Ingers hænder',bg:'sand',stamp:'K-4001 / 03',items:[['paper',100,90,1.4,0],['stain',220,100,1.2,0,'#6b4a2b']],caption:'Plastik fra fundposer og kaffe. Fundposer er i fundteltet, men også i skurvognen. Hullet har kun jord, og der er ingen jord under neglene.'}
],[
{type:'cctv',kind:'Overvågning',title:'Skurvognen',date:'08-07',camera:'SKURVOGN',doors:[[160,'DØR']],cast:[['Assistent med stråhat','#d8c27a']],frames:[{t:'15:00:00',at:[[50,.3]],txt:'Laila skriver rapport.'},{t:'15:20:00',at:[[50,.3]],txt:'Stadig.'},{t:'15:40:00',at:[[50,.3]],txt:'Stadig.'}],text:'Laila Kran er i skurvognen fra 14:50 til 16:00. Inger kom ikke ind.'},
{type:'doc',kind:'Supplerende obduktion',title:'Såret',src:'Retsmedicinsk Institut',text:'Der er stenstøv og ingen jern i såret. Det var en sten, ikke en spade.'}
]],
epilogue:'Per Detektor ville sælge armbåndet til en samler i stedet for at aflevere det. I fundteltet sagde Inger, at hun ville anmelde ham. Han slog hende med en sten fra udgravningen og lagde hende i hullet.',
headline:'Amatørarkæolog anholdt for drab ved Jelling'});

KK.push({nr:90,theme:'Dinosaur',no:'K-4002',title:'Uddød',when:'Tirsdag 14. oktober · ca. 19:00',where:'Fossilmuseet, Møns Klint',
victim:'Dr. Anders Ravn (52), palæontolog',victimLook:{sex:'m',hair:'curly',hc:'brun',beard:'full',shirt:'#5a3a22',collar:'shirt'},
intro:'En palæontolog findes død under et dinosaurskelet. Et sjældent fossil er byttet ud med en kopi.',
brief:'Kl. 19:40 fandt en vagt palæontolog Anders Ravn død under museets mosasaur-skelet. Anders havde opdaget, at et 70 mio. år gammelt fossil var byttet ud med en gipskopi.',
options:[['Mette Sten, konservator','Kim Gips, tekniker','Lone Ravn, hustru','Jakob Fos, samler'],['Fossil knogle','Kvælning','Gift i te'],['Udstillingshallen','Præparatorværkstedet','Magasinet']],answer:[0,0,2],
info:[['Konservator. Laver kopier.','Tekniker.','Anders’ kone.','Samler. Har købt fossiler før.'],
['Tung fossil knogle.','Med hænderne.','Te.'],
['Hallen med skeletter. Her blev han fundet.','Værksted med gips og pensler.','Magasin med fossiler.']],
timeline:[['17:00','Museet lukker.'],['18:00','Anders opdager kopien.'],['18:15','Anders ses sidst.'],['19:40','Anders findes.']],
sketch:{title:'Udstillingshallen · fundsted',items:[['table',200,80,260,50,0,'Mosasaur-skelet'],['shelf',40,180,20,80,0]],body:[200,180,80,.85],markers:[[1,240,160,'Fossilstøv']]},
evidence:[[
{type:'computer',kind:'Computer',title:'Anders’ pc',owner:'Anders Ravn',user:'Anders',password:'mosasaur',hint:'Museets største skelet.',mail:[{from:'Anders',to:'Mette Sten; Kim Gips',time:'18:05',subject:'Kopien',body:'Fossilet er byttet med gips. Kun I to arbejder med gips. Kom nu.'}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 20:10',text:'Slag mod hovedet med noget tungt og knudret, eller kvælningsmærker. Ingen tegn på gift. Han døde mellem 18:15 og 18:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Anders’ skjorte',bg:'stone',stamp:'K-4002 / 02',items:[['stain',100,90,1.4,0,'#ddd'],['stain',220,100,1.2,0,'#8a7a5a']],caption:'Fossilstøv og fugt fra magasinet. Fossilstøv er i magasinet og i hallen. Værkstedet har kun gips.'}
],[
{type:'doc',style:'table',kind:'Videoopkald',title:'Kims møde',rows:[['Tid','Hvem'],['18:00–19:00','Kim Gips · videomøde med leverandør fra værkstedet']],after:'Kim er på kamera hele tiden.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Ingen kvælning. Han døde af slaget med en fossil knogle.'},
{type:'doc',kind:'Rapport',title:'Udstillingshallen',src:'Vagten',text:'Hallen har kameraer. Anders kommer først ind i billedet kl. 19:30, båret af en person i mørkt tøj.'},
{type:'doc',style:'note',kind:'Seddel',title:'På Anders’ skærm',text:'Kode: mosasaur'}
]],
epilogue:'Mette Sten havde solgt det ægte fossil og lavet en kopi. I magasinet konfronterede Anders hende. Hun slog ham med en fossil knogle og bar ham ud under skelettet.',
headline:'Konservator anholdt for drab på museum'});

KK.push({nr:91,theme:'Middelalderborg',no:'K-4003',title:'Borgfruen',when:'Lørdag 15. august · ca. 22:00',where:'Spøttrup Borg, Salling',
victim:'Eleonora Juel (49), borgforvalter',victimLook:{sex:'f',hair:'long',hc:'rød',shirt:'#5b3f66',collar:'v'},
intro:'Borgforvalteren findes død i voldgraven efter middelalderfesten.',
brief:'Kl. 22:40 fandt en ridder fra festen borgforvalter Eleonora Juel i voldgraven. Eleonora havde opdaget, at nogen havde solgt borgens gamle våben til udlandet.',
options:[['Ridder Hans, skuespiller','Kirsten Bo, guide','Mads Juel, bror','Lars Holm, antikvitetshandler'],['Drukning i voldgraven','Slag med morgenstjerne','Kvælning med reb'],['Voldgraven','Våbenkammeret','Tårnet']],answer:[3,1,1],
info:[['Skuespiller der spiller ridder.','Guide. Har nøgle til våbenkammeret.','Eleonoras bror.','Antikvitetshandler. Har nøgle til våbenkammeret.'],
['Voldgraven er dyb.','Middelaldervåben med pigge.','Reb.'],
['Voldgraven. Her blev hun fundet.','Kammer med gamle våben.','Højt tårn.']],
timeline:[['18:00','Fest.'],['21:00','Eleonora beder to om en snak.'],['21:15','Eleonora ses sidst.'],['22:40','Eleonora findes.']],
sketch:{title:'Voldgraven · fundsted',items:[['rug',200,130,320,80,0,'Vand'],['wall',40,40,320,0,0]],body:[200,130,80,.8],markers:[[1,240,110,'Rust']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Eleonoras telefon (vandskadet)',owner:'Eleonora Juel',lockTime:'22:45',wall:'linear-gradient(160deg,#5b3f66,#c9a43a)',msgs:[{with:'Kirsten + Lars',m:[['me','21:00','Våbnene er solgt. Kun I to har haft nøgle til kammeret. Mød mig.']]}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 23:10',text:'Ingen vand i lungerne: hun druknede ikke. Pigformede sår i hovedet, eller mærker om halsen fra et reb. Hun døde mellem 21:15 og 21:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Eleonoras kjole',bg:'stone',stamp:'K-4003 / 02',items:[['stain',100,90,1.4,0,'#8a4a2a'],['stain',220,100,1.2,0,'#555']],caption:'Rust og stenstøv. Det er der i våbenkammeret og i tårnet. Voldgraven har mudder, og der er ikke mudder på kjolens inderside.'}
],[
{type:'cctv',kind:'Overvågning',title:'Borggården',date:'15-08',camera:'GÅRD',doors:[[160,'PORT']],cast:[['Guide med lanterne','#d8b53e']],frames:[{t:'21:15:00',at:[[50,.3]],txt:'Kirsten fører en spøgelsestur.'},{t:'21:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'21:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Kirsten Bo har en spøgelsestur i borggården fra 21:05 til 22:00.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne om halsen er fra hendes kjoles snøre. Hun døde af slaget med en morgenstjerne.'},
{type:'doc',kind:'Rapport',title:'Tårnet',src:'Borgens vagt',text:'Tårnet var låst efter kl. 18 på grund af løse sten.'}
]],
epilogue:'Lars Holm havde købt borgens våben billigt og solgt dem dyrt. I våbenkammeret konfronterede Eleonora ham. Han slog hende med en morgenstjerne og smed hende i voldgraven.',
headline:'Antikvitetshandler anholdt for drab på borg'});

KK.push({nr:92,theme:'Modeuge',no:'K-4004',title:'Catwalk',when:'Fredag 7. februar · ca. 20:00',where:'Copenhagen Fashion Week, Øksnehallen',
victim:'Viola Strand (41), modedesigner',victimLook:{sex:'f',hair:'bob',hc:'sort',earrings:true,shirt:'#111111',collar:'turtle'},
intro:'En modedesigner findes død bag scenen efter sit show. Hendes kollektion er kopieret.',
brief:'Kl. 20:40 fandt en model designer Viola Strand død i backstage-området. Hendes nye kollektion var blevet kopieret af et billigmærke, før den blev vist.',
options:[['Lukas Sø, assistent','Nadja Wolf, model','Henrik Prik, fotograf','Rosa Strand, søster'],['Saks','Kvælning med målebånd','Slag med strygejern'],['Backstage','Syrummet','Fotostudiet']],answer:[0,1,1],
info:[['Designassistent.','Model.','Fotograf. Tog billeder af kollektionen.','Søster.'],
['Skarp skræddersaks.','Målebånd.','Tungt dampstrygejern.'],
['Bag scenen. Her blev hun fundet.','Rum med symaskiner.','Studie hvor kollektionen blev fotograferet.']],
timeline:[['19:00','Show.'],['19:40','Viola beder to om en snak.'],['19:50','Viola ses sidst.'],['20:40','Viola findes.']],
sketch:{title:'Backstage · fundsted',items:[['shelf',60,130,24,200,0,'Tøjstativer'],['desk',300,60,100,30,0,'Sminke']],body:[200,150,40,.85],markers:[[1,240,130,'Trådende']]},
evidence:[[
{type:'audio',style:'voicemail',kind:'Telefonsvarer',label:'Violas besked til advokaten',meta:'19:42',lines:[['Viola Strand','Kollektionen er kopieret. Kun Lukas og Henrik så den før showet. Jeg taler med dem nu.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 21:10',text:'Mærker om halsen fra et fladt bånd, og et lille snit på armen. Ingen slag. Hun døde mellem 19:50 og 20:20.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Violas trøje',bg:'wood',stamp:'K-4004 / 02',items:[['rope',100,90,1.4,0,'#f2f2f2'],['stain',220,100,1.2,0,'#ddd']],caption:'Trådender og fnug. Det findes i syrummet og fotostudiet, hvor kollektionen lå. Backstage er ryddet og støvsuget.'}
],[
{type:'cctv',kind:'Overvågning',title:'Pressezonen',date:'07-02',camera:'PRESSE',doors:[[160,'CATWALK']],cast:[['Fotograf med to kameraer','#2f3b55']],frames:[{t:'19:50:00',at:[[50,.3]],txt:'Henrik fotograferer gæster.'},{t:'20:05:00',at:[[50,.3]],txt:'Stadig.'},{t:'20:20:00',at:[[50,.3]],txt:'Stadig.'}],text:'Henrik Prik er i pressezonen fra 19:45 til 20:30.'},
{type:'doc',kind:'Supplerende obduktion',title:'Snittet',src:'Retsmedicinsk Institut',text:'Snittet er fra en nål. Hun døde af kvælning med et målebånd.'},
{type:'doc',kind:'Rapport',title:'Fotostudiet',src:'Studieassistent',text:'Fotostudiet var låst efter fotograferingen kl. 15.'}
]],
epilogue:'Lukas Sø havde solgt Violas tegninger til billigmærket. I syrummet sagde hun, at han var fyret. Han kvalte hende med et målebånd og bar hende om bag scenen.',
headline:'Designassistent anholdt for drab under modeugen'});

KK.push({nr:93,theme:'Reklamebureau',no:'K-4005',title:'Pitchen',when:'Torsdag 23. april · ca. 21:00',where:'Reklamebureauet Gnist, København',
victim:'Morten Gnist (47), kreativ direktør',victimLook:{sex:'m',hair:'short',hc:'brun',beard:'stubble',glasses:true,shirt:'#3a6ad8',collar:'round'},
intro:'Den kreative direktør findes død aftenen før den største pitch i bureauets historie.',
brief:'Kl. 21:40 fandt en rengøringsassistent kreativ direktør Morten Gnist død i mødelokalet. Næste dag skulle bureauet pitche til et stort bilmærke. Morten havde opdaget, at idéen var lækket til et konkurrerende bureau.',
options:[['Sofie Ny, tekstforfatter','Jesper Bak, art director','Tina Gnist, hustru','Bo Lyn, konkurrent'],['Glaspris','Kvælning med laptop-kabel','Gift i kaffe'],['Mødelokalet','Printerrummet','Tagterrassen']],answer:[1,0,1],
info:[['Tekstforfatter.','Art director.','Mortens kone.','Konkurrent fra et andet bureau.'],
['Tung reklamepris i glas.','Laptop-kabel.','Kaffe.'],
['Mødelokale. Her blev han fundet.','Rum med printere.','Tagterrasse.']],
timeline:[['18:00','Sidste øvning.'],['20:00','Morten opdager læk.'],['20:15','Morten ses sidst.'],['21:40','Morten findes.']],
sketch:{title:'Mødelokalet · fundsted',items:[['table',200,130,200,80,0,'Bord'],['chair',140,80],['chair',260,80]],body:[200,210,80,.8],markers:[[1,240,190,'Printertoner']]},
evidence:[[
{type:'computer',kind:'Computer',title:'Mortens laptop',owner:'Morten Gnist',user:'Morten',password:'gnist',hint:'Bureauets navn, små bogstaver.',files:[{name:'Læk.txt',time:'20:05',body:'Idéen er sendt fra en mail i bureauet. Kun Sofie og Jesper havde filen. Jeg taler med begge nu.'}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 22:10',text:'Slag mod hovedet med noget tungt af glas, eller mærker om halsen fra et kabel. Ingen tegn på gift. Han døde mellem 20:15 og 20:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Mortens skjorte',bg:'carpet',stamp:'K-4005 / 03',items:[['stain',100,90,1.4,0,'#222'],['paper',220,100,1.2,0]],caption:'Printertoner og papirstøv. Det er der i printerrummet og på tagterrassen, hvor plancher blev tørret. Mødelokalet er ryddet.'}
],[
{type:'doc',style:'table',kind:'Videoopkald',title:'Sofies opkald',rows:[['Tid','Hvem'],['20:10–21:00','Sofie Ny · videoopkald med sin mor fra bilen']],after:'Sofie var på video i bilen på parkeringspladsen hele tiden.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Ingen kvælning. Han døde af slaget med en glaspris, og der er glassplinter i såret.'},
{type:'doc',kind:'Rapport',title:'Tagterrassen',src:'Kriminalteknisk Center',text:'Tagterrassen var låst på grund af storm. Plancherne blev hentet ind kl. 17.'},
{type:'doc',style:'note',kind:'Seddel',title:'Mortens post-it',text:'pc: gnist'}
]],
epilogue:'Jesper Bak havde solgt idéen til konkurrenten for at få et job der. I printerrummet sagde Morten, at han vidste det. Jesper slog ham med en reklamepris i glas og bar ham ind i mødelokalet.',
headline:'Art director anholdt for drab på reklamebureau'});

KK.push({nr:94,theme:'Forlystelsespark',no:'K-4006',title:'Rutsjebanen',when:'Lørdag 25. juli · ca. 23:00',where:'Sommerland Fjord, Djursland',
victim:'Kenneth Fun (52), parkdirektør',victimLook:{sex:'m',hair:'short',hc:'brun',beard:'moustache',shirt:'#d8b53e',collar:'shirt'},
intro:'Parkdirektøren findes død under rutsjebanen efter lukketid.',
brief:'Kl. 23:40 fandt en vagt parkdirektør Kenneth Fun død under rutsjebanen "Dragen". Kenneth havde opdaget, at nogen havde sprunget sikkerhedstjek over for at spare penge, og ville lukke banen.',
options:[['Mie Skov, teknisk chef','Søren Loop, mekaniker','Hanne Fun, hustru','Bo Kasse, økonomichef'],['Fald fra banen','Slag med skruenøgle','Elektrisk stød fra kontrolpanel'],['Under rutsjebanen','Kontrolrummet','Værkstedet']],answer:[1,1,2],
info:[['Teknisk chef. Underskriver tjek.','Mekaniker. Laver tjekkene.','Hustru.','Økonomichef.'],
['Rutsjebanen er 30 meter høj.','Stor skruenøgle.','Kontrolpanel med højspænding.'],
['Under Dragen. Her blev han fundet.','Rum med kontrolpanel.','Værksted med reservedele.']],
timeline:[['22:00','Parken lukker.'],['22:15','Kenneth beder to om en snak.'],['22:30','Kenneth ses sidst.'],['23:40','Kenneth findes.']],
sketch:{title:'Under rutsjebanen · fundsted',items:[['stairs',200,60,300,30,0,'Skinner'],['crate',80,200,40,30,0]],body:[200,170,40,.85],markers:[[1,240,150,'Fedt på jakken']]},
evidence:[[
{type:'doc',style:'table',kind:'Tjekliste',title:'Sikkerhedstjek der blev sprunget over',rows:[['Dato','Udført af','Godkendt af'],['10.07','S. Loop','M. Skov'],['17.07','S. Loop','M. Skov']],after:'Kenneth skrev: "Mie og Søren, kontrolrummet kl. 22:15."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 00:10',text:'Ingen brud på kroppen: han er ikke faldet fra banen. Slag mod hovedet med noget tungt af metal, og et lille brændemærke på hånden. Han døde mellem 22:30 og 23:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Kenneths jakke',bg:'asphalt',stamp:'K-4006 / 02',items:[['stain',100,90,1.4,0,'#3a3a3a'],['wrench',220,100,1.2,0]],caption:'Maskinfedt og metalspåner. Det findes i værkstedet og kontrolrummet. Under banen er der kun grus, og der er ingen grus på ham.'}
],[
{type:'cctv',kind:'Overvågning',title:'Parkens hovedindgang',date:'25-07',camera:'INDGANG',doors:[[160,'PORT']],cast:[['Kvinde i orange vest','#d46a1f']],frames:[{t:'22:30:00',at:[[50,.3]],txt:'Mie låser porten med vagten.'},{t:'22:45:00',at:[[80,.3]],txt:'Mie går til parkeringen.'},{t:'22:50:00',at:[null],txt:'Hun kører.'}],text:'Mie Skov kører fra parken kl. 22:50 og vender ikke tilbage. Hendes telefon er i Grenaa fra 23:05.'},
{type:'doc',kind:'Supplerende obduktion',title:'Brændemærket',src:'Retsmedicinsk Institut',text:'Brændemærket er gammelt. Han døde af slaget med en skruenøgle.'},
{type:'doc',kind:'Rapport',title:'Kontrolrummet',src:'Vagten',text:'Jeg sad i kontrolrummet fra 22:00 til 23:30 og så kameraer. Kenneth kom ikke.'}
]],
epilogue:'Søren Loop havde snydt med tjekkene for at få fri tidligere. I værkstedet sagde Kenneth, at han var fyret. Søren slog ham med en skruenøgle og slæbte ham ind under rutsjebanen.',
headline:'Mekaniker anholdt for drab i forlystelsespark'});

KK.push({nr:95,theme:'Havvindmølle',no:'K-4007',title:'Modvind',when:'Tirsdag 3. november · ca. 14:00',where:'Havvindmøllepark Horns Rev 4',
victim:'Peter Vind (46), projektleder',victimLook:{sex:'m',hair:'short',hc:'blond',beard:'stubble',shirt:'#d46a1f',collar:'round'},
intro:'En projektleder findes død i en vindmølles nacelle 100 meter over havet.',
brief:'Kl. 14:50 fandt en tekniker projektleder Peter Vind død i nacellen på mølle 17. Kun tre personer var sejlet ud til møllen. Peter havde opdaget, at nogen havde forfalsket inspektionsrapporter.',
options:[['Lars Hav, tekniker','Ditte Bølge, inspektør','Kasper Ror, skipper','Nina Vind, hustru'],['Fald i møllen','Slag med momentnøgle','Kvælning med sikkerhedsline'],['Nacellen','Foden af møllen','Båden']],answer:[1,2,1],
info:[['Tekniker. Var med i møllen.','Inspektør. Skriver rapporterne.','Skipper på båden.','Peters kone.'],
['Faldt ned ad stigen.','Tung momentnøgle.','Sikkerhedsline fra seletøjet.'],
['Toppen af møllen. Her blev han fundet.','Platformen ved foden.','Servicebåden.']],
timeline:[['11:00','Holdet sejler ud.'],['12:00','Peter konfronterer to.'],['12:30','Peter ses sidst.'],['14:50','Peter findes.']],
sketch:{title:'Nacellen · fundsted',items:[['crate',200,100,260,80,0,'Gearkasse'],['stairs',60,200,30,40,0]],body:[200,200,80,.85],markers:[[1,240,180,'Saltkrystaller']]},
evidence:[[
{type:'audio',style:'radio',kind:'Radiolog',label:'Møllens VHF',meta:'12:02',lines:[['Peter Vind','Rapporterne er falske. Lars og Ditte, I er de eneste, der har været her ved inspektionerne. Vi taler nu.'],['Kasper Ror','Modtaget. Jeg bliver i båden.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten (helikopter) · 15:30',text:'Ingen brud: han faldt ikke. Mærker om halsen fra en line, og en bule på hovedet fra noget metal. Han døde mellem 12:30 og 13:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Peters dragt',bg:'deck',stamp:'K-4007 / 02',items:[['stain',100,90,1.4,0,'#e8eef2'],['stain',220,100,1.2,0,'#3a3a3a']],caption:'Saltkrystaller og diesel. Salt er der ved foden af møllen og på båden, og diesel på begge. Nacellen er tør og har ingen diesel: han blev hejst op.'}
],[
{type:'doc',style:'table',kind:'Elevatorlog',title:'Møllens elevator',rows:[['Tid','Hvem'],['12:20','Lars Hav op'],['12:20–13:30','Lars i nacellen (arbejdslog hvert 5. min)']],after:'Lars arbejdede i nacellen og meldte ind hvert femte minut.'},
{type:'doc',kind:'Supplerende obduktion',title:'Bulen',src:'Retsmedicinsk Institut',text:'Bulen er fra hjelmen. Han døde af kvælning med en sikkerhedsline.'},
{type:'doc',kind:'Rapport',title:'Båden',src:'Skipperen',text:'Jeg var i båden hele tiden. Peter kom ikke om bord efter kl. 11:30.'}
]],
epilogue:'Ditte Bølge havde forfalsket inspektionerne for at spare tid. På platformen ved møllens fod kvalte hun Peter med en sikkerhedsline. Hun hejste liget op i nacellen med kranen, så det skulle ligne en arbejdsulykke.',
headline:'Inspektør anholdt for drab i vindmølle'});

KK.push({nr:96,theme:'Kraftværk',no:'K-4008',title:'Kortslutning',when:'Mandag 9. marts · ca. 03:00',where:'Fynsværket, Odense',
victim:'Allan Strøm (55), vagtchef',victimLook:{sex:'m',hair:'short',hc:'grå',beard:'full',age:'old',shirt:'#1f4e8a',collar:'shirt'},
intro:'Kraftværkets vagtchef findes død i transformatorhallen under nattevagten.',
brief:'Kl. 03:40 fandt en operatør vagtchef Allan Strøm død ved en transformator. Det lignede et elektrisk uheld. Allan havde opdaget, at nogen stjal kobber fra værket og solgte det.',
options:[['Rasmus Volt, operatør','Pia Ampere, elektriker','Jens Kul, lagermand','Bente Strøm, hustru'],['Strømstød','Slag med kobberrør','Kvælning med kabel'],['Transformatorhallen','Lageret','Kontrolrummet']],answer:[2,1,1],
info:[['Operatør.','Elektriker.','Lagermand. Styrer kobberlageret.','Allans kone.'],
['Højspænding fra transformatoren.','Tungt kobberrør.','Kabel.'],
['Transformatorhallen. Her blev han fundet.','Lager med kobber.','Kontrolrummet med skærme.']],
timeline:[['22:00','Nattevagt.'],['02:00','Allan opdager tyveri.'],['02:30','Allan ses sidst.'],['03:40','Allan findes.']],
sketch:{title:'Transformatorhallen · fundsted',items:[['crate',200,80,160,80,0,'Transformator'],['shelf',40,180,20,80,0]],body:[200,190,70,.85],markers:[[1,240,170,'Kobberspåner']]},
evidence:[[
{type:'doc',style:'table',kind:'Lagerlog',title:'Kobberlageret',rows:[['Tid','Hvem'],['01:40','J. Kul'],['01:55','P. Ampere']],after:'Allan skrev: "Jens og Pia, I er de eneste, der har været på lageret i nat."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 04:10',text:'Ingen strømmærker: han døde ikke af stød. Slag mod hovedet med noget rundt og tungt, eller mærker om halsen fra et kabel. Han døde mellem 02:30 og 03:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Allans jakke',bg:'stone',stamp:'K-4008 / 02',items:[['stain',100,90,1.4,0,'#c97a3a'],['stain',220,100,1.2,0,'#555']],caption:'Kobberspåner og olie. Det er der på lageret og i kontrolrummet, hvor kobberprøver lå. Transformatorhallen har ingen kobberspåner.'}
],[
{type:'doc',style:'table',kind:'Arbejdslog',title:'Pias reparation',rows:[['Tid','Opgave'],['02:20–03:20','Pia Ampere reparerer pumpe 4 i kedelhuset (låst med to nøgler, makker til stede)']],after:'Pia var sammen med en makker i kedelhuset hele tiden.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Ingen kvælning. Han døde af slaget med et kobberrør.'},
{type:'doc',kind:'Rapport',title:'Kontrolrummet',src:'Operatøren',text:'Jeg sad i kontrolrummet hele natten. Allan kom ikke herind efter kl. 02.'}
]],
epilogue:'Jens Kul havde solgt kobber fra lageret i et år. På lageret sagde Allan, at han ville anmelde ham. Jens slog ham med et kobberrør og bar ham hen til transformatoren, så det skulle ligne et stød.',
headline:'Lagermand anholdt for drab på kraftværk'});

KK.push({nr:97,theme:'Kunstmuseum',no:'K-4009',title:'Nattevagten',when:'Torsdag 26. november · ca. 01:00',where:'Kunstmuseet Lys, Aarhus',
victim:'Ruth Malm (60), museumsdirektør',victimLook:{sex:'f',hair:'bob',hc:'hvid',glasses:true,age:'old',shirt:'#2b2e33',collar:'turtle'},
intro:'Museumsdirektøren findes død i udstillingssalen om natten. Et maleri er byttet med en kopi.',
brief:'Kl. 01:40 fandt en nattevagt direktør Ruth Malm død i sal 3. Et maleri af Asger Jorn var byttet ud med en kopi. Ruth var kommet om natten for at tjekke sin mistanke.',
options:[['Erik Nat, nattevagt','Lise Pensel, konservator','Martin Ram, kurator','Ole Malm, ægtemand'],['Kvælning med afspærringsbånd','Slag med skulptur','Gift i vand'],['Sal 3','Konserveringsværkstedet','Magasinet']],answer:[1,1,1],
info:[['Nattevagt.','Konservator. Arbejder med malerierne.','Kurator.','Ruths mand.'],
['Rødt afspærringsbånd.','Lille bronzeskulptur.','Vandflaske.'],
['Sal 3. Her blev hun fundet.','Værksted hvor malerier repareres.','Magasin med kunst.']],
timeline:[['00:30','Ruth kommer.'],['00:40','Ruth ringer til to.'],['00:50','Ruth ses sidst.'],['01:40','Ruth findes.']],
sketch:{title:'Sal 3 · fundsted',items:[['wall',40,40,320,0,0],['label',200,30,0,0,0,'Malerier'],['table',200,170,100,30,0,'Bænk']],body:[200,120,40,.85],markers:[[1,240,100,'Fernis']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Ruths telefon',owner:'Ruth Malm',pin:'2611',pinHint:'Dagens dato (ddmm).',lockTime:'01:45',wall:'linear-gradient(160deg,#2b2e33,#c9a43a)',calls:[['Lise Pensel','00:40','out','1 min'],['Martin Ram','00:42','out','1 min']],notes:[['Jorn','Kopi! Kun Lise og Martin har haft maleriet ude. Kom nu.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 02:10',text:'Slag mod hovedet med noget lille og tungt af metal, eller mærker om halsen fra et bånd. Ingen tegn på gift. Hun døde mellem 00:50 og 01:20.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Ruths blazer',bg:'carpet',stamp:'K-4009 / 02',items:[['stain',100,90,1.4,0,'#c9a43a'],['stain',220,100,1.2,0,'#ddd']],caption:'Fernis og pakkeskum. Det findes i konserveringsværkstedet og magasinet. Sal 3 har ingen fernis.'}
],[
{type:'cctv',kind:'Overvågning',title:'Kuratorens hjem (ringeklokke)',date:'26-11',camera:'HOVEDDØR',doors:[[160,'DØR']],cast:[['Mand i morgenkåbe','#5b3f66']],frames:[{t:'00:43:00',at:[[50,.3]],txt:'Martin ryger en cigaret på trappen.'},{t:'01:00:00',at:[[50,.3]],txt:'Stadig hjemme.'},{t:'01:20:00',at:[[50,.3]],txt:'Går ind.'}],text:'Martin Ram er hjemme i Risskov fra 00:43 til 01:30, 10 km fra museet.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Ingen kvælning. Hun døde af slaget med en bronzeskulptur.'},
{type:'doc',kind:'Rapport',title:'Magasinet',src:'Nattevagten',text:'Magasinet har alarm. Den har ikke været slået fra i nat.'}
]],
epilogue:'Lise Pensel havde lavet kopien og solgt originalen. I konserveringsværkstedet viste Ruth hende beviserne. Lise slog hende med en lille bronzeskulptur og bar hende ind i sal 3.',
headline:'Konservator anholdt for kunstdrab'});

KK.push({nr:98,theme:'Skulpturpark',no:'K-4010',title:'Stenansigtet',when:'Søndag 14. juni · ca. 21:00',where:'Skulpturparken Heden, Herning',
victim:'Arne Sten (67), billedhugger',victimLook:{sex:'m',hair:'curly',hc:'hvid',beard:'full',age:'old',shirt:'#8a8a8a',collar:'round'},
intro:'Billedhuggeren findes død ved sin egen skulptur i parken.',
brief:'Kl. 21:40 fandt en gæst billedhugger Arne Sten død ved skulpturen "Stenansigtet". Arne havde opdaget, at nogen solgte små kopier af hans værker uden tilladelse.',
options:[['Lone Mejsel, assistent','Kurt Form, parkchef','Vera Sten, datter','Rolf Kopi, butiksejer'],['Mejsel','Hammer','Skub mod skulptur'],['Ved skulpturen','Værkstedet','Butikken']],answer:[3,1,2],
info:[['Assistent.','Parkchef.','Datter.','Ejer af parkens butik.'],
['Skarp mejsel.','Stenhuggerhammer.','Fald mod granit.'],
['Ved Stenansigtet. Her blev han fundet.','Arnes værksted.','Parkens butik.']],
timeline:[['19:00','Fernisering.'],['20:00','Arne beder to om en snak.'],['20:15','Arne ses sidst.'],['21:40','Arne findes.']],
sketch:{title:'Ved skulpturen · fundsted',items:[['roundtable',200,90,100,100,0,'Stenansigtet'],['tree',60,200,30,30,0]],body:[200,190,60,.85],markers:[[1,240,170,'Prismærke']]},
evidence:[[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Ferniseringstalen',meta:'20:00',lines:[['Arne Sten','Nogen sælger kopier af mine værker. Lone og Rolf, I ved, hvad jeg taler om. Kom med mig.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 22:10',text:'Kraftigt slag mod hovedet med noget tungt og fladt, eller fra et fald mod granit. Ingen stik fra en mejsel. Han døde mellem 20:15 og 20:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Arnes skjorte',bg:'stone',stamp:'K-4010 / 02',items:[['ticket',100,90,1.4,0],['stain',220,100,1.2,0,'#ddd']],caption:'Prismærke og stenstøv. Prismærker er i butikken, og stenstøv i værkstedet og butikken, hvor kopierne står. Græsset ved skulpturen har ikke sat spor.'}
],[
{type:'cctv',kind:'Overvågning',title:'Værkstedet',date:'14-06',camera:'VÆRKSTED',doors:[[160,'DØR']],cast:[['Assistent med støvmaske','#ddd']],frames:[{t:'20:15:00',at:[[50,.3]],txt:'Lone pudser en skulptur.'},{t:'20:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'20:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Lone Mejsel er i værkstedet fra 20:10 til 21:00. Arne kom ikke ind.'},
{type:'doc',kind:'Supplerende obduktion',title:'Faldet',src:'Retsmedicinsk Institut',text:'Ingen andre faldskader. Han døde af slaget med en hammer.'}
]],
epilogue:'Rolf Kopi solgte små kopier af Arnes værker i parkens butik. Arne fulgte ham ind i butikken. Rolf slog ham med en stenhuggerhammer, der var til salg, og slæbte ham hen til skulpturen.',
headline:'Butiksejer anholdt for drab i skulpturpark'});
