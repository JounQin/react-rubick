import koaWebpack from 'koa-webpack'

import config from '../build/webpack.config'

export default koaWebpack({
  config,
})
