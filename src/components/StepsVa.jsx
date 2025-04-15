import PropTypes from "prop-types";

const Column2 = ({ create, heading, text }) => {
  return (
    <div className="flex-1 rounded-lg bg-white shadow-md p-8 flex flex-col items-center justify-start gap-6">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
        <img className="w-8 h-8 object-contain" alt="" src={create} />
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-3 text-center">
        <h3 className="m-0 self-stretch relative text-xl font-semibold font-inherit leading-[150%] text-gray-800 mq450:text-base mq450:leading-[24px]">
          {heading}
        </h3>
        <div className="self-stretch relative text-base leading-[150%] text-gray-600">
          {text}
        </div>
      </div>
    </div>
  );
};

Column2.propTypes = {
  create: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const Button = ({ alternate, iconPosition, small, style, button }) => {
  const getButtonClasses = () => {
    if (style === "Secondary") {
      return "bg-blue-600 hover:bg-blue-700 text-white";
    }
    return "bg-white hover:bg-gray-50 text-blue-600 border border-blue-600";
  };
  
  const getSizeClasses = () => {
    if (small) {
      return "py-2 px-4 text-sm";
    }
    return "py-3 px-6 text-base";
  };
  
  return (
    <div className={`rounded-lg flex flex-row items-center justify-center ${getButtonClasses()} ${getSizeClasses()} font-medium transition-colors cursor-pointer`}>
      {iconPosition === "Left" && (
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )}
      {button}
      {iconPosition === "Right" && (
        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )}
    </div>
  );
};

Button.propTypes = {
  alternate: PropTypes.bool,
  iconPosition: PropTypes.string,
  small: PropTypes.bool,
  style: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};

const StepsVa = ({ className = "" }) => {
  return (
    <section
      className={`w-full max-w-[1440px] mx-auto bg-gray-50 overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border gap-20 text-center text-base text-gray-900 relative rounded-lg shadow-sm mq750:gap-10 mq750:py-16 mq750:px-8 mq750:box-border mq450:gap-8 mq1050:pt-20 mq1050:pb-20 mq1050:box-border ${className}`}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full filter blur-3xl opacity-30 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50 rounded-full filter blur-3xl opacity-30 -translate-x-1/3 translate-y-1/3"></div>
      
      {/* Blue badge at top */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-semibold text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          Career Guide
        </div>
      </div>
      
      {/* Header section */}
      <div className="w-full max-w-[768px] flex flex-col items-center justify-start gap-4 z-10">
        <div className="flex flex-row items-center justify-start">
          <div className="relative leading-[150%] font-semibold text-blue-600 bg-blue-100 bg-opacity-50 px-3 py-1 rounded-full">Join</div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-6">
          <h1 className="m-0 self-stretch relative text-4xl leading-[120%] font-bold font-[inherit] text-gray-900 mq450:text-2xl mq450:leading-[35px] mq1050:text-3xl mq1050:leading-[46px]">
            Steps to Launch Your <span className="text-blue-600">VA Career</span>
          </h1>
          <div className="self-stretch relative text-lg leading-[150%] text-gray-700">
            Embarking on a virtual assistant career is easy. Follow these simple
            steps to get started and connect with businesses.
          </div>
        </div>
      </div>
      
      {/* Steps section */}
      <div className="self-stretch flex flex-col items-start justify-start z-10 mq750:gap-8 mq450:gap-4">
        <div className="w-full max-w-[1312px] mx-auto flex flex-row items-stretch justify-center gap-12 mq1050:flex-row mq750:flex-col mq750:gap-6">
          <Column2
            create="/create@2x.png"
            heading="Create Your Profile Today"
            text="Showcase your skills and experience to attract employers looking for your unique talents."
          />
          <Column2
            create="/apply@2x.png"
            heading="Apply for Exciting Job Opportunities"
            text="Browse through various listings that match your expertise and professional interests."
          />
          <Column2
            create="/gwt@2x.png"
            heading="Get Hired and Start Working"
            text="Connect with businesses and begin your remote journey with flexible working conditions."
          />
        </div>
      </div>
      
      {/* Button section */}
      <div className="z-10 mt-2">
        <Button
          alternate={false}
          iconPosition="Right"
          small={false}
          style="Secondary"
          button="Apply Now"
        />
      </div>
      
      {/* Decorative element in bottom right */}
      <div className="absolute bottom-12 right-16 z-10 mq750:hidden">
        <div className="bg-white shadow-md px-4 py-2 rounded-lg flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <div className="text-sm font-medium text-gray-800">Get Notifications</div>
        </div>
      </div>
    </section>
  );
};

StepsVa.propTypes = {
  className: PropTypes.string,
};

export default StepsVa;