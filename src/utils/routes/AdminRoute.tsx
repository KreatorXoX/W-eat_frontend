import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../../context/useAuthStore";
import jwtDecode from "jwt-decode";
interface Props {}

const AdminRoute = (props: Props) => {
  // const token = useAuthStore((state) => state.token);
  // const location = useLocation();

  // if (!token) {
  //   return <Navigate to="/account/login" state={{ from: location }} />;
  // }
  // const userInfo = (jwtDecode(token!) as IAccessTokenType).UserInfo;
  // return userInfo.isAdmin ? (
  //   <Outlet context={{ id: userInfo._id }} />
  // ) : (
  //   <Navigate to="/account/login" state={{ from: location }} />
  // );
  return <Outlet />;
};

export default AdminRoute;