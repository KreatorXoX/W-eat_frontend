import { ReactNode } from "react";

type Props = { children?: ReactNode };

const MainHeader = (props: Props) => {
  return (
    <header className="flex w-full items-center justify-between border-b bg-slate-100 p-4 px-6 dark:border-gray-600 dark:bg-gray-900 ">
      {props.children}
    </header>
  );
};

export default MainHeader;
