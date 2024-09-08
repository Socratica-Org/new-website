import React from "react";
import Topbar from "./components/topbar";
import DoodleSwitcher from "./components/doodle-switcher";

export default function Home() {
  return (
    <div className="bg-primary min-h-screen min-w-full flex flex-col px-10">
      <Topbar />
      <div className="flex flex-col justify-center mt-8">
        <DoodleSwitcher />
        <video
          src="/landing-video.mov"
          autoPlay
          loop
          muted
          className="mt-4 rounded-2xl"
        />
      </div>

      <div className="mt-8 flex">
        <div className="w-3/5">
          <p className="font-tiempos text-5xl leading-none">
            Socratica is an open collective of makers, artists, founders,
            researchers, designers, and everything <i>in-between</i>.
          </p>
        </div>
        <div className="w-[15%]" />
        <div className="w-1/4">
          <p className="text-lg">We are multidisciplinary in our crafts, and a safe space for our shared love of making things*.</p>
          <p className="mt-10 text-lg text-soft-grey">*whatever your thing may be.</p>
        </div>
      </div>

      <div className="mt-8">
        <a className="bg-black text-white rounded-full flex items-center px-6 py-3 uppercase font-dm-mono">
          <img
            src="/images/right-arrow.svg"
            className="mr-2"
          />
          Join a Session
        </a>
      </div>

      <div className="relative pb-28">
        {/* <div className="mt-24 pl-10 max-w-[25vw]">
          <p className="font-untitled font-light text-xl leading-snug">
            Socratica is an open collective of makers, artists, founders,
            researchers, designers, and everything in-between.
          </p>
        </div> */}

        {/* <img
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
        /> */}
      </div>

      <div className="mt-32 mx-auto max-w-[75%]">
        {/* <p className="font-tiempos text-6xl text-center leading-[1]">
          We host weekly coworking sessions for you to get started on that thing
          you’ve been putting off.
        </p> */}
      </div>
    </div>
  );
}
