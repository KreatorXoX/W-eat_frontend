import { ReactNode } from "react";
import ReactDOM from "react-dom";
import { useTheme } from "../../../context/themeStore";

type Props = {
  children: ReactNode;
  show: boolean;
};
const SideDrawer = ({ children, show }: Props) => {
  const dark = useTheme((state) => state.dark);
  const content = (
    <div className={`${show ? "inline" : "hidden"}`}>
      <aside
        className={`${
          dark ? "bg-gray-600" : "bg-slate-200"
        }  lg:bg-gray-600/10 fixed right-0 top-0 z-20 w-full overflow-hidden
        lg:flex lg:justify-center lg:items-center `}
      >
        <div
          className={`${
            dark ? "bg-gray-600" : "bg-slate-200"
          }  lg:h-[30rem] lg:w-[40rem] rounded-xl`}
        >
          {children}
        </div>
      </aside>
    </div>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("drawerPortal") as Element
  );
};

export default SideDrawer;
