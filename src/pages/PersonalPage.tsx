import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Input from "../shared/components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {}

const PersonalPage = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "Gorkem",
      email: "gocer@test.com",
    },
  });
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
      <form className="mt-8 mb-5 space-y-5">
        <Input
          id="name"
          type="text"
          {...register("name")}
          half={false}
          label="Name"
          placeholder="Name"
          error={undefined}
        />
        {watch("name") !== "Gorkem" && (
          <div className="my-2 flex w-full justify-center">
            <button className="w-1/2 rounded-lg bg-orange-500 py-1 text-slate-100 duration-150 hover:bg-orange-600">
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
