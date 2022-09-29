import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div>
      <p>Manejo de errores</p>
      <p>{error.statusText || error.message}</p>
    </div>
  )
}

export default Error
