import { AiOutlineClockCircle } from "react-icons/ai";
import { MdDeliveryDining } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";
import { Rating } from "react-simple-star-rating";
type Props = {};

const sectionsArr = ["popular", "tai", "beef"];

function TopSection({}: Props) {
  return (
    <div className="mx-auto max-w-7xl rounded-lg bg-slate-50 pb-2 shadow-md dark:bg-gray-800">
      <div className="h-[20rem]">
        <img
          src="https://res.cloudinary.com/dinhhwb9x/image/upload/v1678532308/restrauntMain_xhssgi.jpg"
          alt="main"
          className="h-full w-full rounded-t-lg object-cover object-center"
        />
      </div>
      <div className="pl-5">
        <h2 className="my-6 font-serif text-xl font-bold">Rest the Round</h2>
        <div className="flex w-full items-baseline gap-2">
          <Rating
            fillColor="rgb(234 88 12)"
            initialValue={5}
            size={20}
            SVGstyle={{ display: "inline" }}
            readonly
            allowTitleTag={false}
          />
          <span className="text-sm underline hover:cursor-pointer hover:no-underline">
            2.4k reviews
          </span>
        </div>
        <div className="my-2 flex items-center gap-5 text-sm">
          <div className="flex items-center gap-2">
            <AiOutlineClockCircle className="inline text-xl" />
            <p>50-75 min</p>
          </div>
          <div className="flex items-center gap-2">
            <MdDeliveryDining className="inline text-[1.5rem]" />
            <p>€ 6,00</p>
          </div>
          <div className="flex items-center gap-2">
            <BiShoppingBag className="inline text-xl" />
            <p>Min. € 30,00</p>
          </div>
        </div>
        <div className="my-2 text-sm">
          <p className="font-semibold">
            Working Hours : <span className="font-normal">10:00 - 22:00</span>
          </p>
        </div>
      </div>
      <div className="mx-5 mt-4 flex flex-row justify-center gap-5 overflow-hidden rounded-lg bg-gray-200 py-2 dark:bg-zinc-500">
        {sectionsArr.map((sec) => (
          <div
            key={sec + Date.now()}
            className="px-2 font-semibold text-gray-500 hover:text-gray-900 dark:text-slate-50 dark:hover:text-gray-900"
          >
            <a href={`#${sec}`}>{sec}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopSection;
