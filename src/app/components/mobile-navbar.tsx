import { useState, useEffect } from "react";
import { X } from "lucide-react";
// import SocraticaWhite from "../public/images/SocraticaWhite.svg";
// import House from "../public/images/house.svg";
// import DarkHouse from "../public/images/dark-house.svg";
// import UsersThree from "../public/images/users-three.svg";
// import DarkUsersThree from "../public/images/dark-users-three.svg";
// import MapTrifold from "../public/images/map-trifold.svg";
// import DarkMapTrifold from "../public/images/dark-map-trifold.svg";
// import Eye from "../public/images/eye.svg";
// import DarkEye from "../public/images/dark-eye.svg";
// import Heart from "../public/images/heart-straight.svg";
// import DarkHeart from "../public/images/dark-heart-straight.svg";
// import Toolbox from "../public/images/toolbox.svg";
// import DarkToolbox from "../public/images/dark-toolbox.svg";
import Image from "next/image";

export default function MobileNavbar() {
  const [currentPath, setCurrentPath] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  const [hoverState, setHoverState] = useState({
    home: false,
    about: false,
    map: false,
    toolbox: false,
    getInvolved: false,
    donate: false,
  });

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  function toggleOverlay() {
    setShowOverlay(!showOverlay);
  }

  return (
    <div>
      <div className="absolute top-2 right-2 z-30">
        <button
          className="w-20 h-10 bg-black rounded-full flex flex-col justify-center items-center"
          onClick={toggleOverlay}
        >
          {/* <div className="w-3 h-0.5 bg-white mb-1" />
          <div className="w-3 h-0.5 bg-white" /> */}
        </button>
      </div>

      {showOverlay &&
        <div className="fixed inset-0 bg-black z-40">
          <button
            className="absolute top-4 right-4 text-white text-2xl leading-none"
            onClick={toggleOverlay}
          >
            <X size={24} />
          </button>
          <div
            className="absolute z-50 top-10 left-3"
          >
            {/* <img src={SocraticaWhite} alt="Socratica" /> */}
            <Image
              src="/images/SocraticaWhite.svg"
              alt="Socratica"
              width={325}
              height={300}
            />
          </div>
          <div
            className="absolute top-40 left-3 flex flex-col space-y-4 items-start z-40"
          >
            <a
              href="/"
              className="font-dm-mono text-white border border-white border-b-2 rounded-full px-4 py-2 hover:bg-orange transition-colors duration-500 ease-in-out"
            >
              HOME
            </a>
            <a
              href="/about"
              className="font-dm-mono text-white border border-white border-b-2 rounded-full px-4 py-2 hover:bg-light-blue transition-colors duration-500 ease-in-out"
            >
              ABOUT
            </a>
            <a
              href="/map"
              className="font-dm-mono text-white border border-white border-b-2 rounded-full px-4 py-2 hover:bg-pink transition-colors duration-500 ease-in-out"
            >
              LATTICE
            </a>
            <a
              href="https://toolbox.socratica.info"
              target="_blank"
              className="font-dm-mono text-white border border-white border-b-2 rounded-full px-4 py-2 hover:bg-yellow transition-colors duration-500 ease-in-out"
            >
              TOOLBOX
            </a>
            <a
              href="https://donate.stripe.com/5kA6qZcondXE8Te008"
              target="_blank"
              className="font-dm-mono text-white border border-white border-b-2 rounded-full flex px-4 py-2"
            >
              <Image
                src="images/right-arrow.svg"
                className="mr-2"
                alt="Right Arrow"
                width={12}
                height={12}
              />
              <span>DONATE</span>
            </a>
            <a
              href="https://lu.ma/socratica"
              target="_blank"
              className="font-dm-mono text-white border border-white border-b-2 rounded-full flex px-4 py-2"
            >
              <Image
                src="images/right-arrow.svg"
                className="mr-2"
                alt="Right Arrow"
                width={12}
                height={12}
              />
              <span>JOIN</span>
            </a>
          </div>
        </div>
      }
    </div>
  );
}
