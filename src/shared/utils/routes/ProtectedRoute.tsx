import { Outlet, Navigate } from "react-router-dom";
import { useAuthStore } from "../../../context/useAuthStore";
import jwtDecode from "jwt-decode";
interface Props {}

const ProtectedRoute = (props: Props) => {
  const token = useAuthStore((state) => state.token);
  if (!token) {
    return <Navigate to="/account/login" />;
  }
  const userInfo = (jwtDecode(token!) as IAccessTokenType).UserInfo;

  return userInfo ? <Outlet /> : <Navigate to="/account/login" />;
};

export default ProtectedRoute;
