import { GiMonoWheelRobot } from "react-icons/gi";
import { createPortal } from "react-dom";
type Props = {};
const LoadingScreen = (props: Props) => {
  const content = (
    <div className="absolute top-0 z-20 h-full w-full">
      <div className="flex h-screen flex-col items-center justify-center space-y-5 bg-slate-100">
        <div className="text-2xl md:text-4xl">
          <span className="text-red-400">w</span>/
          <span className="text-blue-400">EAT</span>
        </div>
        <div className="rounded-full bg-red-400 p-2">
          <div className="rounded-full bg-yellow-400 p-2">
            <div className="rounded-full bg-green-400 p-2">
              <div className="rounded-full bg-blue-400 p-2">
                <div className="h-24 w-24 rounded-full bg-slate-50 p-3 ">
                  <GiMonoWheelRobot className="h-full w-full animate-wiggle text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="ml-[14px] text-xl font-medium italic tracking-[14px] text-blue-800 md:text-3xl">
          Loading ...
        </h2>
      </div>
    </div>
  );

  return createPortal(
    content,
    document.getElementById("loadingScreen") as HTMLElement
  );
};

export default LoadingScreen;
