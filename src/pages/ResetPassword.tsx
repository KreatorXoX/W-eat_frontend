import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

import ResetPasswordForm from "../components/Forms/ResetPassword";
type Props = {};

const ResetPassword = (props: Props) => {
  return (
    <div className=" flex h-screen w-full flex-col items-center justify-center space-y-14 rounded-lg bg-slate-200 p-16 text-center">
      <h2 className=" text-4xl text-gray-700">Enter your new password</h2>
      <div className="w-full max-w-2xl text-left">
        <ResetPasswordForm />
      </div>
      <Link
        to="/"
        className="text-xl font-medium italic text-blue-600 underline underline-offset-2 hover:text-blue-700"
      >
        Back to w/eat
      </Link>
    </div>
  );
};

export default ResetPassword;
