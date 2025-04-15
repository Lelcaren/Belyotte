import Navbar from "../components/Navbar";
import HeaderHome from "../components/HeaderHome";
import BridgingHome from "../components/BridgingHome";
import StudyHome from "../components/StudyHome";
import HireHome from "../components/HireHome";
import SimpleHome from "../components/SimpleHome";
import CTAHome from "../components/CTAHome";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Navbar image1="/image-1@2x.png" />
      <HeaderHome />
      <BridgingHome />
      <StudyHome />
      <HireHome />
      <SimpleHome />
      <CTAHome />
      <Footer image1="/image-1-1@2x.png" />
    </div>
  );
};

export default Home;