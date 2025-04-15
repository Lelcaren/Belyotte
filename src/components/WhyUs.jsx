import PropTypes from "prop-types";

const WhyUs = ({ className = "" }) => {
  return (
    <section
      className={`w-full max-w-[1440px] mx-auto bg-gray-50 overflow-hidden flex flex-col items-start justify-start py-24 px-16 box-border text-left relative rounded-lg shadow-sm mq750:py-16 mq750:px-8 mq750:box-border mq450:gap-6 ${className}`}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-20 translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full filter blur-3xl opacity-20 -translate-x-1/4 translate-y-1/4"></div>
      
      {/* Blue badge in top left */}
      <div className="absolute top-12 left-16 z-10 mq750:hidden">
        <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-semibold text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Excellence
        </div>
      </div>
      
      {/* Content */}
      <div className="self-stretch flex flex-row items-center justify-between flex-wrap content-center gap-20 z-10 mq750:gap-10 mq750:flex-col mq450:gap-8">
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-8 min-w-[400px] mq750:gap-6 mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-8 mq750:gap-6">
            <div className="self-stretch flex flex-col items-start justify-start gap-6">
              <h1 className="m-0 self-stretch relative text-4xl leading-[120%] font-bold font-[inherit] text-gray-900 mq450:text-2xl mq450:leading-[35px] mq1050:text-3xl mq1050:leading-[46px]">
                Why Choose <span className="text-blue-600">Our Services</span> for Your Needs?
              </h1>
              <div className="self-stretch relative text-lg leading-[150%] text-gray-700">
                We provide tailored solutions that empower students and
                businesses alike. Our commitment to quality and support sets
                us apart in the industry.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start py-2 px-0 gap-6 mq750:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[192px]">
                  <b className="self-stretch relative text-xl leading-[140%] text-gray-900 mq450:text-base mq450:leading-[22px]">
                    Expert Guidance
                  </b>
                  <div className="self-stretch relative text-base leading-[150%] text-gray-700">
                    Our team offers personalized support throughout your
                    journey, ensuring a smooth experience.
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[192px]">
                  <b className="self-stretch relative text-xl leading-[140%] text-gray-900 mq450:text-base mq450:leading-[22px]">
                    Proven Success
                  </b>
                  <div className="self-stretch relative text-base leading-[150%] text-gray-700">
                    Join countless satisfied clients who have achieved their
                    dreams with our help.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="flex flex-row items-center justify-center py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors gap-2 font-medium">
       
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        {/* Image container with rounded corners and shadow */}
        <div className="flex-1 min-w-[400px] rounded-lg overflow-hidden shadow-md mq750:min-w-full mq750:w-full">
          <img
            className="h-[640px] w-full object-cover mq1200:h-[580px] mq750:h-auto mq750:aspect-video"
            loading="lazy"
            alt="Professional virtual assistants collaborating"
            src="/why@2x.png"
          />
        </div>
      </div>
      
      {/* Decorative element in bottom right */}
      <div className="absolute bottom-12 right-16 z-10 mq750:hidden">
        <div className="bg-white shadow-md px-4 py-2 rounded-lg flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-sm font-medium text-gray-800">Follow Us</div>
        </div>
      </div>
    </section>
  );
};

WhyUs.propTypes = {
  className: PropTypes.string,
};

export default WhyUs;