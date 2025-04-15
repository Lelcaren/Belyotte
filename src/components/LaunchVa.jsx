import Button from "./Button";
import PropTypes from "prop-types";

const LaunchVa = ({ className = "" }) => {
  return (
    <section
      className={`w-[1440px] bg-whitesmoke overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border text-left text-base text-Color-Neutral-Darkest font-Text-Small-Link mq750:gap-10 mq750:pl-8 mq750:pr-8 mq750:box-border mq450:gap-5 mq450:pt-[47px] mq450:pb-[47px] mq450:box-border mq1050:pt-[73px] mq1050:pb-[73px] mq1050:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-20 mq750:gap-10 mq450:gap-5">
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-8 min-w-[400px] mq750:gap-4 mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <div className="flex flex-row items-center justify-start">
              <div className="relative leading-[150%] font-semibold">
                Empower
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-6 text-29xl">
              <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit] mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
                Launch or Grow Your VA Career Today!
              </h1>
              <div className="self-stretch relative text-lg leading-[150%]">
                Becoming a Virtual Assistant opens doors to flexible work
                opportunities. Enjoy the freedom to choose your projects and set
                your own schedule while earning a competitive income.
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start">
            <Button
              alternate={false}
              iconPosition="No icon"
              small={false}
              style="Secondary"
              button="Join"
            />
          </button>
        </div>
        <img
          className="h-[640px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[400px] mq750:min-w-full"
          loading="lazy"
          alt=""
          src="/launch@2x.png"
        />
      </div>
    </section>
  );
};

LaunchVa.propTypes = {
  className: PropTypes.string,
};

export default LaunchVa;
