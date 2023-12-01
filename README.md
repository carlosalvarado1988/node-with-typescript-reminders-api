# Node with Typescript

- Node does not understand typescript declaration.
- you need to transpile the code.
- you can do it manually with tsc index.ts --> then node index.js
- you can use a node package name: TS-node.
  - `npm init -y` (add a package.json)
  - `npm i -D ts-node` (installs the package as a dev dependency)
    - you add the comand `"start": "ts-node index.ts"` which runs the compilation first and then node over the js file.
    - test it with `npm start`
- NOTE: ts-node was failing to find typescript module, even installed globally.
  - you have to link typescript to the project: `npm link typescript`
  - in some other location, npm link package-name will create a symbolic link from globally-installed package-name to node_modules/ of the current folder.
    - Note that package-name is taken from package.json, not from the directory name.
    - read more: [https://docs.npmjs.com/cli/v8/commands/npm-link](https://docs.npmjs.com/cli/v8/commands/npm-link)

## Setting up an Express Project with Typescript

- `npm i express`
- `npm i -D typescript @types/node @types/express`
- `npm i -D nodemon`

#### Create a Typescript compiler configuration file

- `tsc --init`
