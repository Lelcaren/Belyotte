import PropTypes from "prop-types";

const Card = ({ className = "", team1 }) => {
  return (
    <div
      className={`
        flex flex-col items-center justify-start 
        gap-4 sm:gap-6 
        w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] mx-auto
        text-center
        text-Color-Neutral-Darkest font-Text-Small-Link
        ${className}
      `}
    >
      <img
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative rounded-full object-cover"
        loading="lazy"
        alt="Team member"
        src={team1}
      />
      <div className="w-full flex flex-col items-center gap-3 sm:gap-4">
        <div className="w-full flex flex-col items-center">
          <div
            className="
              text-base sm:text-lg md:text-xl
              font-semibold leading-tight
            "
          >
            Kevin Otey
          </div>
          <div
            className="
              text-sm sm:text-base
              leading-normal text-gray-700 mt-1
            "
          >
            Job title
          </div>
        </div>
        <div
          className="
            text-xs sm:text-sm md:text-base
            leading-relaxed text-gray-600
            max-w-[240px] mx-auto
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  team1: PropTypes.string,
};

export default Card;