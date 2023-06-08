import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { BiPowerOff, BiHome } from "react-icons/bi";
import { BsBag, BsHeart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { TfiHome } from "react-icons/tfi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuthStore } from "../context/useAuthStore";
import getGoogleOAuthURL from "../utils/getGoogleUrl";
interface Props {}

const Account = (props: Props) => {
  const token = useAuthStore((state) => state.token);
  const logOut = useAuthStore((state) => state.logOut);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="space-y-8 overflow-y-hidden px-4 text-gray-700 dark:text-slate-100">
      <div className="space-y-2">
        <div className="mt-4 flex flex-row items-center justify-between ">
          <h1 className="text-xl font-bold tracking-wide">
            {token ? `My account` : "Sign in to access to your account"}
          </h1>
          <AiOutlineClose
            onClick={() =>
              navigate(
                `${location.pathname.includes("checkout") ? "/checkout" : "/"}`
              )
            }
            className="cursor-pointer text-2xl"
          />
        </div>
        <div>
          <Link to="personal-info" className="underline hover:no-underline">
            View personal information
          </Link>
        </div>
      </div>

      {!token && (
        <>
          <div className="flex cursor-pointer justify-center font-medium text-gray-700 ">
            <Link
              to={getGoogleOAuthURL()}
              className="w-1/2 rounded-lg bg-gray-200 p-1 transition-colors duration-200 hover:bg-gray-300 hover:text-blue-500 md:w-1/3"
            >
              <p className="flex w-full items-center justify-center gap-3 text-lg">
                Sign in with
                <span>
                  <FcGoogle className="text-2xl" />
                </span>
              </p>
            </Link>
          </div>
          <div className="flex w-full flex-row items-center justify-evenly gap-4 text-lg font-semibold">
            <button
              onClick={() => navigate("login")}
              className="auth--button bg-slate-200 text-blue-500 transition-colors duration-200 hover:bg-slate-300 dark:bg-blue-500 dark:text-slate-100
          dark:hover:bg-blue-600
          "
            >
              Sign in
            </button>
            <button
              onClick={() => navigate("register")}
              className="auth--button bg-orange-500 text-slate-100 transition-colors duration-200 hover:bg-orange-600"
            >
              Create Account
            </button>
          </div>
        </>
      )}

      <div className="flex flex-col gap-5 px-2 text-lg">
        <div className="flex cursor-pointer items-center justify-start gap-6">
          <BsBag className="mb-1 inline text-2xl text-orange-400" />
          <Link
            to="orders"
            className="text-gray-500 hover:font-medium  dark:text-slate-200"
          >
            Orders
          </Link>
        </div>
        <div className="flex cursor-pointer items-center justify-start gap-6">
          <FaRegHeart className="inline text-2xl text-blue-400" />
          <Link
            to="favourites"
            className="text-gray-500 hover:font-medium dark:text-slate-200"
          >
            Favorites
          </Link>
        </div>
        <div className="flex cursor-pointer items-center justify-start gap-6">
          <TfiHome className="mb-2 inline text-2xl text-green-400" />
          <Link
            to="addresses"
            className="text-gray-500 hover:font-medium dark:text-slate-200"
          >
            Address
          </Link>
        </div>
        {token && (
          <div
            onClick={logOut}
            className="flex cursor-pointer items-center justify-center gap-2 border-t border-indigo-400 pt-5"
          >
            <BiPowerOff className=" inline-flex text-3xl text-red-400" />
            <span className=" text-gray-500 hover:font-medium dark:text-slate-200">
              Sign out
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
