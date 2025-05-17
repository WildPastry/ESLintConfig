# ESLintConfig
Shareable ESLint configuration settings linked with Prettier. ESLint formatting rules are disabled, then re-enabled through the eslint-prettier plugin. This way the formatting rules still get applied and Prettier formatting won't conflict with ESLint linting.

No errors, only warnings.

## Prerequisites
- NodeJS and NPM installed
- Project set up with NodeJS and a package.json
- Official ESLint and Prettier extensions installed
- Navigate to the root directory of your project

## Installation and usage

### Install eslint and prettier core packages
```
npm i eslint@latest prettier@latest
```

### Install eslint plugins
```
npm i @typescript-eslint/eslint-plugin@latest eslint-plugin-react@latest eslint-plugin-prettier@latest
```

### Install @wildpastry custom eslint config
```
npm i @wildpastry/eslint-config@latest
```

### Add config to eslint.config.js and save
```
import wildpastryConfig from '@wildpastry/eslint-config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended']
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser }
  },
  ...wildpastryConfig
]);
```

### Add these optional scripts to package.json inside "scripts": { ... }
These scripts will check/fix linting and formatting. Not everything can be automatically fixed.
```
  "lint": "eslint \"**/*.{js,jsx,ts,tsx}\"",
  "lint:fix": "eslint --fix \"**/*.{js,jsx,ts,tsx}\"",
  "format": "npx prettier --check \"**/*.{js,jsx,ts,tsx}\"",
  "format:fix": "npx prettier --write \"**/*.{js,jsx,ts,tsx}\"",
  "clean": "npx prettier --write \"**/*.{js,jsx,ts,tsx}\" && npm run lint:fix"
```
