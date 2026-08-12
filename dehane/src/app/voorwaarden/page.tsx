import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voorwaarden",
  description:
    "Conceptpagina voor huisregels en annuleringsvoorwaarden van Minicamping De Hane."
};

export default function TermsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="section-intro">
            <span className="eyebrow">Concept</span>
            <h1>Huisregels en voorwaarden</h1>
            <p className="lead">
              [TE VERIFIËREN MET EIGENAAR] Deze pagina is alvast aangemaakt voor
              huisregels, betalingsafspraken en annuleringsvoorwaarden.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container policy-content">
          <article className="usp-item">
            <h2>Aanvraag en bevestiging</h2>
            <p>
              Een aanvraag via de website is nog geen definitieve boeking. De
              camping bevestigt persoonlijk of er plek is.
            </p>
          </article>
          <article className="usp-item">
            <h2>Aankomst en vertrek</h2>
            <p>
              Volgens de huidige tariefinformatie is aankomst na 13.00 uur en
              vertrek vóór 11.30 uur. Een langere vertrekdag kan alleen in
              overleg en wanneer de plek beschikbaar is.
            </p>
          </article>
          <article className="usp-item">
            <h2>Annuleren</h2>
            <p>
              [TE VERIFIËREN MET EIGENAAR] Hier komen de definitieve
              annuleringsvoorwaarden en eventuele aanbetalingsafspraken.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
