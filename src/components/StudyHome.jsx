import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StudyHome = ({ className = "" }) => {
  return (
    <section
      className={`w-[1440px] bg-gradient-to-br from-white to-indigo-50 overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border text-left text-base text-color-scheme-1-text font-text-tiny-normal rounded-lg shadow-sm mq1050:w-full mq750:gap-10 mq750:pl-8 mq750:pr-8 mq750:py-20 mq750:box-border mq450:gap-5 mq450:pt-[47px] mq450:pb-[47px] mq450:px-4 mq450:box-border mq1050:pt-[73px] mq1050:pb-[73px] mq1050:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-20 mq1050:gap-16 mq750:gap-10 mq450:gap-5">
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-8 min-w-[400px] mq1050:min-w-[350px] mq750:gap-4 mq750:min-w-full mq750:order-2">
          <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <div className="flex flex-row items-center justify-start">
              <div className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full font-semibold text-sm flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                  <path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Study Abroad
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-6 text-29xl mq450:gap-3">
              <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit] mq450:text-10xl mq450:leading-[35px] mq750:text-15xl mq1050:text-19xl mq1050:leading-[46px]">
                Your <span className="text-indigo-600">Study Abroad</span> Journey Starts Here!
              </h1>
              <div className="self-stretch relative text-lg leading-[150%] text-gray-700 mq450:text-base">
                Embarking on a study abroad adventure opens doors to new cultures,
                experiences, and academic opportunities. Our dedicated team is here
                to guide you through every step of the process, ensuring a smooth
                transition to your chosen destination.
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                  </svg>
                </div>
                <span className="font-medium">Personalized Guidance</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <span className="font-medium">Global Opportunities</span>
              </div>
            </div>
            
            <div className="mt-2 flex flex-row items-center justify-start">
              <Link to="/study-abroad" className="no-underline">
                <div className="overflow-hidden flex flex-row items-center justify-center gap-2 px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer">
                  <div className="relative leading-[150%] font-medium">Start Your Journey</div>
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="flex-1 min-w-[400px] mq1050:min-w-[350px] mq750:min-w-full mq750:order-1">
          <img
            className="h-[640px] w-full relative max-w-full overflow-hidden object-cover rounded-lg shadow-md mq1050:h-[500px] mq750:h-[400px] mq450:h-[300px]"
            alt="Students studying abroad"
            src="/bridge2.jpg"
          />
          <div className="flex justify-end mt-2">
            <div className="bg-white shadow px-4 py-2 rounded-lg flex items-center gap-2 -mt-16 mr-6 relative z-10">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-sm font-medium">International Education</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

StudyHome.propTypes = {
  className: PropTypes.string,
};

export default StudyHome;