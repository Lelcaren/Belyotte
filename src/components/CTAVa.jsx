import PropTypes from "prop-types";

const TextInput = ({ alternate, type, placeholder }) => {
  const getBorderClasses = () => {
    if (alternate) {
      return "border-gray-300 focus:border-blue-500";
    }
    return "border-gray-300 focus:border-blue-500";
  };
  
  return (
    <div className="flex-1 relative">
      <input
        className={`self-stretch w-full h-12 rounded-lg bg-white py-3 px-4 border ${getBorderClasses()} outline-none text-base text-gray-800 placeholder-gray-400`}
        placeholder={placeholder}
        type={type === "Password" ? "password" : "text"}
      />
    </div>
  );
};

TextInput.propTypes = {
  alternate: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

const Button = ({ alternate, iconPosition, small, style, button }) => {
  const getButtonClasses = () => {
    if (style === "Primary") {
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
    <button className={`rounded-lg flex flex-row items-center justify-center ${getButtonClasses()} ${getSizeClasses()} font-medium transition-colors cursor-pointer`}>
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
    </button>
  );
};

Button.propTypes = {
  alternate: PropTypes.bool,
  iconPosition: PropTypes.string,
  small: PropTypes.bool,
  style: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};

const CTAVa = ({ className = "" }) => {
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
          Join Now
        </div>
      </div>
      
      {/* Content */}
      <div className="self-stretch flex flex-row items-center justify-between flex-wrap content-center gap-20 z-10 mq750:gap-10 mq750:flex-col mq450:gap-8">
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-8 min-w-[400px] mq750:gap-6 mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <h1 className="m-0 self-stretch relative text-4xl leading-[120%] font-bold font-[inherit] text-gray-900 mq450:text-2xl mq450:leading-[35px] mq1050:text-3xl mq1050:leading-[46px]">
              Join Our <span className="text-blue-600">Virtual Assistant</span> Network
            </h1>
            <div className="self-stretch relative text-lg leading-[150%] text-gray-700">
              Take the first step towards a rewarding virtual assistant career
              or hire skilled professionals today!
            </div>
          </div>
          <div className="w-full max-w-[513px] flex flex-col items-start justify-start gap-4 text-xs">
            <form className="self-stretch flex flex-row items-center justify-start gap-4 mq750:flex-col">
              <TextInput
                alternate={false}
                type="Default"
                placeholder="Enter your email"
              />
              <Button
                alternate={false}
                iconPosition="Right"
                small={false}
                style="Primary"
                button="Sign Up"
              />
            </form>
            <div className="self-stretch relative leading-[150%] text-gray-500">
              By clicking Sign Up, you agree to our Terms and Conditions.
            </div>
          </div>
        </div>
        
        {/* Image container with rounded corners and shadow */}
        <div className="flex-1 min-w-[400px] rounded-lg overflow-hidden shadow-md mq750:min-w-full mq750:w-full">
          <img
            className="h-[400px] w-full object-cover mq750:h-auto mq750:aspect-video"
            loading="lazy"
            alt="Virtual assistant working remotely"
            src="/join@2x.png"
          />
        </div>
      </div>
      
      {/* Decorative element in bottom right */}
      <div className="absolute bottom-12 right-16 z-10 mq750:hidden">
        <div className="bg-white shadow-md px-4 py-2 rounded-lg flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-sm font-medium text-gray-800">24/7 Support</div>
        </div>
      </div>
    </section>
  );
};

CTAVa.propTypes = {
  className: PropTypes.string,
};

export default CTAVa;