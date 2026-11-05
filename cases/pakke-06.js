'use strict';
// Sagsbunke 6.

KK.push({nr:59,theme:'Fitness',no:'K-3701',title:'Sidste sæt',when:'Mandag 5. januar · ca. 06:30',where:'IronGym, Odense',
victim:'Brian "Bøffen" Holst (39), fitnesskæde-ejer',victimLook:{sex:'m',hair:'bald',hc:'brun',beard:'stubble',shirt:'#111111',collar:'round'},
intro:'Fitnesskongen findes død under bænkpressen. Stangen ligger over hans bryst.',
brief:'Kl. 07:00 fandt den første kunde ejeren Brian Holst død under en vægtstang på 140 kg. Det lignede et træningsuheld. Brian havde opdaget, at nogen solgte ulovlige stoffer til medlemmerne fra centret.',
options:[['Kasper Moe, personlig træner','Jannie Lund, receptionist','Dennis Kragh, medejer','Nicole Holst, hustru'],['Vægtstang','Kettlebell','Forgiftet proteinshake'],['Bænkpresse-området','Omklædningen','Lageret']],answer:[2,1,2],
info:[['Personlig træner. Har nøgle fra kl. 5.','Receptionist.','Medejer. Har gæld.','Brians kone.'],
['Stang med 140 kg.','Kettlebell på 24 kg.','Proteinshake fra baren.'],
['Området med bænke. Her blev han fundet.','Omklædningen.','Lager med kosttilskud.']],
timeline:[['05:00','Brian låser op.'],['05:30','Brian beder to om en snak.'],['06:00','Brian ses sidst.'],['07:00','Brian findes.']],
sketch:{title:'Bænkpresse-området · fundsted',items:[['bed',200,120,40,120,0,'Bænk'],['rug',200,120,200,160,0],['shelf',40,130,20,160,0,'Vægte']],body:[200,130,0,.7],markers:[[1,240,100,'Proteinpulver']]},
evidence:[[
{type:'doc',style:'table',kind:'Dørlog',title:'Indgangen',rows:[['Tid','Kort'],['05:00','B. Holst'],['05:42','K. Moe'],['05:48','D. Kragh'],['06:45','K. Moe (ud)']],after:'Kun Kasper og Dennis kom ind, før centret åbnede kl. 06:30.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 07:30',text:'Brystkassen er ikke knust: stangen er lagt der efter døden. Et rundt, kraftigt slag mod tindingen fra noget tungt og rundt. Proteinshaken ved siden af er ikke undersøgt endnu. Han døde mellem 05:50 og 06:20.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Brians t-shirt',bg:'tile',stamp:'K-3701 / 02',items:[['stain',100,90,1.4,0,'#f2e0c0'],['stain',220,100,1.2,0,'#cfe0f0']],caption:'Proteinpulver og sæberester. Proteinpulver er der på lageret og i omklædningen, hvor der er en shakebar. Ingen gummistøv fra gulvet ved bænkene: han døde ikke der.'}
],[
{type:'cctv',kind:'Overvågning',title:'Spinningsalen',date:'05-01',camera:'SPINNING',doors:[[160,'SAL']],cast:[['Træner i neongul','#d8e030']],frames:[{t:'05:50:00',at:[[50,.3]],txt:'Træneren gør salen klar.'},{t:'06:00:00',at:[[50,.2]],txt:'Morgenhold begynder.'},{t:'06:25:00',at:[[50,.2]],txt:'Stadig på cyklen foran holdet.'}],text:'Kasper Moe underviser spinning fra 05:50 til 06:45 med 18 deltagere.'},
{type:'doc',style:'table',kind:'Laboratoriesvar',title:'Toksikologi',rows:[['Prøve','Fund'],['Proteinshake','Ingen gift'],['Blod','Ingen gift']],after:'Forgiftning er udelukket.'},
{type:'doc',kind:'Rapport',title:'Omklædningen',src:'Rengøringen',text:'Jeg gjorde rent i herreomklædningen fra 05:45 til 06:30. Ingen kom ind.'}
]],
epilogue:'Dennis Kragh solgte ulovlige stoffer fra lageret for at betale sin gæld. Brian konfronterede ham derinde. Dennis slog ham med en kettlebell. Han bar liget ud på bænken og lagde stangen over, så det skulle ligne et træningsuheld.',
headline:'Medejer anholdt for drab i fitnesscenter'});

