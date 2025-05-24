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

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/davehornik/shopsync_docs',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/davehornik/shopsync_docs',
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
        sidebarId: 'podpora',
        position: 'left',
        label: 'Podpora',
      },
      {
        href: 'https://helpdesk.esync.cz/cs/tickets/create/step1',
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
            title: 'Obsah',
            items: [
              {label: 'Dokumentace', to: '/docs/intro'},
              {label: 'Návody', to: '/docs/navody/uvod'},
              {label: 'FAQ', to: '/docs/faq'},
              {label: 'Kontakt', to: '/docs/kontakt'},
            ],
          },
          {
            title: 'Podpora',
            items: [
              {
                label: 'Vytvořit požadavek',
                href: 'https://helpdesk.esync.cz/cs/tickets/create/step1',
              },
              {
                label: 'Moje tickety',
                href: 'https://helpdesk.esync.cz/cs/tickets',
              },
              {
                label: 'Sledovat ticket',
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
