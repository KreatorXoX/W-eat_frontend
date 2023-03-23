import { useState } from "react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";

interface Props {}

const Addresses = (props: Props) => {
  const [home, setHome] = useState<string>("");
  const [work, setWork] = useState<string>("");
  const [other, setOther] = useState<string>("");
  return (
    <div className="text-gray-800 px-5 dark:text-slate-200">
      <div className="mt-5 lg:mt-0 flex gap-10 items-center">
        <Link to=".." className="text-orange-600 text-3xl font-light">
          <RiArrowGoBackLine />
        </Link>
        <h2 className="font-semibold text-xl">Addresses</h2>
      </div>
      <div className="flex flex-col mt-10 gap-4">
        <div className="border p-4 rounded-lg">
          <h3 className=" font-medium tracking-wider mb-2">Home</h3>
          <textarea
            value={home || "Not assigned anything"}
            rows={3}
            disabled
            readOnly
            className="w-full bg-gray-100 rounded-lg px-2 py-2 outline-none
            text-gray-700
            "
          ></textarea>

          <Link
            to="/account/edit-address"
            state={{ type: "home" }}
            className="bg-orange-500 text-slate-100 px-4 py-[0.15rem] rounded-lg"
          >
            Add / Edit
          </Link>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className=" font-medium tracking-wider mb-2">Work</h3>
          <textarea
            value={work || "Not assigned anything"}
            rows={3}
            disabled
            readOnly
            className="w-full bg-gray-100 rounded-lg px-2 py-2 outline-none
            text-gray-700
            "
          ></textarea>

          <Link
            className="bg-orange-500 text-slate-100 px-4 py-[0.15rem] rounded-lg"
            to="/account/edit-address"
            state={{ type: "work" }}
          >
            Edit
          </Link>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className=" font-medium tracking-wider mb-2">Other</h3>
          <textarea
            value={other || "Not assigned anything"}
            rows={3}
            disabled
            readOnly
            className="w-full bg-gray-100 rounded-lg px-2 py-2 outline-none
            text-gray-700
            "
          ></textarea>

          <Link
            to="/account/edit-address"
            state={{ type: "other" }}
            className="bg-orange-500 text-slate-100 px-4 py-[0.15rem] rounded-lg"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
