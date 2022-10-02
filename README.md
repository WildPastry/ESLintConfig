# ESLintConfig

Shareable ESLint configuration settings. No errors, only warnings.

## Prerequisites

- Install the official ESLint extension in your IDE
- Navigate to the root directory of your project

## Installation and usage

### Install eslint and plugins

```
npm(or yarn) i eslint@latest
npm(or yarn) i @typescript-eslint/eslint-plugin
npm(or yarn) i eslint-plugin-react
```
### Install eslint config

```
npm(or yarn) i @wildpastry/eslint-config@latest
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