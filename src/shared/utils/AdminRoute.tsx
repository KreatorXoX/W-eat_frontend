import React from 'react'
import { Outlet } from 'react-router-dom'
interface Props {}

const AdminRoute = (props: Props) => {
  console.log('admin only route')
  return <Outlet />
}

export default AdminRoute
