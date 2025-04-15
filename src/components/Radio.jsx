import PropTypes from "prop-types";

const Radio = ({
  className = "",
  alternate = false,
  selected = false,
  label,
  name,
  value,
  onChange,
  id
}) => {
  const inputId = id || `${name}-${value}`;

  return (
    <div
      className={`flex items-center gap-3 text-left text-base text-color-scheme-1-text font-text-tiny-normal ${className}`}
      data-alternate={alternate}
      data-selected={selected}
    >
      <input
        id={inputId}
        name={name}
        value={value}
        type="radio"
        checked={selected}
        onChange={onChange}
        className="cursor-pointer h-5 w-5 rounded-full bg-white border border-color-scheme-1-text"
      />
      <label htmlFor={inputId} className="cursor-pointer leading-[150%]">
        {label}
      </label>
    </div>
  );
};

Radio.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,

  /** Variant props */
  alternate: PropTypes.bool,
  selected: PropTypes.bool,
  id: PropTypes.string,
};

export default Radio;
