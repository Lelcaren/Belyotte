import Column from "./Column";
import PropTypes from "prop-types";

const DiscoverHowStudy = ({ className = "" }) => {
  return (
    <section
      className={`w-[1440px] bg-gradient-to-br from-white to-blue-50 overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border text-left text-base text-color-scheme-1-text font-text-tiny-normal rounded-lg shadow-sm mq1050:w-full mq750:gap-10 mq750:pl-8 mq750:pr-8 mq750:py-20 mq750:box-border mq450:gap-5 mq450:pt-[47px] mq450:pb-[47px] mq450:px-4 mq450:box-border mq1050:pt-[73px] mq1050:pb-[73px] mq1050:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-8 mb-12 mq750:gap-4">
        <div className="flex flex-row items-center justify-start">
          <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-semibold text-sm flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            Process
          </div>
        </div>
        <h1 className="m-0 w-full max-w-[768px] relative font-bold leading-[120%] text-29xl mq1050:text-19xl mq1050:leading-[46px] mq750:text-15xl mq450:text-10xl mq450:leading-[35px]">
          Discover How Our <span className="text-blue-600">Study Abroad</span> Process Works for You
        </h1>
        <div className="self-stretch relative text-lg leading-[150%] text-gray-700 max-w-[768px] mq450:text-base">
          Follow these simple steps to embark on your international education journey with confidence and clarity.
        </div>
      </div>
      
      <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-12 mq750:gap-6 mq450:flex-col mq450:items-center">
        {/* Step 1 Card */}
        <div className="flex-1 flex flex-col items-start justify-start gap-8 min-w-[304px] max-w-full mq450:gap-4 bg-white p-6 rounded-lg shadow-sm">
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <div className="text-blue-600 font-bold text-lg">1</div>
            </div>
            <h3 className="m-0 self-stretch relative text-xl leading-[140%] font-bold text-gray-800">
              Fill Out the Application Form
            </h3>
            <div className="self-stretch relative text-base leading-[150%] text-gray-700">
              Complete our user-friendly form to kickstart your application process with essential details about your academic background and preferences.
            </div>
          </div>
          <div className="mt-2 flex flex-row items-center justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
        
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Step 2 Card */}
        <div className="flex-1 flex flex-col items-start justify-start gap-8 min-w-[304px] max-w-full mq450:gap-4 bg-white p-6 rounded-lg shadow-sm">
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <div className="text-blue-600 font-bold text-lg">2</div>
            </div>
            <h3 className="m-0 self-stretch relative text-xl leading-[140%] font-bold text-gray-800">
              Get Matched with a University
            </h3>
            <div className="self-stretch relative text-base leading-[150%] text-gray-700">
              We connect you with institutions that align with your academic goals, career aspirations, and personal preferences.
            </div>
          </div>
          <div className="mt-2 flex flex-row items-center justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Step 3 Card */}
        <div className="flex-1 flex flex-col items-start justify-start gap-8 min-w-[304px] max-w-full mq450:gap-4 bg-white p-6 rounded-lg shadow-sm">
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <div className="text-blue-600 font-bold text-lg">3</div>
            </div>
            <h3 className="m-0 self-stretch relative text-xl leading-[140%] font-bold text-gray-800">
              Receive Expert Application Support
            </h3>
            <div className="self-stretch relative text-base leading-[150%] text-gray-700">
              Our team guides you through the entire application process, from documentation to visa requirements.
            </div>
          </div>
          <div className="mt-2 flex flex-row items-center justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

DiscoverHowStudy.propTypes = {
  className: PropTypes.string,
};

export default DiscoverHowStudy;