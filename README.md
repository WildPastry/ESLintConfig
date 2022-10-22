# ESLintConfig
Shareable ESLint configuration settings. No errors, only warnings.

## Prerequisites
- Navigate to the root directory of your project

## Installation and usage

### Install eslint and prettier
```
npm i eslint@latest prettier@latest
```

### Install eslint and plugins
```
npm i @typescript-eslint/eslint-plugin@latest eslint-plugin-react@latest eslint-plugin-prettier@latest
```

### Install eslint config
```
npm i @wildpastry/eslint-config@latest
```

### Create .eslintrc
```
create new .eslintrc file
```

### Add config to .eslintrc
```
add { "extends": "@wildpastry/eslint-config" } into .eslintrc and save
```

### Add these optional scripts to package.json
```
"scripts": {
  "lint": "eslint \"**/*.{js,jsx,ts,tsx}\"",
  "lint:fix": "eslint --fix \"**/*.{js,jsx,ts,tsx}\""
  "format": "npx prettier --check \"**/*.{js,jsx,ts,tsx}\"",
  "format:fix": "npx prettier --write \"**/*.{js,jsx,ts,tsx}\"",
  "clean": "npx prettier --write \"**/*.{js,jsx,ts,tsx}\" && npm run lint:fix"
}
```
