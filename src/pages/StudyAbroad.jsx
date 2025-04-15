import Navbar from "../components/Navbar";
import HeaderStudyAbroad from "../components/HeaderStudyAbroad";
import WhyStudyAbroad from "../components/WhyStudyAbroad";
import ExploreDiverseStudy from "../components/ExploreDiverseStudy";
import DiscoverHowStudy from "../components/DiscoverHowStudy";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const StudyAbroad = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Navbar image1="/image-1@2x.png" />
      <HeaderStudyAbroad />
      <WhyStudyAbroad />
      <ExploreDiverseStudy />
      <DiscoverHowStudy />
      <ContactForm />
      <FAQ />
      <Contact />
      <Footer image1="/image-1-1@2x.png" />
    </div>
  );
};

export default StudyAbroad;
