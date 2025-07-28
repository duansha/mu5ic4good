import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[url('/images/bg.PNG')] bg-top bg-no-repeat text-white dark:bg-[url('/images/bg.PNG')] dark:from-purple-950 dark:via-blue-950 dark:to-indigo-950">
            <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
            <div className="absolute inset-0">
              <div className="absolute top-20 left-20 h-32 w-32 animate-pulse rounded-full bg-pink-500/20 blur-xl dark:bg-pink-500/30"></div>
              <div className="absolute right-32 bottom-32 h-48 w-48 animate-pulse rounded-full bg-blue-500/20 blur-xl delay-1000 dark:bg-blue-500/30"></div>
              <div className="absolute top-1/2 left-1/2 h-64 w-64 animate-pulse rounded-full bg-purple-500/20 blur-xl delay-500 dark:bg-purple-500/30"></div>
            </div>
            <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
              <h1 className="mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-6xl font-bold text-transparent md:text-8xl">
                MU5IC4GOOD
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-4xl text-yellow-800 md:text-4xl dark:text-gray-300">
                Be The Change
              </p>
              <p className="mx-auto mb-8 max-w-2xl text-4xl font-bold text-yellow-800 md:text-5xl dark:text-gray-300">
                One Heart at a Time
              </p>
              <p className="mx-auto mb-8 max-w-2xl text-xs text-yellow-800 md:text-lg dark:text-gray-300">
                Join us for inspiring music, heartfelt performance while raising
                <br />
                awareness and hope for music therapy for children with autism.
              </p>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-yellow-800 md:text-lg dark:text-gray-300">
                ADMISSION IS FREE
              </p>
              <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <div className="flex items-center text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="lucide lucide-calendar mr-2 h-5 w-5 text-pink-400"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <span className="text-yellow-800 dark:text-gray-300">
                    Saturday August 02, 2025 | 2:00 PM CDT{" "}
                  </span>
                </div>
                <div className="flex items-center text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="lucide lucide-map-pin mr-2 h-5 w-5 text-blue-400"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-yellow-800 dark:text-gray-300">
                    95th Street Library, Naperville, IL{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={imageLight} alt={name} fill className="hidden dark:block" />
        <Image src={image} alt={name} fill className="block dark:hidden" />
      </a>
    </div>
  );
};
