import PropTypes from "prop-types";

const Column = ({ placeholderImage, heading, headingColor, textDuisCursusMiQuisViverra, textDuisCursusColor, button, buttonColor, iconChevronRight }) => {
  return (
    <div className="flex-1 min-w-[300px] max-w-[400px] bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-start justify-start">
      <img
        className="self-stretch relative h-[240px] object-cover"
        alt=""
        src={placeholderImage}
      />
      <div className="self-stretch flex flex-col items-start justify-start p-6 gap-6">
        <div className="self-stretch flex flex-col items-start justify-start gap-3">
          <h3 
            className="m-0 self-stretch relative text-xl font-semibold font-inherit leading-[150%]"
            style={{ color: headingColor }}
          >
            {heading}
          </h3>
          <div 
            className="self-stretch relative text-base leading-[150%]"
            style={{ color: textDuisCursusColor }}
          >
            {textDuisCursusMiQuisViverra}
          </div>
        </div>
        <div 
          className="rounded-lg flex flex-row items-center justify-center py-3 px-5 gap-2 text-white cursor-pointer hover:opacity-90 transition-opacity"
          style={{ backgroundColor: buttonColor }}
        >
          <div className="relative text-base font-medium leading-[150%]">{button}</div>
          <img className="relative w-5 h-5" alt="" src={iconChevronRight} />
        </div>
      </div>
    </div>
  );
};

Column.propTypes = {
  placeholderImage: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  headingColor: PropTypes.string,
  textDuisCursusMiQuisViverra: PropTypes.string.isRequired,
  textDuisCursusColor: PropTypes.string,
  button: PropTypes.string.isRequired,
  buttonColor: PropTypes.string,
  iconChevronRight: PropTypes.string.isRequired,
};

const ExploreVa = ({ className = "" }) => {
  return (
    <section
      className={`w-full bg-gray-50 overflow-hidden flex flex-col items-center justify-start py-24 px-16 box-border gap-16 text-center relative rounded-lg shadow-sm mq750:py-16 mq750:px-8 mq750:box-border mq450:gap-10 ${className}`}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>
      
      {/* Blue badge at top */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-semibold text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 8l-3.293-3.293A1 1 0 0112 4z" clipRule="evenodd" />
          </svg>
          Categories
        </div>
      </div>
      
      {/* Heading */}
      <div className="max-w-[768px] relative text-4xl leading-[120%] font-semibold text-gray-900 z-10 mq450:text-2xl mq450:leading-[34px] mq1050:text-3xl mq1050:leading-[44px]">
        Explore Our <span className="text-blue-600">Diverse Categories</span> of Virtual Assistants to Meet Your Needs
      </div>
      
      {/* Cards section */}
      <div className="w-full max-w-[1300px] flex flex-row flex-wrap items-stretch justify-center gap-8 z-10 text-left text-xl text-gray-800">
        <Column
          placeholderImage="/public/find@2x.png"
          heading="Find the Perfect Virtual Assistant for Your Business Today"
          headingColor="#192c51"
          textDuisCursusMiQuisViverra="Our virtual assistants are skilled professionals ready to support your business with administrative tasks, customer service, and more."
          textDuisCursusColor="#4b5563"
          button="Explore"
          buttonColor="#192c51"
          iconChevronRight="/icon--chevronright-1.svg"
        />
        <Column
          placeholderImage="/public/unlock@2x.png"
          heading="Unlock Your Potential with Our Virtual Assistant Job Opportunities"
          headingColor="#192c51"
          textDuisCursusMiQuisViverra="Join our network of virtual assistants and take control of your career with flexible hours and competitive compensation."
          textDuisCursusColor="#4b5563"
          button="Join"
          buttonColor="#192c51"
          iconChevronRight="/icon--chevronright-1.svg"
        />
        <Column
          placeholderImage="/public/diverse@2x.png"
          heading="Diverse Roles Available: Find Your Ideal Virtual Assistant Position"
          headingColor="#192c51"
          textDuisCursusMiQuisViverra="Browse our listings to discover exciting job opportunities tailored for your skills and experience in the virtual assistant field."
          textDuisCursusColor="#4b5563"
          button="Browse"
          buttonColor="#192c51"
          iconChevronRight="/icon--chevronright-1.svg"
        />
      </div>
      
      {/* Decorative element in bottom left */}
      <div className="absolute bottom-12 left-16 z-10 mq750:hidden">
        <div className="bg-white shadow-md px-4 py-2 rounded-lg flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-sm font-medium text-gray-800">Multiple Options</div>
        </div>
      </div>
    </section>
  );
};

ExploreVa.propTypes = {
  className: PropTypes.string,
};

export default ExploreVa;