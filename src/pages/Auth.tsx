import React from 'react'
import { Link } from 'react-router-dom'

interface Props {}

const Auth = (props: Props) => {
  return (
    <div>
      <Link to='/account'>Back</Link>
    </div>
  )
}

export default Auth
