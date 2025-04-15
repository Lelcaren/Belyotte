import PropTypes from "prop-types";

const TestimonialHome = ({ className = "", quote, avatarTitle }) => {
  return (
    <section
      className={`w-full bg-whitesmoke flex flex-col items-center justify-start py-28 px-4 text-center text-color-scheme-1-text font-text-tiny-normal
        mq1050:py-20 mq1050:px-6
        mq450:py-16 mq450:px-4 ${className}`}
    >
      <div className="w-full max-w-[600px] flex flex-col items-center justify-start gap-8 mq450:gap-5">
        {/* Stars */}
        <div className="flex flex-row items-center justify-center gap-1">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              className="h-[18px] w-[18px] mq450:h-[16px] mq450:w-[16px] object-contain"
              loading="lazy"
              alt="star"
              src="/vector.svg"
            />
          ))}
        </div>

        {/* Quote - Added better text handling for small screens */}
        <h3 className="text-lg font-bold leading-[150%] w-full overflow-hidden whitespace-normal break-words mq450:text-sm">
          "{quote}"
        </h3>

        {/* Avatar Section */}
        <div className="flex flex-row items-center justify-center gap-5 text-left text-base 
                      mq450:flex-col mq450:items-center mq450:text-center mq450:gap-3">
          <img
            className="h-14 w-14 mq450:h-12 mq450:w-12 rounded-full object-cover"
            loading="lazy"
            alt="avatar"
            src="/avatar-image@2x.png"
          />
          <div className="flex flex-col items-start justify-center mq450:items-center">
            <div className="font-semibold leading-[150%] mq450:text-sm">Emily Johnson</div>
            <div className="leading-[150%] break-words mq450:text-xs">
              {avatarTitle}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TestimonialHome.propTypes = {
  className: PropTypes.string,
  quote: PropTypes.string.isRequired,
  avatarTitle: PropTypes.string.isRequired,
};

export default TestimonialHome;



