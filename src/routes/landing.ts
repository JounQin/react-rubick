import { last } from 'lodash'
import { BreadCrumb, ExtendedRouteConfig } from 'types'

export default {
  path: 'landing',
  exact: false,
  component: () => import('views/Landing'),
  routes: [
    {
      path: '',
      redirect: 'login',
    },
    {
      path: '/login/:type(account)?',
      component: () => import('views/Landing/Login'),
      location: {
        state: {
          breadCrumb: ({
            breadCrumbs,
            params: { type },
          }: {
            breadCrumbs: BreadCrumb[]
            params: { type: void | 'account' }
          }) => {
            last(breadCrumbs).label = (type ? 'account' : 'user') + '_login'
            return breadCrumbs
          },
        },
      },
    },
  ],
} as ExtendedRouteConfig
