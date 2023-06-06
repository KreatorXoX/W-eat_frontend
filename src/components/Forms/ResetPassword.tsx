import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthServices from "../../api/services/auth.service";
import Input from "../../shared/components/Form/Input";
import {
  ResetPasswordInput,
  resetPasswordSchema,
} from "../../shared/utils/schema/auth.schema";
import { AiFillCheckCircle } from "react-icons/ai";

type Props = {};

const ResetPassword = (props: Props) => {
  const navigate = useNavigate();
  const id = useParams().id as string;
  const resetCode = useParams().resetCode as string;

  const { mutate: resetPassword, isSuccess } = AuthServices.useResetPassword();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ResetPasswordInput>({
    mode: "onChange",
    resolver: zodResolver(resetPasswordSchema),
  });

  const resetPasswordHandler: SubmitHandler<ResetPasswordInput> = (data) => {
    resetPassword(
      { data, params: { id, resetCode } },
      {
        onSuccess: () => {
          // navigate("/");
        },
      }
    );
  };
  let content = (
    <form
      onSubmit={handleSubmit(resetPasswordHandler)}
      className="flex h-full flex-col items-center space-y-4 overflow-auto rounded-lg p-5 text-gray-800"
    >
      <div className="flex w-full flex-col gap-4">
        <Input
          type="password"
          half={false}
          label="Password"
          placeholder="************"
          id="password"
          {...register("password")}
          error={errors.password?.message}
        />

        <Input
          type="password"
          half={false}
          label="Confirm Password"
          placeholder="************"
          id="confirmPassword"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
      </div>

      <button
        disabled={!isValid}
        type="submit"
        className="auth--button bg-green-600 text-slate-100 transition-colors duration-200 hover:bg-green-600 active:bg-green-600 disabled:bg-gray-300 disabled:text-gray-500"
      >
        Reset Password
      </button>
    </form>
  );
  if (isSuccess) {
    content = (
      <div className="flex h-screen w-full flex-col items-center justify-center space-y-14 p-16 text-center">
        <div className="flex flex-col items-center space-y-5 font-medium">
          <AiFillCheckCircle className="text-7xl text-green-600" />
          <h2 className="text-xl text-gray-700 md:text-2xl">
            Your can start using your new password now
          </h2>
        </div>
        <Link
          to="/account/login"
          className="rounded bg-orange-500 px-8 py-3 text-slate-100 hover:bg-orange-600"
        >
          Login to w/eat
        </Link>
      </div>
    );
  }

  return content;
};

export default ResetPassword;
