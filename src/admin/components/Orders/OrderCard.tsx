import { useNavigate } from "react-router-dom";
type Props = {
  name: string;
  value: number | string | undefined;
  where?: string;
};
const OrderCard = ({ name, value, where }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        if (where) navigate(where);
        else return;
      }}
      className="flex min-h-[20rem] cursor-pointer flex-col items-center justify-evenly gap-2
      rounded-xl
    bg-blue-900 px-2 font-bold text-slate-200 transition hover:scale-105
    "
    >
      <div className="w-full truncate">
        <h2 className="text-center text-xl lg:text-xl xl:text-3xl">{name}</h2>
      </div>
      <div
        className="flex h-32 w-32 items-center justify-center rounded-full border-none bg-orange-500 text-xl font-semibold
      outline-none lg:text-2xl
      "
      >
        {value || "None"}
      </div>
    </div>
  );
};

export default OrderCard;
