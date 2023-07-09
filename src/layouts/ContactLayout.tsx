import { Outlet, useNavigate } from "react-router-dom";

type Props = {};

const ContactLayout = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className=" bg-gray-500">
      <nav>
        <ul className="flex flex-row justify-center gap-5 font-semibold text-gray-700 md:gap-14">
          <li>
            <div className="hover:cursor-pointer" onClick={() => navigate(-1)}>
              Go Back
            </div>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default ContactLayout;
