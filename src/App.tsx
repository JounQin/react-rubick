import React from 'react'
import { Redirect } from 'react-router'
import { RouteConfig, renderRoutes } from 'react-router-config'

import { resolve } from 'utils'

const redirect = (path: string) => () => <Redirect to={path} />

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: redirect('/landing'),
  },
  {
    path: '/landing',
    component: resolve(() => import('Landing')),
    routes: [
      {
        path: '/landing',
        exact: true,
        component: redirect('/landing/login'),
      },
      {
        path: '/landing/login',
        component: resolve(() => import('Landing/Login')),
      },
    ],
  },
  {
    path: '/console',
    component: resolve(() => import('Console')),
  },
]

const App = () => renderRoutes(routes)

export default App
