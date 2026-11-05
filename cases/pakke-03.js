'use strict';
// Sagsbunke 3.

KK.push({nr:29,theme:'Ishockey',no:'K-3401',title:'Udvisning',when:'Fredag 23. januar · ca. 21:30',where:'Isarena Fjordhallen, Herning',
victim:'Kenneth Brix (45), cheftræner',victimLook:{sex:'m',hair:'short',hc:'sort',beard:'stubble',shirt:'#1d1d1d',collar:'round'},
intro:'Cheftræneren findes død i ismaskinens garage efter sæsonens vigtigste kamp.',
brief:'Kl. 22:20 fandt en ismester cheftræner Kenneth Brix død ved ismaskinen. Holdet havde tabt 1-6, og Kenneth havde i omklædningsrummet skreget, at "to af jer har solgt kampen".',
options:[['Rasmus Hjort, målmand','Niklas Fogh, anfører','Sofie Brix, hustru','Lars Ulf, holdleder'],['Hockeystav','Udstødningsgas fra ismaskinen','Skøjte'],['Ismaskinens garage','Omklædningsrummet','Trænerkontoret']],answer:[0,1,0],
info:[['Målmand. Lukkede seks mål ind i aften.','Anfører. Skyldig penge til en bookmaker.','Kenneths kone. Var på tilskuerpladserne.','Holdleder. Styrer holdets kasse.'],
['Hockeystav i kulfiber.','Den gamle ismaskine kører på benzin og lukker kulilte ud i den lukkede garage.','Skøjte med skarp stålklinge.'],
['Lukket garage med ismaskinen. Her blev han fundet.','Holdets omklædningsrum.','Kenneths lille kontor.']],
timeline:[['19:00','Kampen begynder.'],['21:15','Kampen slutter 1-6.'],['21:25','Kenneth skælder ud i omklædningsrummet.'],['22:20','Kenneth findes i garagen.']],
sketch:{title:'Ismaskinens garage · fundsted',items:[['car',200,110,160,70,0,'Ismaskine'],['door',30,200,30,0,90],['barrel',340,60,24,24,0]],body:[200,200,80,.8],markers:[[1,300,110,'Motoren varm']]},
evidence:[[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Mobilvideo fra omklædningsrummet',meta:'Optaget af en spiller · 21:26',lines:[['Kenneth Brix','To af jer har solgt kampen! Rasmus, seks mål? Og Niklas, du tabte pucken fire gange!'],['Rasmus Hjort','Det er ikke rigtigt.'],['Kenneth Brix','Rasmus og Niklas, ind i garagen om ti minutter. Resten kan gå.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 22:50',text:'Huden er lyserød, som ved kulilteforgiftning. Desuden en bule bag øret fra et slag med noget aflangt og hårdt. Der er ingen snitsår. Han døde mellem 21:35 og 22:05.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Kenneths jakke',bg:'asphalt',stamp:'K-3401 / 02',items:[['stain',100,90,1.4,0,'#3a3a3a'],['stain',220,100,1.2,0,'#e8eef2']],caption:'Sod fra udstødning og vand fra smeltet is på jakken. Begge dele er der kun i garagen og i omklædningsrummet, hvor spillerne slæber is ind på skøjterne. Kontoret er tørt og rent.'}
],[
{type:'cctv',kind:'Overvågning',title:'Spillergangen',date:'23-01',camera:'GANG',doors:[[80,'OMKLÆDNING'],[250,'PARKERING']],cast:[['Anfører med C på trøjen','#c94a3b']],frames:[{t:'21:35:00',at:[[30,.3]],txt:'Anføreren forlader omklædningsrummet med sin taske.'},{t:'21:36:30',at:[[78,0]],txt:'Han går ud til parkeringen og kører.'},{t:'22:10:00',at:[null],txt:'Han er ikke kommet tilbage.'}],text:'Niklas Fogh kører fra arenaen kl. 21:37. Hans bil passerer bommen samtidig.'},
{type:'doc',kind:'Supplerende obduktion',title:'Bulen',src:'Retsmedicinsk Institut',text:'Bulen er overfladisk og har ingen sammenhæng med dødsfaldet. Blodets kulilteindhold er dødeligt. Han er død af udstødningsgas.'},
{type:'doc',style:'table',kind:'Sensorlog',title:'Omklædningsrummets ventilation',rows:[['Tid','CO-niveau'],['21:30','0 ppm'],['22:00','0 ppm'],['22:30','0 ppm']],after:'Ingen kulilte i omklædningsrummet.'}
]],
epilogue:'Rasmus Hjort havde taget imod 200.000 kr. for at lukke mål ind. I garagen truede Kenneth med at gå til forbundet. Rasmus slog ham bevidstløs med sin stav, startede ismaskinen og lukkede porten. Udstødningsgassen gjorde resten.',
headline:'Målmand anholdt for drab på træner'});

