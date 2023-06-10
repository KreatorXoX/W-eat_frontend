import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../../context/useAuthStore";
import jwtDecode from "jwt-decode";
interface Props {}

const ProtectedRoute = (props: Props) => {
  const token = useAuthStore((state) => state.token);
  const location = useLocation();

  const navigateTo = location.pathname.includes("checkout")
    ? "/checkout/account/login"
    : "/account/login";
  if (!token) {
    return <Navigate to={navigateTo} state={{ from: location }} />;
  }
  const userInfo = (jwtDecode(token!) as IAccessTokenType).UserInfo;

  return userInfo ? (
    <Outlet context={{ id: userInfo._id }} />
  ) : (
    <Navigate to={navigateTo} state={{ from: location }} />
  );
};

export default ProtectedRoute;
