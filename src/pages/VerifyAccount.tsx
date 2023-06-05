import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

type Props = {};

const VerifyAccount = (props: Props) => {
  return (
    <div className=" flex h-screen w-full flex-col items-center justify-center space-y-14 rounded-lg bg-slate-200 p-16 text-center">
      <h2 className=" text-4xl text-gray-700">Your account has been created</h2>
      <div className="flex flex-col items-center space-y-5  text-gray-600">
        <p className="text-2xl">Thank you for join the Family</p>
        <AiFillCheckCircle className="text-7xl text-green-600" />
        <p className=" text-xl">
          In order to start using your account please verify by clicking the
          link that we sent to your email!
        </p>
      </div>
      <Link
        to="/"
        className="rounded bg-orange-500 px-8 py-3 text-slate-100 hover:bg-orange-600"
      >
        Back to w/eat
      </Link>
    </div>
  );
};

export default VerifyAccount;
