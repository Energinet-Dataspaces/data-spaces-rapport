---
title: Særligt relevante EU-organer og initiativer
description: EUs indsatser for data spaces
---

I dette afsnit beskrives en række af de mest relevante initiativer og organer, som spiller en vigtig rolle i udviklingen af data spaces.

---


## OpenDEI

[OPENDEI](https://www.opendei.eu/) er et længerevarende forskningsprojekt støttet af EU-programmet Horizon 2020 (forgænger for Horizon Europe), som startede i 2019 og blev afsluttet i oktober 2022. Projektet er meget centralt i udviklingen af data spaces, fordi de guidende principper og den overordnede referencearkitektur og de overordnede 'building blocks' for data spaces er blevet grundlagt gennem dette projekt (se mere i afsnit 2.3).

I projektet har man fokuseret på de fire domæner: Manufacturing, Agriculture, Energy og Healthcare. Konsortiet bag dette projekt inkluderer flere af de store aktører, der beskrives nedenfor, såsom Atos, Engineering, ISDA og FIWARE, og de store aktører refererer typisk også tilbage til dette projekt som et af de projekter, der har lagt fundamentet for, hvordan man skal arbejde med data spaces i en europæisk kontekst.

## Data Spaces Support Center

I oktober 2022 blev EU's [Data Spaces Support Centre](https://dssc.eu/) (DSSC) åbnet. Supportcentret er et resultat af et af Digital Europe's udbudsrunder, og aktørerne bag supportcentret inkluderer nogle af de centrale aktører såsom Gaia-X, International Data Space Association, Big Data Value Alliance, FIWARE Foundation og Fraunhofer Institute, som beskrives yderligere i kapitel 4. Supportcentret ledes af Boris Otto fra Fraunhofer Institute.

_The Data Spaces Support Centre, as described in the Digital Europe Programme, will set up and operate a Support Centre to operationalize the European Strategy for Data. This Data Spaces Support Centre will facilitate common data spaces that collectively create an interoperable data sharing environment, to enable data reuse and secondary use within and across sectors, fully respecting EU values, and contributing to the European economy and society. (DSSC's hjemmeside)._

![Figur 11](/figur11.png)

_Figur 11: Figuren er taget fra Data Spaces Support Centre's webinar Insights Series den 1. dec. 2022. Boris Ottos præsentation._

En af de primære opgaver for DSSC er at få samlet og etableret et velfungerende økosystem af de data spaces-projekter og -aktører, der allerede er i gang. Derudover skal DSSC være med til at identificere, konkretisere og udvikle fælles krav til data spaces på tværs af sektorer. DSSC skal endeligt definere designprincipperne for data spaces samt de tekniske og governance-strukturer, der er nødvendige – både for de enkelte sektorer og på tværs af sektorer. DSSC skal identificere de forskellige byggeklodser og assistere EU-Kommissionen i udbud af disse. Sidst men ikke mindst skal centret samle og tilgængeliggøre forskellige eksisterende teknologier, API'er og toolboxes, så nye aktører lettere kan komme i gang med data spaces.

DSSC har i dec. 2022 publiceret en første version af deres [Starter Kit](https://dssc.eu/download/802/?tmstv=1671561146), som vil blive udviklet og publiceret i en endelig form i marts 2023. DSSC har to hotlines, hvor man kan (1) stille overordnede spørgsmål til data spaces og (2) få adgang til teknisk viden og sparring om data spaces gennem et panel af eksperter. I september 2023 er det planen at DSSC vil udgive et blueprint for data spaces.

## DG Connect: Simpl Smart Middleware platform

Med assistance fra DSSC vil EU-Kommissionen lave en række kommercielle udbud for at få skabt de specifikke byggeklodser, der er nødvendige for at skabe data spaces. EU-Kommissionens _Directorate-General for Communications Networks, Content and Technology,_[DG Connec_t_](https://ec.europa.eu/info/departments/communications-networks-content-and-technology_da), der er ansvarlig for EU's politik vedrørende det digitale indre marked, internetsikkerhed og digital videnskab og innovation, har igangsat et arbejde for at få udviklet en række teknologiske komponenter, som skal udgøre den Smart Middleware Platform (SMP), som man i fremtiden vil skulle bruge som udgangspunkt for udvikling og implementering af data spaces.

Projektet hedder [Simpl: cloud-to-edge federations and data spaces made simple](https://digital-strategy.ec.europa.eu/en/news/simpl-cloud-edge-federations-and-data-spaces-made-simple), og formålet er at stille den software open source til rådighed, som skal være fælles for alle data spaces. Platformen vil bestå af en række gratis hovedkomponenter, som man kan benytte og videreudvikle på. Ifølge projektleder Manuel Mateo Goyet er navnet 'platform' lidt misvisende, da der ikke er tale om én samlet platform eller stykke software, men det, de vil tilbyde, er en værktøjskasse bestående af mange forskellige softwareløsninger, som vil kunne arbejde sammen og derved muliggøre udviklingen af data spaces.

_Simpl is conceived as a middleware, as opposed to a 'full-stack'. As such, it is a set of 'middle' software tools that operate above the infrastructure layer, but under the data layer. Simpl doesn't pay attention to the infrastructure over which it operates. It will 'abstract it' and be deployable on different types of infrastructures. Similarly, Simpl will purposely leave out data-specific layer items to data spaces operators. In other words, the Commission-procured building blocks of Simpl will provide some basic/generic data tools (e.g., data transfers, basic visualisation tools) but Simpl will stay out of sectoral-specific data services (e.g., data ontologies, data formats, advanced algorithms) and other aspects that are specific to data spaces (e.g., data governance or user access decisions). ([Simpl – Clarifications](https://ec.europa.eu/newsroom/dae/redirection/document/91768))._

Projektet er finansieret gennem Digital Europe-programmet (budget € 65 mio.) og løber i 2021-22. Som en del af projektet har Deloitte lavet et forberedende arbejde, hvor de har kortlagt eksisterende aktører, initiativer, teknologier og business cases. Disse er sammenfattet i en længere præsentation, hvor de også har lavet et arkitekturdesign og givet et udførligt overblik over, hvilke komponenter der vil skulle udvikles indenfor de fire overordnede områder: 'administrative services', 'data services', 'infrastructure connector services' og 'governance'.

![Figur 12](/figur12.png)

_Figur 12: Deloitte, Simpl Handover report, May 2022. Hent rapporten [her.](https://ec.europa.eu/newsroom/dae/redirection/document/86732)_

Rapporten giver især et godt overblik over de overordnede funktionaliteter, som EU-Kommissionen ser som essentielle for velfungerende data spaces. Derudover finder man i rapporten gode oversigter over, hvilke aktører og platforme (såsom VanillaStack, [OpenStack](https://www.openstack.org/), [X-Road](https://x-road.global/), [EGI](https://www.egi.eu/)), der tidligere har lavet softwarekomponenter, som vil kunne bruges til at bygge data spaces af, men som ikke er udviklet specifikt til data spaces (se mere i afsnit 4.7).

Hovedpointen er, at der er mange aktører og komponenter, og at de supplerer hinanden og kan forskellige ting, men at der ikke er nogen, der har endeligt færdige komponenter, der kan dække alle de forskellige funktionaliteter i den overordnede referencearkitekturmodel.

Deloittes rapport skal fungere som vejledende materiale for DG Connect, som vil bruge det til at lave en række kommercielle udbud til udvikling af softwarekomponenter til data spaces. DSSC vil ligeledes vejlede DG Connect i deres arbejde med specifikationer til 'Simpl: Smart Middleware Platform'. Det første udbud forventes at åbne i starten af 2023. I slutningen af 2023 kan man forvente at kunne tilgå en 'minimum viable platform'. Manuel Mateo Goyet siger desuden, at det er hensigten, at denne værktøjskasse vil blive obligatorisk at bruge som udgangspunkt, hvis man i fremtiden vil udvikle data spaces, og det bliver derfor ret afgørende for udviklingen af data spaces, hvad outputtet bliver af de kommende udbud.

Er man interesseret i at deltage i udviklingen af data spaces, vil dette projekt være yderst relevant at følge, og danske IT-virksomheder, der ser en ny forretningsmulighed i at udvikle software til data spaces, bør holde øje med de udbud, der kommer. Nogle af projekterne kan følges på [Simpl's hjemmeside](https://digital-strategy.ec.europa.eu/en/news/simpl-cloud-edge-federations-and-data-spaces-made-simple).

## European Alliance for industrial data, edge and cloud

Som beskrevet er udviklingen af data spaces tæt forbundet med og afhængig af den bredere udvikling af cloud- og edge-infrastrukturer og med den generelle udvikling mod frisættelse af flere industrielle data. Derfor er det desuden relevant at følge med i, hvad der sker i [European Alliance for Industrial Data, Edge and Cloud](https://digital-strategy.ec.europa.eu/en/policies/cloud-alliance).

Alliancen er faciliteret af DG Connect og bringer virksomheder sammen med repræsentanter fra medlemsstaterne og relevante eksperter med det formål at styrke EU's position indenfor cloud- og edge-teknologier og for at assistere virksomheder og offentlige institutioner, der administrerer sensitive data. Alliancen skal bringe private og offentlige aktører sammen for at lave strategiske roadmaps, der skal lægge rammerne for IT-infrastrukturer, der er mere sikre, distribuerede, interoperable og ressourceeffektive. En af de opgaver alliancen har formuleret er:

_Providing recommendations to ensure the coherent integration of investments with those foreseen for the deployment of common European data spaces in relevant areas. (Hjemmesiden for[European Alliance for Industrial Data, Edge and Cloud](https://digital-strategy.ec.europa.eu/en/policies/cloud-alliance))._

Derudover støtter European Alliance for Industrial Data, Edge and Cloud den store indsats [IPCEI](https://competition-policy.ec.europa.eu/state-aid/legislation/modernisation/ipcei_en) ('Important Projects of Common European Interest'), som dækker over større satsninger på tværs af EU's medlemsstater indenfor områder som udviklingen af batterier, europæisk chip-produktion, udvikling af brintinfrastrukturen og cloud- og edge-computing.

Dette afsnit har givet et overblik over nogle af de vigtigste EU-initiativer, -organer og -aktører, som det er værd at følge, hvis man er interesseret i at tage del i udviklingen af data spaces. EU er meget dominerende i hele udviklingen af data spaces og ønsker at skabe nogle faste rammer og retningslinjer for udviklingen af data spaces. Men som det også er blevet klart igennem dette afsnit, så sker udviklingen af disse rammer og retningslinjer i tæt samarbejde med en række forskningsinstitutioner, organisationer og industrielle aktører.

I næste kapitel vil en række af de vigtigste aktører blive præsenteret, og der vil blive redegjort for, hvad der findes af konkrete teknologiske komponenter til data spaces – eller nærmere hvem, der arbejder på at udvikle hvilke elementer til realisering af data spaces.
