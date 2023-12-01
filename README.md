# Node with Typescript

- Node does not understand typescript declaration.
- you need to transpile the code.
- you can do it manually with tsc index.ts --> then node index.js
- you can use a node package name: TS-node.
  - `npm init -y` (add a package.json)
  - `npm i -D ts-node` (installs the package as a dev dependency)
    - you add the comand `"start": "ts-node index.ts"` which runs the compilation first and then node over the js file.
    - test it with `npm start`
