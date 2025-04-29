import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import PropTypes from "prop-types";

const Navbar = ({ className = "" }) => {
  // Set the logo to logomain.png from the public folder
  const logoImage = "/logomain.png"; // This path refers to the public folder
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Handle scroll effect and window resize
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close menu if screen gets larger
      if (window.innerWidth > 1200 && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  // Responsive breakpoints
  const isMobile = windowWidth <= 450;
  const isTablet = windowWidth > 450 && windowWidth <= 750;
  const isDesktop = windowWidth > 1200;

  return (
    <div className="w-full overflow-hidden">
      {/* Full-width background container */}
      <div className={`w-full bg-gradient-to-r from-blue-100 to-indigo-100
        ${scrolled ? 'shadow-lg' : 'shadow-sm'} 
        transition-all duration-300`}>

        {/* Content container with max-width */}
        <header
          className={`w-full mx-auto
          py-4 flex flex-row items-center justify-between text-left text-base 
          text-gray-800 font-text-tiny-normal
          ${isDesktop ? 'max-w-[1200px]' : 'w-full'} 
          ${isDesktop ? 'px-6' : isTablet ? 'px-6' : 'px-4'} ${className}`}
        >
          {/* Logo - adjusted to ensure it doesn't cause overflow */}
          <Link to="/" className="flex items-center z-10 shrink-0 transition-transform duration-300 hover:scale-105">
            <img
              className={`relative object-cover ${
                isDesktop ? 'w-[150px]' : isTablet ? 'w-[130px]' : 'w-[100px]'
              }`}
              loading="lazy"
              alt="Belyot Logo"
              src={logoImage}
            />
          </Link>

          {/* Hamburger Menu Button - moved to the left with right margin */}
          {!isDesktop && (
            <button 
              className="flex flex-col justify-center items-center p-2 focus:outline-none bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md z-50 w-10 h-10 shrink-0 transition-all duration-300 mr-2" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : 'mb-1.5'}`}></div>
              <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1.5'}`}></div>
              <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
            </button>
          )}

          {/* Desktop Navigation (only on desktop screens) */}
          {isDesktop && (
            <nav className="flex flex-row items-center justify-end overflow-x-auto">
              <div className="flex flex-row items-center justify-end gap-6 lg:gap-8">
                <Link to="/" className="flex items-center justify-center whitespace-nowrap transition-all duration-300 no-underline border-b-2 border-transparent hover:border-blue-500 px-1 hover:text-blue-600">
                  <div className="relative leading-[150%] font-medium text-base md:text-lg">Home</div>
                </Link>
                <Link to="/study-abroad" className="flex items-center justify-center whitespace-nowrap transition-all duration-300 no-underline border-b-2 border-transparent hover:border-blue-500 px-1 hover:text-blue-600">
                  <div className="relative leading-[150%] font-medium text-base md:text-lg">Study Abroad</div>
                </Link>
                <Link to="/virtual-assistants" className="flex items-center justify-center whitespace-nowrap transition-all duration-300 no-underline border-b-2 border-transparent hover:border-blue-500 px-1 hover:text-blue-600">
                  <div className="relative leading-[150%] font-medium text-base md:text-lg">Virtual Assistance</div>
                </Link>
                <Link to="/contact" className="flex items-center justify-center whitespace-nowrap transition-all duration-300 no-underline border-b-2 border-transparent hover:border-blue-500 px-1 hover:text-blue-600">
                  <div className="relative leading-[150%] font-medium text-base md:text-lg">Contact Us</div>
                </Link>

                <Button
                  alternate={false}
                  iconPosition="No icon"
                  small
                  style="Primary"
                  button="Get Started"
                  className="shadow-md hover:shadow-lg transition-all duration-300 ml-1 shrink-0 transform hover:scale-105"
                />
              </div>
            </nav>
          )}

          {/* Mobile Navigation (Slide-in Menu) */}
          <div 
            className={`fixed top-0 right-0 h-full bg-gradient-to-br from-indigo-100 via-blue-50 to-white shadow-xl z-40 transform transition-all duration-500 ease-in-out overflow-y-auto overflow-x-hidden
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            style={{ 
              width: isMobile ? '100%' : '80%',
              maxWidth: isMobile ? '100%' : '350px'
            }}
          >
            {/* Menu Header - Now with only the hamburger button as close mechanism */}
            <div className="w-full bg-blue-500 text-white p-6 flex items-center justify-between">
              {/* Logo in menu - with white background */}
              <Link to="/" className="flex items-center bg-white rounded-lg p-1" onClick={toggleMenu}>
                <img
                  className="h-8 w-auto object-contain"
                  loading="lazy"
                  alt="Belyot Logo"
                  src={logoImage}
                />
              </Link>
              
              {/* Same hamburger button as toggle/close - now transforms to X when open */}
              <button 
                className="flex flex-col justify-center items-center p-2 focus:outline-none bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md w-10 h-10 shrink-0 transition-all duration-300" 
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <div className="w-5 h-0.5 bg-white transition-all duration-300 transform rotate-45 translate-y-1"></div>
                <div className="w-5 h-0.5 bg-white transition-all duration-300 opacity-0"></div>
                <div className="w-5 h-0.5 bg-white transition-all duration-300 transform -rotate-45 -translate-y-1"></div>
              </button>
            </div>
            
            {/* Mobile Menu Links */}
            <div className="flex flex-col items-start w-full p-6">
              <h2 className="text-lg font-bold text-blue-600 mb-4">Navigation</h2>
              
              {[
                { to: "/", text: "Home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                { to: "/study-abroad", text: "Study Abroad", icon: "M3 21v-4m0 0V5a2 2 0 012-2h6.5L21 11.5V17a2 2 0 01-2 2h-5.5" },
                { to: "/virtual-assistants", text: "Virtual Assistance", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                { to: "/contact", text: "Contact Us", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
              ].map((link, index) => (
                <Link 
                  key={index}
                  to={link.to} 
                  className={`w-full py-4 px-4 my-1 rounded-lg transition-all duration-300 no-underline flex items-center text-gray-800 hover:bg-blue-50 hover:shadow-md
                  ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} 
                  style={{ transitionDelay: `${150 + (index * 75)}ms` }}
                  onClick={toggleMenu}
                >
                  {/* Icon */}
                  <div className="mr-3 bg-blue-100 rounded-full p-2 text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                    </svg>
                  </div>
                  {/* Text */}
                  <div className="font-medium text-lg">
                    {link.text}
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex flex-col w-full px-6 mt-4">
              <div className="border-t border-gray-200 w-full pt-6 mb-4"></div>
              <Button
                alternate={false}
                iconPosition="No icon"
                small={false}
                style="Primary"
                button="Get Started"
                className={`w-full shadow-md py-4 text-lg font-bold transition-all transform hover:shadow-lg hover:scale-105 duration-300
                  ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: "600ms" }}
                onClick={toggleMenu}
              />
            </div>
          </div>

          {/* Overlay when mobile menu is open */}
          {isMenuOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-60 z-30 transition-opacity duration-300 backdrop-blur-sm"
              onClick={toggleMenu}
            ></div>
          )}
        </header>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string
};

export default Navbar;