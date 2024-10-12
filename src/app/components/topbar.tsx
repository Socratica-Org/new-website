import React, { useState, useEffect } from "react";
import MobileNavbar from "./mobile-navbar";

export default function TopBar({
  isDarkMode,
  isHeaderVisible,
}: {
  isDarkMode: boolean;
  isHeaderVisible: boolean;
}) {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsAtTop(scrollPosition < 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const borderColor = isDarkMode ? "border-white" : "border-black";
  const textColor = isDarkMode ? "text-white" : "text-black";

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 flex justify-between items-center mt-12 px-4 z-10 ${textColor}`}
      >
        <div className="flex space-x-2">
          <a
            href="/"
            className={`font-dm-mono border ${borderColor} border-b-2 rounded-full px-4 py-2 hover:bg-orange transition-colors duration-500 ease-in-out`}
          >
            HOME
          </a>
          <a
            href="/about"
            className={`font-dm-mono border ${borderColor} border-b-2 rounded-full px-4 py-2 hover:bg-light-blue transition-colors duration-500 ease-in-out`}
          >
            ABOUT
          </a>
          <a
            href="/map"
            className={`font-dm-mono border ${borderColor} border-b-2 rounded-full px-4 py-2 hover:bg-pink transition-colors duration-500 ease-in-out`}
          >
            LATTICE
          </a>
        </div>

        {isHeaderVisible && isAtTop && (
          <h2
            className={`absolute left-1/2 transform -translate-x-1/2 text-2xl font-tiempos-light transition-opacity duration-300 ${textColor}`}
          >
            For the love of <i>making.</i>
          </h2>
        )}

        <div className="flex space-x-2">
          <a
            href="https://toolbox.socratica.info"
            target="_blank"
            className={`font-dm-mono border ${borderColor} border-b-2 rounded-full px-4 py-2 hover:bg-yellow transition-colors duration-500 ease-in-out`}
          >
            TOOLBOX
          </a>
          <a
            href="https://donate.stripe.com/5kA6qZcondXE8Te008"
            target="_blank"
            className={`font-dm-mono border ${borderColor} border-b-2 rounded-full px-4 py-2 flex items-center`}
          >
            <img
              src={
                isDarkMode
                  ? "images/right-arrow.svg"
                  : "images/black-right-arrow.svg"
              }
              className="mr-2"
              alt="Donate arrow"
            />
            <span>DONATE</span>
          </a>
          <a
            href="https://lu.ma/socratica"
            target="_blank"
            className={`font-dm-mono ${isDarkMode ? "bg-white text-black" : "bg-black text-white"} border ${borderColor} border-b-2 rounded-full px-4 py-2 flex items-center`}
          >
            <img
              src={
                isDarkMode
                  ? "images/black-right-arrow.svg"
                  : "images/right-arrow.svg"
              }
              className="mr-2"
              alt="Join arrow"
            />
            <span>JOIN</span>
          </a>
        </div>
      </div>

      {/* Spacer div to push content below the fixed header */}
      <div className="h-32"></div>

      {/* <div>
        <MobileNavbar />
      </div> */}
    </>
  );
}
