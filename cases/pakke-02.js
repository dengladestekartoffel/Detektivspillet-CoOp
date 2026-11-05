'use strict';
// Sagsbunke 2 · sag 19–28. Feltagenten indsnævrer til to i hver kategori, Centralen udelukker én.

KK.push({nr:19,theme:'Antikvariat',no:'K-3301',title:'Den sidste udgave',when:'Tirsdag 4. februar · ca. 17:30',where:'Gyldenblad Antikvariat, Fiolstræde, København',
victim:'Aksel Gyldenblad (71), antikvar',victimLook:{sex:'m',hair:'bald',hc:'hvid',age:'old',glasses:true,shirt:'#5a3a22',collar:'shirt'},
intro:'En gammel antikvar findes død mellem reolerne. En førsteudgave af H.C. Andersen er væk.',
brief:'Kl. 18:10 fandt en kunde antikvar Aksel Gyldenblad død bag disken. Samme formiddag havde han fået en førsteudgave af "Eventyr, fortalte for Børn" fra 1835 vurderet til 2,3 mio. kr. Bogen er forsvundet fra pengeskabet.',
options:[['Ulrik Brahe, samler','Nanna Gyldenblad, datter','Selma Ravn, vurderingskvinde','Ib Nordal, nabobutik'],['Bogstøtte af marmor','Papirkniv','Arsenik i kaffe'],['Kælderlageret','Butikken','Restaureringsværkstedet']],answer:[2,0,2],
info:[['Bogsamler. Har budt 1,5 mio. og fik nej.','Datteren. Skal arve butikken og er træt af at vente.','Vurderingskvinde fra auktionshuset. Var den eneste udover Aksel, der kendte koden til pengeskabet.','Ejer af tøjbutikken ved siden af. Uenig med Aksel om en fælles gård.'],
['Tung bogstøtte i grå marmor, formet som en ugle.','Spinkel papirkniv i messing.','Aksel drak kaffe fra en termokande hver eftermiddag.'],
['Fugtigt lager med kasser af bøger.','Selve butikken. Her blev han fundet.','Lille værksted med lim, læder og papirstøv.']],
timeline:[['10:00','Selma Ravn vurderer bogen.'],['16:30','Butikken lukker for kunder.'],['17:00','Aksel er alene tilbage.'],['18:10','En kunde finder Aksel.']],
sketch:{title:'Butikken · fundsted',items:[['shelf',60,130,24,200,0],['shelf',340,130,24,200,0],['counter',200,60,140,26,0,'Disk'],['door',180,248,40,0,180]],body:[200,140,40,.9],markers:[[1,240,110,'Læderstøv på ærmet']]},
evidence:[[
{type:'doc',style:'table',kind:'Låselog',title:'Pengeskabet',src:'Sikkerhedsfirmaet Vagtel',rows:[['Tid','Hændelse','Kode brugt'],['10:12','Åbnet','Aksels kode'],['10:40','Lukket','—'],['17:21','Åbnet','Gæstekode 2'],['17:24','Lukket','—']],after:'Kun to koder virker: Aksels egen og gæstekode 2, som Aksel gav til to personer: sin datter og vurderingskvinden fra auktionshuset.'},
{type:'autopsy',kind:'Obduktion',title:'Obduktionserklæring',jnr:'RM-0205/33',fields:[['Afdøde','Aksel Gyldenblad'],['Obducent','Overlæge Mette Holst'],['Anslået dødstidspunkt','Kl. 17:15–17:45']],sections:[['Udvendige fund','Ét kraftigt slag mod tindingen fra en tung, stump genstand. Ingen stik- eller snitsår.'],['Indvendige fund','Kraniebrud. Maven indeholder kaffe; prøven er sendt til analyse, da forgiftning ikke er udelukket.']],marks:[[48,20,'1']],signer:'Mette Holst, overlæge'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Aksels jakke',bg:'carpet',stamp:'K-3301 / 02',items:[['stain',100,90,1.5,0,'#c9b48a'],['book',220,100,1.3,10]],caption:'Lys læderstøv og limrester på ærmerne. Den slags findes kun i restaureringsværkstedet og i kælderlageret, hvor gamle bind opbevares. Han blev flyttet ind i butikken efter døden.'}
],[
{type:'phone',kind:'Mobiltelefon',title:'Nanna Gyldenblads telefon',owner:'Nanna Gyldenblad',lockTime:'18:40',wall:'linear-gradient(160deg,#1f3b4d,#6b8aa6)',maps:[['16:50','Aarhus H · Perron 4'],['17:10','IC-tog mod København · Odense'],['17:45','IC-tog · Storebælt'],['18:30','IC-tog · Roskilde']],msgs:[{with:'Far',m:[['me','16:48','Tager toget nu. Er hos dig ved ni-tiden.']]}],photos:[{bg:'tile',items:[['ticket',160,100,1.8,0]],caption:'Togbillet',meta:'04.02 · 16:47 · Aarhus H'}]},
{type:'doc',style:'table',kind:'Laboratoriesvar',title:'Toksikologi',src:'Retskemisk Afdeling',rows:[['Prøve','Fund'],['Kaffe fra termokande','Ingen gift'],['Blod','Ingen gift']],after:'Forgiftning er udelukket.'},
{type:'audio',style:'voicemail',kind:'Vidneforklaring',label:'Afhøring af lærling Theo',meta:'Optaget 04.02 kl. 19:30',lines:[['Betjent','Var du i kælderlageret i eftermiddag?'],['Theo','Ja, fra fire til halv syv. Jeg sorterede dødsboet fra Hellerup. Kælderdøren knirker, jeg ville have hørt, hvis nogen kom ned.'],['Betjent','Kom Aksel derned?'],['Theo','Ikke efter frokost. Han var oppe i værkstedet med et eller andet bind.']]}
]],
epilogue:'Selma Ravn havde en køber i Schweiz, der ville betale det dobbelte. Hun kom tilbage efter lukketid og tog bogen fra pengeskabet med gæstekoden. Aksel overraskede hende, da hun gik gennem værkstedet. Hun greb uglen af marmor fra arbejdsbordet. Bagefter slæbte hun ham ud i butikken. Læderstøvet fortalte, hvor han virkelig døde.',
headline:'Vurderingskvinde anholdt: drab for H.C. Andersen-bog'});

KK.push({nr:20,theme:'Cirkus',no:'K-3302',title:'Sidste nummer',when:'Lørdag 16. maj · ca. 21:40',where:'Cirkus Stella, teltet ved Bellahøj',
victim:'Romano Stella (58), cirkusdirektør',victimLook:{sex:'m',hair:'short',hc:'sort',beard:'moustache',age:'old',shirt:'#a3231b',collar:'shirt'},
intro:'Cirkusdirektøren findes død i manegen efter forestillingen. Klovnen griner ikke længere.',
brief:'Kl. 22:15, da publikum var gået, fandt en staldkarl direktør Romano Stella liggende midt i manegen under spotlyset. Cirkuset var på randen af konkurs, og Romano havde netop solgt navnet "Cirkus Stella" til et tysk selskab uden at spørge familien.',
options:[['Bella Stella, linedanser','Pippo, klovn','Dragan Ilić, dyretræmmer','Karla Stella, søster'],['Jongleringskølle','Trapez-wire','Elefant-beroligende'],['Manegen','Dyrevognen','Garderobevognen']],answer:[1,0,2],
info:[['Romanos datter. Linedanser. Mister sin arv, når navnet er solgt.','Klovn i 30 år. Romano har lovet ham at overtage cirkuset.','Dyretræmmer. Har adgang til beroligende midler til elefanterne.','Romanos søster. Ejer halvdelen af teltet.'],
['Tung træ-kølle fra jonglørens kuffert.','Stålwire fra trapezen, to meter.','En sprøjte med elefant-beroligende fra dyrevognen.'],
['Selve manegen. Her blev han fundet.','Vognen med elefanter og heste. Halm og møg.','Vognen med kostumer og sminke.']],
timeline:[['19:30','Forestillingen begynder.'],['21:10','Finale. Alle artister i manegen.'],['21:25','Publikum går.'],['22:15','Romano findes i manegen.']],
sketch:{title:'Manegen · fundsted',items:[['roundtable',200,130,200,200,0],['label',200,30,0,0,0,'TRIBUNE'],['door',360,230,30,0,180]],body:[200,130,0,.9],markers:[[1,240,110,'Sminkepudder på kraven']]},
evidence:[[
{type:'cctv',kind:'Overvågning',title:'Artistindgangen',src:'Cirkusets kamera',date:'16-05',camera:'BAGINDGANG',doors:[[80,'MANEGE'],[240,'VOGNE']],cast:[['Ternet klovnedragt','#d8b53e'],['Glitterdragt','#c2a0e8'],['Sort jakke','#222']],
frames:[{t:'21:26:00',at:[[40,.5],[60,.5],null],txt:'Artisterne går ud efter finalen.'},{t:'21:30:12',at:[[24,0],null,null],txt:'Klovnedragt går tilbage mod manegen.'},{t:'21:33:40',at:[[24,0],[25,.1],null],txt:'Glitterdragt følger efter.'},{t:'21:38:00',at:[null,[70,.6],[80,.6]],txt:'Glitterdragt går mod vognene. Sort jakke går forbi udenfor.'},{t:'21:52:10',at:[[75,0],null,null],txt:'Klovnedragt går mod vognene.'}],text:'Kun personer i klovnedragt og glitterdragt gik ind til manegen og vognene efter forestillingen. Kun Pippo går i ternet klovnedragt, og kun Bella i glitterdragt.'},
{type:'doc',kind:'Rapport',title:'Ligsyn på stedet',src:'Lægevagten · 22:40',text:'Kraftigt slag mod nakken med et rundt, tungt træstykke, eller tydeligt mærke rundt om halsen fra noget tyndt og hårdt. Begge dele er til stede, og det er uklart, hvad der kom først. Der er intet stikmærke, så en indsprøjtning er usandsynlig. Han døde mellem kl. 21:35 og 22:00.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Romanos jakke',bg:'sand',stamp:'K-3302 / 04',items:[['stain',100,90,1.4,0,'#f2d0c0'],['button',220,100,1.2,0,'#d8b53e']],caption:'Hvidt sminkepudder på kraven og glitterpailletter i lommen. Begge dele findes i garderobevognen, men pailletterne drysser også i manegen, hvor Bella optræder. Der er ingen halm eller dyrehår på ham, så dyrevognen kan udelukkes.'}
],[
{type:'audio',style:'radio',kind:'Lydoptagelse',label:'Bellas videoopkald med sin kæreste',meta:'21:34–22:05 · optaget af kæresten',lines:[['Bella','Hej! Jeg sidder på trappen ved vognene. Jeg gider ikke snakke med far i aften.'],['Kæreste','Er du stadig derude? Klokken er ti.'],['Bella','Ja, jeg har siddet her hele tiden. Der er koldt.'],['Kæreste','Kom nu hjem.']]},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærket om halsen stammer fra Romanos egen guldkæde, som er blevet strammet i faldet. Der er ingen indre kvælningsskader. Dødsårsagen er slaget mod nakken.'},
{type:'doc',style:'note',kind:'Seddel',title:'Fundet i manegen',text:'Manegen blev fejet og revet med friskt sand kl. 21:45 af staldkarlen. Sandet var urørt, da Romano blev fundet. Han må være lagt der, efter at staldkarlen gik kl. 22:00.\n– Kriminalteknikeren'}
]],
epilogue:'Pippo havde fået løfte om at overtage cirkuset efter 30 år. Da han hørte om salget, gik han ind i garderobevognen, hvor Romano sad og talte penge. Han slog ham i nakken med en jongleringskølle. Bagefter bar han liget ud i manegen under spotlyset, som et sidste nummer. Klovnesminken på kraven afslørede ham.',
headline:'Klovn anholdt for drab på cirkusdirektør'});

KK.push({nr:21,theme:'Lufthavn',no:'K-3303',title:'Forsinket afgang',when:'Søndag 2. august · ca. 06:10',where:'Kastrup Lufthavn, Terminal 3',
victim:'Jesper Winther (44), pilot',victimLook:{sex:'m',hair:'short',hc:'blond',shirt:'#1f2a44',collar:'shirt'},
intro:'En pilot findes død i et bagagerum, en time før han skulle flyve til Bangkok.',
brief:'Kl. 06:55 fandt en bagagemedarbejder kaptajn Jesper Winther død bag en container i bagagehallen. Han skulle have fløjet kl. 07:20. Jesper havde dagen før anmeldt en kollega til luftfartsmyndighederne for at flyve påvirket.',
options:[['Rikke Bom, styrmand','Hassan Ali, flymekaniker','Pia Lund, stewardesse','Søren Kold, sikkerhedsvagt'],['Momentnøgle','Kaffe med sovemiddel','Bagagestrop'],['Bagagehallen','Hangar 4','Crew-loungen']],answer:[0,1,2],
info:[['Styrmand. Det var hende, Jesper anmeldte. Risikerer at miste sit certifikat.','Mekaniker. Jesper klagede over hans arbejde i sidste uge.','Stewardesse og Jespers ekskone.','Sikkerhedsvagt. Har adgang til alle zoner.'],
['Tung momentnøgle fra værktøjstavlen i hangaren.','Kaffe i crew-loungen. Der var sovepiller i en stewardesses taske.','Gul strop til at spænde bagage fast.'],
['Hal med transportbånd og containere. Her blev han fundet.','Hangar med fly til service.','Lounge kun for besætning, med kaffe og sofaer.']],
timeline:[['05:20','Besætningen møder ind.'],['05:40','Briefing i crew-loungen.'],['06:10','Jesper forlader briefingen.'],['06:55','Jesper findes i bagagehallen.']],
sketch:{title:'Bagagehallen · fundsted',items:[['counter',200,60,320,20,0,'Transportbånd'],['crate',120,170,50,40,0],['crate',280,170,50,40,0,'Container']],body:[200,170,90,.8],markers:[[1,230,150,'Kaffeplet på skjorten']]},
evidence:[[
{type:'computer',kind:'Computer',title:'Crew-planlægningssystemet',owner:'Lufthavnen',user:'Crew Planner',password:'BKK0720',hint:'Koden er altid flynummerets destination og afgangstid. Spørg Centralen om afgangen.',files:[{name:'Briefing 06:00 · deltagere',time:'05:58',body:'Kaptajn J. Winther\nStyrmand R. Bom\nKabinechef P. Lund\n\nKun disse tre var i crew-loungen mellem 05:40 og 06:15. Loungen kræver crew-kort.'}]},
{type:'autopsy',kind:'Obduktion',title:'Obduktionserklæring',jnr:'RM-0802/33',fields:[['Afdøde','Jesper Winther'],['Obducent','Overlæge Kim Nyborg'],['Anslået dødstidspunkt','Kl. 06:10–06:40']],sections:[['Udvendige fund','Svage striber om halsen. Ingen slag mod hovedet.'],['Indvendige fund','Lungerne er tunge. Blodet indeholder et sovemiddel i høj dosis. Mærkerne om halsen kan stamme fra en strop. Det er uafklaret, hvad der var dødeligt.']],marks:[[60,38,'1']],signer:'Kim Nyborg, overlæge'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Jespers uniform',bg:'tile',stamp:'K-3303 / 05',items:[['cup',100,90,1.4,0],['stain',220,100,1.4,0,'#6b4a2b']],caption:'Kaffeplet på skjorten og sofafnug fra crew-loungen. Desuden et lille stykke gul gummi, som også findes på bagagebåndet. Han har ikke været i hangaren: der er ingen olie eller flybrændstof på ham.'}
],[
{type:'doc',style:'table',kind:'Afgangstavle',title:'Afgange 02.08',rows:[['Fly','Destination','Afgang'],['SK971','BKK (Bangkok)','0720'],['SK1411','OSL','0735']],after:'Jesper Winther var kaptajn på SK971.'},
{type:'cctv',kind:'Overvågning',title:'Gaten ved fly SK971',src:'Lufthavnens kamera',date:'02-08',camera:'GATE C33',doors:[[260,'FLYET']],cast:[['Kabinechef i rød uniform','#a3231b']],frames:[{t:'06:12:00',at:[[40,.5]]  ,txt:'Kabinechefen tæller passagerlister ved gaten.'},{t:'06:25:00',at:[[60,.4]],txt:'Kabinechefen taler med gatepersonalet.'},{t:'06:40:00',at:[[85,0]],txt:'Kabinechefen går om bord.'},{t:'06:50:00',at:[[85,0]],txt:'Hun er stadig i flyet.'}],text:'Pia Lund er i billedet eller om bord hele tiden fra 06:12.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Striberne om halsen er overfladiske tryk fra uniformens slips. Der er ingen indre skader. Dødsårsagen er sovemidlet, som han har fået i kaffen.'},
{type:'doc',style:'table',kind:'Adgangslog',title:'Bagagehallen',rows:[['Tid','Kort'],['06:00–06:50','Ingen'],['06:55','Bagagemedarbejder']],after:'Bagagehallen var lukket for personale i tidsrummet. Han er ført derned efter døden gennem en bagageslisk fra crew-niveauet.'}
]],
epilogue:'Rikke Bom vidste, at Jespers anmeldelse ville koste hende certifikatet. Under briefingen kom hun knuste sovepiller i hans kaffe. Han faldt i søvn i sofaen i crew-loungen og vågnede aldrig. Hun sendte liget ned gennem bagagesliskens servicelem. Kaffepletten og fnugget fra loungens sofa fortalte resten.',
headline:'Styrmand anholdt for drab på kaptajn'});

KK.push({nr:22,theme:'Fyrtårn',no:'K-3304',title:'Lyset slukket',when:'Onsdag 11. november · ca. 23:00',where:'Rubjerg Fyr Gæstehus, Vendsyssel',
victim:'Gunnar Holt (66), fyrpasser',victimLook:{sex:'m',hair:'short',hc:'grå',beard:'full',age:'old',shirt:'#2f3b55',collar:'turtle'},
intro:'Den gamle fyrpasser findes død for foden af fyrtårnet. Lyset gik ud lige før.',
brief:'Kl. 23:40 opdagede kystvagten, at fyrlyset var slukket. Kl. 00:15 fandt de fyrpasser Gunnar Holt død ved foden af tårnet. Gunnar skulle sælge fyrgrunden til en hotelkæde, men nægtede at skrive under.',
options:[['Asger Holt, søn','Mona Fisker, nabo','Rolf Brink, hoteldirektør','Lise Holt, svigerdatter'],['Stormlygte','Bådshage','Skub fra trappen'],['Lanternerummet','Trappen','Kystskrænten']],answer:[2,1,0],
info:[['Gunnars søn. Vil sælge grunden og flytte til Spanien.','Nabo og ven gennem 40 år. Elsker fyret.','Hoteldirektør. Har brug for grunden til et luksushotel.','Asgers kone. Arbejder for hotelkæden.'],
['Tung stormlygte af messing.','Lang bådshage med jernkrog.','Et fald ned ad den smalle vindeltrappe.'],
['Toppen af tårnet med den store lampe.','Smal vindeltrappe med 210 trin.','Skrænten ud mod havet.']],
timeline:[['21:00','Gunnar tænder fyret som altid.'],['22:30','Bil ved fyret.'],['23:38','Lyset slukkes.'],['00:15','Gunnar findes ved tårnets fod.']],
sketch:{title:'Ved tårnets fod · fundsted',items:[['roundtable',200,110,120,120,0,'Fyrtårn'],['door',190,170,22,0,0],['tree',60,60,30,30,0]],body:[200,210,10,.8],markers:[[1,240,200,'Glasskår fra lanternen']]},
evidence:[[
{type:'audio',style:'radio',kind:'Radiolog',label:'Kystradio · kanal 16',meta:'22:41–22:43',lines:[['Gunnar Holt','Kystradio, det er Rubjerg Fyr. Jeg har to gæster heroppe, der ikke vil gå. Hotelmanden og min svigerdatter. Bare så I ved det.'],['Kystradio','Modtaget, Gunnar. Ring, hvis du får brug for hjælp.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn ved tårnet',src:'Lægevagten · 00:50',text:'Afdøde har et dybt, krumt sår i baghovedet, som kan stamme fra en jernkrog eller fra kanten af et trappetrin ved et fald. Der er ingen skader fra en lygte: ingen glassplinter eller messingspor i såret. Han døde mellem kl. 23:15 og 23:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Gunnars hænder',bg:'stone',stamp:'K-3304 / 03',items:[['stain',100,90,1.4,0,'#d8b53e'],['glove',220,100,1.4,0,'#4a4a4a']],caption:'Messingpolish og sod fra lampen på fingrene, og en flage af grøn maling fra trappens gelænder. Han har været både i lanternerummet og på trappen. Der er intet sand fra skrænten på ham.'}
],[
{type:'phone',kind:'Mobiltelefon',title:'Lise Holts telefon',owner:'Lise Holt',pin:'2207',pinHint:'Asger siger, at hun bruger deres bryllupsdag.',lockTime:'00:30',wall:'linear-gradient(160deg,#2a3a4a,#7a9ab0)',maps:[['22:20','Rubjerg Fyr'],['22:50','Lønstrup · Bil'],['23:10','Hjørring · Hjemme'],['23:45','Hjørring · Hjemme']],msgs:[{with:'Asger',m:[['me','22:52','Kører hjem nu. Din far er umulig. Rolf blev der.']]}]},
{type:'doc',kind:'Supplerende obduktion',title:'Såret i baghovedet',src:'Retsmedicinsk Institut',text:'Såret har en krog-formet ende og rustpartikler. Det passer ikke med et trappetrin. Han døde af slaget, ikke af et fald.'},
{type:'doc',style:'letter',kind:'Brev',title:'Asgers bryllupskort',text:'Til Lise, min kone siden 22. juli. ❤️ Asger'},
{type:'audio',style:'voicemail',kind:'Vidneforklaring',label:'Naboen Mona',meta:'Optaget 12.11 kl. 01:20',lines:[['Mona Fisker','Jeg så lyset på trappen blive tændt og slukket hele vejen op omkring elleve. Så lyset i toppen gik ud.'],['Betjent','Så De nogen på trappen?'],['Mona Fisker','Kun Gunnars lommelygte, der gik op. Ingen kamp på trappen. Det hele skete oppe i toppen.']]}
]],
epilogue:'Rolf Brink ventede, til Lise var kørt. Han fulgte Gunnar op ad trappen for at overtale ham en sidste gang. I lanternerummet nægtede Gunnar igen. Rolf greb bådshagen, som hang ved udgangen til galleriet, og slog. Han skubbede liget ud over gelænderet, så det skulle ligne et fald. Rusten fra krogen sad i såret.',
headline:'Hoteldirektør anholdt for drab ved fyrtårn'});

KK.push({nr:23,theme:'Golf',no:'K-3305',title:'Hole in one',when:'Fredag 19. juni · ca. 19:00',where:'Klitbakken Golfklub, Nordsjælland',
victim:'Preben Lassen (63), klubformand',victimLook:{sex:'m',hair:'short',hc:'sølv',age:'old',shirt:'#e9e1cc',collar:'shirt'},
intro:'Golfklubbens formand findes død i en bunker på 18. hul. Klubmesterskabet afgøres i morgen.',
brief:'Kl. 20:05 fandt en greenkeeper formand Preben Lassen død i sandbunkeren ved 18. green. Preben havde netop smidt to medlemmer ud af klubben for snyd med handicap og ville offentliggøre det ved præmieoverrækkelsen.',
options:[['Charlotte Bonde, medlem','Henrik Moos, pro','Tobias Leth, medlem','Gitte Lassen, hustru'],['Golfkølle (jern 7)','Golfbold slynget','Gift i drink'],['Klubhusets bar','Bunkeren på 18.','Bagrummet']],answer:[2,0,2],
info:[['Medlem med handicap 3. Smidt ud for snyd.','Klubbens træner. Prebens gode ven.','Medlem og bankmand. Smidt ud for snyd.','Prebens kone. Arving til en million.'],
['Et jern 7 fra en golfbag. Tungt hoved af stål.','En hårdt slået golfbold.','Gin og tonic fra klubhusets bar.'],
['Baren i klubhuset.','Sandbunker ved 18. green. Her blev han fundet.','Rum hvor medlemmerne opbevarer golfbags.']],
timeline:[['17:00','Sidste runde slutter.'],['18:30','Preben sender sms til de to.'],['19:00','Klubhuset tømmes.'],['20:05','Preben findes i bunkeren.']],
sketch:{title:'Bunker ved 18. green · fundsted',items:[['rug',200,130,260,140,0],['tree',60,60,40,40,0],['label',320,40,0,0,0,'GREEN']],body:[200,130,60,.9],markers:[[1,250,110,'Ingen fodspor i sandet']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Prebens telefon',owner:'Preben Lassen',lockTime:'20:10',wall:'linear-gradient(160deg,#1f4a2a,#7aa65a)',msgs:[{with:'Charlotte + Tobias',m:[['me','18:30','I to er smidt ud. Kom til bagrummet kl. 19, så tager vi det stille og roligt, før det bliver offentligt i morgen.'],['them','18:33','Det her er en misforståelse. (Charlotte)'],['them','18:41','Jeg kommer. (Tobias)']]}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 20:40',text:'Kraftigt slag mod tindingen med en lille, hård, rund eller kantet genstand. Både en golfbold slået på kort afstand og hovedet på en kølle kan give sådan et sår. Ingen tegn på forgiftning: pupiller og hud er normale. Han døde mellem kl. 19:00 og 19:40.'},
{type:'doc',style:'table',kind:'Adgangslog',title:'Klubhusets døre',rows:[['Tid','Dør','Kort'],['18:58','Bagrum','P. Lassen'],['19:02','Bagrum','Medlem 0412'],['19:05','Bar','P. Lassen'],['19:20','Bagrum','P. Lassen']],after:'Han var sidst i baren og i bagrummet. Bunkersandet er uberørt omkring ham: han er båret ud.'}
],[
{type:'cctv',kind:'Overvågning',title:'Parkeringspladsen',date:'19-06',camera:'P-PLADS',doors:[[60,'KLUBHUS']],cast:[['Hvid golfkasket','#f2f2f2']],frames:[{t:'18:45:00',at:[[80,.5]],txt:'Kvinde med hvid kasket går mod sin bil.'},{t:'18:47:00',at:[[95,.4]],txt:'Hun kører.'},{t:'19:40:00',at:[null],txt:'Hun er ikke kommet tilbage.'}],text:'Kvinden med hvid kasket er Charlotte Bonde. Hendes bil passerer bommen kl. 18:47 og vender ikke tilbage før kl. 22.'},
{type:'doc',kind:'Våbenundersøgelse',title:'Golfbolde',src:'Kriminalteknisk Center',text:'Ingen golfbold på stedet har blod eller hudrester. Såret har to parallelle riller, som passer præcist med rillerne på et jernhoved.'},
{type:'audio',style:'voicemail',kind:'Vidneforklaring',label:'Bartender Signe',meta:'Optaget 19.06 kl. 21:00',lines:[['Signe','Preben kom ind i baren kort efter syv og bestilte en gin og tonic. Han drak den og gik med det samme.'],['Betjent','Var der andre i baren?'],['Signe','Kun mig, og jeg var der hele aftenen. Der skete ingenting herinde.']]}
]],
epilogue:'Tobias Leth var bankmand og kunne ikke tåle skandalen. I bagrummet bad han Preben om at tie. Da Preben nægtede, tog Tobias et jern 7 fra sin egen golfbag og slog. Han bar liget ud i bunkeren i mørket og rev sandet glat bag sig, så det skulle ligne et uheld på banen.',
headline:'Bankmand anholdt for drab i golfklub'});

KK.push({nr:24,theme:'E-sport',no:'K-3306',title:'Game over',when:'Lørdag 7. marts · ca. 22:20',where:'Arena Nord, Aalborg · DM i e-sport',
victim:'Mads "Viper" Kjeldsen (24), e-sportsspiller',victimLook:{sex:'m',hair:'curly',hc:'sort',age:'young',shirt:'#111111',collar:'round'},
intro:'Danmarks bedste gamer findes død i bootcamp-rummet aftenen før finalen.',
brief:'Kl. 23:05 fandt en tekniker e-sportsstjernen Mads "Viper" Kjeldsen død ved sin computer i holdets bootcamp-rum. Viper skulle skifte til et udenlandsk hold efter finalen og tage holdets sponsor med sig.',
options:[['Jonas "Frost" Ry, holdkammerat','Emma Dahl, holdmanager','Tariq Aziz, træner','Line Kjeldsen, søster'],['Energidrik med koffeinpiller','Strømkabel','Tastatur som slagvåben'],['Bootcamp-rummet','Serverrummet','Streamingstudiet']],answer:[0,0,2],
info:[['Holdkammerat og bedste ven. Bliver tilbage uden Viper og uden sponsor.','Holdmanager. Har forhandlet Vipers nye kontrakt bag holdets ryg.','Træner. Viper har kaldt ham "en dinosaur" i et interview.','Søster og streamer. Lever af at streame sammen med ham.'],
['Energidrik, som Viper drak hele tiden. Der lå tomme pakker koffeinpiller i skraldespanden.','Kraftigt strømkabel fra en computer.','Mekanisk tastatur i metal.'],
['Holdets rum med fem computere. Her blev han fundet.','Rum med arenaens servere.','Studie hvor holdet streamer live.']],
timeline:[['20:00','Træningskampe slutter.'],['21:30','Holdet spiser.'],['22:00','Viper går for at streame.'],['23:05','Viper findes i bootcamp-rummet.']],
sketch:{title:'Bootcamp-rummet · fundsted',items:[['desk',200,50,300,30,0,'5 computere'],['chair',100,80],['chair',200,80],['chair',300,80],['sofa',200,200,150,36,0]],body:[200,130,80,.8],markers:[[1,250,110,'Tom energidrik']]},
evidence:[[
{type:'cctv',kind:'Overvågning',title:'Gangen til studie og serverrum',date:'07-03',camera:'GANG B',doors:[[70,'STUDIE'],[250,'SERVER']],cast:[['Hættetrøje med holdlogo','#3a6ad8'],['Blazer','#7a1f3a']],frames:[{t:'21:58:00',at:[[50,.5],null],txt:'Viper (ikke markeret) går ind i studiet.'},{t:'22:05:30',at:[[22,0],null],txt:'Hættetrøje med holdlogo går ind i studiet.'},{t:'22:09:10',at:[[22,0],[30,.4]],txt:'Person i blazer kommer forbi og banker på studiedøren.'},{t:'22:12:00',at:[[22,0],[22,0]],txt:'Blazer går ind i studiet.'},{t:'22:15:40',at:[[22,0],[60,.5]],txt:'Blazer kommer ud igen og går.'},{t:'22:41:00',at:[[60,.5],null],txt:'Hættetrøje kommer ud og går mod bootcamp-rummet med en tung taske.'}],text:'Kun spillerne har hættetrøjer med holdlogo, og Frost var den eneste spiller i bygningen. Kun managere bærer blazer, og Emma var den eneste manager.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 23:40',text:'Ingen sår eller slag. Afdøde har ekstremt hurtig puls registreret på sit smartwatch lige før døden og et lille brændemærke på venstre hånd. Både en koffeinforgiftning og strømstød kan forklare hjertestoppet. Tid: mellem kl. 22:10 og 22:40.'},
{type:'phone',kind:'Mobiltelefon',title:'Vipers telefon',owner:'Mads Kjeldsen',lockTime:'23:10',wall:'linear-gradient(160deg,#0d0d2a,#3a6ad8)',maps:[['21:58','Arena Nord · Streamingstudiet'],['22:30','Arena Nord · Serverrummet'],['22:44','Arena Nord · Bootcamp']],notes:[['Finale','Fortæl Frost det EFTER finalen.']]}
],[
{type:'audio',style:'radio',kind:'Lydoptagelse',label:'Emmas telefonmøde med sponsoren',meta:'22:15–22:50 · optaget af sponsoren',lines:[['Emma Dahl','Hej, jeg sidder i mit kontor i receptionen nu. Lad os tale om Viper.'],['Sponsor','Klokken er halv elleve, Emma. Er han med på det?'],['Emma Dahl','Ja. Jeg har siddet her og læst kontrakten igennem hele aftenen.'],['Sponsor','Tak for i aften, Emma. Klokken er ti i elleve.']]},
{type:'doc',kind:'Supplerende obduktion',title:'Brændemærket',src:'Retsmedicinsk Institut',text:'Brændemærket stammer fra en varm loddekolbe, som Viper brugte til at reparere sit headset om eftermiddagen. Der er ingen strømmærker. Koffeinniveauet i blodet er dødeligt højt.'},
{type:'doc',style:'receipt',kind:'Kvittering',title:'Fundet i Vipers lomme',shop:'Automat · Arena Nord',shopMeta:'Studiegangen',rows:[['22:27','Energidrik 0,5 l','25,00'],['Betalt','Vipers kort','']],text:'Teknikerne har fundet opløste koffeinpiller i netop denne dåse. Den blev købt kl. 22:27 og åbnet derefter.'},
{type:'doc',style:'table',kind:'Alarmlog',title:'Serverrummet',rows:[['Tid','Hændelse'],['20:00','Låst · alarm til'],['22:30','Ingen åbning'],['00:00','Ingen åbning']],after:'Serverrummet var låst hele aftenen. Signalet "Serverrummet" fra telefonen kommer fra en wifi-sender på væggen udenfor.'}
]],
epilogue:'Frost havde opdaget, at hans bedste ven ville forlade ham før finalen. I streamingstudiet hældte han knuste koffeinpiller i Vipers energidrik, mens de grinede på stream. Bagefter fik han den svimle Viper med tilbage mod bootcamp-rummet, hvor han faldt om. Frost lagde ham ved computeren, som om han bare var faldet i søvn.',
headline:'Holdkammerat anholdt for drab på gamer'});

KK.push({nr:25,theme:'Vingård',no:'K-3307',title:'Druehøst',when:'Lørdag 26. september · ca. 18:00',where:'Skærsø Vingård, Mols',
victim:'Benedikte Skov (52), vinbonde',victimLook:{sex:'f',hair:'bun',hc:'brun',age:'mid',shirt:'#6b3a3a',collar:'shirt'},
intro:'Danmarks mest prisbelønnede vinbonde findes død i et presseanlæg under høstfesten.',
brief:'Kl. 19:20 fandt en høsthjælper Benedikte Skov død ved druepressen. Høstfesten var i fuld gang. Benedikte havde opdaget, at nogen havde blandet billig italiensk vin i flaskerne med hendes navn.',
options:[['Tue Skov, ægtemand','Sara Lind, kældermester','Nikolaj Brun, vinhandler','Ingrid Hald, nabo'],['Beskæresaks','Vinflaske','Kuldioxid fra gærkar'],['Gærkælderen','Pressehuset','Smagslokalet']],answer:[2,1,1],
info:[['Benediktes mand. Passer regnskabet.','Kældermester. Har adgang til alle tanke.','Vinhandler. Køber det meste af vinen og sælger den til restauranter.','Nabo. Ville gerne købe vingården.'],
['Skarp beskæresaks fra marken.','Tung magnumflaske.','Gærkarrene udvikler kuldioxid i lukkede rum.'],
['Kælder med gærkar.','Hus med druepresse. Her blev hun fundet.','Lokale hvor gæsterne smager vin.']],
timeline:[['15:00','Høstfesten begynder.'],['17:30','Benedikte konfronterer to personer.'],['18:00','Benedikte ses sidst.'],['19:20','Hun findes i pressehuset.']],
sketch:{title:'Pressehuset · fundsted',items:[['roundtable',200,100,90,90,0,'Druepresse'],['barrel',80,200,30,30,0],['barrel',320,200,30,30,0],['door',30,120,30,0,90]],body:[200,180,-70,.8],markers:[[1,250,170,'Glasskår']]},
evidence:[[
{type:'computer',kind:'Computer',title:'Benediktes bærbare',owner:'Benedikte Skov',user:'Benedikte',password:'solaris',hint:'Hendes yndlingsdrue. Står på vingårdens skilt.',mail:[{from:'Benedikte Skov',to:'Sara Lind; Nikolaj Brun',time:'17:12',subject:'Flaskerne',body:'Analysen er kommet. Der er italiensk vin i 400 af mine flasker. Kun to personer har haft adgang til både tankene og etiketterne: jer. Jeg vil tale med jer efter talen.'}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 19:50',text:'Slag mod baghovedet med noget tungt og glat. Glasskår ved liget. Ingen snitsår, så beskæresaksen kan udelukkes. Huden har en rødlig farve, som kan skyldes iltmangel fra kuldioxid. Hun døde mellem 17:45 og 18:30.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Benediktes forklæde',bg:'wood',stamp:'K-3307 / 03',items:[['stain',100,90,1.6,0,'#5a1a2a'],['flower',220,90,1.2,0,'#5a1a5a']],caption:'Frisk druemost og drueskind på forklædet. Det findes i pressehuset og i gærkælderen. Der er ingen most i smagslokalet, som kun har færdig vin på flaske.'}
],[
{type:'cctv',kind:'Overvågning',title:'Festteltet',date:'26-09',camera:'TELT',doors:[[160,'SCENE']],cast:[['Kældermester i grønt forklæde','#3e7b46']],frames:[{t:'17:40:00',at:[[50,0]],txt:'Kældermesteren skænker vin på scenen.'},{t:'18:00:00',at:[[55,.1]],txt:'Hun holder tale om årets høst.'},{t:'18:20:00',at:[[45,.2]],txt:'Hun skænker igen.'},{t:'18:40:00',at:[[50,.2]],txt:'Stadig i teltet.'}],text:'Sara Lind er i teltet foran 80 gæster fra 17:40 til 18:45.'},
{type:'doc',kind:'Supplerende obduktion',title:'Hudfarven',src:'Retsmedicinsk Institut',text:'Blodets indhold af kuldioxid er normalt. Den rødlige farve skyldes vin, der var sprøjtet ud over hende. Dødsårsagen er slaget, og der er glas fra en magnumflaske i såret.'},
{type:'doc',style:'table',kind:'Sensorlog',title:'Gærkælderen',rows:[['Tid','CO2-niveau','Dør'],['17:00','Højt','Låst'],['18:00','Højt','Låst'],['19:00','Højt','Låst']],after:'Gærkælderen er låst under gæringen, fordi luften er farlig. Ingen gik derned.'},
{type:'doc',style:'note',kind:'Seddel',title:'Fundet ved telefonen',text:'Kodeord til bærbar: solaris\n(så du ikke ringer igen, Tue!)'}
]],
epilogue:'Nikolaj Brun havde i årevis tjent styrtende på at blande billig vin i Benediktes flasker. Efter hendes mail mødte han hende i pressehuset. Hun truede med politiet, og han slog hende i baghovedet med en magnumflaske. Han sprøjtede vin ud over hende, så det skulle ligne et uheld ved pressen.',
headline:'Vinhandler anholdt for drab på vingård'});

KK.push({nr:26,theme:'Bagekonkurrence',no:'K-3308',title:'Kagekrig',when:'Torsdag 15. oktober · ca. 14:00',where:'Tv-studie, Nordhavn · "Danmarks Bedste Bager"',
victim:'Viggo Krone (59), dommer i tv-programmet',victimLook:{sex:'m',hair:'short',hc:'hvid',age:'old',beard:'full',shirt:'#f1ede4',collar:'shirt'},
intro:'Tv-programmets strenge dommer findes død i kølerummet. Semifinalen var netop optaget.',
brief:'Kl. 14:40 fandt en scenograf dommeren Viggo Krone død i studiets kølerum. Viggo havde lige dumpet to deltagere i semifinalen. Han var kendt for at være brutalt ærlig, og han havde også opdaget, at en deltager snød med færdigkøbt dej.',
options:[['Rosa Malik, deltager','Henning Brask, deltager','Anne Juhl, producer','Kasper Wolff, medvært'],['Kagerulle','Nøddeallergi','Æltemaskine'],['Kølerummet','Bagerstationen','Garderoben']],answer:[1,1,1],
info:[['Deltager. Blev dumpet for sin kransekage.','Deltager. Smugler færdigkøbt dej ind i studiet. Ved at Viggo vidste det.','Producer. Har brug for drama til seertallene.','Medvært. Skulle overtage Viggos plads.'],
['Kagerulle i marmor.','Viggo har svær nøddeallergi og har altid adrenalinpen på sig.','Stor æltemaskine med krog.'],
['Kølerum med smør og fløde. Her blev han fundet.','Deltagernes køkkenborde i studiet.','Rum med kostumer og sminke.']],
timeline:[['12:00','Semifinalen optages.'],['13:30','Viggo smager kagerne.'],['13:45','To deltagere dumpes.'],['14:40','Viggo findes i kølerummet.']],
sketch:{title:'Kølerummet · fundsted',items:[['shelf',60,130,24,200,0],['shelf',340,130,24,200,0],['door',190,248,30,0,180]],body:[200,130,0,.8],markers:[[1,240,100,'Halvspist kage']]},
evidence:[[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Mikrofon på Viggo',meta:'Tv-optagelse · 13:44–13:47',lines:[['Viggo Krone','Rosa. Henning. I to er ude. Og Henning, du ved godt hvorfor. Den dej har du ikke lavet selv.'],['Henning Brask','Det er løgn!'],['Rosa Malik','Det er uretfærdigt, Viggo. Vi skal tale om det.'],['Viggo Krone','Kom til mig bagefter. Begge to.']]},
{type:'autopsy',kind:'Obduktion',title:'Obduktionserklæring',jnr:'RM-1015/33',fields:[['Afdøde','Viggo Krone'],['Obducent','Overlæge Lene Ask'],['Anslået dødstidspunkt','Kl. 13:50–14:20']],sections:[['Udvendige fund','Hævede læber og tunge. En lille bule i baghovedet uden kraniebrud. Ingen tegn på knusning eller klemning.'],['Indvendige fund','Svær hævelse i svælget. Både et allergisk chok og et slag kan have bidraget. Afventer analyse af maveindholdet.']],marks:[[60,30,'1'],[60,12,'2']],signer:'Lene Ask, overlæge'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Viggos sko og bukser',bg:'tile',stamp:'K-3308 / 06',items:[['stain',100,90,1.4,0,'#f4f1ea'],['coin',220,100,1.2,0,'#c49a5a']],caption:'Mel og kagekrummer på bukserne. Mel findes kun ved bagerstationerne og i kølerummet, hvor melsækkene står. Der er ingen sminke eller kostumefnug fra garderoben.'}
],[
{type:'doc',style:'table',kind:'Optagelseslog',title:'Interview med de dumpede',rows:[['Tid','Hvem','Hvor'],['13:50–14:35','Rosa Malik','Interviewrum 2 med kamera'],['13:50–14:35','Producer Anne Juhl','Interviewrum 2'],['13:52','Henning Brask','Nægter interview, går']],after:'Rosa er på bånd uafbrudt i 45 minutter.'},
{type:'doc',kind:'Supplerende obduktion',title:'Maveindhold',src:'Retsmedicinsk Institut',text:'Viggo har spist kage med malede hasselnødder mellem 13:55 og 14:10, kort før chokket. Semifinalens kager var kontrolleret nøddefri af produktionen. Det udløste et dødeligt allergisk chok. Bulen i baghovedet kommer fra faldet. Han nåede ikke at tage sin adrenalinpen; den lå i hans jakke i garderoben.'},
{type:'cctv',kind:'Overvågning',title:'Kølerummets dør',date:'15-10',camera:'KØL',doors:[[160,'KØLERUM']],cast:[['Viggo','#f1ede4']],frames:[{t:'13:48:00',at:[[30,.4]],txt:'Viggo går forbi kølerummet med en tallerken kage.'},{t:'14:10:00',at:[null],txt:'Ingen ved døren.'},{t:'14:22:00',at:[null],txt:'Døren er stadig lukket.'},{t:'14:38:00',at:[null],txt:'Scenografen åbner døren.'}],text:'Kameraet viser, at kølerummets dør ikke blev åbnet mellem 13:40 og 14:38. Viggo er båret derind gennem den bagerste dør fra bagerstationerne, som kameraet ikke dækker.'}
]],
epilogue:'Henning Brask vidste, at Viggo ville afsløre hans snyd på landsdækkende tv. Han bagte en lille "undskyldningskage" med malede hasselnødder og gav Viggo den ved bagerstationen. Viggo nåede tre mundfulde. Henning slæbte ham ind i kølerummet gennem bagdøren og håbede, at det ville ligne et uheld.',
headline:'Tv-bager anholdt: dødelig kage til dommer'});

KK.push({nr:27,theme:'Dykning',no:'K-3309',title:'Dybt vand',when:'Søndag 12. juli · ca. 11:20',where:'Dykkerklubben Hvalen, Helsingør · vraget "Freja"',
victim:'Morten Hvid (39), dykkerinstruktør',victimLook:{sex:'m',hair:'short',hc:'blond',shirt:'#1f4e8a',collar:'round'},
intro:'En erfaren dykkerinstruktør dør på et vragdyk. Luften i hans flaske var forkert.',
brief:'Kl. 11:40 kom Morten Hvid livløs op til overfladen ved vraget af skibet "Freja". Han blev erklæret død på båden. Morten havde fundet en kasse gamle guldmønter i vraget og ville anmelde fundet til Nationalmuseet.',
options:[['Jakob Søe, dykkerkammerat','Lena Hvid, ekskone','Erik Barfod, bådfører','Tina Moos, klubkasserer'],['Gasflaske med forkert blanding','Dykkerkniv','Afskåret luftslange'],['Vraget','Klubhusets flaskerum','Båden']],answer:[3,0,1],
info:[['Dykkerkammerat. Dykkede sammen med Morten.','Ekskone. Arver hans livsforsikring.','Bådfører. Lå i båden under dykket.','Kasserer. Fylder klubbens flasker med luft.'],
['En flaske med ren ilt i stedet for luft. Farligt under 6 meter.','Skarp dykkerkniv.','Luftslangen fra flasken til munden.'],
['Vraget på 22 meters dybde.','Rum hvor flaskerne fyldes.','Klubbens båd.']],
timeline:[['08:00','Flaskerne fyldes i klubhuset.'],['10:30','Båden sejler ud.'],['11:00','Dykket begynder.'],['11:40','Morten kommer op livløs.']],
sketch:{title:'Klubbens båd · fundsted',items:[['table',200,130,300,100,0,'Dæk'],['barrel',120,130,20,20,0],['barrel',280,130,20,20,0]],body:[200,130,90,.7],markers:[[1,250,110,'Mortens flaske']]},
evidence:[[
{type:'doc',style:'table',kind:'Påfyldningslog',title:'Flaskerummet',rows:[['Tid','Dør til flaskerummet','Kode'],['07:35','Låst op','22'],['07:48','Låst op','31'],['08:05','Låst','31']],after:'Mortens flaske nr. 4 indeholdt ren ilt, men loggen siger luft. Kun to koder åbner flaskerummet: 22 (kassereren) og 31 (bådføreren). Under dykket var flasken koblet til hele tiden, så den er byttet om, før han hoppede i: i flaskerummet eller på båden.'},
{type:'autopsy',kind:'Obduktion',title:'Obduktionserklæring',jnr:'RM-0712/33',fields:[['Afdøde','Morten Hvid'],['Obducent','Overlæge Anders Fogh'],['Dødsårsag','Afventer']],sections:[['Udvendige fund','Et 3 cm langt snit på højre underarm. Ingen andre sår.'],['Indvendige fund','Tegn på kramper og vand i lungerne. Det kan skyldes iltforgiftning, men også at han blev skåret fri og mistede sin luftslange. Ingen tegn på knivstik i krop eller hals.']],marks:[[100,110,'1']],signer:'Anders Fogh, overlæge'},
{type:'audio',style:'radio',kind:'Radiolog',label:'Båd "Hvalen" · VHF',meta:'11:38–11:41',lines:[['Erik Barfod','Han er oppe! Han ryster over hele kroppen og trækker ikke vejret.'],['Kystradio','Modtaget. Ambulancebåd sendt.']]}
],[
{type:'cctv',kind:'Overvågning',title:'Havnens kamera',date:'12-07',camera:'HAVN',doors:[[60,'KLUBHUS'],[260,'BÅDE']],cast:[['Bådfører i gul jakke','#d8b53e']],frames:[{t:'07:30:00',at:[[80,.4]],txt:'Bådføreren gør båden klar.'},{t:'07:50:00',at:[[85,.4]],txt:'Han er stadig ved båden.'},{t:'08:10:00',at:[[80,.4]],txt:'Stadig ved båden. Han har ikke været i klubhuset.'}],text:'Erik Barfod var ved båden fra 07:20 til 10:30 og var aldrig i klubhuset. Han havde lånt sin kode ud den morgen.'},
{type:'doc',kind:'Våbenundersøgelse',title:'Dykkerkniven og slangen',src:'Kriminalteknisk Center',text:'Luftslangen er hel, og radioen bekræfter, at den sad fast, da han kom op. Snittet på armen er fra vragets skarpe jernkant.'},
{type:'doc',kind:'Rapport',title:'Ombord på båden',src:'Politiets dykkere',text:'Mortens flaske var allerede monteret på hans vest, da båden sejlede. Ingen rørte flaskerne på båden ifølge de tre andre dykkere. Ombyttelsen må være sket i klubhusets flaskerum.'}
]],
epilogue:'Tina Moos havde lånt penge af klubben og så mønterne som sin redning. Om morgenen fyldte hun Mortens flaske med ren ilt i flaskerummet og malede nummeret om. På 22 meters dybde gav ilten ham kramper. Hun regnede med, at det ville ligne en dykkerulykke.',
headline:'Kasserer anholdt for iltdrab under vragdyk'});

KK.push({nr:28,theme:'Sommerhus',no:'K-3310',title:'Storm ved Vesterhavet',when:'Fredag 30. oktober · ca. 22:00',where:'Sommerhus "Klitly", Lønstrup',
victim:'Henrik Aagaard (48), arkitekt',victimLook:{sex:'m',hair:'short',hc:'brun',glasses:true,shirt:'#3e5b46',collar:'turtle'},
intro:'Fem gamle venner er lukket inde i et sommerhus under stormen. Om morgenen er de kun fire.',
brief:'En storm havde lukket vejen til Lønstrup. Fem gamle studiekammerater holdt weekend i sommerhuset "Klitly". Kl. 07:30 fandt de arkitekt Henrik Aagaard død på stuegulvet. Henrik havde bedt om at tale med dem om "det, der skete i 2004".',
options:[['Camilla Ross, advokat','Peter Hald, læge','Marie Lund, forfatter','Jens Ravn, ejendomsmægler'],['Brændeøkse','Kulilte fra brændeovn','Pejseværktøj'],['Stuen','Saunaen','Anneks']],answer:[3,2,2],
info:[['Advokat. Var med til festen i 2004.','Læge. Har medicin med.','Forfatter. Skriver en roman om vennegruppen.','Ejendomsmægler. Har bygget en karriere på en byggesag, Henrik tegnede.'],
['Økse fra brændeskuret.','Brændeovnen i stuen kan lække kulilte.','Tungt jernsæt til pejsen.'],
['Stue med brændeovn. Her blev han fundet.','Lille sauna i haven.','Lille anneks med to senge.']],
timeline:[['19:00','Middag.'],['21:30','Henrik beder to af dem om en snak.'],['22:00','Alle går i seng.'],['07:30','Henrik findes i stuen.']],
sketch:{title:'Stuen · fundsted',items:[['sofa',120,80,120,36,0],['stove',320,60,30,30,0,'Brændeovn'],['table',200,170,100,50,0],['door',30,220,30,0,90]],body:[220,120,30,.85],markers:[[1,320,90,'Pejsesæt mangler ét redskab']]},
evidence:[[
{type:'doc',style:'note',kind:'Seddel',title:'Fundet i Henriks lomme',text:'Jens og Marie – kl. 22 i annekset.\nVi skal tale om 2004. Det er nu eller aldrig.\nH.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten (ankom med traktor) · 10:00',text:'Afdøde har et slag mod baghovedet med en tung jerngenstand. Huden er også let kirsebærrød, hvilket kan tyde på kulilteforgiftning. Ingen skader fra en skarp økse. Han døde mellem 22:00 og 23:30.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Henriks strømper',bg:'wood',stamp:'K-3310 / 02',items:[['stain',100,90,1.4,0,'#d9c294'],['footprint',220,90,1.2,0,'#6a5a3a']],caption:'Våde strømper med fint klitsand og grannåle. Han har været udenfor, enten i annekset eller i saunaen. Stuegulvet er tørt, og der er ingen sandspor fra døren: han blev båret ind.'}
],[
{type:'audio',style:'tape',kind:'Lydoptagelse',label:'Maries diktafon',meta:'Fundet på hendes natbord · 21:55–23:40',lines:[['Marie Lund','Klokken er fem i ti. Jeg går ikke i annekset. Henrik må klare sig selv. Jeg skriver i stedet.'],['Marie Lund','Klokken er halv elleve. Kapitel tolv. Stormen hyler.'],['Marie Lund','Klokken er tyve i tolv. Jeg kan høre nogen gå i gangen. Nu sover jeg.']]},
{type:'doc',style:'table',kind:'Gasmåler',title:'Kulilte-alarm i stuen',rows:[['Tid','Niveau'],['21:00','0 ppm'],['23:00','0 ppm'],['07:00','0 ppm']],after:'Ingen kulilte i stuen hele natten. Den røde hudfarve skyldes kulde: han lå ved den åbne terrassedør.'},
{type:'doc',kind:'Rapport',title:'Saunaen',src:'Kriminalteknisk Center',text:'Saunaen var låst med hængelås, og nøglen hang på en krog inde i huset, dækket af støv. Saunaen har ikke været brugt siden sommeren.'}
]],
epilogue:'I 2004 havde Jens Ravn stået bag en brand, der kostede en ung mand livet, og Henrik vidste det. Kl. 22 mødte Jens ham alene i annekset. Da Henrik sagde, at han ville gå til politiet, slog Jens ham med pejsens ildrager, som han havde taget med. Han bar liget ind i stuen og efterlod terrassedøren åben, så det skulle ligne et fald.',
headline:'Ejendomsmægler anholdt for drab under stormen'});
