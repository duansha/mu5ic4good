import SectionTitle from "../Common/SectionTitle";

const Journey = () => {
  return (
    <>
      <section className="bg-bg py-20 pt-16 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-8 pt-16">
          <div className="mb-16 text-center">
            <div className="m-auto block text-center">
              {/*<video width="640" height="480" controls autoPlay loop muted>
                <source src="/VIGB4016.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>*/}
              <iframe
                className="h-64 w-full md:h-96 lg:h-[600px]"
                src="https://www.youtube.com/embed/6Ibg77wf6Aw?autoplay=1&loop=1&modestbranding=1&autohide=1&showinfo=0"
                title="MU5IC4GOOD: Raising Awareness on the Benefits of Music Therapy for Children with Autism"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Journey;
