/** @type {import('prettier').Config} */
module.exports = {
    singleQuote: true,
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
