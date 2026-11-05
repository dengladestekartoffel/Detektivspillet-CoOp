# Detektivspillet

Et detektivspil for to personer, hver på sin skærm.

- **Feltagent** har sporene fra gerningsstedet. De indsnævrer hver kategori til to muligheder.
- **Centralen** har alibier, analyser og logs, der udelukker én mulighed i hver kategori.
- Ingen af jer kan løse sagen alene. Tal sammen, streg ud på den fælles tavle, og rejs anklagen.

Sporene er rapporter, obduktionserklæringer, mobiltelefoner og computere man kan låse op, lydoptagelser, overvågningsvideo, gerningsstedsfotos og -skitser. 150 sager i alt.

Lydoptagelserne læses op med enhedens bedste danske stemme (Premium/Forbedret/Neural vælges automatisk). På iPad og iPhone kan man hente en bedre stemme under Indstillinger → Tilgængelighed → Oplæst indhold → Stemmer → Dansk.

## Spil

Åbn `Detektivspillet.html` (eller siden på GitHub Pages) på begge enheder. Den ene opretter et makkerpar og får en kode på fem tegn, den anden skriver koden.

## Server: Supabase

Makkerpar, online-gemning og rangliste kører på Supabase. Kør `supabase-setup.sql` én gang i Supabase → SQL Editor. Filen kan trygt køres igen.

Projektets URL og den offentlige nøgle står øverst i scriptet i `Detektivspillet.html` (`SUPA`).

## Filer

| Fil | Indhold |
| --- | --- |
| `Detektivspillet.html` | Spillet: lobby, makkerpar, tavle, anklage, effekter og de første 8 sager |
| `spor.js` | Motoren der tegner spor: telefoner, computere, obduktion, lyd, video, fotos, skitser, portrætter |
| `cases/pakke-01.js` … `pakke-15.js` | Sagsbunke 1–15 (sag 9–150), hver med sit eget tema |
| `supabase-setup.sql` | Tabeller og funktioner i Supabase |

## Nye sager

Hver sagsbunke er en fil i `cases/` med 10 sager, der kalder `KK.push({...})`. Tilføj filen som `<script>` i `Detektivspillet.html` efter de eksisterende bunker. Numrene (`nr`) skal fortsætte uden huller, fordi gemte fremskridt peger på sagens plads.

## Lyst og mørkt tema

Spillet følger iPadens egen indstilling for lyst/mørkt. Knappen øverst til højre skifter manuelt, og valget huskes på enheden.
