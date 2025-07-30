import SectionTitle from "../Common/SectionTitle";

const Sponsorships = () => {
  return (
    <>
      <section className="pt-16">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20 pt-16 text-white dark:from-purple-950 dark:via-blue-950 dark:to-indigo-950">
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
                  className="lucide lucide-handshake mx-auto mb-6 h-16 w-16 text-pink-400"
                >
                  <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
                  <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                  <path d="m21 3 1 11h-2"></path>
                  <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
                  <path d="M3 4h8"></path>
                </svg>
                <h1 className="mb-6 text-center text-5xl font-bold md:text-6xl">
                  Sponsorships Opportunities
                </h1>
                <p className="mx-auto max-w-3xl text-xl text-gray-200 md:text-2xl dark:text-gray-300">
                  Partner with MU5IC4GOOD to support music therapy for children
                  with autism while gaining valuable brand exposure and
                  community recognition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl px-4">
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
              className="lucide lucide-handshake mx-auto mb-6 h-16 w-16 text-pink-400"
            >
              <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
              <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
              <path d="m21 3 1 11h-2"></path>
              <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
              <path d="M3 4h8"></path>
            </svg>
            <h1 className="mb-6 text-center text-5xl font-bold md:text-6xl">
              Sponsorships Opportunities
            </h1>
            <p className="mx-auto max-w-3xl text-left text-xl text-gray-800 md:text-2xl dark:text-gray-300">
              Partner with MU5IC4GOOD to support music therapy for children with
              autism while gaining valuable brand exposure and community
              recognition.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20 text-white dark:from-purple-950 dark:via-blue-950 dark:to-indigo-950">
              <div className="mx-auto max-w-4xl px-4">
                <h1 className="mb-6 text-center text-5xl font-bold md:text-6xl">
                  What We Believe
                </h1>
                <p className="mx-auto max-w-3xl text-left text-xl text-gray-200 md:text-2xl dark:text-gray-300">
                  Each child with autism should have access to music therapy, a
                  transformative tool that enhance communication, supports
                  emotional development, and foster deep connections. Music
                  therapy is more than beneficial-it&#39;s life-changing.
                  Through the universal language of music and specialized
                  therapeutic approaches, music therapy uniquely engages
                  children with autism, helping them build vital life skills,
                  express themselves, and form meaningful, lasting connections
                  with the world around them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsorships;
