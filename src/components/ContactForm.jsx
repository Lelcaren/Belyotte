import Select from "./Select";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import Button from "./Button";
import PropTypes from "prop-types";
import { useState } from "react";

const ContactForm = ({ className = "" }) => {
  // State for dropdown selections
  const [maritalStatus, setMaritalStatus] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  
  // Options for dropdowns
  const maritalOptions = [
    { value: "single", label: "Single" },
    { value: "married", label: "Married" },
    { value: "divorced", label: "Divorced" },
    { value: "widowed", label: "Widowed" },
    { value: "separated", label: "Separated" },
    { value: "other", label: "Other" }
  ];
  
  const educationOptions = [
    { value: "high_school", label: "High School" },
    { value: "diploma", label: "Diploma" },
    { value: "associate", label: "Associate Degree" },
    { value: "bachelor", label: "Bachelor's Degree" },
    { value: "master", label: "Master's Degree" },
    { value: "doctorate", label: "Doctorate" },
    { value: "other", label: "Other" }
  ];

  return (
    <section
      className={`w-full bg-gray-50 overflow-hidden flex flex-col items-center justify-start py-12 px-4 sm:px-6 md:px-8 lg:px-12 box-border text-left text-base text-gray-800 ${className}`}
    >
      <div className="w-full max-w-3xl flex flex-col items-start justify-start gap-4 mb-8">
        <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">Application</span>
        <h1 className="text-3xl font-bold text-gray-800">Get Started</h1>
        <p className="text-gray-600">Fill out the form to start your journey.</p>
      </div>

      <form className="w-full max-w-3xl">
        {/* Personal Information */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Personal Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium text-gray-700">First Name <span className="text-red-500">*</span></label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Last Name <span className="text-red-500">*</span></label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Date of Birth <span className="text-red-500">*</span></label>
              <input type="date" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Phone <span className="text-red-500">*</span></label>
              <input type="tel" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Marital Status <span className="text-red-500">*</span></label>
              <select 
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
                required
              >
                <option value="">Select status</option>
                {maritalOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Passport Number <span className="text-red-500">*</span></label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Address</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium text-gray-700">Address PO Box <span className="text-red-500">*</span></label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Town/City, Country <span className="text-red-500">*</span></label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Education</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium text-gray-700">Highest Education <span className="text-red-500">*</span></label>
              <select
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                value={educationLevel}
                onChange={(e) => setEducationLevel(e.target.value)}
                required
              >
                <option value="">Select education level</option>
                {educationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Institution Name <span className="text-red-500">*</span></label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Month-Year Started <span className="text-red-500">*</span></label>
              <input type="month" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Month-Year Completed <span className="text-red-500">*</span></label>
              <input type="month" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Program/Specialty <span className="text-red-500">*</span></label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Score</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 font-medium text-gray-700">Month-Year Graduated <span className="text-red-500">*</span></label>
              <input type="month" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Work Experience</h2>
          <label className="block mb-2 font-medium text-gray-700">Past or current positions</label>
          <textarea 
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" 
            rows={3}
            placeholder="Describe your work experience..."
          />
        </div>

        {/* Visa Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Visa Information</h2>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">Have you ever been refused a visa? <span className="text-red-500">*</span></label>
            <div className="flex gap-6 mb-2">
              <Radio label="Yes" name="visaRefused" />
              <Radio label="No" name="visaRefused" />
            </div>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" 
              placeholder="If yes, please provide details"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 font-medium text-gray-700">Who will sponsor your trip? <span className="text-red-500">*</span></label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <input type="checkbox" id="termsCheckbox" className="h-4 w-4" required />
            <label htmlFor="termsCheckbox" className="text-gray-700">I accept the Terms <span className="text-red-500">*</span></label>
          </div>
          <div className="p-3 bg-blue-50 rounded border border-blue-100 text-sm text-blue-700">
            By submitting this form, you agree to our Privacy Policy and Terms of Service.
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <Button
            alternate={false}
            iconPosition="No icon"
            small={false}
            style="Primary"
            button="Submit Application"
            className="px-8 py-3"
          />
        </div>
      </form>
    </section>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
};

export default ContactForm;