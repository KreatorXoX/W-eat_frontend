import { Link, useLocation } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";

import {
  LoginValidationSchema,
  loginValidationSchema,
} from "../../shared/utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import FormInput from "../../shared/components/Form/Input";

type Props = {};

const Login = (props: Props) => {
  const location = useLocation();
  const newPath = location.pathname?.split("/login")[0];

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginValidationSchema>({
    mode: "onChange",
    resolver: zodResolver(loginValidationSchema),
  });

  const loginHandler: SubmitHandler<LoginValidationSchema> = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(loginHandler)}
      className="p-5 flex flex-col items-center rounded-lg space-y-4 w-full h-full text-gray-800 dark:text-slate-200 overflow-auto"
    >
      <div className="flex items-center gap-10 justify-start w-full border-b border-b-gray-400 pb-2">
        <Link to=".." className="text-orange-600 text-3xl font-light">
          <RiArrowGoBackLine />
        </Link>

        <h2 className="font-bold text-2xl ">Sign in</h2>
      </div>
      <div className="w-full flex flex-col gap-4">
        <FormInput
          type="email"
          half={false}
          label="Email address"
          placeholder="yourmail@email.com"
          id="email"
          {...register("email")}
          error={errors.email?.message}
        />
        <FormInput
          type="password"
          half={false}
          label="Password"
          placeholder="************"
          id="password"
          {...register("password")}
          error={errors.password?.message}
        />

        <Link
          to="#forgotpassword"
          className="text-right text-sm text-blue-500 dark:font-medium italic
        hover:underline no-underline
        "
        >
          Forgot Password?
        </Link>
      </div>

      <button
        disabled={!isValid}
        type="submit"
        className="auth--button dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 transition-colors duration-200
         text-slate-100 disabled:bg-gray-300 disabled:text-gray-500 dark:disabled:bg-gray-300 dark:disabled:text-gray-500"
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
