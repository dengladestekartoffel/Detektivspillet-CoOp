'use strict';
// Sagsbunke 7.

KK.push({nr:69,theme:'Domkirke',no:'K-3801',title:'Orgelpunkt',when:'Søndag 13. december · ca. 16:30',where:'Ribe Domkirke',
victim:'Asger Hvid (63), domorganist',victimLook:{sex:'m',hair:'curly',hc:'hvid',age:'old',glasses:true,shirt:'#111111',collar:'shirt'},
intro:'Domorganisten findes død ved orglet efter julekoncerten. Det sidste akkord hang i luften.',
brief:'Kl. 17:10 fandt en kirketjener domorganist Asger Hvid død på orgelpulpituret. Asger havde opdaget, at sølvkalken fra 1600-tallet var byttet ud med en kopi.',
options:[['Karen Lund, kirketjener','Bent Skov, menighedsrådsformand','Ida Hvid, datter','Morten Ry, præst'],['Orgelpibe (slag)','Kvælning med stola','Gift i altervin'],['Orgelpulpituret','Sakristiet','Klokketårnet']],answer:[1,0,1],
info:[['Kirketjener. Har nøgle til sakristiet.','Formand for menighedsrådet. Har nøgle til sakristiet.','Asgers datter. Sang i koret.','Præst.'],
['Løs metalpibe fra orglet.','Præstens stola.','Altervin i sakristiet.'],
['Pulpituret med orglet. Her blev han fundet.','Sakristiet med sølv og kjoler.','Tårnet med klokker.']],
timeline:[['15:00','Julekoncert.'],['16:15','Koncerten slutter.'],['16:20','Asger beder to om en snak.'],['17:10','Asger findes.']],
sketch:{title:'Orgelpulpituret · fundsted',items:[['shelf',200,40,300,30,0,'Orgelpiber'],['desk',200,110,140,30,0,'Spillebord'],['stairs',360,180,30,60,0]],body:[200,180,60,.85],markers:[[1,240,160,'Sølvpudsemiddel']]},
evidence:[[
{type:'doc',style:'note',kind:'Seddel',title:'I Asgers nodemappe',text:'Kalken er falsk! Kun Karen og Bent har nøgle til sølvskabet.\nTaler med dem efter koncerten. – A.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 17:40',text:'Rundt slag mod tindingen fra et metalrør, eller mærker om halsen fra stof. Ingen tegn på gift. Han døde mellem 16:20 og 16:50.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Asgers hænder',bg:'stone',stamp:'K-3801 / 03',items:[['stain',100,90,1.4,0,'#c9ccd0'],['stain',220,100,1.2,0,'#f2e0a0']],caption:'Sølvpudsemiddel og stearin. Sølvpuds findes i sakristiet, men pulpiturets messinglamper pudses også. Ingen rust og duestøv fra tårnet.'}
],[
{type:'audio',style:'voicemail',kind:'Vidneforklaring',label:'Korets dirigent',meta:'Optaget 13.12 kl. 18:00',lines:[['Dirigent','Karen hjalp mig med at rydde op i kirkeskibet fra kvart over fire til fem. Hun var ved min side hele tiden.'],['Betjent','Gik hun op på pulpituret?'],['Dirigent','Nej, aldrig.']]},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne er fra hans eget halstørklæde. Han døde af slaget, og der er tinspor fra en orgelpibe i såret.'},
{type:'doc',kind:'Rapport',title:'Orgelpulpituret',src:'Kriminalteknisk Center',text:'Der er ingen blod på pulpituret ud over under liget. Han er båret op ad trappen fra sakristiet, der ligger lige under.'}
]],
epilogue:'Bent Skov havde solgt den ægte kalk til en samler. I sakristiet viste Asger ham kopien. Bent slog ham med en løs orgelpibe, som lå til reparation, og bar ham op på pulpituret.',
headline:'Menighedsrådsformand anholdt for drab i domkirke'});

