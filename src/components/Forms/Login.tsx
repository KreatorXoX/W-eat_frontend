import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthServices from "../../api/services/auth.service";
import Input from "../../shared/components/Form/Input";
import { LoginUserInput } from "../../shared/utils/schema/auth.schema";
import { loginUserSchema } from "../../shared/utils/schema/auth.schema";

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const newPath = location.pathname?.split("/login")[0];
  const from = location.state?.from.pathname || "/";
  const { mutate: logUserIn } = AuthServices.useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginUserInput>({
    mode: "onChange",
    resolver: zodResolver(loginUserSchema),
  });

  const loginHandler: SubmitHandler<LoginUserInput> = (data) => {
    logUserIn(data, {
      onSuccess: () => {
        navigate(from);
      },
    });
  };
  return (
    <form
      onSubmit={handleSubmit(loginHandler)}
      className="flex h-full w-full flex-col items-center space-y-4 overflow-auto rounded-lg p-5 text-gray-800 dark:text-slate-200"
    >
      <div className="flex w-full items-center justify-start gap-10 border-b border-b-gray-400 pb-2">
        <Link to=".." className="text-3xl font-light text-orange-600">
          <RiArrowGoBackLine />
        </Link>

        <h2 className="text-2xl font-bold ">Sign in</h2>
      </div>
      <div className="flex w-full flex-col gap-4">
        <Input
          type="email"
          half={false}
          label="Email address"
          placeholder="yourmail@email.com"
          id="email"
          {...register("email")}
          error={errors.email?.message}
        />
        <Input
          type="password"
          half={false}
          label="Password"
          placeholder="************"
          id="password"
          {...register("password")}
          error={errors.password?.message}
        />

        <Link
          to="/forgot-password"
          className="text-right text-sm italic text-blue-500 no-underline
        hover:underline dark:font-medium
        "
        >
          Forgot Password?
        </Link>
      </div>

      <button
        disabled={!isValid}
        type="submit"
        className="auth--button bg-orange-500 text-slate-100 transition-colors duration-200 hover:bg-orange-600 active:bg-orange-700 disabled:bg-gray-300 disabled:text-gray-500
         dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 dark:disabled:bg-gray-300 dark:disabled:text-gray-500"
      >
        Sign in
      </button>
      <Link
        to={`${newPath}/register`}
        className="text-base tracking-wide underline hover:no-underline"
      >
        Create account
      </Link>
    </form>
  );
};

export default Login;
