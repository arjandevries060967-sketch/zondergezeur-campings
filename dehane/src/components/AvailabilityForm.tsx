type SearchParams = {
  sent?: string;
  error?: string;
};

export function AvailabilityForm({ searchParams }: { searchParams?: SearchParams }) {
  return (
    <form className="form" action="/api/availability" method="post">
      <input
        className="honeypot"
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      {searchParams?.sent === "1" ? (
        <p className="notice">
          Dank je wel. De aanvraag is ontvangen. Dit is nog geen definitieve
          boeking.
        </p>
      ) : null}
      {searchParams?.error ? (
        <p className="notice">Controleer de verplichte velden en probeer opnieuw.</p>
      ) : null}
      <div className="form-grid">
        <label>
          Naam
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          E-mail
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          Telefoon
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          Aankomstdatum
          <input name="arrival" type="date" required />
        </label>
        <label>
          Vertrekdatum
          <input name="departure" type="date" required />
        </label>
        <label>
          Aantal personen
          <input name="guests" type="number" min="1" required />
        </label>
        <label>
          Type verblijf
          <select name="stayType" required>
            <option value="">Maak een keuze</option>
            <option>Kampeerplaats</option>
            <option>Camperplaats</option>
            <option>Huurcaravan</option>
            <option>Het Haantje</option>
          </select>
        </label>
        <label>
          Kampeermiddel
          <select name="campingUnit">
            <option value="">Niet van toepassing</option>
            <option>Tent</option>
            <option>Caravan</option>
            <option>Camper</option>
            <option>Vouwwagen</option>
          </select>
        </label>
        <label>
          Huisdier(en)
          <select name="pets" required>
            <option>Nee</option>
            <option>Ja</option>
          </select>
        </label>
        <label className="full">
          Bericht of opmerking
          <textarea name="message" />
        </label>
      </div>
      <p>
        Je vraagt beschikbaarheid aan. De camping bevestigt daarna persoonlijk of
        er plek is.
      </p>
      <button className="primary" type="submit">
        Beschikbaarheid aanvragen
      </button>
    </form>
  );
}
