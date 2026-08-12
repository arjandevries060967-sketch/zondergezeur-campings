import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacyverklaring voor de demo-website van Minicamping De Hane."
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="section-intro">
            <span className="eyebrow">Privacy</span>
            <h1>Privacyverklaring</h1>
            <p className="lead">
              Deze pagina beschrijft wat de demo-site met formuliergegevens doet.
              Definitieve juridische tekst moet vóór livegang worden afgestemd.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container policy-content">
          <article className="usp-item">
            <h2>Welke gegevens worden verzameld?</h2>
            <p>
              Via het aanvraagformulier kunnen naam, e-mailadres, telefoonnummer,
              aankomst- en vertrekdatum, aantal personen, verblijfstype,
              kampeermiddel, huisdieren en een bericht worden ingevuld.
            </p>
          </article>
          <article className="usp-item">
            <h2>Waarvoor worden deze gegevens gebruikt?</h2>
            <p>
              Alleen om de beschikbaarheidsaanvraag te behandelen en persoonlijk
              contact op te nemen over de aanvraag. De aanvraag is geen
              definitieve boeking.
            </p>
          </article>
          <article className="usp-item">
            <h2>Bewaartermijn</h2>
            <p>
              [TE VERIFIËREN MET EIGENAAR] Formuliergegevens worden niet langer
              bewaard dan nodig is voor het beantwoorden en opvolgen van de
              aanvraag.
            </p>
          </article>
          <article className="usp-item">
            <h2>Vragen</h2>
            <p>
              Gebruik voor vragen de contactgegevens van de camping. De
              placeholder-contactgegevens op deze demo worden vóór echte
              publicatie vervangen.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
