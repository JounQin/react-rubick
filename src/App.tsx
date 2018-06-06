import { isEqual, last } from 'lodash'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { matchRoutes, renderRoutes } from 'react-router-config'

import routes from 'routes'
import { BreadCrumb } from 'types'
import { BreadCrumbContext, qs } from 'utils'

interface AppProps extends RouteComponentProps<{}> {}

interface AppState {
  breadCrumbs: BreadCrumb[]
}

class App extends React.PureComponent<AppProps, AppState> {
  state: AppState = {
    breadCrumbs: [],
  }

  componentDidMount() {
    this.buildBreadCrumbs(this.props)
  }

  componentDidUpdate(_prevProps: AppProps, prevState: AppState) {
    const { breadCrumbs } = this.state

    if (isEqual(prevState.breadCrumbs, breadCrumbs)) {
      return
    }

    this.buildBreadCrumbs(this.props)

    document.title =
      'React Rubick | ' + breadCrumbs.map(({ label }) => label).join(' - ')
  }

  buildBreadCrumbs(props: AppProps) {
    const {
      match: { params, path },
      route: { location },
    } = last(matchRoutes(routes, props.location.pathname))

    const p = path.replace(/(^\/)|(\/\:[^/]*)/g, '')

    let breadCrumbs: BreadCrumb[] = p
      .split('/')
      .map((label, index, arr) => ({
        label,
        url: '/' + arr.slice(0, index + 1).join('/'),
      }))
      .slice(1)

    if (location && location.state) {
      const { breadCrumb } = location.state
      const label =
        typeof breadCrumb === 'function'
          ? breadCrumb({
              breadCrumbs,
              params,
              query: qs(props.location.search),
            })
          : breadCrumb

      if (Array.isArray(label)) {
        breadCrumbs = label
      } else if (label) {
        breadCrumbs.push({
          label,
        })
      }
    }

    this.setState({
      breadCrumbs,
    })
  }

  render() {
    return (
      <BreadCrumbContext.Provider value={this.state.breadCrumbs}>
        {renderRoutes(routes)}
      </BreadCrumbContext.Provider>
    )
  }
}

export default withRouter(App)
