/** @type {import('prettier').Config} */
module.exports = {
    singleQuote: true,
    printWidth: 100,
    proseWrap: 'never',
    tabWidth: 4,
    htmlWhitespaceSensitivity: 'strict',
    overrides: [
        {
            files: '*.md',
            options: {
                tabWidth: 2,
            },
        },
    ],
};
