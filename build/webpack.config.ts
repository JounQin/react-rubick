import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack, { Configuration } from 'webpack'

import {
  NODE_ENV,
  ROUTE_BASE,
  __DEV__,
  resolve,
  serverHost,
  serverPort,
} from './config'

const config: Configuration = {
  mode: NODE_ENV,
  entry: {
    app: [resolve('src/index.tsx')],
  },
  output: {
    path: resolve('dist'),
    publicPath:
      (__DEV__ ? `http://${serverHost}:${serverPort}` : ROUTE_BASE) + '/',
    filename: `[name].[${__DEV__ ? 'hash' : 'chunkhash'}].js`,
  },
  resolve: {
    modules: [resolve('src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      name: 'vendors',
      chunks: 'initial',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      ROUTE_BASE: JSON.stringify(ROUTE_BASE),
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      minify: {
        collapseWhitespace: !__DEV__,
      },
    }),
  ],
}

export default config
