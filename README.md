# Partnership for Goals

A simple website that brings people, businesses, and organizations together to support sustainable development and community growth.

This project contains three main pages:

- `index.html` — Home page with a short mission and features.
- `about.html` — Explains the project's vision and values.
- `contact.html` — A contact form (uses Formspree) and other ways to reach you.

Other files:

- `style.css` — All the site styles.
- `logo.png` — Site logo used in the header.
- `script.js` — Small JavaScript for the year in the footer and menu toggle.
- `sitemap.xml` and `robots.txt` — Basic SEO files (edit the domain in `sitemap.xml` before publishing).

Quick start (view locally)

1. Open the project folder.
2. The easiest way is to open `index.html` in your browser.

Or run a small local server (recommended) so links and forms work better:

```powershell
# If you have Python 3 installed, run this in the project folder:
python -m http.server 8000
# Then open http://localhost:8000 in your browser.
```

Notes about fonts and offline use

- The site uses Google Fonts (loaded from the web). When you are offline the browser will use system fonts and the look may change.
- If you want the same fonts without internet, you can self-host the font files and add `@font-face` rules in `style.css`.

Before you upload to GitHub

- Update `sitemap.xml` to use your real domain (replace `https://your-domain.com`).
- Check the Formspree form on `contact.html` (the `action` attribute) and change it if you use a different service.
- Verify social links and contact email/phone in the footer.
- Add a `LICENSE` file if you want to set a license for the repo.

Deploying to GitHub Pages (simple)

1. Create a GitHub repository and push your project files.
2. In the repository settings, enable GitHub Pages from the `main` branch and root folder.
3. Your site will be available at `https://<your-username>.github.io/<repo-name>`.

Need help?

If you want, I can:

- Create a short `README` with screenshots.
- Add a `LICENSE` file (MIT, Apache, or GPL).
- Self-host Google Fonts (I can add the `@font-face` rules; you would upload the font files).

Contact

- Email: 2400718467@mubs.ac.ug
- Phone: +256 702 518676
- GitHub: https://github.com/MrXeskevin

---

This README uses plain language so it is easy to read and follow.