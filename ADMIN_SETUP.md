# Setting Up the Admin Panel (Decap CMS)

This gives you a real admin panel at `/admin` — log in with GitHub, fill out a form for a new summit/post/gear review, click Publish, and it commits straight to your repo (which redeploys the live site automatically).

**Prerequisite:** this only works once the site is pushed to GitHub and live on GitHub Pages (see `SETUP.md`) — the admin panel is a page on your live site, and it commits to your real GitHub repo. Do those steps first.

Everything here is free (Cloudflare's free tier easily covers this — a personal site gets a handful of logins a month, nowhere near any limit).

## 1. Deploy the tiny OAuth proxy (Cloudflare Worker)

GitHub's OAuth login requires a small server-side step (exchanging a code for a token using a secret that can't live in a static site). That's all this Worker does — it doesn't touch your content.

```bash
cd cms-oauth-worker
npx wrangler login      # opens a browser — log in with (or create) a free Cloudflare account
npx wrangler deploy     # deploys the worker, prints its URL
```

Copy the URL it prints — something like `https://avg-joe-cms-oauth.YOUR-SUBDOMAIN.workers.dev`. You'll need it in the next two steps.

## 2. Create a GitHub OAuth App

1. Go to [github.com/settings/applications/new](https://github.com/settings/applications/new).
2. Fill in:
   - **Application name**: `Avg Joe Mountaineering CMS` (or anything)
   - **Homepage URL**: your live site URL (e.g. `https://jperez26.github.io/mountaineering-blog`)
   - **Authorization callback URL**: the Worker URL from step 1, plus `/callback` — e.g. `https://avg-joe-cms-oauth.YOUR-SUBDOMAIN.workers.dev/callback`
3. Click **Register application**.
4. Click **Generate a new client secret**. You'll now have a **Client ID** and a **Client Secret** — keep this page open.

## 3. Give the Worker those two values

Still in `cms-oauth-worker/`, run each of these — they'll prompt you to paste a value (keeps the secret out of your shell history and out of this chat):

```bash
npx wrangler secret put GITHUB_OAUTH_CLIENT_ID
npx wrangler secret put GITHUB_OAUTH_CLIENT_SECRET
```

## 4. Point the CMS config at your Worker

Open `public/admin/config.yml` and update:

```yaml
backend:
  name: github
  repo: YOUR-GITHUB-USERNAME/mountaineering-blog   # confirm this matches your actual repo
  branch: main
  base_url: https://avg-joe-cms-oauth.YOUR-SUBDOMAIN.workers.dev   # the Worker URL from step 1
  auth_endpoint: auth
```

Commit and push (or edit directly on GitHub.com). Wait for the deploy to finish.

## 5. Log in

Visit `https://YOUR-USERNAME.github.io/mountaineering-blog/admin/`, click **Login with GitHub**, approve access, and you should land in the CMS with three collections: Climbs, Blog Posts, and Gear Reviews — each matching the fields described in `CONTENT_GUIDE.md`, just as a form instead of raw Markdown.

## If login fails

- Double check the callback URL in the GitHub OAuth App **exactly** matches `<worker-url>/callback` (no trailing slash mismatch).
- Reconfirm the two secrets were set on the *same* Worker you deployed (`wrangler secret list` shows names, not values).
- The GitHub account you log in with needs push access to the repo — since it's your own repo, your own account already has this.

## Adding a new entry — always start from the "+" button

To create a new Climb, Blog Post, or Gear Review, go to the collection's list view and click the **"+"** button at the top (e.g. "+ Gear Reviews"). Publishing from that screen always creates a brand-new file.

If you instead open an *existing* entry and change its fields, Publish will save those changes back into that same existing entry — overwriting it — even if you've replaced every field with something unrelated. There's no separate "Save as new" action, so double-check the URL/breadcrumb reads as a new, empty entry before you start typing.
