import React, { useState, useEffect } from "react";
import MobileNavbar from "./mobile-navbar";

export default function TopBar() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsAtTop(scrollPosition < 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center mt-12 px-4 z-10">
        <div className="flex space-x-2">
          <a className="font-dm-mono border border-black border-b-2 rounded-full px-4 py-2 hover:bg-orange transition-colors duration-500 ease-in-out">
            HOME
          </a>
          <a className="font-dm-mono border border-black border-b-2 rounded-full px-4 py-2 hover:bg-light-blue transition-colors duration-500 ease-in-out">
            ABOUT
          </a>
          <a className="font-dm-mono border border-black border-b-2 rounded-full px-4 py-2 hover:bg-pink transition-colors duration-500 ease-in-out">
            LATTICE
          </a>
        </div>

        {isAtTop && (
          <h2 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-tiempos-light transition-opacity duration-300">
            For the love of <i>making.</i>
          </h2>
        )}

        <div className="flex space-x-2">
          <a className="font-dm-mono border border-black border-b-2 rounded-full px-4 py-2 hover:bg-yellow transition-colors duration-500 ease-in-out">
            TOOLBOX
          </a>
          <a className="font-dm-mono border border-black border-b-2 rounded-full px-4 py-2 flex items-center">
            <img src="images/black-right-arrow.svg" className="mr-2" alt="Donate arrow" />
            <span>DONATE</span>
          </a>
          <a className="font-dm-mono bg-black border border-black border-b-2 rounded-full px-4 py-2 flex items-center">
            <img src="images/right-arrow.svg" className="mr-2" alt="Join arrow" />
            <span className="text-white">JOIN</span>
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