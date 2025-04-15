import Button from "./Button";
import PropTypes from "prop-types";

const HeaderStudyAbroad = ({ className = "" }) => {
  return (
    <section
      className={`w-full max-w-7xl mx-auto bg-gradient-to-br from-white to-blue-50 overflow-hidden flex flex-col items-center justify-start py-13xl px-xl box-border gap-12 text-center text-base text-color-scheme-1-text font-text-tiny-normal rounded-3xs shadow-sm 
      mq450:py-lg mq450:px-lg mq450:gap-4
      mq750:py-xl mq750:px-xl mq750:gap-6 ${className}`}
    >
      {/* Header Content */}
      <div className="w-full max-w-3xl flex flex-col items-center justify-start gap-4">
        {/* Badge */}
        <div className="flex flex-row items-center justify-start">
          <div className="bg-blue-100 text-darkslateblue px-4 py-1 rounded-81xl font-semibold text-sm flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            Empower
          </div>
        </div>
        
        {/* Heading and Subheading */}
        <div className="self-stretch flex flex-col items-center justify-start gap-6 mq750:gap-4 mq450:gap-3">
          <h1 className="m-0 self-stretch text-29xl font-bold leading-tight mq1050:text-21xl mq750:text-13xl mq450:text-5xl">
            <span className="text-blue-600">Global Education</span> Awaits
          </h1>
          <div className="self-stretch text-lg leading-relaxed text-gray mq750:text-base mq450:text-sm">
            Our program simplifies your journey to studying abroad. Discover the
            world while earning your degree at top universities in the USA,
            Canada, UK, Germany, and Ireland.
          </div>
        </div>
        
        {/* Audience Badges */}
        <div className="flex flex-row items-center justify-center gap-8 mt-4 flex-wrap mq750:gap-6 mq450:gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mq750:w-8 mq750:h-8 mq450:w-7 mq450:h-7">
              <svg className="w-5 h-5 text-blue-600 mq750:w-4 mq750:h-4 mq450:w-3 mq450:h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <span className="font-medium mq750:text-sm mq450:text-sm">For Students</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mq750:w-8 mq750:h-8 mq450:w-7 mq450:h-7">
              <svg className="w-5 h-5 text-blue-600 mq750:w-4 mq750:h-4 mq450:w-3 mq450:h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium mq750:text-sm mq450:text-sm">For Universities</span>
          </div>
        </div>
      </div>
      
      {/* Feature Cards */}
      <div className="self-stretch flex flex-col items-start justify-start w-full">
        <div className="w-full grid grid-cols-3 gap-8 
          mq1050:grid-cols-3 mq1050:gap-6
          mq750:grid-cols-1 mq750:gap-6
          mq450:grid-cols-1 mq450:gap-4">
          {/* Card 1 */}
          <div className="flex flex-col items-center gap-4 bg-color-white p-6 rounded-3xs shadow-sm 
            mq1050:p-5
            mq750:p-5 
            mq450:p-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2
              mq1050:w-14 mq1050:h-14
              mq750:w-14 mq750:h-14
              mq450:w-12 mq450:h-12">
              <svg className="w-8 h-8 text-blue-600
                mq1050:w-7 mq1050:h-7
                mq750:w-7 mq750:h-7
                mq450:w-6 mq450:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <h3 className="text-5xl font-bold text-darkslateblue
              mq1050:text-5xl
              mq750:text-5xl 
              mq450:text-5xl">Expert Guidance</h3>
            <p className="text-base text-gray
              mq1050:text-base
              mq750:text-base
              mq450:text-sm">Personal advisors to help navigate applications and visa processes.</p>
          </div>
          
          {/* Card 2 */}
          <div className="flex flex-col items-center gap-4 bg-color-white p-6 rounded-3xs shadow-sm
            mq1050:p-5
            mq750:p-5 
            mq450:p-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2
              mq1050:w-14 mq1050:h-14
              mq750:w-14 mq750:h-14
              mq450:w-12 mq450:h-12">
              <svg className="w-8 h-8 text-blue-600
                mq1050:w-7 mq1050:h-7
                mq750:w-7 mq750:h-7
                mq450:w-6 mq450:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-5xl font-bold text-darkslateblue
              mq1050:text-5xl
              mq750:text-5xl 
              mq450:text-5xl">Simplified Applications</h3>
            <p className="text-base text-gray
              mq1050:text-base
              mq750:text-base
              mq450:text-sm">Streamlined processes for university and scholarship applications.</p>
          </div>
          
          {/* Card 3 */}
          <div className="flex flex-col items-center gap-4 bg-color-white p-6 rounded-3xs shadow-sm
            mq1050:p-5
            mq750:p-5 
            mq450:p-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2
              mq1050:w-14 mq1050:h-14
              mq750:w-14 mq750:h-14
              mq450:w-12 mq450:h-12">
              <svg className="w-8 h-8 text-blue-600
                mq1050:w-7 mq1050:h-7
                mq750:w-7 mq750:h-7
                mq450:w-6 mq450:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                <path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="text-5xl font-bold text-darkslateblue
              mq1050:text-5xl
              mq750:text-5xl 
              mq450:text-5xl">Global Network</h3>
            <p className="text-base text-gray
              mq1050:text-base
              mq750:text-base
              mq450:text-sm">Access to top-ranked universities and opportunities worldwide.</p>
          </div>
        </div>
      </div>
      
      {/* CTA Button */}
      <Button
        className="flex flex-row items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-color-white rounded-3xs hover:bg-blue-700 transition-colors
          mq1050:px-6 mq1050:py-3
          mq750:px-5 mq750:py-2.5
          mq450:px-4 mq450:py-2 mq450:text-sm"
      >
        <span className="font-medium">Explore Programs</span>
        <svg className="h-5 w-5 text-color-white
          mq750:h-4 mq750:w-4
          mq450:h-4 mq450:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Button>
    </section>
  );
};

HeaderStudyAbroad.propTypes = {
  className: PropTypes.string,
};

export default HeaderStudyAbroad;