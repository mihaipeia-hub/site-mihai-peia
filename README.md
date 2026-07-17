# Landing page — Mihai Peia

Site static, responsive, fără framework sau proces de instalare.

## Personalizare înainte de publicare

1. **Calendar:** deschide `script.js` și înlocuiește valoarea `CALENDAR_URL` de pe prima linie cu linkul real de programare.
2. **Fotografie:** creează folderul `images` și salvează fotografia drept `mihai-peia.webp`. Recomandare: portret vertical, minimum 900 × 1200 px, sub 300 KB.
3. **Testimoniale:** înlocuiește exemplele din secțiunea „Experiența clienților” cu testimoniale reale, aprobate.
4. **Date și formular:** formularul validează datele și apoi deschide calendarul. Pentru a și salva răspunsurile, conectează-l la Tally, Formspree sau Netlify Forms înainte de lansare.
5. **Conformitate:** adaugă datele firmei/PFA, politica de confidențialitate și termenii ceruți de forma ta juridică.

## Verificare locală

Poți deschide direct `index.html` într-un browser. Pentru testare completă, pornește orice server static local în acest folder.

## Publicare cu cost minim

- **Netlify Drop:** arhivează sau trage folderul pe `app.netlify.com/drop`.
- **Cloudflare Pages / GitHub Pages:** publică toate fișierele din rădăcina proiectului.
- După publicare, conectează domeniul din setările platformei și activează HTTPS (oferit gratuit de platformele de mai sus).

Fișiere necesare: `index.html`, `styles.css`, `script.js` și folderul `images` după adăugarea fotografiei.
