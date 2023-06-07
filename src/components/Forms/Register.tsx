import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import Input from "../../shared/components/Form/Input";

import {
  RegisterUserInput,
  registerUserSchema,
} from "../../utils/schema/auth.schema";
import AuthServices from "../../api/services/auth.service";
type Props = {};

const Register = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const newPath = location.pathname?.split("/register")[0];

  const { mutate: registerUser } = AuthServices.useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterUserInput>({
    mode: "onChange",
    resolver: zodResolver(registerUserSchema),
  });

  const registerHandler: SubmitHandler<RegisterUserInput> = (data) => {
    registerUser(data, {
      onSuccess: () => {
        navigate("/verify-account");
      },
    });
  };
  return (
    <form
      onSubmit={handleSubmit(registerHandler)}
      className="flex h-full w-full flex-col items-center space-y-4 rounded-lg p-5 text-gray-800 dark:text-slate-200 "
    >
      <div className="flex w-full items-center justify-start gap-10 border-b border-b-gray-400 pb-2">
        <Link to=".." className="text-3xl font-light text-orange-600">
          <RiArrowGoBackLine />
        </Link>

        <h2 className="text-2xl font-bold ">Create account</h2>
      </div>
      <div className="w-full overflow-auto">
        <div className="flex w-full flex-col gap-4">
          <Input
            type="text"
            half={false}
            label="Name"
            placeholder="Name"
            id="name"
            {...register("name")}
            error={errors.name?.message}
          />

          <Input
            type="text"
            half={false}
            label="E-mail"
            id="email"
            placeholder="yourmail@email.com"
            {...register("email")}
            error={errors.email?.message}
          />
          <Input
            type="password"
            half={false}
            label="Password"
            id="password"
            placeholder="************"
            {...register("password")}
            error={errors.password?.message}
          />

          <Input
            type="password"
            half={false}
            label="Confirm Password"
            id="confirmPassword"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
        </div>
        <div className="mt-5 flex w-full flex-col gap-2">
          <button
            disabled={!isValid}
            type="submit"
            className="auth--button bg-orange-500 text-slate-100 transition-colors duration-200 hover:bg-orange-600 active:bg-orange-700 disabled:bg-gray-300 disabled:text-gray-500
         dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 dark:disabled:bg-gray-300 dark:disabled:text-gray-500"
          >
            Create account
          </button>
          <p className="text-sm text-gray-500">
            By clicking on "Create account", you agree to our terms of use,
            terms of use of point collection and privacy statement.
          </p>
          <Link
            to={`${newPath}/login`}
            className=" mt-2 text-center text-base font-medium tracking-wide underline hover:no-underline"
          >
            I already have an account
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Register;
