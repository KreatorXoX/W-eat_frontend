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
    <div className="text-gray-800 px-5">
      <div className="mt-5 lg:mt-0 flex gap-10 items-center">
        <Link to=".." className="text-orange-600 text-3xl font-light">
          <RiArrowGoBackLine />
        </Link>
        <h2 className="font-semibold text-xl dark:text-slate-200">
          Personal information
        </h2>
      </div>
      <form className="space-y-5 mt-8 mb-5">
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
          <div className="w-full flex justify-center my-2">
            <button className="w-1/2 bg-orange-500 text-slate-100 py-1 rounded-lg hover:bg-orange-600 duration-150">
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
