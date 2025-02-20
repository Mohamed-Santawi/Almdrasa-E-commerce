import { useState, useEffect } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Track scroll position to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        // Change 300 to the scroll threshold you prefer
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener to track scroll position
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    const header = document.getElementById("header"); // Change 'header' to your header's ID
    if (header) {
      header.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page if no header is found
    }
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 p-3 bg-black w-[50px] h-[50px] rounded-full  flex items-center justify-center "
      >
        <FaCircleArrowUp className="text-white" size={30} />
      </button>
    )
  );
};

export default ScrollToTopButton;
