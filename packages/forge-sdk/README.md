# [**@arcblock/forge-sdk**](https://github.com/arcblock/forge-js)

[![build status](https://img.shields.io/travis/ArcBlock/forge-js.svg)](https://travis-ci.org/ArcBlock/forge-js)
[![code coverage](https://img.shields.io/codecov/c/github/ArcBlock/forge-js.svg)](https://codecov.io/gh/ArcBlock/forge-js)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/github/license/ArcBlock/forge-js.svg)](LICENSE)

> Node.js SDK for Forge Framework by ArcBlock


## Table of Contents

- [**@arcblock/forge-sdk**](#arcblockforge-sdk)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
    - [0. Make sure you get forge installed](#0-make-sure-you-get-forge-installed)
    - [1. Prepare Example App](#1-prepare-example-app)
    - [2. Call Rpc](#2-call-rpc)
  - [Documentation](#documentation)
  - [Contributors](#contributors)
  - [License](#license)


## Install

```sh
npm install @arcblock/forge-sdk
// or
yarn add @arcblock/forge-sdk
```


## Usage

### 0. Make sure you get forge installed

**This step is required**

### 1. Prepare Example App

Checkout our [examples](../../examples) folder

### 2. Call Rpc

```js
const { RpcClient, parseConfig } = require('@arcblock/forge-sdk');

const client = new RpcClient(parseConfig('./forge.toml'));
(async () => {
  // fetch forge change info
  const { info } = await client.getChainInfo();
  console.log('chainInfo', info);

  // get block info
  const stream = client.getBlock({ height: 11 });
  stream
    .on('data', function({ block }) {
      console.log('blockInfo:', block);
    })
    .on('error', err => {
      console.error('error', err);
    });
})();
```


## Documentation

For complete API documentation please refer [API.md](./API.md)


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |

* [wangshijun](https://github.com/wangshijun)


## License

[MIT](LICENSE) © [wangshijun](https://ocap.arcblock.io)