KK.push({nr:70,theme:'Urmager',no:'K-3802',title:'Tiden er gået',when:'Tirsdag 3. marts · ca. 18:00',where:'Urmager Kronholm, Svendborg',
victim:'Valdemar Kronholm (79), urmager',victimLook:{sex:'m',hair:'bald',hc:'hvid',age:'old',glasses:true,shirt:'#5a3a22',collar:'shirt'},
intro:'Den gamle urmager findes død i sit værksted. Alle urene står stille kl. 17:42.',
brief:'Kl. 18:30 fandt en kunde urmager Valdemar Kronholm død. Alle urene i butikken var stoppet kl. 17:42. Valdemar ejede et sjældent lommeur til 4 mio. kr., som nu var væk.',
options:[['Jeppe Lund, lærling','Hanne Kronholm, niece','Vagn Bøg, samler','Lis Kjær, nabo'],['Urmagerhammer','Gift i te','Kvælning med urkæde'],['Værkstedet','Butikken','Kælderen']],answer:[2,2,2],
info:[['Lærling.','Niece. Arving.','Samler. Har budt på lommeuret.','Nabo.'],
['Lille hammer.','Te.','Urkæde i guld.'],
['Værksted med lup og værktøj. Her blev han fundet.','Butikken med ure.','Kælder med pengeskab.']],
timeline:[['16:00','Valdemar viser lommeuret til to.'],['17:30','Butikken lukker.'],['17:42','Urene stopper.'],['18:30','Valdemar findes.']],
sketch:{title:'Værkstedet · fundsted',items:[['desk',200,60,180,40,0,'Arbejdsbord'],['shelf',40,130,20,160,0,'Ure']],body:[200,160,30,.85],markers:[[1,240,140,'Støv fra kælder']]},
evidence:[[
{type:'doc',style:'table',kind:'Kundebog',title:'Værkstedets aftaler',rows:[['Tid','Hvem','Formål'],['16:00','Vagn Bøg','Se lommeuret'],['16:10','Hanne Kronholm','Se lommeuret']],after:'Kun Vagn og Hanne har set, hvor lommeuret lå.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 19:00',text:'Røde striber om halsen fra en fin kæde, eller et lille slag på hovedet. Ingen tegn på gift. Han døde ca. 17:40, da han rev urenes hovedafbryder med i faldet.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Valdemars forklæde',bg:'stone',stamp:'K-3802 / 02',items:[['stain',100,90,1.4,0,'#888'],['coin',220,100,1.2,0,'#c9a43a']],caption:'Kældertøv og fugt. Han har været i kælderen, men også i butikken, hvor kælderstøvet blev båret op. Værkstedets gulv er rent: han blev båret derind.'}
],[
{type:'doc',style:'receipt',kind:'Kvittering',title:'Hannes togbillet',shop:'DSB',rows:[['17:15','Svendborg → Odense'],['17:58','Ankomst Odense']],text:'Hanne sad i toget hele tiden. Billetkontrollen bekræfter.'},
{type:'doc',kind:'Supplerende obduktion',title:'Hovedet',src:'Retsmedicinsk Institut',text:'Bulen er fra faldet. Han døde af kvælning med en tynd guldkæde.'},
{type:'doc',kind:'Rapport',title:'Butikken',src:'Nabo',text:'Butikken var lys, og jeg kunne se ind fra min dør hele tiden. Valdemar var ikke i butikken efter lukketid.'}
]],
epilogue:'Vagn Bøg kom tilbage efter lukketid for at købe lommeuret. Valdemar nægtede at sælge. I kælderen ved pengeskabet kvalte Vagn ham med en urkæde. Han bar ham op i værkstedet og tog uret.',
headline:'Samler anholdt for drab på urmager'});

