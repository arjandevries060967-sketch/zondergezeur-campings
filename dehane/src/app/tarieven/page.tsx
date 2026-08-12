import type { Metadata } from "next";
import { ImageBlock } from "@/components/ImageBlock";
import { camping } from "@/config/camping";

export const metadata: Metadata = {
  title: "Tarieven 2026",
  description:
    "Tarieven 2026 voor kampeerplaatsen, maandplaatsen, camperplaatsen en huurcaravan bij Minicamping De Hane."
};

const campingRates = [
  ["SVR staanplaats, incl. 2 personen", "€ 20,00", "€ 22,00"],
  ["Staanplaats, incl. 2 personen", "€ 22,00", "€ 24,00"],
  ["Toeristenbelasting per persoon", "€ 1,44", "€ 1,44"],
  ["Milieutoeslag en heffingen", "€ 1,12", "€ 1,12"],
  ["Elektriciteit 10 ampere", "€ 3,00", "€ 3,00"],
  ["Extra persoon 3 t/m 8 jaar, excl. toeristenbelasting", "€ 3,00", "€ 4,00"],
  ["Extra persoon, excl. toeristenbelasting", "€ 5,50", "€ 5,50"],
  ["Bezoek per persoon", "€ 1,50", "€ 1,50"],
  ["Leegstand tent/caravan zonder stroom", "€ 6,00", "€ 9,00"],
  ["Leegstand tent/caravan met stroom", "€ 8,00", "€ 11,00"],
  ["Gebruik wasmachine inclusief poeder", "€ 6,00", "€ 6,00"],
  ["Gebruik droger", "€ 6,00", "€ 6,00"],
  ["Extra tent", "€ 1,00", "€ 1,00"],
  ["Fietshuur per dag", "€ 11,00", "€ 11,00"],
  ["Fietsen opladen/stallen", "Gratis", "Gratis"],
  ["Wifi", "Gratis", "Gratis"],
  ["Kinderen t/m 2 jaar", "Gratis", "Gratis"],
  ["Douches en warm water", "Gratis", "Gratis"],
  ["Huisdieren", "€ 1,00", "€ 1,00"]
];

const monthRates = [
  ["April", "€ 500,-"],
  ["Mei", "€ 625,-"],
  ["Juni", "€ 600,-"],
  ["Juli", "€ 600,-"],
  ["Augustus", "€ 600,-"],
  ["September", "€ 500,-"]
];

const monthExtras = [
  ["Extra persoon vanaf drie jaar", "€ 75,- per maand"],
  ["Extra huisdier", "€ 20,- per maand"],
  ["Bijzettentje", "€ 15,- per maand"],
  ["Bezoek afkopen", "€ 15,- per maand"]
];

const camperRates = [
  ["Camperplek all-in", "€ 23,00"],
  ["Sauna arrangement 1", "€ 108,-"],
  ["Sauna arrangement 2", "€ 131,-"],
  ["Extra persoon", "€ 4,94"],
  ["Bezoek", "€ 1,50 p.p."]
];

const rentalRates = [
  ["Huurcaravan 2026", "€ 42,50"],
  ["Bedlinnen", "€ 10,00 per persoon per verblijf"],
  ["Extra persoon vanaf drie jaar", "€ 7,50"]
];

