module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-aspect-ratio-mini': {},
    'postcss-pxtorem': {
      rootValue: 75,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 6
    }
  }
}
