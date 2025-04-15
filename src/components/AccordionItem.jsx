import { useCallback } from "react";
import PropTypes from "prop-types";

const AccordionItem = ({ className = "", question, text }) => {
  const onAccordionHeaderClick = useCallback((event) => {
    const element = event.target;

    const accItem = element.closest("[data-acc-item]") || element;
    const accContent = accItem.querySelector("[data-acc-content]");
    const isOpen = accItem.hasAttribute("data-acc-open");
    const nextOuterSibling =
      accItem?.nextElementSibling || accItem?.parentElement?.nextElementSibling;
    const prevOuterSibling =
      accItem?.previousElementSibling ||
      accItem?.parentElement?.previousElementSibling;
    const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
      ? accItem?.nextElementSibling ||
        nextOuterSibling?.querySelector("[data-acc-item]") ||
        nextOuterSibling
      : accItem?.previousElementSibling ||
        prevOuterSibling?.querySelector("[data-acc-item]") ||
        prevOuterSibling;
    const siblingAccItem =
      siblingContainerAccItem?.querySelector("[data-acc-item]") ||
      siblingContainerAccItem;

    if (!siblingAccItem) return;
    const originalDisplay = "flex";
    const siblingDisplay = "flex";

    const openClasses = ["grid-rows-[1fr]"];
    const closeClasses = ["pt-0", "pb-0", "mb-0", "mt-0", "grid-rows-[0fr]"];

    if (isOpen) {
      accContent?.classList.remove(...openClasses);
      accContent?.classList.add(...closeClasses);

      setTimeout(() => {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = siblingDisplay;
        }
      }, 100);
    } else {
      if (accItem) {
        accItem.style.display = "none";
        siblingAccItem.style.display = originalDisplay;
      }
      const siblingAccContent =
        siblingAccItem?.querySelector("[data-acc-content]");
      setTimeout(() => {
        siblingAccContent?.classList.remove(...closeClasses);
        siblingAccContent?.classList.add(...openClasses);
      }, 1);
    }
  }, []);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-left text-lg text-color-white font-text-tiny-normal ${className}`}
      data-acc-item
      data-acc-open
      data-acc-original
      data-acc-default-open
    >
      <div
        className="self-stretch border-color-white border-solid border-t-stroke-divider-width overflow-hidden flex flex-row items-center justify-start pt-[18px] px-0 pb-5 gap-6 cursor-pointer"
        data-acc-header
        onClick={onAccordionHeaderClick}
      >
        <b className="flex-1 relative leading-[150%]">{question}</b>
        <img
          className="h-8 w-8 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icon.svg"
        />
      </div>
      <div
        className="self-stretch grid grid-rows-[1fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-base accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
        data-acc-content
      >
        <div className="self-stretch [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-6">
            <div className="flex-1 relative leading-[150%]">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  className: PropTypes.string,
  question: PropTypes.string,
  text: PropTypes.string,
};

export default AccordionItem;
