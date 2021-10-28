# TypeScript bundling for the web

Minimal TypeScript bundling to run on a modern web browser.

Features:

-   It uses `ESNext` as the [module system](https://www.typescriptlang.org/tsconfig#module) mode and the target code.
-   Uses [rollup](https://rollupjs.org/guide/en/) to bundle the code together.

---

## Setup required to run the project

```shell
$ npm install --global typescript   # can also be --save-dev
$ npm install --global rollup       # --save-dev
$ npm install --global live-server  # --save-dev
$ tsc --init
```

For more information on the specific settings of each tool, see:

-   [tsconfig.json](./tsconfig.json)
-   [package.json](./package.json)
-   [rollup.config.js](./rollup.config.js)

---

## Test our code

```shell
# From the project's root directory, run:
$ npm run DIST   # create our dist folder
$ npm run SERVE  # open the project on the web browser
```
