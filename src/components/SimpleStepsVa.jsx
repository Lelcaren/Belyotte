import PropTypes from "prop-types";

const Column2 = ({ icon, heading, text }) => {
  return (
    <div className="flex-1 rounded-lg bg-white shadow-md p-6 flex flex-col items-start justify-start gap-6">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
        {/* Using SVG icons instead of images */}
        <div className="w-6 h-6 text-blue-600">
          {icon}
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-3">
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
  icon: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const SimpleStepsVa = ({ className = "" }) => {
  // SVG icons for each step
  const followIcon = (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  );

  const discoverIcon = (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg>
  );

  const finalizeIcon = (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
    </svg>
  );

  return (
    <section
      className={`w-full bg-gray-50 overflow-hidden flex flex-col items-center justify-center py-24 px-16 box-border gap-16 relative rounded-lg mq750:py-16 mq750:px-8 mq750:box-border mq750:gap-10 mq450:gap-8 ${className}`}
    >
      {/* Header section with heading and description */}
      <div className="w-full max-w-[1312px] flex flex-row items-start justify-between gap-16 mq1050:flex-col mq750:gap-8 mq450:gap-6">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start">
          <h2 className="m-0 self-stretch relative text-4xl leading-[120%] font-bold font-inherit text-gray-900 mq1050:text-3xl mq1050:leading-[38px] mq450:text-2xl mq450:leading-[29px]">
            Simple Steps to Hire the <span className="text-blue-600">Perfect</span> Virtual Assistant for Your Business
          </h2>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start">
          <div className="self-stretch relative text-lg leading-[150%] text-gray-700 opacity-95">
            Hiring a virtual assistant can streamline your operations and
            enhance productivity. Our straightforward process ensures you find
            the right match for your needs. Let us guide you through each step
            to make hiring seamless and efficient.
          </div>
        </div>
      </div>

      {/* Steps cards section */}
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="w-full max-w-[1312px] flex flex-row items-stretch justify-between gap-8 mq750:gap-6 mq450:flex-col">
          <Column2
            icon={followIcon}
            heading="Follow These Easy Steps to Hire Your Virtual Assistant Today"
            text="Start by posting a job that outlines your requirements and expectations for the role."
          />
          <Column2
            icon={discoverIcon}
            heading="Discover Talented Virtual Assistants Ready to Support Your Business"
            text="Browse through our curated list of skilled virtual assistants with verified credentials and reviews."
          />
          <Column2
            icon={finalizeIcon}
            heading="Finalize Your Choice and Onboard Your New Virtual Assistant Effortlessly"
            text="Review profiles, conduct interviews, and select the best fit for your team with our streamlined process."
          />
        </div>
      </div>

      {/* Decorative element in bottom right */}
      <div className="absolute bottom-12 right-16 z-10 mq750:hidden">
        <div className="bg-blue-100 shadow-sm px-4 py-2 rounded-lg flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-sm font-medium text-blue-800">Simple Process</div>
        </div>
      </div>
    </section>
  );
};

SimpleStepsVa.propTypes = {
  className: PropTypes.string,
};

export default SimpleStepsVa;