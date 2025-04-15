import PropTypes from "prop-types";

const ListItem = ({ heading, text, headingColor, textColor }) => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[240px]">
      <h3 className="m-0 self-stretch relative text-xl font-semibold font-inherit" style={{ color: headingColor }}>
        {heading}
      </h3>
      <div className="self-stretch relative text-base leading-[150%] opacity-90" style={{ color: textColor }}>
        {text}
      </div>
    </div>
  );
};

ListItem.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  headingColor: PropTypes.string,
  textColor: PropTypes.string,
};

const FindVa = ({ className = "" }) => {
  return (
    <section
      className={`w-full max-w-[1440px] bg-gradient-to-br from-blue-900 to-indigo-900 overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border gap-20 text-left text-base text-white font-Text-Small-Link relative rounded-lg shadow-md lg:pt-18 lg:pb-20 lg:box-border mq750:gap-10 mq750:py-16 mq750:px-8 mq750:box-border mq450:gap-8 ${className}`}
    >
      {/* Background overlay with slightly reduced opacity */}
      <div 
        className="absolute inset-0 bg-[url('/public/bg-pattern.png')] bg-cover bg-no-repeat bg-[top] opacity-20 z-0"
      />
      
      {/* Blue badge in top right */}
      <div className="absolute top-12 right-16 z-10 mq750:hidden">
        <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-semibold text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          Business Solutions
        </div>
      </div>
      
      {/* Content wrapper */}
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-20 z-10 mq750:gap-10 mq450:gap-5">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-4 min-w-[400px] mq750:min-w-full">
          <div className="flex flex-row items-center justify-start">
            <div className="relative leading-[150%] font-semibold text-blue-300 bg-blue-900 bg-opacity-50 px-3 py-1 rounded-full">Empower</div>
          </div>
          <h1 className="m-0 self-stretch relative text-5xl leading-[120%] font-bold font-[inherit] text-white mq450:text-3xl mq450:leading-[35px] mq1050:text-4xl mq1050:leading-[46px]">
            Find the <span className="text-blue-300">Right</span> Virtual Assistant for Your Business!
          </h1>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start min-w-[400px] text-lg mq750:gap-4 mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-8 mq750:gap-4">
            <div className="self-stretch relative leading-[150%] text-white opacity-90">
              Hiring a virtual assistant can streamline your operations and
              enhance productivity. Discover how a VA can help you focus on what
              truly matters—growing your business.
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-xl">
              <div className="self-stretch flex flex-row items-start justify-start py-2 px-0 gap-6 mq750:flex-wrap">
                <ListItem
                  heading="Why Hire?"
                  text="Reduce operational costs while gaining specialized skills without the commitment of full-time hires."
                  headingColor="#ffffff"
                  textColor="#ffffff"
                />
                <ListItem
                  heading="How It Works"
                  text="Post a job, browse candidates, and hire the perfect virtual assistant for your needs."
                  headingColor="#ffffff"
                  textColor="#ffffff"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image section */}
      <div className="w-full flex items-center justify-center z-10">
        <div className="relative w-full max-w-[1273px]">
          <img
            className="w-full h-auto max-h-[675px] relative object-cover rounded-lg shadow-lg"
            loading="lazy"
            alt="Virtual assistant collaborating with a business owner"
            src="/find1@2x.png"
          />
          
          {/* Decorative element on the image */}
          <div className="absolute bottom-6 right-6 z-10">
            <div className="bg-white shadow-md px-4 py-2 rounded-lg flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
              </div>
              <div className="text-sm font-medium text-gray-800">Trusted by 10,000+ businesses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FindVa.propTypes = {
  className: PropTypes.string,
};

export default FindVa;