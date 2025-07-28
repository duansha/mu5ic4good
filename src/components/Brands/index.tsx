import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white dark:from-purple-950 dark:via-blue-950 dark:to-indigo-950">
            <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
            <div className="absolute inset-0">
              <div className="absolute top-20 left-20 h-32 w-32 animate-pulse rounded-full bg-pink-500/20 blur-xl dark:bg-pink-500/30"></div>
              <div className="absolute right-32 bottom-32 h-48 w-48 animate-pulse rounded-full bg-blue-500/20 blur-xl delay-1000 dark:bg-blue-500/30"></div>
              <div className="absolute top-1/2 left-1/2 h-64 w-64 animate-pulse rounded-full bg-purple-500/20 blur-xl delay-500 dark:bg-purple-500/30"></div>
            </div>
            <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
              <div className="mb-6 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="lucide lucide-music mr-4 h-16 w-16 text-pink-400"
                >
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="lucide lucide-heart h-12 w-12 text-red-400"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h1 className="mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-6xl font-bold text-transparent md:text-8xl">
                MU5IC4GOOD
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-200 md:text-2xl dark:text-gray-300">
                Join us for a night of music, unity, and hope while raising
                awareness for music therapy for children with autism.
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
                  <span>August 02, 2025 | 2:00 PM CDT </span>
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
                  <span>95th Street Library, Naperville, IL </span>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <button
                  className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 text-lg font-medium whitespace-nowrap text-white transition-colors hover:from-pink-600 hover:to-purple-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                  fdprocessedid="u1a8vn"
                >
                  Learn More
                </button>
                <button
                  className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 inline-flex h-11 items-center justify-center gap-2 rounded-md border border-purple-400 bg-transparent px-8 py-4 text-lg font-medium whitespace-nowrap text-purple-400 transition-colors hover:bg-purple-400 hover:text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-purple-300 dark:text-purple-300 dark:hover:bg-purple-300 dark:hover:text-gray-900"
                  fdprocessedid="2e2l4"
                >
                  Help Us
                </button>
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
