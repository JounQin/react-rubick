import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration } from 'webpack'

import { __DEV__, NODE_ENV, resolve, serverHost, serverPort } from './config'

const config: Configuration = {
  mode: NODE_ENV,
  entry: {
    app: [resolve('src/index.tsx')],
  },
  output: {
    path: resolve('dist'),
    publicPath: `http://${serverHost}:${serverPort}`,
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
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      minify: {
        collapseWhitespace: !__DEV__,
      },
    }),
  ],
}

export default config
