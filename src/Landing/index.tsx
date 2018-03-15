import React from 'react'
import { RouteConfig, renderRoutes as _renderRoutes } from 'react-router-config'

const renderRoutes = _renderRoutes as any

export default class Landing extends React.PureComponent<{
  history: History
  location: Location
  route: {
    routes: RouteConfig[]
  }
}> {
  render() {
    return (
      <>
        <header>Landing Header</header>
        <main>
          Landing Content
          {renderRoutes(this.props.route.routes)}
        </main>
      </>
    )
  }
}
