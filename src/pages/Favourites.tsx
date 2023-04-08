import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";

interface Props {}

const Favourites = (props: Props) => {
  return (
    <div className="px-5 text-gray-800 dark:text-slate-200">
      <div className="mt-5 flex items-center gap-10 lg:mt-0">
        <Link to=".." className="text-3xl font-light text-orange-600">
          <RiArrowGoBackLine />
        </Link>
        <h2 className="text-xl font-semibold">Favourite Orders</h2>
      </div>
    </div>
  );
};

export default Favourites;
