import { ImInfo } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

type Props = {
  item: Item;
};

function MenuItem({ item }: Props) {
  const navigate = useNavigate();
  return (
    <div
      className="w-full mx-auto h-fit border border-gray-300 dark:border-gray-600 p-3 rounded-lg flex justify-between gap-4 items-center lg:text-lg bg-slate-100 dark:bg-gray-800
      "
    >
      <div>
        <div className="flex flex-row gap-3 items-center">
          <h3 className="font-semibold">{item?.name}</h3>
          <Link
            to="/nutritions"
            state={{ alergens: item?.alergens }}
            className="flex items-center"
          >
            <ImInfo className="inline lg:text-xl" />
          </Link>
        </div>
        <div>
          <p className="text-gray-500 dark:text-slate-200 text-sm my-1">
            {item?.description}
          </p>
        </div>
        <p className="mt-4 font-semibold">€ {item?.price.toFixed(2)}</p>
      </div>
      <button
        className="rounded-full bg-gray-200 dark:bg-gray-500 p-1"
        onClick={() => navigate(`/product/${item?.id}`)}
      >
        <AiOutlinePlus className="text-2xl" />
      </button>
    </div>
  );
}

export default MenuItem;
