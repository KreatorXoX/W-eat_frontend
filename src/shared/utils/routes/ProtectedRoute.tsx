import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../../../context/useAuthStore";
import jwtDecode from "jwt-decode";
interface Props {}

const ProtectedRoute = (props: Props) => {
  const token = useAuthStore((state) => state.token);
  if (!token) {
    const location = useLocation();
    return <Navigate to="/account/login" state={{ from: location }} />;
  }
  const userInfo = (jwtDecode(token!) as IAccessTokenType).UserInfo;

  return userInfo ? (
    <Outlet context={{ id: userInfo._id }} />
  ) : (
    <Navigate to="/account/login" state={{ from: location }} />
  );
};

export default ProtectedRoute;
