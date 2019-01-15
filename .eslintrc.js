module.exports = {
    "extends": "airbnb",
    'env': {
        'jest': true,
        "browser": true
      },
      'rules': {
        'react/jsx-filename-extension': 'off',
        'no-use-before-define': 'off',
        'react/prop-types': 'off',
        'comma-dangle': 'off',
        'no-console': 'off'
      },
      'globals': {
        'window': true
      }
};