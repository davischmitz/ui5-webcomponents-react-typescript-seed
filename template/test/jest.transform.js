module.exports = require('babel-jest').createTransformer({
  presets: ['babel-preset-react-app', ['@babel/preset-env', { modules: 'commonjs' }]],
  plugins: ['transform-class-properties', '@babel/plugin-proposal-optional-chaining'],
});
