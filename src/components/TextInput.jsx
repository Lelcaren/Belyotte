import PropTypes from "prop-types";

const TextInput = ({ className = "", alternate = false, type = "Default" }) => {
  return (
    <div
      className={`flex-1 border-color-scheme-1-text border-solid border-[1px] flex flex-row items-center justify-start p-3 ${className}`}
      data-alternate={alternate}
      data-type={type}
    >
      <input
        className="w-full [border:none] [outline:none] font-text-tiny-normal text-base bg-[transparent] flex-1 relative leading-[150%] text-gray text-left inline-block"
        placeholder="Enter your email"
        type="text"
      />
    </div>
  );
};

TextInput.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  alternate: PropTypes.bool,
  type: PropTypes.number,
};

export default TextInput;
