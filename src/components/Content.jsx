import PropTypes from "prop-types";

const Content = ({
  className = "",
  iconEnvelope,
  heading,
  contactData,
  link,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-6 min-w-[304px] text-left text-13xl text-color-scheme-1-text font-text-tiny-normal ${className}`}
    >
      <img
        className="w-12 h-12 relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={iconEnvelope}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-6">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
          <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-[inherit] mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[33px]">
            {heading}
          </h1>
          <div className="self-stretch relative text-base leading-[150%]">
            {contactData}
          </div>
        </div>
        <div className="self-stretch relative text-base [text-decoration:underline] leading-[150%]">
          {link}
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  iconEnvelope: PropTypes.string,
  heading: PropTypes.string,
  contactData: PropTypes.string,
  link: PropTypes.string,
};

export default Content;
