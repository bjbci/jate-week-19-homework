//npm i html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');//keep before pwa manifest
//npm i webpack-pwa-manifest
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
//npm i workbox-webpack-plugin--didnt do this yet!!!!!!!!!!!!
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
   
    entry: {
      main: './src/js/index.js',
       install: './src/js/install.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin(),//doesnt need configuration
      new WebpackPwaManifest({
        name: 'Just Another Text Editor',
        short_name: 'Jate',
        description: 'My awesome Progressive Web App!',
        background_color: '#ffffff',
        crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
        icons: [
          {
            src: path.resolve('src/images/logo.png'),// images-logo.png
            sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
          },
         
        ]
      }),
      //npm i workbox-webpack-plugin--didnt do this yet!!!!!!!!!!!!
      //const { InjectManifest } = require('workbox-webpack-plugin')
      new InjectManifest(),
       //npm i workbox-webpack-plugin--didnt do this yet!!!!!!!!!!!!
      //const { InjectManifest } = require('workbox-webpack-plugin')
      
    ],

    module: {
      rules: [
        //use css-loader
        {
          test:/\.css$/i,
          use:['css-loader'],
        },
        //rule for including images-wont show logo!   
        {
          test:/(\.(png|jpg|jpeg|svg|gif))$/i,
          type:'asset/resource',
        },
      ],
    },
  };
};
