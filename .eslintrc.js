module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        "indent": ["error", 2],
        "comma-dangle": 0,
        "no-console": 0,
        'import/prefer-default-export': 0,
    }
};