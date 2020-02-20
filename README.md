# gatsby-plugin-react-axe

Gatsby plugin that integrates [react-axe][react-axe] for a11y testing

## Install

`npm install --save gatsby-plugin-react-axe`

## How to use

```js
// gatsby-config.js

module.exports = {
  plugins: [
    // This plugin should only appear in your gatsby-config.js file once.
    //
    // All options are optional.
    {
      resolve: 'gatsby-plugin-react-axe',
      options: {
        // Integrate react-axe in production. This defaults to false.
        showInProduction: false,

        // Options to pass to axe-core.
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
        axeOptions: {
          // Your axe-core options.
        },
        // Context to pass to axe-core.
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#context-parameter
        axeContext: {
          // Your axe-core context.
        }
      },
    },
  ],
}
```

Once added to your `gatsby-config.js`, react-axe will begin printing a11y
warnings to your browser's console.

[react-axe]: https://github.com/dequelabs/react-axe
