const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    loaders: [
      "style-loader",
      "css-loader",
      "sass-loader"
    ],
    include: path.resolve(__dirname, "../"),
    sideEffects: true,
  });
  config.module.rules.push({
    test: /story\.js?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });
  config.module.rules.push({
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: "file-loader"
  });
  config.externals = {
    ...config.externals,
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true
  };
  config.node = { fs: 'empty', net: 'empty', tls: 'empty' };
  config.resolve.extensions.push('.scss');
  return config;
};
