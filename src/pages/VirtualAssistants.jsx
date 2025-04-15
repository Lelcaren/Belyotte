import Navbar from "../components/Navbar";
import HeaderVa from "../components/HeaderVa";
import SimpleStepsVa from "../components/SimpleStepsVa";
import FindVa from "../components/FindVa";
import ExploreVa from "../components/ExploreVa";
import StepsVa from "../components/StepsVa";
import CTAVa from "../components/CTAVa";
import Footer from "../components/Footer";

const VirtualAssistants = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Navbar image1="/image-1@2x.png" />
      <HeaderVa />
      <SimpleStepsVa />
      <FindVa />
      <ExploreVa />
      <StepsVa />
      <CTAVa />
      <Footer image1="/image-1-1@2x.png" />
    </div>
  );
};

export default VirtualAssistants;
