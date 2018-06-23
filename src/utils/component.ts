import { asyncComponent } from 'react-async-component'

import { AsyncComponent } from 'types'

export const resolve = <P>(Component: AsyncComponent<P>) =>
  asyncComponent({
    resolve: Component,
  })
