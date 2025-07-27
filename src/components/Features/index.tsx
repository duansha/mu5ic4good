import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto px-4 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-16 h-16 text-pink-400 mx-auto mb-6"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Mission</h1><p className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 max-w-3xl mx-auto">To harness the power of music and community to raise awareness and provide support for music therapy programs that help children with autism develop communication skills, emotional expression, and social connections.</p>
        </div>
        </div>
      </section>
    </>
  );
};

export default Features;
