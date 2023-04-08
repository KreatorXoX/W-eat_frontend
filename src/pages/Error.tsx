import MainNavigation from "../shared/components/Navigation/MainNavigation";

type Props = {};

const Error = (props: Props) => {
  return (
    <div className="flex h-screen flex-col bg-gray-400">
      <MainNavigation />
      <div className="flex h-full w-full items-center justify-center">
        <img
          src="https://res.cloudinary.com/dinhhwb9x/image/upload/v1676444865/errorPage_a8o8mk.jpg"
          alt="error page"
        />
      </div>
    </div>
  );
};

export default Error;
