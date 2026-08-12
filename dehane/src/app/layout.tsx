import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { camping } from "@/config/camping";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${camping.domain}`),
  title: {
    default: `${camping.shortName} | Kleinschalig kamperen aan Bussloo`,
    template: `%s | ${camping.shortName}`
  },
  description: camping.intro,
  openGraph: {
    title: `${camping.shortName} | Kleinschalig kamperen aan Bussloo`,
    description: camping.intro,
    siteName: camping.domain,
    locale: "nl_NL",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} ${lora.variable}`}>
        <div className="demo-bar">{camping.demoNotice}</div>
        <header className="site-header">
          <nav className="nav" aria-label="Hoofdnavigatie">
            <Link className="brand" href="/">
              {camping.name}
            </Link>
            <div className="nav-links">
              {camping.nav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link className="button primary" href={camping.cta.href}>
                {camping.cta.label}
              </Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <h2>{camping.name}</h2>
              <p>{camping.tagline}</p>
            </div>
            <div>
              <strong>Contact</strong>
              <p>
                {camping.contact.address}
                <br />
                <a href={camping.contact.phoneHref}>{camping.contact.phone}</a>
                <br />
                <a href={camping.contact.emailHref}>{camping.contact.email}</a>
              </p>
            </div>
            <div>
              <strong>Demo</strong>
              <p>
                Gebouwd als proof-of-concept voor zondergezeur.nl. Beelden en
                gegevens zijn tijdelijke demo-inhoud.
              </p>
            </div>
          </div>
        </footer>
        <div className="mobile-actions" aria-label="Snelle contactacties">
          <a href={camping.contact.phoneHref}>Bellen</a>
          <a href={camping.contact.emailHref}>Mailen</a>
          <a href={camping.cta.href}>Aanvragen</a>
        </div>
      </body>
    </html>
  );
}
