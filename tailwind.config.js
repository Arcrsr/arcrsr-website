/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: 'tw-',
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './blog/**/*.{js,ts,jsx,tsx,mdx}',
        './docs/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
