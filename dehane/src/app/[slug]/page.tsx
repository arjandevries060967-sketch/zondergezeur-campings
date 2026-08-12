import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImageBlock } from "@/components/ImageBlock";
import { pages } from "@/config/pages";

type PageKey = keyof typeof pages;
type PageParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug as PageKey];

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description
    }
  };
}

export default async function ContentPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const page = pages[slug as PageKey];

  if (!page) {
    notFound();
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container split">
          <div className="section-intro">
            <span className="eyebrow">De Hane demo</span>
            <h1>{page.title}</h1>
            <p className="lead">{page.description}</p>
            <Link className="button primary" href="/contact#beschikbaarheid">
              Beschikbaarheid aanvragen
            </Link>
          </div>
          <ImageBlock src={page.image} alt={page.title} priority />
        </div>
      </section>
      <section>
        <div className="container">
          {page.sections.map((section) => (
            <article className="usp-item" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </article>
          ))}
        </div>
      </section>
      {"galleryImages" in page ? (
        <section className="band">
          <div className="container">
            <div className="section-intro">
              <span className="eyebrow">Foto&apos;s</span>
              <h2>{page.title} in beeld</h2>
              <p>
                Tijdelijke demo-weergave met beelden van de huidige De Hane-site
                en de aangeleverde foto.
              </p>
            </div>
            <div className="content-gallery">
              {page.galleryImages.map((image) => (
                <figure className="content-gallery-item" key={image.src}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 900px) 25vw, (min-width: 620px) 45vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
