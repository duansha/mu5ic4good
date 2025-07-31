import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";

const Missions1 = () => {
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
                  className="lucide lucide-target mx-auto mb-6 h-16 w-16 text-pink-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
                <h1 className="mb-6 text-center text-5xl font-bold md:text-6xl">
                  Our Mission
                </h1>
                <p className="mx-auto max-w-3xl text-xl text-gray-200 md:text-2xl dark:text-gray-300">
                  Harness the transformative power of music to create a positive
                  impact by advocating for music therapy, which helps
                  individuals with autism develop emotional expression,
                  communication skills, and social connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-4xl px-4">
              <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
                What We Believe
              </h2>
              <p className="mx-auto max-w-3xl pb-10 text-left text-xl text-gray-600 md:text-2xl dark:text-gray-100">
                Each child with autism should have access to music therapy, a
                transformative tool that enhance communication, supports
                emotional development, and foster deep connections. Beyond just
                being helpful, music therapy has the power to transform lives.
                Through the universal language of music and specialized
                therapeutic approaches, music therapy helps engage children with
                autism, helping them build vital life skills, express
                themselves, and form meaningful, lasting connections with the
                world around them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Missions1;
