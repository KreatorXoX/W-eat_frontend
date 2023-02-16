import React from 'react'
import { Link } from 'react-router-dom'

interface Props {}

const Account = (props: Props) => {
  return (
    <div>
      <Link to='auth'>Auth</Link>
    </div>
  )
}

export default Account
