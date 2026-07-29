# One-Time Setup

Do these steps once to get the site live. Everything here is free.

## 1. Create the GitHub repository

1. Go to [github.com/new](https://github.com/new).
2. Repository name: `mountaineering-blog` (or anything you like — just remember it).
3. Leave it **empty** (no README, no .gitignore) since this project already has those.
4. Click **Create repository** and keep the page open — you'll need the URL it shows you (something like `https://github.com/YOUR_USERNAME/mountaineering-blog.git`).

## 2. Push this project to it

This project is already a local git repository with everything committed. From a terminal, in this folder:

```bash
git remote add origin https://github.com/YOUR_USERNAME/mountaineering-blog.git
git branch -M main
git push -u origin main
```

(You'll be prompted to sign in to GitHub the first time — follow the browser prompt it gives you.)

## 3. Update the site URL in the config

Open `astro.config.mjs` and change:

```js
site: 'https://your-username.github.io',
base: '/mountaineering-blog',
```

to match your actual GitHub username and repo name. Commit and push that change (or edit it directly on GitHub.com — either works).

> If you ever rename the repo to exactly `YOUR_USERNAME.github.io`, you can delete the `base` line entirely and your site will live at the bare `https://YOUR_USERNAME.github.io` with no `/mountaineering-blog` in the URL.

Two other files hardcode the same placeholder domain and need the same find-and-replace:
- `public/robots.txt` (the `Sitemap:` line)
- Nothing else — the RSS feed, sitemap, and Open Graph tags all derive their URLs from `astro.config.mjs` automatically.

## 4. Turn on GitHub Pages

1. On your repo's GitHub page, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. That's it — the workflow at `.github/workflows/deploy.yml` (already in this project) will build and deploy the site automatically on every push to `main`. Check the **Actions** tab to watch it run.
4. After the first successful run, your site is live at the URL from Settings → Pages.

## 5. Set up the contact form (free, via Formspree)

1. Create a free account at [formspree.io](https://formspree.io).
2. Create a new form — it'll give you a form ID (a short string) or a full endpoint URL.
3. Open `src/pages/contact.astro` and replace:
   ```js
   const FORMSPREE_ID = 'YOUR_FORM_ID';
   ```
   with your real ID. Also update `contactEmail` a few lines below to your real email (used as a fallback link).
4. Commit and push. The form now emails you on every submission — free tier covers 50 submissions/month, which is plenty for a personal site.

## 6. (Optional) Custom domain

You chose the free `github.io` subdomain, so you can skip this. If you ever want a real domain later: buy one from any registrar (~$10–15/year — this is the one part of the whole setup that isn't free), then follow [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) to point it at this repo. Hosting itself stays free either way.

## Day-to-day from here

You don't need this file again. For adding new summits, trips, blog posts, or gear reviews, see **CONTENT_GUIDE.md** — all of that can be done straight from GitHub.com without touching a terminal.
