module.exports = {
    extends: ['standard', 'prettier', 'plugin:cypress/recommended'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 0,
    },
    env: {jest: true},
    globals: {
        cy: true,
    },
};
