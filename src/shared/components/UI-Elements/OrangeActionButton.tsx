import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
type Props = {
  whereTo: string;
  text: ReactNode;
  price: number;
};

const OrangeActionButton = ({ whereTo, text, price }: Props) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(whereTo)}
      className="bg-orange-600 rounded-full py-1 my-2
      text-xl text-slate-100 font-semibold w-full
      "
    >
      <p className="flex items-center justify-center space-x-2 text-lg font-bold">
        <span>{text}</span>
        <span className=" tracking-wide">(€ {price.toFixed(2)})</span>
      </p>
    </button>
  );
};

export default OrangeActionButton;
