import React from "react";
import { Outlet } from "react-router-dom";
interface Props {}

const ProtectedRoute = (props: Props) => {
  console.log("protected");
  return <Outlet />;
};

export default ProtectedRoute;
