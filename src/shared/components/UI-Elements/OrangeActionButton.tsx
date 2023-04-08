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
      className="my-2 w-full rounded-full bg-orange-600
      py-1 text-xl font-semibold text-slate-100
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
