//npm i html-webpack-plugin- need this to run html through webpack
const HtmlWebpackPlugin = require('html-webpack-plugin');//keep before pwa manifest
//npm i webpack-pwa-manifest
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
//npm i workbox-webpack-plugin--did ths
const { GenerateSW, InjectManifest } = require('workbox-webpack-plugin');

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
      //HtmlWebpackPlugin-doesnt need configuration-I do not get a dist/html file when i run npm run build
      new HtmlWebpackPlugin({
        title:"JATE text editor",
        template:'./index.html'
      }),
      new WebpackPwaManifest({
        ////?????do i need this next two lines?????????
        // fingerprints: false,
        // inject: true,
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
      new MiniCssExtractPlugin({
        filename:'styles.min.css'
      }),
      //npm i workbox-webpack-plugin--didnt do this yet!!!!!!!!!!!!
      //const { InjectManifest } = require('workbox-webpack-plugin')
      new InjectManifest({
        // These are some common options, and not all are required.
        // Consult the docs for more info.
        exclude: [/.../, '...'],
        maximumFileSizeToCacheInBytes: ...,
        swSrc: '...',
      }),
       //npm i workbox-webpack-plugin--didnt do this yet!!!!!!!!!!!!
      //const { InjectManifest } = require('workbox-webpack-plugin')
      
    ],

    module: {
      rules: [
        //use css-loader
        {
          test:/\.css$/i,
          use:['style-loader','css-loader'],
        },
        //rule for including images-wont show logo!   
        {
          test:/(\.(png|jpg|jpeg|svg|gif))$/i,
          type:'asset/resource',
        },
        //DO I NEED RULES FOR InjectManifest , WebpackPwaManifest, HtmlWebpackPlugin??????????????????
      ],
    },
    devServer:{
      static: __dirname,
      hot:true,
    },
  };
};


//HOT MODEL RELOADER DOESNT WORK