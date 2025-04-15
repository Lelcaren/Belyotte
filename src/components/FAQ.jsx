import { useState } from "react";
import PropTypes from "prop-types";

// AccordionItem Component
const AccordionItem = ({ question, text, isOpen, onClick, index }) => {
  return (
    <div 
      className="self-stretch flex flex-col items-start justify-start border-t border-white border-opacity-20 first:border-t-0"
      data-accordion-item={index}
    >
      <div
        className="self-stretch flex flex-row items-center justify-between pt-5 pb-5 px-0 cursor-pointer group transition-all duration-200 ease-in-out hover:opacity-90"
        onClick={onClick}
      >
        <h3 className="flex-1 relative text-base md:text-lg font-bold leading-[150%] text-left">
          {question}
        </h3>
        <div className="flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-full bg-white bg-opacity-10 transition-transform duration-300 ease-in-out group-hover:bg-opacity-20">
          <svg 
            className={`w-5 h-5 md:w-6 md:h-6 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <div 
        className={`self-stretch overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="self-stretch flex-row items-start justify-start pt-0 px-0 pb-6">
          <p className="flex-1 relative text-sm md:text-base leading-[150%] text-white text-opacity-90">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

// Button Component
const Button = ({ label, onClick, secondary = false }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 md:px-8 md:py-4 rounded-full font-medium text-base md:text-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 ${
        secondary 
          ? "bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10" 
          : "bg-white text-darkslateblue hover:bg-opacity-90"
      }`}
    >
      {label}
    </button>
  );
};

// Main FAQ Component
const FAQ = ({ className = "" }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are the requirements?",
      text: "To apply, you need to provide personal details, educational background, and study preferences. Additionally, a valid passport and any required documentation for your chosen country are necessary. Our team will guide you through each step."
    },
    {
      question: "How long does it take?",
      text: "The application process typically takes 4 to 8 weeks, depending on the university and country. Factors such as visa processing times can also affect the overall timeline. We strive to keep you informed throughout the process."
    },
    {
      question: "What support do you provide?",
      text: "We offer personalized guidance, assistance with application submissions, and help with visa and travel arrangements. Our advisors are available to answer your questions and provide ongoing support. You can also access scholarship information and resources."
    },
    {
      question: "Can I work abroad?",
      text: "Yes, many countries allow international students to work part-time while studying. Work regulations vary by country, so it's essential to check the specific rules for your destination. Our team can provide information on work opportunities available to you."
    },
    {
      question: "Still have questions?",
      text: "If you have more inquiries or need further assistance, don't hesitate to reach out. Our team is here to help you navigate the process smoothly. We want to ensure you have all the information you need."
    }
  ];

  return (
    <section
      className={`w-full max-w-screen-2xl bg-darkslateblue overflow-hidden flex flex-col items-center justify-start py-20 md:py-24 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-16 box-border text-center text-white font-sans ${className}`}
    >
      <div className="w-full max-w-2xl flex flex-col items-center justify-start gap-12 md:gap-16 lg:gap-20">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center justify-start gap-4 md:gap-6">
          <h2 className="m-0 self-stretch relative text-3xl md:text-4xl lg:text-5xl leading-[120%] font-bold">
            Frequently Asked Questions
          </h2>
          <p className="self-stretch relative text-base md:text-lg tracking-normal leading-[150%] text-white text-opacity-90">
            Here are some common questions about our study abroad program and
            the application process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="self-stretch border-b border-white border-opacity-20 flex flex-col items-start justify-start text-left">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              index={index}
              question={faq.question}
              text={faq.text}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Contact Section */}
        <div className="w-full max-w-md flex flex-col items-center justify-start gap-6 md:gap-8">
          <div className="self-stretch flex flex-col items-center justify-start gap-3 md:gap-4">
            <h2 className="m-0 self-stretch relative text-2xl md:text-3xl leading-[130%] font-bold">
              Need More Information?
            </h2>
            <p className="self-stretch relative text-base md:text-lg leading-[150%] text-white text-opacity-90">
              Contact our advisors for personalized assistance with your study abroad journey.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

FAQ.propTypes = {
  className: PropTypes.string,
};

export default FAQ;