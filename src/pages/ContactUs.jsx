import Navbar from "../components/Navbar";
import HeaderContact from "../components/HeaderContact";
import JourneyUs from "../components/JourneyUs";
import WhyUs from "../components/WhyUs";
import Team from "../components/Team";
import FormUs from "../components/FormUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Navbar image1="/image-1@2x.png" />
      <HeaderContact />
      <JourneyUs />
      <WhyUs />
      <Team />
      <FormUs />
      <Contact />
      <Footer image1="/image-1-1@2x.png" />
    </div>
  );
};

export default ContactUs;
