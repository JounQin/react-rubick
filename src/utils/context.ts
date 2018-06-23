import { createContext } from 'react'

import { BreadCrumb } from 'types'

export const BreadCrumbContext = createContext<BreadCrumb[]>([])
