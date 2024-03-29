import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthStore } from "../context/useAuthStore";
import axiosApi from "../api/axios";
import LoadingScreen from "../shared/components/UI-Elements/LoadingScreen";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);

  const token = useAuthStore((state) => state.token);
  const setCredentials = useAuthStore((state) => state.setCredentials);
  console.log(token);
  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        const newAccessToken = (await axiosApi.get<IToken>("/auth/refresh"))
          .data.accessToken;

        if (newAccessToken) setCredentials(newAccessToken);
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };
    !token ? verifyRefreshToken() : setIsLoading(false);

    return () => {
      isMounted = false;
    };
  }, []);

  return <>{isLoading ? <LoadingScreen /> : <Outlet />}</>;
};

export default PersistLogin;
