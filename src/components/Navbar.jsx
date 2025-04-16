import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import PropTypes from "prop-types";

const Navbar = ({ className = "", image1 }) => {
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
      <div className={`w-full bg-gradient-to-r from-blue-50 to-indigo-50 
        ${scrolled ? 'shadow-md' : 'shadow-sm'} 
        transition-all duration-300`}>

        {/* Content container with max-width */}
        <header
          className={`w-full mx-auto
          py-4 flex flex-row items-center justify-between text-left text-base 
          text-color-scheme-1-text font-text-tiny-normal
          ${isDesktop ? 'max-w-[1200px]' : 'w-full'} 
          ${isDesktop ? 'px-6' : isTablet ? 'px-6' : 'px-4'} ${className}`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center z-10 shrink-0">
            <img
              className={`relative object-cover ${
                isDesktop ? 'w-[150px]' : isTablet ? 'w-[130px]' : 'w-[110px]'
              }`}
              loading="lazy"
              alt="Logo"
              src={image1}
            />
          </Link>

          {/* Hamburger Menu Button (only on non-desktop screens) */}
          {!isDesktop && (
            <div className="flex items-center justify-center">
              <button 
                className="flex flex-col justify-center items-center p-2 focus:outline-none bg-white rounded-md shadow-sm hover:bg-gray-50 transition-all duration-300 z-50 w-10 h-10 mq450:w-9 mq450:h-9 shrink-0" 
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <div className={`w-5 h-0.5 bg-blue-600 transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : 'mb-1'}`}></div>
                <div className={`w-5 h-0.5 bg-blue-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1'}`}></div>
                <div className={`w-5 h-0.5 bg-blue-600 transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
              </button>
            </div>
          )}

          {/* Desktop Navigation (only on desktop screens) */}
          {isDesktop && (
            <nav className="flex flex-row items-center justify-end overflow-x-auto">
              <div className="flex flex-row items-center justify-end gap-3 md:gap-4 lg:gap-6">
                <Link to="/" className="flex items-center justify-center whitespace-nowrap transition-colors duration-300 hover:text-blue-600 hover:scale-105 no-underline border-none px-1">
                  <div className="relative leading-[150%] font-medium border-none text-sm md:text-base">Home</div>
                </Link>
                <Link to="/study-abroad" className="flex items-center justify-center whitespace-nowrap transition-colors duration-300 hover:text-blue-600 hover:scale-105 no-underline border-none px-1">
                  <div className="relative leading-[150%] font-medium border-none text-sm md:text-base">Study Abroad</div>
                </Link>
                <Link to="/virtual-assistants" className="flex items-center justify-center whitespace-nowrap transition-colors duration-300 hover:text-blue-600 hover:scale-105 no-underline border-none px-1">
                  <div className="relative leading-[150%] font-medium border-none text-sm md:text-base">Virtual Assistance</div>
                </Link>
                <Link to="/contact" className="flex items-center justify-center whitespace-nowrap transition-colors duration-300 hover:text-blue-600 hover:scale-105 no-underline border-none px-1">
                  <div className="relative leading-[150%] font-medium border-none text-sm md:text-base">Contact Us</div>
                </Link>

                <Button
                  alternate={false}
                  iconPosition="No icon"
                  small
                  style="Primary"
                  button="Get Started"
                  className="shadow-md hover:shadow-lg transition-shadow duration-300 ml-1 shrink-0"
                />
              </div>
            </nav>
          )}

          {/* Mobile Navigation (Slide-in Menu) */}
          <div 
            className={`fixed top-0 right-0 h-full bg-gradient-to-b from-blue-50 to-indigo-50 shadow-lg z-40 transform transition-all duration-500 ease-in-out overflow-y-auto overflow-x-hidden
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            style={{ 
              width: isMobile ? '100%' : '75%',
              maxWidth: isMobile ? '100%' : '300px'
            }}
          >
            {/* Menu Header Space for Logo/Close */}
            <div className="w-full h-16 flex items-center justify-between px-4 pt-4">
              {/* Optional: Add a close button if desired
              <button 
                className="p-2 focus:outline-none rounded-full hover:bg-white/50" 
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              */}
            </div>
            
            {/* Mobile Menu Links with animations */}
            <div className="flex flex-col items-start w-full px-4 pt-8">
              {[
                { to: "/", text: "Home" },
                { to: "/study-abroad", text: "Study Abroad" },
                { to: "/virtual-assistants", text: "Virtual Assistance" },
                { to: "/contact", text: "Contact Us" }
              ].map((link, index) => (
                <Link 
                  key={index}
                  to={link.to} 
                  className={`w-full py-3 px-3 my-1 rounded-lg transition-all duration-300 hover:bg-white hover:text-blue-600 no-underline border-none transform text-gray-800
                  ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} 
                  style={{ transitionDelay: `${150 + (index * 75)}ms` }}
                  onClick={toggleMenu}
                >
                  <div className="font-medium text-sm">
                    {link.text}
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex flex-col w-full px-4 mt-6">
              <Button
                alternate={false}
                iconPosition="No icon"
                small={true}
                style="Primary"
                button="Get Started"
                className={`w-full shadow-md py-2.5 transform transition-all duration-300 ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: "600ms" }}
                onClick={toggleMenu}
              />
            </div>
          </div>

          {/* Overlay when mobile menu is open */}
          {isMenuOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300"
              onClick={toggleMenu}
            ></div>
          )}
        </header>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  image1: PropTypes.string.isRequired,
};

export default Navbar;