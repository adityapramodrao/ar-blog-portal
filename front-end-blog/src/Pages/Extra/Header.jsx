import React, { useState, useEffect } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Change threshold if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 start-0 z-20 w-full border-b border-gray-200 dark:border-gray-600 transition-colors duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md dark:bg-gray-900/80"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="max-w-screen-xl flex flex-row items-center justify-center text-center mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="text-2xl whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <p
          className="text-gray-600 ml-8 dark:text-gray-300"
          style={{ fontFamily: "cursive" }}
        >
          Thoughts and images from our amazing planet.
        </p>
      </div>
    </nav>
  );
};

export default Header;
