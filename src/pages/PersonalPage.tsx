import { RiArrowGoBackLine } from "react-icons/ri";
import { Link, useOutletContext } from "react-router-dom";
import Input from "../shared/components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import UserServices from "../api/services/user.service";
import { UpdateUserNameInput } from "../utils/schema/user.schema";
import { useEffect } from "react";

interface Props {}

const PersonalPage = (props: Props) => {
  const ctx: UserContext = useOutletContext();
  const { data: userInfo, isSuccess } = UserServices.useUser(ctx.id);
  const { mutate: updateName } = UserServices.useUpdateUserName();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<UpdateUserNameInput>({
    mode: "onChange",
  });

  const updateUserNameHandler: SubmitHandler<UpdateUserNameInput> = (data) => {
    updateName({ data, id: userInfo!._id });
  };

  useEffect(() => {
    const defaultValues: UpdateUserNameInput = {
      name: userInfo?.name || "Anon",
      email: userInfo?.email,
    };
    reset({ ...defaultValues });
  }, [isSuccess]);

  return (
    <div className="px-5 text-gray-800">
      <div className="mt-5 flex items-center gap-10 lg:mt-0">
        <Link to=".." className="text-3xl font-light text-orange-600">
          <RiArrowGoBackLine />
        </Link>
        <h2 className="text-xl font-semibold dark:text-slate-200">
          Personal information
        </h2>
      </div>
      <form
        onSubmit={handleSubmit(updateUserNameHandler)}
        className="mt-8 mb-5 space-y-5"
      >
        <Input
          id="name"
          type="text"
          {...register("name")}
          half={false}
          label="Name"
          placeholder="Name"
          error={errors.name?.message}
        />
        {isDirty && (
          <div className="my-2 flex w-full justify-center">
            <button
              disabled={!isValid}
              className="w-1/2 rounded-lg bg-orange-500 py-1 text-slate-100 duration-150 hover:bg-orange-600"
            >
              Update Name
            </button>
          </div>
        )}
        <Input
          id="email"
          type="text"
          {...register("email")}
          half={false}
          label="Email"
          placeholder="email"
          error={undefined}
          disabled
        />
      </form>
      <Link
        to="/account/change-password"
        className="underline hover:no-underline dark:text-slate-200"
      >
        Change password
      </Link>
    </div>
  );
};

export default PersonalPage;
