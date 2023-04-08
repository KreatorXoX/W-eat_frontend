import { RiArrowGoBackLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../shared/components/Form/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ChangePasswordSchema,
  changePasswordSchema,
} from "../shared/utils/validationSchema";

interface Props {}

const ChangePassword = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<ChangePasswordSchema>({
    mode: "onChange",
    resolver: zodResolver(changePasswordSchema),
  });
  const changePasswordHandler: SubmitHandler<ChangePasswordSchema> = (data) => {
    console.log(data);
    // check the old pass in the backend to see it matches and if it does update it with the new password
  };
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
      <form
        onSubmit={handleSubmit(changePasswordHandler)}
        className="mt-8 mb-5 flex flex-col"
      >
        <Input
          id="oldPassword"
          type="text"
          {...register("oldPassword")}
          half={false}
          label="Old password"
          placeholder="Password"
          error={undefined}
        />
        <Link
          to="forgot-password"
          className="mt-2 self-end text-sm text-blue-500 underline hover:no-underline"
        >
          forgot password ?
        </Link>

        <div className="mt-4 space-y-5">
          <Input
            id="newPassword"
            type="text"
            {...register("newPassword")}
            half={false}
            label="New password"
            placeholder="New password"
            error={undefined}
          />
          <Input
            id="confirmNewPassword"
            type="text"
            {...register("confirmNewPassword")}
            half={false}
            label="Confirm New Password"
            placeholder="Confirm New Password"
            error={undefined}
          />
        </div>
        <button
          disabled
          className="mt-4 w-full rounded-lg bg-orange-500 py-2  text-lg text-slate-100 disabled:bg-gray-500"
        >
          Change password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
