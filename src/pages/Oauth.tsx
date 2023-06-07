import { useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useAuthStore } from "../context/useAuthStore";
import { CgDanger } from "react-icons/cg";
type Props = {};

const Oauth = (props: Props) => {
  const navigate = useNavigate();
  const setCredentials = useAuthStore((state) => state.setCredentials);
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success") === "true";
  const token = searchParams.get("accessToken");

  useEffect(() => {
    if (success && token) {
      setCredentials(token);
      navigate("/");
    }
  }, []);
  let content = <p>Loading</p>;

  if (!success) {
    content = (
      <div className="full flex h-screen flex-col items-center justify-center space-y-12 rounded-lg bg-slate-200 px-10 text-center">
        <h2 className="text-2xl font-semibold tracking-wide text-red-400 md:text-2xl">
          Your attempt to login/register is failed
        </h2>
        <div className="flex flex-col items-center space-y-3 text-gray-800">
          <CgDanger className="text-5xl text-red-600" />
          <p className="text-xl font-medium">We could not sign you in</p>
          <span className="text-sm italic">
            Please try again with a different login/register method
          </span>
        </div>
        <div className="text-sm md:text-lg">
          <Link
            to="/account"
            className="rounded bg-green-500  px-2  py-2 text-slate-100 hover:bg-green-600 md:px-8"
          >
            Go to Authentication Page
          </Link>
        </div>
      </div>
    );
  }
  return content;
};

export default Oauth;
