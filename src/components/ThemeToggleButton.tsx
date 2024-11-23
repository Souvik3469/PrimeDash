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
        className="p-1 bg-gray-300 rounded-full dark:bg-gray-700 transition-all duration-300"
      >
        <div className="relative w-8 h-5">
          {/* Circle movement animation */}
          <div
            className={`absolute w-3 h-3 bg-yellow-500 dark:bg-blue-500 rounded-full transition-all duration-300 ${
              isDarkMode ? "transform translate-x-4" : ""
            }`}
          ></div>
          <div
            className={`absolute inset-0 flex justify-center items-center text-sm text-gray-700 dark:text-white transition-all duration-300`}
          >
            {isDarkMode ? <FaMoon /> : <FaSun />}
          </div>
        </div>
      </button>
    </div>
  );
};

export default ThemeToggleButton;
