import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavLink = ({ text, to }) => (
  <Link 
    to={to}
    className="relative leading-[150%] font-semibold cursor-pointer hover:underline hover:text-white text-white transition-all duration-300 ease-in-out after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
  >
    {text}
  </Link>
);

const SocialIcon = ({ src, alt, href = "#" }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="h-8 w-8 relative overflow-hidden shrink-0 cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 hover:scale-110"
  >
    <img
      className="h-5 w-5"
      loading="lazy"
      alt={alt}
      src={src}
    />
  </a>
);

const LegalLink = ({ text, to = "#" }) => (
  <Link
    to={to}
    className="relative leading-[150%] cursor-pointer transition-all duration-300 ease-in-out text-whitesmoke text-opacity-80 hover:text-opacity-100 hover:underline"
  >
    {text}
  </Link>
);

const Footer = ({ className = "", image1 }) => {
  // Navigation links configuration with paths matching the router
  const navigationLinks = [
    { text: "Contact Us", path: "/contact" },
    { text: "Study Abroad", path: "/study-abroad" },
    { text: "Virtual Assistants", path: "/virtual-assistants" },
    { text: "Home", path: "/" }
  ];

  // Social media links - add actual URLs when available
  const socialLinks = [
    { src: "/icon--facebook.svg", alt: "Facebook", href: "https://facebook.com" },
    { src: "/icon--instagram.svg", alt: "Instagram", href: "https://instagram.com" },
    { src: "/icon--linkedin.svg", alt: "LinkedIn", href: "https://linkedin.com" }
  ];
  
  // Legal links configuration
  const legalLinks = [
    { text: "Privacy Policy", path: "/privacy" },
    { text: "Terms of Use", path: "/terms" },
    { text: "Cookie Settings", path: "/cookies" }
  ];

  return (
    <footer
      className={`self-stretch bg-darkslateblue overflow-hidden shrink-0 flex flex-col items-center justify-start py-20 px-16 box-border gap-20 text-left text-sm text-whitesmoke font-text-tiny-normal
        mq1050:px-8 mq1050:py-16 mq1050:gap-16
        mq750:px-6 mq750:py-12 mq750:gap-12
        mq450:px-4 mq450:py-10 mq450:gap-10 ${className}`}
    >
      {/* Top Section with Logo, Links, and Social Icons */}
      <div className="self-stretch flex flex-row items-center justify-between gap-8
         mq1050:flex-wrap mq1050:justify-start mq1050:gap-6
        mq750:flex-col mq750:items-start mq750:gap-8">
        
        {/* Logo */}
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start min-w-[200px] mq750:flex-auto mq750:w-full">
          <Link to="/" className="relative w-full max-w-[369px] overflow-hidden transition-all duration-500 ease-in-out hover:opacity-90">
            <img
              className="w-full object-contain"
              alt="Company Logo"
              src={image1}
            />
          </Link>
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-row items-start justify-start gap-8
             mq750:flex-wrap mq750:gap-6
             mq450:gap-4">
          {navigationLinks.map((link, index) => (
            <NavLink key={index} text={link.text} to={link.path} />
          ))}
        </div>
        
        {/* Social Icons */}
        <div className="flex-1 flex flex-row items-center justify-end gap-4
             mq1050:justify-start mq1050:flex-auto
            mq750:w-full mq750:justify-start">
          {socialLinks.map((social, index) => (
            <SocialIcon 
              key={index} 
              src={social.src} 
              alt={social.alt} 
              href={social.href} 
            />
          ))}
        </div>
      </div>
      
      {/* Additional Content Section */}
      <div className="self-stretch flex flex-row flex-wrap justify-between gap-8 text-whitesmoke text-opacity-90
          mq750:flex-col mq750:gap-10">
        <div className="flex flex-col gap-4 max-w-xs">
          <h3 className="font-semibold text-base">Our Mission</h3>
          <p className="text-sm leading-relaxed text-whitesmoke text-opacity-80">
          We connect ambitious individuals with world-class opportunities through our study abroad programs and virtual assistance platforms, empowering the next generation of global leaders to thrive in an interconnected world.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-base">Contact Details</h3>
          <div className="text-sm leading-relaxed text-whitesmoke text-opacity-80">
            <p>123 Education Avenue</p>
            <p>Global City, 10001</p>
            <Link to="/contact" className="block hover:text-white transition-all duration-300 ease-in-out mt-2">
              hello@studyabroad.com
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-base">Newsletter</h3>
          <div className="flex flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white bg-opacity-10 px-3 py-2 rounded-md text-sm focus:outline-none focus:bg-opacity-20 transition-all duration-300 ease-in-out" 
            />
            <button className="bg-white text-darkslateblue px-4 py-2 rounded-md text-sm font-semibold hover:bg-opacity-90 transition-all duration-300 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom Section with Copyright and Policy Links */}
      <div className="self-stretch flex flex-col items-center justify-start gap-8 mq450:gap-6">
        <div className="self-stretch relative border-whitesmoke border-opacity-20 border-solid border-t-[1px] box-border h-px" />
        <div className="flex flex-row items-center justify-between w-full gap-6 flex-wrap
            mq450:gap-4 mq450:justify-center">
          <div className="relative leading-[150%] text-whitesmoke text-opacity-70">
            © 2025 Relume. All rights reserved.
          </div>
          <div className="flex flex-row items-center gap-6 mq450:gap-4">
            {legalLinks.map((link, index) => (
              <LegalLink key={index} text={link.text} to={link.path} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  image1: PropTypes.string,
};

export default Footer;