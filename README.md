# Take home test Era Daya Potensia

This is for take home test for Era Daya Potensia interview using Vue 3 + Tailwind + Flowbite

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Add Environment Variables

```sh
cp .env.example .env
```

## Project Setup

```sh
yarn or yarn install
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```

### Folder Structure

```
    /src
        /assets
        /components
        /composables
        /routes
        /store
        views
```

```js
/**
 * @description Some function
 *
 * @param {string} string
 *
 * @return {string} string
 */
const func = (string = "") => {
  return string;
};
```

Comment menggunakan dokumentasi dari plain javascript [https://javascript.info/comments](resource)

#### Dependencies & Libraries

| Library    | Description      |
| ---------- | ---------------- |
| vue-router | Router           |
| Tailwind   | UI Library       |
| pinia      | State Management |
| axios      | Http Client      |
