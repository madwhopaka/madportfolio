module.exports = {
  parser: "@babel/eslint-parser", // Use Babel parser for parsing JavaScript files
  parserOptions: {
    ecmaVersion: 2022, // Use ECMAScript 2022 syntax
    sourceType: "module", // Use module syntax (use 'script' if you're not using ES modules)
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
  },
  env: {
    browser: true, // Enable browser global variables
    node: true, // Enable Node.js global variables and Node.js scoping
    es2021: true, // Enable all ECMAScript 2021 globals and automatically set the ecmaVersion parser option to 12
  },
  extends: ["eslint:recommended", "plugin:react/recommended"], // Use recommended eslint rules and react rules
  plugins: ["react"], // Enable React specific linting rules
  rules: {
    // Define custom rules here
    // Example: 'react/prop-types': 'off', // Turn off prop-types validation
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the version of React to use
    },
  },
};
