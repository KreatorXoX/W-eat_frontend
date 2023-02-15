import React from "react";
import MainNavigation from "../shared/components/Navigation/MainNavigation";

type Props = {};

const Error = (props: Props) => {
  return (
    <div className="flex flex-col h-screen bg-gray-400">
      <MainNavigation />
      <div className="w-full h-full flex justify-center items-center">
        <img
          src="https://res.cloudinary.com/dinhhwb9x/image/upload/v1676444865/errorPage_a8o8mk.jpg"
          alt="error page"
        />
      </div>
    </div>
  );
};

export default Error;
