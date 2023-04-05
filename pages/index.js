import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getServerSideSession } from "./api/auth/[...nextauth]";

export default function LandingPage() {
  return (
    <main className="body-font flex min-h-screen w-screen items-center justify-center bg-gray-900 text-gray-400">
      <Head></Head>
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="title-font mb-4 text-3xl font-medium text-white sm:text-4xl">
            Product Name
          </h1>
          <h2 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">
            Product Tagline
          </h2>
          <p className="mb-8 leading-relaxed">Product Description</p>
          <nav className="flex justify-center">
            <Link
              href="/signup"
              className="inline-flex border-0 bg-purple-500 px-6 py-2 text-lg text-white hover:bg-purple-600 focus:outline-none"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="ml-4 inline-flex border-0 bg-gray-800 px-6 py-2 text-lg text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
            >
              Login
            </Link>
          </nav>
        </div>
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <img
            className="object-cover object-center"
            alt="dummy image"
            src="https://dummyimage.com/720x600"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
}
