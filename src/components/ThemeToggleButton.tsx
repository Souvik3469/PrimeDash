import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check if the user's system preference is dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDarkMode);
    }
  }, []);

  // Toggle the theme
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Set the theme in localStorage and on the body
  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="flex justify-center items-center w-10">
      <button
        onClick={toggleTheme}
        className="p-0.5 bg-[#696FFB] rounded-full transition-all duration-300"
      >
        <div className="relative w-9 h-5">
          {/* White Circle Movement */}
          <div
            className={`absolute w-[18px] h-[18px] top-[1px] bg-white rounded-full transition-all duration-300 z-10 ${
              isDarkMode ? "transform translate-x-[18px]" : ""
            }`}
          ></div>

          {/* Moon Icon */}
          <FaMoon className="absolute right-[2px] top-1  text-yellow-300 transition-all duration-300 z-0 text-xs" />

          {/* Sun Icon */}
          <FaSun className="absolute left-[2px] top-1  text-yellow-300 transition-all duration-300 z-0 text-xs" />
        </div>
      </button>
    </div>
  );
};

export default ThemeToggleButton;
