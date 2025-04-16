import Column1 from "./Column1";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const HireHome = ({ className = "" }) => {
  return (
    <section
      className={`w-full max-w-7xl mx-auto bg-gradient-to-br from-white to-blue-50 overflow-hidden flex flex-col items-center justify-start py-16 px-8 box-border gap-12 text-center text-base text-color-scheme-1-text font-text-tiny-normal rounded-lg shadow-sm 
      lg:py-20 lg:px-16 lg:gap-16
      md:py-16 md:px-12 md:gap-12
      sm:py-16 sm:px-12 sm:gap-12
      xs:py-8 xs:px-4 xs:gap-8 ${className}`}
    >
      {/* Header Content */}
      <div className="w-full max-w-3xl flex flex-col items-center justify-start gap-4">
        {/* Badge */}
        <div className="flex flex-row items-center justify-start">
          <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-semibold text-sm flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            Opportunities
          </div>
        </div>
        
        {/* Heading and Subheading */}
        <div className="self-stretch flex flex-col items-center justify-start gap-6 sm:gap-4 xs:gap-3">
          <h1 className="m-0 self-stretch text-5xl lg:text-5xl md:text-4xl sm:text-4xl xs:text-2xl font-bold leading-tight">
            Hire <span className="text-blue-600">Top Talent</span> or Find Your <span className="text-blue-700">Dream Job</span>
          </h1>
          <div className="self-stretch text-lg md:text-base sm:text-base xs:text-sm leading-relaxed text-gray-700">
            Discover a wide range of services tailored for businesses seeking
            virtual assistants. Our platform connects you with qualified
            professionals ready to enhance your team's productivity.
          </div>
        </div>
        
        {/* Audience Badges */}
        <div className="flex flex-row items-center justify-center gap-8 mt-4 flex-wrap sm:gap-6 xs:gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center sm:w-8 sm:h-8">
              <svg className="w-5 h-5 text-blue-600 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <span className="font-medium sm:text-sm">For Businesses</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center sm:w-8 sm:h-8">
              <svg className="w-5 h-5 text-blue-600 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </div>
            <span className="font-medium sm:text-sm">For Job Seekers</span>
          </div>
        </div>
      </div>
      
      {/* Content Columns */}
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="w-full grid grid-cols-3 gap-8 md:grid-cols-3 sm:grid-cols-3 mq450:grid-cols-1 mq450:gap-6">
          <Column1
            placeholderImage="/placeholder-image-5@2x.png"
            heading="Key Services for Businesses Hiring VAs"
            text="From executive assistance to social media management, we cover it all."
            className="bg-white p-6 rounded-lg shadow-sm mq450:p-4 w-full"
          />
          <Column1
            placeholderImage="/placeholder-image-6@2x.png"
            heading="Opportunities for Virtual Assistants"
            text="Enjoy flexible work arrangements and competitive pay."
            className="bg-white p-6 rounded-lg shadow-sm mq450:p-4 w-full"
          />
          <Column1
            placeholderImage="/placeholder-image-7@2x.png"
            heading="Gain Experience with International Businesses"
            text="Expand your skills while working with global clients."
            className="bg-white p-6 rounded-lg shadow-sm mq450:p-4 w-full"
          />
        </div>
      </div>
      
      {/* CTA Button with Link */}
      <Link to="/virtual-assistants" className="flex flex-row items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer sm:px-6 sm:py-3 sm:text-base mq450:px-5 mq450:py-2.5 mq450:text-sm">
        <span className="font-medium">Get Started</span>
        <svg className="h-5 w-5 text-white mq450:h-4 mq450:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </section>
  );
};

HireHome.propTypes = {
  className: PropTypes.string,
};

export default HireHome;