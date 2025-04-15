import PropTypes from "prop-types";

const Button = ({
  className = "",
  alternate = false,
  iconPosition = "No icon",
  small = false,
  style = "Primary",
  button,
  onClick,
}) => {
  // Define base classes based on props
  const baseClasses = "cursor-pointer border-solid rounded-3xs flex flex-row items-center justify-center transition-all duration-300";
  
  // Set size based on small prop
  const sizeClasses = small ? "py-2 px-4 text-sm" : "py-3 px-6 text-base";
  
  // Set style based on style prop
  let styleClasses = "";
  if (style === "Primary") {
    styleClasses = alternate 
      ? "bg-white text-darkslateblue border-darkslateblue border" 
      : "bg-darkslateblue text-whitesmoke border-transparent";
  } else if (style === "Secondary") {
    styleClasses = alternate 
      ? "bg-transparent text-darkslateblue border-darkslateblue border" 
      : "bg-white text-darkslateblue border-darkslateblue border";
  }

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${styleClasses} ${className}`}
      onClick={onClick}
    >
      <div className="font-text-tiny-normal leading-[150%] whitespace-nowrap">
        {button}
      </div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  button: PropTypes.string,
  onClick: PropTypes.func,

  /** Variant props */
  alternate: PropTypes.bool,
  iconPosition: PropTypes.string,
  small: PropTypes.bool,
  style: PropTypes.string,
};

export default Button;
