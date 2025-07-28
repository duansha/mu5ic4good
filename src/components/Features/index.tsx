import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
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
              className="lucide lucide-target mx-auto mb-6 h-16 w-16 text-pink-400"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
            <h1 className="mb-6 text-center text-5xl font-bold md:text-6xl">
              Our Mission
            </h1>
            <p className="mx-auto max-w-3xl text-left text-xl text-gray-800 md:text-2xl dark:text-gray-300">
              To harness the transformative power of music to create a positive
              impact through advocating music therapy that helps individuals
              with autism develop emotional expression, communication skills,
              and social connections.
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

export default Features;
