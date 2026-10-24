# Seemant Youth Conclave — website

A Next.js website for a youth conclave taking students to India's border villages.
Built as a static site, so it hosts **free on GitHub Pages**.

Pages: Home · About · Conclaves (list + one page per edition) · Register · Blog (list + one page per story) · Volunteer · Contact

---

## 1. Editing the content (no coding needed)

Almost everything on the site — text, dates, villages, mentors, blog posts, FAQs — is in **one file**:

```
data/site.js
```

Open it, replace anything in `[BRACKETS]`, save, and push to GitHub.

- **Photos:** put image files in `public/images/` (compress each to under ~300 KB, e.g. with squoosh.app),
  then set `image: "/images/your-photo.jpg"` in `data/site.js`. `image: null` shows a grey placeholder.
- **Apply button:** create a Google Form and paste its link as `applyFormUrl`.
  To show the form inside the Register page, also paste the embed link as `applyFormEmbedUrl`
  (Google Form → Send → `<>` → copy the link inside `src="…"`).
- **New edition:** copy a block in the `conclaves` list, give it a new `slug`, and edit it.
- **New blog post:** copy a block in the `posts` list, give it a new `slug`, and edit it.
- **Colours / fonts:** change the variables at the top of `app/globals.css`.

---

## 2. Putting it online with GitHub Pages (one-time setup, ~10 minutes)

1. Go to github.com → **New repository** → name it e.g. `seemant-conclave` → Public → Create.
2. Upload all files from this folder (drag them in via **Add file → Upload files**), or with git:
   ```
   git init
   git add .
   git commit -m "First version"
   git branch -M main
   git remote add origin https://github.com/<your-username>/seemant-conclave.git
   git push -u origin main
   ```
   Make sure the hidden `.github` folder is uploaded too — it contains the auto-deploy script.
3. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Open the **Actions** tab and wait for the green tick (about 2 minutes).
5. Your site is live at `https://<your-username>.github.io/seemant-conclave/`

From now on, every change you push to `main` goes live automatically within ~2 minutes.

---

## 3. Using your own domain (optional)

1. Buy a domain (e.g. from GoDaddy, Hostinger, BigRock).
2. Create a file `public/CNAME` containing only your domain, e.g.
   ```
   www.seemantconclave.org
   ```
   and push it. (The deploy script then serves the site from the domain root.)
3. At your domain provider, add a DNS record:
   `CNAME   www   <your-username>.github.io`
   (for the bare domain, add the four GitHub `A` records listed in GitHub's Pages docs).
4. In GitHub **Settings → Pages**, enter the domain and tick **Enforce HTTPS** once available.

---

## 4. Running it on your own computer (optional)

Requires Node.js 20+.

```
npm install
npm run dev        # opens http://localhost:3000 with live reload
```
