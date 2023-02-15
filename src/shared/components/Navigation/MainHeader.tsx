import { ReactNode } from "react";

type Props = { children?: ReactNode };

const MainHeader = (props: Props) => {
  return (
    <header className="w-full max-w-7xl mx-auto flex items-center justify-between relative p-4 px-6">
      {props.children}
    </header>
  );
};

export default MainHeader;
