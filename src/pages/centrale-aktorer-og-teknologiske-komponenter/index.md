---
title: Centrale aktører
description: Centrale aktører og teknologiske komponenter
---

Dette afsnit giver et overblik over en række af de mest centrale organisationer og aktører, der arbejder på at skabe de teknologier og rammeværktøjer, der skal til for at tage data spaces fra vision til virkelighed.

Som nævnt i indledningen er de mange forskellige aktører dybt infiltreret i hinanden, så de samme personer og virksomheder er aktive i flere forskellige organisationer. De forskellige organisationer arbejder desuden tæt sammen og skal nærmere ses som samarbejdspartnere, der arbejder på at drive den samme dagsorden end som egentlige konkurrenter. De forskellige organisationer deltager ofte i de samme projekter og arbejdsgrupper, hvilket særligt ses i Data Spaces Support Center, hvor mange af de nedenstående organisationer er med. De centrale aktører, der vil blive beskrevet, er: International Data Spaces Association (IDSA), Gaia-X, Fraunhofer Institute, FIWARE Foundation, iSHARE Foundation og Nordic Institute for Interopreability Solutions (NIIS).

Kortlægningen har vist, at mange af aktørerne primært arbejder på referencearkitekturen til data spaces og på at få beskrevet de forskellige roller og deres indbyrdes relationer (f.eks. data owner, data provider, data user, broker, clearing house, identity provider, vocabulary provider, service provider, app store, certification bodies m.m.) samt på at få beskrevet de forskellige teknologiske byggeklodser og funktionaliteter (f.eks. connectors, open APIs, identity management, trust framework m.m.).

Arbejdet med at få skabt den rette governance-struktur (inkl. datapolitikker, smart contracts, SLAer, incident management, sikkerhedspolitikker etc.) fylder ligeledes meget i arbejdet med data spaces lige nu. Selvom hver af de forskellige store aktører skaber deres egne bud på og figurer over referencearkitektur, betyder det ikke, at de er uenige om udformningen af data spaces. De er langt hen ad vejen relativt enige om de overordnede rammer. De forskellige modeller skal nærmere ses som forskellige måder at forstå, konceptualisere og kommunikere data spaces på.

Er man interesseret i de helt konkrete teknologiske komponenter, der skal til for at stykke data spaces sammen, har kortlægningen vist, at der på nuværende tidspunkt ikke er så mange færdige komponenter at bygge et data space med, og at arbejdet med at udvikle disse er langt mere fragmenteret. Generelt bliver de teknologiske komponenter udviklet i de projekter, som bliver gennemført med EU-midler og andre forsknings- og innovationsmidler.

