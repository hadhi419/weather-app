import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar({ loggedIn, user, onLogout }) {
  const { theme, toggleTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-gray-100 dark:bg-gray-800 shadow-md rounded-b-2xl transition-colors duration-500 w-full">
      <div className="flex justify-between w-full items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 truncate">
          Weather Analytics
        </h1>

        {loggedIn && (
          <div className="sm:hidden relative">
            <button
              onClick={() => setShowMenu((prev) => !prev)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition focus:outline-none"
            >
              <MenuIcon className="w-5 h-5 text-gray-800 dark:text-gray-100" />
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-2 flex flex-col items-center transition z-50 space-y-2 w-36">
                <div className="flex items-center space-x-1 text-sm">
                  <span className="text-gray-600 dark:text-gray-300 text-xs">
                    Light
                  </span>
                  <button
                    onClick={toggleTheme}
                    className="relative w-10 h-6 flex items-center rounded-full p-1 bg-gray-300 dark:bg-gray-700 transition-colors duration-300 shadow-inner hover:shadow-lg focus:outline-none"
                  >
                    <div
                      className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full flex items-center justify-center text-yellow-400 dark:text-gray-900 transition-all duration-300
                        ${theme === "dark" ? "translate-x-5" : "translate-x-0"}`}
                    >
                      {theme === "dark" ? (
                        <Moon size={12} />
                      ) : (
                        <Sun size={12} />
                      )}
                    </div>
                  </button>
                  <span className="text-gray-600 dark:text-gray-300 text-xs">
                    Dark
                  </span>
                </div>

                <button
                  onClick={onLogout}
                  className="p-2 rounded-full hover:bg-red-500 transition flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  <LogoutIcon className="text-red-500 w-5 h-5" />
                  <span className="ml-1 text-sm text-gray-800 dark:text-gray-100">
                    Logout
                  </span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="hidden sm:flex items-center space-x-4 mt-2 sm:mt-0">
        <div className="flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base">
          <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
            Light
          </span>
          <button
            onClick={toggleTheme}
            className="relative w-10 sm:w-14 h-6 sm:h-7 flex items-center rounded-full p-1 bg-gray-300 dark:bg-gray-700 transition-colors duration-300 shadow-inner hover:shadow-lg focus:outline-none"
          >
            <div
              className={`absolute left-1 top-1 w-4 sm:w-5 h-4 sm:h-5 bg-white rounded-full 
                          flex items-center justify-center text-yellow-400 dark:text-gray-900 
                          transition-all duration-300
                          ${theme === "dark" ? "translate-x-5 sm:translate-x-7" : "translate-x-0"}`}
            >
              {theme === "dark" ? <Moon size={12} /> : <Sun size={12} />}
            </div>
          </button>
          <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
            Dark
          </span>
        </div>

        {loggedIn && (
          <div className="relative">
            <button
              onClick={() => setShowMenu((prev) => !prev)}
              className="flex items-center space-x-1 rounded-full px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <span className="text-gray-800 dark:text-gray-100 text-sm truncate">
                {user}
              </span>
              <ArrowDropDownIcon className="text-gray-600 dark:text-gray-300 w-5 h-5" />
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-2 flex flex-col items-center transition z-50">
                <button
                  onClick={onLogout}
                  className="p-2 rounded-full hover:bg-red-500 transition flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  <LogoutIcon className="text-red-500 w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
