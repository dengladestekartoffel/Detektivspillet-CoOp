'use strict';
// Sagsbunke 4.

KK.push({nr:39,theme:'Kunstskøjteløb',no:'K-3501',title:'Piruetten',when:'Lørdag 28. februar · ca. 20:30',where:'Gentofte Skøjtehal · DM i kunstskøjteløb',
victim:'Natalia Berg (46), træner',victimLook:{sex:'f',hair:'bun',hc:'blond',age:'mid',shirt:'#5b3f66',collar:'turtle'},
intro:'En berømt skøjtetræner findes død i omklædningen efter DM. Guldmedaljen er stadig i hendes taske.',
brief:'Kl. 21:15 fandt en rengøringsmedarbejder træner Natalia Berg død i omklædningsrummet. Hendes elev havde vundet guld. Natalia havde netop besluttet at skifte til en ny, yngre elev og droppe den gamle.',
options:[['Julie Krag, elev','Simon Krag, Julies far','Maja Holt, konkurrent','Ane Berg, søster'],['Skøjteskinne','Kvælning med tørklæde','Sovemiddel i vand'],['Omklædningsrummet','Isbanen','Trænerrummet']],answer:[1,0,2],
info:[['Elev. Vandt guld i aften.','Julies far. Har betalt Natalia 300.000 kr. om året.','Konkurrent. Tog sølv.','Natalias søster og assistent.'],
['Skarp skøjteskinne i stål.','Natalias silketørklæde.','Vandflaske på bænken.'],
['Omklædningsrummet. Her blev hun fundet.','Selve isbanen.','Lille kontor med video og tavle.']],
timeline:[['19:00','Finalen.'],['20:00','Medaljeoverrækkelse.'],['20:20','Natalia beder to om et møde.'],['21:15','Natalia findes.']],
sketch:{title:'Omklædningsrummet · fundsted',items:[['table',200,60,300,18,0,'Bænk'],['locker',200,220,300,30,0],['door',30,130,30,0,90]],body:[200,140,80,.85],markers:[[1,240,120,'Isvand på gulvet']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Natalias telefon',owner:'Natalia Berg',pin:'2802',pinHint:'Datoen for DM (ddmm). Står i sagsmappen.',lockTime:'21:20',wall:'linear-gradient(160deg,#e8eef2,#7a6ab0)',msgs:[{with:'Simon Krag',m:[['them','20:22','Du kan ikke droppe Julie nu. Vi har en aftale.'],['me','20:23','Kom til trænerrummet. Og tag Julie med. Det er bedst, hun hører det fra mig.']]},{with:'Julie',m:[['them','20:30','Far siger, du vil tale med os?']]}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 21:50',text:'Dybt snit på halsen fra noget meget skarpt og glat. Der er også et rødt mærke om halsen fra stof. Ingen tegn på sovemiddel: pupillerne er normale. Hun døde mellem 20:25 og 20:55.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Natalias sko',bg:'tile',stamp:'K-3501 / 02',items:[['shoe',100,100,1.4,0],['stain',220,100,1.2,0,'#cfe0f0']],caption:'Ingen is eller isvand på skoene, kun tavlekridt på hånden. Tavlen står i trænerrummet, men der blev også tegnet med kridt i omklædningsrummet før finalen. Hun har ikke været på isen.'}
],[
{type:'cctv',kind:'Overvågning',title:'Pressezonen',date:'28-02',camera:'MIXED ZONE',doors:[[160,'ISBANE']],cast:[['Guldvinder','#d8b53e']],frames:[{t:'20:25:00',at:[[50,.3]],txt:'Guldvinderen giver interview til TV 2.'},{t:'20:40:00',at:[[55,.4]],txt:'Interview med DR.'},{t:'20:55:00',at:[[50,.3]],txt:'Autografer.'}],text:'Julie Krag er i pressezonen fra 20:20 til 21:05.'},
{type:'doc',kind:'Supplerende obduktion',title:'Tørklædet',src:'Retsmedicinsk Institut',text:'Det røde mærke kommer fra tørklædet, som blev trukket med i faldet. Dødsårsagen er snittet fra en skøjteskinne.'},
{type:'doc',style:'table',kind:'Adgangslog',title:'Omklædningsrummet',rows:[['Tid','Hændelse'],['20:00–21:10','Låst; nøgle hos rengøringen']],after:'Omklædningsrummet var låst, mens hun døde. Hun blev båret ind ad bagdøren fra trænerrummet.'}
]],
epilogue:'Simon Krag havde brugt alt på datterens karriere og kunne ikke tåle, at Natalia ville droppe hende. I trænerrummet tog han en reserveskinne fra hylden og skar. Han bar Natalia ind i omklædningsrummet gennem bagdøren og trak tørklædet med.',
headline:'Skøjteprinsessens far anholdt for drab'});

KK.push({nr:40,theme:'Radio',no:'K-3502',title:'Live i æteren',when:'Mandag 13. april · ca. 06:20',where:'Radio Hit FM, Aarhus',
victim:'Thomas "Morgen-Tom" Lund (49), radiovært',victimLook:{sex:'m',hair:'curly',hc:'brun',beard:'stubble',shirt:'#c94a3b',collar:'round'},
intro:'Morgenradioens vært forsvinder midt i sit program. 80.000 lyttere hører kun stilhed.',
brief:'Kl. 06:22 gik "Morgen-Tom" i reklamepause. Han kom aldrig tilbage. Kl. 06:40 blev han fundet død i arkivet. Samme morgen ville han afsløre i programmet, hvem der stod bag en snydekonkurrence, hvor lytterne havde betalt penge for præmier, der ikke fandtes.',
options:[['Sara Bech, producer','Kim Rask, tekniker','Lone Dahl, medvært','Bjørn Vang, salgschef'],['Mikrofonstativ','Kvælning med headsetledning','Forgiftet kaffe'],['Arkivet','Studie 2','Teknikrummet']],answer:[3,1,2],
info:[['Producer. Har ansvaret for konkurrencerne.','Tekniker.','Medvært. Sad i studiet hele morgenen.','Salgschef. Har tjent bonus på konkurrencerne.'],
['Tungt mikrofonstativ.','Headsetledning.','Kaffe fra automaten.'],
['Arkiv med gamle plader. Her blev han fundet.','Lille ekstra studie.','Rum med servere og kabler.']],
timeline:[['06:00','Programmet begynder.'],['06:20','Tom lover en "stor afsløring".'],['06:22','Reklamepause.'],['06:40','Tom findes i arkivet.']],
sketch:{title:'Arkivet · fundsted',items:[['shelf',60,130,24,200,0],['shelf',200,130,24,200,0],['shelf',340,130,24,200,0]],body:[130,150,10,.8],markers:[[1,150,110,'Kabelstump']]},
evidence:[[
{type:'audio',style:'radio',kind:'Lydoptagelse',label:'Udsendelsen, 06:18–06:22',meta:'Hit FM · arkivkopi',lines:[['Morgen-Tom','Godmorgen Aarhus! Efter pausen afslører jeg, hvem der har snydt jer i vores konkurrencer.'],['Morgen-Tom','Jeg siger bare: S og B. Sara og Bjørn, I ved godt, hvem I er. Kom ind og forklar jer.'],['Morgen-Tom','Reklamepause!']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 07:10',text:'Fine, ens striber om halsen fra en tynd ledning. Der er også en lille bule i baghovedet. Ingen tegn på gift. Han døde mellem 06:22 og 06:35.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Toms trøje',bg:'carpet',stamp:'K-3502 / 04',items:[['stain',100,90,1.4,0,'#888'],['rope',220,100,1.2,0,'#222']],caption:'Fint metalstøv og et stykke kabelbinder. Det er der i teknikrummet og i studie 2, hvor der blev monteret nyt udstyr. Arkivet er støvet på en anden måde: papir og pladestøv, ikke metal.'}
],[
{type:'cctv',kind:'Overvågning',title:'Producerens bord',date:'13-04',camera:'KONTROLRUM',doors:[[60,'STUDIE 1']],cast:[['Producer med headset','#8a2b45']],frames:[{t:'06:22:00',at:[[50,.4]],txt:'Produceren starter reklamerne.'},{t:'06:28:00',at:[[50,.4]],txt:'Produceren kalder på Tom i højttaleren.'},{t:'06:35:00',at:[[50,.4]],txt:'Produceren sætter musik på.'}],text:'Sara Bech forlader ikke kontrolrummet fra 06:00 til 06:45.'},
{type:'doc',kind:'Supplerende obduktion',title:'Bulen',src:'Retsmedicinsk Institut',text:'Bulen er fra faldet mod en hylde. Han døde af kvælning med en headsetledning.'},
{type:'doc',style:'table',kind:'Studieplan',title:'Studie 2',rows:[['Tid','Hvem'],['06:00–07:00','Nyhedsoplæser Ida (live nyheder kl. 06:30)']],after:'Studie 2 var i brug hele morgenen. Tom var der ikke.'}
]],
epilogue:'Bjørn Vang havde sat snydekonkurrencerne op og tjent stor bonus. I reklamepausen fulgte han Tom ind i teknikrummet og kvalte ham med en headsetledning. Han bar ham ind i arkivet og væltede en hylde, så det skulle ligne et fald.',
headline:'Salgschef anholdt for drab i radiohuset'});

KK.push({nr:41,theme:'Vikingemarked',no:'K-3503',title:'Ragnarok',when:'Søndag 26. juli · ca. 16:00',where:'Vikingemarkedet, Trelleborg',
victim:'Gorm Ravnsbjerg (52), markedsleder',victimLook:{sex:'m',hair:'long',hc:'rød',beard:'full',shirt:'#6b4a2b',collar:'round'},
intro:'Vikingemarkedets høvding findes død i sit telt. En rigtig økse er væk.',
brief:'Kl. 16:40 fandt en "træl" markedsleder Gorm Ravnsbjerg død i sit telt. Gorm havde opdaget, at nogen solgte kopier som "ægte vikingesmykker" på markedet, og ville smide dem ud.',
options:[['Astrid Holm, smykkesmed','Leif Jarl, smed','Sigrid Bo, kok','Ulf Hansen, kriger'],['Skæggeøkse','Mjød med giftsvamp','Spyd'],['Gorms telt','Smedjen','Kogeteltet']],answer:[1,2,1],
info:[['Smykkesmed. Sælger "ægte" vikingesmykker.','Smed. Laver kopier af økser.','Kok. Laver mad over bål.','Kriger i kampopvisningen.'],
['Kopi af en skæggeøkse. Den ægte er væk.','Mjød i et horn. Svampe groede ved kogeteltet.','Langt spyd med jernspids.'],
['Gorms store telt. Her blev han fundet.','Telt med esse og ambolt.','Telt med bål og gryder.']],
timeline:[['12:00','Kampopvisning.'],['14:30','Gorm konfronterer to sælgere.'],['15:30','Gorm går mod teltene.'],['16:40','Gorm findes i sit telt.']],
sketch:{title:'Gorms telt · fundsted',items:[['roundtable',200,130,220,220,0],['bed',140,130,50,100,0,'Skind'],['barrel',280,90,24,24,0]],body:[220,170,30,.8],markers:[[1,250,150,'Bålaske på kappen']]},
evidence:[[
{type:'doc',style:'letter',kind:'Brev',title:'Gorms advarsel',text:'Til Astrid smykkesmed og Leif smed.\nI sælger kopier som ægte. Det er snyd mod gæsterne og mod vores forfædre.\nI pakker sammen i dag. Mød mig i eftermiddag.\n– Gorm'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 17:10',text:'Afdøde har kramper og opkast, som kan skyldes en giftsvamp, men også et stikmærke i siden fra en smal jernspids. Ingen hug fra en økse. Han døde mellem 15:30 og 16:15.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Gorms kappe',bg:'grass',stamp:'K-3503 / 06',items:[['stain',100,90,1.4,0,'#555'],['stain',220,100,1.2,0,'#8a6a3a']],caption:'Bålaske og madfedt på kappen. Bål er der i kogeteltet og i smedjen. Gorms eget telt har ingen ild.'}
],[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Turistens video',meta:'15:30–16:20 · smykketeltet',lines:[['Astrid Holm','Velkommen! Det her armbånd er en tro kopi … jeg mener, ægte vikingesølv!'],['Turist','Klokken er fire. Står du her hele dagen?'],['Astrid Holm','Hele dagen, min ven. Jeg har ikke forladt teltet siden frokost.']]},
{type:'doc',style:'table',kind:'Laboratoriesvar',title:'Toksikologi',rows:[['Prøve','Fund'],['Mjød i hornet','Ingen giftsvamp'],['Blod','Ingen svampegift']],after:'Opkastet skyldes chokket fra stikket. Han døde af spydstikket.'},
{type:'doc',kind:'Rapport',title:'Kogeteltet',src:'Markedsvagten',text:'Kogeteltet var fyldt med gæster, der spiste stuvning hele eftermiddagen. Kokken Sigrid så aldrig Gorm.'}
]],
epilogue:'Leif Jarl havde tjent godt på at sælge sine kopier som ægte. I smedjen nægtede Gorm at give ham en chance til. Leif greb et spyd, som stod til slibning, og stak. Han bar Gorm tilbage til hans telt i ly af en kampopvisning.',
headline:'Smed anholdt for drab på vikingemarked'});

KK.push({nr:42,theme:'Zoo',no:'K-3504',title:'Løvens hule',when:'Tirsdag 19. maj · ca. 08:00',where:'Fjordby Zoo, Jylland',
victim:'Dorte Lynge (50), zoodirektør',victimLook:{sex:'f',hair:'short',hc:'grå',glasses:true,shirt:'#3e5b46',collar:'shirt'},
intro:'Zoodirektøren findes i løveanlægget før åbning. Løverne er i deres stald, men hun er død.',
brief:'Kl. 08:20 fandt en dyrepasser zoodirektør Dorte Lynge død inde i løveanlægget. Det skulle ligne et løveangreb, men løverne var lukket inde om natten. Dorte havde opdaget, at sjældne dyr blev solgt ulovligt fra zoo.',
options:[['Karsten Bo, dyrepasser','Rie Fink, dyrlæge','Jesper Ulv, bestyrelsesformand','Lea Lynge, datter'],['Bedøvelsespil','Slag med skovl','Løveangreb'],['Dyrlægeklinikken','Krybdyrhuset','Løveanlægget']],answer:[1,0,0],
info:[['Dyrepasser ved løverne.','Dyrlæge. Har bedøvelsesgevær.','Bestyrelsesformand. Har gæld.','Dortes datter. Arbejder i caféen.'],
['Pil med bedøvelse til store dyr.','Skovl fra løvernes stald.','Løverne var lukket inde.'],
['Klinik med medicin og bur.','Varmt hus med slanger og firben.','Løvernes udendørs anlæg. Her blev hun fundet.']],
timeline:[['06:30','Dorte kommer på arbejde.'],['07:00','Dorte beder to om et møde.'],['07:30','Dorte ses sidst.'],['08:20','Dorte findes hos løverne.']],
sketch:{title:'Løveanlægget · fundsted',items:[['rug',200,130,320,180,0],['tree',80,80,40,40,0],['crate',320,60,40,30,0,'Stald']],body:[200,150,60,.85],markers:[[1,250,140,'Ingen pote-spor']]},
evidence:[[
{type:'computer',kind:'Computer',title:'Dortes computer',owner:'Dorte Lynge',user:'Dorte',password:'okapi',hint:'Zooens maskot. Står på billetterne.',mail:[{from:'Dorte Lynge',to:'Rie Fink; Jesper Ulv',time:'07:01',subject:'De manglende dyr',body:'Tre røde pandaer er "døde" på papiret, men solgt i udlandet. Kun dyrlægen og bestyrelsesformanden har underskrevet dødsattesterne. Mød mig inden åbning.'}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 08:50',text:'Ingen bid eller kløer, så et løveangreb er udelukket. Et lille rundt stikmærke i låret, som kan være en pil, og en bule i baghovedet, som kan være et slag med en skovl. Hun døde mellem 07:30 og 08:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Dortes jakke',bg:'sand',stamp:'K-3504 / 01',items:[['stain',100,90,1.4,0,'#e8eef2'],['stain',220,100,1.2,0,'#6a8a3a']],caption:'Desinfektionsmiddel og en fjer fra en ugle, der blev behandlet. Det findes i dyrlægeklinikken, men desinfektion bruges også i krybdyrhuset. Løveanlæggets sand er ikke trængt ind i tøjet: hun blev lagt der.'}
],[
{type:'cctv',kind:'Overvågning',title:'Bestyrelseslokalet (videomøde)',date:'19-05',camera:'MØDE',doors:[[60,'DØR']],cast:[['Mand i jakkesæt','#2f3b55']],frames:[{t:'07:30:00',at:[[50,.3]],txt:'Bestyrelsesformanden i videomøde med banken.'},{t:'07:45:00',at:[[50,.3]],txt:'Stadig i møde.'},{t:'08:05:00',at:[[50,.3]],txt:'Mødet slutter.'}],text:'Jesper Ulv sidder i et videomøde fra 07:25 til 08:05.'},
{type:'doc',kind:'Supplerende obduktion',title:'Bulen',src:'Retsmedicinsk Institut',text:'Bulen er fra faldet. Blodet indeholder en dødelig dosis bedøvelse til store dyr.'},
{type:'doc',kind:'Rapport',title:'Krybdyrhuset',src:'Dyrepasser',text:'Krybdyrhuset var låst indtil kl. 09, da varmen var gået. Ingen har været derinde. Desinfektionen er ikke blevet brugt siden i går.'},
{type:'doc',style:'note',kind:'Seddel',title:'På Dortes skrivebord',text:'Kode til pc: okapi (som vores maskot)'}
]],
epilogue:'Rie Fink havde solgt de røde pandaer for en formue. I klinikken sagde Dorte, at hun ville gå til politiet. Rie skød hende med en bedøvelsespil til store dyr. Hun kørte liget i en dyretransport ud i løveanlægget, så det skulle ligne et angreb.',
headline:'Dyrlæge anholdt for drab i zoo'});

KK.push({nr:43,theme:'Michelin',no:'K-3505',title:'Tre stjerner',when:'Lørdag 7. november · ca. 23:30',where:'Restaurant Nord, Christianshavn',
victim:'Viktor Lang (45), stjernekok',victimLook:{sex:'m',hair:'short',hc:'sort',beard:'stubble',shirt:'#f4f4f0',collar:'shirt'},
intro:'En stjernekok findes død i restaurantens kølerum, samme aften som Michelin-inspektøren spiste der.',
brief:'Kl. 00:10 fandt opvaskeren stjernekok Viktor Lang død i kølerummet. Michelin-inspektøren havde spist i restauranten, og alt skulle være perfekt. Viktor havde opdaget, at nogen havde solgt hans opskrifter til en konkurrent.',
options:[['Signe Ravn, souschef','Jonas Krag, sommelier','Malte Bo, kok','Ella Lang, hustru'],['Kokkekniv','Kvælning med forklæde','Blæksprutte-gift'],['Kølerummet','Vinkælderen','Køkkenet']],answer:[1,1,1],
info:[['Souschef. Ville overtage køkkenet.','Sommelier. Har adgang til alt, også opskriftsmappen.','Kok. Lavede desserten.','Viktors kone. Står for økonomien.'],
['Japansk kokkekniv.','Hvidt forklæde.','Fugu-lignende gift fra en eksotisk ret.'],
['Kølerum. Her blev han fundet.','Kælder med vin.','Det åbne køkken.']],
timeline:[['18:00','Første gæster.'],['22:30','Inspektøren går.'],['23:00','Viktor beder to blive.'],['00:10','Viktor findes i kølerummet.']],
sketch:{title:'Kølerummet · fundsted',items:[['shelf',60,130,24,200,0],['shelf',340,130,24,200,0],['crate',200,60,80,30,0]],body:[200,160,0,.8],markers:[[1,240,140,'Vinplet på jakken']]},
evidence:[[
{type:'audio',style:'voicemail',kind:'Telefonsvarer',label:'Viktors besked til sin advokat',meta:'Indtalt 23:02',lines:[['Viktor Lang','Det er Viktor. Mine opskrifter er solgt. Kun Signe og Jonas har nøgle til mappen. De bliver begge tilbage i aften, og så finder jeg ud af det.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 00:40',text:'Røde striber om halsen fra stof og små blødninger i øjnene, som ved kvælning. Der er også en lille rift på hånden fra en skarp klinge. Ingen tegn på gift. Han døde mellem 23:05 og 23:40.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Viktors kokkejakke',bg:'tile',stamp:'K-3505 / 03',items:[['stain',100,90,1.4,0,'#5a1a2a'],['stain',220,100,1.2,0,'#888']],caption:'Rødvin og kældermug på jakken. Rødvin er der i vinkælderen og i køkkenet, hvor glas blev vasket op. Kølerummet har ingen vin. Han blev flyttet derind.'}
],[
{type:'cctv',kind:'Overvågning',title:'Køkkenet',date:'07-11',camera:'KØKKEN',doors:[[60,'KØL'],[260,'KÆLDER']],cast:[['Souschef i sort forklæde','#222']],frames:[{t:'23:05:00',at:[[50,.5]],txt:'Souschefen gør rent i køkkenet sammen med to kokke.'},{t:'23:20:00',at:[[50,.5]],txt:'Souschefen skrubber gryder.'},{t:'23:40:00',at:[[50,.5]],txt:'Stadig i køkkenet.'}],text:'Signe Ravn og to andre kokke er i køkkenet hele tiden. Viktor kommer ikke ind i køkkenet efter 23:00.'},
{type:'doc',kind:'Supplerende obduktion',title:'Riften',src:'Retsmedicinsk Institut',text:'Riften er fra hans eget arbejde tidligere på aftenen. Dødsårsagen er kvælning med et stofbånd.'}
]],
epilogue:'Jonas Krag havde solgt Viktors opskrifter for 200.000 kr. I vinkælderen konfronterede Viktor ham. Jonas kvalte ham med sit sommelier-forklæde. Han bar liget op og ind i kølerummet, så det skulle ligne, at Viktor havde fået et ildebefindende.',
headline:'Sommelier anholdt for drab på stjernekok'});

KK.push({nr:44,theme:'Valgaften',no:'K-3506',title:'Stemmerne er talt',when:'Tirsdag 21. november · ca. 22:30',where:'Partiet Fremtidens valgfest, Odense Rådhus',
victim:'Karen Busk (54), spidskandidat',victimLook:{sex:'f',hair:'bob',hc:'blond',age:'mid',shirt:'#1f4e8a',collar:'v'},
intro:'Midt i valgfesten findes den nyvalgte borgmester død i et mødelokale. Hun nåede aldrig at holde sin tale.',
brief:'Kl. 23:05 skulle Karen Busk holde sin sejrstale som ny borgmester. Kl. 22:55 blev hun fundet død i et mødelokale. Karen havde lovet vælgerne at afsløre korruption i byggesager, og to personer i hendes eget parti stod på listen.',
options:[['Poul Ager, byrådsmedlem','Hanne Riis, kampagneleder','Ole Busk, ægtemand','Lene Fjord, byggedirektør'],['Valgplakat-stativ','Gift i champagne','Kvælning med partitørklæde'],['Mødelokale 3','Rådhusets balkon','Garderoben']],answer:[0,0,2],
info:[['Byrådsmedlem i 20 år. Har stemt ja til mange byggesager.','Kampagneleder. Styrer alle pengene.','Karens mand.','Byggedirektør. Har fået alle de store opgaver.'],
['Tungt metalstativ til valgplakater.','Champagne til sejrsfesten.','Partiets grønne tørklæde.'],
['Lille mødelokale. Her blev hun fundet.','Balkon over rådhuspladsen.','Garderoben ved indgangen.']],
timeline:[['20:00','Valgstederne lukker.'],['22:00','Karen er valgt.'],['22:20','Karen går for at "ordne noget".'],['22:55','Karen findes i mødelokale 3.']],
sketch:{title:'Mødelokale 3 · fundsted',items:[['table',200,130,160,70,0,'Mødebord'],['chair',140,80],['chair',260,80],['chair',140,180],['chair',260,180]],body:[200,210,80,.8],markers:[[1,250,190,'Frakkeknap']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Karens telefon',owner:'Karen Busk',lockTime:'22:58',wall:'linear-gradient(160deg,#1f4e8a,#7ab0d8)',msgs:[{with:'Poul + Hanne',m:[['me','22:18','I to står i papirerne om byggesagerne. Jeg vil høre det fra jer, før jeg siger det i talen. Nu.'],['them','22:19','Det er ikke, som du tror. (Hanne)'],['them','22:21','Jeg kommer. (Poul)']]}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 23:20',text:'Kraftigt slag mod baghovedet med en kantet metalgenstand. Hun har også en rødlig rand om halsen fra stof. Ingen tegn på gift. Hun døde mellem 22:20 og 22:50.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Karens dragt',bg:'carpet',stamp:'K-3506 / 02',items:[['stain',100,90,1.4,0,'#ddd'],['button',220,100,1.2,0,'#222']],caption:'Frakkestativ-fnug og en fremmed frakkeknap. Det kommer fra garderoben, men balkonen bruges også til at hænge frakker til tørre. Mødelokalets gulvtæppe er ikke på hende: hun blev båret dertil.'}
],[
{type:'cctv',kind:'Overvågning',title:'Festsalen',date:'21-11',camera:'SAL',doors:[[160,'SCENE']],cast:[['Kampagneleder med headset','#8a2b45']],frames:[{t:'22:20:00',at:[[50,.2]],txt:'Kampagnelederen gør scenen klar.'},{t:'22:35:00',at:[[50,.2]],txt:'Hun tester mikrofoner med teknikerne.'},{t:'22:50:00',at:[[55,.2]],txt:'Stadig på scenen.'}],text:'Hanne Riis er på scenen fra 22:10 til 22:55.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Randen om halsen er fra hendes eget tørklæde, som strammede i faldet. Dødsårsagen er slaget med stativet.'},
{type:'doc',kind:'Rapport',title:'Balkonen',src:'Rådhusets vagt',text:'Balkonen var låst hele aftenen, fordi den skulle åbnes til Karens tale kl. 23:05. Nøglen lå hos vagten.'}
]],
epilogue:'Poul Ager havde i årevis taget imod penge fra byggefirmaer. I garderoben bad han Karen om at tie. Hun nægtede, og han greb et stativ til valgplakater, som stod klar til oprydning. Han bar hende ind i mødelokale 3, så det skulle ligne et indbrud.',
headline:'Byrådsmedlem anholdt for drab på valgaften'});

KK.push({nr:45,theme:'Retssal',no:'K-3507',title:'Skyldig',when:'Onsdag 15. januar · ca. 12:15',where:'Retten i Holbæk',
victim:'Carsten Juul (61), dommer',victimLook:{sex:'m',hair:'short',hc:'grå',glasses:true,age:'old',shirt:'#111111',collar:'shirt'},
intro:'En dommer findes død i sit kammer i frokostpausen. Dommen skulle afsiges kl. 13.',
brief:'Kl. 12:50 fandt en retsbetjent dommer Carsten Juul død i dommerkammeret. Han skulle afsige dom i en stor bedragerisag kl. 13. Dommen ville sende tiltalte i fængsel i otte år, og det vidste flere.',
options:[['Rune Falk, tiltalt','Mette Lerche, forsvarer','Jens Vig, anklager','Ida Juul, protokolfører'],['Dommerhammer','Gift i kaffe','Brevkniv'],['Dommerkammeret','Arkivet','Kantinen']],answer:[1,1,1],
info:[['Tiltalt for bedrageri for 40 mio. kr.','Forsvarer. Har fået en stor bonus lovet, hvis Rune frifindes.','Anklager.','Protokolfører og dommerens niece.'],
['Lille træhammer.','Kaffe fra dommerkammerets kande.','Spids brevkniv af metal.'],
['Dommerens kontor. Her blev han fundet.','Retsarkivet i kælderen.','Kantinen.']],
timeline:[['09:00','Sidste retsmøde.'],['12:00','Frokostpause.'],['12:15','Dommeren tager kaffe med til arkivet.'],['12:50','Dommeren findes.']],
sketch:{title:'Dommerkammeret · fundsted',items:[['desk',200,60,160,40,0,'Skrivebord'],['shelf',40,130,20,160,0],['chair',200,100]],body:[200,160,30,.85],markers:[[1,240,150,'Kaffekop væltet']]},
evidence:[[
{type:'doc',style:'table',kind:'Adgangslog',title:'Dommergangen',rows:[['Tid','Kort','Navn'],['12:05','Gæst 4','Mette Lerche'],['12:08','Medarb.','Ida Juul'],['12:30','Gæst 4','Mette Lerche (ud)']],after:'Dommergangen kræver kort. Rune Falk og anklageren var i venteværelset med vagt.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 13:10',text:'Lille, dybt stikmærke i halsen fra noget smalt og spidst, eller tegn på gift: læberne er blålige. Ingen slag mod hovedet. Han døde mellem 12:15 og 12:40.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Dommerens kappe',bg:'carpet',stamp:'K-3507 / 03',items:[['stain',100,90,1.4,0,'#6b4a2b'],['paper',220,100,1.2,0]],caption:'Kaffe og papirstøv fra gamle sagsmapper. Kaffe blev drukket i kammeret og i kantinen, men gamle sagsmapper findes kun i arkivet og i kammeret. Han har ikke været i kantinen: ingen madpletter.'}
],[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Protokolførerens diktat',meta:'12:10–12:45 · kontoret ved siden af',lines:[['Ida Juul','Protokol, side 412. Klokken er ti over tolv.'],['Ida Juul','Klokken er halv et. Jeg sidder stadig med vidneforklaringerne.'],['Ida Juul','Klokken er kvart i et. Færdig.']]},
{type:'doc',style:'table',kind:'Laboratoriesvar',title:'Toksikologi',rows:[['Prøve','Fund'],['Kaffe','Cyanid'],['Blod','Cyanid i dødelig dosis']],after:'Kanden i kammeret er ren; giften er hældt direkte i koppen, efter han tog den med ud kl. 12:12. Stikmærket er fra hans manchetknap. Han døde af cyanid.'},
{type:'doc',kind:'Rapport',title:'Kammeret',src:'Retsbetjenten',text:'Jeg stod uden for dommerkammeret fra 12:00 til 12:50. Ingen gik ind. Dommeren gik ud kl. 12:12 med sin kaffe og kom ikke tilbage før … ja, han blev fundet der. Han må være båret ind ad arkivtrappen.'}
]],
epilogue:'Mette Lerche var lovet en million, hvis Rune blev frifundet. Hun ventede på dommeren i arkivet med en kop kaffe med cyanid og sagde, at hun havde nye papirer. Han drak kaffen, mens han læste. Hun slæbte ham op ad arkivtrappen til kammeret.',
headline:'Forsvarer anholdt for giftmord på dommer'});

KK.push({nr:46,theme:'Bowling',no:'K-3508',title:'Strike',when:'Fredag 6. marts · ca. 22:00',where:'Strike Center, Esbjerg',
victim:'Lars "Kuglen" Mikkelsen (47), bowlingmester',victimLook:{sex:'m',hair:'short',hc:'brun',beard:'moustache',shirt:'#d8b53e',collar:'shirt'},
intro:'Bowlingmesteren findes død bag keglerne. Finalen er aflyst.',
brief:'Kl. 22:40 fandt en tekniker bowlingmester Lars Mikkelsen død i maskinrummet bag bane 8. Lars havde vundet bowling-DM syv gange og afsløret, at nogen havde manipuleret med baneoliën for at snyde.',
options:[['Tina Holm, holdkammerat','Jan Ravn, centerchef','Benny Fisk, modstander','Lis Mikkelsen, hustru'],['Bowlingkugle','Keglemaskinen','Gift i øl'],['Maskinrummet','Baren','Proshoppen']],answer:[2,0,2],
info:[['Holdkammerat i 10 år.','Centerchef. Ansvarlig for banerne.','Modstander i finalen. Har aldrig slået Lars.','Lars’ kone.'],
['Tung bowlingkugle, 7 kg.','Keglemaskinen kan klemme en arm.','Øl fra baren.'],
['Rum bag banerne med keglemaskinerne. Her blev han fundet.','Baren.','Butik med kugler og sko.']],
timeline:[['19:00','Semifinale.'],['21:00','Lars afslører snyd.'],['21:20','Lars beder to om en snak.'],['22:40','Lars findes.']],
sketch:{title:'Maskinrummet · fundsted',items:[['counter',200,60,320,30,0,'Keglemaskiner'],['crate',100,200,40,30,0]],body:[200,150,90,.8],markers:[[1,240,140,'Sko-spray']]},
evidence:[[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Lokal-tv',meta:'21:00 · interview',lines:[['Lars Mikkelsen','Nogen har smurt ekstra olie på bane 8. Kun to mennesker har haft nøgle til oliemaskinen i dag: Jan og Benny.'],['Journalist','Hvad gør du nu?'],['Lars Mikkelsen','Jeg taler med dem begge. Lige om lidt.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 23:10',text:'Slag mod hovedet med noget stort og rundt, eller klemskader fra en maskine. Ingen tegn på gift. Han døde mellem 21:20 og 22:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Lars’ trøje',bg:'wood',stamp:'K-3508 / 02',items:[['stain',100,90,1.4,0,'#aab4bb'],['shoe',220,100,1.2,0]],caption:'Desinfektions-spray til bowlingsko og fine plastpartikler fra nye kugler. Begge dele er der i proshoppen, men sko-spray bruges også i maskinrummet. Han har ikke været i baren.'}
],[
{type:'doc',style:'receipt',kind:'Kvittering',title:'Centerchefens kasse',shop:'Strike Center · Kasse 1',rows:[['21:15','Åbner kasse','J. Ravn'],['21:30','Salg · 12 baner',''],['21:45','Salg · sko-leje',''],['22:05','Lukker kasse','J. Ravn']],text:'Jan Ravn står ved kassen hele tiden ifølge kameraet ved indgangen.'},
{type:'doc',kind:'Rapport',title:'Keglemaskinen',src:'Teknikeren',text:'Keglemaskinen på bane 8 var slukket og låst fra 21:00 på grund af oliesagen. Den har ikke kørt.'},
{type:'doc',kind:'Rapport',title:'Maskinrummet',src:'Kriminalteknisk Center',text:'Der er ingen blod i maskinrummet. Han er båret derind fra proshoppen ad bagdøren.'}
]],
epilogue:'Benny Fisk havde smurt olie på bane 8 for endelig at slå Lars. I proshoppen sagde Lars, at han ville anmelde ham til forbundet. Benny greb en ny bowlingkugle fra hylden og slog. Han bar liget ind bag keglemaskinerne.',
headline:'Bowlingspiller anholdt for drab på mester'});

KK.push({nr:47,theme:'Krypto',no:'K-3509',title:'Hash',when:'Lørdag 1. april · ca. 01:00',where:'Penthouse, Aarhus Ø',
victim:'Oscar Wiig (31), kryptomillionær',victimLook:{sex:'m',hair:'short',hc:'blond',age:'young',shirt:'#111111',collar:'round'},
intro:'En kryptomillionær findes død i sin penthouse efter en fest. Hans digitale tegnebog er tømt.',
brief:'Kl. 01:40 fandt en gæst Oscar Wiig død på tagterrassen. Samme nat var 80 mio. kr. i kryptovaluta flyttet fra hans tegnebog. Kun den, der kendte hans 12 hemmelige ord, kunne flytte pengene.',
options:[['Freja Moe, kæreste','Nikolai Bach, forretningspartner','Ali Sami, it-sikkerhed','Tess Wiig, søster'],['Fald fra terrassen','Kvælning','Champagne med GHB'],['Tagterrassen','Kontoret','Gæstetoilettet']],answer:[2,2,1],
info:[['Kæreste. Har boet hos ham i et år.','Forretningspartner.','Oscars it-sikkerhedskonsulent. Hjalp med at gemme de 12 ord.','Søster. Låner ofte penge.'],
['Terrassen er højt oppe, men har glasværn.','Kvælning med hænderne.','Champagne. GHB kan få en person til at falde om.'],
['Tagterrassen. Her blev han fundet.','Kontoret med pengeskab.','Lille toilet ved entréen.']],
timeline:[['21:00','Fest.'],['00:15','Oscar går fra festen.'],['00:40','Pengene flyttes.'],['01:40','Oscar findes på terrassen.']],
sketch:{title:'Tagterrassen · fundsted',items:[['sofa',120,80,120,36,0],['plant',340,60,30,30,0],['table',200,180,80,40,0]],body:[260,140,40,.85],markers:[[1,220,170,'Champagneglas']]},
evidence:[[
{type:'doc',style:'table',kind:'Pengeskab',title:'Kontorets pengeskab',rows:[['Tid','Hændelse','Fingeraftryk'],['00:20','Åbnet','F. Moe'],['00:32','Åbnet','A. Sami'],['00:34','Lukket','']],after:'De 12 ord lå på et metalkort i pengeskabet. Kun Freja og Ali har registreret fingeraftryk ud over Oscar.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 02:10',text:'Ingen knoglebrud, så han er ikke faldet ned fra noget højt. Pupillerne er små, og han har kastet op, som ved GHB, men der er også blå mærker på halsen. Han døde mellem 00:20 og 01:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Oscars skjorte',bg:'tile',stamp:'K-3509 / 04',items:[['stain',100,90,1.4,0,'#f2e0c0'],['paper',220,100,1.2,0]],caption:'Champagne og papirfibre fra en makulator. Makulatoren står på kontoret, og et lille spejl med champagnespild står på gæstetoilettet. Han er båret ud på terrassen; skoene er rene.'}
],[
{type:'phone',kind:'Mobiltelefon',title:'Frejas telefon',owner:'Freja Moe',lockTime:'01:50',wall:'linear-gradient(160deg,#2a1a3a,#c94a8a)',photos:[{bg:'carpet',items:[['glass',160,100,1.6,0]],caption:'Selfie med veninder',meta:'00:30 · Stuen'},{bg:'carpet',items:[['microphone',160,100,1.6,0]],caption:'Karaoke!',meta:'00:45 · Stuen'},{bg:'carpet',items:[['flower',160,100,1.6,0]],caption:'Dans',meta:'01:00 · Stuen'}],msgs:[{with:'Veninde',m:[['them','00:31','Du er i stuen, ikk? Kom og syng!'],['me','00:32','Kommer! Har lige været i kontoret og lagt min halskæde i skabet.']]}]},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'De blå mærker er gamle, flere dage. Blodet indeholder en dødelig dosis GHB, indtaget mellem 00:35 og 00:45, mens han sad på kontoret.'},
{type:'doc',kind:'Rapport',title:'Gæstetoilettet',src:'Kriminalteknisk Center',text:'Gæstetoilettet var låst indefra fra 00:10 til 01:20 af en gæst, der havde det dårligt. Hun bekræfter, at hun var alene.'}
]],
epilogue:'Ali Sami kendte de 12 ord og havde brug for penge. Han kom GHB i Oscars champagne og fulgte ham ind på kontoret. Da Oscar faldt om, åbnede Ali pengeskabet og flyttede pengene. Han bar liget ud på terrassen, så det skulle ligne en overdosis.',
headline:'It-konsulent anholdt for kryptodrab'});

KK.push({nr:48,theme:'Fiskeauktion',no:'K-3510',title:'Fangsten',when:'Torsdag 9. oktober · ca. 04:30',where:'Fiskeauktionen, Hirtshals Havn',
victim:'Jens Kutter (63), skipper',victimLook:{sex:'m',hair:'short',hc:'grå',beard:'full',age:'old',shirt:'#d46a1f',collar:'round'},
intro:'En gammel skipper findes død i et fiskekar på auktionen. Fangsten er ikke hans.',
brief:'Kl. 05:10 fandt en auktionsmedarbejder skipper Jens Kutter død i et kar med is og torsk. Jens havde opdaget, at nogen solgte ulovligt fanget fisk under hans bådnummer.',
options:[['Bo Hav, bådejer','Kim Fisk, auktionarius','Anne Kutter, datter','Per Lund, opkøber'],['Fiskekrog','Drukning i iskar','Slag med is-skovl'],['Kølehallen','Kajen','Auktionshallen']],answer:[3,2,0],
info:[['Bådejer. Fisker samme sted som Jens.','Auktionarius.','Jens’ datter og styrmand.','Opkøber. Køber fisk til eksport.'],
['Stor fiskekrog af stål.','Kar med iskoldt vand.','Bred skovl til at skovle is.'],
['Kold hal med is og kasser.','Kajen ved bådene.','Hallen hvor fisken sælges. Her blev han fundet.']],
timeline:[['03:00','Bådene lægger til.'],['03:45','Jens konfronterer to mænd.'],['04:00','Auktionen begynder.'],['05:10','Jens findes.']],
sketch:{title:'Auktionshallen · fundsted',items:[['crate',100,80,60,40,0],['crate',200,80,60,40,0],['crate',300,80,60,40,0],['barrel',200,190,50,50,0,'Iskar']],body:[200,190,0,.7],markers:[[1,250,170,'Salt på jakken']]},
evidence:[[
{type:'audio',style:'radio',kind:'Radiolog',label:'Havnens VHF',meta:'03:40–03:42',lines:[['Jens Kutter','Havnekontoret, det er Jens. Nogen bruger mit bådnummer. Det er Bo eller Per, de er de eneste, der har set mine papirer. Jeg tager snakken med dem nu.'],['Havnekontoret','Modtaget, Jens. Pas på dig selv.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 05:40',text:'Bred, flad skade i baghovedet fra noget tungt, eller tegn på drukning: der er vand i lungerne. Ingen stik fra en krog. Han døde mellem 03:45 og 04:20.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Jens’ oliebukser',bg:'deck',stamp:'K-3510 / 02',items:[['stain',100,90,1.4,0,'#e8eef2'],['stain',220,100,1.2,0,'#555']],caption:'Iskrystaller og rust fra kølehallens reoler. Rust er der også på kajen. Auktionshallens gulv er rent og vasket: han døde ikke der.'}
],[
{type:'cctv',kind:'Overvågning',title:'Bo Havs båd',date:'09-10',camera:'BÅD "HAVØRN"',doors:[[160,'STYREHUS']],cast:[['Bådejer i grøn oliejakke','#3e7b46']],frames:[{t:'03:45:00',at:[[50,.2]],txt:'Bo losser fisk med kranen.'},{t:'04:05:00',at:[[55,.2]],txt:'Stadig ved kranen.'},{t:'04:25:00',at:[[50,.2]],txt:'Lukker lastrummet.'}],text:'Bo Hav er på sin båd fra 03:30 til 04:30.'},
{type:'doc',kind:'Supplerende obduktion',title:'Lungerne',src:'Retsmedicinsk Institut',text:'Vandet i lungerne er kommet efter døden, da han lå i karret. Dødsårsagen er slaget mod hovedet.'},
{type:'doc',kind:'Rapport',title:'Kajen',src:'Havnefogeden',text:'Kajen var oplyst og fuld af folk, der lossede, hele natten. Havnens kameraer viser ikke Jens på kajen efter kl. 03:40.'}
]],
epilogue:'Per Lund købte ulovligt fanget fisk og solgte den under Jens’ bådnummer. I kølehallen sagde Jens, at han ville gå til fiskerikontrollen. Per greb en is-skovl og slog. Han kørte liget ind i auktionshallen og lagde det i iskarret, så det skulle ligne en drukning.',
headline:'Opkøber anholdt for drab på fiskeauktion'});
