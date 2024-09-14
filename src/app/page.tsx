import React from "react";
import Image from "next/image";
import Topbar from "./components/topbar";
import DoodleSwitcher from "./components/doodle-switcher";
import LatticeCard from "./components/lattice-card";

export default function Home() {
  const latticeNodes = [
    {
      nodeName: "Socratica",
      nodeCity: "Waterloo",
      nodeCountry: "CAN",
      imageURL: "https://zkp2p.xyz/logo512.png",
    },
    {
      nodeName: "Atelier",
      nodeCity: "Vancouver",
      nodeCountry: "CAN",
      imageURL: "https://zkp2p.xyz/logo512.png",
    },
    {
      nodeName: "Soto",
      nodeCity: "Toronto",
      nodeCountry: "CAN",
      imageURL: "https://zkp2p.xyz/logo512.png",
    },
    {
      nodeName: "Sundays",
      nodeCity: "Los Angeles",
      nodeCountry: "CAN",
      imageURL: "https://zkp2p.xyz/logo512.png",
    },
    {
      nodeName: "Socratica",
      nodeCity: "waterloo",
      nodeCountry: "CAN",
      imageURL: "https://zkp2p.xyz/logo512.png",
    },
    {
      nodeName: "Socratica",
      nodeCity: "waterloo",
      nodeCountry: "CAN",
      imageURL: "https://zkp2p.xyz/logo512.png",
    },
  ];

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
          <p className="text-lg font-inter-variable tracking-tight leading-none">
            We are multidisciplinary in our crafts, and a safe space for our
            shared love of making things*.
          </p>
          <p className="mt-10 text-lg text-soft-grey">
            <i>*whatever your thing may be.</i>
          </p>
        </div>
      </div>

      <div className="mt-8 flex">
        <a className="bg-black text-white rounded-full flex items-center px-6 py-3 uppercase font-dm-mono">
          <Image
            src="/images/right-arrow.svg"
            alt="Right Arrow"
            width={12}
            height={12}
            className="mr-2"
          />
          Join a Session
        </a>
      </div>

      <div className="mt-16 flex flex-row">
        <div className="w-1/2">
          <Image
            src="/images/symposium-w24.svg"
            alt="Symposium Winter 2024"
            width={670}
            height={670}
          />
        </div>
        <div className="w-1/2 flex flex-col">
          <div className="flex flex-row pl-4 space-x-4">
            <div className="w-1/2">
              <Image
                src="/images/socratica-s24.svg"
                alt="Socratica Summer 2024"
                width={325}
                height={478}
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/images/kickoff-f23.svg"
                alt="Kickoff Fall 2023"
                width={325}
                height={478}
              />
            </div>
          </div>
          <div className="mt-12 px-4 text-2xl pr-8">
            <p className="font-inter-variable tracking-tight leading-none">
              Great creative work is historically done together, across
              backgrounds and disciplines, in small, high trust groups.
            </p>
            <p className="mt-10 font-inter-variable tracking-tight leading-none">
              This is the foundation of boundary pushing work - in engineering, science,
              art, and more.
            </p>
          </div>
        </div>
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

      {/* START: LANDING PAGE LATTICE SECTION */}
      <div className="h-[fit] bg-[url('../../public/images/left-side-lines.svg')] bg-fill bg-center border-t border-t-[1px] border-t-[#A09D98]">
        <p className="text-[#A09D98] mt-[10px] font-dm-mono">
          HERE, THERE, EVERYWHERE
        </p>
        <div>
          <div className="font-dm-mono text-lg text-center leading-[1] pb-[30px] mx-auto mt-[90px] flex flex-col items-center">
            <Image
              src="/images/logo.svg"
              alt="Asterism"
              width={44}
              height={42}
            />
            <p className="mt-[15px]">LATTICE</p>
          </div>
          <h1 className="font-tiempos text-6xl text-center leading-[1] tracking-[-2.5px]">
            Independently-run nodes around the{" "}
            <span>
              <br></br>
            </span>{" "}
            <span className="italic">world</span> that run sessions of their
            own.
          </h1>
        </div>
        <div className="flex flex-row mx-auto justify-center gap-[10%] py-[50px]">
          <p>
            <span className="text-[#A09D98]">
              We’re based in Waterloo, but{" "}
            </span>
            our friends of{" "}
            <span>
              <br></br>
            </span>{" "}
            Socratica{" "}
            <span className="text-[#A09D98]">
              exist all over the world as part of the
            </span>{" "}
            <span>
              <br></br>
            </span>
            Socratica Lattice.
          </p>
          <button className="font-dm-mono flex flex-row self-center gap-[8px] uppercase border-[1px] border-[#CFCCC4] border-solid px-[25px] py-[10px] rounded-[95px]">
            <Image src="/images/globe.svg" alt="Globe" width={24} height={24} />
            Visit the lattice
          </button>
        </div>

        <div className="relative pb-[80px]">
          {/* Outer wrapper for horizontal scrolling */}
          <div className="flex overflow-x-auto space-x-9 py-4 hide-scroll-bar">
            {/* Map through your card data */}
            <div className="min-w-[250px] h-[100%]"></div>
            {latticeNodes.map((node, index) => (
              // blank div for space at start of card list
              <div key={index} className="flex-shrink-0 min-w-[200px]">
                <LatticeCard
                  imageURL={node.imageURL}
                  nodeName={node.nodeName}
                  nodeCity={node.nodeCity}
                  nodeCountry={node.nodeCountry}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* END: LANDING PAGE LATTICE SECTION */}
    </div>
  );
}
