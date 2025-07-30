import Image from "next/image";
import Link from "next/link";

const Mission2 = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20 text-white dark:from-purple-950 dark:via-blue-950 dark:to-indigo-950">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Join Our Mission</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-200 dark:text-gray-300">
            Together, we can raise awareness about the transformative power of
            music therapy and help more children with autism access these
            life-changing programs. Your support makes this mission possible.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/donations">
              <button className="rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:from-pink-600 hover:to-purple-700">
                Support Our Mission
              </button>
            </Link>
            <Link href="/about">
              <button className="rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-purple-900">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission2;
