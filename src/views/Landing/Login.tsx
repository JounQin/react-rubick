import React from 'react'
import { RouteComponentProps } from 'react-router'

import { qs } from 'utils'

const Login = ({ location }: RouteComponentProps<{}>) => {
  return (
    <div>
      Login
      <br />
      {qs<{ next?: string }>(location.search).next}
    </div>
  )
}

export default Login
