import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartStore";
type Props = {};

const CheckOut = (props: Props) => {
  const cartItems = useCart((state) => state.items);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems?.length === 0) navigate("/");
  }, []);
  return (
    <div className="h-screen w-full text-gray-700">
      <form>
        <div className="form--controller">
          <label htmlFor="">Street name</label>
          <input id="street" className="form--input" type="text" />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
