import React from "react";
import MobileNavbar from "./mobile-navbar";

export default function TopBar() {
  return (
    <div className="w-full flex justify-between items-center mt-12 px-4 relative">
      <div className="flex space-x-2">
        <a className="font-dm-mono border border-black border-b-2 rounded-full px-4 py-2 hover:bg-orange transition-colors duration-500 ease-in-ou">
          HOME
        </a>
        <a className="font-dm-mono border border-black border-b-2 rounded-full px-4 py-2 hover:bg-light-blue transition-colors duration-500 ease-in-ou">
          ABOUT
        </a>
        <a className="font-dm-mono border border-black border-b-2 rounded-full px-4 py-2 hover:bg-pink transition-colors duration-500 ease-in-ou">
          LATTICE
        </a>
      </div>

      <h2 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-tiempos-light">
        For the love of <i>making.</i>
      </h2>

      <div className="flex space-x-2">
        <a className="font-dm-mono border border-black border-b-2 rounded-full px-4 py-2 hover:bg-yellow transition-colors duration-500 ease-in-ou">
          TOOLBOX
        </a>
        <a className="font-dm-mono border border-black border-b-2 rounded-full px-4 py-2 flex items-center">
          <img src="images/black-right-arrow.svg" className="mr-2" />
          <span>DONATE</span>
        </a>
        <a className="font-dm-mono bg-black border border-black border-b-2 rounded-full px-4 py-2 flex items-center">
          <img src="images/right-arrow.svg" className="mr-2" />
          <span className="text-white">JOIN</span>
        </a>
      </div>

      {/* <div>
        <MobileNavbar />
      </div> */}
    </div>
  );
}
