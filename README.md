<div align="center">
  <h1>Storybook Addon Data Theme Switcher</h1>
</div>

<div align="center">

<a href="https://github.com/paulbuechner/storybook-addon-data-theme-switcher">
<img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/paulbuechner/storybook-addon-data-theme-switcher/Release?label=Release&logo=github">
</a>
<a href="https://www.npmjs.com/package/storybook-addon-data-theme-switcher">
<img alt="npm" src="https://img.shields.io/npm/v/storybook-addon-data-theme-switcher?logo=npm">
</a>
<a href="https://www.npmjs.com/package/storybook-addon-data-theme-switcher">
<img alt="NPM" src="https://img.shields.io/npm/l/storybook-addon-data-theme-switcher">
</a>
<a href="https://github.com/intuit/auto">
<img alt="Auto Release" src="https://img.shields.io/badge/release-auto.svg?colorA=888888&colorB=9B065A&label=auto&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACzElEQVR4AYXBW2iVBQAA4O+/nLlLO9NM7JSXasko2ASZMaKyhRKEDH2ohxHVWy6EiIiiLOgiZG9CtdgG0VNQoJEXRogVgZYylI1skiKVITPTTtnv3M7+v8UvnG3M+r7APLIRxStn69qzqeBBrMYyBDiL4SD0VeFmRwtrkrI5IjP0F7rjzrSjvbTqwubiLZffySrhRrSghBJa8EBYY0NyLJt8bDBOtzbEY72TldQ1kRm6otana8JK3/kzN/3V/NBPU6HsNnNlZAz/ukOalb0RBJKeQnykd7LiX5Fp/YXuQlfUuhXbg8Di5GL9jbXFq/tLa86PpxPhAPrwCYaiorS8L/uuPJh1hZFbcR8mewrx0d7JShr3F7pNW4vX0GRakKWVk7taDq7uPvFWw8YkMcPVb+vfvfRZ1i7zqFwjtmFouL72y6C/0L0Ie3GvaQXRyYVB3YZNE32/+A/D9bVLcRB3yw3hkRCdaDUtFl6Ykr20aaLvKoqIXUdbMj6GFzAmdxfWx9iIRrkDr1f27cFONGMUo/gRI/jNbIMYxJOoR1cY0OGaVPb5z9mlKbyJP/EsdmIXvsFmM7Ql42nEblX3xI1BbYbTkXCqRnxUbgzPo4T7sQBNeBG7zbAiDI8nWfZDhQWYCG4PFr+HMBQ6l5VPJybeRyJXwsdYJ/cRnlJV0yB4ZlUYtFQIkMZnst8fRrPcKezHCblz2IInMIkPzbbyb9mW42nWInc2xmE0y61AJ06oGsXL5rcOK1UdCbEXiVwNXsEy/6+EbaiVG8eeEAfxvaoSBnCH61uOD7BS1Ul8ESHBKWxCrdyd6EYNKihgEVrwOAbQruoytuBYIFfAc3gVN6iawhjKyNCEpYhVJXgbOzARyaU4hCtYizq5EI1YgiUoIlT1B7ZjByqmRWYbwtdYjoWoN7+LOIQefIqKawLzK6ID69GGpQgwhhEcwGGUzfEPAiPqsCXadFsAAAAASUVORK5CYII=">
</a>

</div>

<div align="center">
  <p>A lightweight Storybook addon to switch data-theme attribute</p>
</div>

This Addon lets you switch the `data-theme` attribute in your Storybook, by
selecting a defined theme from a toolbar dropdown and adding the selected theme
to the `data-theme` attribute of storybooks iframe html element.

This comes in handy if you want to test your components with different themes.

## Compatibility

This addon is compatible with storybook version `^7.0.x`.

## Installation

```shell
npm install storybook-addon-data-theme-switcher --save-dev
```

## Getting Started

Then activate the addon by adding it to the storybook `main.js` file 
(located in the Storybook config directory):

```javascript
module.exports = {
  addons: [
    // other addons here
    "storybook-addon-data-theme-switcher",
  ],
};
```

## Configuration

The addon makes use of storybooks `globalTypes` to define and load the themes.

To define a selection of themes, you can add the following to your global
storybook configuration file `preview.js`:

```javascript
export const globalTypes = {
  dataThemes: {
    defaultValue: {
      list: [
        { name: "Rainforest", dataTheme: "rainforest", color: "#00755e" },
        { name: "Candy", dataTheme: "candy", color: "#ffb7d5" },
        { name: "Rose", dataTheme: "rose", color: "#ff007f" },
      ],
    },
  },
};
```

To set a default `data-theme` value, which will be used in the initial load of
the storybook, you can add the following to your `preview.js` file:

```javascript
export const globalTypes = {
  dataTheme: {
    defaultValue: "rainforest",
  },
};
```

> **Note:** Make sure to match the `dataTheme` default value with one of the
> defined themes in the `list` array.

# License

This project is licensed under the [MIT License](LICENSE)
