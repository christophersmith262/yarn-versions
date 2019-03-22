# yarn-versions

[![Build Status](https://travis-ci.org/christophersmith262/yarn-versions.svg?branch=master)](https://travis-ci.org/christophersmith262/yarn-versions)
[![Coverage Status](https://coveralls.io/repos/github/christophersmith262/yarn-versions/badge.svg?branch=master)](https://coveralls.io/github/christophersmith262/yarn-versions?branch=master)
[![npm version](https://img.shields.io/npm/v/yarn-versions.svg?style=flat)](https://www.npmjs.com/package/yarn-versions)
[![Greenkeeper badge](https://badges.greenkeeper.io/christophersmith262/yarn-versions.svg)](https://greenkeeper.io/)

Build a list of pinned dependencies from a yarn managed project.

## Install yarn-versions:

With `npm`:

```
npm i --save yarn-versions
```

Or `yarn`:

```
yarn add yarn-versions
```

## Example

```
./node_modules/.bin/yarn-versions https://raw.githubusercontent.com/christophersmith262/yarn-versions/master/yarn.lock
```

Will give you:

```
{
    "@babel/code-frame": {
        "7.0.0": "https://registry.yarnpkg.com/@babel/code-frame/-/code-frame-7.0.0.tgz#06e2ab19bdb535385559aabb5ba59729482800f8"
    },
    "@babel/core": {
        "7.4.0": "https://registry.yarnpkg.com/@babel/core/-/core-7.4.0.tgz#248fd6874b7d755010bfe61f557461d4f446d9e9"
    },
    "@babel/generator": {
        "7.4.0": "https://registry.yarnpkg.com/@babel/generator/-/generator-7.4.0.tgz#c230e79589ae7a729fd4631b9ded4dc220418196"
    },
    "@babel/helper-function-name": {
        "7.1.0": "https://registry.yarnpkg.com/@babel/helper-function-name/-/helper-function-name-7.1.0.tgz#a0ceb01685f73355d4360c1247f582bfafc8ff53"
    },
    "@babel/helper-get-function-arity": {
        "7.0.0": "https://registry.yarnpkg.com/@babel/helper-get-function-arity/-/helper-get-function-arity-7.0.0.tgz#83572d4320e2a4657263734113c42868b64e49c3"
    },
    ...
    "yargs": {
        "12.0.5": "https://registry.yarnpkg.com/yargs/-/yargs-12.0.5.tgz#05f5997b609647b64f66b81e3b4b10a368e7ad13"
    }
}

```

Each entry at the top level contains a package name mapped to a key value pair of versions mapped to their specific tarballs, giving you the exact versions of each package that the project depends on.

***Note*** that since multiple versions of a package may be installed based on a dependency tree, there may be more than one entry for each package.
