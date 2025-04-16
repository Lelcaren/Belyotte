import Button from "./Button";
import PropTypes from "prop-types";

const FormUs = ({ className = "" }) => {
  return (
    <section
      className={`w-full max-w-screen-xl mx-auto bg-whitesmoke overflow-hidden py-6 px-2 sm:px-4 sm:py-8 md:py-10 md:px-6 lg:py-16 lg:px-12 ${className}`}
    >
      {/* Header Section - Enhanced responsiveness for smaller screens */}
      <div className="max-w-2xl mx-auto lg:max-w-none lg:mx-0 mb-4 sm:mb-6 lg:mb-12">
        <div className="mb-1 sm:mb-2">
          <div className="text-sm md:text-base font-semibold">Connect</div>
        </div>
        <div className="space-y-1 sm:space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight break-words">
            Get in Touch
          </h1>
          <div className="text-sm sm:text-base md:text-lg">
            We'd love to hear from you!
          </div>
        </div>
      </div>

      {/* Form Section - Improved for small screens */}
      <div className="w-full max-w-2xl mx-auto lg:max-w-none lg:mx-0">
        <form className="space-y-3 sm:space-y-6">
          {/* Name Row - Stack vertically on very small screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
            <div className="space-y-1 sm:space-y-2">
              <label className="block text-sm sm:text-base font-medium">First Name</label>
              <input
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                type="text"
                placeholder="John"
              />
            </div>
            <div className="space-y-1 sm:space-y-2">
              <label className="block text-sm sm:text-base font-medium">Last Name</label>
              <input
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>

          {/* Contact Row - Stack vertically on very small screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
            <div className="space-y-1 sm:space-y-2">
              <label className="block text-sm sm:text-base font-medium">Email</label>
              <input
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                type="email"
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-1 sm:space-y-2">
              <label className="block text-sm sm:text-base font-medium">Phone Number</label>
              <input
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                type="tel"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          {/* Message Field - Adjusted padding and height */}
          <div className="space-y-1 sm:space-y-2">
            <label className="block text-sm sm:text-base font-medium">Message</label>
            <textarea
              className="w-full h-24 sm:h-32 md:h-40 p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              placeholder="Type your message..."
              rows={4}
              style={{ resize: "vertical", maxHeight: "300px" }}
            />
          </div>

          {/* Checkbox and Submit - Better alignment for small screens */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start">
              <input
                type="checkbox"
                className="mt-1 h-3 w-3 sm:h-4 sm:w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-xs sm:text-sm text-gray-600">
                I agree to the terms and conditions and privacy policy
              </span>
            </div>
            <div className="pt-1 sm:pt-2">
              <Button
                alternate={false}
                iconPosition="No icon"
                small={true}
                style="Primary"
                button="Submit"
                className="w-full sm:w-auto text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

FormUs.propTypes = {
  className: PropTypes.string,
};

export default FormUs;