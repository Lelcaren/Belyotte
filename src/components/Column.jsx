import { useMemo } from "react";

const Column = ({
  className = "",
  columnMinWidth,
  placeholderImage,
  heading,
  headingColor,
  textDuisCursusMiQuisViverra,
  textDuisCursusColor,
  button,
  buttonColor,
  iconChevronRight,
}) => {
  const columnStyle = useMemo(() => {
    return {
      minWidth: columnMinWidth,
    };
  }, [columnMinWidth]);

  const headingStyle = useMemo(() => {
    return {
      color: headingColor,
    };
  }, [headingColor]);

  const textDuisCursusMiQuisViverraStyle = useMemo(() => {
    return {
      color: textDuisCursusColor,
    };
  }, [textDuisCursusColor]);

  const buttonStyle = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  return (
    <div
      className={`flex-1 rounded-xl bg-white flex flex-col items-start justify-start pt-[23px] px-[22px] pb-[26px] box-border gap-[21px] min-w-[300px] max-w-[400px] text-left text-xl text-Color-Neutral-Dark font-Text-Small-Link ${className}`}
      style={columnStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-start">
        <img
          className="h-[235px] flex-1 relative rounded-xl max-w-full overflow-hidden object-cover"
          alt=""
          src={placeholderImage}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2 pl-0">
        <div className="flex-1 flex flex-col items-start justify-start gap-[14px]">
          <div
            className="self-stretch relative leading-[30px] font-semibold"
            style={headingStyle}
          >
            {heading}
          </div>
          <div
            className="self-stretch relative text-base leading-[24px] text-Color-Neutral-Darkest"
            style={textDuisCursusMiQuisViverraStyle}
          >
            {textDuisCursusMiQuisViverra}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[4px] text-base text-Color-Primary-Night">
        <div className="relative leading-[24px] font-medium" style={buttonStyle}>
          {button}
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src={iconChevronRight}
        />
      </div>
    </div>
  );
};

export default Column;
