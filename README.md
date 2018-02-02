# eslint-config-iddqd

## Basic usage 

Install 

`npm install eslint eslint-config-iddqd`

And add new section to the `package.json`:  

```json
"eslintConfig": {
  "extends": "iddqd/base"
}
```

## Usage for ES6+ projects

Install 

`npm install eslint eslint-config-iddqd`

And add new section to the `package.json`:  

```json
"eslintConfig": {
  "extends": "iddqd/es6"
}
```

## Usage for Node.js 8+ projects

Install 

`npm install eslint eslint-config-iddqd babel-eslint`

And add new section to the `package.json`:  

```json
"eslintConfig": {
  "extends": "iddqd/node",
  "parser": "babel-eslint"
}
```

If you use object spread (added in Node.js 8.7+), you can add follow lines

```diff
"eslintConfig": {
  "extends": "iddqd/node",
  "parser": "babel-eslint",
+ "parserOptions": {
+   "ecmaVersion": 2017,
+   "ecmaFeatures": {
+     "experimentalObjectRestSpread": true
+   }
+ }
}
```

## Usage for React projects

Install 

```sh
npm install eslint eslint-config-iddqd eslint-plugin-react eslint-plugin-import babel-eslint
```

And add new section to the `package.json`:  

```json
"eslintConfig": {
  "extends": "iddqd/react",
  "parser": "babel-eslint"
}
```

## Usage for React projects with re-ordering of React component methods

Install 

```sh
npm install eslint eslint-config-iddqd eslint-plugin-react eslint-plugin-import jscodeshift react-codemod
```

And add new sections to the `package.json`:  

```json
"scripts": {
    "sort-comp": "jscodeshift -t node_modules/react-codemod/transforms/sort-comp.js <path_to_components>"
},
"eslintConfig": {
  "extends": "iddqd/react",
  "parser": "babel-eslint",
  "rules": {
    "react/sort-comp": 2
  }
}
```
