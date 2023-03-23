import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";

interface Props {}

const Favourites = (props: Props) => {
  return (
    <div className="text-gray-800 px-5 dark:text-slate-200">
      <div className="mt-5 lg:mt-0 flex gap-10 items-center">
        <Link to=".." className="text-orange-600 text-3xl font-light">
          <RiArrowGoBackLine />
        </Link>
        <h2 className="font-semibold text-xl">Favourite Orders</h2>
      </div>
    </div>
  );
};

export default Favourites;
