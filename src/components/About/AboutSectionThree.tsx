import Image from "next/image";

const AboutSectionThree = () => {
  return (
    <>
      <section className="bg-bottom-banner-bg py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-16 text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
            Our Values
          </h2>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-card text-card-foreground rounded-lg border-0 text-center shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-700 dark:shadow-gray-900/50">
              <div className="p-8">
                <div className="from-logo to-logo-dark mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br">
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
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Music as Universal Language
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe music overcomes all obstacles, uniting people for
                  shared purposes.
                </p>
              </div>
            </div>
            <div className="bg-card text-card-foreground rounded-lg border-0 text-center shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-700 dark:shadow-gray-900/50">
              <div className="p-8">
                <div className="from-logo to-logo-dark mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br">
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
                    className="lucide lucide-heart h-8 w-8 text-white"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Compassionate Action
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Every choice we make is driven by our dedication to supporting
                  children in need.
                </p>
              </div>
            </div>
            <div className="bg-card text-card-foreground rounded-lg border-0 text-center shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-700 dark:shadow-gray-900/50">
              <div className="p-8">
                <div className="from-logo to-logo-dark mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br">
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
                    className="lucide lucide-handshake h-8 w-8 text-white"
                  >
                    <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
                    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                    <path d="m21 3 1 11h-2"></path>
                    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
                    <path d="M3 4h8"></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Transparency
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We enusre full transparency in the collection and distribution
                  of funds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionThree;
