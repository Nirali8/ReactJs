import React from 'react'
import { useRouteError } from 'react-router-dom'

const LoaderError = () => {

    const error = useRouteError()
  return (
    <div>
          <h1>{error.message}</h1>
          {/* <h1>{error.name}</h1> */}
    </div>
  )
}

export default LoaderError
