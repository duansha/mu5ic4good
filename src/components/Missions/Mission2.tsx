import Image from "next/image";
import Link from "next/link";

const Mission2 = () => {
  return (
    <>
      <section className="bg-bottom-banner-bg py-20 text-gray-700 dark:bg-gray-800 dark:from-purple-950 dark:via-blue-950 dark:to-indigo-950 dark:text-gray-300">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Join Our Mission</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-700 dark:text-gray-300">
            By working together, we can spread the word about the transformative
            potential of music therapy and make it easier for children with
            autism to access these life-changing programs. Your support makes
            the mission possible.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/donations">
              <button className="from-logo to-logo-dark hover:from-logo-light hover:to-logo-light rounded-lg bg-gradient-to-r px-8 py-4 text-lg font-semibold text-white transition-all">
                Support Our Mission
              </button>
            </Link>
            <Link href="/about">
              <button className="rounded-lg bg-gradient-to-r from-gray-400 to-gray-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:from-gray-300 hover:to-gray-400">
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