KK.push({nr:71,theme:'Glaspusteri',no:'K-3803',title:'Knust glas',when:'Fredag 16. oktober · ca. 14:00',where:'Glaspusteriet Ebeltoft',
victim:'Sigrun Ebbe (55), glaskunstner',victimLook:{sex:'f',hair:'curly',hc:'rød',shirt:'#d46a1f',collar:'v'},
intro:'En glaskunstner findes død ved ovnen. Hendes mesterværk er knust.',
brief:'Kl. 14:40 fandt en elev glaskunstner Sigrun Ebbe død i værkstedet. Hendes store glasskulptur til Operaen lå knust. Sigrun havde opdaget, at nogen havde solgt kopier af hendes værker.',
options:[['Niels Brun, assistent','Freja Lind, galleriejer','Kasper Ebbe, søn','Ulla Moe, elev'],['Glaspusterrør','Hed glasklump','Kvælning'],['Ovnrummet','Showroomet','Lageret']],answer:[1,0,1],
info:[['Assistent.','Galleriejer. Sælger Sigruns værker.','Søn.','Elev.'],
['Langt rør af metal.','Glødende glas.','Med hænderne.'],
['Rummet med ovnen. Her blev hun fundet.','Showroom med færdige værker.','Lager med kasser.']],
timeline:[['12:00','Sigrun arbejder.'],['13:15','Sigrun beder to om en snak.'],['13:30','Sigrun ses sidst.'],['14:40','Sigrun findes.']],
sketch:{title:'Ovnrummet · fundsted',items:[['stove',200,60,100,60,0,'Ovn'],['table',200,170,120,40,0]],body:[300,170,80,.85],markers:[[1,250,150,'Glasstøv']]},
evidence:[[
{type:'doc',style:'letter',kind:'Mail',title:'Sigruns mail 13:15',text:'Niels og Freja: kopierne har mine signaturer. Kun I to har set mine skitser. Kom straks.\nSigrun'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 15:10',text:'Kraftigt slag mod hovedet med noget langt af metal, eller forbrænding fra hedt glas. Ingen kvælningsmærker. Hun døde mellem 13:30 og 14:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Sigruns forklæde',bg:'paper',stamp:'K-3803 / 03',items:[['stain',100,90,1.4,0,'#cfe0f0'],['paper',220,100,1.2,0]],caption:'Glasstøv og prismærker. Prismærker sidder på værker i showroomet og på lageret. Ovnrummet har ingen prismærker.'}
],[
{type:'cctv',kind:'Overvågning',title:'Undervisningsværkstedet',date:'16-10',camera:'VÆRKSTED 2',doors:[[160,'DØR']],cast:[['Assistent med hættetrøje','#3e7b46']],frames:[{t:'13:30:00',at:[[50,.3]],txt:'Niels underviser turister.'},{t:'13:45:00',at:[[50,.3]],txt:'Stadig.'},{t:'14:00:00',at:[[50,.3]],txt:'Stadig.'}],text:'Niels Brun underviser fra 13:20 til 14:30.'},
{type:'doc',kind:'Supplerende obduktion',title:'Forbrændingen',src:'Retsmedicinsk Institut',text:'Der er ingen forbrænding. Hun døde af slaget fra et metalrør.'},
{type:'doc',kind:'Rapport',title:'Lageret',src:'Kriminalteknisk Center',text:'Lageret var låst. Nøglen hang i ovnrummet hele dagen.'}
]],
epilogue:'Freja Lind havde solgt kopier af Sigruns værker. I showroomet sagde Sigrun, at hun ville sagsøge hende. Freja slog hende med et glaspusterrør og bar hende ind til ovnen.',
headline:'Galleriejer anholdt for drab i glaspusteri'});

KK.push({nr:72,theme:'Savværk',no:'K-3804',title:'Splint',when:'Onsdag 18. november · ca. 15:00',where:'Rold Savværk, Himmerland',
victim:'Torben Rold (60), savværksejer',victimLook:{sex:'m',hair:'short',hc:'grå',beard:'full',age:'old',shirt:'#a3231b',collar:'shirt'},
intro:'Savværkets ejer findes død under en stak brædder. Det skulle ligne en arbejdsulykke.',
brief:'Kl. 15:50 fandt en medarbejder ejer Torben Rold død under en væltet stak brædder. Torben havde opdaget, at nogen solgte tømmer bag hans ryg.',
options:[['Jens Bak, formand','Kirsten Lund, bogholder','Mads Rold, søn','Ali Yilmaz, truckfører'],['Væltet tømmerstak','Økse','Slag med kævle'],['Savhallen','Tørreovnen','Kontoret']],answer:[0,2,0],
info:[['Formand på savværket.','Bogholder.','Søn.','Truckfører.'],
['Stak brædder.','Økse.','Rund kævle.'],
['Savhallen. Her blev han fundet.','Tørreovn til træ.','Kontoret.']],
timeline:[['14:00','Torben beder to om en snak.'],['14:30','Torben ses sidst.'],['15:00','Larm i hallen.'],['15:50','Torben findes.']],
sketch:{title:'Savhallen · fundsted',items:[['crate',200,80,200,40,0,'Tømmer'],['table',100,200,100,30,0,'Sav']],body:[200,150,90,.85],markers:[[1,250,130,'Savsmuld']]},
evidence:[[
{type:'doc',style:'table',kind:'Salgsliste',title:'Tømmersalg uden faktura',rows:[['Dato','Godkendt af'],['02.11','J. Bak'],['09.11','K. Lund'],['14.11','J. Bak']],after:'Torben skrev: "Jens og Kirsten, mød mig i dag."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 16:20',text:'Ingen knusningsskader: stakken er væltet efter døden. Rundt slag mod hovedet fra noget rundt og tungt, eller et hug. Han døde mellem 14:30 og 15:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Torbens jakke',bg:'wood',stamp:'K-3804 / 03',items:[['stain',100,90,1.4,0,'#d9c294'],['stain',220,100,1.2,0,'#8a6a3a']],caption:'Frisk savsmuld og bark. Det er der i savhallen og ved tørreovnen. Kontoret har ingen savsmuld.'}
],[
{type:'doc',style:'table',kind:'Telefonmøde',title:'Kirstens møde',rows:[['Tid','Hvem'],['14:20–15:10','Kirsten Lund · telefonmøde med revisor fra kontoret']],after:'Revisoren bekræfter.'},
{type:'doc',kind:'Supplerende obduktion',title:'Såret',src:'Retsmedicinsk Institut',text:'Såret har bark i bunden og er rundt. Det er en kævle, ikke en økse.'},
{type:'doc',kind:'Rapport',title:'Tørreovnen',src:'Formanden for tørreovnen',text:'Tørreovnen var tændt og lukket hele dagen med 70 grader. Ingen gik ind.'}
]],
epilogue:'Jens Bak havde solgt tømmer sort i et år. I savhallen konfronterede Torben ham. Jens slog ham med en kævle og væltede en tømmerstak over ham, så det skulle ligne en ulykke.',
headline:'Formand anholdt for drab på savværk'});

KK.push({nr:73,theme:'Hundeudstilling',no:'K-3805',title:'Best in show',when:'Lørdag 25. april · ca. 13:00',where:'Hundeudstilling, Herning Kongrescenter',
victim:'Benedicte Holm (58), dommer',victimLook:{sex:'f',hair:'bob',hc:'grå',glasses:true,age:'old',shirt:'#3e5b46',collar:'shirt'},
intro:'Udstillingens dommer findes død før finalen. En hund har vundet for mange gange.',
brief:'Kl. 13:30 fandt en ringhjælper dommer Benedicte Holm død i dommerrummet. Hun havde opdaget, at nogen havde bestukket dommere for at lade samme puddel vinde igen og igen.',
options:[['Lise Ras, puddelejer','Kim Bo, arrangør','Maria Fisk, frisør','Hans Holm, ægtemand'],['Gift i kaffe','Kvælning med hundesnor','Slag med pokal'],['Dommerrummet','Trimningsområdet','Arrangørkontoret']],answer:[0,1,1],
info:[['Puddelejer. Har vundet 9 gange.','Arrangør.','Hundefrisør.','Benedictes mand.'],
['Kaffe.','Lædersnor.','Messingpokal.'],
['Dommerrummet. Her blev hun fundet.','Område hvor hundene klippes.','Arrangørens kontor.']],
timeline:[['10:00','Udstilling.'],['12:15','Benedicte beder to om en snak.'],['12:30','Benedicte ses sidst.'],['13:30','Benedicte findes.']],
sketch:{title:'Dommerrummet · fundsted',items:[['table',200,100,140,60,0],['chair',200,150]],body:[200,190,70,.85],markers:[[1,240,170,'Pudelhår']]},
evidence:[[
{type:'doc',style:'note',kind:'Seddel',title:'Benedictes notat',text:'Bestikkelse! Pengene kom fra Lise eller Kim. Taler med begge kl. 12:15.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 14:00',text:'Mærker om halsen fra en snor, men også en bule fra noget hårdt af metal. Ingen tegn på gift. Hun døde mellem 12:30 og 13:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Benedictes jakke',bg:'tile',stamp:'K-3805 / 02',items:[['stain',100,90,1.4,0,'#f2f2f2'],['stain',220,100,1.2,0,'#d8c27a']],caption:'Hvidt puddelhår og hårspray. Hundehår er der i trimningsområdet og på kontoret, hvor hunde ofte venter. Dommerrummet er hårfrit og nyrengjort.'}
],[
{type:'cctv',kind:'Overvågning',title:'Hovedringen',date:'25-04',camera:'RING 1',doors:[[160,'RING']],cast:[['Arrangør med mikrofon','#2f3b55']],frames:[{t:'12:30:00',at:[[50,.2]],txt:'Kim speaker i ringen.'},{t:'12:45:00',at:[[50,.2]],txt:'Stadig.'},{t:'13:00:00',at:[[55,.2]],txt:'Stadig.'}],text:'Kim Bo speaker fra 12:20 til 13:10.'},
{type:'doc',kind:'Supplerende obduktion',title:'Bulen',src:'Retsmedicinsk Institut',text:'Bulen er fra faldet. Dødsårsagen er kvælning med en snor.'},
{type:'doc',kind:'Rapport',title:'Arrangørkontoret',src:'Sekretær',text:'Jeg sad på arrangørkontoret hele tiden. Ingen kom ind.'}
]],
epilogue:'Lise Ras havde bestukket dommere for at hendes puddel kunne vinde. I trimningsområdet sagde Benedicte, at hun ville udelukke hende. Lise kvalte hende med en hundesnor og bar hende til dommerrummet.',
headline:'Puddelejer anholdt for drab på hundeudstilling'});

KK.push({nr:74,theme:'Akvarium',no:'K-3806',title:'Hajtanken',when:'Torsdag 6. februar · ca. 08:00',where:'Havets Hus, Kastrup',
victim:'Dr. Morten Fisker (51), havbiolog',victimLook:{sex:'m',hair:'short',hc:'brun',glasses:true,shirt:'#1f4e8a',collar:'shirt'},
intro:'En havbiolog findes død i det store hajakvarium. Hajerne har ikke rørt ham.',
brief:'Kl. 08:30, før åbning, så en dykker havbiolog Morten Fisker flyde i hajtanken. Morten havde opdaget, at sjældne koralrev var solgt ulovligt fra akvariet.',
options:[['Jonna Krag, dykker','Rasmus Holt, direktør','Lea Fisker, hustru','Simon Bay, akvarist'],['Drukning','Slag med iltflaske','Gift (blæksprutte)'],['Hajtanken','Filterrummet','Laboratoriet']],answer:[3,1,2],
info:[['Dykker. Fodrer hajerne.','Direktør.','Mortens kone.','Akvarist. Passer korallerne.'],
['Holdt under vand.','Lille stålflaske med ilt.','Gift fra en blåringet blæksprutte i laboratoriet.'],
['Det store akvarium. Her blev han fundet.','Rum med pumper og filtre.','Laboratoriet med mikroskoper.']],
timeline:[['06:30','Morten kommer ind.'],['07:00','Morten sender en besked.'],['07:15','Morten ses sidst.'],['08:30','Morten findes.']],
sketch:{title:'Hajtanken · fundsted',items:[['rug',200,130,320,180,0,'Vand'],['stairs',360,40,30,40,0]],body:[200,130,30,.85],markers:[[1,240,110,'Laboratoriekittel']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Mortens telefon (vandtæt)',owner:'Morten Fisker',lockTime:'08:35',wall:'linear-gradient(160deg,#0b2a3a,#2a8ab0)',msgs:[{with:'Rasmus + Simon',m:[['me','07:00','Koralrevene er solgt. I to har underskrevet papirerne. Jeg venter.'],['them','07:02','Ok. (Simon)']]}],maps:[['07:10','Havets Hus · Filterrum (eller gangen ved siden af)'],['07:20','Havets Hus · Laboratoriet'],['07:40','Havets Hus · Hajtank']]},
{type:'autopsy',kind:'Obduktion',title:'Obduktionserklæring',jnr:'RM-0206/34',fields:[['Afdøde','Morten Fisker'],['Obducent','Overlæge Eva Strand'],['Anslået dødstidspunkt','Kl. 07:15–07:40']],sections:[['Udvendige fund','Ingen bid. Bule på baghovedet fra et slag med noget rundt og tungt. Et lille stikmærke på hånden.'],['Indvendige fund','Ingen vand i lungerne: han druknede ikke. Det lille stik kan være fra et giftigt dyr, men det kan også være fra en koral.']],marks:[[60,12,'1'],[100,135,'2']],signer:'Eva Strand, overlæge'},
{type:'doc',kind:'Rapport',title:'Note om telefonens placering',src:'Kriminalteknisk Center',text:'Telefonen registrerede sidst bevægelse kl. 07:20 i laboratoriet. Signalet fra hajtanken kl. 07:40 er efter døden: den lå i hans lomme, da han blev smidt i vandet.'}
],[
{type:'cctv',kind:'Overvågning',title:'Direktionsgangen',date:'06-02',camera:'KONTOR',doors:[[160,'DIREKTØR']],cast:[['Direktør i jakkesæt','#2f3b55']],frames:[{t:'07:10:00',at:[[50,.3]],txt:'Direktøren kommer ind og tænder computeren.'},{t:'07:30:00',at:[[50,.3]],txt:'Videomøde med Japan.'},{t:'07:50:00',at:[[50,.3]],txt:'Stadig.'}],text:'Rasmus Holt er på sit kontor fra 07:05 til 08:20.'},
{type:'doc',kind:'Supplerende obduktion',title:'Stikmærket',src:'Retsmedicinsk Institut',text:'Stikket er fra en koral og ikke giftigt. Han døde af slaget mod hovedet med en iltflaske.'},
{type:'computer',kind:'Computer',title:'Filterrummets styring',owner:'Havets Hus',user:'Filter',password:'manta',hint:'Det største dyr i akvariet.',files:[{name:'Adgang 06.02',time:'08:00',body:'07:05–07:45 Filterrummet låst (vedligehold)\nIngen åbninger.'}]},
{type:'doc',style:'note',kind:'Seddel',title:'På filterrummets dør',text:'Kode: manta\n– teknik'}
]],
epilogue:'Simon Bay havde solgt korallerne til samlere i udlandet. I laboratoriet sagde Morten, at han ville anmelde det. Simon slog ham med en lille iltflaske. Han slæbte liget til hajtanken og smed det i, så det skulle ligne en ulykke.',
headline:'Akvarist anholdt for drab i hajtank'});

KK.push({nr:75,theme:'Landbrug',no:'K-3807',title:'Høst',when:'Tirsdag 18. august · ca. 21:00',where:'Nørregaard, Thy',
victim:'Erling Nørgaard (68), landmand',victimLook:{sex:'m',hair:'short',hc:'grå',beard:'stubble',age:'old',shirt:'#3e5b46',collar:'shirt'},
intro:'En gammel landmand findes død i laden midt i høsten. Mejetærskeren står stille.',
brief:'Kl. 21:40 fandt en nabo landmand Erling Nørgaard død i laden. Erling skulle samme uge skrive under på, at gården skulle gå til hans barnebarn i stedet for hans to sønner.',
options:[['Poul Nørgaard, søn','Karl Nørgaard, søn','Tina Nørgaard, svigerdatter','Anders Bak, nabo'],['Høtyv','Gødning (gift)','Traktorhjul'],['Laden','Maskinhuset','Kostalden']],answer:[1,0,1],
info:[['Ældste søn. Kører mejetærskeren.','Yngste søn. Driver svineproduktionen.','Svigerdatter.','Nabo. Vil købe jorden.'],
['Gammel høtyv.','Gift fra gødningssække.','Traktor kørt ind i ham.'],
['Laden. Her blev han fundet.','Hus med traktorer og værktøj.','Stald med køer.']],
timeline:[['19:00','Høst.'],['20:00','Erling fortæller om testamentet.'],['20:15','Erling ses sidst.'],['21:40','Erling findes.']],
sketch:{title:'Laden · fundsted',items:[['crate',100,80,60,40,0,'Halmballer'],['crate',300,80,60,40,0],['door',180,248,40,0,180]],body:[200,170,20,.85],markers:[[1,240,150,'Diesel på jakken']]},
evidence:[[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Erlings diktafon',meta:'20:05',lines:[['Erling Nørgaard','Poul og Karl. I får ikke gården. Det er Mikkel, der skal have den.'],['Erling Nørgaard','I er sure, det forstår jeg. Kom ud i maskinhuset, så taler vi.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 22:10',text:'Tre små stikmærker i ryggen fra noget med tænder, eller en knusningsskade på brystet. Ingen tegn på gift. Han døde mellem 20:15 og 20:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Erlings jakke',bg:'wood',stamp:'K-3807 / 02',items:[['stain',100,90,1.4,0,'#3a3a3a'],['stain',220,100,1.2,0,'#8a6a3a']],caption:'Diesel og mudder. Diesel er der i maskinhuset og i kostalden, hvor der står en gammel traktor. Laden er ren med halm, og ingen diesel.'}
],[
{type:'cctv',kind:'Overvågning',title:'Mejetærskerens kamera',date:'18-08',camera:'MEJETÆRSKER',doors:[],cast:[['Fører','#d8b53e']],frames:[{t:'20:15:00',at:[[50,.3]],txt:'Poul kører på marken.'},{t:'20:30:00',at:[[50,.3]],txt:'Stadig på marken.'},{t:'20:50:00',at:[[50,.3]],txt:'Stadig.'}],text:'Poul kører mejetærsker på marken 3 km væk fra 20:10 til 21:30.'},
{type:'doc',kind:'Supplerende obduktion',title:'Brystet',src:'Retsmedicinsk Institut',text:'Ingen knusning. Han døde af stik fra en høtyv.'},
{type:'doc',kind:'Rapport',title:'Kostalden',src:'Dyrlægen',text:'Jeg var i kostalden fra 20:00 til 21:00 med en syg ko. Erling kom ikke derind.'}
]],
epilogue:'Karl Nørgaard havde regnet med at overtage gården. I maskinhuset sagde Erling, at det var slut. Karl greb en gammel høtyv fra væggen og stak. Han bar sin far over i laden.',
headline:'Søn anholdt for drab på gård i Thy'});

KK.push({nr:76,theme:'Keramik',no:'K-3808',title:'Brændt',when:'Søndag 2. maj · ca. 11:00',where:'Keramikværkstedet Ler & Ild, Bornholm',
victim:'Hanne Klint (59), keramiker',victimLook:{sex:'f',hair:'bun',hc:'grå',age:'old',shirt:'#8a5a2b',collar:'v'},
intro:'En kendt keramiker findes død ved drejeskiven. Hendes værker er solgt under en andens navn.',
brief:'Kl. 11:30 fandt en kunde keramiker Hanne Klint død i værkstedet. Hanne havde opdaget, at nogen solgte hendes keramik i København under et andet navn.',
options:[['Søren Holm, elev','Bodil Krag, galleriejer','Line Klint, datter','Morten Ask, nabo'],['Slag med lerkrukke','Ovnens gas','Kvælning med forklæde'],['Værkstedet','Ovnhuset','Butikken']],answer:[0,0,1],
info:[['Elev i tre år.','Galleriejer i København.','Datter.','Nabo.'],
['Tung lerkrukke.','Ovnen kører på gas.','Forklæde.'],
['Værksted med drejeskive. Her blev hun fundet.','Hus med ovnen.','Lille butik.']],
timeline:[['09:00','Hanne begynder at arbejde.'],['10:00','Hanne ringer til to.'],['10:30','Hanne ses sidst.'],['11:30','Hanne findes.']],
sketch:{title:'Værkstedet · fundsted',items:[['roundtable',200,100,60,60,0,'Drejeskive'],['shelf',40,130,20,160,0],['table',300,200,100,30,0]],body:[200,180,40,.85],markers:[[1,240,160,'Glasur-pulver']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Hannes telefon',owner:'Hanne Klint',pin:'0205',pinHint:'Dagens dato (ddmm).',lockTime:'11:35',wall:'linear-gradient(160deg,#8a5a2b,#e9d4a6)',calls:[['Søren Holm','10:02','out','2 min'],['Bodil Krag','10:05','out','3 min']],notes:[['Mistanke','Søren eller Bodil. Kun de to har haft adgang til mine skitser. Taler med begge i dag.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 12:00',text:'Slag mod hovedet med noget tungt af ler, og huden er let rødlig, som kan være fra gas. Ingen mærker om halsen. Hun døde mellem 10:30 og 11:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Hannes forklæde',bg:'stone',stamp:'K-3808 / 02',items:[['stain',100,90,1.4,0,'#7ab0d8'],['stain',220,100,1.2,0,'#555']],caption:'Glasurpulver og sod. Glasur findes i ovnhuset og i butikken, hvor nyglaserede ting står. Værkstedet har ler, men ingen glasur eller sod.'}
],[
{type:'doc',style:'receipt',kind:'Kvittering',title:'Bodils færgebillet',shop:'Bornholmslinjen',rows:[['08:30','Rønne → Ystad'],['09:50','Ankomst Ystad']],text:'Bodil var på færgen og derefter på vej til København.'},
{type:'doc',kind:'Supplerende obduktion',title:'Huden',src:'Retsmedicinsk Institut',text:'Den rødlige hud skyldes varmen fra ovnen. Hun døde af slaget med en lerkrukke.'},
{type:'doc',kind:'Rapport',title:'Butikken',src:'Kunde',text:'Jeg stod i butikken fra kvart over ti og ventede på Hanne. Hun kom aldrig ind.'}
]],
epilogue:'Søren Holm havde solgt Hannes værker under sit eget navn. I ovnhuset sagde hun, at han var færdig som elev. Søren slog hende med en tung lerkrukke og bar hende ind til drejeskiven.',
headline:'Keramikelev anholdt for drab på Bornholm'});

KK.push({nr:77,theme:'Smedje',no:'K-3809',title:'Ambolten',when:'Fredag 24. september · ca. 16:00',where:'Smedjen i Gammel Estrup',
victim:'Gunnar Smed (66), kunstsmed',victimLook:{sex:'m',hair:'bald',hc:'grå',beard:'full',age:'old',shirt:'#3a3a3a',collar:'round'},
intro:'Kunstsmeden findes død ved essen. En kopi af et gammelt sværd er forsvundet.',
brief:'Kl. 16:30 fandt en turist kunstsmed Gunnar Smed død ved ambolten. Gunnar havde lavet en kopi af et vikingesværd til et museum. Han havde opdaget, at nogen ville sælge hans kopi som ægte.',
options:[['Jonas Bach, lærling','Karin Holm, museumsinspektør','Per Smed, søn','Ulla Lind, antikvitetshandler'],['Smedehammer','Kvælning med kæde','Gløder (forbrænding)'],['Smedjen','Lageret','Museumsbutikken']],answer:[3,0,2],
info:[['Lærling.','Museumsinspektør.','Søn.','Antikvitetshandler.'],
['Stor smedehammer.','Jernkæde.','Gløder fra essen.'],
['Smedjen. Her blev han fundet.','Lager med jern.','Museets butik.']],
timeline:[['14:00','Smededemonstration.'],['15:00','Gunnar konfronterer to.'],['15:30','Gunnar ses sidst.'],['16:30','Gunnar findes.']],
sketch:{title:'Smedjen · fundsted',items:[['stove',200,60,80,50,0,'Esse'],['table',200,140,60,30,0,'Ambolt']],body:[200,200,80,.85],markers:[[1,240,180,'Prismærke']]},
evidence:[[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Turistens video fra demonstrationen',meta:'15:02',lines:[['Gunnar Smed','Mit sværd er en kopi! Og nogen vil sælge det som ægte. Ulla og Karin, I ved godt, hvem jeg mener.'],['Turist','Uh, drama!'],['Gunnar Smed','Vi tager det bagefter. Kom ind til mig.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 17:00',text:'Kraftigt slag mod hovedet med noget tungt af jern, eller mærker om halsen fra en kæde. Ingen forbrændinger. Han døde mellem 15:30 og 16:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Gunnars forklæde',bg:'stone',stamp:'K-3809 / 03',items:[['ticket',100,90,1.4,0],['paper',220,100,1.2,0]],caption:'Prismærke og papirstøv. Prismærker bruges i museumsbutikken og på lageret, hvor varer mærkes. Smedjen har ingen prismærker.'}
],[
{type:'cctv',kind:'Overvågning',title:'Museets foredragssal',date:'24-09',camera:'SAL',doors:[[160,'PODIE']],cast:[['Inspektør med pegepind','#5b3f66']],frames:[{t:'15:30:00',at:[[50,.2]],txt:'Karin holder foredrag om vikinger.'},{t:'15:45:00',at:[[50,.2]],txt:'Stadig.'},{t:'16:00:00',at:[[50,.2]],txt:'Spørgsmål.'}],text:'Karin Holm holder foredrag fra 15:20 til 16:10.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne er fra hans læderforklædes rem. Han døde af slaget med en smedehammer.'},
{type:'doc',kind:'Rapport',title:'Lageret',src:'Lagermand',text:'Jeg talte jern på lageret fra 15:00 til 16:30. Gunnar kom ikke.'}
]],
epilogue:'Ulla Lind ville sælge Gunnars kopi som et ægte vikingesværd til en samler. I museumsbutikken nægtede Gunnar at tie. Ulla greb en smedehammer, der var udstillet, og slog. Hun bar ham ind i smedjen.',
headline:'Antikvitetshandler anholdt for drab i smedje'});

KK.push({nr:78,theme:'Kirkegård',no:'K-3810',title:'Den åbne grav',when:'Mandag 2. november · ca. 07:30',where:'Assistens Kirkegård, Odense',
victim:'Ib Graver (62), graver',victimLook:{sex:'m',hair:'short',hc:'grå',beard:'stubble',age:'old',shirt:'#3e5b46',collar:'shirt'},
intro:'Kirkegårdens graver findes død i en åben grav. Han havde selv gravet den.',
brief:'Kl. 08:10 fandt en gartner graver Ib Graver død i en grav, der skulle bruges til en begravelse samme dag. Ib havde opdaget, at nogen solgte gravsten fra nedlagte grave.',
options:[['Rikke Bo, gartner','Svend Ask, kirkegårdsleder','Mona Graver, hustru','Lars Fisk, stenhugger'],['Skovl','Kvælning med reb','Gift i termokaffe'],['Den åbne grav','Redskabsskuret','Stenhuggerværkstedet']],answer:[3,0,2],
info:[['Gartner.','Kirkegårdsleder.','Ibs kone.','Stenhugger. Laver nye gravsten.'],
['Graverens skovl.','Reb til at sænke kister.','Kaffe.'],
['Den åbne grav. Her blev han fundet.','Skur med redskaber.','Stenhuggerens værksted.']],
timeline:[['06:00','Ib graver graven færdig.'],['06:45','Ib beder to om en snak.'],['07:00','Ib ses sidst.'],['08:10','Ib findes.']],
sketch:{title:'Den åbne grav · fundsted',items:[['rug',200,130,80,160,0,'Grav'],['tree',80,60,30,30,0],['tree',320,200,30,30,0]],body:[200,130,0,.6],markers:[[1,240,100,'Stenstøv']]},
evidence:[[
{type:'computer',kind:'Computer',title:'Kirkegårdskontorets pc',owner:'Kirkegården',user:'Kontor',password:'Assistens',hint:'Kirkegårdens navn med stort forbogstav.',mail:[{from:'Ib Graver',to:'Svend Ask; Lars Fisk',time:'06:45',subject:'Gravstenene',body:'Gamle gravsten er solgt. Kun I to har haft adgang til lageret med de nedlagte sten. Mød mig ved den nye grav.'}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 08:40',text:'Kraftigt slag mod hovedet med noget bredt og fladt af metal, eller mærker om halsen fra et reb. Ingen tegn på gift. Han døde mellem 07:00 og 07:30.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Ibs jakke',bg:'stone',stamp:'K-3810 / 02',items:[['stain',100,90,1.4,0,'#ddd'],['stain',220,100,1.2,0,'#6a5a3a']],caption:'Granitstøv og maskinolie. Granitstøv er i stenhuggerværkstedet og i redskabsskuret, hvor gamle sten står. Ingen jord fra graven på ryggen: han døde ikke i graven.'}
],[
{type:'cctv',kind:'Overvågning',title:'Kirkegårdskontoret',date:'02-11',camera:'KONTOR',doors:[[160,'DØR']],cast:[['Leder i jakke','#2f3b55']],frames:[{t:'07:00:00',at:[[50,.3]],txt:'Svend i telefonmøde.'},{t:'07:15:00',at:[[50,.3]],txt:'Stadig.'},{t:'07:30:00',at:[[50,.3]],txt:'Stadig.'}],text:'Svend Ask er på kontoret fra 06:50 til 07:45.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne er fra hans halstørklæde. Han døde af slaget med en skovl.'},
{type:'doc',kind:'Rapport',title:'Redskabsskuret',src:'Gartneren',text:'Jeg var i redskabsskuret fra 06:30 til 08:00 og ordnede plæneklipperen. Ib kom ikke ind.'}
]],
epilogue:'Lars Fisk havde slebet gamle gravsten om og solgt dem som nye. I stenhuggerværkstedet sagde Ib, at han ville anmelde ham. Lars slog ham med en skovl og kørte liget i en trillebør hen til den åbne grav.',
headline:'Stenhugger anholdt for drab på kirkegård'});
