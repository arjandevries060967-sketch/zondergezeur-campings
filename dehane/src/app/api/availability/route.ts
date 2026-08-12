import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

const requiredFields = ["name", "email", "arrival", "departure", "guests", "stayType"];

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  if (clean(formData.get("website"))) {
    redirect("/contact?sent=1#beschikbaarheid");
  }

  const values = Object.fromEntries(
    [
      "name",
      "email",
      "phone",
      "arrival",
      "departure",
      "guests",
      "stayType",
      "campingUnit",
      "pets",
      "message"
    ].map((key) => [key, clean(formData.get(key))])
  );

  const invalid = requiredFields.some((key) => !values[key]);
  const emailInvalid = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email);

  if (invalid || emailInvalid) {
    redirect("/contact?error=1#beschikbaarheid");
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RESEND_TO;
  const from = process.env.RESEND_FROM || "De Hane demo <onboarding@resend.dev>";

  if (apiKey && to) {
    const text = `Nieuwe beschikbaarheidsaanvraag

Naam: ${values.name}
E-mail: ${values.email}
Telefoon: ${values.phone || "-"}
Aankomst: ${values.arrival}
Vertrek: ${values.departure}
Aantal personen: ${values.guests}
Type verblijf: ${values.stayType}
Kampeermiddel: ${values.campingUnit || "-"}
Huisdieren: ${values.pets}

Bericht:
${values.message || "-"}

Let op: dit is een aanvraag, geen definitieve boeking.`;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: values.email,
        subject: `Beschikbaarheidsaanvraag De Hane - ${values.arrival}`,
        text
      })
    });

    if (!response.ok) {
      redirect("/contact?error=1#beschikbaarheid");
    }
  }

  redirect("/contact?sent=1#beschikbaarheid");
}