For at få et indblik i disse projekter kan man orientere sig på Gaia-X hjemmeside, hvor der er en liste over [light house projekter](https://gaia-x.eu/who-we-are/lighthouse-projects/), eller man kan udforske [IDSA's data space radar](https://internationaldataspaces.org/adopt/data-space-radar/), hvor igangværende data space-projekter rangeres efter sektor (inkl. energi) og efter, hvilket modenhedsniveau de befinder sig på.

![Figur 13](/figur13.png)

_Figur 13: Screenshot fra IDSA's Data Space Radar._

I EU-projekter er der et krav om, at teknologierne skal gøres offentligt tilgængelige gennem open source. Af de projekter, der har været dialog med, lader det dog til at være meget forskelligt, hvor meget der vil blive offentliggjort undervejs, og hvor meget der først vil blive publiceret ved projekternes afslutning.

Når man dykker ned i udviklingen af helt konkrete komponenter og kigger i deres GitHub eller GitLab-repositorier, som f.eks. 'Eclipse Data Space Connector' (se afsnit 4.3), vil man desuden opdage, at der ofte er mange bidragsydere fra forskellige organisationer og virksomheder, og det er derfor ikke helt trivielt at give et overblik over, hvilke aktører der udvikler hvilke teknologiske komponenter.

Generelt kan man få meget information ved at se på nøgletallene for et open source-projekt (i form af antal bidragsydere, antal redigeringer, antal følgere osv.) for at få en fornemmelse af trækkraften og dermed levedygtigheden af en given komponent. Hvor der er fundet konkret udvikling af teknologiske komponenter og softwarekode, vil disse blive nævnt og henvist til, men afsnittet skal ikke ses som en kortlægning af teknologiske komponenter. En sådan kortlægning vil kræve et større detektivarbejde, men det vil helt sikkert være relevant, når vi når lidt længere i udviklingen af data spaces.

Som tidligere beskrevet er data spaces-dagsordenen en videreudvikling af mange års arbejde med at gøre data mere tilgængelig på sikrere og mere demokratiske måder. Det betyder, at meget af den software, der skal til for at realisere data spaces, allerede har været under udvikling i lang tid. I afsnit 4.7 gives en kort oversigt over nogle af de teknologier, der er blevet udviklet tidligere i andet regi end data spaces, men som delvist kan bruges til at videreudvikle til konkrete data spaces.

## International Data Space Association

[International Data Space Association](https://internationaldataspaces.org/) forkortes oftest til IDSA. Organisationen blev grundlagt som International Data Spaces (IDS) i Tyskland i 2015 på baggrund af et forskningsprojekt på Fraunhofer Institute (se afsnit 4.3): ['Industrial Data Space. Digital Sovereignty Over Data](https://www.fraunhofer.de/content/dam/zv/en/fields-of-research/industrial-data-space/whitepaper-industrial-data-space-eng.pdf)'(2016) og blev støttet af det tyske Ministerium for Uddannelse og Forskning_._ I dag har foreningen over 130 medlemmer (inkl. Siemens, Google, Microsoft, Huawei, Deutsche Telecom, Atos, Engineering, Fraunhofer, FIWARE, flere af de store tyske bilproducenter og danske DI Digital), som samarbejder om at definere en referencearkitektur for datadeling og -udveksling. IDSA har 13 Hubs og kompetencecentre og er til stede i 26 lande, dog ikke i Danmark. Som nævnt er IDSA en af hovedaktørerne i EU's nye Data Space Support Center(se afsnit 3.4.2).

Med deres egne ord arbejder de på at fremme europæiske værdier, herunder:

- Sikring af datasuverænitet for dataskaberen og tillid blandt deltagerne.
- Lige muligheder gennem et fødereret design (så der er lige vilkår i dataudveksling for SMVer).
- Databeskyttelse og -sikkerhed med den største troværdighed i verden.

IDSA arbejder på at lave [data space certificeringer](https://internationaldataspaces.org/international-data-spaces-certification-building-trust-in-data-spaces/), som kan bruges til at skabe mere digital tillid i decentraliseret datadeling. IDSA arbejder fokuseret på at skabe referencearkitekturmodeller (IDS-RAM) til data spaces. Nedenstående figur viser de overordnede roller og interaktioner i IDS RAM 3.0:

![Figur 14](/figur14.png)

_Figur 14: IDS Roles and Interactions (source: IDSA, IDS RAM 3.0)._

Denne referencearkitekturmodel revideres i øjeblikket, og udviklingen af version 4.0 kan findes på [GitHub](https://github.com/International-Data-Spaces-Association/IDS-RAM_4_0).

Ligeledes deles flere [IDSA-ressourcer i open source](https://github.com/International-Data-Spaces-Association/idsa), især:

- [International Data Spaces Global](https://github.com/International-Data-Spaces-Association/IDS-G) (IDS-G).
- Et ['reference test bed'](https://github.com/International-Data-Spaces-Association/IDS-testbed): Verificerer, om en komponent implementerer IDS-specifikationerne.
- Et ['minimum viable data space'](https://github.com/International-Data-Spaces-Association/IDS-testbed/blob/master/minimum-viable-data-space/MVDS.md): En kombination af IDSA-komponenter til at skabe et data space med tilstrækkelige funktioner til sikker og suveræn dataudveksling som specificeret af IDSA.
- [IDSA Graduation Scheme v1.0](https://github.com/International-Data-Spaces-Association/idsa/tree/main/graduation_scheme), hvor IDSA har samlet sandbox-projekter og kode fra andre aktører og beskriver dem ud fra deres gradueringskriterier for kompatibilitet med ISD-standarder og retningslinjer.

IDSA har i nov. 2022 udgivet en [rapport](https://internationaldataspaces.org/wp-content/uploads/dlm_uploads/IDSA-Data-Connector-Report-November-2022.pdf) med en oversigt over, hvilke data space connectors der findes, hvad de forskellige connectors kan, og om de er open source. Derudover har IDSA et stort [bibliotek med rapporter](https://internationaldataspaces.org/publications/position-papers/) om f.eks. datasuverænitet, businessmodeller, governance, certificering, GDPR, implementering af den Europæiske Datastrategi samt blockchain og data spaces.

## Gaia-X

[Gaia-X](https://gaia-x.eu/)er klart en af de mest synlige organisationer indenfor data spaces lige nu. Gaia-X har hovedkontor i Bruxelles men er oprindeligt et initiativ startet af den tyske Bundestag og blev fra starten bakket op af den daværende franske regering. Gaia-X er grundlagt i 2020 som en AISBL (international nonprofitorganisation). Blandt grundlæggerne er store tyske virksomheder som f.eks. BMW, Deutsche Telekom, Bosch og Siemens men også ISDA og Fraunhofer Institute. Gaia-X har i dag over 300 virksomheder og organisationer som medlemmer (der er endnu ingen danske medlemmer), hvor ca. ¾ er fra det private erhvervsliv og ca. 40 % er SMVer. De repræsenterer sektorer som mobilitet, energi, produktion, finans, landbrug, rumfart, offentlig administration, sundhedspleje osv. Gaia-X er tæt knyttet til Den Europæiske Datastrategi og er mere centreret omkring EU end f.eks. ISDA.

Målet med Gaia-X er at etablere et økosystem, i hvilket data kan deles og gøres tilgængeligt på troværdig måde, og hvor kontrollen over data gives tilbage til brugerne, som har suverænitet over deres data. Gaia-X er ikke et forsøg på at skabe en ny hyperscale datainfrastruktur, som skal konkurrere med de eksisterende. Formålet er derimod at skabe et decentralt økosystem, som er samlet og bliver gjort operationaliserbart gennem fælles politikker og principper og gennem standardiserede ramme- og certificeringsværktøjer. Gaia-X ser det som sin vigtigste rolle at skabe en række af, hvad de kalder 'Federations Services' indenfor de fire områder 'Identity and Trust', 'Sovereign Data Exchange', 'Federated Catalogue' og 'Compliance.' (for yderligere forklaring af 'federation services' se afsnit 2.2).

![Figur 15](/figur15.png)

_Figur 15: Gaia-X-vision af en digital infrastruktur og dataøkosystem, fra Gaia-X Information Web Seminar, 15, april 2021._

Formålet med disse er at skabe interoperabilitet og portabilitet mellem mange forskellige teknologier og infrastrukturer og mellem mange forskellige sektorer for derved at muliggøre et diverst økosystem af data og services, hvor der ikke er behov for yderligere centralisering, men hvor der skabes sammenhæng gennem en række teknologiske komponenter. Gaia-X's arbejde er ikke begrænset til data spaces, men data spaces kan realiseres gennem Gaia-X-arbejde.

Gaia-X's CEO, Roland Fadrany, beskriver i et interview (18. juni 2022) Gaia-X's vigtigste rolle som en 'compliance service.' De ønsker at udvikle konkrete retningslinjer og principper, man skal efterleve, hvis man ønsker at registrere sin service som en Gaia-X-certificeret data space-service. De udvikler således værktøjer, som man kan bruge til at designe efter, og de udvikler maskinlæsbare compliance-værktøjer, som man kan bruge til nemt at teste om, og i hvor høj grad, man lever op til Gaia-X-kriterier.

Særligt fremhæver Gaia-X's TCO, Pierre Gronlier (i et interview den 10. juni 2022), at et af de vigtigste og største projekter, de arbejder på lige nu, er et såkaldt 'Governance-as-a-service-værktøj', som bliver et maskinlæsbart verificeringsværktøj, der skal kunne analysere og vise, hvordan governance-strukturen skal opbygges i et data space for at leve op til Gaia-X standarder. Dette skal gøre det lettere for aktører, der ønsker at rekvirere eller sætte data space-services i udbud at stille krav til serviceudbydere og sikre, at de lever op til de stillede kriterier. Det skal derved give en større tryghed – både hos dem, der udbyder data space-services og hos dem, der bruger dem – da der skabes vished om, at data behandles efter Gaia-X-principper og -regler.

Gaia-X skaber altså ikke specifikke standarder ned på protokol- eller softwareniveau. De arbejder i stedet på et højere abstraktionsniveau med de mere overordnede rammeværktøjer, politikker, designprincipper, referencearkitekturelementer og helt specifikt governance-strukturen.

I tre nyligt udkomne dokumenter kan man se eksempler på, hvordan Gaia-X arbejder med:

- [Gaia-X Policy Rulebook](https://gaia-x.eu/wp-content/uploads/2022/05/Gaia-X_Policy-Rules_Document_v22.04_Final.pdf) (april 2022)
- [Gaia-X Trust Framework](https://gaia-x.eu/wp-content/uploads/2022/05/Gaia-X-Trust-Framework-22.04.pdf) (maj 2022)
- [Gaia-X Architecture](https://gaia-x.eu/wp-content/uploads/2022/06/Gaia-x-Architecture-Document-22.04-Release.pdf) (maj 2022)

Gaia-X lægger desuden vægt på, at de arbejder tæt sammen med centrale standardiseringsorganer som f.eks. ETSI, the European Committee for Standardisation (CEN), European Committee for Electrotechnical Standardisation (CENELEC) og European Standardisation Organisations (ESOs) for at sikre sig, at der kommer til at være overensstemmelse mellem de konkrete standarder, der udvikles i disse organer, og Gaia-X's rammeværktøjer og compliance services.

En anden vigtig funktion for Gaia-X er at hjælpe deres medlemmer med at komme med i de store konsortier, der kan søge EU-midler. Det er primært i disse implementeringsprojekter, at der udvikles tekniske komponenter gennem use-cases og test setups.

**Gaia-X er organiseret i tre organer:**

1. **Gaia-X European Association for Data and Cloud AISBL** udgør organisationens kerne. Deres hovedopgave er at udvikle den overordnede vision og det regulatoriske rammeværk. De skal sørge for, at de nødvendige værktøjer bliver stillet til rådighed i open source. Under associationen er der etableret tre komiteer: The Policy Rules Committee, The Technical Committee og The Data Space Business Committee.
2. **Gaia-X Hubs** er nationale organisationer, der skal stå for at samle og mobilisere lokale aktører i de givne lande, og de skal stå for at skabe lokale initiativer. For at blive godkendt som en national hub skal man have en skriftlig opbakning fra den givne stats regering. Der findes lige nu 17 nationale hubs og syv kandidater. De nationale hubs virker som vigtige organer, da det er gennem disse, at virksomheder og organisationer kan engagere sig i de store EU-ansøgninger og derved komme med i projekter, hvor der udvikles konkret teknologi og use-cases. Se mere om et muligt dansk Gaia-X Hub i kapitel 6.
3. **Gaia-X Open Source Community** er et fællesskab af alle de aktører, der arbejder på forskellige projekter relateret til Gaia-X-arbejde; det kan være deltagere i diverse EU-støttede data space-projekter. Her kan man dele resultater og udveksle erfaringer. Det er primært gennem Open Source Community, at der udvikles mest konkret software. Alle kan deltage gratis i Open Source Community, hvor der afholdes fælles online events hver torsdag. Den tekniske open source-udvikling og fremskridt er delvist offentligt tilgængelig her:

[https://gitlab.com/gaia-x](https://gitlab.com/gaia-x)

[https://gitlab.com/groups/gaia-x/-/issues](https://gitlab.com/groups/gaia-x/-/issues)

[https://gaia-x.atlassian.net/jira/projects](https://gaia-x.atlassian.net/jira/projects)

En anden afdeling af Gaia-X hedder **Gaia-X Federation Services (GXFS).** GXFS samarbejder med forskellige partnere, som er med i implementeringsprojekter, hvor der udvikles og implementeres open softwarekode, som lever op til Gaia-X's tekniske og funktionelle specifikationer. Gaia-X samler de udviklede komponenter i en [GXHS Toolbox](https://www.gxfs.eu/set-of-services/), hvor der kan findes komponenter indenfor følgende områder: 'Identity & Trust', 'Federated Catalogue', 'Sovereign Data Exchange', 'Data Contact Service', 'Data Exchange Logging', 'Compliance' samt 'Portal & Integration'. Formålet er at skabe komponenter, der kan bruges som byggeklodser og videreudvikles, så de passer til de forskellige behov og restriktioner, der findes indenfor forskellige sektorer som f.eks. energisektoren.

_It is important to understand that the services will not be provided by a central authority, but that each Federation will be able to use the reference open-source code of the Gaia-X Federation Services toolbox to then build apps and services that match the requirements in their respective Federation. In any case, the GXFS source code should be seen as reference implementation point to achieve inter ecosystem interoperability.
([GXFS Toolbox](https://www.gxfs.eu/set-of-services/))._

De forskellige GXFS-implementeringsprojekter og partnere kan findes samlet, inkl. et GitLab-lager til open source-kode. Ifølge Lars Nagel, CEO ISDA, findes der i GXFS toolbox allerede flere færdige komponenter, som kan implementeres (Keynote på Webinar: Data Spaces Technology Landscape 2023).

Gaia-X arbejder lige nu på en 'Rulebook', som skal gøre det let at komme i gang med at lave et data space og skal _"help you find your way the jungle of different actors and technologies out there"._ (Senior Lead Gaia-X Finland, Antti Poikola, webinar 14. dec. 2022). Denne 'Rulebook' vil, ifølge Antti Poikola, blive publiceret på et stort [Gaia-X event i Holland i marts 2023](https://internationaldataspaces.org/data-spaces-discovery-days-netherlands/). Der findes rigtig mange optagelser af webinarer tilgængeligt gennem både IDSA's og Gaia-X's hjemmesider.

Er man særligt interessereret i udviklingen af teknologiske komponenter og kode, kan vi anbefale at se dette webinar: [Data Spaces Technology Landscape 2023](https://www.sitra.fi/en/events/data-spaces-technology-landscape-2023/), som handler om, hvad der findes og kan bruges nu.

### Gaia-X versus IDSA + Data Space Business Alliance

Gaia-X er stadig en ny organisation, og det er vores oplevelse, at der er mange initiativer på vej men ikke så meget færdigt arbejde endnu. Det kan være svært at se, hvad forskellen er mellem IDSA og Gaia-X. Begge organisationer arbejder på at skabe de overordnede linjer og fælles spilleregler for data spaces, og de arbejder begge med at skabe certificeringer, som gør, at andre spillere kan blive kompatible med de fælles retningslinjer givet gennem de to organisationer. Både Gaia-X og ISDA understreger, at det ikke er hos dem, at den konkrete kodeudvikling finder sted, men dette skal nærmere findes i nogle af de forskellige projekter de er med i.

IDS/IDSA arbejder overordnet med at skabe den referencearkitektur (IDS-RAM), der skal definere de overordnede aktørroller, og hvordan og efter hvilke regler disse skal interagere med hinanden. Gaia-X skal skabe et cloud-serviceøkosystem for data og for den bløde infrastruktur. Gaia-X skal skabe de komponenter (federated services), der kan sikre datasuverænitet, digital tillid og identitetssikring, som er nødvendige at benytte på tværs af data space-økosystemer for at sikre, at alle spiller efter de samme regler. IDSA vil adoptere disse i deres referencemodeller, når de engang er færdige. Denne forklaring er baseret på en e-mailkorrespondance med Sebastian Steinbuss (13. dec. 2022), CTO IDSA, som videre skriver, at Gaia-X vil skabe fundamentet for at kunne benytte IDS-koncepter på en bredere bane. IDS vil primært tage sig af teknisk og semantisk interoperabilitet og vil få support af Gaia-X's arbejde med operationel interoperabilitet.

I et [Position paper: GAIA-X and IDS](https://internationaldataspaces.org/wp-content/uploads/dlm_uploads/IDSA-Position-Paper-GAIA-X-and-IDS.pdf)
_# 92_ beskrives det mere konkret, på hvilke måder de to organisationer overlapper og komplementerer hinanden, og på hvilke måder de adskiller sig.

_The comparison shows that GAIA-X is not as mature as the International Data Spaces (IDS) initiative but follows the same vision of proliferating data sovereignty and create an ecosystem of trust for data sharing. The IDS initiative and IDS Reference Architecture Model (IDS-RAM) offer various concepts and solutions that contribute to the overall vision of GAIA- X and to the concrete GAIA-X architecture demands. On the other hand, GAIA-X provides concepts that include the data storage and cloud-related elements, which can complement the IDS architecture.
([Position paper: GAIA-X and IDS](https://internationaldataspaces.org/wp-content/uploads/dlm_uploads/IDSA-Position-Paper-GAIA-X-and-IDS.pdf) side 4)._

I et diagram vises det mere specifikt, hvordan de forskellige elementer fra IDS-referencearkitekturmodel passer på Gaia-X's visualisering af deres arbejde med data spaces.

Desuden har Gaia-X og IDSA sammen med FIWARE Foundation (se afsnit 4.4) og Big Data Value Association (BDVA) skabt [Data Space Business Alliance](https://data-spaces-business-alliance.eu/) (DSBA). Formålet er at accelerere udbredelsen af data spaces og at samle de centrale aktører og forsøge at tale med én stemme, når man engagerer industrien i data spaces-dagsordenen. Tilsammen repræsenterer de fire aktører bag DSBA over 1000 førende virksomheder.

## Fraunhofer Institute

Fraunhofer Institute er en uvildig tysk forskningsorganisation (kan sammenlignes med de danske GTS-Institutter (Godkendt Teknologisk Service)), som har været instrumentel i udviklingen af data spaces i Europa gennem flere projekter.

På den tyske Wikipedia-side om International Data Space (IDS) beskrives Fraunhofer Institute og [Boris Otto](https://www.cit.fraunhofer.de/en/about-us/3-questions-to/boris-otto.html) som de første, der arbejdede med data spaces. IDS blev grundlagt på baggrund af et forskningsprojekt på Fraunhofer Institute (2016), som blev ledet af Boris Otto, og IDSA's juridiske kontor ligger hos Fraunhofer. Boris Otto er desuden blevet udnævnt til formand for EU's nye Data Space Support Centre (se afsnit 3.4.2).

Fraunhofer Institute's forskning inden for data spaces er samlet [her](https://www.dataspaces.fraunhofer.de/en/InternationalDataSpaces.html), og som man ser, er det meget bundet op på IDSA og de rapporter og den referencearkitektur, der er udviklet i IDSA. Det er vores oplevelse, at Fraunhofer er et af de steder, hvor der foregår mere konkret teknologiudvikling, da instituttet er involveret i mange projekter, og deres medarbejdere virker aktive i mange af de GitLab-repositories, som vi henviser til her i rapporten.

Et særligt vigtigt projekt, hvor Fraunhofer er meget aktiv, er udviklingen af [Eclipse Dataspace Connector](https://projects.eclipse.org/projects/technology.dataspaceconnector) under Eclipse Foundation. Eclipse Dataspace Connector nævnes ofte, bl.a. af DG Connect / Simpl (se afsnit 3.4.3) som en vigtig byggeklods i udviklingen af data spaces. I Eclipse Dataspace Connector's[GitLab repositorie](https://github.com/eclipse-dataspaceconnector/DataSpaceConnector/graphs/contributors) kan man se, hvordan Fraunhofer deltager, og man kan se nogle af de andre aktive aktører, som inkluderer virksomheder som f.eks. Amazon AWS, BMW AG, Microsoft, Deutsche Telecom m.m., men også Gaia-X og ISDA er repræsenteret her. Fraunhofer arbejder desuden på andre centrale data space connectors som f.eks. Trusted Connector og Open Data Connector. Se en oversigt samt kontaktpersoner til de forskellige connectors [her](https://www.dataspaces.fraunhofer.de/en/software/connector.html).

Derudover arbejder Fraunhofer på en række andre arkitekturelementer såsom 'Identity Provider', 'Clearing House', 'Information Model', 'App Store', 'Meta Data Broker' og 'Usage Control'. Se [her](https://www.dataspaces.fraunhofer.de/en/software.html) en oversigt over komponenterne samt links til, hvilke personer man skal kontakte, hvis man vil vide mere om teknologierne. Disse Fraunhofer-komponenter dækker de nøgleelementer, der er nødvendige for et data space.

## FIWARE Foundation

FIWARE Foundation er baseret på flere generationer af europæiske projekter og har over 130 organisationer samt 300 individuelle medlemmer. De førende medlemmer har siden 2021 været Atos, Engineering, Red Hat, Nec, Telefonica og Trigin Technologies. Deres mission er at styrke udviklingen af smarte applikationer gennem tilgængelige og interoperable softwareplatforme:

_Together with its members and partners, FIWARE Foundation drives the definition – and the Open Source implementation – of key open standards that enable the development of portable and interoperable smart solutions in a faster, easier and affordable way, avoiding vendor lock-in scenarios, whilst also nurturing FIWARE as a sustainable and innovation-driven business ecosystem. ([FIWAREs hjemmeside](https://www.fiware.org/about-us/))._

FIWARE har deltaget i flere EU-projekter og har derigennem fået skabt et [referencekatalog](https://www.fiware.org/catalogue/) over forskellige open source-komponenter til at etablere softwareplatforme. Disse komponenter kan anvendes til at bygge platforme, hvor det er muligt at udskifte delkomponenter. Platformen kan få kvalitetsstemplet 'powered by FIWARE', hvis der som minimum anvendes FIWAREs 'Context Broker' (kontekstmægler):

_The main and only mandatory component of any 'Powered by FIWARE' platform or solution is a FIWARE Context Broker Generic Enabler, supplying a cornerstone function required in any smart solution: the need to manage context information, enabling to perform updates and bring access to context._([FIWAREs hjemmeside](https://www.fiware.org/catalogue/)). Det skal bemærkes, at interoperabilitet kan opnås med lukkede kildeløsninger, så længe de vigtigste softwaregrænseflader og dataformater respekteres. Flere af FIWARE open source-aktiviteterne kan følges på GitHub.

Mere specifikt for data spaces har FIWARE i juni 2021 publiceret et whitepaper med titlen: FIWARE for Data Spaces , der beskriver, hvordan FIWARE-byggeklodser kan bruges til realiseringen af data spaces indenfor flere forskellige domæner. Derudover har FIWARE bi-draget til etableringen af standarddataformater, som er indsamlet under ‘Smart Data Mo-dels’-initiativet’ , hvor der anvendes maskinlæsbare skemaer blandt andet energidata.

## OPEN & AGILE SMART CITIES

Open & Agile Smart Cities, oftest omtalt som OASC  er et netværk af byer, der er gået sammen om at udvikle fælles værktøjer for lettere udveksling af data på tværs i byerne og på tværs af byer.
We are an international network of cities that partners with local administrations of all sizes and all over the world to assist them in their journey towards digital transformation. We work with our members, partners and independent experts to create sustainable impact for our cities via a minimal technical ground for their digital tools and systems. We call this the Minimal Interoperability Mechanisms or MIMs. We facilitate seamless sharing and re-use of digital, data-driven solutions to avoid vendor lock-in, to reduce innovation costs and improve efficiency, thanks to open standards and APIs (application programming interfaces). (OASC’s hjemmeside) .
OASC-netværket går forud for data space-agendaen, men grundprincipperne og visionen er den samme, hvor man ønsker at skabe teknologineutrale og åbne standarder for dataud-veksling.  En del af den udvikling der sker i OASC bygger på FIWARE komponenter. Net-værket har udviklet og arbejder særligt med ’Minimal Interoperability Mechanisms (MIMs)’ , som skal understøtte skalering og replikation af eksisterende løsninger:

![Figur 16](/figur16.png)

_Figur 16: Status over hvilke elementer i MIMs, der er blevet accepteret og anvendt af OASC medlemmer (figuren stammer fra [OASC's hjemmeside](https://oascities.org/minimal-interoperability-mechanisms/))._

MIMs overlapper med flere af de interoperabilitetsprincipper, som data spaces er nødt til at bruge i praksis. Og OASC er drivende partnere i data space projekter omkring smart cities and communities.

## iSHARE Foundation

[iSHARE](https://ishare.eu/) er en europæisk standard og et tillidsnetværk til international deling af forretningsdata på suveræn vis og som styres af den internationale nonprofitorganisation iSHARE Foundation. Ud fra designprincipper og software-arkitekturen fra de store organisationer som OPENDEI, Gaia-X og IDSA, forsøger iSHARE at udvikle komponenter til data spaces:

_With the iSHARE trust framework we are enabling and providing with the iSHARE Service providers the base components of data spaces, in line with Opendei.eu design principles, but also in line with the bigger solution architectures like International Data Spaces Association and Gaia-X. Closely working with the international community on data standards and other building blocks for data spaces, like FIWARE, FEDeRATED, OTM. ([iSHARE's hjemmeside](https://ishare.eu/about-ishare/))._

FIWARE, IDSA og Gaia-X er medlemmer af iSHARE. I øjeblikket findes de fleste deltagere i den hollandske og belgiske logistiksektor.

## Nordic Institute for Interoperability Solutions (NIIS)

NIIS er en nonprofitorganisation med en mission om at sikre udvikling og strategisk styring af løsninger til statslig digital infrastruktur på tværs af landegrænser. Estland, Finland og Island er medlemmer af NIIS, og Færøernes samt Ålandsøernes regeringer er partnere i NIIS. NIIS har udarbejdet en rapport, [European Interoperability Landscape Report 2022](https://www.niis.org/s/NIIS_Interoperability_Landscape_Report_2022.pdf), som præsenterer relevante aspekter af datadeling mellem statslige myndigheder.

Hovedløsningen, der er udviklet i open source, hedder X-Road (se mere i afsnit 4.7) og er en software- og økosystemløsning, som giver en ensartet og sikker dataudveksling mellem organisationer, og hvis open source-udvikling kan ses på GitHub. Selvom 'data space'-begrebet og terminologien ikke benyttes, er det nogle af de samme koncepter, der deles. X-Road bruges til energirelaterede casestudier (se kapitel 5).

I næste afsnit kan man desuden finde en sammenligning mellem X-Road-platformen og andre platforme.
