import React from "react";
import Topbar from "./components/topbar";
import DoodleSwitcher from "./components/doodle-switcher";

export default function Home() {
  return (
    <div className="bg-primary min-h-screen min-w-full flex flex-col">
      <Topbar />
      <div className="container mx-auto max-w-screen-xl px-6 -mt-8">
        <DoodleSwitcher />
      </div>

      <div className="relative pb-28">
        <div className="mt-24 pl-10 max-w-[25vw]">
          <p className="font-untitled font-light text-xl leading-snug">
            Socratica is an open collective of makers, artists, founders,
            researchers, designers, and everything in-between.
          </p>
        </div>

        <img
          src="images/mascots/orange.svg"
          alt="Orange Mascot"
          className="absolute top-0 right-[10%]"
        />
        <img
          src="images/mascots/gray.svg"
          alt="Gray Mascot"
          className="absolute top-[80%] right-[15%]"
        />
        <img
          src="images/mascots/green.svg"
          alt="Green Mascot"
          className="absolute top-[30%] right-[40%]"
        />
        <img
          src="images/mascots/blue.svg"
          alt="Blue Mascot"
          className="absolute top-[75%] right-[72%]"
        />
      </div>

      <div className="mt-32 mx-auto max-w-[75%]">
        <p className="font-tiempos text-6xl text-center leading-[1]">
          We host weekly coworking sessions for you to get started on that thing
          you’ve been putting off.
        </p>
      </div>
    </div>
  );
}
