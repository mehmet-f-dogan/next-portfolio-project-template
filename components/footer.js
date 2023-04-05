import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="body-font min-w-full bg-gray-900 text-gray-400">
      <nav className="container mx-auto  flex flex-col items-center px-5 sm:flex-row">
        <Link
          href="/"
          className="title-font flex items-center justify-center font-medium text-white md:justify-start"
        >
          <span className="ml-3 text-base">Product Name</span>
        </Link>
        <p className=" text-sm text-gray-400 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:pl-4 ">
          2023 —
          <Link
            href="https://mehmetfd.dev"
            className="ml-1 text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            mehmetfd.dev
          </Link>
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
