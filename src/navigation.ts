import { getPermalink } from './utils/permalinks';

// Single place for the GitHub URLs, since the nav, footer, home page and
// Download page all point at them. Downloads deliberately go to the repo's
// releases rather than being hosted here: the installer is ~1.6 GB, and the
// app's own updater already reads that same release feed, so one source of
// truth beats two.
export const GITHUB_REPO = 'https://github.com/TopGradeTech/rhema';
export const GITHUB_RELEASES = `${GITHUB_REPO}/releases/latest`;
export const GITHUB_DISCUSSIONS = `${GITHUB_REPO}/discussions`;
export const GITHUB_ISSUES = `${GITHUB_REPO}/issues`;

export const headerData = {
  links: [
    { text: 'Download', href: getPermalink('/download') },
    { text: 'Donate', href: getPermalink('/donate') },
    { text: 'Source', href: GITHUB_REPO },
  ],
  actions: [{ text: 'Download', href: getPermalink('/download'), target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'Rhema',
      links: [
        { text: 'Download', href: getPermalink('/download') },
        { text: 'Donate', href: getPermalink('/donate') },
        { text: 'Privacy', href: getPermalink('/privacy') },
      ],
    },
    {
      title: 'Project',
      links: [
        { text: 'Source code', href: GITHUB_REPO },
        { text: 'Releases', href: GITHUB_RELEASES },
        { text: 'Changelog', href: `${GITHUB_REPO}/blob/main/CHANGELOG.md` },
        { text: 'Licence (GPL-3.0)', href: `${GITHUB_REPO}/blob/main/LICENSE` },
      ],
    },
    {
      title: 'Get help',
      links: [
        { text: 'Ask a question', href: `${GITHUB_DISCUSSIONS}/categories/q-a` },
        { text: 'Request a feature', href: `${GITHUB_DISCUSSIONS}/categories/ideas` },
        { text: 'Report a bug', href: GITHUB_ISSUES },
        { text: 'Setup guide', href: `${GITHUB_REPO}#readme` },
      ],
    },
  ],
  secondaryLinks: [{ text: 'Privacy', href: getPermalink('/privacy') }],
  socialLinks: [{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: GITHUB_REPO }],
  footNote: `
    Rhema is free software under the
    <a class="text-blue-600 underline dark:text-muted" href="${GITHUB_REPO}/blob/main/LICENSE">GPL-3.0 licence</a>.
    Copyright &copy; 2026 Zachary Price.
  `,
};
