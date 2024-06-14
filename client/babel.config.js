
module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current',
      },
      useBuiltIns: 'usage',
      corejs: 3,
    }],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  pplugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ['@babel/plugin-proposal-class-properties'],
  ],
};