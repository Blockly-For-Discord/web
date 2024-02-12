const path = require('path');

module.exports = {
  entry: {
    BlocklyCompressed: './webpack/webpack-blockly.js',
    BlocklyJS: './webpack/webpack-generator.js',
    ToasitfyJS: './webpack/webpack-toastify.js',
  },
  output: {
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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    modules: ['node_modules']
  }
};
