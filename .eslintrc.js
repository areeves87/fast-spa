module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "prettier"
  ],
  "settings": {
    "react": {
      "pragma": "React",
      "version": "^16.4.2",
    },
  },
  "env": {
    "browser": true,
    "mocha": true,
    "node": true,
  },
  "rules": {
    "no-console": 0,
    "prettier/prettier": ["error", {"singleQuote": true, "trailingComma": "es5"}],
    "prefer-const": 2
  },
  "plugins": [
    "import",
    "react",
    "prettier"
  ]      
};