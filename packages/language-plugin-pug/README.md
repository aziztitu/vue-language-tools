A `VueLanguagePlugin` to support `<template lang="pug">` for `@azee/vue-language-server`.

## Usage

1. Install

   `$ npm i -D @azee/vue-language-plugin-pug`

2. Add to `tsconfig.json`

   ```jsonc
   {
     "vueCompilerOptions": {
       "plugins": ["@azee/vue-language-plugin-pug"]
     }
   }
   ```
