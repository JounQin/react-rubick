import { Location } from 'history'
import { ComponentType } from 'react'

export interface EsModuleComponent<P> {
  default: ComponentType<P>
}

export type AsyncComponent<P = {}> = () => Promise<
  ComponentType<P> | EsModuleComponent<P>
>

export interface ExtendedRouteConfig {
  redirect?: string
  location?: Location
  component?: React.ComponentType | AsyncComponent
  path?: string
  exact?: boolean
  strict?: boolean
  routes?: ExtendedRouteConfig[]
}
