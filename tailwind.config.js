/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        preflight: false,
    },
    prefix: 'bh-',
    content: ['./src/**/*.{html,ts}', './lib/**/*.{html,ts}'],
    theme: {
        extend: {
            colors: {
                primary: '#4361ee',
                black: '#0e1726',
            },
        },
    },
    plugins: [],
};
