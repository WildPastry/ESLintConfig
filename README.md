# ESLintConfig

Shareable ESLint configuration settings linked with Prettier. ESLint formatting rules are disabled, then re-enabled through the eslint-prettier plugin. This way the formatting rules still get applied and Prettier formatting won't conflict with ESLint linting.

No errors, only warnings.

## Prerequisites

- NodeJS and NPM installed
- Project set up with NodeJS and a package.json
- Official ESLint and Prettier extensions installed
- Navigate to the root directory of your project

## Installation and Usage

### 1. Install ESLint and Prettier core packages

```bash
npm i eslint@latest prettier@latest
```

### 2. Install ESLint plugins

```bash
npm i @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint-plugin-react@latest eslint-plugin-prettier@latest
```

### 3. Install @wildpastry custom ESLint config

```bash
npm i @wildpastry/eslint-config@latest
```

### 4. Create .prettierrc file

Create a `.prettierrc` file in your project root:

```json
{
  "arrowParens": "always",
  "bracketSameLine": true,
  "bracketSpacing": true,
  "embeddedLanguageFormatting": "auto",
  "endOfLine": "auto",
  "htmlWhitespaceSensitivity": "strict",
  "insertPragma": false,
  "jsxSingleQuote": true,
  "printWidth": 80,
  "proseWrap": "preserve",
  "quoteProps": "consistent",
  "requirePragma": false,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "useTabs": false
}
```

### 5. Add config to eslint.config.js

Create an `eslint.config.js` file in your project root:

```javascript
import { defineConfig, globalIgnores } from 'eslint/config';
import wildpastryConfig from '@wildpastry/eslint-config';

export default defineConfig([
  globalIgnores(['dist']),
  ...wildpastryConfig,
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // All other recommended here
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    }
  }
]);
```

### 6. Add TypeScript declaration (if needed)

If using TypeScript, create a `types/wildpastry-eslint-config.d.ts` file:

```typescript
declare module '@wildpastry/eslint-config';
```

### 7. Add optional scripts to package.json

Add these scripts inside `"scripts": { ... }` in your package.json:

```json
{
  "scripts": {
    "lint": "eslint \"**/*.{js,jsx,ts,tsx}\"",
    "lint:fix": "eslint --fix \"**/*.{js,jsx,ts,tsx}\"",
    "format": "npx prettier --check \"**/*.{js,jsx,ts,tsx}\"",
    "format:fix": "npx prettier --write \"**/*.{js,jsx,ts,tsx}\"",
    "clean": "npx prettier --write \"**/*.{js,jsx,ts,tsx}\" && npm run lint:fix"
  }
}
```

## Usage Commands

### Check linting issues:
```bash
npm run lint
```

### Fix linting issues automatically:
```bash
npm run lint:fix
```

### Check formatting issues:
```bash
npm run format
```

### Fix formatting issues automatically:
```bash
npm run format:fix
```

### Clean and fix both formatting and linting:
```bash
npm run clean
```

## Features

- Modern ESLint flat config format
- TypeScript support with modern rules
- React 17+ support (no React import required)
- Prettier integration for consistent formatting
- Warnings only (no errors) for better development experience
- Optimized for modern JavaScript/TypeScript practices
