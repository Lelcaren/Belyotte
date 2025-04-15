import Button from "./Button";
import PropTypes from "prop-types";

const GetUs = ({ className = "" }) => {
  return (
    <section
      className={`
        w-full max-w-[1200px] mx-auto 
        bg-whitesmoke overflow-hidden 
        flex flex-col items-start justify-center
        px-16 py-28 gap-10 
        text-base text-Color-Neutral-Darkest font-Text-Small-Link
        lg:px-16 lg:py-28
        md:px-12 md:py-24
        sm:px-6 sm:py-20
        max-[400px]:px-4 max-[400px]:py-16 max-[400px]:gap-6
        ${className}
      `}
    >
      <div className="w-full max-w-[768px] flex flex-col items-start justify-start gap-8 max-[400px]:gap-4">
        <div className="flex flex-col items-start justify-start gap-4">
          <div className="text-sm font-semibold max-[400px]:text-xs">
            Connect
          </div>
          <div className="flex flex-col items-start justify-start gap-6">
            <h1 className="text-5xl font-bold leading-tight max-[400px]:text-3xl max-[400px]:leading-snug">
              Get in Touch
            </h1>
            <p className="text-lg leading-[150%] max-[400px]:text-base">
              We’re here to assist you with any questions or support you may need.
            </p>
          </div>
        </div>
        <div>
          <Button
            alternate={false}
            iconPosition="No icon"
            small={false}
            style="Secondary"
            button="Inquire"
          />
        </div>
      </div>
    </section>
  );
};

GetUs.propTypes = {
  className: PropTypes.string,
};

export default GetUs;
