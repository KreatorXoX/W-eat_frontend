import { AiOutlineClose } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";

interface Props {}

const Nutritions = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const alergenId: string = location.state?.alergensId;
  return (
    <div className="dark:text-slate-200 text-gray-700 px-4 space-y-6 overflow-y-hidden">
      <div className="flex flex-row justify-between mt-4 items-center ">
        <h1 className="font-bold  text-xl">My nutritions</h1>
        <AiOutlineClose
          onClick={() => navigate("..")}
          className="text-2xl cursor-pointer"
        />
      </div>
      <p>alergen-id is it {alergenId}</p>
    </div>
  );
};

export default Nutritions;
