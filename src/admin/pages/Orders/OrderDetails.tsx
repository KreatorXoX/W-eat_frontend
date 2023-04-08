import { useNavigate, useParams } from "react-router-dom";
import GenericButton from "../../../shared/components/UI-Elements/GenericButton";
type Props = {};

const OrderDetails = (props: Props) => {
  const navigate = useNavigate();
  const id = useParams().id;
  return (
    <div className="space-y-3 p-5 text-sm text-gray-700 lg:px-4 lg:py-0">
      <div>
        <div className="flex w-full items-start justify-between">
          <div className="mb-2 flex flex-col justify-center">
            <h4>OrderId</h4>
            <h4>OrderDate</h4>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h4 className="font-semibold tracking-wider text-green-600">
              Completed
            </h4>
            <GenericButton
              classes="rounded-lg"
              text="&lt; &lt; Back"
              color="yellow"
              onClick={() => navigate(-1)}
            />
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

      <hr className="rounded border-t-2 border-t-gray-400" />

      <div className="max-h-[20rem] space-y-2 overflow-y-auto sm:max-h-[25rem]">
        <div>
          <div className="flex w-full items-start justify-between">
            <span>Item1 x 2</span>
            <span>$ 15.00</span>
          </div>
          {/* show the extras */}
          <ul className="list-disc text-sm text-gray-500">
            <li className="ml-4">
              <div className="flex justify-between text-xs">
                <span>Cola</span> <span className="text-xs">$ 1.00</span>
              </div>
            </li>
            <li className="ml-4 py-1">
              <div className="flex justify-between">
                <span className="text-xs">Mayo</span>{" "}
                <span className="text-xs">$ 0.50</span>
              </div>
            </li>
          </ul>
          <p className="border-b font-bold italic text-red-500">Notes</p>
        </div>
        <div>
          <div className="flex w-full items-start justify-between">
            <span>Item2 x 2</span>
            <span>$ 15.00</span>
          </div>
          {/* show the extras */}
          <ul className="list-disc text-sm text-gray-500">
            <li className="ml-4 py-1">
              <div className="flex justify-between text-xs">
                <span>Cola</span> <span className="text-xs">$ 1.00</span>
              </div>
            </li>
            <li className="ml-4 py-1">
              <div className="flex justify-between">
                <span className="text-xs">Mayo</span>{" "}
                <span className="text-xs">$ 0.50</span>
              </div>
            </li>
          </ul>
          <p className="border-b font-bold italic text-red-500">Notes</p>
        </div>
        <div>
          <div className="flex w-full items-start justify-between">
            <span>Item3 x 1</span>
            <span>$ 15.00</span>
          </div>
          {/* show the extras */}
          <ul className="list-disc text-sm text-gray-500">
            <li className="ml-4 py-1">
              <div className="flex justify-between text-xs">
                <span>Cola</span> <span className="text-xs">$ 1.00</span>
              </div>
            </li>
            <li className="ml-4 py-1">
              <div className="flex justify-between">
                <span className="text-xs">Mayo</span>{" "}
                <span className="text-xs">$ 0.50</span>
              </div>
            </li>
          </ul>
          <p className="border-b font-bold italic text-red-500">Notes</p>
        </div>
        <div>
          <div className="flex w-full items-start justify-between">
            <span>Item3 x 1</span>
            <span>$ 15.00</span>
          </div>
          {/* show the extras */}
          <ul className="list-disc text-sm text-gray-500">
            <li className="ml-4 py-1">
              <div className="flex justify-between text-xs">
                <span>Cola</span> <span className="text-xs">$ 1.00</span>
              </div>
            </li>
            <li className="ml-4 py-1">
              <div className="flex justify-between">
                <span className="text-xs">Mayo</span>{" "}
                <span className="text-xs">$ 0.50</span>
              </div>
            </li>
          </ul>
          <p className="border-b font-bold italic text-red-500">Notes</p>
        </div>
        <div>
          <div className="flex w-full items-start justify-between">
            <span>Item4 x 1</span>
            <span>$ 15.00</span>
          </div>
          {/* show the extras */}
          <ul className="list-disc text-sm text-gray-500">
            <li className="ml-4 py-1">
              <div className="flex justify-between text-xs">
                <span>Cola</span> <span className="text-xs">$ 1.00</span>
              </div>
            </li>
            <li className="ml-4 py-1">
              <div className="flex justify-between">
                <span className="text-xs">Mayo</span>{" "}
                <span className="text-xs">$ 0.50</span>
              </div>
            </li>
          </ul>
          <p className="border-b font-bold italic text-red-500">Notes</p>
        </div>
        <div>
          <div className="flex w-full items-start justify-between">
            <span>Item4 x 1</span>
            <span>$ 15.00</span>
          </div>
          {/* show the extras */}
          <ul className="list-disc text-sm text-gray-500">
            <li className="ml-4 py-1">
              <div className="flex justify-between text-xs">
                <span>Cola</span> <span className="text-xs">$ 1.00</span>
              </div>
            </li>
            <li className="ml-4 py-1">
              <div className="flex justify-between">
                <span className="text-xs">Mayo</span>{" "}
                <span className="text-xs">$ 0.50</span>
              </div>
            </li>
          </ul>
          <p className="border-b font-bold italic text-red-500">Notes</p>
        </div>
      </div>

      <hr className="rounded border-t-2 border-t-gray-400" />

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
        <GenericButton
          classes="rounded-lg font-medium"
          text="Cancel"
          color="red"
        />
        <GenericButton classes="rounded-lg font-medium" text="Accept" />
      </div>
    </div>
  );
};

export default OrderDetails;
