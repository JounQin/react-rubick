import { ComponentType } from 'react'
import { asyncComponent } from 'react-async-component'

import { AsyncComponent, EsModuleComponent } from 'types'

export const resolve = <P>(Component: AsyncComponent<P>) =>
  asyncComponent({
    resolve: () =>
      Component().then(
        module =>
          (module as EsModuleComponent<P>).default ||
          (module as ComponentType<P>),
      ),
  })
