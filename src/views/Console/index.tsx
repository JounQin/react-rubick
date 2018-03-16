import React from 'react'
import { RouteComponentProps } from 'react-router'
import { RouteConfig, renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'

import { BreadCrumbContext, delay, qs } from 'utils'

export default class Console extends React.PureComponent<
  RouteComponentProps<{}> & {
    route: {
      routes: RouteConfig[]
    }
  }
> {
  state = {
    loading: true,
    authed: false,
  }

  async componentDidMount() {
    await delay(500)
    this.setState({
      loading: false,
      authed: Math.random() < 0.5,
    })
  }

  componentDidUpdate() {
    if (!this.state.authed) {
      this.props.history.replace({
        pathname: '/landing',
        search: qs({
          next: this.props.location.pathname,
        }),
      })
    }
  }

  render() {
    return this.state.loading || !this.state.authed ? (
      'Loading...'
    ) : (
      <>
        <nav className="left-panel">Nav</nav>
        <main>
          <BreadCrumbContext.Consumer>
            {breadCrumbs => (
              <ul>
                {breadCrumbs.map(({ label, url }) => (
                  <li key={label}>
                    <Link to={url}>{label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </BreadCrumbContext.Consumer>
          {renderRoutes(this.props.route.routes)}
        </main>
      </>
    )
  }
}
