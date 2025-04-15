import Content from "./Content";
import PropTypes from "prop-types";

const Contact = ({ className = "" }) => {
  return (
    <section
      className={`w-[1440px] bg-gradient-to-br from-white to-blue-50 overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border text-left text-base text-color-scheme-1-text font-text-tiny-normal rounded-lg shadow-sm mq1050:w-full mq750:gap-10 mq750:pl-8 mq750:pr-8 mq750:py-20 mq750:box-border mq450:gap-5 mq450:pt-[47px] mq450:pb-[47px] mq450:px-4 mq450:box-border mq1050:pt-[73px] mq1050:pb-[73px] mq1050:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-8 mb-12 mq750:gap-4">
        <div className="flex flex-row items-center justify-start">
          <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-semibold text-sm flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Contact Us
          </div>
        </div>
        <h1 className="m-0 w-full max-w-[768px] relative font-bold leading-[120%] text-29xl mq1050:text-19xl mq1050:leading-[46px] mq750:text-15xl mq450:text-10xl mq450:leading-[35px]">
          Get in <span className="text-blue-600">Touch</span> With Our Team
        </h1>
        <div className="self-stretch relative text-lg leading-[150%] text-gray-700 max-w-[768px] mq450:text-base">
          We're here to answer your questions and provide guidance on your international education journey.
        </div>
      </div>

      <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-12 mq750:gap-6 mq450:flex-col mq450:items-center">
        {/* Email Card */}
        <div className="flex-1 flex flex-col items-start justify-start gap-8 min-w-[280px] max-w-full mq450:gap-4 bg-white p-6 rounded-lg shadow-sm">
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h3 className="m-0 self-stretch relative text-xl leading-[140%] font-bold text-gray-800">
              Email
            </h3>
            <div className="self-stretch relative text-base leading-[150%] text-gray-700">
              Get in touch with our advisors for personalized support.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-base">
            <div className="overflow-hidden flex flex-row items-center justify-center gap-2 text-blue-600 cursor-pointer hover:text-blue-700 transition-colors">
              <div className="relative leading-[150%] font-medium">hello@relume.io</div>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Phone Card */}
        <div className="flex-1 flex flex-col items-start justify-start gap-8 min-w-[280px] max-w-full mq450:gap-4 bg-white p-6 rounded-lg shadow-sm">
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h3 className="m-0 self-stretch relative text-xl leading-[140%] font-bold text-gray-800">
              Phone
            </h3>
            <div className="self-stretch relative text-base leading-[150%] text-gray-700">
              Reach out to us anytime for assistance.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-base">
            <div className="overflow-hidden flex flex-row items-center justify-center gap-2 text-blue-600 cursor-pointer hover:text-blue-700 transition-colors">
              <div className="relative leading-[150%] font-medium">+1 (555) 000-0000</div>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Office Card */}
        <div className="flex-1 flex flex-col items-start justify-start gap-8 min-w-[280px] max-w-full mq450:gap-4 bg-white p-6 rounded-lg shadow-sm">
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="m-0 self-stretch relative text-xl leading-[140%] font-bold text-gray-800">
              Office
            </h3>
            <div className="self-stretch relative text-base leading-[150%] text-gray-700">
              Visit us for in-person consultations and support.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-base">
            <div className="overflow-hidden flex flex-row items-center justify-center gap-2 text-blue-600 cursor-pointer hover:text-blue-700 transition-colors">
              <div className="relative leading-[150%] font-medium">123 Sample St, Sydney NSW 2000 AU</div>
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

Contact.propTypes = {
  className: PropTypes.string,
};

export default Contact;
