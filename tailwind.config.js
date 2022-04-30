//const ObewdsTwConfig = require('./dist/obewds-tw-config.cjs')

module.exports = {

    // darkMode: 'media',
    darkMode: 'class',

    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/@obewds/**/dist/*.js",
        // ObewdsTwConfig,
    ],

    theme: {
        extend: {},
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],

}
