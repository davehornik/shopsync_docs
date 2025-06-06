/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  dokumentace: [
    {
      type: 'autogenerated',
      dirName: 'dokumentace', // načte pouze obsah z docs/dokumentace/
    },
  ],

  navody: [
    {
      type: 'autogenerated',
      dirName: 'navody', // načte pouze obsah z docs/navody/
    },
  ],

  reseniProblemu: [
    {
      type: 'autogenerated',
      dirName: 'reseni-problemu', // načte pouze obsah z docs/reseni-problemu/
    },
  ],

  faq: [
    {
      type: 'doc',
      id: 'faq',
      label: '❓ Často kladené otázky',
    },
  ],
};

export default sidebars;
