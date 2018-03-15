import React from 'react'
import { Redirect } from 'react-router'
import { RouteConfig } from 'react-router-config'

import { AsyncComponent, ExtendedRouteConfig } from 'types'
import { resolve } from 'utils'

import console from './console'
import landing from './landing'

const redirect = (path: string) => () => <Redirect to={path} />

const routeConfigs: ExtendedRouteConfig[] = [
  {
    path: '/',
    exact: true,
    redirect: '/landing',
  },
  landing,
  console,
]

const buildRoutes = (routes: ExtendedRouteConfig[], path = '') =>
  routes.map(route => {
    route = { ...route }
    let routePath = route.path
    routePath = route.path =
      path +
      (!routePath || routePath.startsWith('/') ? routePath : '/' + routePath)
    if (route.routes) {
      route.routes = buildRoutes(route.routes, routePath)
    }
    const { redirect: to } = route
    if (route.component) {
      route.component = resolve(route.component as AsyncComponent)
    } else if (to) {
      route.component = redirect(to.startsWith('/') ? to : routePath + '/' + to)
    }
    return route
  })

export default buildRoutes(routeConfigs) as RouteConfig[]
