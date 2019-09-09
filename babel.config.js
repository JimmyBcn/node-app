module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'Chrome >= 49',
            'Edge >= 16',
            'IE >= 11',
            'Safari >= 10',
            'Firefox >= 60',
            'iOS >= 10',
            'ChromeAndroid >= 71',
            'Samsung >= 9.2',
          ],
        },
        useBuiltIns: 'usage',
        corejs: 2
      },
    ]
  ],
  plugins: ["add-module-exports"],
};
