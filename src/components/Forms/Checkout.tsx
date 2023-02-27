import FormInput from "../../shared/components/Form/Input";
import { useForm } from "../../shared/utils/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
} from "../../shared/utils/validators";

type Props = {};

const Checkout = (props: Props) => {
  const { formState, inputHandler } = useForm(
    {
      street: { value: "", isValid: false },
      houseNumber: { value: "", isValid: false },
      postCode: { value: "", isValid: false },
      city: { value: "", isValid: false },
    },
    false
  );
  return (
    <>
      <form className="flex flex-col gap-4 border-b pb-4">
        <h2 className="px-4 text-2xl font-semibold tracking-wide">
          Delivery Address
        </h2>
        <div className="grid grid-cols-2 gap-4 md:gap-2 md:p-0">
          <div className="col-span-2 lg:col-span-1">
            <FormInput
              element="text"
              type="text"
              id="street"
              label="Street name"
              placeholder="Street"
              value={formState.inputs.street.value}
              errorText="Street must be at least 3 chars"
              validators={[VALIDATOR_MINLENGTH(3)]}
              onInputChange={inputHandler}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <FormInput
              element="text"
              type="text"
              id="houseNumber"
              label=" House number"
              placeholder="House number"
              value={formState.inputs.houseNumber.value}
              errorText="Please enter a 12 digit phone number"
              validators={[VALIDATOR_MINLENGTH(12)]}
              onInputChange={inputHandler}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <FormInput
              element="text"
              type="text"
              id="postCode"
              label="Post code"
              placeholder="Post code"
              value={formState.inputs.postCode.value}
              errorText="Please enter a valid post code"
              validators={[VALIDATOR_MINLENGTH(3), VALIDATOR_MAXLENGTH(18)]}
              onInputChange={inputHandler}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <FormInput
              element="text"
              type="text"
              id="city"
              label="City "
              placeholder="City "
              value={formState.inputs.city.value}
              errorText="Enter a valid city"
              validators={[VALIDATOR_MINLENGTH(3), VALIDATOR_MAXLENGTH(18)]}
              onInputChange={inputHandler}
            />
          </div>

          {/* <div className="form--controller col-span-2 lg:col-span-1">
            <label
              htmlFor="street"
              id="street"
              className="dark:text-slate-100 text-gray-600"
            >
              Street name
            </label>
            <input
              id="street"
              className="form--input dark:bg-gray-200"
              type="text"
            />
          </div>
          <div className="form--controller col-span-2 lg:col-span-1">
            <label
              htmlFor="houseNumber"
              id="houseNumber"
              className="dark:text-slate-100 text-gray-600"
            >
              House number
            </label>
            <input
              id="houseNumber"
              className="form--input dark:bg-gray-200"
              type="text"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:gap-2 lg:p-0">
          <div className="form--controller col-span-2 lg:col-span-1">
            <label
              htmlFor="Postcode"
              id="Postcode"
              className="dark:text-slate-100 text-gray-600"
            >
              Postcode
            </label>
            <input
              id="postcode"
              className="form--input dark:bg-gray-200"
              type="text"
            />
          </div>
          <div className="form--controller col-span-2 lg:col-span-1">
            <label
              htmlFor="city"
              id="city"
              className="dark:text-slate-100 text-gray-600"
            >
              City
            </label>
            <input
              id="city"
              className="form--input dark:bg-gray-200"
              type="text"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:gap-2 lg:p-0">
          <div className="form--controller col-span-2 lg:col-span-1">
            <label
              htmlFor="companyName"
              id="companyName"
              className="dark:text-slate-100 text-gray-600"
            >
              Company name (optional)
            </label>
            <input
              id="companyName"
              className="form--input dark:bg-gray-200"
              type="text"
            />
          </div>
          <div className="form--controller col-span-2 lg:col-span-1">
            <label
              htmlFor="note"
              id="note"
              className="dark:text-slate-100 text-gray-600"
            >
              Add note
            </label>
            <input
              id="note"
              className="form--input dark:bg-gray-200"
              type="text"
            />
          </div> */}
        </div>
      </form>
      <form className="flex flex-col gap-4 border-b pb-4">
        <h2 className="px-4 text-2xl font-semibold tracking-wide">
          Personal Details
        </h2>
        <div className="grid grid-cols-2 gap-4 md:gap-2 md:p-0">
          <div
            className={`${
              true ? "formDisabled" : ""
            } form--controller col-span-2 lg:col-span-1`}
          >
            <label
              htmlFor="name"
              id="name"
              className="dark:text-slate-100 text-gray-600"
            >
              First and last name
            </label>
            <input
              id="name"
              className={`form--input ${false ? "dark:bg-gray-200" : ""}`}
              type="text"
            />
          </div>
          <div className="form--controller col-span-2 lg:col-span-1">
            <label
              htmlFor="email"
              id="email"
              className="dark:text-slate-100 text-gray-600"
            >
              E-mail
            </label>
            <input
              id="email"
              className="form--input dark:bg-gray-200"
              type="email"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:gap-2 lg:p-0">
          <div className="form--controller col-span-2 lg:col-span-1">
            <label
              htmlFor="phoneNumber"
              id="phoneNumber"
              className="dark:text-slate-100 text-gray-600"
            >
              Phone Number
            </label>
            <input
              id="phoneNumber"
              className="form--input dark:bg-gray-200"
              type="tel"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Checkout;
