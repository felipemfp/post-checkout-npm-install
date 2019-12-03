# post-checkout-npm-install

[<img alt="npm version" src="https://img.shields.io/npm/v/post-checkout-npm-install.svg" height="20">](https://www.npmjs.com/package/post-checkout-npm-install)
[<img alt="build status" src="https://img.shields.io/travis/felipemfp/post-checkout-npm-install.svg" height="20">](https://travis-ci.org/felipemfp/post-checkout-npm-install)

[post-checkout-npm-install] runs `npm install` when package.json dependencies have
changed post-merge or post-rebase.

```sh
npm install post-checkout-npm-install --save-dev
```

## Husky Usage

[husky] makes git hooks easy.

```js
// package.json
{
  "husky": {
    "hooks": {
      "post-checkout": "post-checkout-npm-install",
    }
  }
}
```

## Node Usage

```js
const postNpmInstall = require("post-checkout-npm-install");

postNpmInstall([previousHead, newHead, isBranchCheckout], useCI);
```

[husky]: https://github.com/typicode/husky
[post-checkout-npm-install]: https://github.com/felipemfp/post-checkout-npm-install
