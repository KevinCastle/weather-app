https://dev.to/nikhilkumaran/don-t-use-create-react-app-how-you-can-set-up-your-own-reactjs-boilerplate-43l0

npm init --y
git init

code .gitignore:
    node_modules
    build

npm install react react-dom --save

npm install @babel/core @babel/preset-env @babel/preset-react --save-dev 

code .babelrc:
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}

npm install webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin --save-dev 


code webpack.config.js:

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};


