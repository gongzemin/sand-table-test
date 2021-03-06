module.exports = {
    root: true,
    env: {
      node: true,
      jquery: true,
      es6: true
    },
    extends: [
    //   'plugin:vue/vue3-essential',
    //   '@vue/airbnb',
    ],
    parserOptions: {
      parser: 'babel-eslint',
      "ecmaVersion": 2017,
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'linebreak-style': [0, 'error', 'windows'],
      'no-tabs': 'off',
      "no-param-reassign": 0 // Fix eslint no-param-reassign
    },
  };