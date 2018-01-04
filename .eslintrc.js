const path = require("path")

module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  extends: ["eslint:recommended", "plugin:lodash/recommended", "plugin:react/recommended"],
  plugins: [ "html", "lodash", "react"],
  rules: {
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        FunctionDeclaration: { body: 1, parameters: 2 },
        CallExpression: { arguments: 1 }
      }
    ],
    "react/jsx-uses-vars": "error", 
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-useless-escape" : ["off"],
    "arrow-parens": ["error", "as-needed"],
    "require-await": ["error"],
    "comma-dangle": [
      "error",
      {
        arrays: "only-multiline",
        objects: "only-multiline",
        functions: "never"
      }
    ],
    "func-call-spacing": ["error", "never"],
    "no-console": ["off"],
    "lodash/prefer-lodash-method": [
      2,
      {
        ignoreObjects: ["window", "location", "$" ],
        ignorePatterns: []
      }
    ],
    "lodash/prefer-filter": ["off"]
  },
  globals: {
    $: false
  },
  overrides: [
    {
      files: ["service/**/*.js", "app.js"],
      rules: {
        "lodash/import-scope": ["off"],
        quotes: [
          2,
          "single",
          { avoidEscape: true, allowTemplateLiterals: true }
        ],
        semi: ["error", "never"]
      }
    }
  ]
};
