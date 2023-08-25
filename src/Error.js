import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
    console.log(err, '123');
  return (
    <div>
        <h1>Error!</h1>
    </div>
  )
}

export default Error