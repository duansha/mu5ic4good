import SectionTitle from "../Common/SectionTitle";

const ContactTop = () => {
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
                  className="lucide lucide-message-circle mx-auto mb-6 h-16 w-16 text-pink-400"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
                <h1 className="mb-6 text-center text-5xl font-bold md:text-6xl">
                  Contact Us
                </h1>
                <p className="mx-auto max-w-3xl text-xl text-gray-200 md:text-2xl dark:text-gray-300">
                  We&#39;d love to hear from you! Whether you have questions,
                  want to get involved, or need support, we&#39;re here to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactTop;
