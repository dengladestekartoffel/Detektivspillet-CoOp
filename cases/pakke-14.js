'use strict';
// Sagsbunke 14.

KK.push({nr:139,theme:'Svømmehal',no:'K-4501',title:'Dybt vand',when:'Tirsdag 17. november · ca. 21:00',where:'Fjordby Svømmehal',
victim:'Hanne Bølge (47), svømmetræner',victimLook:{sex:'f',hair:'short',hc:'blond',shirt:'#1f4e8a',collar:'round'},
intro:'Svømmetræneren findes død i det dybe bassin efter aftentræningen.',
brief:'Kl. 21:40 fandt en livredder svømmetræner Hanne Bølge i det dybe bassin. Hanne havde opdaget, at nogen gav unge svømmere doping.',
options:[['Karsten Klor, livredder','Mia Crawl, svømmer','Jesper Coach, assistenttræner','Ole Bølge, ægtemand'],['Drukning','Slag med startblok-del','Kvælning med svømmebånd'],['Bassinet','Maskinrummet','Træningsrummet']],answer:[2,1,1],
info:[['Livredder.','Svømmer.','Assistenttræner.','Hannes mand.'],
['Holdt under vand.','Tung metaldel fra en startblok.','Elastisk træningsbånd.'],
['Det dybe bassin. Her blev hun fundet.','Maskinrummet med klor og pumper.','Træningsrummet med vægte.']],
timeline:[['18:00','Træning.'],['20:00','Hanne beder to om en snak.'],['20:15','Hanne ses sidst.'],['21:40','Hanne findes.']],
sketch:{title:'Bassinet · fundsted',items:[['rug',200,130,320,180,0,'Bassin'],['stairs',360,60,20,30,0]],body:[200,130,40,.85],markers:[[1,240,110,'Klorpulver']]},
evidence:[[
{type:'doc',style:'note',kind:'Seddel',title:'Hannes notat',text:'Doping! Karsten og Jesper har haft adgang til de unges drikkedunke. Taler med begge kl. 20.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 22:10',text:'Ingen vand i lungerne: hun druknede ikke. Slag mod hovedet med noget tungt af metal, eller mærker om halsen fra et bånd. Hun døde mellem 20:15 og 20:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Hannes træningsdragt',bg:'tile',stamp:'K-4501 / 02',items:[['stain',100,90,1.4,0,'#f4f4f0'],['stain',220,100,1.2,0,'#3a3a3a']],caption:'Klorpulver og maskinolie. Det findes i maskinrummet og i træningsrummet, hvor gamle pumper står. Bassinkanten har kun vand.'}
],[
{type:'cctv',kind:'Overvågning',title:'Livredderstolen',date:'17-11',camera:'BASSIN 2',doors:[],cast:[['Livredder i rødt','#a3231b']],frames:[{t:'20:15:00',at:[[50,.3]],txt:'Karsten holder øje med motionister.'},{t:'20:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'20:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Karsten Klor sidder i livredderstolen ved bassin 2 fra 20:00 til 21:00.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne er fra hendes fløjtesnor. Hun døde af slaget med en metaldel.'},
{type:'doc',kind:'Rapport',title:'Træningsrummet',src:'Motionist',text:'Jeg trænede i træningsrummet fra 20 til 21. Hanne kom ikke.'}
]],
epilogue:'Jesper Coach havde givet de unge doping for at vinde. I maskinrummet slog han Hanne med en metaldel fra en startblok og smed hende i bassinet.',
headline:'Assistenttræner anholdt for drab i svømmehal'});

KK.push({nr:140,theme:'Paintball',no:'K-4502',title:'Ramt',when:'Lørdag 23. maj · ca. 14:00',where:'Paintballbanen i Skjern',
victim:'Rune Splat (38), baneejer',victimLook:{sex:'m',hair:'short',hc:'sort',beard:'stubble',shirt:'#3e5b46',collar:'round'},
intro:'Paintballbanens ejer findes død i en bunker. Han er ikke ramt af maling.',
brief:'Kl. 14:40 fandt en spiller ejeren Rune Splat død i en bunker. Rune havde opdaget, at nogen solgte banens udstyr videre.',
options:[['Søren Kugle, instruktør','Lone Maske, receptionist','Kim Spray, medejer','Pia Splat, hustru'],['Paintballgevær (slag)','Kvælning med maskestrop','Gas fra CO2-flaske'],['Bunkeren','Udstyrsrummet','Caféen']],answer:[2,0,1],
info:[['Instruktør.','Receptionist.','Medejer.','Hustru.'],
['Paintballgevær.','Strop fra en maske.','CO2-flaske.'],
['Bunkeren. Her blev han fundet.','Rummet med udstyr.','Caféen.']],
timeline:[['10:00','Spil.'],['13:00','Rune beder to om en snak.'],['13:15','Rune ses sidst.'],['14:40','Rune findes.']],
sketch:{title:'Bunkeren · fundsted',items:[['crate',200,60,200,40,0,'Sandsække'],['tree',60,200,30,30,0]],body:[200,150,40,.85],markers:[[1,240,130,'Hylde-støv']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Runes telefon',owner:'Rune Splat',lockTime:'14:45',wall:'linear-gradient(160deg,#3e5b46,#d8e030)',msgs:[{with:'Søren + Kim',m:[['me','13:00','Udstyr er solgt. I to har nøglerne. Kom nu.']]}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 15:10',text:'Slag mod hovedet med noget hårdt af plastik og metal, eller mærker om halsen fra en strop. Ingen gas i blodet. Han døde mellem 13:15 og 13:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Runes vest',bg:'grass',stamp:'K-4502 / 02',items:[['stain',100,90,1.4,0,'#888'],['cup',220,100,1.2,0]],caption:'Hyldestøv og kaffe. Det findes i udstyrsrummet og i caféen. Bunkeren har sand, og der er ingen sand på ham.'}
],[
{type:'cctv',kind:'Overvågning',title:'Spillebanen',date:'23-05',camera:'BANE',doors:[],cast:[['Instruktør med fløjte','#d46a1f']],frames:[{t:'13:15:00',at:[[50,.3]],txt:'Søren dømmer en kamp.'},{t:'13:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'13:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Søren Kugle dømmer kampe fra 13:00 til 14:00.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Ingen kvælning. Han døde af slaget med et paintballgevær.'},
{type:'doc',kind:'Rapport',title:'Caféen',src:'Receptionisten',text:'Jeg passede caféen hele tiden. Rune kom ikke.'}
]],
epilogue:'Kim Spray havde solgt udstyr bag Runes ryg. I udstyrsrummet slog han Rune med et paintballgevær og bar ham ud i bunkeren.',
headline:'Medejer anholdt for drab på paintballbane'});

KK.push({nr:141,theme:'Jagt',no:'K-4503',title:'Klapjagten',when:'Lørdag 7. november · ca. 11:00',where:'Godsets jagt, Lolland',
victim:'Godsejer Frederik Ahlefeldt (68)',victimLook:{sex:'m',hair:'short',hc:'hvid',beard:'moustache',age:'old',shirt:'#3e5b46',collar:'shirt'},
intro:'Under en klapjagt findes godsejeren død i skoven. Ingen skud blev hørt.',
brief:'Kl. 11:40 fandt en klapper godsejer Frederik Ahlefeldt død i skoven. Frederik havde opdaget, at nogen havde fældet og solgt hans skov ulovligt.',
options:[['Karl Skytte, skovfoged','Mette Ahlefeldt, datter','Henrik Bøsse, nabo','Lars Træ, tømmerhandler'],['Jagtgevær','Slag med jagtkniv-skaft','Kvælning med gevær-rem'],['Skoven','Jagthytten','Skovfogedens hus']],answer:[0,2,2],
info:[['Skovfoged. Styrer fældningen.','Datter.','Nabo og jæger.','Tømmerhandler.'],
['Gevær.','Kniv med tungt skaft.','Rem.'],
['Skoven. Her blev han fundet.','Jagthytten.','Skovfogedens hus.']],
timeline:[['09:00','Jagt.'],['10:00','Frederik beder to om en snak.'],['10:15','Frederik ses sidst.'],['11:40','Frederik findes.']],
sketch:{title:'Skoven · fundsted',items:[['tree',80,60,40,40,0],['tree',300,60,40,40,0],['tree',200,220,40,40,0]],body:[200,140,40,.85],markers:[[1,240,120,'Brænderøg']]},
evidence:[[
{type:'doc',style:'note',kind:'Seddel',title:'Frederiks notat',text:'Skoven er fældet bag min ryg. Karl og Lars står bag. Taler med dem.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 12:10',text:'Ingen skudsår. Mærker om halsen fra en læderrem, og en bule fra noget hårdt. Han døde mellem 10:15 og 10:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Frederiks jagtjakke',bg:'grass',stamp:'K-4503 / 02',items:[['stain',100,90,1.4,0,'#555'],['paper',220,100,1.2,0]],caption:'Brænderøg og papir. Det findes i skovfogedens hus og jagthytten. Skovbunden har blade, og der er ingen blade på ryggen.'}
],[
{type:'doc',style:'table',kind:'Kontrakt',title:'Lars’ møde',rows:[['Tid','Hvem'],['10:00–11:00','Lars Træ · møde hos banken i Nakskov']],after:'Banken bekræfter.'},
{type:'doc',kind:'Supplerende obduktion',title:'Bulen',src:'Retsmedicinsk Institut',text:'Bulen er fra faldet. Han døde af kvælning med en gevær-rem.'},
{type:'doc',kind:'Rapport',title:'Jagthytten',src:'Kokken',text:'Jeg lavede frokost i jagthytten. Frederik kom ikke.'}
]],
epilogue:'Karl Skytte havde solgt godsets skov. I sit hus kvalte han Frederik med en gevær-rem og bar ham ud i skoven.',
headline:'Skovfoged anholdt for drab under jagt'});

KK.push({nr:142,theme:'Fiskekonkurrence',no:'K-4504',title:'Den store gedde',when:'Søndag 14. juni · ca. 10:00',where:'Gudenåen, Silkeborg',
victim:'Bent Krog (57), arrangør',victimLook:{sex:'m',hair:'short',hc:'grå',beard:'stubble',age:'old',shirt:'#3e7b46',collar:'shirt'},
intro:'Fiskekonkurrencens arrangør findes død ved åen. Vinderfisken var snyd.',
brief:'Kl. 10:40 fandt en lystfisker arrangør Bent Krog død ved åbredden. Bent havde opdaget, at vinderen havde købt sin gedde i en fiskebutik.',
options:[['Lars Snøre, lystfisker','Mona Vægt, dommer','Erik Båd, bådudlejer','Lis Krog, hustru'],['Drukning','Slag med fiskeklods','Kvælning med fiskeline'],['Åbredden','Vejeteltet','Bådehuset']],answer:[0,1,2],
info:[['Lystfisker. Vandt med en kæmpe gedde.','Dommer. Vejer fiskene.','Bådudlejer.','Hustru.'],
['Åen.','Klods til at slå fisk.','Fiskeline.'],
['Åbredden. Her blev han fundet.','Telt hvor fisk vejes.','Bådehuset.']],
timeline:[['06:00','Konkurrence.'],['09:00','Bent beder to om en snak.'],['09:15','Bent ses sidst.'],['10:40','Bent findes.']],
sketch:{title:'Åbredden · fundsted',items:[['rug',200,60,320,60,0,'Åen'],['tree',60,200,30,30,0]],body:[200,150,40,.85],markers:[[1,240,130,'Fiskeskæl']]},
evidence:[[
{type:'audio',style:'voicemail',kind:'Telefonsvarer',label:'Bent til forbundet',meta:'09:02',lines:[['Bent Krog','Vinderfisken er købt. Lars og Mona må have aftalt det. Jeg taler med dem nu.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 11:10',text:'Ingen vand i lungerne. Slag mod hovedet med noget lille og tungt, eller mærker fra en tynd line. Han døde mellem 09:15 og 09:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Bents vest',bg:'grass',stamp:'K-4504 / 02',items:[['stain',100,90,1.4,0,'#c9ccd0'],['stain',220,100,1.2,0,'#6b4a2b']],caption:'Fiskeskæl og bådlak. Det findes i vejeteltet og bådehuset. Åbredden har mudder, men ikke på ryggen.'}
],[
{type:'cctv',kind:'Overvågning',title:'Vejeteltet',date:'14-06',camera:'TELT',doors:[[160,'VÆGT']],cast:[['Dommer med clipboard','#5b3f66']],frames:[{t:'09:15:00',at:[[50,.3]],txt:'Mona vejer fisk.'},{t:'09:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'09:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Mona Vægt vejer fisk fra 09:00 til 10:00. Bent kom ikke ind.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Ingen kvælning. Han døde af slaget med en fiskeklods.'}
]],
epilogue:'Lars Snøre havde købt gedden og vundet. I bådehuset slog han Bent med en fiskeklods og slæbte ham ned til åbredden.',
headline:'Lystfisker anholdt for drab ved Gudenåen'});

KK.push({nr:143,theme:'Flymuseum',no:'K-4505',title:'Spitfire',when:'Tirsdag 8. september · ca. 17:00',where:'Danmarks Flymuseum, Stauning',
victim:'Erik Propel (66), museumsleder',victimLook:{sex:'m',hair:'short',hc:'hvid',glasses:true,age:'old',shirt:'#1f2a44',collar:'shirt'},
intro:'Museumslederen findes død i cockpittet på et gammelt fly.',
brief:'Kl. 17:40 fandt en frivillig museumsleder Erik Propel død i cockpittet på en Spitfire. Erik havde opdaget, at nogen havde solgt originale flydele og sat kopier i.',
options:[['Bjarne Vinge, frivillig','Hanne Hangar, restaurator','Per Pilot, samler','Inge Propel, hustru'],['Slag med propel-del','Kvælning med sikkerhedssele','Gift i kaffe'],['Cockpittet','Restaureringsværkstedet','Lageret']],answer:[1,0,1],
info:[['Frivillig.','Restaurator.','Samler.','Hustru.'],
['Tung propel-del.','Sele.','Kaffe.'],
['Cockpittet. Her blev han fundet.','Værksted.','Lager.']],
timeline:[['14:00','Museet lukker.'],['15:30','Erik beder to om en snak.'],['15:45','Erik ses sidst.'],['17:40','Erik findes.']],
sketch:{title:'Cockpittet · fundsted',items:[['car',200,110,260,70,0,'Spitfire']],body:[200,110,0,.6],markers:[[1,240,90,'Metalspåner']]},
evidence:[[
{type:'computer',kind:'Computer',title:'Museets pc',owner:'Museet',user:'Erik',password:'spitfire',hint:'Flyet han blev fundet i.',files:[{name:'Dele.xlsx',time:'15:20',body:'Originale dele solgt. Arbejdet udført af: H. Hangar / B. Vinge.'}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 18:10',text:'Slag mod hovedet med noget tungt af metal, eller mærker om halsen fra en sele. Ingen tegn på gift. Han døde mellem 15:45 og 16:15.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Eriks jakke',bg:'stone',stamp:'K-4505 / 02',items:[['stain',100,90,1.4,0,'#c9ccd0'],['stain',220,100,1.2,0,'#555']],caption:'Metalspåner og olie. Det findes i værkstedet og på lageret. Cockpittet har kun læder.'}
],[
{type:'cctv',kind:'Overvågning',title:'Museets indgang',date:'08-09',camera:'INDGANG',doors:[[160,'DØR']],cast:[['Frivillig med kasket','#d8b53e']],frames:[{t:'15:45:00',at:[[50,.3]],txt:'Bjarne viser en skoleklasse rundt.'},{t:'16:00:00',at:[[50,.3]],txt:'Stadig.'},{t:'16:15:00',at:[[50,.3]],txt:'Stadig.'}],text:'Bjarne Vinge viser rundt fra 15:30 til 16:30.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Ingen kvælning. Han døde af slaget med en propel-del.'},
{type:'doc',kind:'Rapport',title:'Lageret',src:'Vagt',text:'Lageret var låst. Nøglen var hos mig.'},
{type:'doc',style:'note',kind:'Seddel',title:'Ved pc’en',text:'Kode: spitfire'}
]],
epilogue:'Hanne Hangar havde solgt originale dele og sat kopier i. I værkstedet slog hun Erik med en propel-del og satte ham i cockpittet.',
headline:'Restaurator anholdt for drab på flymuseum'});

KK.push({nr:144,theme:'Ubåd',no:'K-4506',title:'Periskop',when:'Lørdag 3. oktober · ca. 18:00',where:'Ubåden "Sælen" på Marinemuseet, Aalborg',
victim:'Ove Torpedo (69), museumsfrivillig',victimLook:{sex:'m',hair:'short',hc:'hvid',beard:'full',age:'old',shirt:'#1f2a44',collar:'turtle'},
intro:'En gammel ubådsmatros findes død inde i museets ubåd efter lukketid.',
brief:'Kl. 18:40 fandt en vagt den frivillige Ove Torpedo død i ubådens torpedorum. Ove havde opdaget, at nogen solgte museets gamle instrumenter på nettet.',
options:[['Søren Sonar, frivillig','Gitte Kompas, kurator','Bo Torpedo, søn','Ali Anker, tekniker'],['Slag med rørtang','Kvælning med ankerline','Gas fra batterirum'],['Torpedorummet','Kontrolrummet','Butikken']],answer:[1,0,1],
info:[['Frivillig.','Kurator. Har nøgler til montrerne.','Søn.','Tekniker.'],
['Rørtang.','Line.','Gas.'],
['Torpedorummet. Her blev han fundet.','Kontrolrummet med periskop.','Museets butik.']],
timeline:[['16:00','Museet lukker.'],['16:30','Ove beder to om en snak.'],['16:45','Ove ses sidst.'],['18:40','Ove findes.']],
sketch:{title:'Torpedorummet · fundsted',items:[['barrel',200,60,300,30,0,'Torpedorør'],['shelf',40,180,20,80,0]],body:[200,170,90,.8],markers:[[1,240,150,'Messingpuds']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Oves telefon',owner:'Ove Torpedo',lockTime:'18:45',wall:'linear-gradient(160deg,#1f2a44,#c9a43a)',msgs:[{with:'Søren + Gitte',m:[['me','16:30','Instrumenterne sælges på nettet. Kun I to har nøgler. Kom nu.']]}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 19:10',text:'Slag mod hovedet med noget tungt af metal, eller mærker om halsen fra en line. Ingen gas i blodet. Han døde mellem 16:45 og 17:15.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Oves trøje',bg:'stone',stamp:'K-4506 / 02',items:[['stain',100,90,1.4,0,'#c9a43a'],['ticket',220,100,1.2,0]],caption:'Messingpuds og prismærker. Messing pudses i kontrolrummet og i butikken, hvor prismærker også bruges. Torpedorummet har kun olie.'}
],[
{type:'cctv',kind:'Overvågning',title:'Kajen',date:'03-10',camera:'KAJ',doors:[],cast:[['Frivillig i gul regnjakke','#d8b53e']],frames:[{t:'16:45:00',at:[[50,.3]],txt:'Søren fejer kajen.'},{t:'17:00:00',at:[[50,.3]],txt:'Stadig.'},{t:'17:15:00',at:[[50,.3]],txt:'Stadig.'}],text:'Søren Sonar fejer kajen fra 16:40 til 17:30.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Ingen kvælning. Han døde af slaget med en rørtang.'},
{type:'doc',kind:'Rapport',title:'Butikken',src:'Kasseassistent',text:'Jeg talte kassen i butikken fra 16 til 17:30. Ove kom ikke.'}
]],
epilogue:'Gitte Kompas solgte museets instrumenter. I kontrolrummet ved periskopet slog hun Ove med en rørtang og slæbte ham ned i torpedorummet.',
headline:'Kurator anholdt for drab i ubåd'});

KK.push({nr:145,theme:'Bibliotek',no:'K-4507',title:'Stilhed, tak',when:'Torsdag 19. februar · ca. 19:30',where:'Hovedbiblioteket, Odense',
victim:'Karen Bog (61), bibliotekar',victimLook:{sex:'f',hair:'bun',hc:'grå',glasses:true,age:'old',shirt:'#5b3f66',collar:'turtle'},
intro:'Bibliotekaren findes død mellem reolerne. En sjælden bog er skåret ud.',
brief:'Kl. 20:10 fandt en låner bibliotekar Karen Bog død mellem reolerne. Karen havde opdaget, at nogen skar kort og billeder ud af gamle bøger og solgte dem.',
options:[['Lise Låner, frivillig','Torben Hylde, bibliotekar','Peter Kort, antikvar','Bent Bog, ægtemand'],['Slag med bogstøtte','Kvælning med bogbind-snor','Gift i te'],['Mellem reolerne','Magasinet','Læsesalen']],answer:[2,0,1],
info:[['Frivillig.','Bibliotekar.','Antikvar. Køber gamle kort.','Karens mand.'],
['Bogstøtte af jern.','Snor.','Te.'],
['Mellem reolerne. Her blev hun fundet.','Magasinet med gamle bøger.','Læsesalen.']],
timeline:[['17:00','Karen opdager hærværket.'],['18:30','Karen beder to om en snak.'],['18:45','Karen ses sidst.'],['20:10','Karen findes.']],
sketch:{title:'Mellem reolerne · fundsted',items:[['shelf',100,130,24,200,0],['shelf',300,130,24,200,0]],body:[200,140,10,.85],markers:[[1,230,120,'Papirstøv']]},
evidence:[[
{type:'doc',style:'table',kind:'Udlånslog',title:'Hvem har set de gamle bøger',rows:[['Dato','Hvem'],['12.02','T. Hylde'],['15.02','P. Kort (læsesal)'],['17.02','P. Kort (læsesal)']],after:'Karen skrev: "Torben og Peter Kort, kom kl. 18:30."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 20:40',text:'Slag mod hovedet med noget tungt af jern, eller mærker om halsen fra en snor. Ingen tegn på gift. Hun døde mellem 18:45 og 19:15.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Karens trøje',bg:'carpet',stamp:'K-4507 / 02',items:[['paper',100,90,1.4,0],['stain',220,100,1.2,0,'#888']],caption:'Gammelt papirstøv og fugt. Det findes i magasinet og læsesalen, hvor gamle bøger ligger. Reolerne er nye og støvfri.'}
],[
{type:'cctv',kind:'Overvågning',title:'Personalerummet',date:'19-02',camera:'PERSONALE',doors:[[160,'DØR']],cast:[['Bibliotekar med cardigan','#3e5b46']],frames:[{t:'18:45:00',at:[[50,.3]],txt:'Torben i telefonmøde.'},{t:'19:00:00',at:[[50,.3]],txt:'Stadig.'},{t:'19:15:00',at:[[50,.3]],txt:'Stadig.'}],text:'Torben Hylde er i personalerummet fra 18:40 til 19:30.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Ingen kvælning. Hun døde af slaget med en bogstøtte.'},
{type:'doc',kind:'Rapport',title:'Læsesalen',src:'Låner',text:'Jeg sad i læsesalen hele aftenen. Karen kom ikke ind.'}
]],
epilogue:'Peter Kort skar gamle kort ud af bøgerne og solgte dem. I magasinet slog han Karen med en bogstøtte og bar hende ud mellem reolerne.',
headline:'Antikvar anholdt for drab på bibliotek'});

KK.push({nr:146,theme:'Forlag',no:'K-4508',title:'Bestseller',when:'Tirsdag 12. maj · ca. 21:00',where:'Forlaget Blæk & Papir, København',
victim:'Vibeke Blæk (54), forlagsdirektør',victimLook:{sex:'f',hair:'bob',hc:'rød',glasses:true,age:'mid',shirt:'#2b2e33',collar:'v'},
intro:'Forlagsdirektøren findes død aftenen før lanceringen af årets bestseller. Manuskriptet var plagieret.',
brief:'Kl. 21:40 fandt en redaktør direktør Vibeke Blæk død i lageret. Vibeke havde opdaget, at årets store roman var skrevet af en anden.',
options:[['Martin Pen, forfatter','Sanne Rød, redaktør','Ib Blæk, ægtemand','Laura Skygge, ghostwriter'],['Slag med bogkasse','Kvælning med lanyard','Gift i vin'],['Lageret','Redaktionen','Festlokalet']],answer:[0,0,1],
info:[['Forfatter. Hans navn står på romanen.','Redaktør.','Vibekes mand.','Ghostwriter. Har skrevet romanen.'],
['Tung kasse med bøger.','Navneskiltsnor.','Vin.'],
['Lageret. Her blev hun fundet.','Redaktionen.','Festlokalet.']],
timeline:[['19:00','Forberedelse af lancering.'],['20:00','Vibeke beder to om en snak.'],['20:15','Vibeke ses sidst.'],['21:40','Vibeke findes.']],
sketch:{title:'Lageret · fundsted',items:[['crate',80,80,40,40,0],['crate',140,80,40,40,0],['crate',300,200,40,40,0]],body:[200,150,40,.85],markers:[[1,240,130,'Rødt blæk']]},
evidence:[[
{type:'computer',kind:'Computer',title:'Vibekes pc',owner:'Vibeke Blæk',user:'Vibeke',password:'roman',hint:'Det, de skal lancere.',mail:[{from:'Vibeke',to:'Martin Pen; Laura Skygge',time:'20:00',subject:'Romanen',body:'Jeg ved, hvem der har skrevet den. Mød mig nu, begge to.'}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 22:10',text:'Slag mod hovedet med noget tungt og kantet, eller mærker om halsen fra en snor. Ingen tegn på gift. Hun døde mellem 20:15 og 20:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Vibekes blazer',bg:'carpet',stamp:'K-4508 / 02',items:[['stain',100,90,1.4,0,'#a3231b'],['paper',220,100,1.2,0]],caption:'Rødt korrekturblæk og papir. Det findes på redaktionen og i festlokalet, hvor manuskripter blev udstillet. Lageret har kun pap.'}
],[
{type:'cctv',kind:'Overvågning',title:'Laura i caféen',date:'12-05',camera:'CAFÉ',doors:[[160,'DØR']],cast:[['Kvinde med notesbog','#5b3f66']],frames:[{t:'20:15:00',at:[[50,.3]],txt:'Laura skriver.'},{t:'20:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'20:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Laura Skygge sidder på en café på Nørrebro fra 20:05 til 21:00.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Ingen kvælning. Hun døde af slaget med en bogkasse.'},
{type:'doc',kind:'Rapport',title:'Festlokalet',src:'Catering',text:'Vi stillede op i festlokalet hele aftenen. Vibeke kom ikke.'},
{type:'doc',style:'note',kind:'Seddel',title:'Post-it',text:'pc: roman'}
]],
epilogue:'Martin Pen havde fået Laura til at skrive romanen og sat sit eget navn på. På redaktionen slog han Vibeke med en kasse bøger og bar hende ind på lageret.',
headline:'Forfatter anholdt for drab på forlag'});

KK.push({nr:147,theme:'Skihal',no:'K-4509',title:'Kunstsne',when:'Søndag 22. februar · ca. 17:00',where:'Skihallen i Hedensted',
victim:'Anja Pist (42), skiinstruktør',victimLook:{sex:'f',hair:'long',hc:'blond',shirt:'#a3231b',collar:'turtle'},
intro:'En skiinstruktør findes død for foden af pisten i den indendørs skihal.',
brief:'Kl. 17:40 fandt en elev skiinstruktør Anja Pist død for foden af pisten. Anja havde opdaget, at nogen havde snydt med sikkerheden på liften.',
options:[['Martin Lift, teknisk chef','Sara Sne, instruktør','Jonas Pist, ejer','Bente Ski, mor'],['Fald på pisten','Slag med skistav','Kvælning med halsedisse'],['Bunden af pisten','Liftrummet','Skiudlejningen']],answer:[0,1,1],
info:[['Teknisk chef. Styrer liften.','Instruktør.','Ejer.','Mor.'],
['Fald.','Skistav.','Halsedisse.'],
['Bunden af pisten. Her blev hun fundet.','Rummet med liftens motor.','Skiudlejningen.']],
timeline:[['10:00','Skiskole.'],['16:00','Anja beder to om en snak.'],['16:15','Anja ses sidst.'],['17:40','Anja findes.']],
sketch:{title:'Bunden af pisten · fundsted',items:[['rug',200,60,320,80,0,'Piste'],['crate',80,200,40,30,0]],body:[200,170,40,.85],markers:[[1,240,150,'Olie']]},
evidence:[[
{type:'audio',style:'voicemail',kind:'Telefonsvarer',label:'Anja til ejerens advokat',meta:'16:02',lines:[['Anja Pist','Liften er ikke sikker. Martin og Jonas ved det. Jeg vil tale med dem nu.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 18:10',text:'Ingen faldskader. Mærker om halsen fra stof, og en bule fra noget langt og hårdt. Hun døde mellem 16:15 og 16:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Anjas jakke',bg:'snow',stamp:'K-4509 / 02',items:[['stain',100,90,1.4,0,'#3a3a3a'],['stain',220,100,1.2,0,'#ddd']],caption:'Maskinolie og voks. Det findes i liftrummet og skiudlejningen. Pisten har sne, og der er ingen sne på ryggen.'}
],[
{type:'cctv',kind:'Overvågning',title:'Ejerens kontor',date:'22-02',camera:'KONTOR',doors:[[160,'DØR']],cast:[['Ejer i blå jakke','#1f4e8a']],frames:[{t:'16:15:00',at:[[50,.3]],txt:'Jonas i møde med bank.'},{t:'16:30:00',at:[[50,.3]],txt:'Stadig.'},{t:'16:45:00',at:[[50,.3]],txt:'Stadig.'}],text:'Jonas Pist er i møde på sit kontor fra 16:00 til 17:00.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne er fra hendes egen halsedisse. Hun døde af slaget med en skistav.'},
{type:'doc',kind:'Rapport',title:'Skiudlejningen',src:'Udlejer',text:'Jeg stod i udlejningen hele eftermiddagen. Anja kom ikke.'}
]],
epilogue:'Martin Lift havde sprunget sikkerhedstjek over. I liftrummet slog han Anja med en skistav og slæbte hende ned til bunden af pisten.',
headline:'Teknisk chef anholdt for drab i skihal'});

KK.push({nr:148,theme:'Minigolf',no:'K-4510',title:'Hul 18',when:'Lørdag 8. august · ca. 21:30',where:'Piratminigolf, Blokhus',
victim:'Bjarne Pirat (53), minigolfejer',victimLook:{sex:'m',hair:'short',hc:'brun',beard:'full',shirt:'#c94a3b',collar:'round'},
intro:'Ejeren af minigolfbanen findes død ved hul 18. Sommerens penge er væk.',
brief:'Kl. 22:10 fandt en gæst minigolfejer Bjarne Pirat død ved hul 18 under piratskibet. Bjarne havde opdaget, at nogen stjal fra kassen hver aften.',
options:[['Line Kølle, ansat','Kasper Bold, ansat','Rita Pirat, hustru','Tom Is, iskioskejer'],['Slag med golfkølle','Kvælning med piratreb','Gift i sodavand'],['Ved hul 18','Billetboden','Redskabsskuret']],answer:[1,0,2],
info:[['Ansat.','Ansat.','Hustru.','Iskioskejer.'],
['Minigolfkølle.','Reb fra piratskibet.','Sodavand.'],
['Ved hul 18. Her blev han fundet.','Billetboden.','Redskabsskuret.']],
timeline:[['18:00','Travl aften.'],['20:30','Bjarne beder to om en snak.'],['20:45','Bjarne ses sidst.'],['22:10','Bjarne findes.']],
sketch:{title:'Ved hul 18 · fundsted',items:[['car',200,80,200,60,0,'Piratskib'],['roundtable',200,200,40,40,0,'Hul 18']],body:[120,190,40,.85],markers:[[1,160,170,'Græsrester']]},
evidence:[[
{type:'doc',style:'table',kind:'Kasselog',title:'Hvem lukkede kassen',rows:[['Dag','Lukket af','Manko'],['Mandag','L. Kølle','-800'],['Tirsdag','K. Bold','-1.200'],['Onsdag','K. Bold','-900']],after:'Bjarne skrev: "Line og Kasper, mød mig kl. 20:30."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 22:40',text:'Slag mod hovedet med noget lille og hårdt af metal, eller mærker fra et groft reb. Ingen tegn på gift. Han døde mellem 20:45 og 21:15.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Bjarnes t-shirt',bg:'grass',stamp:'K-4510 / 02',items:[['stain',100,90,1.4,0,'#6a8a3a'],['coin',220,100,1.2,0]],caption:'Afklippet græs og mønter. Græsslåmaskinen står i redskabsskuret, og mønter er i billetboden og skuret, hvor kassen gemmes. Banen ved hul 18 er kunstgræs.'}
],[
{type:'cctv',kind:'Overvågning',title:'Billetboden',date:'08-08',camera:'BOD',doors:[[160,'LUGE']],cast:[['Ansat med piratbandana','#111']],frames:[{t:'20:45:00',at:[[50,.3]],txt:'Line sælger billetter.'},{t:'21:00:00',at:[[50,.3]],txt:'Stadig.'},{t:'21:15:00',at:[[50,.3]],txt:'Stadig.'}],text:'Line Kølle står i billetboden fra 20:30 til 21:30. Bjarne kom ikke ind.'},
{type:'doc',kind:'Supplerende obduktion',title:'Reb',src:'Retsmedicinsk Institut',text:'Ingen rebmærker. Han døde af slaget med en minigolfkølle.'}
]],
epilogue:'Kasper Bold havde stjålet fra kassen hver aften. I redskabsskuret slog han Bjarne med en minigolfkølle og slæbte ham hen til hul 18.',
headline:'Ansat anholdt for drab på minigolfbane'});
