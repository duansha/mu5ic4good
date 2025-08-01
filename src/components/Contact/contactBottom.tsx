import SectionTitle from "../Common/SectionTitle";

const ContactTop = () => {
  return (
    <>
      <section className="bg-bg py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100">
                Send Us a Message
              </h2>
              <div className="bg-card text-card-foreground rounded-lg border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-900/50">
                <div className="p-8">
                  <form className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Full Name *
                        </label>
                        <input
                          className="border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                          id="name"
                          required
                          placeholder="Your full name"
                          type="text"
                          name="name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Email Address *
                        </label>
                        <input
                          className="border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                          id="email"
                          required
                          placeholder="your.email@example.com"
                          type="email"
                          name="email"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Subject *
                      </label>
                      <input
                        className="border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                        id="subject"
                        required
                        placeholder="What's this about?"
                        type="text"
                        name="subject"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Message *
                      </label>
                      <textarea
                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[80px] w-full rounded-md border px-3 py-2 text-base focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell us more about your inquiry..."
                      ></textarea>
                    </div>
                    <button
                      className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-gray-400 to-gray-500 px-4 py-3 text-sm font-medium whitespace-nowrap text-white transition-colors hover:from-gray-300 hover:to-gray-400 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                      type="submit"
                    >
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
                        className="lucide lucide-send mr-2 h-4 w-4"
                      >
                        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                        <path d="m21.854 2.147-10.94 10.939"></path>
                      </svg>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="bg-card text-card-foreground rounded-lg border-0 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-900/50">
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="from-logo to-logo-dark flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br">
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
                          className="lucide lucide-mail h-6 w-6 text-white"
                        >
                          <rect
                            width="20"
                            height="16"
                            x="2"
                            y="4"
                            rx="2"
                          ></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                          Email Us
                        </h3>
                        <p className="text-logo-dark dark:text-logo-light mb-1 font-medium">
                          info@mu5ic4good.org
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Send us an email anytime
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-card text-card-foreground rounded-lg border-0 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-900/50">
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="from-logo to-logo-dark flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br">
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
                          className="lucide lucide-phone h-6 w-6 text-white"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                          Call Us
                        </h3>
                        <p className="text-logo-dark dark:text-logo-light mb-1 font-medium">
                          +1 (331) 332-0948
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactTop;
