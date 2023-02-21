---
title: Ikke data space specifikke komponenter
description: Centrale aktører og teknologiske komponenter
---

Der findes på nuværende tidspunkt ikke et færdigudviklet sæt komponenter til at etablere et data space. Men i rapporten [Simpl Handover Report](https://ec.europa.eu/newsroom/dae/redirection/document/86732) (se også afsnit 3.4.3), som er udviklet af Deloitte for EU-Kommissionen, er der flere figurer, som giver et godt overblik over de eksisterende open source-komponenter og platforme, som kan anvendes. De fleste af disse komponenter og platforme er dog ikke specifikt udviklet til data spaces men kan anvendes til at udfylde flere af de afgørende funktionaliteter, når et data space skal sættes i produktion.

I rapporten listes en række af de software stacks (f.eks. EGI, OPenStack, VanillaStack, Linux, X-Road og Apache), hvor de vurderer, at der bliver udviklet flest relevante byggeklodser for data spaces. I følgende figur fra rapporten findes en oversigt over, hvilke udviklerplatforme der har udviklet løsninger, og indenfor hvilke af de tre overordnede kategorier (infrastruktur, data og administration) der skal udvikles for at sætte et data space i produktion.

![Figur 17](/figur17.png)

_Figur 17: Produktdækning til SMP-byggeklodser. Hentet fra [Simpl Handover Report](https://ec.europa.eu/newsroom/dae/redirection/document/86732)._

Overordnet konkluderer rapporten, at der ikke er ét produkt, der kan dække alle betingelserne for SMP (smart middleware platform). Men produkterne har forskellige styrkepositioner og kan kombineres på forskellig vis. Rapporten opsummerer endvidere, hvor de enkelte komponenters styrker og svagheder er i forhold til udviklingen af data space-arkitekturen.

I følgende gennemgang af aktører og komponenter lægger vi os op ad rapportens konklusioner. [EGI](https://www.egi.eu/) understøtter forskning, der kræver avanceret computing til dataanalyse på tværs af institutioner. De er lovende indenfor infrastruktur og datalag, men de er meget forskningsrettede.

[OpenStack](https://www.openstack.org/) er et projekt under[OpenInfra Foundation](https://openinfra.dev/), som samler mange komponenter især til datacentre og cloud-operatører. Det kan bruges til udrulning af tjenester såsom Kubernetes, Cloud Foundry og Terraform. Der er stor aktivitet i denne gruppe og deres komponenter kan dække administration, men kan også integreres med EGI.

[VanillaStack](https://vanillastack.io/this-is-vanillastack) er både en tysk virksomhed og et open source-projekt, som samler mere end 20 andre open source-projekter (herunder OpenStack, Kubernetes, Cloud Foundry, Elasticsearch, Grafana, Keycloak, Docker), hvilket gør det nemt at rulle ud, hvis man ønsker at bygge en cloud.

[Linux Foundation](https://www.linuxfoundation.org/) er en paraplyorganisation med flere underorganisationer såsom Cloud Native Computing Foundation, og har et stærkt community, som udvikler over 800 open source-projekter. Selvom de har mange projekter, er ulempen, at det er vanskeligt at integrere dem.

Endelig er der [Apache Software Foundation](https://apache.org/), som er et community, der udvikler over 200 open source-projekter, hvor flere af dem er ekstremt populære, f.eks. Apache HTTP Server. I big data eller cloud-domæner, som er relevante til data spaces, kan f.eks. nævnes Kafka, Spark, Storm, Solr, Lucene og CloudStack. Ligesom med Linux er integration dog vanskelig.