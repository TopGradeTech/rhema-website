---
title: 'Privacy'
layout: '~/layouts/MarkdownLayout.astro'
---

_Last updated_: 13 August 2026

This page describes what Rhema does with your data. It is short, because the answer is mostly "nothing".

## The application

**Your audio never leaves your computer.** Rhema performs speech recognition and translation locally, using models stored on your own machine. There is no server component, no account to create, and no API key to obtain. Nothing you say into the microphone is transmitted anywhere.

**Transcripts stay local too.** Depending on your logging setting, Rhema may write transcripts and translated text to log files inside its own installation folder so you can review or troubleshoot a session. These files are yours: they are never uploaded, and you can delete them at any time. If you would rather not keep them, set logging to its most limited mode in Options.

**Settings stay local.** Your configuration, including your custom vocabulary and word filter lists, is stored in a `settings.json` file next to the application. It is not synced or backed up anywhere.

### The only network connections Rhema makes

1. **Downloading models.** The first time you use speech recognition or translation, the relevant model is downloaded from Hugging Face. After that Rhema runs fully offline.
2. **Checking for updates.** When you choose About, Check for Updates, Rhema asks GitHub whether a newer release exists. That request is unauthenticated and contains no personal information; GitHub will see the request in its own logs, as it would for anyone visiting a public page. If you never click it, Rhema never checks.

That is the complete list. There is no telemetry, no analytics, no crash reporting and no usage tracking of any kind.

## This website

This site is static and hosted on GitHub Pages. It sets no cookies and includes no analytics, tracking pixels or advertising scripts.

GitHub serves the pages and, like any web host, records standard server request information such as IP addresses. That is governed by [GitHub's Privacy Statement](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) rather than by us, and we have no access to it.

## Links to other services

The Download page links to GitHub, and the Donate page links to PayPal. Once you follow either link you are on that company's service and their privacy policy applies. In particular, if you choose to donate, PayPal — not us — handles your payment details. We never see your card or bank information.

## Verifying any of this

Rhema is free software under the GPL-3.0 licence and the complete source code is public. Everything above is checkable rather than merely promised: you are welcome to read the code, or to run the application with a network monitor and confirm it stays quiet.

## Questions

Ask in [GitHub Discussions](https://github.com/TopGradeTech/rhema/discussions). If you believe you have found something that contradicts this page, please report it — that would be a bug.
