import Select from "./Select";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import Button from "./Button";
import PropTypes from "prop-types";

const ContactForm = ({ className = "" }) => {
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
              <label className="block mb-2 font-medium text-gray-700">First Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Last Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Date of Birth</label>
              <input type="date" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Phone</label>
              <input type="tel" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Marital Status</label>
              <Select className="w-full p-2 border border-gray-300 rounded" />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Address</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium text-gray-700">Address PO Box</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Town/City, Country</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Education</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium text-gray-700">Highest Education</label>
              <Select className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Institution Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Month-Year Started</label>
              <input type="month" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Month-Year Completed</label>
              <input type="month" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Program/Specialty</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Score</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 font-medium text-gray-700">Month-Year Graduated</label>
              <input type="month" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
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

        {/* Intentions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Your Intentions</h2>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">What do you want to do abroad?</label>
            <div className="flex flex-wrap gap-6 mb-4">
              <Checkbox label="Study" />
              <Checkbox label="Work" />
              <Checkbox label="Other" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium text-gray-700">If studies, what program?</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Level</label>
              <Select className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Preferred country & institution</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Start/Intake</label>
              <input type="month" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block mb-2 font-medium text-gray-700">What is your current profession?</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
          </div>
        </div>

        {/* Visa Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Visa Information</h2>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">Have you ever been refused a visa?</label>
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
            <label className="block mb-2 font-medium text-gray-700">Who will sponsor your trip?</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mb-6 p-3 bg-blue-50 rounded border border-blue-100 text-sm text-blue-700">
          By submitting this form, you agree to our Privacy Policy and Terms of Service.
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