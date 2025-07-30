import Image from "next/image";

const AboutSectionFive = () => {
  return (
    <>
      <section className="bg-gray-50 py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-16 text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
            2025 Emcees
          </h2>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            <div className="bg-card text-card-foreground rounded-lg border-0 text-center shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-700 dark:shadow-gray-900/50">
              <div className="p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-music h-8 w-8 text-white"
                  >
                    <path d="M9 18V5l12-2v13"></path>
                    <circle cx="6" cy="18" r="3"></circle>
                    <circle cx="18" cy="16" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Ryan Kong
                </h3>
              </div>
            </div>
            <div className="bg-card text-card-foreground rounded-lg border-0 text-center shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-700 dark:shadow-gray-900/50">
              <div className="p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-music h-8 w-8 text-white"
                  >
                    <path d="M9 18V5l12-2v13"></path>
                    <circle cx="6" cy="18" r="3"></circle>
                    <circle cx="18" cy="16" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Swarith Nandula
                </h3>
              </div>
            </div>
            <div className="bg-card text-card-foreground rounded-lg border-0 text-center shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-700 dark:shadow-gray-900/50">
              <div className="p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-music h-8 w-8 text-white"
                  >
                    <path d="M9 18V5l12-2v13"></path>
                    <circle cx="6" cy="18" r="3"></circle>
                    <circle cx="18" cy="16" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Sophia White
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionFive;
