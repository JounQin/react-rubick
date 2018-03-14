import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

const Router = BrowserRouter as any

const app = document.getElementById('app')

const renderApp = () => {
  render(
    (
      <Router>
        <App />
      </Router>
    ) as any,
    app,
  )
}

renderApp()

if (module.hot) {
  module.hot.accept('./App', renderApp)
}
