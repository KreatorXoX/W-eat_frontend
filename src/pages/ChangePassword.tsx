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
    <div className="text-gray-800 px-5 dark:text-slate-200">
      <div className="mt-5 lg:mt-0 flex gap-10 items-center">
        <span
          className="underline hover:no-underline hover:cursor-pointer
          text-orange-600 text-3xl font-light"
          onClick={() => navigate(-1)}
        >
          <RiArrowGoBackLine />
        </span>

        <h2 className="font-semibold text-xl">Change Password</h2>
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
          className="self-end text-sm text-blue-500 underline mt-2 hover:no-underline"
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
          className="disabled:bg-gray-500 bg-orange-500 mt-4 py-2 w-full  rounded-lg text-slate-100 text-lg"
        >
          Change password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
