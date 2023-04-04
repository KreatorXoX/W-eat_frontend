import { useState } from "react";
import Modal from "react-modal";
import { AiOutlineClockCircle, AiFillCreditCard } from "react-icons/ai";
import Input from "../../shared/components/Form/Input";

import { getTime } from "../../shared/utils/getDeliveryTime";
import { getPaymentMethods } from "../../shared/utils/getPaymentMethod";
import { useTheme } from "../../context/themeStore";
import { BsCheck2Circle } from "react-icons/bs";
import { useShoppingCart } from "../../context/shoppingCartStore";
import {
  OrderValidationSchema,
  orderValidationSchema,
} from "../../shared/utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
type Props = {};

Modal.setAppElement("#root");

const Checkout = (props: Props) => {
  const newDate = new Date();
  const { initialHour, deliveryTimes } = getTime(23, newDate);

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors, isValid },
  } = useForm<OrderValidationSchema>({
    mode: "onChange",
    resolver: zodResolver(orderValidationSchema),
    defaultValues: {
      deliveryTime: {
        value: initialHour,
        label: "As soon as possible",
      },
      paymentMethod: {
        value: "cash",
        label: "Cash",
      },
    },
  });

  const getCartTotal = useShoppingCart((state) => state.getCartTotal);
  const cartItems = useShoppingCart((state) => state.cart);
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

  const checkoutHandler: SubmitHandler<OrderValidationSchema> = (data) => {
    console.log(data);
    console.log(cartItems);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(checkoutHandler)}
        className="m-4 p-5 dark:text-slate-100 text-gray-800 space-y-5
        
        "
      >
        <div className="lg:border xs:border-none rounded-lg dark:border-gray-600">
          <div className="flex flex-col gap-4 border-b dark:border-b-gray-600 py-4">
            <h2 className="lg:px-4 text-xl lg:text-2xl font-semibold tracking-wide">
              Delivery Address
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
              <div className="col-span-2 lg:col-span-1">
                <Input
                  type="text"
                  half={false}
                  label="Company (optional)"
                  placeholder="Type company name"
                  id="company"
                  {...register("company")}
                  error={errors.company?.message}
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <Input
                  type="text"
                  half={false}
                  label="Add notes (optional)"
                  id="notes"
                  placeholder="ie: Please don't ring the bell. Baby is sleeping"
                  {...register("notes")}
                  error={errors.notes?.message}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-b lg:border-none dark:border-b-gray-600 py-4">
            <h2 className="lg:px-4 text-xl lg:text-2xl font-semibold tracking-wide">
              Personal Details
            </h2>
            <div className="grid grid-cols-2 p-0 lg:p-4 gap-2 lg:gap-5">
              <div className="col-span-2 lg:col-span-1">
                <Input
                  type="text"
                  half={false}
                  label="First and last name"
                  id="fullname"
                  placeholder="Type your full name "
                  {...register("fullname")}
                  error={errors.fullname?.message}
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <Input
                  type="text"
                  half={false}
                  label="E-mail"
                  id="email"
                  placeholder="yourmail@email.com"
                  {...register("email")}
                  error={errors.email?.message}
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <Input
                  type="text"
                  half={false}
                  label="Phone Number"
                  id="phoneNumber"
                  placeholder="Type your phone number, i.e. +32-X-XXXXXXX"
                  {...register("phoneNumber")}
                  error={errors.phoneNumber?.message}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="border-b lg:border dark:border-gray-500 p-4 lg:rounded-lg hover:cursor-pointer
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
                    height: "15rem",
                    left: "0",
                    right: "0",
                    margin: "auto",
                    width: "50%",
                    minWidth: "20rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "center",
                    borderRadius: "1rem",
                    border: "none",
                  },
                }}
              >
                <Input
                  type="select"
                  id="deliveryTime"
                  half={false}
                  label="Select time for delivery"
                  error={errors.deliveryTime?.message}
                  options={deliveryTimes}
                  control={control}
                />

                <button
                  className="w-fit mt-4 px-5 rounded-lg bg-green-600 text-slate-100"
                  onClick={(e) => closeDeliveryModal(e)}
                >
                  Ok
                </button>
              </Modal>

              <span className="text-sm">{getValues().deliveryTime?.label}</span>
            </div>
          </div>
          {getValues().deliveryTime?.value && (
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
                    height: "10rem",
                    width: "50%",
                    minWidth: "20rem",
                    left: "0",
                    right: "0",
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
                <Input
                  type="select"
                  id="paymentMethod"
                  half={false}
                  label="Select your payment method"
                  error={errors.deliveryTime?.message}
                  control={control}
                  options={getPaymentMethods()}
                />
                <button
                  className="w-fit mt-4 px-5 rounded-lg bg-green-600 text-slate-100"
                  onClick={(e) => closePaymentModal(e)}
                >
                  Ok
                </button>
              </Modal>

              <span className="text-sm">
                {getValues().paymentMethod?.label}
              </span>
            </div>
          </div>
          {getValues().paymentMethod?.value && (
            <div>
              <BsCheck2Circle className="text-3xl text-green-600" />
            </div>
          )}
        </div>
        <button
          className="
          
            
              bg-orange-600
             disabled:bg-gray-500 disabled:pointer-events-none disabled:cursor-not-allowed
            w-full sm:w-fit py-2 px-10 rounded-full
      text-lg text-slate-100 font-medium
          "
          disabled={!isValid}
        >
          <span className="items-center flex flex-col sm:flex-row justify-center gap-2 text-sm sm:text-base">
            <span>Order & pay with {getValues().paymentMethod?.label}</span>
            <span className=" tracking-wide">
              (€ {getCartTotal().toFixed(2)})
            </span>
          </span>
        </button>
      </form>
    </>
  );
};

export default Checkout;
