import { FormEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import FormInput from "../../shared/components/Form/Input";

import {
  RegisterValidationSchema,
  registerValidationSchema,
} from "../../shared/utils/validationSchema";
type Props = {};

const Register = (props: Props) => {
  const location = useLocation();
  const newPath = location.pathname?.split("/register")[0];

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors, isValid },
  } = useForm<RegisterValidationSchema>({
    mode: "onChange",
    resolver: zodResolver(registerValidationSchema),
  });

  const registerHandler: SubmitHandler<RegisterValidationSchema> = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(registerHandler)}
      className="p-5 flex flex-col items-center rounded-lg space-y-4 w-full h-full text-gray-800 dark:text-slate-200 "
    >
      <div className="flex items-center gap-10 justify-start w-full border-b border-b-gray-400 pb-2">
        <Link to=".." className="text-orange-600 text-3xl font-light">
          <RiArrowGoBackLine />
        </Link>

        <h2 className="font-bold text-2xl ">Create account</h2>
      </div>
      <div className="overflow-auto w-full">
        <div className="w-full flex flex-col gap-4">
          <FormInput
            type="text"
            half={false}
            label="Name"
            placeholder="Name"
            id="name"
            {...register("name")}
            error={errors.name?.message}
          />

          <FormInput
            type="text"
            half={false}
            label="E-mail"
            id="email"
            placeholder="yourmail@email.com"
            {...register("email")}
            error={errors.email?.message}
          />
          <FormInput
            type="password"
            half={false}
            label="Password"
            id="password"
            placeholder="************"
            {...register("password")}
            error={errors.password?.message}
          />

          <FormInput
            type="password"
            half={false}
            label="Confirm Password"
            id="confirmPassword"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
        </div>
        <div className="mt-5 w-full flex flex-col gap-2">
          <button
            disabled={!isValid}
            type="submit"
            className="auth--button dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 transition-colors duration-200
         text-slate-100 disabled:bg-gray-300 disabled:text-gray-500 dark:disabled:bg-gray-300 dark:disabled:text-gray-500"
          >
            Create account
          </button>
          <p className="text-sm text-gray-500">
            By clicking on "Create account", you agree to our terms of use,
            terms of use of point collection and privacy statement.
          </p>
          <Link
            to={`${newPath}/login`}
            className=" font-medium mt-2 text-base text-center tracking-wide underline hover:no-underline"
          >
            I already have an account
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Register;
