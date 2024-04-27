/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
    parserOptions: {
        project: 'tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
    },
    plugins: ['react-refresh', 'unused-imports', 'jest'],
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
    ],
    root: true,
    env: {
        jest: true,
        browser: true,
    },
    rules: {
        /* ********************************** ES6+ ********************************** */
        'no-console': 'off',
        'no-var-requires': 'off',
        'no-restricted-syntax': 'off',
        'no-continue': 'off',
        'no-await-in-loop': 'off',
        'no-return-await': 'off',
        'no-unused-vars': 'off',
        'no-multi-assign': 'off',
        'no-param-reassign': 'off',
        'max-classes-per-file': 'off',
        'class-methods-use-this': 'off',
        'guard-for-in': 'off',
        'no-underscore-dangle': 'off',
        'no-plusplus': 'off',
        'no-lonely-if': 'off',
        'no-bitwise': ['error', { allow: ['~'] }],
        'no-undef': 'error',
        'no-restricted-exports': 'off',
        'no-redundant-type-constituents': 'off',
        'prefer-destructuring': 'off',

        /* ********************************** Module Import ********************************** */

        'import/no-absolute-path': 'off',
        'import/extensions': 'off',
        'import/no-named-default': 'off',
        'import/prefer-default-export': 'off',
        'import/no-cycle': 'off',
        'import/no-dynamic-require': 'off',

        // 一部分文件在导入devDependencies的依赖时不报错
        'import/no-extraneous-dependencies': 'off',
        // 模块导入顺序规则
        'import/order': [
            'warn',
            {
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'external',
                        position: 'after',
                    },
                ],
                alphabetize: { order: 'asc', caseInsensitive: false },
                'newlines-between': 'always-and-inside-groups',
                warnOnUnassignedImports: true,
            },
        ],
        // 自动删除未使用的导入
        // https://github.com/sweepline/eslint-plugin-unused-imports
        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                args: 'none',
                ignoreRestSiblings: true,
            },
        ],

        /* ********************************** Typescript ********************************** */
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-for-in-array': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/naming-convention': 'off',

        /* ********************************** React and Hooks ********************************** */
        'react/jsx-uses-react': 'warn',
        'react/jsx-uses-vars': 'warn',
        'react/jsx-no-useless-fragment': 'off',
        'react/display-name': 'off',
        'react/button-has-type': 'off',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/destructuring-assignment': 'off',
        'react/static-property-placement': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
        'react/function-component-definition': [
            'error',
            { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
        ],
        'react/no-array-index-key': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react-refresh/only-export-components': 'off',

        /* ********************************** jsx-a11y ********************************** */
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],
        'jsx-a11y/control-has-associated-label': 'off',
    },
};
