import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    const addToCart = () => {
      // You should implement the logic to add items to the cart
      // For now, let's just increase the count for demonstration purposes
      setCartCount(cartCount + 1);
    };
  };
  return (
    <div className="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content ">
      <div className="flex w-full xl:container xl:m-auto">
        <label
          htmlFor="side-menu"
          className="flex-none lg:hidden btn btn-square btn-ghost w-10 sm:w-auto"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} color="#000000" className="fa-lg" />
        </label>
        <h1 className="shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2">
          <Link
            className="text-xl text-gray-700 dark:text-white font-bold whitespace-nowrap"
            to="/"
          >
            React Shop
          </Link>
        </h1>
        <div className="flex-none hidden md:flex md:flex-1 ml-2">
          <Link
            className="btn btn-ghost btn-sm rounded-btn text-gray-700  dark:text-white "
            to="/Fashion"
          >
            패션
          </Link>
          <Link
            className="btn btn-ghost btn-sm rounded-btn text-gray-700  dark:text-white"
            to="/Accessory"
          >
            액세서리
          </Link>
          <Link
            className="btn btn-ghost btn-sm rounded-btn text-gray-700  dark:text-white"
            to="/Digital"
          >
            디지털
          </Link>
        </div>
        <div className="flex items-center px-2">
          <label className="swap swap-rotate mr-2 sm:mr-4">
            <input type="checkbox" className="js-theme" />
            <FontAwesomeIcon icon={faMoon} size="2x" color="#000000" />
            <FontAwesomeIcon icon={faMoon} size="2x" color="#ffffff" />
          </label>
          <div className="dropdwon">
            <button
              type="button"
              className="flex sm:hidden w-10 sm:w-auto mx-0 px-0 sm:mx-2 sm:px-2 btn btn-ghost js-search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-gray-700 dark:stroke-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <input
              type="text"
              placeholder="검색"
              className="fixed left-0 top-4 -z-10 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput"
            />
          </div>
          <Link to="/Cart" className="btn btn-ghost w-10 sm:w-12 ml-1">
            <span className="relative">
              <FontAwesomeIcon
                icon={faBagShopping}
                className="h-6 w-6 stroke-gray-700 dark:stroke-white"
                color="black"
              />
              <span className="inline-flex items-center justify-center absolute top-0 right-0 px-2 py-1 rounded-full bg-red-500 text-xs font-bold leading-none text-gray-200 transform translate-x-1/2 -translate-y-1/2">
                4
              </span>
            </span>
          </Link>
        </div>
      </div>
      {/* Sidebar 영역 */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-50  bg-gray-300 opacity-70"
          onClick={toggleSidebar}
        >
          <ul className="menu w-60 h-screen sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100">
            {/* Sidebar에 표시할 내용 */}

            <li>
              <Link
                to="/Fashion"
                className="text-black text-lg hover:text-gray-700 dark:text-white dark:hover:text-gray-300 "
              >
                패션
              </Link>
            </li>
            <li>
              <Link
                to="/Accessory"
                className="text-black text-lg hover:text-gray-700 dark:text-white dark:hover:text-gray-300  "
              >
                액세서리
              </Link>
            </li>
            <li>
              <Link
                to="/Digital"
                className="text-black text-lg hover:text-gray-700 dark:text-white dark:hover:text-gray-300 "
              >
                디지털
              </Link>
            </li>
          </ul>
        </div>
      )}

      <input type="checkbox" id="side-menu" className="hidden" />
      <div
        className={`fixed inset-y-0 left-0 w-80 bg-white dark:bg-gray-800 transform ${
          isSidebarOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        }`}
      ></div>
    </div>
  );
}

export default Nav;