function RateTable({
  columns,
  rows
}: {
  columns: string[];
  rows: string[][];
}) {
  return (
    <div className="table-wrap">
      <table className="price-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("-")}>
              {row.map((cell, index) => (
                <td key={`${index}-${cell}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function RatesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container split">
          <div className="section-intro">
            <span className="eyebrow">Tarieven</span>
            <h1>Tarieven 2026</h1>
            <p className="lead">
              De tarieven van de huidige De Hane-site zijn hier samengebracht
              in een overzichtelijke pagina.
            </p>
          </div>
          <ImageBlock
            src={camping.images.field}
            alt="Caravan op een ruime kampeerplaats bij De Hane"
            priority
          />
        </div>
      </section>

      <section>
        <div className="container rates-layout">
          <article className="price-section">
            <div className="section-intro">
              <h2>Caravan- en tentplaatsen</h2>
              <p>
                All-in prijs voor SVR-gasten: laagseizoen € 27,00 en hoogseizoen
                € 29,00 per dag, op basis van 2 personen.
              </p>
            </div>
            <div className="season-grid">
              <div>
                <h3>Laagseizoen</h3>
                <p>1 april t/m 4 mei, 26 mei t/m 1 juli, 2 september t/m 1 oktober.</p>
              </div>
              <div>
                <h3>Hoogseizoen</h3>
                <p>5 mei t/m 25 mei en 1 juli t/m 1 september.</p>
              </div>
            </div>
            <RateTable
              columns={["Prijs per nacht", "Laagseizoen", "Hoogseizoen"]}
              rows={campingRates}
            />
          </article>

          <article className="price-section">
            <div className="section-intro">
              <h2>Maandtarieven</h2>
              <p>
                Beperkt aantal plekken en in overleg. Deze tarieven gelden voor
                SVR-leden.
              </p>
            </div>
            <RateTable columns={["Maand", "Prijs"]} rows={monthRates} />
            <div className="included-grid">
              <div>
                <h3>Inclusief</h3>
                <ul className="feature-list compact">
                  <li>Kampeermiddel</li>
                  <li>Twee personen</li>
                  <li>Gratis douche en warm water</li>
                  <li>Electra 10 ampere tot 75 kWh per maand</li>
                  <li>Milieuheffingen</li>
                  <li>Een auto parkeren</li>
                  <li>Wifi</li>
                  <li>Een huisdier per plaats</li>
                  <li>Oplaadpunten voor elektrische fietsen</li>
                </ul>
              </div>
              <div>
                <h3>Exclusief en extra</h3>
                <p>
                  Toeristenbelasting van € 1,44 p.p.p.n. wordt achteraf
                  verrekend op basis van daadwerkelijk aanwezige nachten.
                </p>
                <RateTable columns={["Extra", "Prijs"]} rows={monthExtras} />
              </div>
            </div>
          </article>

          <div className="rates-two-column">
            <article className="price-section">
              <div className="section-intro">
                <h2>Camperplaatsen</h2>
                <p>
                  Camperplaatsen zijn het hele jaar geopend. De camping gebruikt
                  hiervoor een all-in prijs.
                </p>
              </div>
              <RateTable columns={["Onderdeel", "Prijs"]} rows={camperRates} />
              <ul className="feature-list compact">
                <li>Inclusief wifi, honden, water en gebruik sanitair</li>
                <li>Inclusief milieutoeslag en toeristenbelasting</li>
                <li>Sauna arrangementen zijn inclusief twee dagentrees voor Thermen Bussloo</li>
              </ul>
            </article>

            <article className="price-section">
              <div className="section-intro">
                <h2>Huurcaravan</h2>
                <p>
                  Prijs voor verblijf met twee personen, inclusief de belangrijkste
                  voorzieningen.
                </p>
              </div>
              <RateTable columns={["Onderdeel", "Prijs"]} rows={rentalRates} />
              <ul className="feature-list compact">
                <li>Inclusief gebruik sanitair, wifi, stroom, inventaris en tuinmeubels</li>
                <li>Inclusief toeristenbelasting van € 1,44 p.p.p.n. en heffingen</li>
              </ul>
            </article>
          </div>

          <aside className="notice">
            Aankomst na 13.00 uur en vertrek voor 11.30 uur. Een hele vertrekdag
            langer blijven kan in overleg en kost € 10,00 als de plek beschikbaar
            is. Tijdens evenementen kunnen andere tarieven gelden.
          </aside>
        </div>
      </section>
    </main>
  );
}
