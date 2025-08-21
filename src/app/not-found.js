"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

 const  NotFound = () => {
  const router = useRouter();

  return (
    <main className="min-h-screen  bg-gray-600 text-white flex items-center justify-center px-6">
      <section className="w-full max-w-xl text-center">
        <div className="inline-flex select-none items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider">
          Error 404
        </div>
        <h1 className="mt-6 text-5xl font-extrabold leading-tight sm:text-6xl">
          Page not found
        </h1>
        <p className="mt-4 text-white/80">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-medium text-gray-800 transition hover:bg-transparent hover:text-white hover:outline hover:outline-2 hover:outline-white"
          >
            Go Home
          </Link>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium text-white/90 underline-offset-4 hover:underline"
          >
            Go Back
          </button>
        </div>

        
      </section>
    </main>
  );
}

export default NotFound;
