import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import Input from "../shared/components/Form/Input";
import {
  UpdateUserAddressInput,
  updateUserAddressSchema,
} from "../utils/schema/user.schema";
import UserServices from "../api/services/user.service";

type Props = {};

const UpsertAddress = (props: Props) => {
  const ctx: UserContext = useOutletContext();

  const location = useLocation();
  const addressType: string = location?.state.type + "Address";
  const defaultValues: Address = location?.state.defaultValues;

  const { mutate: updateAddress } = UserServices.useUpdateUserAddress();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<UpdateUserAddressInput>({
    mode: "onChange",
    defaultValues: {
      ...defaultValues,
    },
    resolver: zodResolver(updateUserAddressSchema),
  });

  const upsertAddressHandler: SubmitHandler<UpdateUserAddressInput> = (
    data
  ) => {
    const address = {
      [addressType]: {
        ...data,
      },
    };
    updateAddress({
      data: { ...address },
      id: ctx.id,
    });
  };
  return (
    <>
      <div className="mt-5 flex items-center gap-10 px-5 pl-5 text-gray-800 dark:text-slate-200 lg:mt-0">
        <Link
          to="/account/addresses"
          className="text-3xl font-light text-orange-600"
        >
          <RiArrowGoBackLine />
        </Link>
        <h2 className="text-xl font-semibold">Update Address</h2>
      </div>
      <form
        onSubmit={handleSubmit(upsertAddressHandler)}
        className="m-4 flex flex-col space-y-5 py-5 text-gray-800 dark:text-slate-100
        
        "
      >
        <div>
          <div className="flex flex-col gap-4 border-b py-4 dark:border-b-gray-600">
            <h2
              className="text-center font-sans text-xl font-semibold tracking-widest
            text-blue-300 lg:px-4 lg:text-2xl
            "
            >
              {location?.state.type.toUpperCase()}
            </h2>
            <div className="grid grid-cols-2 gap-2 p-0 lg:gap-5 lg:p-4">
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
                  id="postalCode"
                  {...register("postalCode")}
                  error={errors.postalCode?.message}
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
              w-full
             rounded-xl bg-orange-600 py-2
            px-10 text-lg font-medium text-slate-100
      disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-gray-500
          "
          disabled={!isValid || !isDirty}
        >
          Save Address
        </button>
      </form>
    </>
  );
};

export default UpsertAddress;
