type Props = {
  name: string;
  value: number | string | undefined;
};
const OrderCard = ({ name, value }: Props) => {
  return (
    <div
      className="flex min-h-[20rem] flex-col items-center justify-evenly gap-4 rounded-xl bg-blue-900
      
    font-bold text-slate-200
    "
    >
      <h2 className="flex flex-wrap text-center text-3xl">{name}</h2>

      <div
        className="flex h-32 w-32 items-center justify-center rounded-full border-none bg-orange-500 text-2xl
      font-semibold outline-none
      "
      >
        {value || "None"}
      </div>
    </div>
  );
};

export default OrderCard;
