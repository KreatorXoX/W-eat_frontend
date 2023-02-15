import React from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "../../../context/themeStore";

const ThemeButton = () => {
  const dark = useTheme((state) => state.dark);
  const toggler = useTheme((state) => state.toggle);
  return (
    <button
      onClick={toggler}
      className="
  p-2 rounded-full border border-blue-400 
  "
    >
      {!dark ? (
        <BsFillMoonStarsFill color="rgb(55 65 81)" />
      ) : (
        <BsFillSunFill color="#fff" />
      )}
    </button>
  );
};

export default ThemeButton;
