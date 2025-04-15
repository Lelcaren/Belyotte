import Button from "./Button";
import PropTypes from "prop-types";

const HeaderVa = ({ className = "" }) => {
  return (
    <section
      className={`w-[1440px] h-[900px] bg-gradient-to-br from-blue-800 to-blue-900 overflow-hidden flex flex-row items-center justify-start py-0 px-16 box-border relative rounded-lg shadow-sm mq1050:w-full mq750:pl-8 mq750:pr-8 mq750:box-border ${className}`}
    >
      {/* Background overlay with slightly reduced opacity */}
      <div 
        className="absolute inset-0 bg-[url('/public/header-va@3x.png')] bg-cover bg-no-repeat bg-[top] opacity-80 z-0"
      />
      
      {/* Blue badge in top left */}
      <div className="absolute top-12 left-16 z-10">
        <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-semibold text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1v-3a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Virtual Assistants
        </div>
      </div>
      
      {/* Content */}
      <div className="w-[560px] flex flex-col items-start justify-start py-5 px-0 box-border gap-8 z-10 mq750:gap-4">
        <div className="self-stretch flex flex-col items-start justify-start gap-6">
          <h1 className="m-0 self-stretch relative text-45xl leading-[120%] font-bold font-[inherit] text-white mq450:text-19xl mq450:leading-[46px] mq1050:text-32xl mq1050:leading-[61px]">
            Unlock Your <span className="text-blue-300">Potential</span> with Virtual Assistants
          </h1>
          <div className="self-stretch relative text-13xl leading-[150%] font-normal font-[inherit] text-white opacity-95 mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
            Discover how hiring a virtual assistant can streamline your
            operations and enhance productivity. Whether you're a business owner
            or a job seeker, this platform connects you with the right
            opportunities.
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-4">
          <div className="overflow-hidden flex flex-row items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
            <div className="relative leading-[150%] font-medium text-lg">Hire a VA</div>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-center gap-2 px-5 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors cursor-pointer">
            <div className="relative leading-[150%] font-medium text-lg">Find VA Jobs</div>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Decorative element in bottom right */}
      <div className="absolute bottom-16 right-16 z-10">
        <div className="bg-white shadow-md px-4 py-2 rounded-lg flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </div>
          <div className="text-sm font-medium text-gray-800">Global Talent Network</div>
        </div>
      </div>
    </section>
  );
};

HeaderVa.propTypes = {
  className: PropTypes.string,
};

export default HeaderVa;