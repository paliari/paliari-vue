# paliari-vue

[![npm](https://img.shields.io/npm/v/paliari-vue.svg)](https://www.npmjs.com/package/paliari-vue) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

## Installation

```bash
yarn add paliari-vue
```

## Demo

[DEMO](http://paliari.github.io/paliari-vue)

## Usage (Webpack)

```js
import Vue from 'vue'
import Vuex from 'vuex'

import PaliariVue from 'paliari-vue'

// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'paliari-vue/dist/paliari-vue.css'

Vue.use(PaliariVue, { Vuex })
```

## Development

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Compiles and minifies DEMO for production

```
yarn build:demo
```

### Runs build and build:demo

```
yarn release
```

### Run your unit tests

```
yarn test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
