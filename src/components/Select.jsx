import PropTypes from "prop-types";

const Select = ({ className = "", alternate = false, type = "Default" }) => {
  return (
    <div
      className={`self-stretch border-color-scheme-1-text border-solid border-[1px] flex flex-row items-center justify-start p-3 gap-4 text-left text-base text-color-scheme-1-text font-text-tiny-normal ${className}`}
      data-alternate={alternate}
      data-type={type}
    >
      <div className="flex-1 relative leading-[150%]">Choose One...</div>
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src="/icon--chevrondown.svg"
      />
    </div>
  );
};

Select.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  alternate: PropTypes.bool,
  type: PropTypes.number,
};

export default Select;
