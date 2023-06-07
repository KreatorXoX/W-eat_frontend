import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  changePasswordSchema,
  ChangePasswordInput,
} from "../../utils/schema/auth.schema";
import Input from "../../shared/components/Form/Input";
import { Link, useOutletContext } from "react-router-dom";
import AuthServices from "../../api/services/auth.service";
type Props = {};

type UserContext = {
  id: string;
};

const ChangePassword = (props: Props) => {
  const { mutate: changePassword } = AuthServices.useChangePassword();
  const ctx: UserContext = useOutletContext();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ChangePasswordInput>({
    mode: "onChange",
    resolver: zodResolver(changePasswordSchema),
  });
  const changePasswordHandler: SubmitHandler<ChangePasswordInput> = (data) => {
    changePassword({ ...data, id: ctx.id });
  };

  return (
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
        error={errors.oldPassword?.message}
      />
      <Link
        to="/forgot-password"
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
          error={errors.newPassword?.message}
        />
        <Input
          id="confirmNewPassword"
          type="text"
          {...register("confirmNewPassword")}
          half={false}
          label="Confirm New Password"
          placeholder="Confirm New Password"
          error={errors.confirmNewPassword?.message}
        />
      </div>
      <button
        disabled={!isValid}
        className="mt-4 w-full rounded-lg bg-orange-500 py-2  text-lg text-slate-100 disabled:bg-gray-500"
      >
        Change password
      </button>
    </form>
  );
};

export default ChangePassword;
