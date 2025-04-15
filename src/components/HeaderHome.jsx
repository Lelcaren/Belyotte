import Button from "./Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HeaderHome = ({ className = "" }) => {
  return (
    <section
      className={`w-[1440px] bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border gap-20 text-left text-37xl text-color-scheme-1-text font-text-tiny-normal rounded-lg shadow-sm lg:pt-[73px] lg:pb-[73px] lg:box-border mq1050:w-full mq750:gap-10 mq750:py-[47px] mq750:px-8 mq750:box-border mq450:gap-5 mq450:px-4 mq450:py-8 ${className}`}
    >
      <div className="w-[768px] flex flex-col items-start justify-start gap-8 mq1050:w-full mq750:w-full mq450:gap-4">
        <div className="mb-2">
          <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Your Global Success Partner
          </span>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-6 mq450:gap-3">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit] mq450:text-15xl mq450:leading-[40px] mq750:text-21xl mq1050:text-26xl mq1050:leading-[54px]">
            Empowering <span className="text-blue-600">Careers</span>, Enabling <span className="text-indigo-600">Global Education</span>
          </h1>
          <div className="self-stretch relative text-lg leading-[150%] text-gray-700 mq450:text-base">
            Whether you're looking to study abroad or hire top-tier virtual
            assistants, we've got you covered with personalized solutions for your global journey!
          </div>
        </div>
        
        <div className="flex flex-row items-center gap-6 mt-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm text-gray-700">Expert Guidance</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm text-gray-700">Personalized Matching</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm text-gray-700">Global Network</span>
          </div>
        </div>
        
        <div className="flex flex-row items-start justify-start gap-4 mt-4 mq750:flex-wrap mq450:w-full">
          <Link to="/study-abroad" className="mq450:w-full">
            <Button
              alternate={false}
              iconPosition="No icon"
              small={false}
              style="Primary"
              button="Find Study Abroad Opportunities"
              className="mq450:w-full shadow-md"
            />
          </Link>
          <Link to="/virtual-assistants" className="mq450:w-full">
            <Button
              alternate={false}
              iconPosition="No icon"
              small={false}
              style="Secondary"
              button="Hire or Find Virtual Assistant Jobs"
              className="mq450:w-full shadow-md"
            />
          </Link>
        </div>
        
        
      </div>
      
      <div className="self-stretch relative">
        <img
          className="self-stretch h-[738px] relative max-w-full overflow-hidden shrink-0 object-cover rounded-lg shadow-lg mq1050:h-[500px] mq750:h-[400px] mq450:h-[300px]"
          loading="lazy"
          alt="Students exploring global opportunities"
          src="/header.jpeg"
        />
        
        <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold">New Opportunities</p>
            <p className="text-xs text-gray-500">Study in Canada now open!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

HeaderHome.propTypes = {
  className: PropTypes.string,
};

export default HeaderHome;