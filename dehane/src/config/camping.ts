export const camping = {
  demoNotice:
    "Demo zonder officiële goedkeuring van Minicamping De Hane. Gegevens en beelden moeten voor publicatie worden gecontroleerd.",
  name: "Minicamping De Hane",
  shortName: "De Hane",
  location: "Wilp, bij Bussloo",
  domain: "dehane.zondergezeur.nl",
  tagline: "Kleinschalig kamperen aan Bussloo",
  intro:
    "Rust, ruimte en alles dichtbij: ruime kampeerplaatsen, nieuw sanitair en recreatiegebied Bussloo aan de overkant.",
  contact: {
    // TODO: vervang door echte contactgegevens eigenaar vóór livegang.
    phone: "055 000 0000",
    phoneHref: "tel:+31550000000",
    email: "info@example.com",
    emailHref: "mailto:info@example.com",
    address: "Wilp, Gelderland"
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Kamperen", href: "/kamperen" },
    { label: "Camperplaatsen", href: "/camperplaatsen" },
    { label: "Het Haantje", href: "/het-haantje" },
    { label: "Omgeving", href: "/omgeving" },
    { label: "Tarieven", href: "/tarieven" },
    { label: "Contact", href: "/contact" }
  ],
  cta: {
    label: "Beschikbaarheid aanvragen",
    href: "/contact#beschikbaarheid"
  },
  images: {
    hero: "/images/hero-boerderijcamping.png",
    aerial: "/images/de-hane-bron/site-eigen/welkom-camping.jpg",
    field: "/images/de-hane-bron/site-eigen/kampeerplaats-caravan.jpg",
    camper: "/images/de-hane-bron/site-eigen/camperplaatsen-overzicht.jpg",
    campingGreen: "/images/de-hane-bron/site-eigen/kamperen-veld.jpg",
    campingOverview: "/images/de-hane-bron/site-eigen/kampeerplaatsen-grasveld.jpg",
    header: "/images/de-hane-bron/site-eigen/header-camping.jpg",
    water: "/images/bussloo-recreatieplas.jpg",
    cycling: "/images/veluwe-fietsen.jpg"
  },
  sanitaryImages: [
    {
      src: "/images/de-hane-bron/site-eigen/sanitair-douche.jpg",
      alt: "Doucheruimte in het nieuwe sanitairgebouw van De Hane",
      label: "Gratis douches"
    },
    {
      src: "/images/de-hane-bron/site-eigen/sanitair-wastafel.jpg",
      alt: "Wastafelruimte in het nieuwe sanitairgebouw van De Hane",
      label: "Fris en praktisch"
    },
    {
      src: "/images/de-hane-bron/site-eigen/sanitair-ruimte-01.jpg",
      alt: "Nieuwe sanitaire ruimte op Minicamping De Hane",
      label: "Vloerverwarming"
    }
  ],
  surroundingsImages: [
    {
      src: "/images/bussloo-recreatieplas.jpg",
      alt: "Recreatieplas Bussloo met strand en water",
      title: "Bussloo en Thermen dichtbij",
      text: "Zwemwater, strand en wellness liggen vlakbij de camping."
    },
    {
      src: "/images/veluwe-fietsen.jpg",
      alt: "Fietsen door het groene landschap van de Veluwe",
      title: "Fietsen richting Veluwe",
      text: "Voor routes door bos, heide en het IJssellandschap."
    }
  ],
  trustMarks: [
    {
      image: "/images/logo-svr.png",
      alt: "SVR kamperen bij de boer logo",
      title: "Erkend lid van Stichting Vrije Recreatie",
      text: "Aangesloten bij SVR, bekend van kleinschalig kamperen bij de boer."
    },
    {
      image: "/images/logo-eu-platteland.png",
      alt: "Europese vlag",
      title: "Europees Landbouwfonds voor Plattelandsontwikkeling",
      text: "Europa investeert in het platteland."
    }
  ],
  heroFacts: [
    // TODO: bevestigen met eigenaar (bron oud: 23 plaatsen / 150m2, nieuwe demo: 25 / 120m2 - mogelijk verouderd of gewijzigd).
    { value: "25", label: "kampeerplaatsen" },
    { value: "13", label: "camperplaatsen" },
    { value: "2025", label: "nieuw sanitair" }
  ],
  usp: [
    {
      title: "Rustig en kleinschalig",
      // TODO: bevestigen met eigenaar (bron oud: 23 plaatsen / 150m2, nieuwe demo: 25 / 120m2 - mogelijk verouderd of gewijzigd).
      text: "Ongeveer 25 kampeerplaatsen, verdeeld over kleine groene veldjes."
    },
    {
      title: "Ruime plaatsen",
      text: "Kampeerplaatsen van circa 120 m2 met 10 ampere stroom en watertappunten."
    },
    {
      title: "Bussloo dichtbij",
      text: "Recreatiegebied Bussloo en Thermen Bussloo liggen vlakbij."
    },
    {
      title: "Fietsen en wandelen",
      text: "Een praktische uitvalsbasis voor routes en steden als Deventer, Zutphen en Apeldoorn."
    }
  ],
  facilities: [
    "Nieuw sanitairgebouw sinds 2025",
    "Gratis douches",
    "Vloerverwarming in het sanitair",
    "Fietsenstalling met laadpunten",
    "Broodjesservice",
    "Fietsverhuur",
    "Jeu-de-boulesbaan",
    "Honden toegestaan"
  ],
  stayTypes: [
    {
      title: "Kampeerplaats",
      text: "Voor tent, caravan of vouwwagen op ruime groene plekken.",
      href: "/kamperen"
    },
    {
      title: "Camperplaats",
      text: "Verharde plaatsen met de campingvoorzieningen dichtbij.",
      href: "/camperplaatsen"
    },
    {
      title: "Het Haantje",
      text: "Bed zonder Breakfast voor wie wel de plek zoekt, maar niet wil kamperen.",
      href: "/het-haantje"
    }
  ],
  rates: [
    { label: "Kampeerplaats", value: "vanaf € 27 all-in" },
    { label: "Camperplaats", value: "€ 23 all-in" },
    { label: "Huurcaravan", value: "€ 42,50" }
  ],
  surroundings: [
    "Bussloo voor zwemmen, wandelen en ontspannen",
    "Thermen Bussloo dichtbij",
    "Deventer, Zutphen en Apeldoorn in de buurt",
    "Fietsroutes door het IJssellandschap"
  ]
} as const;
