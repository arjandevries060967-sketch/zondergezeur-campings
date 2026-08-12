import Image from "next/image";
import Link from "next/link";
import { ImageBlock } from "@/components/ImageBlock";
import { camping } from "@/config/camping";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-image">
          <Image
            src={camping.images.hero}
            alt="Groene kampeerplek met tent tussen bomen"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-content">
          <span className="eyebrow">{camping.location}</span>
          <h1>{camping.tagline}</h1>
          <p>{camping.intro}</p>
          <div className="hero-actions">
            <Link className="button secondary" href="#camping">
              Bekijk de camping
            </Link>
            <Link className="button primary" href="#beschikbaarheid">
              Beschikbaarheid aanvragen
            </Link>
          </div>
          <div className="hero-facts" aria-label="Camping in het kort">
            {camping.heroFacts.map((fact) => (
              <div key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container split">
          <div className="section-intro">
            <span className="eyebrow">Welkom bij De Hane</span>
            <h2>Klein, groen en dichtbij het water</h2>
            <p>
              De Hane voelt als een plek waar je eenvoudig aankomt en snel
              ontspant. Niet massaal, wel praktisch: ruime plekken, nieuw
              sanitair en veel te doen in de buurt.
            </p>
            <p>
              De sfeer is herkenbaar landelijk: gras, erf, bomen, caravans en
              de openheid van het Nederlandse landschap.
            </p>
            <p>
              De Hane wordt gerund door Rene en Monique de Haan. Zij ontvangen
              je persoonlijk en zorgen dat je snel je plek vindt.
            </p>
          </div>
          <ImageBlock
            src={camping.images.aerial}
            alt="Luchtfoto van Minicamping De Hane dichtbij recreatiegebied Bussloo"
          />
        </div>
      </section>

      <section>
        <div className="container reviews-layout">
          <div className="section-intro">
            <span className="eyebrow">Ervaringen</span>
            <h2>Gasten noemen vooral de rust en ontvangst</h2>
            <p>
              Onderstaande teksten zijn bedoeld als demo-samenvatting van
              openbare reviews. Exact citeren en brongebruik nog afstemmen met
              de eigenaar.
            </p>
          </div>
          <div className="review-grid">
            <figure className="review-card">
              <blockquote>
                Rustige camping in een mooie omgeving, met vriendelijke en
                behulpzame ontvangst.
              </blockquote>
              <figcaption>Samenvatting van openbare reviews</figcaption>
            </figure>
            <figure className="review-card">
              <blockquote>
                Goede sanitaire voorzieningen en een prettige ligging bij
                Bussloo.
              </blockquote>
              <figcaption>Samenvatting van Campercontact-reviews</figcaption>
            </figure>
            <figure className="review-card">
              <blockquote>
                Een kleinschalige plek waar je snel tot rust komt en makkelijk
                de omgeving in gaat.
              </blockquote>
              <figcaption>Demo-tekst, te verifiëren met eigenaar</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="container trust-grid" aria-label="Erkenningen en steun">
          {camping.trustMarks.map((mark) => (
            <article className="trust-card" key={mark.title}>
              <div className="trust-logo">
                <Image
                  src={mark.image}
                  alt={mark.alt}
                  width={210}
                  height={140}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div>
                <h2>{mark.title}</h2>
                <p>{mark.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="container">
          <div className="section-intro">
            <h2>Waarom De Hane?</h2>
            <p>De belangrijkste redenen om hier te verblijven, zonder lange zoektocht.</p>
          </div>
          <div className="usp-grid">
            {camping.usp.map((item) => (
              <article className="usp-item usp-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="camping">
        <div className="container split">
          <div>
            <div className="section-intro">
              <span className="eyebrow">Kamperen en camperplaatsen</span>
              <h2>Ruime plekken, eenvoudige voorzieningen</h2>
              <p>
                Voor tent, caravan, vouwwagen of camper. De basis is rustig en
                overzichtelijk, met faciliteiten die je verblijf makkelijk maken.
              </p>
            </div>
            <ul className="feature-list">
              {camping.facilities.map((facility) => (
                <li key={facility}>{facility}</li>
              ))}
            </ul>
          </div>
          <ImageBlock src={camping.images.camper} alt="Camper tussen groen" />
        </div>
      </section>

      <section className="sanitary-highlight">
        <div className="container highlight-grid">
          <div>
            <span className="eyebrow">Sterk verkoopargument</span>
            <h2>Nieuw sanitair met comfort</h2>
          </div>
          <p>
            Een minicamping mag eenvoudig zijn, maar sanitair moet vertrouwen
            geven. Daarom krijgt het nieuwe sanitairgebouw uit 2025 hier bewust
            meer aandacht: gratis douches, vloerverwarming en een frisse basis
            voor het verblijf.
          </p>
          <div className="mini-photo-grid">
            {camping.sanitaryImages.map((image) => (
              <figure key={image.src} className="mini-photo">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 720px) 30vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <div className="section-intro">
            <h2>Meer dan kamperen</h2>
            <p>Kies wat past bij je verblijf: eigen kampeermiddel, camper of een eenvoudige overnachtingsplek.</p>
          </div>
          <div className="stay-grid">
            {camping.stayTypes.map((type) => (
              <article className="stay-item" key={type.title}>
                <h3>{type.title}</h3>
                <p>{type.text}</p>
                <Link className="button ghost" href={type.href}>
                  Meer bekijken
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container surroundings-layout">
          <div className="surroundings-photos">
            {camping.surroundingsImages.map((image) => (
              <article className="surroundings-photo" key={image.src}>
                <div className="surroundings-image">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 720px) 32vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h3>{image.title}</h3>
                  <p>{image.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="section-intro">
            <span className="eyebrow">Bussloo en omgeving</span>
            <h2>Buiten zijn begint dichtbij</h2>
            <p>
              Bussloo, Thermen Bussloo, fietsroutes en steden als Deventer,
              Zutphen en Apeldoorn maken De Hane een handige uitvalsbasis.
            </p>
            <ul className="feature-list">
              {camping.surroundings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <div className="section-intro">
            <h2>Tarieven in het kort</h2>
            <p>
              Richtprijzen op basis van de huidige site. Het definitieve tarief
              wordt altijd bevestigd bij aanvraag.
            </p>
          </div>
          <div className="rate-grid">
            {camping.rates.map((rate) => (
              <article className="rate-item" key={rate.label}>
                <span>{rate.label}</span>
                <strong>{rate.value}</strong>
              </article>
            ))}
          </div>
          <Link className="button ghost rates-link" href="/tarieven">
            Bekijk alle tarieven
          </Link>
        </div>
      </section>

      <section id="beschikbaarheid">
        <div className="container split">
          <div className="section-intro">
            <span className="eyebrow">Geen directe boeking</span>
            <h2>Beschikbaarheid aanvragen</h2>
            <p>
              Het formulier staat op de contactpagina. Zo blijft de aanvraag op
              één plek en is het voor bezoekers duidelijk dat de camping
              persoonlijk bevestigt.
            </p>
            <Link className="button primary" href="/contact#beschikbaarheid">
              Naar het aanvraagformulier
            </Link>
          </div>
          <ImageBlock
            src={camping.images.campingOverview}
            alt="Groen kampeerveld op Minicamping De Hane"
          />
        </div>
      </section>
    </main>
  );
}
