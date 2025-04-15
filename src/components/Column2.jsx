import PropTypes from "prop-types";

const Column2 = ({ className = "", create, heading, text }) => {
  return (
    <div
      className={`flex-1 overflow-hidden flex flex-col items-start justify-start gap-8 text-center text-13xl text-Color-Neutral-Darkest font-Text-Small-Link mq750:w-full mq450:gap-4 ${className}`}
    >
      <img
        className="self-stretch h-60 relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={create}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-6">
        <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-[inherit] mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[33px]">
          {heading}
        </h1>
        <div className="self-stretch relative text-base leading-[150%]">
          {text}
        </div>
      </div>
    </div>
  );
};

Column2.propTypes = {
  className: PropTypes.string,
  create: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
};

export default Column2;
