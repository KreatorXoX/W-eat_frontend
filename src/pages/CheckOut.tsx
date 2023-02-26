import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/cartStore";
type Props = {};

const CheckOut = (props: Props) => {
  const cartItems = useCart((state) => state.items);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems?.length === 0) navigate("/");
  }, []);
  return (
    <div className="h-full max-w-2xl lg:max-w-6xl w-full">
      <div className="hidden lg:inline-block m-5">
        <h1 className="text-2xl font-bold tracking-wide">CheckOut</h1>
        <span className="text-sm tracking-widest">Restraunt Name</span>
      </div>
      <div className="m-4 p-5 dark:text-slate-100 text-gray-800 lg:border xs:border-none rounded-lg dark:border-gray-500 space-y-4">
        <form className="flex flex-col gap-4 border-b pb-4">
          <h2 className="px-4 text-2xl font-semibold tracking-wide">
            Delivery Address
          </h2>
          <div className="grid grid-cols-2 gap-4 md:gap-2 md:p-0">
            <div className="form--controller col-span-2 lg:col-span-1">
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
            </div>
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
      </div>
      <Link to="delivery-time">Delivery</Link>
      <Link to="payment-method">Payment Method</Link>
    </div>
  );
};

export default CheckOut;
