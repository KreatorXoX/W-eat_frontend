import { FormEvent } from "react";
import { useForm } from "../../shared/utils/form-hook";
import FormInput from "../../shared/components/Form/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
} from "../../shared/utils/validators";
import { Link } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";
type Props = {};

const arr = ["red", "blue", "purple", "orange"];
const typeers = arr.map((item, idx) => <option key={idx}>{item}</option>);
const Register = (props: Props) => {
  const { formState, inputHandler } = useForm(
    {
      name: { value: "", isValid: false },
      email: { value: "", isValid: false },
      password: { value: "", isValid: false },
      confirmPassword: { value: "", isValid: false },
    },
    false
  );

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (formState.isValid) console.log(formState.inputs);
    else return;
  };
  return (
    <form
      onSubmit={formSubmitHandler}
      className="p-5 flex flex-col items-center rounded-lg space-y-4 w-full h-full text-gray-800 dark:text-slate-200 "
    >
      <div className="flex items-center gap-10 justify-start w-full border-b border-b-gray-400 pb-2">
        <Link to=".." className="text-orange-600 text-3xl font-light">
          <RiArrowGoBackLine />
        </Link>

        <h2 className="font-bold text-2xl ">Create account</h2>
      </div>
      <div className="overflow-auto w-full">
        <div className="w-full flex flex-col gap-4">
          <FormInput
            element="text"
            type="text"
            id="name"
            label="Name"
            placeholder="Name"
            value={formState.inputs.name.value}
            errorText="Name must be at least 3 chars"
            validators={[VALIDATOR_MINLENGTH(3)]}
            onInputChange={inputHandler}
          />
          <FormInput
            element="text"
            type="email"
            id="email"
            label="Email address"
            placeholder="Email address"
            value={formState.inputs.email.value}
            errorText="Please enter a valid e-mail"
            validators={[VALIDATOR_EMAIL()]}
            onInputChange={inputHandler}
          />
          <FormInput
            element="text"
            type="password"
            id="password"
            label="Password"
            placeholder="Password"
            value={formState.inputs.password.value}
            errorText="Name must be at least 3 chars"
            validators={[VALIDATOR_MINLENGTH(3), VALIDATOR_MAXLENGTH(18)]}
            onInputChange={inputHandler}
          />

          <FormInput
            element="text"
            type="password"
            id="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm Password"
            value={formState.inputs.confirmPassword.value}
            errorText="Name must be at least 3 chars"
            validators={[VALIDATOR_MINLENGTH(3), VALIDATOR_MAXLENGTH(18)]}
            onInputChange={inputHandler}
          />
        </div>
        <div className="mt-5 w-full flex flex-col gap-2">
          <button
            disabled={!formState.isValid}
            type="submit"
            className="auth--button dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 transition-colors duration-200
         text-slate-100 disabled:bg-gray-300 disabled:text-gray-500 dark:disabled:bg-gray-300 dark:disabled:text-gray-500"
          >
            Create account
          </button>
          <p className="text-sm text-gray-500">
            By clicking on "Create account", you agree to our terms of use,
            terms of use of point collection and privacy statement.
          </p>
          <Link
            to="/account/auth"
            className=" font-medium mt-2 text-base text-center tracking-wide underline hover:no-underline"
          >
            I already have an account
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Register;
