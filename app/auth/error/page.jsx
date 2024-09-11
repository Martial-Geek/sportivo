"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const ErrorPage = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  console.log(error);
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 text-white">
      <div className="mx-auto flex max-w-fit flex-col rounded-lg border border-gray-700 bg-gray-800 p-10 text-center shadow-lg">
        <span
          className={`font-montserrat text-4xl font-extrabold text-red-500`}
        >
          ERROR
        </span>
        <span
          className={`my-6 font-roboto text-2xl font-semibold text-gray-400`}
        >
          {error || "Something went wrong!"}
        </span>
        <Link
          href="/sign-in"
          className={`mx-auto my-3 max-w-fit rounded-lg bg-blue-600 px-6 py-3 font-inter text-white transition-colors duration-300 ease-in-out hover:bg-blue-700`}
        >
          Sign In Again
        </Link>
        <Link
          href="/"
          className={`mx-auto my-3 max-w-fit rounded-lg bg-gray-700 px-6 py-3 font-spaceGrotesk text-white transition-colors duration-300 ease-in-out hover:bg-gray-600`}
        >
          Continue As Guest
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
