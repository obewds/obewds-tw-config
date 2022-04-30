// ./docs/.vitepress/config.js

module.exports = {
    base: '/obewds-tw-config/',
    title: '@obewds/obewds-tw-config',
    description: 'A documentation site for the ObewdsTwConfig component',
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Component", link: "/component" },
            { text: "Tests", link: "/tests" },
            { text: "npm", link: "https://www.npmjs.com/package/@obewds/obewds-tw-config" },
            { text: "GitHub", link: "https://github.com/obewds/obewds-tw-config" },
        ],
        // sidebar: [
            // { text: "Installation", link: "/#installation" },
        // ],
    },
}
