import { ImInfo } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartStore";
import { useCartStore } from "../../context/cartStore";

function MenuItem({
  id,
  title,
  description,
  price,
  alergens,
}: Omit<Item, "category">) {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div className="w-full mx-auto h-fit border border-gray-400 p-3 rounded-lg flex justify-between items-center lg:text-xl">
      <div>
        <div className="flex flex-row gap-3 items-center ">
          <h3 className="font-semibold">{title}</h3>
          <Link
            to="/nutritions"
            state={{ alergens }}
            className="flex items-center"
          >
            <ImInfo className="inline lg:text-xl" />
          </Link>
        </div>
        <div>
          <p className="text-gray-400 text-sm italic font-serif">
            {description}
          </p>
        </div>
        <p className="mt-4 font-semibold font-sans">$ {price.toFixed(2)}</p>
      </div>
      <button
        className="rounded-full bg-gray-300 dark:bg-gray-500 p-1"
        onClick={() => addToCart({ id, title, description, alergens, price })}
      >
        <AiOutlinePlus className="text-2xl dark:text-green-500" />
      </button>
    </div>
  );
}

export default MenuItem;
