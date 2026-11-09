export const experiences = [
  {
    title: 'Frontend Consultant',
    description: 'AND Digital - Fulltime',
    img: '/experiences/and-digital.png',
    startDate: new Date('2026-05-11'),
    endDate: new Date(),
    responsibilities: [
      "Bij AND Digital heb ik als frontend consultant gewerkt, waarbij KPN de klant was. Dit was mijn eerste uitgebreide kennismaking met de wereld van enterprise development. Binnen deze omgeving heb ik mijn technische vaardigheden goed weten toe te passen en kon ik mij snel aanpassen aan de bestaande werkwijze en ontwikkelprocessen. Hierdoor kon ik al vanaf het begin een waardevolle bijdrage leveren.",
      "Tijdens die periode heb ik aan twee projecten van de KPN shop gewerkt, de legacy shop en de nieuwe versie. De legacy shop maakte gebruik van Nuxt en Vue waarbij de nieuwe shop ontwikkeld werd in Nuxt 4, Vue 3 en typescript.",
      "Binnen de legacy shop gebruikte we een Nuxt 2/Vue-storefront en heb ik gewerkt aan server-side rendering en route-level caching, waarbij rekening gehouden moest worden met gepersonaliseerde pagina's en het voorkomen van het tonen van gebruikersspecifieke informatie aan de verkeerde gebruiker. Daarnaast werkte ik binnen een domeingerichte modulaire architectuur, waarin functionaliteiten zoals winkelwagens, checkouts, productselectie en verschillende apparaatcategorieën van elkaar gescheiden waren. Ook heb ik backendservices geïntegreerd via afzonderlijke API-clients en bijgedragen aan de weergave van CMS-gestuurde content. Om de effectiviteit van de gebruikerservaring te maximaliseren draaide we A/B testen, hierbij maakte we gebruik van Adobe Target.",
      "Bij het nieuwere platform heb ik bijgedragen aan een moderne, modulaire architectuur op basis van Nuxt 4, Vue 3 en TypeScript. Hierbij werd gebruikgemaakt van feature-flagged layers om meerdere verkoopkanalen te ondersteunen. Backendintegraties werden afgeschermd via same-origin Nitro-proxies en private runtime configuration. Ook werd gewerkt met gegenereerde API-types, strikte typecontroles en validatie aan systeemgrenzen om betrouwbare integraties te waarborgen. Daarnaast werd Contentful gebruikt voor contentbeheer en lag de nadruk op herbruikbare design-systemcomponenten, geautomatiseerd testen en goed gedocumenteerde architectuur voor zowel reguliere klantreizen als assisted-salesprocessen.",
      "Naast de ontwikkeling van de applicaties heb ik ook ervaring opgedaan met de deployment en kwaliteitsbewaking van software. Zo heb ik gewerkt met multi-stage Docker-builds en Kubernetes/NGINX-configuraties. Voor het bewaken van de codekwaliteit maakte ik gebruik van Jest-gebaseerde unittests, linting en vaste commitconventies.",
      "Naast mijn reguliere werkzaamheden ben ik mij steeds meer gaan verdiepen in Agentic AI. Ik ben gaan experimenteren met het ontwikkelen van AI-workflows en heb zelfs een eerste stap gezet richting het opzetten van een eigen AI Factory.",
      "De kennis en ervaring die ik hiermee heb opgedaan, wilde ik niet alleen binnen mijn werkzaamheden toepassen, maar ook in mijn eigen projecten. Zo ben ik begonnen met het herbouwen van mijn persoonlijke website, waarbij ik mijn eigen AI Factory en de nieuwste AI-technologieën inzet om het ontwikkelproces te ondersteunen en te automatiseren.",
      "Dit project is nog volop in ontwikkeling en wordt continu verbeterd. Door deze nieuwe manier van werken heb ik mijn ontwikkelproces aanzienlijk efficiënter gemaakt en zijn zowel mijn productiviteit als mijn mogelijkheden om nieuwe ideeën te realiseren enorm toegenomen.",
      "Wat mij hierin vooral aanspreekt, is de combinatie van traditionele software engineering en de mogelijkheden die AI biedt. Ik vind het interessant om nieuwe technologieën niet alleen te volgen, maar ze ook daadwerkelijk te onderzoeken, toe te passen en om te zetten in praktische oplossingen.",
    ],
    stacks: [
      {
        title: 'Vue.js',
        img: '/logos/vue.png',
      },
      {
        title: 'Nuxt.js',
        img: '/logos/nuxt.png',
      },
      {
        title: 'JavaScript',
        img: '/logos/javascript.png',
      },
      {
        title: 'TypeScript',
        img: '/logos/typescript.png',
      },
      {
        title: 'Sass',
        img: '/logos/sass.png',
      }
    ],
  },
  {
    title: 'Front-endontwikkelaar',
    description: 'Cowmanager - Fulltime',
    img: '/experiences/cowmanager.png',
    startDate: new Date('2025-12-01'),
    endDate: new Date('2026-04-30'),
    responsibilities: [
      "Bij Cowmanager werkte ik binnen een productteam aan de verdere ontwikkeling van een uitgebreid B2B-platform dat fysieke sensortechnologie combineert met software voor het monitoren en beheren van melkveehouderijen. Het platform verzamelt gegevens vanuit verschillende gekoppelde sensoren, waaronder oorsensoren en melksensoren, en brengt deze samen in één centraal dashboard. Hiermee kunnen veehouders zowel individuele koeien als volledige kuddes monitoren en beheren. De functionaliteiten bestonden onder andere uit het bewaken van gezondheid en vruchtbaarheid, het automatisch sorteren van koeien via een gekoppelde Sorter-Gate en het lokaliseren van koeien via de FindMyCow-module.",
      "De frontend was opgezet met Vue 3, TypeScript en Vite en maakte gebruik van een modulaire architectuur binnen één monolithische codebase. Verschillende productteams waren verantwoordelijk voor hun eigen modules. Daarnaast werd de state management beheerd via Pinia en Vuex. De ui werd grotendeels opgezet vanuit een losse package met ui-components. Deze bibliotheek werd door meerdere productteams gebruikt en met Storybook gedocumenteerd.",
      "Naast de ontwikkeling van product features hield ik mij bezig met de gedeelde frontendarchitectuur en ui-components. Hierbij werkte ik met onder andere MSAL-authenticatie, API-interceptors, feature flags, internationalisatie en telemetry. Ook waren geautomatiseerde kwaliteitscontroles en tests onderdeel van het ontwikkelproces, met TypeScript, ESLint, Vitest en Cypress.",
      "Een belangrijk aandachtspunt binnen de bestaande architectuur was de onderhoudbaarheid en schaalbaarheid de codebase. Sommige componenten waren uitgegroeid tot omvangrijke, sterk configureerbare componenten waarin meerdere verantwoordelijkheden in hetzelfde component gebouwd waren. Ik zag hier kansen om de ui-components te verbeteren naar kleinere, zelfstandige Single Responsibility componenten.Samen met een andere front-end specialist zette ik mij in om kennis en best practices rondom schaalbare frontenddevelopment binnen de productteams te verspreiden.",
      "Hierbij kon ik veel van de architect keuzes, kennis en ervaring die ik eerder bij Mogelijk had opgedaan toepassen en delen. Mijn focus lag op het verbeteren van de codekwaliteit, het stimuleren van herbruikbaarheid en het opzetten van een technische basis die verdere ontwikkeling mogelijk maakt zonder onnodige technical debt op te bouwen. Binnen het team werd gewerkt volgens de SCRUM-methodiek.",
    ],
    stacks: [
      {
        title: 'Vue.js',
        img: '/logos/vue.png',
      },
      {
        title: 'Nuxt.js',
        img: '/logos/nuxt.png',
      },
      {
        title: 'JavaScript',
        img: '/logos/javascript.png',
      },
      {
        title: 'TypeScript',
        img: '/logos/typescript.png',
      },
      {
        title: 'Tailwind CSS',
        img: '/logos/tailwind.png',
      },
      {
        title: 'Sass',
        img: '/logos/sass.png',
      }
    ],
  },
  {
    title: 'Front-endontwikkelaar (medior)',
    description: 'Mogelijk BV - Fulltime',
    img: '/experiences/mogelijk.png',
    startDate: new Date('2022-04-01'),
    endDate: new Date('2025-12-01'),
    responsibilities: [
      "Bij Mogelijk ben ik mijn professionele carrière begonnen als front-endontwikkelaar. Ik was verantwoordelijk voor het ontwikkelen van responsive, toegankelijke en gebruiksvriendelijke webapplicaties.",
      "Ik heb nauw samengewerkt met designers en back-endontwikkelaars om ervoor te zorgen dat de gebruikerservaring consistent en intuïtief was. We vormden een goed gecoördineerd team en door de sterke onderlinge afstemming konden we technische en functionele features gezamenlijk uitdenken en realiseren.",
      "We werkten binnen een monorepo bestaande uit verschillende packages, waarbij ieder product een eigen package had. Daarnaast maakten we gebruik van een package met Nuxt Layers om de huisstijl, gedeelde functionaliteiten en core business logica van Mogelijk binnen de verschillende producten te hergebruiken. Deze gedeelde layers bestonden uit:",
      "- UI-library: Een uitgebreide bibliotheek van generieke, herbruikbare componenten, opgebouwd volgens de principes van Atomic Design. Componenten werden volgens het Single Responsibility Principle ontwikkeld, zodat ze flexibel te gebruiken waren en eenvoudig konden worden samengevoegd tot verschillende varianten en configuraties.",
      "- Composables: Herbruikbare functionaliteit voor het delen van gedrag en logica tussen verschillende componenten en producten.",
      "- Core business logic: Objectgeoriënteerde classes waarin core business logica werd gedefineerd, zodat deze voor alle producten kon worden hergebruikt.",
      "- GraphQL: Generieke queries en mutations voor consistente communicatie met de back-end.",
      "- Gedeelde productfunctionaliteit: Complete flows die binnen meerdere producten werden ingezet, zoals het intakescherm dat zowel in het klantenportaal als in het intermediairportaal werd gebruikt.",
      "Voor de communicatie met de backend maakten we gebruik van een BFF-laag. Hierdoor hadden we nauw contact met de backend-developers om API's, datastromen en functionele behoeften goed op elkaar af te stemmen. Deze samenwerking was essentieel voor het realiseren van een consistente en efficiënte architectuur.",
      "Daarnaast heb ik structurele oplossingen ontwikkeld, waaronder een form validator en dynamic form builder. Hiermee konden formulieren volledig dynamisch worden opgebouwd op basis van configuraties vanuit de backend. Deze configuraties bepaalden onder andere welke velden werden weergegeven, welke validatieregels golden en onder welke voorwaarden bepaalde velden zichtbaar waren.",
      "Toegankelijkheid en gebruikerservaring waren belangrijke aandachtspunten voor onze producten. Zo hebben we bij het ontwikkelen van onze UI-library rekening gehouden met WCAG 2.1-richtlijnen. Hiervoor heb ik onderzoek gedaan naar wat de European Accessibility Act van ons vereiste en dit toegepast binnen onze componenten. Dit deed ik in samenwerking met onze designers, omdat ook het ontwerp al veel invloed had tot toegangkelijke implementaties.",
      "We werkten voornamelijk met Nuxt 3 Composition API en maakten daarnaast gebruik van onder andere TypeScript, Vitest, Storybook, Tailwind CSS, Pinia, URQL en Apollo. Onze werkwijze was gebaseerd op een zeer strikte interpretatie van Scrum.",
      "Naarmate ik mij verder ontwikkelde van junior naar medior front-endontwikkelaar, kreeg ik ook de verantwoordelijkheid om een stagiair te begeleiden. Hierbij ondersteunde ik de stagiair bij zijn technische vaardigheden, het begrijpen van onze architectuur en werkwijze en het uitvoeren van werkzaamheden. Ik hielp bij het beantwoorden van technische vragen, gaf feedback op code en dacht mee over oplossingen. Hierdoor kon ik mijn eigen kennis overdragen en tegelijkertijd mijn communicatieve en begeleidende vaardigheden ontwikkelen.",
      "Dankzij de ruimte om actief mee te denken over technische oplossingen, de verantwoordelijkheid voor het ontwikkelen van complexe functionaliteiten en de goede begeleiding binnen het team heb ik bij Mogelijk een sterke technische basis ontwikkeld. Ik heb hier diepgaande kennis opgebouwd op het gebied van frontend architectuur, componenten opzet, toegankelijkheid, UX en het developen van schaalbare en onderhoudbare applicaties.",
    ],
    stacks: [
      {
        title: 'Vue.js',
        img: '/logos/vue.png',
      },
      {
        title: 'Nuxt.js',
        img: '/logos/nuxt.png',
      },
      {
        title: 'JavaScript',
        img: '/logos/javascript.png',
      },
      {
        title: 'TypeScript',
        img: '/logos/typescript.png',
      },
      {
        title: 'Tailwind CSS',
        img: '/logos/tailwind.png',
      },
    ],
  },
  {
    title: 'Front-endontwikkelaar (stagiar)',
    description: 'Levarne - Fulltime',
    img: '/experiences/levarne.png',
    startDate: new Date('2020-09-01'),
    endDate: new Date('2021-04-01'),
    responsibilities: [
      "Tijdens mijn zeven maanden stage bij Levarne maakte ik deel uit van een multidisciplinair team die applicaties ontwikkelde en onderhielde voor verschillende opdrachtgevers. Mijn focus lag hierbij op frontend-development. Bij TIG Sports deed ik mijn eerste praktijkervaring op met Vue.js en Nuxt.js (Vue 2, Options API), waarmee ik werkte aan de frontend van hun applicaties.",
      "Daarnaast werd ik ook ingezet voor onderhoud en bugfixing van de website van uitzendbureau Matchmakers. Hierbij werkte ik aan een applicatie met PHP, HTML en CSS. Ook maakte ik kennis met professionele processen en tools zoals Jira, Kanban en Git. Vooral op het gebied van versiebeheer heb ik grote stappen gemaakt om Git op een professionele manier in te zetten binnen een development team.",
      "Deze stage vormde mijn eerste echte kennismaking met de professionele development wereld. Ondanks de extra uitdagingen dat de pandemie in deze periode met zich meebracht, heb ik mijn stage succesvol afgerond. Het was een waardevolle periode waarin ik niet alleen mijn technische kennis heb uitgebreid, maar ook heb geleerd om professioneel samen te werken binnen een multidisciplair team. Ik heb geleerd verantwoordelijkheid te nemen en met moderne technieken aan daadwerkelijke klantprojecten te werken.",
    ],
    stacks: [
      {
        title: 'Vue.js',
        img: '/logos/vue.png',
      },
      {
        title: 'Nuxt.js',
        img: '/logos/nuxt.png',
      },
      {
        title: 'JavaScript',
        img: '/logos/javascript.png',
      },
    ],
  },
];
