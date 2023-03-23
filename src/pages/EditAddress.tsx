import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import Input from "../shared/components/Form/Input";
import {
  NewAddressValidationSchema,
  newAddressValidationSchema,
} from "../shared/utils/validationSchema";

type Props = {};

const EditAddress = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<NewAddressValidationSchema>({
    mode: "onChange",
    resolver: zodResolver(newAddressValidationSchema),
  });

  const location = useLocation();
  const addressType: string = location?.state.type;

  const editAddressHandler: SubmitHandler<NewAddressValidationSchema> = (
    data
  ) => {
    console.log(data);
    // send post req to change or add the new address
  };
  return (
    <>
      <div className="text-gray-800 px-5 dark:text-slate-200 pl-5 mt-5 lg:mt-0 flex gap-10 items-center">
        <Link to=".." className="text-orange-600 text-3xl font-light">
          <RiArrowGoBackLine />
        </Link>
        <h2 className="font-semibold text-xl">Update Address</h2>
      </div>
      <form
        onSubmit={handleSubmit(editAddressHandler)}
        className="m-4 py-5 dark:text-slate-100 text-gray-800 space-y-5 flex flex-col
        
        "
      >
        <div>
          <div className="flex flex-col gap-4 border-b dark:border-b-gray-600 py-4">
            <h2
              className="lg:px-4 text-xl lg:text-2xl font-semibold tracking-widest
            text-blue-300 font-sans text-center
            "
            >
              {addressType.toUpperCase()}
            </h2>
            <div className="grid grid-cols-2 p-0 lg:p-4 gap-2 lg:gap-5">
              <div className="col-span-2 lg:col-span-1">
                <Input
                  type="text"
                  half={false}
                  label="Street name"
                  placeholder="Type street name"
                  id="street"
                  {...register("street")}
                  error={errors.street?.message}
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <Input
                  type="text"
                  half={false}
                  label="House number"
                  placeholder="Type house number"
                  id="houseNumber"
                  {...register("houseNumber")}
                  error={errors.houseNumber?.message}
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <Input
                  type="text"
                  half={false}
                  label="Postal code"
                  placeholder="Type your postal code"
                  id="postCode"
                  {...register("postCode")}
                  error={errors.postCode?.message}
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <Input
                  type="text"
                  half={false}
                  label="City"
                  placeholder="Type your city"
                  id="city"
                  {...register("city")}
                  error={errors.city?.message}
                />
              </div>
            </div>
          </div>
        </div>

        <button
          className="  
              bg-orange-600
             disabled:bg-gray-500 disabled:pointer-events-none disabled:cursor-not-allowed
            w-full py-2 px-10 rounded-xl
      text-lg text-slate-100 font-medium
          "
          disabled={!isValid}
        >
          Save Address
        </button>
      </form>
    </>
  );
};

export default EditAddress;
