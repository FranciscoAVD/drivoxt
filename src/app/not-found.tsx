import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-accent">404</p>
        <h1 className="mt-4 H2 md:H1 font-bold tracking-tight text-gray-50 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 P1 text-gray-300">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-transparent hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-accent focus-visible:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Go back home
          </Link>
          <Link href="/" className="text-sm font-semibold text-gray-300 hover:text-gray-50 transition focus-visible:text-gray-50">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
