import React from "react";
import { useNavigate, useParams } from "react-router-dom";
type Props = {};

const OrderDetails = (props: Props) => {
  const navigate = useNavigate();
  const id = useParams().id;
  return (
    <div className="p-5 lg:px-4 lg:py-0 space-y-3 text-gray-700 text-sm">
      <div>
        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col justify-center mb-2">
            <h4>OrderId</h4>
            <h4>OrderDate</h4>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <h4 className="text-green-600 font-semibold tracking-wider">
              Completed
            </h4>
            <span
              role={"button"}
              className="bg-yellow-200 text-yellow-600 px-2 py-1 rounded"
              onClick={() => navigate(-1)}
            >
              &lt; &lt; Back
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-1">
          <div>
            <h4 className="font-medium">Delivery Address</h4>
            <span className="ml-1 text-sm">1633 Hampton Meadows</span>
          </div>
          <div>
            <h4 className="font-medium">Payment Method</h4>
            <span className="ml-1 text-sm">Cash</span>
          </div>
        </div>
      </div>

      <hr className="border-t-2 border-t-gray-400 rounded" />

      <div className="overflow-y-auto max-h-[15rem] space-y-2">
        <div>
          <div className="flex justify-between items-start w-full">
            <span>Item1 x 2</span>
            <span>$ 15.00</span>
          </div>
          {/* show the extras */}
          <ul className="text-gray-500 list-disc text-sm">
            <li className="ml-4 last:border-b">
              <div className="flex justify-between text-xs">
                <span>Cola</span> <span className="text-xs">$ 1.00</span>
              </div>
            </li>
            <li className="ml-4 last:border-b py-1">
              <div className="flex justify-between">
                <span className="text-xs">Mayo</span>{" "}
                <span className="text-xs">$ 0.50</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between items-start w-full">
            <span>Item2 x 2</span>
            <span>$ 15.00</span>
          </div>
          {/* show the extras */}
          <ul className="text-gray-500 list-disc text-sm">
            <li className="ml-4 last:border-b py-1">
              <div className="flex justify-between text-xs">
                <span>Cola</span> <span className="text-xs">$ 1.00</span>
              </div>
            </li>
            <li className="ml-4 last:border-b py-1">
              <div className="flex justify-between">
                <span className="text-xs">Mayo</span>{" "}
                <span className="text-xs">$ 0.50</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between items-start w-full">
            <span>Item3 x 1</span>
            <span>$ 15.00</span>
          </div>
          {/* show the extras */}
          <ul className="text-gray-500 list-disc text-sm">
            <li className="ml-4 last:border-b py-1">
              <div className="flex justify-between text-xs">
                <span>Cola</span> <span className="text-xs">$ 1.00</span>
              </div>
            </li>
            <li className="ml-4 last:border-b py-1">
              <div className="flex justify-between">
                <span className="text-xs">Mayo</span>{" "}
                <span className="text-xs">$ 0.50</span>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between items-start w-full">
            <span>Item3 x 1</span>
            <span>$ 15.00</span>
          </div>
          {/* show the extras */}
          <ul className="text-gray-500 list-disc text-sm">
            <li className="ml-4 last:border-b py-1">
              <div className="flex justify-between text-xs">
                <span>Cola</span> <span className="text-xs">$ 1.00</span>
              </div>
            </li>
            <li className="ml-4 last:border-b py-1">
              <div className="flex justify-between">
                <span className="text-xs">Mayo</span>{" "}
                <span className="text-xs">$ 0.50</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-t-2 border-t-gray-400 rounded" />

      <div className="flex flex-col justify-center gap-2">
        <div className="flex justify-between">
          <h4>Items Total</h4>
          <span className="ml-1 text-sm">$ 50.00</span>
        </div>
        <div className="flex justify-between">
          <h4>Delivery Cost</h4>
          <span className="ml-1 text-sm">$ 4.00</span>
        </div>
        <div className="flex justify-between">
          <h4>Cart Total</h4>
          <span className="ml-1 text-sm">$ 54.00</span>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button className="px-4 py-1 rounded font-medium bg-red-200 text-red-600">
          Cancel
        </button>
        <button className="px-4 py-1 rounded font-medium bg-green-200 text-green-600">
          Accept
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
