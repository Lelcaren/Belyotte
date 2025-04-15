import TextInput from "./TextInput";
import Button from "./Button";
import PropTypes from "prop-types";

const PostAJobVa = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-whitesmoke overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border max-w-full text-left text-21xl text-Color-Neutral-Darkest font-Text-Small-Link mq750:gap-10 mq750:pl-8 mq750:pr-8 mq750:box-border mq450:gap-5 ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-8 max-w-full mq750:gap-4">
        <div className="flex-1 flex flex-col items-start justify-start gap-6 min-w-[499px] mq750:min-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit] mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
            Post a Job for Your VA
          </h1>
          <div className="self-stretch relative text-lg leading-[150%]">
            Connect with talented virtual assistants today!
          </div>
        </div>
        <div className="w-[513px] flex flex-col items-start justify-start gap-4 max-w-full text-xs">
          <div className="self-stretch flex flex-row items-start justify-start gap-4 mq750:flex-wrap">
            <TextInput
              alternate={false}
              type="Default"
              placeholder="Your Email Here"
            />
            <Button
              alternate={false}
              iconPosition="No icon"
              small={false}
              style="Primary"
              button="Submit Job"
            />
          </div>
          <div className="self-stretch relative leading-[150%]">
            By clicking Submit Job, you agree to our Terms and Conditions.
          </div>
        </div>
      </div>
    </section>
  );
};

PostAJobVa.propTypes = {
  className: PropTypes.string,
};

export default PostAJobVa;
