import { useState } from "react";
import Modal from "react-modal";
import { AiOutlineClockCircle, AiFillCreditCard } from "react-icons/ai";
import FormInput from "../../shared/components/Form/Input";
import { useForm } from "../../shared/utils/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  VALIDATOR_REQUIRE_SELECT,
} from "../../shared/utils/validators";
import { getTime } from "../../shared/utils/getDeliveryTime";
import { getPaymentMethods } from "../../shared/utils/getPaymentMethod";
import { useTheme } from "../../context/themeStore";
import { BsCheck2Circle } from "react-icons/bs";
import { useCartStore } from "../../context/cartStore";
type Props = {};

Modal.setAppElement("#root");

const Checkout = (props: Props) => {
  const totalPrice = useCartStore((state) => state.totalPrice);
  const dark = useTheme().dark;
  const [showDeliveryModal, setDeliveryModal] = useState<boolean>(false);
  const [showPaymentModal, setPaymentModal] = useState<boolean>(false);

  const openDeliveryModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDeliveryModal(true);
  };
  const closeDeliveryModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDeliveryModal(false);
  };
  const openPaymentModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPaymentModal(true);
  };
  const closePaymentModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPaymentModal(false);
  };

  const { formState, inputHandler } = useForm(
    {
      street: { value: "", isValid: false },
      houseNumber: { value: "", isValid: false },
      postCode: { value: "", isValid: false },
      city: { value: "", isValid: false },
      company: { value: "", isValid: false },
      notes: { value: "", isValid: false },
      name: { value: "", isValid: false },
      email: { value: "", isValid: false },
      phoneNumber: { value: "", isValid: false },
      deliveryTime: { value: getTime()?.initialHour!, isValid: true },
      paymentMethod: { value: "Cash", isValid: true },
    },
    false
  );

  const checkoutHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.isValid) return;
    else console.log(formState.inputs);
  };
  return (
    <>
      <form
        onSubmit={checkoutHandler}
        className="m-4 p-5 dark:text-slate-100 text-gray-800  space-y-5"
      >
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
                  initialValid={true}
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
                  initialValid={true}
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
        <div
          className="lg:border xs:border-none rounded-lg dark:border-gray-500 p-4 hover:cursor-pointer
          flex justify-between
          "
          onClick={openDeliveryModal}
        >
          <div className="flex gap-4 items-center">
            <AiOutlineClockCircle className="text-xl text-violet-500" />
            <div className="flex flex-col">
              <span className="font-semibold">Delivery Time</span>
              <Modal
                isOpen={showDeliveryModal}
                onRequestClose={closeDeliveryModal}
                contentLabel="Modal"
                shouldCloseOnEsc={true}
                shouldCloseOnOverlayClick={true}
                onAfterOpen={() => {
                  document.body.style.overflow = "hidden";
                }}
                onAfterClose={() => {
                  document.body.style.overflow = "unset";
                }}
                style={{
                  overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                  },
                  content: {
                    backgroundColor: `${
                      dark ? "rgb(55 65 81)" : "rgb(241 245 249)"
                    }`,
                    opacity: "1",
                    height: "fit-content",
                    width: "50%",
                    minWidth: "15rem",
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "center",
                    borderRadius: "1rem",
                    border: "none",
                  },
                }}
              >
                <FormInput
                  element="select"
                  type="text"
                  id="deliveryTime"
                  label="Select time for delivery"
                  options={getTime()?.deliveryTimes}
                  initialValid={true}
                  initialValue={getTime()?.initialHour}
                  placeholder=""
                  value={formState.inputs.deliveryTime.value}
                  errorText=""
                  validators={[VALIDATOR_REQUIRE_SELECT()]}
                  onInputChange={inputHandler}
                />

                <button
                  className="w-fit mt-4 px-5 rounded-lg bg-green-600 text-slate-100"
                  onClick={(e) => closeDeliveryModal(e)}
                >
                  Ok
                </button>
              </Modal>

              <span className="text-sm">
                {formState.inputs.deliveryTime.value}
              </span>
            </div>
          </div>
          {formState.inputs.deliveryTime.isValid && (
            <div>
              <BsCheck2Circle className="text-3xl text-green-600" />
            </div>
          )}
        </div>
        <div
          className="lg:border xs:border-none rounded-lg dark:border-gray-500 p-4 flex justify-between items-center hover:cursor-pointer"
          onClick={openPaymentModal}
        >
          <div className="flex gap-4 items-center">
            <AiFillCreditCard className="text-xl text-orange-500" />
            <div className="flex flex-col">
              <span className="font-semibold">Payment Method</span>
              <Modal
                isOpen={showPaymentModal}
                onRequestClose={closePaymentModal}
                contentLabel="Modal"
                shouldCloseOnEsc={true}
                shouldCloseOnOverlayClick={true}
                onAfterOpen={() => {
                  document.body.style.overflow = "hidden";
                }}
                onAfterClose={() => {
                  document.body.style.overflow = "unset";
                }}
                style={{
                  overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                  },
                  content: {
                    backgroundColor: `${
                      dark ? "rgb(55 65 81)" : "rgb(241 245 249)"
                    }`,
                    opacity: "1",
                    height: "fit-content",
                    width: "50%",
                    minWidth: "15rem",
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "center",
                    borderRadius: "1rem",
                    border: "none",
                  },
                }}
              >
                <FormInput
                  element="select"
                  type="text"
                  id="paymentMethod"
                  label="Select your payment method"
                  options={getPaymentMethods()}
                  placeholder=""
                  value={formState.inputs.paymentMethod.value}
                  errorText=""
                  validators={[]}
                  onInputChange={inputHandler}
                  initialValid={true}
                  initialValue="Cash"
                />
                <button
                  className="w-fit mt-4 px-5 rounded-lg bg-green-600 text-slate-100"
                  onClick={(e) => closePaymentModal(e)}
                >
                  Ok
                </button>
              </Modal>

              <span className="text-sm">
                {formState.inputs.paymentMethod.value}
              </span>
            </div>
          </div>
          {formState.inputs.paymentMethod.isValid && (
            <div>
              <BsCheck2Circle className="text-3xl text-green-600" />
            </div>
          )}
        </div>
        <button
          className={`${
            formState.isValid
              ? "bg-orange-600"
              : "bg-gray-500 pointer-events-none cursor-not-allowed"
          }  w-full sm:w-fit py-1 px-10 rounded-full
      text-lg text-slate-100 font-semibold`}
          disabled={!formState.isValid}
        >
          <span className="items-center flex flex-col sm:flex-row justify-center gap-2 text-sm sm:text-base">
            <span>Order & pay with {formState.inputs.paymentMethod.value}</span>
            <span className=" tracking-wide">(€ {totalPrice.toFixed(2)})</span>
          </span>
        </button>
      </form>
    </>
  );
};

export default Checkout;
