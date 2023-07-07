import { GiMonoWheelRobot } from "react-icons/gi";
type Props = {};
const LoadingScreen = (props: Props) => {
  return (
    <div className="relative h-screen bg-gray-400/60">
      <div className="absolute top-[35%] left-[40%] rounded-full bg-gray-800/70 p-10 text-7xl ">
        <div className="flex flex-col items-center justify-center">
          <h2 className="absolute -top-2 text-4xl text-slate-200">W-eat</h2>
          <GiMonoWheelRobot className="animate-wiggle text-red-500" />
          <h2 className="absolute -top-20 ml-[14px] text-5xl italic tracking-[14px] text-gray-800">
            Loading
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
