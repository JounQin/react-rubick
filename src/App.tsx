import { RouteConfig, renderRoutes } from 'react-router-config'

import Landing from './Landing'

const routes: RouteConfig[] = [
  {
    path: '',
    component: Landing,
  },
]

const App = () => renderRoutes(routes)

export default App
