import Button from "./Button";
import PropTypes from "prop-types";

const HeaderContact = ({ className = "" }) => {
  return (
    <section
      className={`w-full max-w-[1440px] mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden flex flex-col items-start justify-start py-24 px-16 box-border text-left relative rounded-lg shadow-sm mq750:py-16 mq750:px-8 mq750:box-border mq450:gap-6 ${className}`}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/4 translate-y-1/4"></div>
      
      {/* Blue badge in top left */}
      <div className="absolute top-12 left-16 z-10 mq750:hidden">
        <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-semibold text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Empower
        </div>
      </div>
      
      {/* Content */}
      <div className="self-stretch flex flex-row items-start justify-between flex-wrap content-start gap-20 z-10 mq750:gap-10 mq750:flex-col mq450:gap-8">
        <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[400px] mq750:min-w-full">
          <h1 className="m-0 self-stretch relative text-4xl leading-[120%] font-bold font-[inherit] text-gray-900 mq450:text-2xl mq450:leading-[35px] mq1050:text-3xl mq1050:leading-[46px]">
            Our <span className="text-blue-600">Vision</span> Matters
          </h1>
        </div>
        
        <div className="flex-1 flex flex-col items-start justify-start gap-8 min-w-[400px] mq750:gap-6 mq750:min-w-full">
          <div className="self-stretch relative text-lg leading-[150%] text-gray-700">
            We connect ambitious individuals with world-class educational and professional opportunities, empowering the next generation of global leaders through study abroad programs and virtual assistance solutions.
          </div>
        </div>
      </div>
      
      {/* Decorative element in bottom right */}
      <div className="absolute bottom-12 right-16 z-10 mq750:hidden">
        <div className="bg-white shadow-md px-4 py-2 rounded-lg flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-6.293-6.293A1 1 0 0110 3z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-sm font-medium text-gray-800">Our Mission</div>
        </div>
      </div>
    </section>
  );
};

HeaderContact.propTypes = {
  className: PropTypes.string,
};

export default HeaderContact;