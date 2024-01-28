import React from "react";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  return (
    <div className="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content ">
      <div className="flex w-full xl:container xl:m-auto">
        <label
          htmlFor="side-menu"
          className="flex-none lg:hidden btn btn-square btn-ghost w-10 sm:w-auto"
        >
          <FontAwesomeIcon icon={faBars} color="#000000" />
        </label>
        <h1 className="shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2">
          <a
            className="text-lg text-gray-700 dark:text-white font-bold whitespace-nowrap"
            href="/"
          >
            React Shop
          </a>
        </h1>
        <div className="flex-none hidden md:flex md:flex-1 ml-2">
          <a
            className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
            href="/"
          >
            패션
          </a>
          <a
            className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
            href="/"
          >
            액세서리
          </a>
          <a
            className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
            href="/"
          >
            디지털
          </a>
        </div>
        <div className="flex items-center px-2">
          <label className="swap swap-rotate mr-2 sm:mr-4">
            <input type="checkbox" className="js-theme" />
            <FontAwesomeIcon icon={faMoon} size="2x" color="#000000" />
            <FontAwesomeIcon icon={faMoon} size="2x" color="#ffffff" />
          </label>
          <div className="dropdwon">
            <input
              type="text"
              placeholder="검색"
              className="fixed left-0 top-4 -z-10 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput"
            />
            {/* <ul className="!fixed left-0 sm:!absolute sm:top-14 menu flex-nowrap dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-600">
              <li>
                <button type="button" className="text-left js-searchedItem">
                  <span className="text-gray-600 dark:text-white line-clamp-2"></span>
                </button>
              </li>
              <li>
                <button type="button" className="text-left js-searchedItem">
                  <span className="text-gray-600 dark:text-white line-clamp-2"></span>
                </button>
              </li>
              <li>
                <button type="button" className="text-left js-searchedItem">
                  <span className="text-gray-600 dark:text-white line-clamp-2"></span>
                </button>
              </li>
              <li>
                <button type="button" className="text-left js-searchedItem">
                  <span className="text-gray-600 dark:text-white line-clamp-2"></span>
                </button>
              </li>
            </ul> */}
          </div>
          <a className="btn btn-ghost w-10 sm:w-12 ml-1" href="/">
            <span className="relative">
              <FontAwesomeIcon
                icon={faBagShopping}
                className="h-6 w-6 stroke-gray-700 dark:stroke-white"
                color="black"
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
