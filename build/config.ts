import path from 'path'

export const resolve = (...args: string[]) =>
  path.resolve(process.cwd(), ...args)

export const serverHost = process.env.HOST || 'localhost'

export const serverPort = +process.env.PORT || 4000

const DEV = 'development'
const PROD = 'production'

type NodeEnv = typeof DEV | typeof PROD

export const NODE_ENV = (process.env.NODE_ENV as NodeEnv) || 'production'

export const __DEV__ = NODE_ENV === DEV

export const ROUTE_BASE = process.env.ROUTE_BASE || ''
