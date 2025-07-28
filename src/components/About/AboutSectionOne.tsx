import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <>
      <section className="pt-16">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20 text-white dark:from-purple-950 dark:via-blue-950 dark:to-indigo-950">
              <div className="mx-auto max-w-4xl px-4 text-center">
                <h1 className="mb-6 text-5xl font-bold md:text-6xl">
                  About MU5IC4GOOD
                </h1>
                <p className="mx-auto max-w-3xl text-xl text-gray-200 md:text-2xl dark:text-gray-300">
                  We&#39;re a passionate team of students—musicians, advocates,
                  and changemakers—brought together by the belief that music can
                  do more than entertain. We&#39;ve seen its power to heal,
                  connect, and transform lives, especially for children with
                  autism. As MU5IC4GOOD, we&#39;re using our voices, our
                  instruments, and our time to make the world a little
                  brighter—one note at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionOne;
