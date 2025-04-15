import PropTypes from "prop-types";

const JourneyUs = ({ className = "" }) => {
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
          Innovative
        </div>
      </div>
      
      {/* Content */}
      <div className="self-stretch flex flex-row items-center justify-between flex-wrap content-center gap-20 z-10 mq750:gap-10 mq750:flex-col mq450:gap-8">
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-8 min-w-[400px] mq750:gap-6 mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-6">
            <h1 className="m-0 self-stretch relative text-4xl leading-[120%] font-bold font-[inherit] text-gray-900 mq450:text-2xl mq450:leading-[35px] mq1050:text-3xl mq1050:leading-[46px]">
              Our Journey: Building <span className="text-blue-600">Bridges</span> Across Borders
            </h1>
            <div className="self-stretch relative text-lg leading-[150%] text-gray-700">
              Founded in 2020, our company has transformed the landscape of
              study abroad and virtual staffing. With a commitment to
              excellence, we have helped thousands achieve their dreams of
              international education and remote work.
            </div>
          </div>
          
          <button className="flex flex-row items-center justify-center py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors gap-2 font-medium">
         
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        {/* Image container with rounded corners and shadow */}
        <div className="flex-1 min-w-[400px] rounded-lg overflow-hidden shadow-md mq750:min-w-full mq750:w-full">
          <img
            className="h-[640px] w-full object-cover mq1200:h-[580px] mq750:h-auto mq750:aspect-video"
            loading="lazy"
            alt="Company journey and international connections"
            src="/our@2x.png"
          />
        </div>
      </div>
      
      {/* Decorative element in bottom right */}
      <div className="absolute bottom-12 right-16 z-10 mq750:hidden">
        <div className="bg-white shadow-md px-4 py-2 rounded-lg flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-sm font-medium text-gray-800">Our History</div>
        </div>
      </div>
    </section>
  );
};

JourneyUs.propTypes = {
  className: PropTypes.string,
};

export default JourneyUs;