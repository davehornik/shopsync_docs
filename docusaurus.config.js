// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ShopSync',
  tagline: 'Dokumentace, návody, FAQ a podpora pro ShopSync',
  favicon: 'img/favicon.ico',

  url: 'https://docs.shopsync.cz',
  baseUrl: '/',

  organizationName: 'davehornik',
  projectName: 'shopsync_docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'cs',
    locales: ['cs'],
  },

plugins: [
  [
    'docusaurus-plugin-image-zoom',
    {
      selector: '.docItemContainer img',
      options: {
        margin: 24,
        background: 'rgba(0, 0, 0, 0.85)',
        scrollOffset: 0,
      },
    },
  ],

  function logZoomPluginStart() {
    return {
      name: 'log-zoom-plugin',
      injectHtmlTags() {
        return {
          headTags: [
            {
              tagName: 'script',
              innerHTML: 'console.log("✅ docusaurus-plugin-image-zoom je aktivní");',
            },
          ],
        };
      },
    };
  },
],
//  clientModules: [require.resolve('./src/zoom.js')],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ShopSync',
      logo: {
        alt: 'ShopSync logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'dokumentace',
          position: 'left',
          label: 'Dokumentace',
        },
        {
          type: 'docSidebar',
          sidebarId: 'navody',
          position: 'left',
          label: 'Návody',
        },
        {
          type: 'docSidebar',
          sidebarId: 'reseniProblemu',
          position: 'left',
          label: 'Řešení problémů',
        },
        {
          type: 'docSidebar',
          sidebarId: 'faq',
          position: 'left',
          label: 'FAQ',
        },
        {
          to: '/docs/kontakt',
          label: '📞 Podpora',
          position: 'right',
        },
        {
          href: 'https://github.com/davehornik/shopsync_docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'O projektu',
          items: [
            {
              label: 'Úvod do naší aplikace',
              to: '/docs/dokumentace',
            },
            {
              label: 'Novinky',
              to: '#',
            },
            {
              label: 'Smluvní podmínky',
              href: 'https://shopsync.cz/user_license.pdf',
            },
            {
              label: 'GDPR',
              to: '#',
            },
          ],
        },
        {
          title: 'Podpora',
          items: [
            {
              label: 'Vytvořit požadavek na podporu',
              href: 'https://helpdesk.esync.cz/cs/tickets/create/step1',
            },
            {
              label: 'Moje požadavky',
              href: 'https://helpdesk.esync.cz/cs/tickets',
            },
            {
              label: 'Sledovat požadavek',
              href: 'https://helpdesk.esync.cz/cs/tickets/track',
            },
          ],
        },
        {
          title: 'Externí odkazy',
          items: [
            {
              label: 'Hlavní web ShopSync',
              href: 'https://shopsync.cz',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/davehornik/shopsync_docs',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} @davehornik pro ShopSync.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;