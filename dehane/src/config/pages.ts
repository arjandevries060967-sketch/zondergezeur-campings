import { camping } from "./camping";

export const pages = {
  kamperen: {
    title: "Kamperen bij De Hane",
    description:
      "Ruime kampeerplaatsen in het groen, met nieuw sanitair en praktische voorzieningen dichtbij.",
    image: camping.images.campingGreen,
    sections: [
      {
        title: "Ruimte op kleine veldjes",
        text: "De camping is bewust kleinschalig gehouden. De plaatsen liggen verdeeld over groene veldjes, waardoor het overzichtelijk en rustig blijft."
      },
      {
        title: "Praktisch ingericht",
        text: "De uitgangspunten zijn ruim kamperen, 10 ampere stroom, watertappunten, gratis douchen en een fietsenstalling met laadpunten."
      },
      {
        title: "Met hond of fiets",
        text: "Honden zijn welkom op de camping. Voor fietsers is de ligging prettig: Bussloo, het IJssellandschap en meerdere Hanzesteden liggen dichtbij."
      }
    ],
    galleryImages: [
      {
        src: camping.images.field,
        alt: "Caravan op een ruime kampeerplaats bij De Hane"
      },
      {
        src: camping.images.campingOverview,
        alt: "Groen kampeerveld op Minicamping De Hane"
      },
      {
        src: "/images/de-hane-bron/site-eigen/reserveren-camping.jpg",
        alt: "Landelijke campingplek bij De Hane"
      },
      {
        src: camping.images.header,
        alt: "Tenten, caravan en bloemen op Minicamping De Hane"
      }
    ]
  },
  camperplaatsen: {
    title: "Camperplaatsen bij Bussloo",
    description:
      "Verharde camperplaatsen op een rustige minicamping in Wilp, met Bussloo en Thermen Bussloo dichtbij.",
    image: camping.images.camper,
    sections: [
      {
        title: "Verhard staan, campinggevoel houden",
        text: "De camperplaatsen zijn bedoeld voor gasten die gemakkelijk willen staan, maar wel de rust en voorzieningen van de camping zoeken."
      },
      {
        title: "Voorzieningen dichtbij",
        text: "Sanitair, water, stroom en de andere campingvoorzieningen blijven binnen handbereik. Details zoals jaaropenstelling en actuele prijzen moeten nog worden gecontroleerd."
      }
    ],
    galleryImages: [
      {
        src: camping.images.camper,
        alt: "Camperplaatsen bij Minicamping De Hane"
      },
      {
        src: "/images/de-hane-bron/site-eigen/camperplaatsen-groen.jpeg",
        alt: "Camperplaats tussen het groen bij De Hane"
      },
      {
        src: "/images/de-hane-bron/site-eigen/kampeerplaats-caravan.jpg",
        alt: "Ruime plek met kampeermiddel op de camping"
      }
    ]
  },
  "het-haantje": {
    title: "Bed zonder Breakfast: Het Haantje",
    description:
      "Een knusse Bed zonder Breakfast bij De Hane, dichtbij Bussloo en Thermen Bussloo.",
    image: "/images/de-hane-bron/het-haantje-buiten.jpg",
    sections: [
      {
        title: "Knus verblijf bij Bussloo",
        text: "Het Haantje ligt bij de camping en dicht bij recreatiegebied Bussloo. Een praktische plek voor wie de landelijke ligging zoekt, maar niet met tent, caravan of camper komt."
      },
      {
        title: "Warm in herfst en winter",
        text: "Volgens de huidige site start Het Haantje vanaf 1 november 2025. De ruimte heeft vloerverwarming, een elektrische kachel, een zitje en een zit/slaapbank."
      },
      {
        title: "Sanitair gedeeld met campergasten",
        text: "Douches, toiletten, afwasplaats en een aparte wastafelruimte worden gedeeld met aanwezige camperplaatsgasten. Huisdieren zijn volgens de huidige informatie niet toegestaan."
      }
    ],
    galleryImages: [
      {
        src: "/images/de-hane-bron/het-haantje-buiten.jpg",
        alt: "Buitenzijde van Bed zonder Breakfast Het Haantje"
      },
      {
        src: "/images/de-hane-bron/het-haantje-interieur-01.jpeg",
        alt: "Interieur van Het Haantje"
      },
      {
        src: "/images/de-hane-bron/het-haantje-interieur-02.jpeg",
        alt: "Zitruimte in Het Haantje"
      },
      {
        src: "/images/de-hane-bron/het-haantje-interieur-03.jpeg",
        alt: "Slaap- en zitplek in Het Haantje"
      },
      {
        src: "/images/de-hane-bron/het-haantje-interieur-04.jpeg",
        alt: "Interieurdetail van Het Haantje"
      },
      {
        src: "/images/de-hane-bron/het-haantje-interieur-05.jpeg",
        alt: "Knusse ruimte van Het Haantje"
      },
      {
        src: "/images/de-hane-bron/het-haantje-interieur-06.jpeg",
        alt: "Voorzieningen in Het Haantje"
      },
      {
        src: "/images/de-hane-bron/het-haantje-interieur-07.jpeg",
        alt: "Binnenruimte van Het Haantje"
      }
    ]
  },
  omgeving: {
    title: "Omgeving van Wilp en Bussloo",
    description:
      "Bussloo, Thermen Bussloo, fietsroutes en steden als Deventer, Zutphen en Apeldoorn liggen dichtbij.",
    image: camping.images.water,
    sections: [
      {
        title: "Bussloo voor de deur",
        text: "Recreatiegebied Bussloo is een belangrijk vertrekpunt voor zwemmen, wandelen, buiten zijn en ontspannen."
      },
      {
        title: "Steden in de buurt",
        text: "Deventer, Zutphen en Apeldoorn liggen op prettige afstand voor een dagje uit, terras, markt of museum."
      },
      {
        title: "Fietsen en wandelen",
        text: "De omgeving past goed bij rustige routes door groen, langs water en door het IJssellandschap."
      }
    ],
    galleryImages: [
      {
        src: camping.images.water,
        alt: "Recreatieplas Bussloo met strand en water"
      },
      {
        src: camping.images.cycling,
        alt: "Fietsen door het groene landschap van de Veluwe"
      }
    ]
  }
} as const;
