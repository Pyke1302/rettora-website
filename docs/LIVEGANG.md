# Vor dem Livegang

## Pflicht
- [ ] Gewerbe: beim Gewerbeamt schriftlich bestätigen lassen, dass die Konzeption und Erstellung von Schulungsmaterialien im Auftrag abgedeckt ist.
- [x] Geschäftliche E-Mail-Adresse `kontakt@rettora.de` in `index.html`, `impressum.html`, `datenschutz.html` und `assets/anfrage.js` eingetragen.
- [ ] Postfach `kontakt@rettora.de` bei netcup anlegen und eine Testmail empfangen.
- [ ] Auftragsverarbeitungsvertrag mit netcup abschließen: CCP → Stammdaten → Reiter „Auftragsverarbeitung“ → „AVV generieren“. Die Datenschutzerklärung nennt diesen Vertrag bereits.
- [x] Impressum: Anschrift, Telefon und weiterer Ansprechpartner (Thomas Wronski, mit seinem Einverständnis) eingetragen. USt-IdNr. bzw. Wirtschafts-ID ergänzen, sobald vorhanden.
- [x] Hoster festgelegt: GitHub Pages, in der Datenschutzerklärung eingetragen.
- [x] Datenschutzerklärung ergänzt: Logdaten bei GitHub (keine feste Frist veröffentlicht), E-Mail bei netcup, Links zu YouTube und Instagram.
- [ ] Datenschutzerklärung einmal gegen einen Generator oder durch eine fachkundige Person gegenprüfen lassen.
- [ ] Medizinische Angaben der Beispielkarte „Akute Atemnot“ prüfen.
- [ ] Texte über Rettora (Abschnitte „Über Rettora“, FAQ, Projekte) mit Thomas auf Richtigkeit prüfen.
- [x] `noindex, nofollow` entfernt; `robots.txt` und `sitemap.xml` für rettora.de ergänzt.
- [ ] Unter Settings → Pages die Quelle „GitHub Actions“ wählen und den Workflow „Website veröffentlichen (GitHub Pages)“ von Hand starten.

## Empfohlen
- [ ] Arbeitsprobe als PDF fertigstellen (z. B. die Einsatzsimulation „Akute Atemnot“) und auf der Seite verlinken.
- [x] Links zu Lernplattform und Shorts (YouTube, Instagram) ergänzt.
- [ ] Bildschirmfotos der Lernplattform (Startseite, Frage, Lernkarte, Simulation) ergänzen.
- [x] Domain rettora.de bei netcup bestellt (Webhosting 1000).
- [ ] DNS-Einträge setzen und `PAGES_DOMAIN` hinterlegen (siehe unten).
- [x] Vorschaubild für geteilte Links (`assets/img/vorschau.png`, 1200×630) ergänzt.
- [ ] Falls Arbeitslosengeld bezogen wird: Nebentätigkeit vor dem ersten bezahlten Auftrag bei der Agentur für Arbeit melden.

## Domain rettora.de mit GitHub Pages verbinden
1. Im netcup-CCP unter Domains → rettora.de → DNS die vorhandenen A- und AAAA-Einträge für `@` und `www` löschen. Die MX-Einträge für die E-Mail bleiben unverändert.
2. Vier A-Einträge für `@` anlegen: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
3. Einen CNAME-Eintrag `www` → `pyke1302.github.io.` anlegen.
4. Im Repo unter Settings → Secrets and variables → Actions → Variables die Variable `PAGES_DOMAIN` mit dem Wert `rettora.de` anlegen.
5. Workflow „Website veröffentlichen (GitHub Pages)“ von Hand starten.
6. Unter Settings → Pages prüfen, dass `rettora.de` erkannt wird, und „Enforce HTTPS“ einschalten, sobald das Zertifikat bereit ist (kann bis zu einer Stunde dauern).

## Hosting-Optionen
Die Seite ist rein statisch und läuft bei jedem einfachen Hoster:
- GitHub Pages: kostenlos für öffentliche Repos, Veröffentlichung direkt aus `main`.
- Cloudflare Pages: kostenlos, mit eigener Domain.
- Klassischer Webspace eines deutschen Anbieters.
