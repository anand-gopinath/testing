# testing

Static test site for the [topbar.io](https://www.topbar.io) SDK. Run it locally with Node, deploy the same files to GitHub Pages.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)

## Local development

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (by default [http://localhost:3000](http://localhost:3000)). The server serves the [`public/`](public/) directory.

## SDK script

Add your embed in [`public/index.html`](public/index.html): uncomment or add a `<script src="...">` pointing to your CDN, staging URL, or a file you copy into `public/`. Hook initialization in [`public/js/test.js`](public/js/test.js).

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment**: set **Source** to **GitHub Actions**.
3. The workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) publishes the [`public/`](public/) folder on every push to `main`.

After the first successful run, the site is available at a project URL such as `https://<user>.github.io/<repo>/`.

### Paths on GitHub Pages

Project sites are served under a subpath (for example `/testing/`). This project uses **relative** asset URLs (`js/test.js`) so scripts and styles load correctly without a `<base>` tag. If you switch to absolute paths or a client router, set [`<base href>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base) or your bundler’s `base` to match the repo name.

## Layout

| Path | Role |
|------|------|
| [`public/`](public/) | Static site (HTML, JS, assets) — what `npm run dev` serves and what Pages deploys |
| [`public/.nojekyll`](public/.nojekyll) | Disables Jekyll so files like `_app` are not ignored |

There is **no Node server in production**; GitHub Pages only hosts static files. The `build` script is a no-op placeholder for future bundling if you need it.
