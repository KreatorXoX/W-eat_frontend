import { AiOutlineClose } from "react-icons/ai";
import { BsBag, BsHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface Props {}

const Nutritions = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div className="dark:text-slate-200 text-gray-700 px-4 space-y-6 overflow-y-hidden">
      <div className="flex flex-row justify-between mt-4 items-center ">
        <h1 className="font-bold  text-xl">My nutritions</h1>
        <AiOutlineClose
          onClick={() => navigate("/")}
          className="text-2xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Nutritions;
