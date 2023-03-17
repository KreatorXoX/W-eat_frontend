import { AiOutlineClose } from "react-icons/ai";
import { ImInfo } from "react-icons/im";
import { useParams, useNavigate, Link } from "react-router-dom";
import { items } from "../shared/utils/data";
interface Props {}

const Product = (props: Props) => {
  const navigate = useNavigate();
  const id = useParams().id;

  const item = items.find((item) => item.id === id);

  return (
    <div className="dark:text-slate-200 text-gray-700">
      <div className="space-y-4 px-4">
        <div className="flex justify-between">
          <div className="flex flex-row gap-3 items-center ">
            <h3 className="font-semibold text-2xl">{item?.title}</h3>
            <Link
              to="/nutritions"
              state={{ alergens: item?.alergens }}
              className="flex items-center"
            >
              <ImInfo className="inline lg:text-xl" />
            </Link>
          </div>
          <Link to="..">
            <AiOutlineClose className="text-2xl cursor-pointer" />
          </Link>
        </div>
        <p className="">{item?.ingridients}</p>
        <p className="font-bold text-xl">€ {item?.price.toFixed(2)}</p>
      </div>
      <div className="bg-gray-200 space-y-4 px-4 overflow-y-scroll">
        {item?.extras.map((extra) => (
          <div key={`${extra.id}`}>
            <h3>{extra.name}</h3>
            <ol className="list-disc">
              {extra.extraItems.map((item) => (
                <li className="ml-4 flex gap-2 items-center p-1" key={item.id}>
                  <span>{item.name}</span>
                  <span>
                    {item.price ? `+ € ${item?.price?.toFixed(2)}` : ""}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
