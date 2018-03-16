import { ExtendedRouteConfig } from 'types'

export default {
  path: 'console',
  exact: false,
  component: () => import('views/Console'),
  routes: [
    {
      path: '',
      redirect: 'dashboard',
    },
    {
      path: 'dashboard',
      component: () => import('views/Dashboard'),
    },
  ],
} as ExtendedRouteConfig
