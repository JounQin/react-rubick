import _debug from 'debug'
import Koa, { Middleware } from 'koa'
import compose from 'koa-compose'

import { serverHost, serverPort } from '../build/config'

const debug = _debug('rubick:server')

const app = new Koa()

const middlewares: Middleware[] = [
  (ctx, next) => {
    if (
      ctx.method === 'GET' &&
      ctx.accept.type('html') &&
      !ctx.url
        .split('/')
        .reverse()[0]
        .includes('.')
    ) {
      ctx.url = '/index.html'
    }

    return next()
  },
]

if (process.env.NODE_ENV === 'development') {
  // tslint:disable-next-line:no-var-requires
  middlewares.push(require('./dev').default)
}

app.use(compose(middlewares))

app.listen(serverPort, serverHost, () =>
  debug('Server is listening at %s:%d', serverHost, serverPort),
)
