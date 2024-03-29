import { ImInfo } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

type Props = {
  product: IProduct;
};

function MenuItem({ product }: Props) {
  const navigate = useNavigate();
  return (
    <div
      className="mx-auto flex h-fit w-full items-center justify-between gap-4 rounded-lg border border-gray-300 bg-slate-100 p-3 dark:border-gray-600 dark:bg-gray-800 lg:text-lg
      "
    >
      <div>
        <div className="flex flex-row items-center gap-3">
          <h3 className="font-semibold">{product?.name}</h3>
          <Link
            to="/nutritions"
            state={{ alergens: product.allergens }}
            className="flex items-center"
          >
            <ImInfo className="inline text-orange-400 lg:text-xl" />
          </Link>
        </div>
        <div>
          <p className="my-1 text-sm text-gray-500 dark:text-slate-200">
            {product?.description}
          </p>
        </div>
        <p className="mt-4 font-semibold">
          € {product?.sizes[0].price.toFixed(2)}
        </p>
      </div>
      <button
        className="rounded-full bg-gray-200 p-1 dark:bg-gray-500"
        onClick={() => navigate(`/product/${product?._id}`)}
      >
        <AiOutlinePlus className="text-2xl" />
      </button>
    </div>
  );
}

export default MenuItem;
