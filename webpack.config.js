const path = require('path');

module.exports = {
  entry: {
    BlocklyCompressed: './webpack/webpack-blockly.js',
    BlocklyJS: './webpack/webpack-generator.js',
  },
  output: {
    libary: 'Blockly',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './components/webpack'),
    filename: '[name].bundle.js', 
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules']
  }
};
