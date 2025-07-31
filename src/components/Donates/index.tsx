import SectionTitle from "../Common/SectionTitle";

const Donates = () => {
  return (
    <>
      <section className="pt-16">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="bg-banner-bg text-banner py-20 pt-16 dark:bg-gray-800 dark:from-purple-950 dark:via-blue-950 dark:to-indigo-950 dark:text-gray-200">
              <div className="mx-auto max-w-4xl px-4 text-center">
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
                  className="lucide lucide-dollar-sign mx-auto mb-6 h-16 w-16 text-pink-400"
                >
                  <line x1="12" x2="12" y1="2" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                <h1 className="mb-6 text-center text-5xl font-bold md:text-6xl">
                  Support Our Mission
                </h1>
                <p className="mx-auto max-w-3xl text-xl text-gray-200 md:text-2xl dark:text-gray-300">
                  Help us support our music therapy programs for children with
                  autism. Your contribution transforms young lives through the
                  healing power of music.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-gray-100">
              Your Impact
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              By donating to MU5IC4GOOD, your directly fund music therapy
              programs that empower children with autism to enhance their
              communication, emotional expression, and social connections.
            </p>
          </div>
          <div className="mb-16 grid gap-8 md:grid-cols-3">
            <div className="bg-card text-card-foreground rounded-lg border-0 text-center shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-900/50">
              <div className="p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600">
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
                  Direct Impact
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Every dollar donated goes straight to funding music therapy
                  programs for children with autism.
                </p>
              </div>
            </div>
            <div className="bg-card text-card-foreground rounded-lg border-0 text-center shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-900/50">
              <div className="p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600">
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
                    className="lucide lucide-users h-8 w-8 text-white"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Community Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  United with countless supporters to transform the lives of
                  children.
                </p>
              </div>
            </div>
            <div className="bg-card text-card-foreground rounded-lg border-0 text-center shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-900/50">
              <div className="p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-600">
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
                    className="lucide lucide-target h-8 w-8 text-white"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Focused Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Every dollar helps support specialized music therapy sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-gray-100">
              Be The Change, One Heart at a Time
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300">
              Support MU5IC4GOOD through our secure GoFundMe campaign. Every
              contribution helps us sustain and expand our music therapy
              programs.
            </p>
          </div>

          <div className="bg-card text-card-foreground overflow-hidden rounded-lg border-0 shadow-xl dark:bg-gray-700 dark:shadow-gray-900/50">
            <div className="p-0">
              <div className="bg-white p-6 text-center dark:bg-gray-700">
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Help MU5IC4GOOD to Support Music Therapy
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Click below to visit our GoFundMe campaign and make a secure
                  donation
                </p>
                <a
                  href="https://www.gofundme.com/f/sustain-mu5ic4good-support-music-therapy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transform rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:from-pink-600 hover:to-purple-700"
                >
                  Donate on GoFundMe
                </a>
              </div>

              <div
                className="relative w-full"
                style={{ paddingBottom: 456.25 }}
              >
                <iframe
                  src="https://www.gofundme.com/f/sustain-mu5ic4good-support-music-therapy"
                  title="MU5IC4GOOD GoFundMe Campaign"
                  className="absolute top-0 left-0 h-full w-full border-0"
                  height="400px"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="mb-2 text-gray-600 dark:text-gray-300">
              <strong className="dark:text-gray-200">
                Questions about donating?
              </strong>
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Contact us at{" "}
              <a
                href="mailto:info@mu5ic4good.org"
                className="text-purple-600 hover:underline dark:text-purple-400"
              >
                info@mu5ic4good.org
              </a>{" "}
              or call{" "}
              <a
                href="tel:+13313320948"
                className="text-purple-600 hover:underline dark:text-purple-400"
              >
                +1 (331) 332-0948
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-gray-100">
            Other Ways to Help
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            Can&#39;t donate right now? There are other meaningful ways to
            support our mission and help children with autism.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-card text-card-foreground rounded-lg border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-900/50">
              <div className="p-8 text-center">
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
                  className="lucide lucide-users mx-auto mb-4 h-12 w-12 text-purple-500"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Spread the Word
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Share our mission with friends and family. Follow us on social
                  media and help us reach more people who care about children
                  with autism.
                </p>
                <a
                  href="https://www.instagram.com/mu5ic4good/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-purple-600 hover:underline dark:text-purple-400"
                >
                  Follow @mu5ic4good
                </a>
              </div>
            </div>
            <div className="bg-card text-card-foreground rounded-lg border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-900/50">
              <div className="p-8 text-center">
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
                  className="lucide lucide-heart mx-auto mb-4 h-12 w-12 text-pink-500"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Volunteer
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Join our team of volunteers and help us organize events or
                  perform at our scheduled events.
                </p>
                <a
                  href="/contact"
                  className="font-medium text-purple-600 hover:underline dark:text-purple-400"
                >
                  Get Involved
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donates;