KK.push({nr:30,theme:'Bryllup',no:'K-3402',title:'Til døden os skiller',when:'Lørdag 20. juni · ca. 23:00',where:'Hvidkilde Gods, Sydfyn',
victim:'Mikael Storm (34), brudgom',victimLook:{sex:'m',hair:'short',hc:'brun',age:'young',shirt:'#1d1d1d',collar:'shirt'},
intro:'Brudgommen findes død i rosenhaven midt i bryllupsfesten. Bruden har ikke danset brudevalsen.',
brief:'Kl. 23:40 fandt en tjener brudgommen Mikael Storm død mellem rosenbuskene. Brudevalsen skulle danses kl. 24. Mikael havde fået en stor arv tre uger før brylluppet og skrevet en ægtepagt, som bruden først fik at se samme morgen.',
options:[['Ida Storm, brud','Frederik Lund, forlover','Bente Storm, mor','Oliver Krag, ekskæreste til bruden'],['Champagneflaske','Rosensaks','Forgiftet bryllupskage'],['Rosenhaven','Orangeriet','Brudeparrets suite']],answer:[1,0,1],
info:[['Bruden. Fik ægtepagten at se i morges.','Forlover og bedste ven. Har lånt 400.000 kr. af Mikael.','Mikaels mor. Kunne ikke lide bruden.','Brudens ekskæreste. Mødte op uindbudt.'],
['Magnum champagne.','Skarp rosensaks fra gartneriet.','Bryllupskagen stod klar i orangeriet.'],
['Rosenhaven. Her blev han fundet.','Glashus med palmer, hvor kagen stod.','Suiten på første sal.']],
timeline:[['16:00','Vielse i kirken.'],['19:00','Middag.'],['22:30','Mikael og Frederik ses skændes.'],['23:40','Mikael findes i rosenhaven.']],
sketch:{title:'Rosenhaven · fundsted',items:[['plant',80,80,30,30,0],['plant',150,60,30,30,0],['plant',300,70,30,30,0],['plant',320,190,30,30,0],['roundtable',200,130,40,40,0,'Fontæne']],body:[160,180,40,.85],markers:[[1,200,200,'Ingen jord på skoene']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Mikaels telefon',owner:'Mikael Storm',pin:'2006',pinHint:'Fire cifre. Bryllupsdatoen (ddmm).',lockTime:'23:45',wall:'linear-gradient(160deg,#f3e6d0,#c9a43a)',msgs:[{with:'Frederik',m:[['them','22:35','Du får dine penge. Giv mig et år.'],['me','22:36','Nej. I aften. Orangeriet om 10 min.']]},{with:'Ida ❤️',m:[['them','22:50','Hvor er du? Vi skal snart danse.'],['me','22:51','Skal lige ordne noget. Og vi skal tale om pagten.']]}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 00:20',text:'Slag mod hovedet med noget tungt og glat. Der er også et lille stikmærke i håndfladen, som kan stamme fra en saks eller en rosentorn. Ingen tegn på forgiftning: han har ikke kastet op, og pupillerne er normale. Han døde mellem 22:45 og 23:15.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Mikaels smoking',bg:'grass',stamp:'K-3402 / 01',items:[['flower',100,90,1.2,0,'#e8eef2'],['stain',220,100,1.3,0,'#f2e0c0']],caption:'Hvid palmeblomst i knaphullet og flormelis på ærmet. Palmer findes i orangeriet, flormelis fra kagen både i orangeriet og i suiten, hvor en kage-prøve stod. Der er ingen jord på skoene, så han døde ikke i rosenhaven.'}
],[
{type:'cctv',kind:'Overvågning',title:'Dansegulvet',date:'20-06',camera:'FESTSAL',doors:[[160,'BAR']],cast:[['Brud i hvid kjole','#f4f4f0']],frames:[{t:'22:45:00',at:[[40,.4]],txt:'Bruden danser med sin far.'},{t:'23:00:00',at:[[60,.3]],txt:'Bruden taler med gæster ved baren.'},{t:'23:15:00',at:[[50,.5]],txt:'Bruden danser med veninder.'},{t:'23:30:00',at:[[45,.4]],txt:'Bruden leder efter Mikael.'}],text:'Ida Storm er på dansegulvet fra 22:40 til 23:40 foran 120 gæster.'},
{type:'doc',kind:'Supplerende obduktion',title:'Stikmærket',src:'Retsmedicinsk Institut',text:'Stikmærket er en rosentorn. Dødsårsagen er slaget, og der er glassplinter fra en champagneflaske i såret.'},
{type:'audio',style:'voicemail',kind:'Vidneforklaring',label:'Fotografen',meta:'Optaget 21.06 kl. 01:00',lines:[['Fotograf','Jeg sad i brudeparrets suite fra halv elleve og redigerede billeder til slideshowet. Ingen kom ind.'],['Betjent','Hele tiden?'],['Fotograf','Ja, til politiet kom. Kageprøven stod derinde, og jeg spiste lidt af den, beklager.']]}
]],
epilogue:'Frederik Lund kunne ikke betale de 400.000 kr. tilbage. I orangeriet sagde Mikael, at han ville tage sagen til retten mandag. Frederik greb en magnum champagne fra kølespanden og slog. Han slæbte liget ud i rosenhaven, så det skulle ligne et overfald i mørket.',
headline:'Forlover anholdt for drab på brudgom'});

KK.push({nr:31,theme:'Kloster',no:'K-3403',title:'Tavshedsløftet',when:'Tirsdag 8. april · ca. 05:00',where:'Stilhedens Kloster (retreat), Løgumkloster',
victim:'Søster Agnete Holm (61), retreatleder',victimLook:{sex:'f',hair:'bun',hc:'grå',age:'old',shirt:'#3a3a3a',collar:'turtle'},
intro:'På et retreat, hvor ingen må tale, findes lederen død ved morgenbønnen.',
brief:'Kl. 05:30 fandt deltagerne retreatleder Agnete Holm død i kirkerummet. Retreatet "Syv dages tavshed" havde ingen telefoner og ingen ord. Agnete havde opdaget, at nogen tog penge fra kollektbøssen og havde lagt sedler til to deltagere.',
options:[['Bodil Rask, deltager','Thomas Vind, kok','Kirsten Lyhne, deltager','Brian Holt, pedel'],['Lysestage af jern','Sovemedicin i te','Rebet fra klokken'],['Kirkerummet','Køkkenet','Klokketårnet']],answer:[2,0,2],
info:[['Deltager. Pensioneret sygeplejerske med medicin i tasken.','Kok. Ansat på klostret.','Deltager. Skylder penge efter en skilsmisse.','Pedel. Har nøgler til alt, også klokketårnet.'],
['Høj jernlysestage fra alteret.','Te, som Agnete drak hver morgen kl. 4:30.','Det tykke reb fra kirkeklokken.'],
['Kirkerummet. Her blev hun fundet.','Klostrets køkken.','Smalt tårn med klokken.']],
timeline:[['04:15','Agnete står op.'],['04:30','Agnete drikker te.'],['04:45','Klokken ringer ikke som den skal.'],['05:30','Agnete findes i kirken.']],
sketch:{title:'Kirkerummet · fundsted',items:[['table',200,40,120,24,0,'Alter'],['table',120,140,40,120,0],['table',280,140,40,120,0]],body:[200,90,0,.7],markers:[[1,240,70,'Lysestage væltet']]},
evidence:[[
{type:'doc',style:'note',kind:'Seddel',title:'Fundet i Agnetes lomme',text:'Kirsten & Brian –\nJeg ved, hvem der tager fra bøssen. En af jer.\nKom til mig efter morgenbønnen. Ingen ord, kun sandheden.\n/A'},
{type:'autopsy',kind:'Obduktion',title:'Obduktionserklæring',jnr:'RM-0408/33',fields:[['Afdøde','Agnete Holm'],['Obducent','Overlæge Per Nissen'],['Anslået dødstidspunkt','Kl. 04:40–05:10']],sections:[['Udvendige fund','Kraftigt slag mod tindingen. Ingen mærker om halsen, så rebet er ikke brugt.'],['Indvendige fund','Kraniebrud. Afdøde var dybt søvnig: blodet viser tegn på et sovemiddel, men koncentrationen er ikke afgjort.']],marks:[[48,20,'1']],signer:'Per Nissen, overlæge'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Agnetes kjortel',bg:'stone',stamp:'K-3403 / 04',items:[['stain',100,90,1.4,0,'#d8c27a'],['rope',220,100,1.2,0,'#8a6a3a']],caption:'Stearin fra alterlys og fibre fra et tykt reb. Stearinen kommer fra kirkerummet; rebfibrene fra klokketårnet. Hun har ikke været i køkkenet: der er ingen mel eller madlugt.'}
],[
{type:'doc',style:'table',kind:'Nøglelog',title:'Pedellens skab',rows:[['Tid','Nøgle','Hændelse'],['04:00','Tårnet','Udleveret til pedel'],['04:05–05:20','—','Pedellen reparerer fyret i kælderen (kontrolpanel bekræfter)'],['04:25','Tårnet','Hængt tilbage af ukendt']],after:'Brian Holt stod ved fyrets kontrolpanel i kælderen fra 04:05 til 05:20. Panelet registrerer hvert tryk, og der blev trykket hvert andet minut.'},
{type:'doc',style:'table',kind:'Laboratoriesvar',title:'Toksikologi',rows:[['Prøve','Fund'],['Sovemiddel i blod','Lav dosis'],['Vurdering','Ikke dødelig']],after:'Sovemidlet gjorde hende søvnig, men slog hende ikke ihjel. Dødsårsagen er slaget.'},
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Kirkens lydanlæg',meta:'Automatisk optagelse · 04:30–05:30',lines:[['Lydanlæg','[04:30] Tavshed. En dør går.'],['Lydanlæg','[04:46] Klokken giver ét skævt slag oppefra. Så tavshed.'],['Lydanlæg','[04:58] Skridt og noget tungt, der slæbes over stengulvet.'],['Lydanlæg','[05:30] Deltagerne kommer ind til morgenbøn.']]}
]],
epilogue:'Kirsten Lyhne havde stjålet fra kollektbøssen hver nat. Hun kom sovemedicin i Agnetes te og lokkede hende op i klokketårnet med en seddel om "sandheden". Der slog hun hende med en jernlysestage. I faldet ramte Agnete klokkerebet. Kirsten slæbte hende ned i kirken og satte lysestagen tilbage ved alteret.',
headline:'Retreatdeltager anholdt for drab i kloster'});

KK.push({nr:32,theme:'Veterantog',no:'K-3404',title:'Damp og død',when:'Søndag 6. september · ca. 14:15',where:'Veterantoget Mariager–Handest',
victim:'Svend Aaby (70), lokomotivfører',victimLook:{sex:'m',hair:'short',hc:'hvid',beard:'full',age:'old',shirt:'#2f3b55',collar:'shirt'},
intro:'Veterantogets gamle lokomotivfører findes død i postvognen under søndagsturen.',
brief:'Kl. 14:50 fandt konduktøren lokomotivfører Svend Aaby død i den gamle postvogn. Toget holdt ved Handest station. Svend havde opdaget, at foreningens kasse manglede 280.000 kr., og ville kræve revision på generalforsamlingen.',
options:[['Grethe Due, kasserer','Ole Fyhn, fyrbøder','Lone Aaby, datter','Peder Kjær, konduktør'],['Kulskovl','Forgiftet kaffe','Skubbet ud af toget'],['Postvognen','Lokomotivets førerhus','Restaurationsvognen']],answer:[0,0,2],
info:[['Kasserer i 15 år.','Fyrbøder. Skovler kul i lokomotivet.','Svends datter. Med som passager.','Konduktør. Sælger billetter og kaffe.'],
['Tung kulskovl fra lokomotivet.','Kaffe fra restaurationsvognen.','Et fald fra en åben dør.'],
['Postvognen. Her blev han fundet.','Lokomotivets varme førerhus.','Vogn med borde, kaffe og kage.']],
timeline:[['13:00','Toget kører fra Mariager.'],['13:50','Toget gør holdt ved Hobro.'],['14:15','Svend forlader førerhuset.'],['14:50','Svend findes i postvognen.']],
sketch:{title:'Postvognen · fundsted',items:[['shelf',200,40,320,20,0,'Postfag'],['crate',100,180,40,30,0],['crate',300,180,40,30,0],['door',360,130,30,0,90]],body:[200,130,90,.8],markers:[[1,250,110,'Kul i lommen']]},
evidence:[[
{type:'doc',style:'letter',kind:'Brev',title:'Svends udkast til generalforsamlingen',text:'Kasserer Grethe Due og konduktør Peder Kjær har som de eneste adgang til foreningens konto. Der mangler 280.000 kr. Jeg kræver, at de begge forklarer sig. I dag på turen vil jeg spørge dem direkte.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 15:30',text:'Et bredt, fladt slag mod baghovedet med noget metallisk, eller skader fra et fald mod en hård kant. Kaffekoppen ved liget er analyseret på stedet: ingen gift. Han døde mellem 14:15 og 14:40.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Svends jakke',bg:'wood',stamp:'K-3404 / 03',items:[['stain',100,90,1.4,0,'#222'],['coin',220,100,1.2,0,'#c49a5a']],caption:'Kulstøv på ryggen og kagekrummer på ærmet. Kagekrummerne kommer fra restaurationsvognen; kulstøv er overalt i toget, men tykkest i førerhuset. Postvognen er ren: han døde ikke der.'}
],[
{type:'audio',style:'voicemail',kind:'Vidneforklaring',label:'Passager i vogn 2',meta:'Optaget 06.09 kl. 15:40',lines:[['Passager','Konduktøren klippede billetter hos os i vogn 2 fra Hobro til Handest. Han stod og fortalte om gamle tog hele tiden.'],['Betjent','Gik han nogen steder?'],['Passager','Nej. Han var her hele vejen, jeg har ham på video.']]},
{type:'doc',kind:'Rapport',title:'Dørene',src:'Kriminalteknisk Center',text:'Alle døre i toget var låst under kørslen, og ingen ydre skader på afdøde passer med et fald fra et tog i fart. Såret har sorte kulkorn i bunden.'},
{type:'doc',style:'table',kind:'Fyrbøderens log',title:'Lokomotivet',rows:[['Tid','Hændelse'],['14:15','Svend går bagud i toget'],['14:15–14:50','Ole alene i førerhuset; ingen andre kom ind']],after:'Ole Fyhn kunne ikke forlade fyret, mens toget kørte. Ingen var i førerhuset efter 14:15.'}
]],
epilogue:'Grethe Due havde lånt foreningens penge til sin søns gæld. I restaurationsvognen spurgte Svend hende direkte. Da han rejste sig for at gå, slog hun ham med kulskovlen, som stod til rengøring ved køkkenet. Hun og en vogn med kagekasser fik liget ind i postvognen.',
headline:'Kasserer anholdt for drab på veterantog'});

KK.push({nr:33,theme:'Auktionshus',no:'K-3405',title:'Første, anden, tredje',when:'Torsdag 3. december · ca. 20:00',where:'Bruun & Datter Auktionshus, Bredgade',
victim:'Lykke Bruun (55), auktionarius',victimLook:{sex:'f',hair:'bob',hc:'sølv',glasses:true,shirt:'#2b2e33',collar:'v'},
intro:'Auktionarius findes død i magasinet efter aftenens store auktion. Hammerslaget lyder ikke mere.',
brief:'Kl. 20:45 fandt en assistent auktionarius Lykke Bruun død i magasinet. Hun havde netop solgt et maleri af Vilhelm Hammershøi for 18 mio. kr. Kort før auktionen havde hun fået mistanke om, at maleriet var falsk.',
options:[['Konrad Bruun, bror','Elise Dam, ekspert','Rami Haddad, køber','Hanne Wolff, sælger'],['Auktionshammer','Kunstfernis-dampe','Billedramme'],['Magasinet','Auktionssalen','Restaureringsrummet']],answer:[3,2,2],
info:[['Lykkes bror og medejer.','Huset ekspert. Godkendte maleriet.','Køberen. Betalte 18 mio.','Sælgeren. Påstod maleriet var arvet fra farfaren.'],
['Hammer i mahogni.','Opløsningsmiddel i lukket rum.','Tung forgyldt ramme.'],
['Magasinet. Her blev hun fundet.','Den store sal med stole.','Rum med fernis, pensler og lys.']],
timeline:[['18:00','Auktionen begynder.'],['19:20','Maleriet sælges.'],['19:30','Lykke beder to om et møde.'],['20:45','Lykke findes i magasinet.']],
sketch:{title:'Magasinet · fundsted',items:[['shelf',60,130,24,200,0],['shelf',340,130,24,200,0],['crate',200,60,80,30,0,'Kasser']],body:[200,160,20,.85],markers:[[1,230,140,'Guldflager']]},
evidence:[[
{type:'computer',kind:'Computer',title:'Lykkes computer',owner:'Lykke Bruun',user:'Lykke',password:'interiør',hint:'Navnet på Hammershøis mest kendte motiv, med lille forbogstav. Spørg Centralen.',mail:[{from:'Lykke Bruun',to:'Hanne Wolff; Elise Dam',time:'19:31',subject:'Maleriet',body:'Lærredet er for nyt. En af jer har løjet. Kom til restaureringsrummet nu, før pengene overføres.'}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 21:20',text:'Slag mod siden af hovedet med en kant. Der sidder fine guldflager i såret, som fra en forgyldt ramme, men også mørkt træ. Ingen tegn på forgiftning med dampe: slimhinderne er normale. Hun døde mellem 19:35 og 20:15.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Lykkes blazer',bg:'carpet',stamp:'K-3405 / 05',items:[['stain',100,90,1.4,0,'#c9a43a'],['stain',220,100,1.2,0,'#6a4a2a']],caption:'Fernislugt og pletter af frisk fernis. Fernis bruges kun i restaureringsrummet, men den nyfernisserede ramme stod i auktionssalen under auktionen. Ingen tegn på, at hun døde i magasinet: ligpletterne viser, hun er flyttet.'}
],[
{type:'cctv',kind:'Overvågning',title:'Ekspertkontoret',date:'03-12',camera:'KONTOR 2',doors:[[60,'GANG']],cast:[['Ekspert i grøn cardigan','#3e7b46']],frames:[{t:'19:35:00',at:[[50,.4]],txt:'Eksperten sidder ved computeren.'},{t:'19:55:00',at:[[50,.4]],txt:'Ringer til forsikringsselskabet.'},{t:'20:15:00',at:[[50,.4]],txt:'Stadig ved skrivebordet.'},{t:'20:40:00',at:[[30,.3]],txt:'Går ud efter alarm.'}],text:'Elise Dam er på sit kontor fra 19:32 til 20:40.'},
{type:'doc',kind:'Våbenundersøgelse',title:'Hammeren',src:'Kriminalteknisk Center',text:'Auktionshammeren er ren og blev brugt hele auktionen. Træet i såret er forgyldt eg fra en ramme, ikke mahogni.'},
{type:'doc',style:'table',kind:'Hallens log',title:'Auktionssalen',rows:[['Tid','Hændelse'],['19:30–21:00','Rengøring og oprydning med fire ansatte']],after:'Fire ansatte var i salen hele tiden. Lykke var der ikke.'},
{type:'doc',style:'clip',kind:'Avisudklip',title:'Fundet på Lykkes skrivebord',paper:'Kunstmagasinet',head:'Hammershøis interiør',text:'Hans mest kendte motiv er "interiør" med stille stuer og en kvinde set bagfra.'}
]],
epilogue:'Hanne Wolff havde selv malet det falske Hammershøi-billede. I restaureringsrummet viste Lykke hende det for nye lærred. Hanne greb en forgyldt ramme fra bordet og slog. Hun bar liget ind i magasinet bag kasserne og nåede næsten at forlade bygningen med pengene.',
headline:'Sælger anholdt: falsk Hammershøi endte i drab'});

KK.push({nr:34,theme:'Observatorium',no:'K-3406',title:'Stjerneskud',when:'Lørdag 12. august · ca. 01:30',where:'Brorfelde Observatorium, Vestsjælland',
victim:'Dr. Hans Ellehøj (58), astronom',victimLook:{sex:'m',hair:'curly',hc:'grå',glasses:true,age:'old',shirt:'#2f3b55',collar:'turtle'},
intro:'Under nattens meteorsværm findes en astronom død i kuplen. Hans opdagelse forsvandt med ham.',
brief:'Kl. 02:10 fandt en studerende astronomen Hans Ellehøj død i observatoriets kuppel under Perseidernes meteorsværm. Han havde opdaget en ny komet og ville offentliggøre det næste morgen. Navnet på opdageren ville blive kendt i hele verden.',
options:[['Nina Krog, ph.d.-studerende','Bjarne Toft, kollega','Freja Ellehøj, datter','Søren Lyng, tekniker'],['Teleskopets kontravægt','Kvælning med kabel','Fald fra stigen'],['Kuplen','Kontrolrummet','Taget']],answer:[1,0,1],
info:[['Ph.d.-studerende. Hjalp med at finde kometen.','Kollega og rival i 25 år. Har aldrig selv fundet noget.','Datter. På besøg for at se meteorer.','Tekniker. Passer teleskopet.'],
['Tung kontravægt i stål på 8 kg.','Langt datakabel.','Stigen op til teleskopets okular.'],
['Kuplen med teleskopet. Her blev han fundet.','Rum med computere under kuplen.','Fladt tag, hvor de studerende ser meteorer.']],
timeline:[['22:00','Meteornat begynder.'],['00:30','Hans viser kometen til to kolleger.'],['01:00','Hans går ned til kontrolrummet.'],['02:10','Hans findes i kuplen.']],
sketch:{title:'Kuplen · fundsted',items:[['roundtable',200,130,220,220,0],['table',200,110,40,120,30,'Teleskop'],['stairs',320,200,30,40,0,'Stige']],body:[150,190,60,.8],markers:[[1,200,200,'Okular uden fingeraftryk']]},
evidence:[[
{type:'computer',kind:'Computer',title:'Observatoriets log',owner:'Brorfelde',user:'observer',password:'perseid',hint:'Nattens meteorsværm, ental, små bogstaver.',files:[{name:'Kometfund_udkast.txt',time:'00:35',body:'Opdager: H. Ellehøj\nBekræftet af: N. Krog, B. Toft\n\nKun vi tre kender koordinaterne.'}],mail:[{from:'Hans Ellehøj',to:'Nina Krog; Bjarne Toft',time:'00:58',subject:'Navnet',body:'Kometen skal hedde Ellehøj. Kun mit navn. Jeg ved, I begge mener, I har ret til at stå på. Kom ned i kontrolrummet, så tager vi det.'}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 02:40',text:'Kraftigt slag eller stød mod baghovedet med noget tungt og fladt. Det kan være en kontravægt, men også et fald mod gulvet fra stigen. Ingen mærker om halsen. Han døde mellem 01:00 og 01:40.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Hans’ trøje',bg:'stone',stamp:'K-3406 / 01',items:[['stain',100,90,1.4,0,'#888'],['paper',220,100,1.2,0]],caption:'Grå støv fra computerventilatorer og et stykke printerpapir under armen. Begge dele er der i kontrolrummet, men kuplen har også en printer. Taget er vådt af dug, og hans tøj er tørt: han var ikke på taget.'}
],[
{type:'audio',style:'radio',kind:'Lydoptagelse',label:'Ninas livestream fra taget',meta:'00:50–01:50 · YouTube',lines:[['Nina Krog','Hej alle, vi er på taget af Brorfelde, og der kommer meteorer hvert minut!'],['Nina Krog','Klokken er kvart over et. Se den der!'],['Nina Krog','Klokken er tyve i to, og jeg har stået her hele tiden. Jeg fryser!']]},
{type:'doc',style:'note',kind:'Seddel',title:'Fundet ved teleskopet',text:'Kodeord til log-pc: perseid\n– Søren (tekniker)'},
{type:'doc',kind:'Supplerende obduktion',title:'Faldet',src:'Retsmedicinsk Institut',text:'Der er ingen andre skader, der passer med et fald fra stigen: ingen brud på arme eller ben. Såret har form som kontravægtens kant.'},
{type:'doc',style:'table',kind:'Adgangslog',title:'Kuplens dør',rows:[['Tid','Hændelse'],['00:55','Lukket af Hans'],['01:00–01:55','Ingen åbninger'],['01:56','Åbnet indefra af ukendt']],after:'Kuplen var lukket, mens Hans døde. Han døde andetsteds og blev båret op ad indvendig trappe fra kontrolrummet.'}
]],
epilogue:'Bjarne Toft havde i 25 år stået i skyggen af Hans. I kontrolrummet nægtede Hans at sætte hans navn på kometen. Bjarne greb en reserve-kontravægt fra hylden og slog. Han bar liget op i kuplen og lagde det ved stigen, så det skulle ligne et fald.',
headline:'Astronom anholdt: kometens ære endte i drab'});

KK.push({nr:35,theme:'Skihytte',no:'K-3407',title:'Sne og stilhed',when:'Onsdag 18. februar · ca. 22:00',where:'Hytte "Fjellro", Trysil, Norge',
victim:'Lasse Bjørn (41), firmaejer',victimLook:{sex:'m',hair:'short',hc:'blond',beard:'stubble',shirt:'#a3231b',collar:'turtle'},
intro:'Et firma holder skitur i Norge. Chefen kommer ikke tilbage fra saunaen.',
brief:'Kl. 22:50 fandt en medarbejder firmaejer Lasse Bjørn død i sneen bag hytten. Firmaet var på teamtur, men Lasse havde netop fortalt, at han ville sælge firmaet og fyre halvdelen.',
options:[['Martin Lyng, partner','Sanne Kjær, sekretær','Ahmad Nouri, udvikler','Pernille Bjørn, hustru'],['Isøkse','Sovepiller i rødvin','Skistav'],['Saunaen','Skirummet','Stuen']],answer:[2,2,1],
info:[['Partner og medejer. Ville ikke sælge.','Sekretær i 12 år. Bliver fyret.','Udvikler. Har opfundet firmaets vigtigste program.','Lasses kone. Med på turen.'],
['Isøkse fra klatreudstyret.','Rødvin. Der lå en sovepillepakke i badeværelset.','Skistav af aluminium med spids.'],
['Saunaen ude i haven.','Rum med ski og støvler.','Stuen med pejs.']],
timeline:[['19:00','Middag.'],['20:30','Lasse fortæller om salget.'],['21:00','Lasse går mod saunaen.'],['22:50','Lasse findes i sneen.']],
sketch:{title:'Bag hytten · fundsted',items:[['wall',40,40,320,0,0],['label',200,30,0,0,0,'HYTTEN'],['tree',80,180,40,40,0],['tree',320,190,40,40,0]],body:[200,150,30,.85],markers:[[1,250,140,'Ét sæt fodspor']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Lasses telefon',owner:'Lasse Bjørn',lockTime:'22:55',wall:'linear-gradient(160deg,#dfe8f0,#5a7a9a)',msgs:[{with:'Martin',m:[['them','20:45','Det sker ikke. Vi taler om det nu.']]},{with:'Ahmad',m:[['them','20:48','Så sælger du MIN kode? Mød mig.']]},{with:'Lasse → Martin + Ahmad',m:[['me','20:55','Begge to. Skirummet eller saunaen, om 15 min.']]}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten (Trysil) · 23:40',text:'Rundt stikmærke i nakken fra noget spidst og metallisk, enten en skistav eller isøksens spids. Ingen tegn på sovemidler: han var vågen og stod op, da han blev ramt. Han døde mellem 21:10 og 21:40.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Lasses sokker',bg:'snow',stamp:'K-3407 / 02',items:[['stain',100,90,1.4,0,'#3a2a20'],['stain',220,100,1.2,0,'#b0c4d0']],caption:'Skivoks og smeltet sne på sokkerne. Skivoks findes kun i skirummet; smeltevand både i skirummet og saunaen. Stuen har tæppe og pejs, og der er ingen tæppefnug på ham.'}
],[
{type:'cctv',kind:'Overvågning',title:'Hyttens wildlife-kamera',date:'18-02',camera:'VILDTKAMERA',doors:[[80,'HYTTEDØR']],cast:[['Rød anorak','#c94a3b']],frames:[{t:'21:05:00',at:[[40,.4]],txt:'Person i rød anorak går ud på skisporet med pandelampe.'},{t:'21:15:00',at:[[90,.2]],txt:'Rød anorak forsvinder mellem træerne.'},{t:'21:50:00',at:[[85,.2]],txt:'Rød anorak kommer tilbage.'}],text:'Kun Martin har en rød anorak. Hans sportsur viser en skitur på 6 km fra 21:05 til 21:50.'},
{type:'doc',kind:'Våbenundersøgelse',title:'Isøksen',src:'Kriminalteknisk Center',text:'Isøksen hang på væggen i entréen med et lag is på, som ikke var brudt. Stikmærket passer præcist med spidsen på en skistav.'},
{type:'doc',kind:'Rapport',title:'Saunaen',src:'Norsk politi',text:'Saunaen var ikke tændt i aften. Ovnen er kold, og der er sne på trappen uden fodspor. Ingen har været i saunaen.'}
]],
epilogue:'Ahmad Nouri havde skrevet koden, som Lasse nu ville sælge for millioner. I skirummet skændtes de, og Lasse vendte ham ryggen. Ahmad stak ham i nakken med spidsen af en skistav. Han slæbte liget ud bag hytten, hvor sneen skulle dække det hele.',
headline:'Udvikler anholdt for drab på skitur'});

KK.push({nr:36,theme:'Tatovering',no:'K-3408',title:'Blæk og blod',when:'Fredag 9. oktober · ca. 23:30',where:'Sort Rose Tattoo, Vesterbro',
victim:'Rikke "Rose" Sandberg (37), tatovør',victimLook:{sex:'f',hair:'long',hc:'sort',earrings:true,shirt:'#111111',collar:'v'},
intro:'En kendt tatovør findes død i sit studie. En tegning til millioner er væk.',
brief:'Kl. 00:20 fandt en kunde tatovøren Rose Sandberg død i studiet. Rose havde tegnet et design, som et stort tøjfirma ville købe for to millioner. Tegningen er væk.',
options:[['Kasper Holm, lærling','Dina Lux, tatovør','Mikkel Bang, kæreste','Yasmin Ali, kunde'],['Tatoveringsmaskine (strøm)','Kvælning med lædersnor','Glasflaske'],['Tatoveringsstolen','Baglokalet','Kontoret']],answer:[1,1,1],
info:[['Lærling. Har tegnet med på designet.','Tatovør i samme studie. Påstår, at designet er hendes.','Roses kæreste. Kender koden til pengeskabet.','Kunde. Fik en tatovering kl. 22.'],
['Tatoveringsmaskine på strøm.','Sort lædersnor fra en halskæde.','Tom ginflaske.'],
['Stolen, hvor kunderne sidder.','Rum med farver, nåle og sterilisator.','Lille kontor med pengeskab.']],
timeline:[['22:00','Yasmin får sin tatovering.'],['22:45','Studiet lukker.'],['23:00','Rose bliver tilbage med to kolleger.'],['00:20','Rose findes i stolen.']],
sketch:{title:'Studiet · fundsted',items:[['bed',200,110,70,140,0,'Tatoveringsstol'],['desk',80,200,80,30,0],['plant',340,60,20,20,0]],body:[200,110,0,.7],markers:[[1,250,90,'Lædersnor mangler']]},
evidence:[[
{type:'cctv',kind:'Overvågning',title:'Studiet',date:'09-10',camera:'STUDIE',doors:[[60,'BAGLOKALE'],[260,'KONTOR']],cast:[['Rød bandana','#a3231b'],['Grøn hættetrøje','#3e7b46']],frames:[{t:'22:58:00',at:[[40,.4],[60,.5]],txt:'Rød bandana og grøn hættetrøje rydder op.'},{t:'23:10:00',at:[[19,0],[60,.5]],txt:'Rød bandana går ind i baglokalet.'},{t:'23:15:00',at:[[19,0],[81,0]],txt:'Grøn hættetrøje går ind på kontoret.'},{t:'23:20:00',at:[[19,0],[81,0]],txt:'Kameraet går i stå (strømsvigt).'}],text:'Kun Dina har rød bandana, og kun Kasper har grøn hættetrøje. Ingen andre var i studiet efter lukketid.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 00:50',text:'Fine, røde striber om halsen og et lille brændemærke på hånden. Både kvælning med en tynd snor og et strømstød kan forklare døden. Ingen slag mod hovedet. Hun døde mellem 23:15 og 23:50.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Roses hænder',bg:'wood',stamp:'K-3408 / 02',items:[['stain',100,90,1.4,0,'#111'],['coin',220,100,1.2,0,'#888']],caption:'Sort tatoveringsblæk og et lille stykke metal fra en pengeskabsdør under neglene. Blæk findes i baglokalet og på kontoret, hvor blækflaskerne bliver talt op. Hun blev båret hen til stolen.'}
],[
{type:'audio',style:'voicemail',kind:'Telefonsvarer',label:'Kaspers besked til sin mor',meta:'Indtalt 23:16–23:22 fra kontorets fastnettelefon',lines:[['Kasper Holm','Hej mor, jeg sidder på kontoret og skal tælle blæk. Jeg ringer bare.'],['Kasper Holm','Rose er inde ved stolen. Dina er i baglokalet.'],['Kasper Holm','Nu går strømmen. Jeg bliver her og tæller færdig med lommelygten.']]},
{type:'doc',kind:'Supplerende obduktion',title:'Brændemærket',src:'Retsmedicinsk Institut',text:'Brændemærket stammer fra sterilisatoren. Der er ingen strømskade på hjertet. Dødsårsagen er kvælning med en snor.'},
{type:'doc',style:'table',kind:'Inventarliste',title:'Kontoret',rows:[['Tid','Hændelse'],['23:16–23:55','Kasper tæller blæk; regnearket gemmes hvert minut']],after:'Kasper var på kontoret hele tiden, og ingen kom ind. Rose var der ikke.'}
]],
epilogue:'Dina Lux mente, at designet var hendes. Da strømmen gik, mødte hun Rose i baglokalet, hvor Rose hentede designet. De kom op at slås, og Dina kvalte hende med lædersnoren fra sin egen halskæde. Hun lagde liget i tatoveringsstolen og tog tegningen.',
headline:'Tatovør anholdt for drab i studie'});

KK.push({nr:37,theme:'Efterskole',no:'K-3409',title:'Gallafesten',when:'Fredag 12. juni · ca. 23:00',where:'Vesterbjerg Efterskole, Sønderjylland',
victim:'Per Krogh (56), forstander',victimLook:{sex:'m',hair:'short',hc:'grå',glasses:true,age:'old',shirt:'#1d1d1d',collar:'shirt'},
intro:'Midt i efterskolens gallafest findes forstanderen død i gymnastiksalen.',
brief:'Kl. 23:50 fandt to elever forstander Per Krogh død i redskabsrummet ved gymnastiksalen. Per havde samme dag opdaget, at nogen havde fusket med årets karakterer og ændret eksamensresultater for penge.',
options:[['Lærke Hald, lærer','Bo Thomsen, pedel','Jonas Dam, lærer','Inge Krogh, viceforstander'],['Medicinbold','Sprøjte med insulin','Hoppetov'],['Redskabsrummet','Lærerværelset','Scenen']],answer:[2,1,1],
info:[['Lærer i dansk. Har adgang til karaktersystemet.','Pedel. Har nøgler til alt.','Lærer i matematik. Har adgang til karaktersystemet.','Viceforstander og Pers kone.'],
['Tung medicinbold på 5 kg.','Pedellen er diabetiker.','Langt hoppetov.'],
['Rum med bolde og måtter. Her blev han fundet.','Lærernes kaffestue.','Scenen i festsalen.']],
timeline:[['20:00','Gallamiddag.'],['22:00','Dans.'],['22:30','Per går fra festen.'],['23:50','Per findes i redskabsrummet.']],
sketch:{title:'Redskabsrummet · fundsted',items:[['shelf',60,130,24,200,0],['rug',200,150,150,80,0,'Måtter'],['barrel',320,60,30,30,0,'Bolde']],body:[200,150,70,.85],markers:[[1,250,140,'Kaffe på skjorten']]},
evidence:[[
{type:'doc',style:'table',kind:'Systemlog',title:'Karaktersystemet',rows:[['Dato','Bruger','Ændring'],['02.06','L. Hald','14 karakterer'],['04.06','J. Dam','9 karakterer'],['08.06','L. Hald','11 karakterer']],after:'Kun Lærke Hald og Jonas Dam har ændret karakterer efter eksamen. Per skrev begge en mail kl. 22:20: "Mød mig nu."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 00:30',text:'Svedig og bleg. Ingen slag mod hovedet. Fine mærker om halsen som fra et tov, men også et frisk stikmærke på armen. Han døde mellem 22:30 og 23:15.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Pers skjorte',bg:'wood',stamp:'K-3409 / 03',items:[['cup',100,90,1.4,0],['stain',220,100,1.2,0,'#e2d6b8']],caption:'Kaffeplet og kagekrummer på skjorten. Kaffe og kage blev serveret i lærerværelset og på scenen. Der er ingen gummistøv fra måtterne: han døde ikke i redskabsrummet.'}
],[
{type:'cctv',kind:'Overvågning',title:'Festsalen',date:'12-06',camera:'FESTSAL',doors:[[160,'SCENE']],cast:[['Kvinde i rød kjole','#c94a3b']],frames:[{t:'22:30:00',at:[[50,.2]],txt:'Kvinden i rød kjole spiller klaver for eleverne.'},{t:'22:50:00',at:[[50,.2]],txt:'Hun spiller stadig.'},{t:'23:15:00',at:[[50,.2]],txt:'Stadig ved klaveret.'}],text:'Lærke Hald i rød kjole spiller klaver fra 22:25 til 23:30 foran 90 elever.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen og armen',src:'Retsmedicinsk Institut',text:'Mærkerne om halsen er fra hans stramme butterfly. Blodet indeholder en dødelig dosis insulin.'},
{type:'doc',kind:'Rapport',title:'Scenen',src:'Elevrådets formand',text:'Bandet og eleverne var på scenen hele aftenen, og der stod altid nogen ved kaffebordet der. Forstanderen var ikke på scenen efter talen kl. 20.'}
]],
epilogue:'Jonas Dam havde taget imod penge fra forældre for at hæve karakterer. I lærerværelset sagde Per, at han ville anmelde det. Jonas havde stjålet en insulinpen fra pedellens skab og stak ham i armen, mens han hældte kaffe. Han bar den svimle forstander ud i redskabsrummet.',
headline:'Lærer anholdt for drab på efterskole'});

KK.push({nr:38,theme:'Chokoladefabrik',no:'K-3410',title:'Bitter',when:'Tirsdag 1. december · ca. 16:00',where:'Brødrene Kakao, Odense',
victim:'Anton Kakao (68), chokolatier',victimLook:{sex:'m',hair:'bald',hc:'hvid',beard:'moustache',age:'old',shirt:'#5a3a22',collar:'shirt'},
intro:'Chokoladefabrikkens grundlægger findes død i lagerrummet. Juleproduktionen står stille.',
brief:'Kl. 16:45 fandt en lagerarbejder Anton Kakao død mellem kakaosækkene. Anton ville give fabrikken til sit barnebarn i stedet for sine to sønner, og det skulle stå i testamentet fra mandag.',
options:[['Erik Kakao, søn','Leif Kakao, søn','Mia Kakao, barnebarn','Rita Holm, produktionschef'],['Kakaosæk der faldt','Gift i trøfler','Rørestang'],['Lagerrummet','Smagekøkkenet','Conche-hallen']],answer:[1,2,2],
info:[['Ældste søn. Står for salget.','Yngste søn. Står for produktionen.','Barnebarn. Skal arve fabrikken.','Produktionschef.'],
['Sæk med 60 kg kakaobønner.','Juletrøfler fra smagekøkkenet.','Lang jernstang til at røre i chokolade.'],
['Lager med sække. Her blev han fundet.','Køkken hvor nye smage testes.','Hal med store maskiner, der rører chokolade i døgnvis.']],
timeline:[['14:00','Familiemøde.'],['15:00','Anton fortæller om testamentet.'],['15:30','Anton går rundt på fabrikken.'],['16:45','Anton findes på lageret.']],
sketch:{title:'Lagerrummet · fundsted',items:[['crate',80,80,40,40,0],['crate',140,80,40,40,0],['crate',320,190,40,40,0],['shelf',340,60,20,80,0]],body:[200,150,40,.85],markers:[[1,180,120,'Sæk på gulvet']]},
evidence:[[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Antons diktafon',meta:'Fundet i hans lomme · 15:32',lines:[['Anton Kakao','Note til advokaten. Mine to drenge får ikke fabrikken. Mia skal have den.'],['Anton Kakao','Erik og Leif er rasende. Jeg har bedt dem begge mødes med mig i hallen klokken fire.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 17:20',text:'Langt, smalt slag mod nakken. Det kan være en jernstang, men også kanten af en tung sæk, der er faldet. Ingen tegn på forgiftning. Han døde mellem 15:50 og 16:30.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Antons kittel',bg:'tile',stamp:'K-3410 / 03',items:[['stain',100,90,1.4,0,'#3a1a0a'],['stain',220,100,1.2,0,'#f2e0c0']],caption:'Flydende mørk chokolade og en smule kakaosmør. Det findes kun i conche-hallen og i smagekøkkenet. Lageret har tørre bønner, ingen flydende chokolade.'}
],[
{type:'cctv',kind:'Overvågning',title:'Salgskontoret',date:'01-12',camera:'KONTOR',doors:[[60,'GANG']],cast:[['Mand i jakkesæt','#2f3b55']],frames:[{t:'15:45:00',at:[[50,.4]],txt:'Manden i jakkesæt taler i telefon med en kunde.'},{t:'16:10:00',at:[[50,.4]],txt:'Stadig i telefon.'},{t:'16:35:00',at:[[50,.4]],txt:'Lægger på.'}],text:'Erik Kakao er på salgskontoret fra 15:40 til 16:40. Telefonselskabet bekræfter samtalen.'},
{type:'doc',kind:'Våbenundersøgelse',title:'Kakaosækken',src:'Kriminalteknisk Center',text:'Sækken på gulvet har ingen blod- eller hudrester. Den er lagt der bagefter. Såret indeholder jern og chokolade.'},
{type:'doc',style:'table',kind:'Hygiejnelog',title:'Smagekøkkenet',rows:[['Tid','Hændelse'],['15:00–17:00','Lukket for rengøring, låst']],after:'Smagekøkkenet var låst og under rengøring. Ingen var derinde.'}
]],
epilogue:'Leif Kakao havde brugt 30 år på at drive produktionen. I conche-hallen sagde Anton, at det var slut. Leif greb rørestangen og slog. Bagefter kørte han liget på en palleløfter ind på lageret og væltede en kakaosæk ned over det.',
headline:'Søn anholdt for drab på chokolatier'});
