import PropTypes from "prop-types";

const ExploreDiverseStudy = ({ className = "" }) => {
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
            Discover
          </div>
        </div>
        <h1 className="m-0 w-full max-w-[768px] relative font-bold leading-[120%] text-29xl mq1050:text-19xl mq1050:leading-[46px] mq750:text-15xl mq450:text-10xl mq450:leading-[35px]">
          Explore Diverse Study Opportunities Across <span className="text-blue-600">Five</span> Dynamic Countries
        </h1>
      </div>
      
      <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-12 mq750:gap-6">
        
        {/* First Card */}
        <div className="flex-1 flex flex-col items-start justify-start gap-8 min-w-[280px] max-w-full mq450:gap-4 bg-white p-6 rounded-lg shadow-sm">
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="m-0 self-stretch relative text-xl leading-[140%] font-bold text-gray-800">
              Unlock Your Future with Global Education Choices
            </h3>
            <div className="self-stretch relative text-base leading-[150%] text-gray-700">
              Discover the unique advantages of studying in Canada, USA, UK,
              Germany, and Ireland.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-base">
            <div className="overflow-hidden flex flex-row items-center justify-center gap-2 text-blue-600 cursor-pointer hover:text-blue-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Second Card */}
        <div className="flex-1 flex flex-col items-start justify-start gap-8 min-w-[280px] max-w-full mq450:gap-4 bg-white p-6 rounded-lg shadow-sm">
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <h3 className="m-0 self-stretch relative text-xl leading-[140%] font-bold text-gray-800">
              Canada – Affordable tuition, post-study work options, and
              high-quality education
            </h3>
            <div className="self-stretch relative text-base leading-[150%] text-gray-700">
              Experience a welcoming environment with excellent academic
              standards and diverse cultures.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-base">
            <div className="overflow-hidden flex flex-row items-center justify-center gap-2 text-blue-600 cursor-pointer hover:text-blue-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Third Card */}
        <div className="flex-1 flex flex-col items-start justify-start gap-8 min-w-[280px] max-w-full mq450:gap-4 bg-white p-6 rounded-lg shadow-sm">
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="m-0 self-stretch relative text-xl leading-[140%] font-bold text-gray-800">
              USA – Wide range of universities with cutting-edge research
              opportunities
            </h3>
            <div className="self-stretch relative text-base leading-[150%] text-gray-700">
              Join a vibrant academic community that fosters innovation and
              creativity.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-base">
            <div className="overflow-hidden flex flex-row items-center justify-center gap-2 text-blue-600 cursor-pointer hover:text-blue-700 transition-colors">
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

ExploreDiverseStudy.propTypes = {
  className: PropTypes.string,
};

export default ExploreDiverseStudy;