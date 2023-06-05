import { useState } from "react";
import Modal from "react-modal";
import { AiOutlineClockCircle, AiFillCreditCard } from "react-icons/ai";
import Input from "../../shared/components/Form/Input";
import useDeliveryTimes from "../../shared/utils/getDeliveryTime";
import { getPaymentMethods } from "../../shared/utils/getPaymentMethod";
import { useTheme } from "../../context/themeStore";
import { BsCheck2Circle, BsXCircle } from "react-icons/bs";
import { useShoppingCart } from "../../context/shoppingCartStore";
import {
  OrderValidationSchema,
  orderValidationSchema,
} from "../../shared/utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useCheckoutStore } from "../../context/checkoutStore";

type Props = {};

Modal.setAppElement("#root");
const newDate = new Date();

const Checkout = (props: Props) => {
  const setOrderId = useCheckoutStore((state) => state.setOrderId);

  const getCartTotal = useShoppingCart((state) => state.getCartTotal);

  const cartItems = useShoppingCart((state) => state.cart);
  const dark = useTheme().dark;
  const [showDeliveryModal, setDeliveryModal] = useState<boolean>(false);
  const [showPaymentModal, setPaymentModal] = useState<boolean>(false);

  const { mutateAsync: placeOrder } = useMutation({
    mutationFn: (order: any) => {
      return axios.post("http://localhost:1337/api/orders", order);
    },
    onSuccess: (response) => {
      const orderId = response.data?.orderId;
      const url = response.data?.url;

      setOrderId(orderId);
      window.location.href = url;
    },
  });

  const { initialHour, deliveryTimes } = useDeliveryTimes(
    "23:00",
    newDate,
    "10:00"
  );

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
        value: "pay at door",
        label: "Cash",
      },
    },
  });

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

  const checkoutHandler: SubmitHandler<OrderValidationSchema> = async (
    data
  ) => {
    const address = [
      data.city,
      data.houseNumber,
      data.street,
      data.postCode,
    ].join(",");

    const newOrder = {
      orderItems: cartItems.map((item) => {
        return {
          product: item.mainProduct.id,
          extras:
            item.extras &&
            item.extras
              .map((extra) =>
                extra.values!.length > 0
                  ? (extra.values!.map((extra) => extra.value) as string[])
                  : undefined
              )
              .flat(),
          size: item.size,
          quantity: item.quantity,
          note: item.notes,
        };
      }),
      user: "userId",
      fullName: data.fullname,
      email: data.orderEmail,
      address: address,
      phoneNumber: data.phoneNumber,
      placeOrderTime: data.deliveryTime.value,
      paymentMethod: data.paymentMethod.value,
    };

    console.log("Order placed is : ", newOrder);

    try {
      const dummyOrderForStripe = {
        orderItems: [
          {
            product: "6457bccd5f9fc5531d4dc1e7",
            extras: [
              "64510167c5d5e0d5f17df934",
              "645101bec5d5e0d5f17df936",
              "645103b1b9da791b582087ef",
            ],
            quantity: 2,
            size: "medium",
          },
          {
            product: "6457c06ef8e63890e289ec80",
            extras: ["645101bec5d5e0d5f17df936"],
            quantity: 1,
            size: "large",
          },
        ],
        user: "6457bf7ecd929252ce16d4f9",
        fullName: "taaas",
        email: "tas@ast.co",
        address: "tasd ,tass ,tdd ,tz",
        phoneNumber: "32131422323",
        placeOrderTime: "asap",
        paymentMethod: "pay at door",
      };
      await placeOrder(dummyOrderForStripe);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(checkoutHandler)}
        className="m-4 space-y-5 p-5 text-gray-800 dark:text-slate-100
        
        "
      >
        <div className="xs:border-none rounded-lg dark:border-gray-600 lg:border">
          <div className="flex flex-col gap-4 border-b py-4 dark:border-b-gray-600">
            <h2 className="text-xl font-semibold tracking-wide lg:px-4 lg:text-2xl">
              Delivery Address
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

          <div className="flex flex-col gap-4 border-b py-4 dark:border-b-gray-600 lg:border-none">
            <h2 className="text-xl font-semibold tracking-wide lg:px-4 lg:text-2xl">
              Personal Details
            </h2>
            <div className="grid grid-cols-2 gap-2 p-0 lg:gap-5 lg:p-4">
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
                  id="orderEmail"
                  placeholder="yourmail@email.com"
                  {...register("orderEmail")}
                  error={errors.orderEmail?.message}
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
          className="flex justify-between border-b p-4 hover:cursor-pointer dark:border-gray-500
          lg:rounded-lg lg:border
          "
          onClick={openDeliveryModal}
        >
          <div className="flex items-center gap-4">
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
                  className="mt-4 w-fit rounded-lg bg-green-600 px-5 text-slate-100"
                  onClick={(e) => closeDeliveryModal(e)}
                >
                  Ok
                </button>
              </Modal>

              <span className="text-sm">{getValues().deliveryTime?.label}</span>
            </div>
          </div>
          {getValues().deliveryTime ? (
            <div>
              <BsCheck2Circle className="text-3xl text-green-600" />
            </div>
          ) : (
            <div>
              <BsXCircle className="text-3xl text-red-600" />
            </div>
          )}
        </div>
        <div
          className="xs:border-none flex items-center justify-between rounded-lg p-4 hover:cursor-pointer dark:border-gray-500 lg:border"
          onClick={openPaymentModal}
        >
          <div className="flex items-center gap-4">
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
                    height: "12rem",
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
                  error={errors.paymentMethod?.message}
                  control={control}
                  options={getPaymentMethods()}
                />
                <button
                  className="mt-4 w-fit rounded-lg bg-green-600 px-5 text-slate-100"
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
          {getValues().paymentMethod?.value ? (
            <div>
              <BsCheck2Circle className="text-3xl text-green-600" />
            </div>
          ) : (
            <div>
              <BsXCircle className="text-3xl text-red-600" />
            </div>
          )}
        </div>
        <button
          className="
          
            
              w-full
             rounded-full bg-orange-600 py-2
            px-10 text-lg font-medium text-slate-100 disabled:pointer-events-none
      disabled:cursor-not-allowed disabled:bg-gray-500 sm:w-fit
          "
          disabled={!isValid}
        >
          <span className="flex flex-col items-center justify-center gap-2 text-sm sm:flex-row sm:text-base">
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
