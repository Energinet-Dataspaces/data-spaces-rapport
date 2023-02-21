---
title: Data space designprincipper
description: Hvad er data spaces?
---

Publikationen [Design Principles for Data Spaces](https://design-principles-for-data-spaces.org/) er forfattet af en række af de største aktører indenfor data spaces (se kapitel 4) og er et resultat af EU-projektet OPEN DEI (se afsnit 3.4.1). Her beskrives fire primære designprincipper for data spaces, som er de designprincipper, som de fleste lægger sig opad:

![Figur 2](/figur-2.png)

_Figur 2: Design Principles for Data Spaces, side 16._

---

## Datasuverænitet

Gennem data spaces skal der skabes mere transparens og datasuverænitet for dataejere; dette gælder både privatpersoner, organisationer, myndigheder og virksomheder.

Dataejere skal sikres adgang til de data, der produceres gennem deres brug af såvel online services og gennem brug af IoT (Internet of Things)-produkter (se Data Act, afsnit 3.2.1).

Disse data skal gøres tilgængelige for dataejere i standardiserede formater, så de kan anvendes på tværs af systemer, og så slutbrugeren kan tage sine data med sig, hvis denne ønsker at skifte udbyder. Et andet vigtigt element ved datasuverænitet er, at dataejeren (igen både privatpersoner og virksomheder/organisationer) skal have ret til selv at bestemme, hvem der skal have adgang til hvilke data (også kun dele af datasæt), og til hvilket forudbestemt formål data må benyttes og i hvilken defineret tidsperiode. Dataejere skal således have mulighed for på en let og gennemsigtig måde at give tredjeparter adgang til deres data, enten gratis eller ved at sælge data gennem kommercielle datamarkedsplatforme. Det skal desuden være let for en dataejer at tilbagetrække samtykke.

### Eksempel

Det kunne være en landmand, der skal have ret til den data, der produceres gennem brugen af hans/hendes intelligente landbrugsmaskiner. Data skal gøres tilgængelig på en måde, så han selv kan samkøre data med data fra andre maskiner. Landmanden skal desuden selv kunne give adgang til denne data, så eksempelvis en udbyder af en digital service til optimering af landbrug eller energioptimering kan bruge dataene til bestemte behov. Ligeledes skal landmanden kunne sælge sin data videre til bestemte formål.

Datasuverænitet skal skabe mere transparens og distribueret digital troværdighed, sikkerhed, sikring af privatlivs- og virksomhedsdata.

Dette princip bygger videre på eksisterende lovgivning og organisationer som f.eks. [GDPR](https://gdpr.dk/) (General Data Protection Regulation), [ePR](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52017PC0010) (ePrivacy Direktivet), IPR (Intellectual Property Rights) og i eksempelvis [MyData](https://www.mydata.org/)-bevægelsen. Det er håbet, at datasuverænintet og transparens vil betyde, at flere dataejere vil føle sig trygge nok til at dele data.

## En retfærdig og ligeværdig spilleplade

Det andet princip forsøger at reducere den stigende datamonopolisering, hvor store tech-giganter har et forspring, fordi de er indehavere af store mængder af data, og fordi det i dag er svært at skifte udbyder.

Data spaces skal gøre det lettere at skifte serviceudbyder, og man skal kunne tage sin data med sig fra én udbyder til en anden (reguleret i Data Act, se afsnit 3.2.1). Dette skal gøre det lettere for nye serviceudbydere at komme på banen og derved sikre, at serviceudbydere i højere grad konkurrerer på kvalitet fremfor kvantitet af data. Med data spaces vil man modvirke den lock-in-situation, som vi oplever i dag. Det er forventningen, at større transparens omkring, hvornår man som forbruger af et produkt (både privatperson og virksomhed) 'betaler' med sin data, også vil gøre det lettere for forbrugere at kapitalisere på data ved at sælge den gennem markedsplatforme. Ligeledes skal data spaces gøre det lettere at samkøre data fra forskellige udbydere og at give tredjeparter adgang til data, hvilket skal sikre, at det ikke kun er de store tech-giganter med adgang til store mængder data, der har mulighed for at udvikle data-drevne services. Når det bliver muligt at trække data fra mange forskellige aktører, vil der også skabes en mere retfærdig og ligeværdig spilleplade. Dette skal minimere barrierer for, at nye virksomheder og services kan komme på banen og konkurrere med de eksisterende. Man håber derved, at nye innovative services kan opstå, samtidig med at det skal skabe grobund for nye forretningsmodeller ved at dele data på tværs af virksomheder.

## En decentraliseret, blød infrastruktur

En blød infrastruktur er de regler og retningslinjer, der supplerer den hårde infrastruktur og får den til at fungere. Dette designprincip er klart det mest komplekse af de fire, da det indeholder alle de fælles standarder, aftaler, teknologier og politikker, som skal gå på tværs af data spaces og data spaces-aktører, og som skal fungere som limen, der får det hele til at hænge sammen. Den bløde infrastruktur skal skabe interoperabilitet og sammenhæng imellem decentrale og fragmenterede dataøkosystemer på tværs af aktører, teknologier, sektorer og lande.

Et godt og ofte benyttet eksempel er den eksisterende GSM-infrastruktur, hvor mobiloperatører alle kan bruge de samme master til at sende standardiserede signaler, og alle benytter den samme type identifikation for brugere gennem telefonnumre. Den hårde infrastruktur (kabler og master) suppleres af den bløde infrastruktur, der sætter standarder for signaltyper og bestemmer de overordnede retningslinjer for, hvordan vi kommer i kontakt med hinanden, og hvordan vi afregner med mobiloperatøren. Når det kommer til data spaces, handler den bløde infrastruktur om at blive enige om en overordnet referencearkitektur, dvs. hvilke komponenter og aktørroller, der skal være i et data space og skabe nogle overordnede regler for, hvordan disse skal interagere med hinanden. Den bløde infrastruktur sætter rammerne for, hvordan den hårde infrastruktur skal udvikles, og reglerne for, hvordan den skal bruges:

_As all participants implement the same minimal set of functional, legal, technical and operational agreements and standards, they can interact in the same manner, no matter what data space they are operating in. Integral design of these agreements and standards from the start will provide cohesion, as these elements are complementary rather than following up on each other. (Design Principles for Data Spaces, side 15)._

Den bløde infrastruktur omfatter retningslinjer for udviklingen af de tekniske byggeklodser; den hårde infrastruktur, så som standarder for API'er, middleware-platformselementer, standarder for at strukturere og beskrive data og metadata. Data spaces skal favorisere åbne data og data, der efterlever [FAIR-principperne](https://www.go-fair.org/), så data gøres 'Findable, Accessible, Interoperable and Reusable'. Det er absolut essentielt, at denne del er teknologi-agnostisk, så data kan deles på tværs af forskellige sensorer, netværksteknologier og forskellige typer af platformsteknologier.

En væsentlig del af den bløde infrastruktur omhandler styring af data spaces og samarbejdsretningslinjer – denne del kaldes 'governance'-delen – og omfatter fælles aftaler og standarder indenfor datapolitikker, retningslinjer for sikkerhed og distribueret digital troværdighed, identitetsoprindelse, og datainformationsmodeller. Derudover er en vigtig del af governance-strukturen, at der skal udarbejdes standard Service Level Agreements, Smart Contracts (så man let kan indgå kontrakter med nye partnere); her skal formuleres markedsvilkår og forretningsmodeller og ikke mindst de overordnede samarbejdskriterier.

Disse aftaler og standarder skal naturligvis efterleve eksisterende, horisontale bestemmelser og juridiske rammer omkring GDPR, Free Flow of Non-Personal Data Regulation, ePrivacy Directive, IPR, Databasedirektivet, INSPIRE Direktivet, Direktivet om Åbne Data, initiativet Et Interoperabelt Europa, Platform to Business Regulation, WTO's General Agreement on Trade in Services m.m. Og de enkelte data spaces skal overholde sektorspecifikke reguleringer som f.eks. Electricity Regulation og Intelligent Transport System Directive (dette uddybes i Forslag til Data Act side 5-7). Desuden beskriver Kommissionen, at de teknologiske komponenter skal efterleve 'cybersecurity by design-princippet' og 'data protection by design' og selvfølgelig overholde GDPR.

De fleste data space-aktører er enige om, at de sværeste dele af den bløde infrastruktur bliver governance-delen, og som det bliver tydeligt i kapitel 4, hvor vi beskriver de store aktører indenfor data spaces, så er det også på governance- og referencearkitekturen, at det største arbejde foretages p.t. Det er en vigtig opgave at finde ud af, hvor meget af denne bløde infrastruktur der kan gå på tværs af alle data spaces, og hvor der skal laves specifikke regler og standarder til de forskellige sektorspecifikke dataområder. Det er vigtigt, at så meget som muligt går på tværs, da det er forudsætningen for en nem dataudveksling på tværs af sektorer. Samtidig anerkendes det, at der er sektorspecifikke regler og reguleringer, som man må tage højde for. Sundhedsdata skal naturligvis behandles meget anderledes end f.eks. miljødata og transportdata.

## Offentlig-privat styring

Det fjerde og sidste princip handler om at skabe en god balance mellem offentlig og privat styring. Dette princip tager udgangspunkt i den historiske situation, hvor internettet og datamarkeder primært har været kontrolleret og drevet af private virksomheders og store tech-giganters interesser. Med reguleringen af data spaces ønsker man at skabe et datamarked og en dataøkonomi, hvor langt flere aktørers interesser varetages.

**Det understreges derfor, at arbejdet med at designe og implementere data spaces kræver en demokratisk proces, hvor både privatpersoner, små og store virksomheder, NGO'er, kommuner, stater m.m. inddrages.**

Lovgivning, regulering og design af data spaces skal ske på en måde, der sørger for, at data kan benyttes til formål på tværs af offentlige og private myndigheder. Det er vigtigt, at der tages hensyn til virksomheders muligheder for forretningsudvikling og IPR, samtidig med at data anvendes til større samfundskritiske formål som grøn omstilling og udvikling af sundhedssektoren. Et element i dette princip er, at data fra private virksomheder og organisationer skal kunne stilles til rådighed for offentlige myndigheder under særlige omstændigheder som f.eks. ved en pandemi (dette lovgives der om i Data Act, se afsnit 3.2.1).

Ovenfor har vi beskrevet de fire overordnede grundprincipper som data spaces skal designes ud fra. Nedenfor vil vi se nærmere på, hvad dette betyder for de forskellige aktørroller, man forestiller sig skal tage del i data spaces, hvordan disse skal organiseres i forhold til hinanden, og hvilke teknologiske og organisatoriske komponenter, man forestiller sig, at data spaces skal bestå af.
