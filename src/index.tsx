import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from 'App'

const app = document.getElementById('app')

const renderApp = () => {
  render(
    <Router basename={ROUTE_BASE}>
      <App />
    </Router>,
    app,
  )
}

renderApp()

if (module.hot) {
  module.hot.accept('App', renderApp)
}
