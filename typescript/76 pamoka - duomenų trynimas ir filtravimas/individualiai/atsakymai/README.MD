# 13 pamoka - duomenų trynimas ir filtravimas HTML

Tęsiame praeitos pamokos darbą naudodami tą patį projektą. Praeitos pamokos pabaigia, yra šios pamokos pradžia.
Jūsų pamokos tikslas įgalinti duomenų filtravimą ir trynimą. 

## Filtravimas - pagal markę
1. Sukurkite komponentą SelectField, skirtą pasirinkti automobilių markei
  1. Sukurkite komponentą, kuris atvaizduoja bet kokius 3 pasirinkimus
  2. Išanalizuokite ko reikia, kad sukurti vieną pasirinkimą
  3. Perduokite masyvą tokių pasirinkimų formuojat komponentą (konstruktoriui)
  4. Priimkite funkciją, kurią iškviesite pasikeitus <select> reikšmei
  5. Sukurkite SelectField komponentą App klasėje ir atvaizduokite jį virš lentelės
2. CarCollection klasėje sukurkite metodą, kuris pasirinktų mašina pagal markės id
3. Sukurkite metodą Table klasėje, kad būtų galima atnaujinti duomenis naudojant viešą metodą
4. Reaguojant į SelectField[1.] pakitusią reikšmę, panaudokite ją, kad gauti mašinas[2.] iš klasės CarCollection. Gavus naujas reikšmes, perduokite jas Table komponentui[3.].

  
## Trynimas - pagal mašinos id
1. Table komponente papildykite kiekvieną lentelės eilutę stulpeliu, kuriame būtų ištrynimo mygtukas
2. Table komponente papildykite priimamus prop'sus funkcija - onDelete, kuri būtų iškviečiama paspaudus ištrynimo mygtuką. Kviečiant funkciją onDelete nepamirškite perduoti tos mašinos 'id' kurią reikia ištrinti
3. CarsCollection klasėje implementuokite Ištrynimo logiką
4. App klasėje aprašykite metodą kuris ištrintų reikiamą mašiną pagal id ir atnaujintų duomenis lentelėje, ir parduokite metodo nuorodą lentelės Table komponentui.

Atlikus užduotis, pabandykite suvienodinti:
  * metodų pavadinimus
  * kintamųjų pavadinimus
  * kontruktorių veikimus
  * duomenų atnaujinimo logiką
  * duomenų perdavimo logiką
  
Pabandykite susitarti su kolega-studentu, kad peržiūrėtumėte viens kito sprendimus. 
Padiskutuokite, suformuokite klausimus. Išsimiegokite.