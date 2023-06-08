import { useEffect, useState } from "react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link, useOutletContext } from "react-router-dom";
import UserServices from "../api/services/user.service";
interface Props {}

const formatAddress = (address?: Address) => {
  if (address)
    return (
      address.city +
      " " +
      address.street +
      " " +
      "House Number: " +
      address.houseNumber +
      " " +
      address.postalCode
    );
  return "";
};
const Addresses = (props: Props) => {
  const ctx: UserContext = useOutletContext();
  const { data: userInfo } = UserServices.useUser(ctx.id);
  const [home, setHome] = useState<string>("");
  const [work, setWork] = useState<string>("");
  const [other, setOther] = useState<string>("");

  useEffect(() => {
    setHome(formatAddress(userInfo?.homeAddress));
    setWork(formatAddress(userInfo?.workAddress));
    setOther(formatAddress(userInfo?.otherAddress));
  }, [userInfo]);
  return (
    <div className="px-5 text-gray-800 dark:text-slate-200">
      <div className="mt-5 flex items-center gap-10 lg:mt-0">
        <Link to=".." className="text-3xl font-light text-orange-600">
          <RiArrowGoBackLine />
        </Link>
        <h2 className="text-xl font-semibold">Addresses</h2>
      </div>
      <div className="mt-10 flex flex-col gap-4">
        <div className="rounded-lg border p-4">
          <h3 className=" mb-2 font-medium tracking-wider">Home</h3>
          <textarea
            value={home || "Not assigned anything"}
            rows={3}
            disabled
            readOnly
            className="w-full rounded-lg bg-gray-100 px-2 py-2 text-gray-700
            outline-none
            "
          ></textarea>

          <Link
            to="/account/edit-address"
            state={{
              type: "home",
              defaultValues: {
                street: userInfo?.homeAddress?.street,
                city: userInfo?.homeAddress?.city,
                postalCode: userInfo?.homeAddress?.postalCode,
                houseNumber: userInfo?.homeAddress?.houseNumber,
              },
            }}
            className="rounded-lg bg-orange-500 px-4 py-[0.15rem] text-slate-100"
          >
            Add / Edit
          </Link>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className=" mb-2 font-medium tracking-wider">Work</h3>
          <textarea
            value={work || "Not assigned anything"}
            rows={3}
            disabled
            readOnly
            className="w-full rounded-lg bg-gray-100 px-2 py-2 text-gray-700
            outline-none
            "
          ></textarea>

          <Link
            className="rounded-lg bg-orange-500 px-4 py-[0.15rem] text-slate-100"
            to="/account/edit-address"
            state={{
              type: "work",
              defaultValues: {
                street: userInfo?.workAddress?.street,
                city: userInfo?.workAddress?.city,
                postalCode: userInfo?.workAddress?.postalCode,
                houseNumber: userInfo?.workAddress?.houseNumber,
              },
            }}
          >
            Add / Edit
          </Link>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className=" mb-2 font-medium tracking-wider">Other</h3>
          <textarea
            value={other || "Not assigned anything"}
            rows={3}
            disabled
            readOnly
            className="w-full rounded-lg bg-gray-100 px-2 py-2 text-gray-700
            outline-none
            "
          ></textarea>

          <Link
            to="/account/edit-address"
            state={{
              type: "other",
              defaultValues: {
                street: userInfo?.otherAddress?.street,
                city: userInfo?.otherAddress?.city,
                postalCode: userInfo?.otherAddress?.postalCode,
                houseNumber: userInfo?.otherAddress?.houseNumber,
              },
            }}
            className="rounded-lg bg-orange-500 px-4 py-[0.15rem] text-slate-100"
          >
            Add / Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
