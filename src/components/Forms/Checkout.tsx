import FormInput from "../../shared/components/Form/Input";
import { useForm } from "../../shared/utils/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";
import { AiOutlineClockCircle, AiFillCreditCard } from "react-icons/ai";

type Props = {};

const Checkout = (props: Props) => {
  const { formState, inputHandler } = useForm(
    {
      street: { value: "", isValid: false },
      houseNumber: { value: "", isValid: false },
      postCode: { value: "", isValid: false },
      city: { value: "", isValid: false },
      company: { value: "", isValid: true },
      notes: { value: "", isValid: true },
      name: { value: "", isValid: false },
      email: { value: "", isValid: true },
      phoneNumber: { value: "", isValid: true },
    },
    false
  );
  return (
    <>
      <form className="m-4 p-5 dark:text-slate-100 text-gray-800  space-y-4">
        <div className="lg:border xs:border-none rounded-lg dark:border-gray-500">
          <div className="flex flex-col gap-4 border-b py-4">
            <h2 className="px-4 text-2xl font-semibold tracking-wide">
              Delivery Address
            </h2>
            <div className="grid grid-cols-2 p-0 lg:p-4 gap-2 lg:gap-5">
              <div className="col-span-2 lg:col-span-1">
                <FormInput
                  element="text"
                  type="text"
                  id="street"
                  label="Street name"
                  placeholder="Rond-Point du Meir"
                  value={formState.inputs.street.value}
                  errorText="Street name must be at least 3 chars"
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
                  placeholder="12"
                  value={formState.inputs.houseNumber.value}
                  errorText="Please enter your house number"
                  validators={[VALIDATOR_REQUIRE()]}
                  onInputChange={inputHandler}
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <FormInput
                  element="text"
                  type="text"
                  id="postCode"
                  label="Post code"
                  placeholder="1070"
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
                  placeholder="Anderlecht "
                  value={formState.inputs.city.value}
                  errorText="Enter a valid city"
                  validators={[VALIDATOR_MINLENGTH(3), VALIDATOR_MAXLENGTH(18)]}
                  onInputChange={inputHandler}
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <FormInput
                  element="text"
                  type="text"
                  id="company"
                  label="Company name (optional)"
                  placeholder="Type company name"
                  value={formState.inputs.company.value}
                  errorText="Enter a valid company"
                  validators={[]}
                  onInputChange={inputHandler}
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <FormInput
                  element="text"
                  type="text"
                  id="notes"
                  label="Add notes (optional)"
                  placeholder="ie: Please don't ring the bell. Baby is sleeping"
                  value={formState.inputs.notes.value}
                  errorText="Enter a valid notes"
                  validators={[]}
                  onInputChange={inputHandler}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-b py-4">
            <h2 className="px-4 text-2xl font-semibold tracking-wide">
              Personal Details
            </h2>
            <div className="grid grid-cols-2 p-0 lg:p-4 gap-2 lg:gap-5">
              <div className="col-span-2 lg:col-span-1">
                <FormInput
                  element="text"
                  type="text"
                  id="name"
                  label="First and last name"
                  placeholder="Type your full name "
                  value={formState.inputs.name.value}
                  errorText="Name cannot be less than 3 words"
                  validators={[VALIDATOR_MINLENGTH(3)]}
                  onInputChange={inputHandler}
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <FormInput
                  element="text"
                  type="text"
                  id="email"
                  label="E-mail"
                  placeholder="yourmail@email.com"
                  value={formState.inputs.email.value}
                  errorText="Enter a valid email"
                  validators={[VALIDATOR_EMAIL()]}
                  onInputChange={inputHandler}
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <FormInput
                  element="text"
                  type="text"
                  id="phoneNumber"
                  label="Phone Number"
                  placeholder="Type your phone number, i.e. +32-X-XXXXXXX"
                  value={formState.inputs.phoneNumber.value}
                  errorText="Enter a valid phoneNumber"
                  validators={[
                    VALIDATOR_MINLENGTH(13),
                    VALIDATOR_MAXLENGTH(14),
                  ]}
                  onInputChange={inputHandler}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:border xs:border-none rounded-lg dark:border-gray-500 p-4">
          <div className="flex gap-4 items-center">
            <AiOutlineClockCircle className="text-xl" />
            <div className="flex flex-col">
              <span className="font-semibold">Delivery Time</span>
              <FormInput
                element="text"
                type="text"
                id="phoneNumber"
                placeholder="Type your phone number, i.e. +32-X-XXXXXXX"
                value={formState.inputs.phoneNumber.value}
                errorText="Enter a valid phoneNumber"
                validators={[VALIDATOR_MINLENGTH(13), VALIDATOR_MAXLENGTH(14)]}
                onInputChange={inputHandler}
                classes="hidden"
              />
              <span className="text-sm">19:00</span>
            </div>
          </div>
        </div>
        <div className="lg:border xs:border-none rounded-lg dark:border-gray-500 p-4">
          <div className="flex gap-4 items-center">
            <AiFillCreditCard className="text-xl text-orange-500" />
            <div className="flex flex-col">
              <span className="font-semibold">Payment Method</span>
              <FormInput
                element="text"
                type="text"
                id="phoneNumber"
                placeholder="Type your phone number, i.e. +32-X-XXXXXXX"
                value={formState.inputs.phoneNumber.value}
                errorText="Enter a valid phoneNumber"
                validators={[VALIDATOR_MINLENGTH(13), VALIDATOR_MAXLENGTH(14)]}
                onInputChange={inputHandler}
                classes="hidden"
              />
              <span className="text-sm">Credit Card</span>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Checkout;
