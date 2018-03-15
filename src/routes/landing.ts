import { ExtendedRouteConfig } from 'types'

export default {
  path: 'landing',
  component: () => import('Landing'),
  routes: [
    {
      path: '',
      exact: true,
      redirect: 'login',
    },
    {
      path: 'login',
      exact: true,
      component: () => import('Landing/Login'),
    },
  ],
} as ExtendedRouteConfig
