import type { Metadata } from "next";
import { AvailabilityForm } from "@/components/AvailabilityForm";
import { camping } from "@/config/camping";

export const metadata: Metadata = {
  title: "Contact en beschikbaarheid aanvragen",
  description:
    "Vraag beschikbaarheid aan voor Minicamping De Hane of neem contact op voor meer informatie."
};

type PageSearchParams = Promise<{ sent?: string; error?: string } | undefined>;

export default async function ContactPage({
  searchParams
}: {
  searchParams?: PageSearchParams;
}) {
  const resolvedSearchParams = await searchParams;

  return (
    <main>
      <section className="page-hero">
        <div className="container split">
          <div className="section-intro">
            <span className="eyebrow">Contact</span>
            <h1>Vraag beschikbaarheid aan</h1>
            <p className="lead">
              Dit formulier is bedoeld voor een eerste aanvraag. Het is nog geen
              definitieve boeking.
            </p>
          </div>
          <div>
            <h2>{camping.name}</h2>
            <p>
              {camping.contact.address}
              <br />
              <a href={camping.contact.phoneHref}>{camping.contact.phone}</a>
              <br />
              <a href={camping.contact.emailHref}>{camping.contact.email}</a>
            </p>
            <p className="notice">
              Demo-contactgegevens. Vervang dit voor publicatie door gecontroleerde
              gegevens.
            </p>
          </div>
        </div>
      </section>
      <section id="beschikbaarheid">
        <div className="container">
          <AvailabilityForm searchParams={resolvedSearchParams} />
        </div>
      </section>
    </main>
  );
}
