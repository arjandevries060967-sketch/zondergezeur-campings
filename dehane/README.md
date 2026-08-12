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

## Publicatie

Voorkeursroute:

1. GitHub-repository maken en deze map pushen.
2. Repository koppelen aan Vercel.
3. Environment variables instellen.
4. Domein toevoegen, vermoedelijk `dehane.zondergezeur.nl`.
5. DNS CNAME instellen zoals Vercel aangeeft.
6. Productieformulier testen met testontvanger.
