import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../../../context/useAuthStore";
import jwtDecode from "jwt-decode";
interface Props {}

const AdminRoute = (props: Props) => {
  const token = useAuthStore((state) => state.token);

  if (!token) {
    return <Navigate to="/account/login" />;
  }
  const isAdmin = (jwtDecode(token!) as IAccessTokenType).UserInfo.isAdmin;
  return isAdmin ? <Outlet /> : <Navigate to="/account/login" />;
};

export default AdminRoute;
