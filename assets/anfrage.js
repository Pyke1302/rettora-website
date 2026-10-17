// Anfragebogen: bereitet eine E-Mail im eigenen Mailprogramm vor.
// Es werden keine Daten an diese Website übertragen.
// Vor dem Livegang die geschäftliche Adresse eintragen, z. B. "kontakt@ihre-domain.de".
const KONTAKT_EMAIL = "";

(function () {
  const form = document.getElementById("anfrage-form");
  if (!form) return;
  form.hidden = false; // ohne JavaScript bleibt der Bogen ausgeblendet
  const button = document.getElementById("form-submit");
  const note = document.getElementById("form-note");

  if (!KONTAKT_EMAIL) {
    button.disabled = true;
    note.textContent = "Die Kontaktadresse wird vor dem Start der Seite eingetragen.";
    note.classList.add("is-warning");
    return;
  }

  const checked = (name) =>
    Array.from(form.querySelectorAll(`input[name="${name}"]:checked`)).map((el) => el.value);
  const field = (name) => (new FormData(form).get(name) || "").toString().trim();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const bedarf = checked("bedarf");
    const stufe = checked("stufe");
    const org = field("organisation");
    const name = field("name");
    const zeitraum = field("zeitraum");
    const nachricht = field("nachricht");

    if (!bedarf.length && !nachricht) {
      note.textContent = "Bitte kreuzen Sie mindestens einen Bedarf an oder beschreiben Sie Thema und Zielgruppe.";
      note.classList.add("is-warning");
      return;
    }
    note.classList.remove("is-warning");
    note.textContent = "Ihr E-Mail-Programm öffnet sich mit der vorbereiteten Nachricht.";

    const lines = ["Guten Tag,", "", "wir interessieren uns für:"];
    (bedarf.length ? bedarf : ["(siehe unten)"]).forEach((b) => lines.push(`- ${b}`));
    if (stufe.length) lines.push("", `Ausbildungsstufe: ${stufe.join(", ")}`);
    if (zeitraum) lines.push(`Gewünschter Zeitraum: ${zeitraum}`);
    if (nachricht) lines.push("", nachricht);
    lines.push("", "Viele Grüße");
    if (name) lines.push(name);
    if (org) lines.push(org);

    const subject = org ? `Projektanfrage von ${org}` : "Projektanfrage über die Website";
    window.location.href =
      `mailto:${KONTAKT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  });
})();
