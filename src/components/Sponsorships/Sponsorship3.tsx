"use client";
import Image from "next/image";
import { useRef } from "react";

const Sponsorship3 = () => {
  const bottomRef = useRef(null);
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendEmail = () => {
    const email = "info@mu5ic4good.org";
    //const subject = encodeURIComponent("Hello from Next.js");
    //const body = encodeURIComponent("This is the body of the email.");
    //window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = `mailto:${email}`;
  };
  const handleCallNow = () => {
    //+1 (331) 332-0948
    window.location.href = "tel:+13313320948"; // Replace with your number
  };

  return (
    <>
      <section className="bg-gray-50 py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-gray-100">
              Sponsorship Levels
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              Choose the sponsorship level that best fits your
              organization&#39;s goals and budget. Every contribution makes a
              difference!
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-card text-card-foreground relative overflow-hidden rounded-lg border-2 border-amber-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-amber-700 dark:bg-gray-700 dark:shadow-gray-900/50">
              <div className="flex flex-col space-y-1.5 bg-amber-50 p-6 pt-8 text-center dark:bg-amber-900/20">
                <div className="mb-4 text-4xl">🥉</div>
                <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  Bronze
                </div>
                <div className="mt-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
                  $25+
                </div>
              </div>
              <div className="p-6 px-6 pt-0 pb-8">
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
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
                      className="lucide lucide-check mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      Name listed on event website
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="lucide lucide-check mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      Social media thank-you post
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="lucide lucide-check mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      Recognition in event program
                    </span>
                  </li>
                </ul>
                <button
                  onClick={scrollToBottom}
                  className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3 text-lg font-semibold whitespace-nowrap text-white transition-colors hover:from-blue-600 hover:to-indigo-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Select
                </button>
              </div>
            </div>
            <div className="bg-card text-card-foreground relative overflow-hidden rounded-lg border-2 border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-600 dark:bg-gray-700 dark:shadow-gray-900/50">
              <div className="flex flex-col space-y-1.5 bg-gray-50 p-6 pt-8 text-center dark:bg-gray-800/50">
                <div className="mb-4 text-4xl">🥈</div>
                <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  Silver
                </div>
                <div className="mt-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
                  $50+
                </div>
              </div>
              <div className="p-6 px-6 pt-0 pb-8">
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
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
                      className="lucide lucide-check mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="font-medium text-gray-600 dark:text-gray-300">
                      All Bronze benefits, plus:
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="lucide lucide-check mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      Small logo on event website
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="lucide lucide-check mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      Verbal recognition during the event
                    </span>
                  </li>
                </ul>
                <button
                  onClick={scrollToBottom}
                  className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3 text-lg font-semibold whitespace-nowrap text-white transition-colors hover:from-blue-600 hover:to-indigo-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Select
                </button>
              </div>
            </div>
            <div className="bg-card text-card-foreground relative overflow-hidden rounded-lg border-2 border-purple-500 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-700 dark:shadow-gray-900/50">
              <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-gray-300 to-gray-400 py-2 text-center text-sm font-semibold text-white">
                Most Popular
              </div>
              <div className="flex flex-col space-y-1.5 bg-yellow-50 p-6 pt-12 text-center dark:bg-yellow-900/20">
                <div className="mb-4 text-4xl">🥇</div>
                <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  Gold
                </div>
                <div className="mt-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
                  $100+
                </div>
              </div>
              <div className="p-6 px-6 pt-0 pb-8">
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
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
                      className="lucide lucide-check mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="font-medium text-gray-600 dark:text-gray-300">
                      All Silver benefits, plus:
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="lucide lucide-check mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      Medium logo on website and printed materials
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="lucide lucide-check mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      Featured social media spotlight
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="lucide lucide-check mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      Option to include materials in attendee gift bags (if
                      applicable)
                    </span>
                  </li>
                </ul>
                <button
                  onClick={scrollToBottom}
                  className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 text-lg font-semibold whitespace-nowrap text-white transition-colors hover:from-blue-600 hover:to-blue-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Select
                </button>
              </div>
            </div>
            <div className="bg-card text-card-foreground relative overflow-hidden rounded-lg border-2 border-pink-500 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-700 dark:shadow-gray-900/50">
              <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-gray-400 to-gray-500 py-2 text-center text-sm font-semibold text-white">
                Premium Partnership
              </div>
              <div className="flex flex-col space-y-1.5 bg-purple-50 p-6 pt-12 text-center dark:bg-purple-900/20">
                <div className="mb-4 text-4xl">💎</div>
                <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  Platinum
                </div>
                <div className="mt-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
                  $200+
                </div>
              </div>
              <div className="p-6 px-6 pt-0 pb-8">
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
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
                      className="lucide lucide-check mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="font-medium text-gray-600 dark:text-gray-300">
                      All Gold benefits, plus:
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="lucide lucide-check mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      Large logo placement on all promotional materials
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="lucide lucide-check mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      Logo on event banner (if applicable)
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="lucide lucide-check mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      Opportunity to be featured during the event
                    </span>
                  </li>
                  <li className="flex items-start">
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
                      className="lucide lucide-check mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      Consistent social media spotlight and recognition
                    </span>
                  </li>
                </ul>
                <button
                  onClick={scrollToBottom}
                  className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 text-lg font-semibold whitespace-nowrap text-white transition-colors hover:from-blue-600 hover:to-blue-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              All sponsorships are tax-deductible. You will receive a receipt
              for your donation.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Custom sponsorship packages available for larger contributions.
              Contact us to discuss your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-gray-100">
              Our Current Sponsors
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              We&#39;re grateful to these organizations for their generous
              support of MU5IC4GOOD.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="bg-card text-card-foreground rounded-lg border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-900/50">
              <div className="flex flex-col space-y-1.5 border-b border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/50">
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 30 30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star mr-2 h-6 w-6 text-gray-600 dark:text-gray-400"
                  >
                    <path
                      d="M27.467 10.667l-6.293-7.467h-14.4l-6.293 7.467-0.48 0.533 0.427 0.533 13.547 17.067 13.973-17.6-0.48-0.533zM26.080 10.667h-10.72l5.333-6.347 5.387 6.347zM13.92 10.667l-5.547-6.4h10.987l-5.44 6.4zM7.147 4.427l5.387 6.24h-10.667l5.28-6.24zM13.44 11.733v14.667l-11.68-14.667h11.68zM14.507 26.4v-14.667h11.627l-11.627 14.667z"
                      fill="#404040"
                    >
                      {" "}
                    </path>
                  </svg>
                  {/*https://www.svgrepo.com/svg/476560/diamond?edit=true */}
                  <div className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    Platinum
                  </div>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  <a
                    target="_blank"
                    className="hover:text-gray-500 hover:underline dark:hover:text-gray-400"
                    href="https://www.harisonfitness.com/"
                  >
                    Harison Fitness
                  </a>
                  , EnergizAI
                </h3>
              </div>
            </div>

            <div className="bg-card text-card-foreground rounded-lg border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-900/50">
              <div className="flex flex-col space-y-1.5 border-b border-yellow-100 bg-yellow-50 p-6 dark:border-yellow-800 dark:bg-yellow-900/20">
                <div className="flex items-center justify-center">
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
                    className="lucide lucide-crown mr-2 h-6 w-6 text-yellow-600 dark:text-yellow-400"
                  >
                    <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                    <path d="M5 21h14"></path>
                  </svg>
                  <div className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    Gold
                  </div>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  <a
                    target="_blank"
                    className="hover:text-gray-500 hover:underline dark:hover:text-gray-400"
                    href="https://www.girgisortho.com/"
                  >
                    Girgis & Ito Orthodontics
                  </a>
                </h3>
              </div>
            </div>
            <div className="bg-card text-card-foreground rounded-lg border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-900/50">
              <div className="flex flex-col space-y-1.5 border-b border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/50">
                <div className="flex items-center justify-center">
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
                    className="lucide lucide-star mr-2 h-6 w-6 text-gray-600 dark:text-gray-400"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <div className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    Silver
                  </div>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  <a
                    target="_blank"
                    className="hover:text-gray-500 hover:underline dark:hover:text-gray-400"
                    href="https://www.sno-problems.com/"
                  >
                    sno problems
                  </a>
                  ,{" "}
                  <a
                    target="_blank"
                    className="hover:text-gray-500 hover:underline dark:hover:text-gray-400"
                    href="https://ww2.freshthyme.com/sm/planning/rsid/104"
                  >
                    Fresh Thyme
                  </a>
                </h3>
              </div>
            </div>
            <div className="bg-card text-card-foreground rounded-lg border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-900/50">
              <div className="flex flex-col space-y-1.5 border-b border-amber-100 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-900/20">
                <div className="flex items-center justify-center">
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
                    className="lucide lucide-award mr-2 h-6 w-6 text-amber-600 dark:text-amber-400"
                  >
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                    <circle cx="12" cy="8" r="6"></circle>
                  </svg>
                  <div className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    Bronze
                  </div>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  <a
                    target="_blank"
                    className="hover:text-gray-500 hover:underline dark:hover:text-gray-400"
                    href="https://www.giamiapizzabar.com/"
                  >
                    Gia Mia Naperville
                  </a>
                  ,{" "}
                  <a
                    target="_blank"
                    className="hover:text-gray-500 hover:underline dark:hover:text-gray-400"
                    href="https://avotheory.com/menu"
                  >
                    Avocado Theory
                  </a>
                </h3>
              </div>
            </div>

            <div className="bg-card text-card-foreground rounded-lg border-0 shadow-lg dark:bg-gray-800 dark:shadow-gray-900/50">
              <div className="flex flex-col space-y-1.5 border-b border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/50">
                <div className="flex items-center justify-center">
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
                    className="lucide lucide-star mr-2 h-6 w-6 text-gray-600 dark:text-gray-400"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                  <div className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                    Special Sponsors
                  </div>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  <a
                    target="_blank"
                    className="hover:text-gray-500 hover:underline dark:hover:text-gray-400"
                    href="https://www.napervillemusic.com/"
                  >
                    Naperville Music
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="cta-section"
        className="bg-bottom-banner-bg py-20 text-gray-700 dark:bg-gray-800 dark:from-purple-950 dark:via-blue-950 dark:to-indigo-950 dark:text-white"
      >
        <div ref={bottomRef} className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to Make a Difference?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-700 dark:text-gray-300">
            Join us as a sponsor and help us create an unforgettable event while
            supporting music therapy for children with autism.
          </p>
          <div className="mx-auto grid max-w-2xl gap-8 md:grid-cols-2">
            <div className="text-card-foreground rounded-lg border border-white/20 bg-white/10 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
              <div className="p-6 text-center">
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
                  className="lucide lucide-mail mx-auto mb-4 h-8 w-8 text-pink-400"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <h3 className="mb-2 text-lg font-semibold">Email Us</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  info@mu5ic4good.org
                </p>
                <button
                  onClick={handleSendEmail}
                  className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 inline-flex h-10 items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium whitespace-nowrap text-purple-900 transition-colors hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Send Email
                </button>
              </div>
            </div>
            <div className="text-card-foreground rounded-lg border border-white/20 bg-white/10 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
              <div className="p-6 text-center">
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
                  className="lucide lucide-phone mx-auto mb-4 h-8 w-8 text-blue-400"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <h3 className="mb-2 text-lg font-semibold">Call Us</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  +1 (331) 332-0948
                </p>
                <button
                  onClick={handleCallNow}
                  className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 inline-flex h-10 items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium whitespace-nowrap text-purple-900 transition-colors hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Call Now
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-sm text-gray-700 dark:text-gray-400">
              We&#39;ll respond to all sponsorship inquiries within 24 hours
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsorship3;
