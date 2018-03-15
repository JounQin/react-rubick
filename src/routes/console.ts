import { ExtendedRouteConfig } from 'types'

export default {
  path: 'console',
  component: () => import('Console'),
} as ExtendedRouteConfig
