// Kontaktadresse für Anfragen. Vor der Veröffentlichung eintragen,
// z. B. "kontakt@ihre-domain.de". Solange sie leer ist, bleibt der Button gesperrt.
const KONTAKT_EMAIL = "";

(function () {
  const form = document.getElementById("anfrage-form");
  if (!form) return;
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

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const bedarf = checked("bedarf");
    const stufe = checked("stufe");
    const org = (data.get("organisation") || "").toString().trim();
    const name = (data.get("name") || "").toString().trim();
    const teilnehmer = (data.get("teilnehmer") || "").toString().trim();
    const nachricht = (data.get("nachricht") || "").toString().trim();

    if (!bedarf.length && !nachricht) {
      note.textContent = "Bitte kreuzen Sie mindestens einen Bedarf an oder schreiben Sie eine Nachricht.";
      note.classList.add("is-warning");
      return;
    }
    note.classList.remove("is-warning");
    note.textContent = "Ihr E-Mail-Programm öffnet sich mit der vorbereiteten Nachricht.";

    const lines = ["Hallo Rettora-Team,", "", "wir interessieren uns für:"];
    (bedarf.length ? bedarf : ["(siehe Nachricht)"]).forEach((b) => lines.push(`- ${b}`));
    if (stufe.length) lines.push("", `Ausbildungsstufe: ${stufe.join(", ")}`);
    if (teilnehmer) lines.push(`Teilnehmende pro Jahr: ca. ${teilnehmer}`);
    if (nachricht) lines.push("", nachricht);
    lines.push("", "Viele Grüße");
    if (name) lines.push(name);
    if (org) lines.push(org);

    const subject = org ? `Anfrage von ${org}` : "Anfrage über die Website";
    const href = `mailto:${KONTAKT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
  });
})();
