import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SimpleHome = ({ className = "" }) => {
  return (
    <section
      className={`w-full max-w-[1440px] mx-auto bg-darkslateblue overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border gap-20 text-center text-21xl text-color-white font-text-tiny-normal 
        mq1050:px-12
        mq750:gap-10 mq750:py-[73px] mq750:px-8 mq750:box-border 
        mq450:gap-5 mq450:px-4 ${className}`}
    >
      <h1 className="m-0 w-full max-w-[768px] relative text-inherit leading-[120%] font-bold font-[inherit] inline-block 
        mq1050:text-13xl mq1050:leading-[38px]
        mq450:text-5xl mq450:leading-[29px]">
        Simple, Seamless, and Effective – Get Started Today!
      </h1>
      
      <div className="self-stretch flex flex-col items-start justify-start text-5xl mq750:gap-8 mq450:gap-4">
        <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-12 mq750:gap-6">
          
          {/* First Card */}
          <div className="flex-1 flex flex-col items-center justify-start gap-8 min-w-[280px] max-w-full mq450:gap-4">
            <div className="self-stretch flex flex-col items-center justify-start gap-6">
              <img
                className="w-12 h-12 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-6">
                <h3 className="m-0 self-stretch relative text-inherit leading-[140%] font-bold font-[inherit] mq450:text-lgi mq450:leading-[27px]">
                  Your Path to Global Education and Remote Work Awaits!
                </h3>
                <div className="self-stretch relative text-base leading-[150%]">
                  Embark on your journey with our straightforward step-by-step
                  process.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start text-left text-base">
              <Link 
                to="/contact" 
                className="overflow-hidden flex flex-row items-center justify-center gap-2 py-3 px-6 bg-white text-darkslateblue hover:bg-opacity-90 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              >
                <div className="relative leading-[150%] font-semibold">Start Now</div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon--chevronright-1.svg"
                />
              </Link>
            </div>
          </div>
          
          {/* Second Card */}
          <div className="flex-1 flex flex-col items-center justify-start gap-8 min-w-[280px] max-w-full mq450:gap-4">
            <div className="self-stretch flex flex-col items-center justify-start gap-6">
              <img
                className="w-12 h-12 relative overflow-hidden shrink-0"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-6">
                <h3 className="m-0 self-stretch relative text-inherit leading-[140%] font-bold font-[inherit] mq450:text-lgi mq450:leading-[27px]">
                  For Students: Navigate Your Study Abroad Experience with Ease
                </h3>
                <div className="self-stretch relative text-base leading-[150%]">
                  Choose your destination, check requirements, and apply
                  effortlessly.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start text-left text-base">
              <Link 
                to="/study-abroad" 
                className="overflow-hidden flex flex-row items-center justify-center gap-2 py-3 px-6 bg-white text-darkslateblue hover:bg-opacity-90 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              >
                <div className="relative leading-[150%] font-semibold">Apply Now</div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon--chevronright-1.svg"
                />
              </Link>
            </div>
          </div>
          
          {/* Third Card */}
          <div className="flex-1 flex flex-col items-center justify-start gap-8 min-w-[280px] max-w-full mq450:gap-4">
            <div className="self-stretch flex flex-col items-center justify-start gap-6">
              <img
                className="w-12 h-12 relative overflow-hidden shrink-0"
                alt=""
                src="/icon--relume.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-6">
                <h3 className="m-0 self-stretch relative text-inherit leading-[140%] font-bold font-[inherit] mq450:text-lgi mq450:leading-[27px]">{`For Businesses & Virtual Assistants: Connect and Collaborate Seamlessly`}</h3>
                <div className="self-stretch relative text-base leading-[150%]">
                  Post jobs or apply for remote work and enhance productivity.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start text-left text-base">
              <Link 
                to="/virtual-assistants" 
                className="overflow-hidden flex flex-row items-center justify-center gap-2 py-3 px-6 bg-white text-darkslateblue hover:bg-opacity-90 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              >
                <div className="relative leading-[150%] font-semibold">Connect Now</div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon--chevronright-1.svg"
                />
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

SimpleHome.propTypes = {
  className: PropTypes.string,
};

export default SimpleHome;