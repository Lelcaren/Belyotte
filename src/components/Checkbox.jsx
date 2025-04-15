import PropTypes from "prop-types";

const Checkbox = ({ className = "", alternate = false, selected = false }) => {
  return (
    <div
      className={`flex flex-row items-center justify-start pt-0 px-0 pb-4 gap-2 text-left text-sm text-color-scheme-1-text font-text-tiny-normal ${className}`}
      data-alternate={alternate}
      data-selected={selected}
    >
      <input
        className="m-0 h-5 w-5 relative border-color-scheme-1-text border-solid border-[1px] box-border overflow-hidden shrink-0"
        type="checkbox"
      />
      <div className="relative leading-[150%]">I accept the Terms</div>
    </div>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  alternate: PropTypes.bool,
  selected: PropTypes.bool,
};

export default Checkbox;
