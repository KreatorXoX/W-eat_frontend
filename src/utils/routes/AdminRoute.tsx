import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../../context/useAuthStore";
import jwtDecode from "jwt-decode";
interface Props {}

const AdminRoute = (props: Props) => {
  const token = useAuthStore((state) => state.token);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/account/login" state={{ from: location }} />;
  }
  const userInfo = (jwtDecode(token!) as IAccessTokenType).UserInfo;
  return userInfo.isAdmin ? (
    <Outlet context={{ id: userInfo._id, isAdmin: userInfo.isAdmin }} />
  ) : (
    <Navigate to="/account/login" state={{ from: location }} />
  );
};

export default AdminRoute;
