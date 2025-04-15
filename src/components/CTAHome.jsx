import TextInput from "./TextInput";
import Button from "./Button";
import PropTypes from "prop-types";

const CTAHome = ({ className = "" }) => {
  return (
    <section
      className={`w-full max-w-[1440px] mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-sm overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border text-left text-29xl text-color-scheme-1-text font-text-tiny-normal
        mq1050:gap-10 mq1050:pl-8 mq1050:pr-8 mq1050:box-border
        mq750:pt-[73px] mq750:pb-[73px] mq750:box-border
        mq450:gap-5 mq450:px-4 ${className}`}
    >
      <div className="w-full max-w-[768px] flex flex-col items-start justify-start gap-8 mq450:gap-4">
        <div className="self-stretch flex flex-col items-start justify-start gap-6 mq450:gap-4">
          <div className="mb-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              Newsletter
            </span>
          </div>
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit] 
              mq1050:text-19xl mq1050:leading-[46px]
              mq450:text-10xl mq450:leading-[35px]">
            Stay Informed, <span className="text-blue-600">Stay Ahead!</span>
          </h1>
          <div className="self-stretch relative text-lg leading-[150%] text-gray-700 mq450:text-base">
            Subscribe for the latest study abroad opportunities and virtual job
            openings delivered straight to your inbox. Never miss an opportunity again!
          </div>
        </div>
        <div className="w-full max-w-[513px] flex flex-col items-start justify-start gap-4 text-xs">
          <div className="self-stretch flex flex-row items-start justify-start gap-4 mq750:flex-wrap">
            <TextInput alternate={false} type="Default" />
            <Button
              alternate={false}
              iconPosition="No icon"
              small={false}
              style="Primary"
              button="Sign Up"
            />
          </div>
          <div className="self-stretch relative leading-[150%] text-gray-500 flex items-center">
            <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            By clicking Sign Up, you agree to our Terms and Conditions.
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

CTAHome.propTypes = {
  className: PropTypes.string,
};

export default CTAHome;
