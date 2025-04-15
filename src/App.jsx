import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import StudyAbroad from "./pages/StudyAbroad";
import ContactUs from "./pages/ContactUs"; // ✅ new
import VirtualAssistants from "./pages/VirtualAssistants"; // ✅ new

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home | Your Site Name";
        metaDescription = "Welcome to our homepage.";
        break;
      case "/study-abroad":
        title = "Study Abroad | Your Site Name";
        metaDescription = "Explore opportunities to study abroad.";
        break;
      case "/contact":
        title = "Contact Us | Your Site Name";
        metaDescription = "Get in touch with us for inquiries.";
        break;
      case "/virtual-assistants":
        title = "Virtual Assistants | Your Site Name";
        metaDescription = "Hire or become a virtual assistant.";
        break;
      default:
        title = "Your Site Name";
        metaDescription = "Default description.";
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/study-abroad" element={<StudyAbroad />} />
      <Route path="/contact" element={<ContactUs />} /> {/* ✅ new route */}
      <Route path="/virtual-assistants" element={<VirtualAssistants />} /> {/* ✅ new route */}
    </Routes>
  );
}

export default App;

