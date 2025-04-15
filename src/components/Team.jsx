import Card from "./Card";
import Button from "./Button";
import PropTypes from "prop-types";

const Team = ({ className = "" }) => {
  return (
    <section
      className={`w-full max-w-[1440px] mx-auto bg-gray-50 overflow-hidden flex flex-col items-start justify-start py-24 px-16 box-border text-left relative rounded-lg shadow-sm mq750:py-16 mq750:px-8 mq750:box-border mq450:gap-6 ${className}`}
    >
      {/* Background decorative elements - consistent with CTA component */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-20 translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full filter blur-3xl opacity-20 -translate-x-1/4 translate-y-1/4"></div>
      
      {/* Blue badge in top left */}
      <div className="absolute top-12 left-16 z-10 mq750:hidden">
        <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-semibold text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Our Team
        </div>
      </div>

      {/* Content Container */}
      <div className="self-stretch z-10 flex flex-col items-start justify-start gap-16 mq750:gap-10 mq450:gap-8">
        {/* Title and Description */}
        <div className="w-full max-w-[1312px] flex flex-row items-start justify-between gap-16 mq750:gap-10 mq450:gap-6 mq1050:flex-col">
          <div className="flex-1 flex flex-col items-start justify-start">
            <h1 className="m-0 self-stretch relative text-4xl leading-[120%] font-bold text-gray-900 mq450:text-2xl mq450:leading-[35px] mq1050:text-3xl mq1050:leading-[46px]">
              Meet Our <span className="text-blue-600">Dedicated Team</span> of  Professionals
            </h1>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start">
            <p className="self-stretch relative text-lg leading-[150%] text-gray-700">
            "Driven by a deep passion for excellence, our dedicated owners lead a talented team committed to supporting your business with precision and professionalism. With unwavering focus and personal investment in your success, we bring unique skills and care to help your business grow and thrive."
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="self-stretch w-full max-w-[1312px] flex flex-row items-stretch justify-between gap-8 mq750:gap-6 mq450:flex-col">
          <Card team1="/kevin otey.webp" />
          <Card team1="/maureen.webp" />
          <Card team1="/kevin otey.webp" />
        </div>

        {/* Hiring CTA Section - Centered with shadow and rounded corners */}
        <div className="self-stretch w-full max-w-[1312px] flex flex-col items-center justify-center gap-6 bg-white p-12 rounded-lg shadow-md mq750:p-8 mq450:p-6">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 mq450:text-2xl">
            We're <span className="text-blue-600">Hiring!</span>
          </h2>
          <p className="text-base leading-relaxed text-gray-700 max-w-xl text-center">
            Join our dynamic team and help businesses worldwide thrive with the support they need.
          </p>
          <div className="mt-4">
            <Button
              alternate={false}
              iconPosition="Right"
              small={false}
              style="Primary"
              button="Open Positions"
            />
          </div>
        </div>
      </div>

      {/* Decorative element in bottom right */}
      <div className="absolute bottom-12 right-16 z-10 mq750:hidden">
        <div className="bg-white shadow-md px-4 py-2 rounded-lg flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V3z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-sm font-medium text-gray-800">Join Us</div>
        </div>
      </div>
    </section>
  );
};

Team.propTypes = {
  className: PropTypes.string,
};

export default Team;