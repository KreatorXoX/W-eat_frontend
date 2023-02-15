import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

type Props = {
  children: ReactNode;
  show: boolean;
};
const SideDrawer = ({ children, show }: Props) => {
  const content = (
    <div className={`${show ? "inline-block" : "hidden"}`}>
      <aside
        className="bg-gray-50 lg:bg-black/40 fixed right-0 top-0 z-20 h-screen w-full overflow-hidden
        lg:flex lg:justify-center lg:items-center 
        "
      >
        <div className="lg:bg-slate-100 lg:h-[30rem] lg:w-[40rem] rounded-xl">
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
