import PropTypes from "prop-types";

const ListItem = ({ className = "", heading, text }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-4 min-w-[192px] text-left text-xl text-Color-White font-Text-Small-Link ${className}`}
    >
      <img
        className="w-12 h-12 relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/icon--relume.svg"
      />
      <b className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]">
        {heading}
      </b>
      <div className="self-stretch relative text-base leading-[150%]">
        {text}
      </div>
    </div>
  );
};

ListItem.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
};

export default ListItem;