KK.push({nr:60,theme:'Yoga',no:'K-3702',title:'Dyb indånding',when:'Søndag 10. maj · ca. 07:00',where:'Yogaretreat Stillehavn, Bornholm',
victim:'Linea Skov (45), yogalærer',victimLook:{sex:'f',hair:'long',hc:'lysbrun',shirt:'#e8e0c8',collar:'v'},
intro:'Yogalæreren dukker ikke op til morgen-yoga. Hun findes død ved klipperne.',
brief:'Kl. 07:20 fandt en deltager yogalærer Linea Skov død for foden af klipperne ved stranden. Linea havde opdaget, at retreatets "økologiske" mad var billig supermarkedsmad, og at nogen stak forskellen i lommen.',
options:[['Rune Bach, kok','Maja Frost, medejer','Sofie Lynge, deltager','Ole Skov, bror'],['Skub fra klippen','Slag med en sten','Kvælning med yogastrop'],['Klippestien','Køkkenet','Meditationsrummet']],answer:[1,2,2],
info:[['Kok.','Medejer. Står for indkøb.','Deltager.','Lineas bror. Hjælper til.'],
['Klippen er 12 meter høj.','En stor, rund sten.','Bomuldsstrop til yoga.'],
['Stien langs klipperne. Her ved foden blev hun fundet.','Retreatets køkken.','Stille rum med puder og røgelse.']],
timeline:[['05:30','Linea står op.'],['05:45','Linea beder to om at komme.'],['06:00','Linea ses sidst.'],['07:20','Linea findes.']],
sketch:{title:'Ved foden af klippen · fundsted',items:[['wall',40,40,320,0,0],['label',200,30,0,0,0,'KLIPPEN'],['rug',200,190,300,60,0,'Strand']],body:[200,140,20,.85],markers:[[1,240,120,'Røgelsesaske']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Lineas telefon',owner:'Linea Skov',pin:'1005',pinHint:'Dagens dato (ddmm).',lockTime:'07:25',wall:'linear-gradient(160deg,#e8e0c8,#7aa6a0)',msgs:[{with:'Rune + Maja',m:[['me','05:45','Jeg har kvitteringerne. Maden er ikke økologisk. I er de eneste, der handler ind. Kom til mig før morgen-yoga.'],['them','05:50','Vi kan forklare. (Maja)'],['them','05:51','Hvad snakker du om? (Rune)']]}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 08:00',text:'Smalle, ens mærker om halsen fra en stofstrop. Der er også et brud på kraniet, som kan skyldes et slag med en sten. Ingen andre brud: et fald fra 12 meter ville have brækket mere. Hun døde mellem 05:50 og 06:30.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Lineas tøj',bg:'sand',stamp:'K-3702 / 02',items:[['stain',100,90,1.4,0,'#888'],['flower',220,100,1.2,0,'#a37ab0']],caption:'Røgelsesaske og lavendelduft. Røgelse brænder i meditationsrummet og i køkkenet, hvor der var et røgelsesalter. Der er ingen sand på hende: hun er båret ned.'}
],[
{type:'audio',style:'voicemail',kind:'Telefonsvarer',label:'Rune til grossisten',meta:'Opkald 05:55–06:35 fra køkkenet',lines:[['Rune Bach','Godmorgen. Jeg står i køkkenet og skal bestille til ugen. Ja, jeg venter.'],['Rune Bach','Klokken er seks. Hvad koster tomaterne?'],['Rune Bach','Klokken er halv syv. Tak, så er vi på plads.']]},
{type:'doc',kind:'Supplerende obduktion',title:'Kraniet',src:'Retsmedicinsk Institut',text:'Bruddet på kraniet skete efter døden, da hun blev lagt ved klippen. Dødsårsagen er kvælning med en yogastrop.'},
{type:'doc',kind:'Rapport',title:'Køkkenet',src:'Kriminalteknisk Center',text:'Rune stod alene i køkkenet og telefonerede hele tiden. Linea var ikke derinde.'}
]],
epilogue:'Maja Frost havde stukket pengene fra maden i lommen. I meditationsrummet sagde Linea, at hun ville fortælle deltagerne det. Maja kvalte hende med en yogastrop. Hun kørte hende i en trillebør ned til klipperne, så det skulle ligne et fald.',
headline:'Medejer anholdt for drab på yogaretreat'});

KK.push({nr:61,theme:'Maraton',no:'K-3703',title:'Sidste kilometer',when:'Søndag 17. maj · ca. 11:30',where:'Copenhagen Marathon, Fælledparken',
victim:'Henrik Vang (52), løbsdirektør',victimLook:{sex:'m',hair:'short',hc:'grå',age:'old',shirt:'#3a6ad8',collar:'round'},
intro:'Midt i maratonløbet findes løbsdirektøren død i et telt ved målområdet.',
brief:'Kl. 12:10 fandt en frivillig løbsdirektør Henrik Vang død i sanitetsteltet ved målet. Henrik havde opdaget, at nogen havde flyttet en sponsors penge til en privat konto.',
options:[['Søren Mølgaard, økonomichef','Pia Dahl, sponsorchef','Kasper Lindh, eliteløber','Ruth Vang, hustru'],['Startpistol (slag)','Iskold drik med sovemiddel','Kvælning med medaljebånd'],['Sanitetsteltet','Kontorvognen','VIP-teltet']],answer:[0,2,1],
info:[['Økonomichef. Styrer kontoen.','Sponsorchef. Har adgang til kontoen.','Eliteløber. Løb i dag.','Henriks kone.'],
['Metal-startpistol.','Sportsdrik med is.','Medaljebånd.'],
['Telt med båre. Her blev han fundet.','Kontorvogn med computere.','Telt for sponsorer.']],
timeline:[['09:30','Start.'],['11:00','Henrik beder to møde ham.'],['11:15','Henrik ses sidst.'],['12:10','Henrik findes.']],
sketch:{title:'Sanitetsteltet · fundsted',items:[['bed',200,120,60,140,0,'Båre'],['crate',80,80,30,30,0],['crate',320,200,30,30,0]],body:[200,120,0,.7],markers:[[1,240,100,'Printerpapir']]},
evidence:[[
{type:'doc',style:'letter',kind:'Mail',title:'Henriks mail kl. 11:00',text:'Til Søren og Pia\nDer mangler 1,2 mio. fra sponsorkontoen. I er de eneste med adgang. Mød mig straks.\nHenrik'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 12:30',text:'Smalle mærker om halsen fra et bånd. Han er også søvnig-udseende med små pupiller, som ved sovemiddel. Ingen slag. Han døde mellem 11:15 og 11:45.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Henriks jakke',bg:'grass',stamp:'K-3703 / 01',items:[['paper',100,90,1.4,0],['stain',220,100,1.2,0,'#f2e0c0']],caption:'Printerpapir og champagne. Printer findes i kontorvognen, men VIP-teltet har også en printer til navneskilte. Sanitetsteltet har ingen printer.'}
],[
{type:'cctv',kind:'Overvågning',title:'Målstregen',date:'17-05',camera:'MÅL',doors:[[160,'MÅL']],cast:[['Sponsorchef med mikrofon','#c94a8a']],frames:[{t:'11:10:00',at:[[50,.2]],txt:'Sponsorchefen giver præmier til vinderne.'},{t:'11:30:00',at:[[45,.2]],txt:'Interview med tv.'},{t:'11:50:00',at:[[55,.2]],txt:'Stadig ved målet.'}],text:'Pia Dahl står ved målstregen fra 11:05 til 12:00.'},
{type:'doc',style:'table',kind:'Laboratoriesvar',title:'Toksikologi',rows:[['Prøve','Fund'],['Blod','Intet sovemiddel']],after:'De små pupiller skyldes kvælningen. Dødsårsagen er kvælning med et medaljebånd.'},
{type:'doc',kind:'Rapport',title:'VIP-teltet',src:'Cateringfirmaet',text:'VIP-teltet var fyldt med 200 gæster hele formiddagen. Henrik var der kun kort kl. 10.'}
]],
epilogue:'Søren Mølgaard havde flyttet sponsorpengene. I kontorvognen sagde Henrik, at han ville gå til politiet. Søren kvalte ham med et medaljebånd, der lå i en kasse. Han bar ham ind i sanitetsteltet, så det skulle ligne et ildebefindende.',
headline:'Økonomichef anholdt for drab ved maraton'});

KK.push({nr:62,theme:'Boksning',no:'K-3704',title:'Knockout',when:'Lørdag 21. november · ca. 22:00',where:'Brøndby Hallen · boksegala',
victim:'Jimmy Riis (51), bokse-promotor',victimLook:{sex:'m',hair:'short',hc:'sort',beard:'moustache',shirt:'#111111',collar:'shirt'},
intro:'Bokse-promotoren findes død i omklædningsrummet efter aftenens hovedkamp. Kampen var købt.',
brief:'Kl. 22:40 fandt en træner promotor Jimmy Riis død i den røde hjørnes omklædningsrum. Jimmy havde opdaget, at hovedkampen var aftalt på forhånd, og at nogen havde tjent millioner på væddemål.',
options:[['Tonny Sand, bokser','Ali Hamid, træner','Gert Bo, dommer','Lis Riis, hustru'],['Boksehandske med jern','Kvælning med bandage','Forgiftet vand'],['Omklædningsrummet','Dommerrummet','Gangen bag ringen']],answer:[2,0,1],
info:[['Bokser. Tabte i 3. omgang.','Træner for vinderen.','Dommer i hovedkampen.','Jimmys kone.'],
['Boksehandske med en jernplade indeni.','Hvid håndbandage.','Vandflaske.'],
['Rødt omklædningsrum. Her blev han fundet.','Dommerens rum.','Smal gang bag ringen.']],
timeline:[['21:00','Hovedkamp.'],['21:30','Kampen slutter.'],['21:40','Jimmy beder to om en snak.'],['22:40','Jimmy findes.']],
sketch:{title:'Omklædningsrummet · fundsted',items:[['table',200,60,300,18,0,'Bænk'],['locker',200,220,300,30,0]],body:[200,140,80,.85],markers:[[1,240,120,'Papirstøv']]},
evidence:[[
{type:'audio',style:'voicemail',kind:'Telefonsvarer',label:'Jimmy til forbundet',meta:'Indtalt 21:41',lines:[['Jimmy Riis','Det er Jimmy. Kampen var købt. Tonny tabte med vilje, og dommeren hjalp. Jeg taler med Tonny og dommeren nu, og så ringer jeg igen.']]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 23:10',text:'Kraftigt slag mod tindingen med noget tungt og hårdt, eller mærker om halsen fra stof. Ingen tegn på forgiftning. Han døde mellem 21:45 og 22:15.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Jimmys jakke',bg:'carpet',stamp:'K-3704 / 02',items:[['paper',100,90,1.4,0],['stain',220,100,1.2,0,'#cfcfcf']],caption:'Papirstøv fra pointkort og talkum. Pointkortene ligger i dommerrummet, men også i gangen bag ringen, hvor de blev samlet. Omklædningsrummet har ingen pointkort.'}
],[
{type:'cctv',kind:'Overvågning',title:'Pressekonferencen',date:'21-11',camera:'PRESSE',doors:[[160,'PODIE']],cast:[['Bokser med blåt øje','#c94a3b']],frames:[{t:'21:45:00',at:[[50,.2]],txt:'Tonny forklarer nederlaget.'},{t:'22:00:00',at:[[50,.2]],txt:'Spørgsmål fra pressen.'},{t:'22:20:00',at:[[50,.2]],txt:'Afslutter.'}],text:'Tonny Sand er til pressekonference fra 21:42 til 22:20.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne om halsen er fra hans eget halstørklæde. Dødsårsagen er slaget, og der er jernspor i såret.'},
{type:'doc',kind:'Rapport',title:'Gangen bag ringen',src:'Sikkerhedsvagten',text:'Jeg stod i gangen bag ringen hele aftenen. Jimmy gik forbi kl. 21:43 mod dommerrummet. Der skete ikke noget i gangen.'}
]],
epilogue:'Dommer Gert Bo havde fået 500.000 kr. for at hjælpe kampen. I dommerrummet sagde Jimmy, at han ville anmelde ham. Gert slog ham med en boksehandske med en jernplade, han havde gemt som bevis mod Tonny. Han bar Jimmy ind i det røde omklædningsrum.',
headline:'Dommer anholdt for drab ved boksegala'});

KK.push({nr:63,theme:'Sejlklub',no:'K-3705',title:'Kæntret',when:'Lørdag 1. august · ca. 17:00',where:'Svendborg Sejlklub',
victim:'Kristian Holm (58), formand',victimLook:{sex:'m',hair:'short',hc:'hvid',age:'old',beard:'full',shirt:'#1f4e8a',collar:'shirt'},
intro:'Sejlklubbens formand findes død i havnen efter kapsejladsen. Det ligner en drukneulykke.',
brief:'Kl. 17:40 blev formand Kristian Holm fundet flydende i havnen ved broen. Kristian havde opdaget, at nogen havde snydt i kapsejladsen ved at bruge et forbudt sejl.',
options:[['Jakob Lund, sejler','Anette Bro, sejler','Mogens Fyhn, havnefoged','Pia Holm, hustru'],['Drukning (holdt under vand)','Slag med bomme','Spilhåndtag'],['Broen','Klubhuset','Sejlerloftet']],answer:[0,2,2],
info:[['Sejler. Vandt kapsejladsen.','Sejler. Kom på andenpladsen.','Havnefoged.','Kristians kone.'],
['Holdt under vandet.','Bommen på en båd.','Tungt spilhåndtag i metal.'],
['Broen. Han blev fundet i vandet her.','Klubhuset med bar.','Loft hvor sejlene opbevares.']],
timeline:[['13:00','Kapsejlads.'],['16:00','Præmieoverrækkelse.'],['16:30','Kristian beder to om en snak.'],['17:40','Kristian findes i vandet.']],
sketch:{title:'Broen · fundsted',items:[['table',200,60,320,30,0,'Bro'],['car',100,170,100,40,0,'Båd'],['car',300,170,100,40,0,'Båd']],body:[200,120,90,.7],markers:[[1,250,110,'Sejldug-fnug']]},
evidence:[[
{type:'doc',style:'table',kind:'Måling',title:'Sejlmåling',rows:[['Båd','Sejler','Sejl'],['Havørn','Jakob Lund','For stort (ulovligt)'],['Måge','Anette Bro','For stort (ulovligt)']],after:'Kun to både havde ulovlige sejl. Kristian skrev: "Jeg taler med Jakob og Anette kl. 16:30."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 18:10',text:'Lungerne er tørre: han var død, før han kom i vandet. Slag mod hovedet med noget metallisk, eller fra en bom. Han døde mellem 16:30 og 17:10.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Kristians sejlerjakke',bg:'deck',stamp:'K-3705 / 02',items:[['stain',100,90,1.4,0,'#f2f2f2'],['rope',220,100,1.2,0,'#8a6a3a']],caption:'Fnug fra sejldug og tovværk. Det findes på sejlerloftet og i klubhuset, hvor gamle sejl hænger til pynt. Broen har ingen sejldug.'}
],[
{type:'cctv',kind:'Overvågning',title:'Havnens kamera',date:'01-08',camera:'HAVN',doors:[[60,'KLUBHUS'],[260,'BRO']],cast:[['Kvinde i rød sejlerjakke','#c94a3b']],frames:[{t:'16:30:00',at:[[80,.4]],txt:'Kvinde i rød sejlerjakke rigger sin båd af.'},{t:'16:50:00',at:[[85,.4]],txt:'Stadig ved båden.'},{t:'17:10:00',at:[[80,.4]],txt:'Stadig ved båden.'}],text:'Kun Anette har rød sejlerjakke. Hun er ved sin båd hele tiden.'},
{type:'doc',kind:'Våbenundersøgelse',title:'Bommene',src:'Kriminalteknisk Center',text:'Ingen bom har blod eller hår. Såret passer med et spilhåndtag.'},
{type:'doc',kind:'Rapport',title:'Klubhuset',src:'Bartenderen',text:'Der var fest i klubhuset med 60 mennesker. Kristian kom ikke ind efter præmieoverrækkelsen.'}
]],
epilogue:'Jakob Lund havde vundet med et ulovligt sejl. På sejlerloftet sagde Kristian, at han ville fratage ham sejren. Jakob slog ham med et spilhåndtag. Han bar liget ned og smed det i vandet fra broen, så det skulle ligne en drukneulykke.',
headline:'Sejler anholdt for drab på klubformand'});

KK.push({nr:64,theme:'Roklub',no:'K-3706',title:'I takt',when:'Tirsdag 12. maj · ca. 06:00',where:'Bagsværd Roklub',
victim:'Anders Kvist (47), landstræner i roning',victimLook:{sex:'m',hair:'short',hc:'blond',shirt:'#1f4e8a',collar:'round'},
intro:'Landstræneren i roning findes død i bådhallen før morgentræningen.',
brief:'Kl. 06:30 fandt en roer landstræner Anders Kvist død mellem bådene i bådhallen. Anders havde opdaget, at to roere havde taget forbudte stoffer, og ville melde dem til Anti Doping Danmark.',
options:[['Mikkel Bach, roer','Line Hald, roer','Erik Sand, bådmand','Mette Kvist, hustru'],['Åre','Kvælning med tovværk','Injektion med insulin'],['Bådhallen','Ergometer-rummet','Omklædningen']],answer:[1,0,1],
info:[['Roer i otteren.','Roer i dobbeltsculler.','Bådmand. Reparerer både.','Anders’ kone.'],
['Kulfiber-åre.','Tovværk fra en båd.','Insulin fra en diabetiker-roer.'],
['Hal med både. Her blev han fundet.','Rum med romaskiner.','Omklædningen.']],
timeline:[['05:00','Anders låser op.'],['05:15','Anders beder to om en snak.'],['05:30','Anders ses sidst.'],['06:30','Anders findes.']],
sketch:{title:'Bådhallen · fundsted',items:[['shelf',200,40,320,20,0,'Både'],['shelf',200,220,320,20,0,'Både'],['door',30,130,30,0,90]],body:[200,130,80,.85],markers:[[1,240,110,'Gummistøv']]},
evidence:[[
{type:'doc',style:'table',kind:'Testresultater',title:'Dopingtest',rows:[['Roer','Resultat'],['Mikkel Bach','Positiv'],['Line Hald','Positiv'],['Øvrige','Negativ']],after:'Anders’ note: "Mikkel og Line, kl. 05:15. Før de andre kommer."'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 07:00',text:'Kraftigt slag mod hovedet med noget langt og hårdt, eller mærker om halsen fra et tov. Ingen stikmærker. Han døde mellem 05:20 og 05:50.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Anders’ træningsjakke',bg:'wood',stamp:'K-3706 / 02',items:[['stain',100,90,1.4,0,'#3a3a3a'],['stain',220,100,1.2,0,'#cfe0f0']],caption:'Gummistøv fra måtter og sved. Måtter er der i ergometer-rummet og i omklædningen. Bådhallen har betongulv uden måtter.'}
],[
{type:'doc',style:'table',kind:'Ergometer-data',title:'Mikkels træning',rows:[['Tid','Maskine','Bruger'],['05:18–05:52','Ergometer 4 · styrkerummet ovenpå','Mikkel Bach (puls registreret)']],after:'Mikkel roede på ergometer 4 i styrkerummet ovenpå med pulsbælte hele tiden.'},
{type:'doc',kind:'Supplerende obduktion',title:'Halsen',src:'Retsmedicinsk Institut',text:'Mærkerne om halsen er fra hans fløjtesnor. Dødsårsagen er slaget, og der er kulfiber i såret.'},
{type:'doc',kind:'Rapport',title:'Omklædningen',src:'Rengøringen',text:'Omklædningen blev vasket fra 05:00 til 06:00 med gulvet spærret. Ingen kom ind.'}
]],
epilogue:'Line Hald ville miste sin OL-plads. Mens Mikkel roede ergometer, lokkede hun Anders ind i et hjørne af ergometer-rummet. Hun slog ham med en reserveåre. Hun bar ham ud i bådhallen, så det skulle ligne et uheld med en båd.',
headline:'Roer anholdt for drab på landstræner'});

KK.push({nr:65,theme:'Faldskærm',no:'K-3707',title:'Frit fald',when:'Lørdag 4. juli · ca. 14:00',where:'Faldskærmsklubben Skyline, Randers',
victim:'Ronnie Holm (44), springinstruktør',victimLook:{sex:'m',hair:'short',hc:'brun',beard:'stubble',shirt:'#d46a1f',collar:'round'},
intro:'En erfaren springinstruktør dør, da hans faldskærm ikke åbner. Både hoved- og reserveskærm svigtede.',
brief:'Kl. 14:12 ramte springinstruktør Ronnie Holm jorden. Hverken hovedskærmen eller reserven åbnede. Ronnie havde opdaget, at nogen i klubben solgte springbeviser til folk, der aldrig havde bestået prøven.',
options:[['Camilla Ask, pakker','Thomas Fryd, klubformand','Bo Krog, pilot','Nanna Holm, ekskone'],['Skåret line i skærmen','Bedøvelse før springet','Blokeret reserve'],['Pakkehallen','Flyet','Klubhuset']],answer:[1,2,0],
info:[['Pakker. Pakker skærmene.','Klubformand. Udsteder springbeviser.','Pilot på flyet.','Ronnies ekskone.'],
['En line, der er skåret næsten over.','Bedøvelse før springet.','Reserveskærmens udløser er blokeret med lim.'],
['Hal hvor skærmene pakkes.','Det lille fly.','Klubhuset.']],
timeline:[['11:00','Ronnie konfronterer to.'],['12:30','Ronnies skærm pakkes.'],['13:45','Flyet letter.'],['14:12','Ronnie styrter.']],
sketch:{title:'Landingsområdet · fundsted',items:[['rug',200,130,320,180,0,'Græsmark'],['tree',60,60,30,30,0]],body:[200,130,30,.85],markers:[[1,240,110,'Hovedskærm uåbnet']]},
evidence:[[
{type:'doc',style:'letter',kind:'Mail',title:'Ronnies mail kl. 11:02',text:'Til Camilla og Thomas\nI to har underskrevet springbeviserne for de fire, der aldrig har bestået. Jeg anmelder det mandag.\nRonnie'},
{type:'doc',kind:'Rapport',title:'Teknisk undersøgelse',src:'Dansk Faldskærmsunion',text:'Hovedskærmen var pakket forkert, så den ikke kunne åbne. Reserveskærmen svigtede også: enten er dens udløser blokeret, eller en line er skåret. Begge fejl kan kun laves med god tid. Hans højdemåler viser, at han trak i begge håndtag: han var ved bevidsthed hele vejen ned.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Ronnies sele',bg:'grass',stamp:'K-3707 / 02',items:[['stain',100,90,1.4,0,'#d8c27a'],['rope',220,100,1.2,0,'#f2f2f2']],caption:'Lim-rester og talkum fra pakkehallens borde. Talkum bruges også i klubhuset. Skærmen var lukket og plomberet, da den kom i flyet: der er ikke rørt ved den i flyet.'}
],[
{type:'audio',style:'radio',kind:'Radiolog',label:'Pakkehallens intercom',meta:'12:00–13:40',lines:[['Camilla Ask','Jeg sidder ved bord 1 og pakker elevskærme. Skal bruge to timer.'],['Klubhus','Er du stadig ved bord 1, Camilla?'],['Camilla Ask','Ja, jeg har ikke rejst mig. Ronnies skærm ligger på bord 3, Thomas pakker den.']]},
{type:'doc',kind:'Supplerende undersøgelse',title:'Linerne',src:'Dansk Faldskærmsunion',text:'Alle liner er hele. Reserveskærmens udløser er limet fast med to-komponent-lim.'},
{type:'doc',kind:'Rapport',title:'Klubhuset',src:'Kriminalteknisk Center',text:'Ronnies skærm var aldrig i klubhuset. Den blev pakket og plomberet i pakkehallen og båret direkte til flyet.'}
]],
epilogue:'Thomas Fryd havde solgt falske springbeviser. Da Ronnie truede med at anmelde ham, pakkede Thomas hans hovedskærm forkert på bord 3 og limede reservens udløser fast. Ronnie havde ingen chance.',
headline:'Klubformand anholdt for faldskærmsdrab'});

KK.push({nr:66,theme:'Luftballon',no:'K-3708',title:'Ned med ballonen',when:'Søndag 6. september · ca. 07:30',where:'Ballonfestivalen, Hammel',
victim:'Svend Lyng (61), ballonskipper',victimLook:{sex:'m',hair:'bald',hc:'grå',beard:'full',age:'old',shirt:'#5a3a22',collar:'shirt'},
intro:'En ballonskipper findes død i kurven, da ballonen lander på en mark. Han var alene om bord.',
brief:'Kl. 08:40 landede ballonen "Rødhætte" på en mark ved Hammel. Skipper Svend Lyng lå død i kurven. Svend havde opdaget, at nogen snød med festivalens sikkerhedsgodkendelser.',
options:[['Pia Moe, festivalleder','Leon Bach, mekaniker','Gitte Lyng, datter','Kim Fisk, konkurrent'],['Gasforgiftning fra brænder','Slag med gasflaske','Kaffe med sovemiddel'],['Kurven','Festivalteltet','Værkstedsbilen']],answer:[1,0,2],
info:[['Festivalleder. Underskriver godkendelserne.','Mekaniker. Tjekker brænderne.','Svends datter. Var på jorden.','Konkurrent i ballonløbet.'],
['Brænderen kan lække gas, hvis ventilen er ændret.','Tung gasflaske.','Kaffe fra termokanden.'],
['Ballonens kurv. Her blev han fundet.','Telt på pladsen.','Bil med værktøj.']],
timeline:[['05:30','Briefing.'],['06:00','Svend konfronterer to.'],['07:00','Opsending.'],['08:40','Landing.']],
sketch:{title:'Kurven · fundsted',items:[['crate',200,130,120,120,0,'Kurv'],['barrel',160,100,24,24,0,'Gas'],['barrel',240,100,24,24,0,'Gas']],body:[200,150,0,.6],markers:[[1,240,170,'Olie på ærmet']]},
evidence:[[
{type:'doc',style:'table',kind:'Godkendelser',title:'Sikkerhedstjek',rows:[['Ballon','Tjekket af','Godkendt af'],['Rødhætte','L. Bach','P. Moe']],after:'Svend skrev på tavlen kl. 06:00: "Pia og Leon. I har snydt. Vi taler efter landing." Kun de to rørte ballonen.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 09:10',text:'Lyserød hud som ved gasforgiftning, men også en bule på hovedet fra noget tungt. Kaffen i kurven er undersøgt: intet sovemiddel. Han døde under flyvningen, mellem 07:30 og 08:30.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Brænderen',bg:'grass',stamp:'K-3708 / 04',items:[['wrench',100,90,1.4,0],['stain',220,100,1.2,0,'#333']],caption:'Ventilen er drejet med en speciel nøgle. Der er olie og metalspåner på den, som kun findes i værkstedsbilen og i festivalteltet, hvor reservedele lå. Selve skaden er ikke lavet i kurven under flyvning.'}
],[
{type:'cctv',kind:'Overvågning',title:'Festivalscenen',date:'06-09',camera:'SCENE',doors:[[160,'SCENE']],cast:[['Festivalleder med headset','#c94a8a']],frames:[{t:'05:30:00',at:[[50,.2]],txt:'Pia holder briefing.'},{t:'06:10:00',at:[[50,.2]],txt:'Pia taler med tv.'},{t:'07:00:00',at:[[55,.2]],txt:'Pia giver startsignal.'}],text:'Pia Moe er på scenen fra 05:20 til 07:05. Ventilen blev ændret mellem 06:00 og 06:50 ifølge teknikerne.'},
{type:'doc',kind:'Supplerende obduktion',title:'Bulen',src:'Retsmedicinsk Institut',text:'Bulen er fra landingen. Dødsårsagen er gasforgiftning.'},
{type:'doc',kind:'Rapport',title:'Festivalteltet',src:'Festivalens vagt',text:'Festivalteltet var låst fra 05:00 til 09:00. Reservedelene var flyttet ud i værkstedsbilen i går.'}
]],
epilogue:'Leon Bach havde godkendt brændere uden at tjekke dem. I værkstedsbilen ændrede han ventilen på Svends brænder, så den lækkede gas ind i kurven. Svend blev svimmel og døde højt over markerne.',
headline:'Mekaniker anholdt for drab i luftballon'});

KK.push({nr:67,theme:'Svæveflyvning',no:'K-3709',title:'Termik',when:'Lørdag 20. juni · ca. 15:00',where:'Arnborg Svæveflyveplads',
victim:'Hanne Grøn (53), flyveleder',victimLook:{sex:'f',hair:'short',hc:'grå',glasses:true,shirt:'#3e5b46',collar:'shirt'},
intro:'Flyvelederen findes død i hangaren, mens svæveflyene er oppe. Ingen så noget.',
brief:'Kl. 15:40 fandt en pilot flyveleder Hanne Grøn død i hangaren. Hanne havde opdaget, at nogen havde forfalsket logbøger for at få piloter til at se mere erfarne ud.',
options:[['Ib Krag, instruktør','Sus Holm, pilot','Frank Aas, spilfører','Lene Grøn, søster'],['Propel','Skruenøgle','Kvælning med slæbetov'],['Hangaren','Spilhuset','Kontoret']],answer:[0,2,2],
info:[['Instruktør. Underskriver logbøger.','Pilot. Har brug for flere timer.','Spilfører. Trækker flyene op med et spil.','Hannes søster.'],
['Propel fra et motorfly.','Stor skruenøgle.','Slæbetovet fra spillet.'],
['Hangaren. Her blev hun fundet.','Lille hus ved spillet.','Kontoret med logbøger.']],
timeline:[['12:00','Flyvning.'],['14:00','Hanne beder to om en snak.'],['14:15','Hanne ses sidst.'],['15:40','Hanne findes.']],
sketch:{title:'Hangaren · fundsted',items:[['car',200,90,260,50,0,'Svævefly'],['shelf',40,180,20,80,0]],body:[200,190,70,.85],markers:[[1,250,170,'Papirklip']]},
evidence:[[
{type:'doc',style:'note',kind:'Seddel',title:'Hannes notat',text:'Logbøgerne er forfalsket. Underskrevet af Ib, timer hos Sus. En af dem løj. Taler med begge kl. 14.'},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 16:10',text:'Mærker om halsen fra et groft tov, og en bule på hovedet fra noget tungt af metal. Ingen skader fra en propel. Hun døde mellem 14:15 og 14:50.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Hannes skjorte',bg:'paper',stamp:'K-3709 / 03',items:[['paper',100,90,1.4,0],['rope',220,100,1.2,0,'#d8c27a']],caption:'Papirklip og tovfibre. Papir findes på kontoret og i spilhuset, hvor startlisten hænger. Hangaren har ingen papirer, og hun blev lagt der.'}
],[
{type:'cctv',kind:'Overvågning',title:'Svæveflyets kamera',date:'20-06',camera:'COCKPIT-CAM',doors:[],cast:[['Pilot','#3a6ad8']],frames:[{t:'14:10:00',at:[[50,.3]],txt:'Sus letter.'},{t:'14:30:00',at:[[50,.3]],txt:'Flyver over Herning.'},{t:'14:55:00',at:[[50,.3]],txt:'Lander.'}],text:'Sus Holm er i luften fra 14:10 til 14:55.'},
{type:'doc',kind:'Supplerende obduktion',title:'Bulen',src:'Retsmedicinsk Institut',text:'Bulen er fra faldet. Dødsårsagen er kvælning med et slæbetov.'},
{type:'doc',kind:'Rapport',title:'Spilhuset',src:'Spilføreren',text:'Jeg sad i spilhuset hele eftermiddagen og trak fly op. Hanne kom ikke herind.'}
]],
epilogue:'Ib Krag havde underskrevet falske timer for penge. På kontoret sagde Hanne, at hun ville tage hans instruktørbevis. Ib kvalte hende med et reserve-slæbetov og kørte hende til hangaren.',
headline:'Instruktør anholdt for drab på flyveplads'});

KK.push({nr:68,theme:'Rideskole',no:'K-3710',title:'Galop',when:'Torsdag 14. april · ca. 17:00',where:'Bakkegården Rideskole, Himmerland',
victim:'Lotte Sand (49), rideskoleejer',victimLook:{sex:'f',hair:'long',hc:'lysbrun',shirt:'#6b3a3a',collar:'shirt'},
intro:'Rideskolens ejer findes død i en boks. Det skal ligne et spark fra en hest.',
brief:'Kl. 17:45 fandt en elev ejer Lotte Sand død i boksen hos hingsten Storm. Det lignede et hestespark. Lotte havde opdaget, at nogen havde solgt hendes bedste hest under hendes navn.',
options:[['Rikke Moe, berider','Johan Bak, staldkarl','Henriette Lund, hestehandler','Peter Sand, ægtemand'],['Hestespark','Hovkniv','Slag med spand'],['Hingstens boks','Sadelrummet','Foderladen']],answer:[2,2,1],
info:[['Berider.','Staldkarl.','Hestehandler. Køber og sælger heste.','Lottes mand.'],
['Hingsten Storm sparker.','Lille, skarp hovkniv.','Tung metalspand.'],
['Hingstens boks. Her blev hun fundet.','Rum med sadler.','Lade med hø.']],
timeline:[['15:00','Undervisning.'],['16:30','Lotte beder to om en snak.'],['16:45','Lotte ses sidst.'],['17:45','Lotte findes.']],
sketch:{title:'Hingstens boks · fundsted',items:[['rug',200,130,200,160,0,'Halm'],['barrel',320,60,24,24,0]],body:[200,140,20,.85],markers:[[1,240,120,'Lædersæbe']]},
evidence:[[
{type:'phone',kind:'Mobiltelefon',title:'Lottes telefon',owner:'Lotte Sand',lockTime:'17:50',wall:'linear-gradient(160deg,#6b3a3a,#d8c27a)',msgs:[{with:'Rikke + Henriette',m:[['me','16:30','Prins er solgt. Kun I to havde papirerne. Kom nu.']]}]},
{type:'doc',kind:'Rapport',title:'Ligsyn',src:'Lægevagten · 18:20',text:'Ingen hovaftryk: hun er ikke sparket. Et bredt slag mod hovedet fra noget tungt og rundt, eller et lille stik fra noget skarpt. Hun døde mellem 16:45 og 17:15.'},
{type:'photo',kind:'Gerningsstedsfoto',title:'Lottes ridejakke',bg:'wood',stamp:'K-3710 / 02',items:[['stain',100,90,1.4,0,'#8a6a3a'],['stain',220,100,1.2,0,'#d8c27a']],caption:'Lædersæbe og hø. Lædersæbe findes i sadelrummet; hø i laden og i sadelrummet, hvor høsække står. Ingen halm fra boksen er trængt ind i tøjet.'}
],[
{type:'cctv',kind:'Overvågning',title:'Ridehallen',date:'14-04',camera:'RIDEHAL',doors:[[160,'HAL']],cast:[['Berider på hvid hest','#f2f2f2']],frames:[{t:'16:45:00',at:[[40,.3]],txt:'Rikke underviser.'},{t:'17:00:00',at:[[60,.3]],txt:'Stadig undervisning.'},{t:'17:15:00',at:[[50,.3]],txt:'Holdet slutter.'}],text:'Rikke Moe underviser fra 16:40 til 17:20.'},
{type:'doc',kind:'Supplerende obduktion',title:'Stikket',src:'Retsmedicinsk Institut',text:'Der er intet stik, kun en rift fra en søm. Dødsårsagen er slaget med en metalspand.'},
{type:'doc',kind:'Rapport',title:'Foderladen',src:'Staldkarlen',text:'Jeg læssede hø i laden hele eftermiddagen med en traktor. Lotte kom ikke derind.'}
]],
epilogue:'Henriette Lund havde solgt hesten Prins til udlandet med falske papirer. I sadelrummet truede Lotte med politiet. Henriette slog hende med en metalspand og slæbte hende ind i hingstens boks, så det skulle ligne et hestespark.',
headline:'Hestehandler anholdt for drab på rideskole'});
