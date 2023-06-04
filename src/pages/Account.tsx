import { AiOutlineClose } from "react-icons/ai";
import { BiHome, BiPowerOff } from "react-icons/bi";
import { BsBag, BsHeart } from "react-icons/bs";
import {
  useNavigate,
  useLocation,
  Link,
  useOutletContext,
} from "react-router-dom";
import { useAuthStore } from "../context/useAuthStore";
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
          <h1 className="text-xl  font-bold">
            {token
              ? `Welcome ${token.slice(0, 4)} to your account`
              : "Sign in to access to your account"}
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
          <Link
            to="personal-info"
            className="text-sm underline hover:no-underline"
          >
            View personal information
          </Link>
        </div>
      </div>
      <div className="flex w-full flex-row items-center justify-evenly gap-4 text-lg font-semibold">
        <button
          onClick={() => navigate("login")}
          className="auth--button bg-slate-200 transition-colors duration-200 hover:bg-slate-300 dark:bg-slate-400
          dark:hover:bg-slate-500
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
      <div className="flex flex-col gap-5 px-2">
        <div className="flex cursor-pointer items-center justify-start gap-6">
          <BsBag className="inline text-2xl" />
          <Link to="orders" className="text-gray-500 dark:text-slate-200">
            Orders
          </Link>
        </div>
        <div className="flex cursor-pointer items-center justify-start gap-6">
          <BsHeart className="inline text-2xl" />
          <Link to="favourites" className="text-gray-500 dark:text-slate-200">
            Favorites
          </Link>
        </div>
        <div className="flex cursor-pointer items-center justify-start gap-6">
          <BiHome className="inline text-2xl" />
          <Link to="addresses" className="text-gray-500 dark:text-slate-200">
            Address
          </Link>
        </div>
        {token && (
          <div
            onClick={logOut}
            className="flex cursor-pointer items-center justify-start gap-6 border-t pt-3"
          >
            <BiPowerOff className="inline text-2xl" />
            <span className="text-gray-500 dark:text-slate-200">Sign out</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
