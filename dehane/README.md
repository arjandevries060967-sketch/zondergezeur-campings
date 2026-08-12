# De Hane demo

Demo-website voor Minicamping De Hane als proof-of-concept voor zondergezeur.nl.

## Status

Deze site is een demo en nog geen officiele website van Minicamping De Hane. Controleer voor publicatie:

- toestemming voor echte De Hane-foto's;
- definitieve contactgegevens;
- definitieve tarieven;
- exacte teksten rond Het Haantje, SVR en EU/ELFPO-vermelding;
- Resend-afzenderdomein en ontvanger.

## Lokaal draaien

```bash
npm install
npm run dev
```

Open daarna `http://localhost:3000`.

## Controles

```bash
npm run lint
npm run build
```

## Environment variables

Zie `.env.example`.

- `RESEND_API_KEY`: API key uit Resend.
- `RESEND_FROM`: geverifieerde afzender, bijvoorbeeld `De Hane <aanvragen@zondergezeur.nl>`.
- `RESEND_TO`: ontvanger van beschikbaarheidsaanvragen.

Zet deze variabelen lokaal in `.env.local` en in Vercel voor Production en Preview.

## Beschikbaarheidsformulier

Het formulier valideert de verplichte velden server-side via
`src/app/api/availability/route.ts`.

- Zonder `RESEND_API_KEY` en `RESEND_TO` verstuurt de site nog geen mail, maar
  toont hij wel een nette succesmelding na submit. Dit is bewust handig voor de
  demo.
- Met `RESEND_API_KEY` en `RESEND_TO` ingesteld stuurt de route de aanvraag via
  Resend door naar de ingestelde ontvanger.
- De contactgegevens in `src/config/camping.ts` zijn placeholders en moeten vóór
  livegang worden vervangen door gegevens van de eigenaar.

Er is nu geen analytics/tracking toegevoegd en daarom ook geen cookiebanner
nodig. Voeg een cookiemelding toe zodra er tracking, marketingpixels of niet-noodzakelijke cookies bijkomen.

## Publicatie

Voorkeursroute:

1. GitHub-repository maken en deze map pushen.
2. Repository koppelen aan Vercel.
3. Environment variables instellen.
4. Domein toevoegen, vermoedelijk `dehane.zondergezeur.nl`.
5. DNS CNAME instellen zoals Vercel aangeeft.
6. Productieformulier testen met testontvanger.
