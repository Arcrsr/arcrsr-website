/** @type {import('prettier').Config} */
module.exports = {
    singleQuote: true,
    printWidth: 100,
    proseWrap: 'never',
    tabWidth: 4,
    htmlWhitespaceSensitivity: 'strict',
    plugins: ['prettier-plugin-tailwindcss'],
    overrides: [
        {
            files: '*.md',
            options: {
                tabWidth: 2,
            },
        },
    ],
};
