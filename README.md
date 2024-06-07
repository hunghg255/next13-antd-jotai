# Nextjs + Ant Design V5 + Jotai + i18n

## Getting Started

First, run the development server:

```bash
# Install package
npm install or yarn

# Run
npm run dev or yarn dev
```

## Gen Color

1. Update color to `styles/color-preview.json`

- Add value
  Example:

```js
{
   Light: {
     primary: {
       "8": '#FF0000',
     }
   }
}
```

## Gen Font

```js
1. Copy file svg to `public/svgIcon`
2. Run command: `npm run gen-icon`
3. Check component `Icon` in `src/components/UI/Icon/Icon.tsx`
```

More: Install extenstion to preview icon: [Icon-Preivew](https://marketplace.visualstudio.com/items?itemName=hunghg255.iconify-preview)

## Commit Convention

[commit-convention](.github/commit-convention.md)

## Library Docs

```md
1. Framework Nextjs: https://nextjs.org/

2. State management Reactjs: https://jotai.org/

3. Library UI: https://ant.design

4. Library for request api: https://www.npmjs.com/package/umi-request

5. Library Multiple Language: https://www.npmjs.com/package/next-i18next

6. Library Hooks popular: https://ahooks.js.org/

7. Library dayjs: https://day.js.org/

8. Processing CSS: https://sass-lang.com/guide
```
