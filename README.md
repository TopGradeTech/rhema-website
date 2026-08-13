# rhema-website

The marketing site for **[Rhema](https://github.com/TopGradeTech/rhema)** — a Windows app that
transcribes and translates live speech entirely on your own machine.

This repo is only the website. The application itself, its releases, issues and discussions all live
in [TopGradeTech/rhema](https://github.com/TopGradeTech/rhema).

## Pages

| Page        | Purpose                                                                   |
| ----------- | ------------------------------------------------------------------------- |
| `/`         | What Rhema does, how it works, requirements, FAQs                         |
| `/download` | Sends people to the latest GitHub release, plus install steps and caveats |
| `/donate`   | Donation link and an honest account of where the money goes               |
| `/privacy`  | What Rhema and this site do with your data (short answer: almost nothing) |

Installers are **not** hosted here. Downloads point at the app repo's releases, because the
installer is ~1.6 GB and the app's own updater already reads that same release feed — one source of
truth beats two.

## Developing

```
npm install
npm run dev      # local dev server
npm run check    # astro type check + eslint + prettier
npm run build    # production build into dist/
npm run preview  # serve the built site
```

`npm run check` is what CI runs; if it passes locally it should pass there.

## Deployment

Pushing to `main` builds and deploys to GitHub Pages via `.github/workflows/actions.yaml`. Pull
requests are checked and built but deliberately cannot publish.

The site is currently configured for GitHub Pages project pages, which needs no DNS setup. To move
it to a custom domain such as `rhema.topgradetech.com`:

1. In `src/config.yaml`, set `site` to the domain and `base` to `'/'`.
2. Add a `public/CNAME` file containing just the domain.
3. Point the DNS record at GitHub Pages and set the custom domain in the repo's Pages settings.

## Notes for future edits

- **GitHub URLs live in one place.** `src/navigation.ts` exports `GITHUB_REPO`, `GITHUB_RELEASES`,
  `GITHUB_DISCUSSIONS` and `GITHUB_ISSUES`; import those rather than writing links inline.
- **The donate link is duplicated by necessity.** `src/pages/donate.astro` holds the same PayPal URL
  as the app's own donate dialog (`DONATE_URL` in `settings_ui_mixin.py`). If one changes, change
  both.
- **No third-party requests, on purpose.** The privacy page states this site loads no external
  scripts, fonts, analytics or tracking pixels. The template shipped several (an Unsplash
  preconnect, a shields.io badge, a Decap CMS admin page pulling from unpkg and Netlify) and they
  were removed. Adding anything that phones out means updating the privacy page too, or it becomes
  untrue.
- **`.gitattributes` pins LF.** Don't remove it. A Windows clone with `core.autocrlf=true` would
  otherwise rewrite every file to CRLF and turn the prettier check permanently red.
- **The blog is disabled, not deleted.** Set `apps.blog.isEnabled: true` in `src/config.yaml` to
  bring back the routes, RSS and tag pages; the components are all still present.

## Licence

Built on the [AstroWind](https://github.com/onwidget/astrowind) template, which is MIT licensed —
see [LICENSE.md](./LICENSE.md), retained for that attribution.

Site content and copy: copyright © 2026 Zachary Price. Rhema itself is separately licensed under the
[GPL-3.0](https://github.com/TopGradeTech/rhema/blob/main/LICENSE).
