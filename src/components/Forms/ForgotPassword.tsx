import { Link, useNavigate } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthServices from "../../api/services/auth.service";
import Input from "../../shared/components/Form/Input";
import {
  ForgotPasswordInput,
  forgotPasswordSchema,
} from "../../shared/utils/schema/auth.schema";
import { AiFillCheckCircle } from "react-icons/ai";
import { useTheme } from "../../context/themeStore";

type Props = {};

const ForgotPassword = (props: Props) => {
  const dark = useTheme((state) => state.dark);
  const navigate = useNavigate();
  const { mutate: sendEmail, isSuccess } = AuthServices.useForgotPassword();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ForgotPasswordInput>({
    mode: "onChange",
    resolver: zodResolver(forgotPasswordSchema),
  });

  const loginHandler: SubmitHandler<ForgotPasswordInput> = (data) => {
    sendEmail(data);
  };

  let content = (
    <div
      className={`flex h-screen w-full flex-col items-center justify-center space-y-14 p-16 text-center ${
        dark ? "bg-gray-800 text-slate-100" : "bg-slate-200 text-gray-700"
      } `}
    >
      <h2 className="text-2xl font-semibold md:text-4xl">
        We will send a password reset link to your registered email{" "}
      </h2>
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="flex w-full max-w-2xl flex-col items-center space-y-4 overflow-auto rounded-lg p-5 pt-0 text-gray-800"
      >
        <div className="flex w-full flex-col gap-4 text-left">
          <Input
            type="email"
            half={false}
            label="Email address"
            placeholder="yourmail@email.com"
            id="email"
            {...register("email")}
            error={errors.email?.message}
          />
        </div>
        <div className="flex w-full flex-row gap-5">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="auth--button bg-blue-500 text-slate-100 transition-colors duration-200 hover:bg-blue-600
        "
          >
            Go back
          </button>
          <button
            disabled={!isValid}
            type="submit"
            className="auth--button bg-orange-500 text-slate-100 transition-colors duration-200 hover:bg-orange-600 active:bg-orange-700 disabled:bg-gray-300 disabled:text-gray-500
        "
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );

  if (isSuccess) {
    content = (
      <div
        className={`flex h-screen w-full flex-col items-center justify-center space-y-14 p-16 text-center ${
          dark ? "bg-gray-800 text-slate-100" : "bg-slate-200 text-gray-700"
        } `}
      >
        <div className="flex flex-col items-center space-y-5 font-medium">
          <AiFillCheckCircle className="text-7xl text-green-600" />
          <h2 className="text-2xl font-semibold md:text-4xl">
            Your password reset link has been sent to your email
          </h2>
        </div>
        <Link
          to="/"
          className="rounded bg-orange-500 px-8 py-3 text-slate-100 hover:bg-orange-600"
        >
          Back to w/eat
        </Link>
      </div>
    );
  }
  return content;
};

export default ForgotPassword;
