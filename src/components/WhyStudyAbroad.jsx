import PropTypes from "prop-types";

const WhyStudyAbroad = ({ className = "" }) => {
  return (
    <section
      className={`w-[1440px] bg-gradient-to-br from-white to-blue-50 overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border text-left text-base text-color-scheme-1-text font-text-tiny-normal rounded-lg shadow-sm mq1050:w-full mq750:gap-10 mq750:pl-8 mq750:pr-8 mq750:py-20 mq750:box-border mq450:gap-5 mq450:pt-[47px] mq450:pb-[47px] mq450:px-4 mq450:box-border mq1050:pt-[73px] mq1050:pb-[73px] mq1050:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-20 mq1050:gap-16 mq750:gap-10 mq450:gap-5">
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-8 min-w-[400px] mq1050:min-w-[350px] mq750:gap-4 mq750:min-w-full mq750:order-2">
          <div className="self-stretch flex flex-col items-start justify-start gap-8 mq750:gap-4">
            <div className="self-stretch flex flex-col items-start justify-start gap-4">
              <div className="flex flex-row items-center justify-start">
                <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-semibold text-sm flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  Explore
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-6 text-29xl mq450:gap-3">
                <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit] mq450:text-10xl mq450:leading-[35px] mq750:text-15xl mq1050:text-19xl mq1050:leading-[46px]">
                  Why Study <span className="text-blue-600">Abroad</span> With Us?
                </h1>
                <div className="self-stretch relative text-lg leading-[150%] text-gray-700 mq450:text-base">
                  Studying abroad opens doors to global opportunities. Our
                  dedicated team ensures a smooth transition to your chosen
                  university.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-2 px-0 gap-4">
              <div className="self-stretch flex flex-row items-center justify-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1 relative leading-[150%]">
                  Access top institutions in your desired country.
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1 relative leading-[150%]">
                  Receive personalized guidance tailored to your goals.
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1 relative leading-[150%]">
                  Enjoy a smooth application process with expert support.
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 flex flex-row items-center justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/icon--chevronright.svg"
              />
            </div>
          </div>
        </div>
        
        <div className="flex-1 min-w-[400px] mq1050:min-w-[350px] mq750:min-w-full mq750:order-1">
          <img
            className="h-[640px] w-full relative max-w-full overflow-hidden object-cover rounded-lg shadow-md mq1050:h-[500px] mq750:h-[400px] mq450:h-[300px]"
            loading="lazy"
            alt="Students studying abroad"
            src="/placeholder-image1@2x.png"
          />
          <div className="flex justify-end mt-2">
            <div className="bg-white shadow px-4 py-2 rounded-lg flex items-center gap-2 -mt-16 mr-6 relative z-10">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-sm font-medium">Global Education</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

WhyStudyAbroad.propTypes = {
  className: PropTypes.string,
};

export default WhyStudyAbroad;