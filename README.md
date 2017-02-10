PaliariVue
==========

[![npm](https://img.shields.io/npm/v/paliari-vue.svg)](https://www.npmjs.com/package/paliari-vue) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> A Vue.js Plugin

Installation
------------

```bash
npm install --save paliari-vue
yarn add paliari-vue
```

Usage
-----

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import PaliariVue from 'paliari-vue/src/index'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader

Vue.use(PaliariVue)
```

### Browser

```html
<!--
@TODO implement in feature
Include after Vue
-->
<link rel="stylesheet" href="paliari-vue/dist/paliari-vue.css"></link>
<script src="paliari-vue/dist/paliari-vue.js"></script>
```

Development
-----------

### Launch visual tests

```bash
npm run dev
```

### Launch Karma with coverage

```bash
npm run dev:coverage
```

### Build

Bundle the js and css of to the `dist` folder:

```bash
npm run build
```

License
-------

[MIT](http://opensource.org/licenses/MIT)

paliari-vue
===========
