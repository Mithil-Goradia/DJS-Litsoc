import React, { useState, useEffect } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { RxDoubleArrowDown } from "react-icons/rx";

function ScrollUpButton() {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`opacity-0 lg:opacity-100 sticky left-[calc(100%-5rem)] bottom-10 mb-10 cursor-pointer lg:bg-transparent text-white bg-opacity-50 rounded-full flex items-center justify-center h-12 w-12 ${!isScrolled ? "animate-bounce": "border-2 border-gray-200 bg-black"}`}
      onClick={scrollToTop}
    >
      {isScrolled ? <FaCaretUp size={30} /> : <RxDoubleArrowDown size={40} />}
    </button>
  );
}

export default ScrollUpButton;