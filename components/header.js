import { useState } from "react";
import { signOut } from "next-auth/react";
import Router from "next/router";
import Link from "next/link";
import Head from "next/head";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHeader = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          <nav className="flex w-full items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="select-none font-bold text-white">Product Name</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/"
                    className="px-3 py-2 text-sm font-medium text-gray-300  hover:bg-gray-800 hover:text-white"
                  >
                    Link0
                  </Link>
                  <Link
                    href="/"
                    className="px-3 py-2 text-sm font-medium text-gray-300  hover:bg-gray-800 hover:text-white"
                  >
                    Link1
                  </Link>
                  <Link
                    href="/"
                    className="px-3 py-2 text-sm font-medium text-gray-300  hover:bg-gray-800 hover:text-white"
                  >
                    Link2
                  </Link>
                </div>
              </div>
            </div>
            <button
              className="hidden bg-gray-800  px-3 py-2 text-sm font-medium text-white  hover:bg-rose-500 md:block"
              onClick={async () => {
                signOut({ redirect: false }).then(() => {
                  Router.push("/");
                });
              }}
            >
              {" "}
              Sign Out
            </button>
          </nav>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleHeader}
              type="button"
              className="inline-flex items-center justify-center bg-gray-800 p-2  text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden">
          <nav className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium  text-gray-300 hover:text-white"
            >
              Link0
            </Link>
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium  text-gray-300 hover:text-white"
            >
              Link1
            </Link>
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium  text-gray-300 hover:text-white"
            >
              Link2
            </Link>
            <button
              className="block w-max bg-gray-800 px-3 py-2 text-base  font-medium text-white"
              onClick={async () => {
                signOut({ redirect: false })
                  .then(() => {
                    Router.push("/");
                  })
                  .catch(() => {});
              }}
            >
              Sign Out
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
