import { RiArrowGoBackLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import ChangePasswordForm from "../components/Forms/ChangePassword";

interface Props {}

const ChangePassword = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="px-5 text-gray-800 dark:text-slate-200">
      <div className="mt-5 flex items-center gap-10 lg:mt-0">
        <span
          className="text-3xl font-light text-orange-600
          underline hover:cursor-pointer hover:no-underline"
          onClick={() => navigate(-1)}
        >
          <RiArrowGoBackLine />
        </span>

        <h2 className="text-xl font-semibold">Change Password</h2>
      </div>
      <ChangePasswordForm />
    </div>
  );
};

export default ChangePassword;
