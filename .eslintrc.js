module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'standard',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'eslint-config-prettier',
        'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        indent: 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'jsx-quotes': 'off',
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'max-len': ['error', { ignoreComments: true, code: 180 }],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks dobavlenie zavisimostey
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies,
        'no-param-reassign': 'off', // otmena blokirovki izmeneniya svoystv state
        'no-undef': 'off',
        'react/no-array-index-key': 'off',

        //================================
        'no-new': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'import/no-named-as-default': 0,
        'spaced-comment': 'off',
        'no-unused-expressions': 'off',
        'react-hooks/exhaustive-deps': 0,
        'object-shorthand': 0,
        'object-literal-shorthand': 0,
        camelcase: 'off',
    },
};
