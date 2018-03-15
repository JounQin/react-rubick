import { ComponentType } from 'react'
import { asyncComponent } from 'react-async-component'

interface EsModuleComponent<P> {
  default: ComponentType<P>
}

export const resolve = <P>(
  Component: () => Promise<ComponentType<P> | EsModuleComponent<P>>,
) =>
  asyncComponent({
    resolve: () =>
      Component().then(
        module =>
          (module as EsModuleComponent<P>).default ||
          (module as ComponentType<P>),
      ),
  })
