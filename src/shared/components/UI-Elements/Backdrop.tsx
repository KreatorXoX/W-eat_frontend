import React from "react";
import ReactDOM from "react-dom";

type Props = {
  onClick: () => void;
};
const Backdrop = ({ onClick }: Props) => {
  let content = (
    <div
      onClick={onClick}
      className="bg-black/75 fixed top-0 left-0 w-full h-screen z-10"
    ></div>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById("backdropPortal") as Element
  );
};

export default Backdrop;
