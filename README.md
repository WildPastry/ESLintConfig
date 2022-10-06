# ESLintConfig
Shareable ESLint configuration settings. No errors, only warnings.

## Prerequisites
- Navigate to the root directory of your project

## Installation and usage

### Install eslint and plugins
```
npm i eslint@latest
npm i @typescript-eslint/eslint-plugin
npm i eslint-plugin-react
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
add { "extends": "@wildpastry/eslint-config" }
```

### Add scripts to package.json
```
"scripts": {
  "lint": "eslint \"**/*.{js,jsx,ts,tsx}\"",
  "lint:fix": "eslint --fix \"**/*.{js,jsx,ts,tsx}\""
}
```
