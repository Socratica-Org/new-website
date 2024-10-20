"use client";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { isMobile } from "react-device-detect";
import Image from "next/image";
import Topbar from "./components/topbar";
import MobileNavbar from "./components/mobile-navbar";
import DoodleSwitcher from "./components/doodle-switcher";
import LatticeCard from "./components/lattice-card";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLogoFixed, setIsLogoFixed] = useState(false);
  const [isJoinHovered, setIsJoinHovered] = useState(false);
  const logoRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const latticeSection = document.getElementById("lattice-section");
      if (latticeSection) {
        const rect = latticeSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const visibleHeight =
          Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const visiblePercentage = (visibleHeight / viewportHeight) * 100;

        setIsDarkMode(visiblePercentage >= 48);
      }

      if (logoRef.current && triggerRef.current) {
        const triggerRect = (
          triggerRef.current as HTMLElement
        ).getBoundingClientRect();
        setIsLogoFixed(triggerRect.top <= 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div
      className={`transition-colors duration-1000 ${
        isDarkMode ? "bg-off-black" : "bg-primary"
      } min-h-screen min-w-full flex flex-col px-4 md:px-10`}
    >
      {!isMobile && <Topbar isDarkMode={isDarkMode} isHeaderVisible={true} />}
      {isMobile && (
        <div className="flex justify-between items-center py-4">
          {/* <Image
            src="images/doodles/socratica-big.svg"
            alt="Socratica"
            width={150}
            height={150}
          /> */}
          {isMobile && <DoodleSwitcher />}
          {/* <Image
            src="images/logo.svg"
            alt="Asterism"
            width={36}
            height={36}
          /> */}
          <MobileNavbar />
        </div>
      )}

      <div className="flex flex-col justify-center mt-16 md:mt-8">
        {!isMobile && <DoodleSwitcher />}
        {/* <DoodleSwitcher /> */}
        <Suspense fallback={"Loading video"}>
          <video
            autoPlay
            loop
            muted
            playsInline
            // controls
            controlsList="nofullscreen"
            className="mt-0 md:mt-4 rounded-2xl"
            style={{ objectFit: "cover", aspectRatio: "16/9" }}
          >
            <source src="/landing-video.mov" type="video/mp4" />
            Your broswer does not support the video tag.
          </video>
        </Suspense>
      </div>

      {!isMobile && (
        <div>
          <div className="mt-8 flex flex-col md:flex-row">
            <div className="w-full md:w-3/5">
              <p className="font-tiempos-light text-4xl md:text-5xl">
                Socratica is an open collective of makers, artists, founders,
                researchers, designers, and everything <i>in-between</i>.
              </p>
            </div>
            <div className="w-[12%]" />
            <div className="w-1/4">
              <p className="text-lg font-inter-variable tracking-tight">
                We are multidisciplinary in our crafts, and a safe space for our
                shared love of making things*.
              </p>
              <p className="mt-8 text-lg text-soft-grey">
                <i>*whatever your thing may be.</i>
              </p>
            </div>
          </div>

          <div className="mt-8 flex">
            <a
              href="https://lu.ma/socratica"
              target="_blank"
              className="bg-black text-white rounded-full flex items-center px-6 py-3 hover:bg-grey hover:text-black transition-colors duration-500 ease-in-out uppercase font-dm-mono"
              onMouseEnter={() => setIsJoinHovered(true)}
              onMouseLeave={() => setIsJoinHovered(false)}
            >
              <Image
                src={
                  isJoinHovered
                    ? "images/black-right-arrow.svg"
                    : "images/right-arrow.svg"
                }
                alt="Right Arrow"
                width={12}
                height={12}
                className="mr-2"
              />
              Join a Session
            </a>
          </div>
        </div>
      )}

      {isMobile && (
        <div>
          <div className="mt-8 flex flex-col">
            <p className="font-tiempos text-4xl leading-none">
              Socratica is an open collective of makers, artists, founders,
              researchers, designers, and everything <i>in-between</i>.
            </p>

            <div className="mt-4 flex">
              <a className="bg-black text-white text-md rounded-full flex items-center px-4 py-2 uppercase font-dm-mono">
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

            <p className="mt-8 text-xl font-inter-variable tracking-tight leading-none">
              We are multidisciplinary in our crafts, and a safe space for our
              shared love of making things*.
            </p>
            <p className="mt-4 text-lg text-soft-grey">
              <i>*whatever your thing may be.</i>
            </p>
          </div>
        </div>
      )}

      {!isMobile && (
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
            <div className="flex flex-row pl-2 space-x-4">
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
                This is the foundation of boundary pushing work - in
                engineering, science, art, and more.
              </p>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="flex flex-col mt-8">
          <Image
            src="/images/symposium-w24.svg"
            alt="Symposium Winter 2024"
            width={670}
            height={670}
          />
          <div className="flex flex-row space-x-4 mt-4">
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
        </div>
      )}

      <div className="my-24 mb-48 md:my-52 md:mb-96 flex flex-col justify-center items-center relative">
        {!isMobile && (
          <>
            <Image
              src="/images/mascots/light-blue.svg"
              alt="Light blue mascot"
              width={273}
              height={175}
              className="absolute top-[-45%] left-[7%]"
            />
            <Image
              src="/images/mascots/green.svg"
              alt="Green mascot"
              width={171}
              height={140}
              className="absolute top-[-45%] left-[31.5%]"
            />
            <Image
              src="/images/mascots/blue.svg"
              alt="Blue mascot"
              width={191}
              height={150}
              className="absolute top-[-45%] left-[56%]"
            />
            <Image
              src="/images/mascots/orange.svg"
              alt="Orange mascot"
              width={191}
              height={150}
              className="absolute top-[-45%] left-[78%]"
            />
            <Image
              src="/images/mascots/beige.svg"
              alt="Beige mascot"
              width={109}
              height={136}
              className="absolute top-[62%] left-[7%]"
            />
            <Image
              src={
                isDarkMode
                  ? "/images/mascots/yellow-darkmode.svg"
                  : "/images/mascots/yellow.svg"
              }
              alt="Yellow mascot"
              width={184}
              height={179}
              className="absolute top-[110%] left-[18%]"
            />
            <Image
              src={
                isDarkMode
                  ? "/images/mascots/purple-darkmode.svg"
                  : "/images/mascots/purple.svg"
              }
              alt="Purple mascot"
              width={167}
              height={140}
              className="absolute top-[140%] left-[43%]"
            />
            <Image
              src={
                isDarkMode
                  ? "/images/mascots/grey-darkmode.svg"
                  : "/images/mascots/grey.svg"
              }
              alt="Gray mascot"
              width={97}
              height={98}
              className="absolute top-[140%] left-[67%]"
            />
            <Image
              src="/images/mascots/pink.svg"
              alt="Pink mascot"
              width={129}
              height={123}
              className="absolute top-[57%] left-[86%]"
            />
          </>
        )}

        {isMobile && (
          <>
            <Image
              src="/images/mascots/light-blue.svg"
              alt="Light blue mascot"
              width={100}
              height={82}
              className="absolute top-[5%] left-[0%]"
            />
            <Image
              src="/images/mascots/green.svg"
              alt="Green mascot"
              width={100}
              height={82}
              className="absolute top-[-20%] left-[20%]"
            />
            <Image
              src="/images/mascots/blue.svg"
              alt="Blue mascot"
              width={100}
              height={82}
              className="absolute top-[-7%] left-[60%]"
            />
            <Image
              src="/images/mascots/orange.svg"
              alt="Orange mascot"
              width={90}
              height={75}
              className="absolute top-[0%] left-[82%]"
            />
            <Image
              src={
                isDarkMode
                  ? "/images/mascots/beige-darkmode.svg"
                  : "/images/mascots/beige.svg"
              }
              alt="Beige mascot"
              width={80}
              height={65}
              className="absolute top-[90%] left-[0%]"
            />
            <Image
              src={
                isDarkMode
                  ? "/images/mascots/yellow-darkmode.svg"
                  : "/images/mascots/yellow.svg"
              }
              alt="Yellow mascot"
              width={120}
              height={115}
              className="absolute top-[110%] left-[18%]"
            />
            <Image
              src={
                isDarkMode
                  ? "/images/mascots/purple-darkmode.svg"
                  : "/images/mascots/purple.svg"
              }
              alt="Purple mascot"
              width={90}
              height={81}
              className="absolute top-[100%] left-[50%]"
            />
            <Image
              src={
                isDarkMode
                  ? "/images/mascots/grey-darkmode.svg"
                  : "/images/mascots/grey.svg"
              }
              alt="Gray mascot"
              width={80}
              height={78}
              className="absolute top-[130%] left-[67%]"
            />
            <Image
              src={
                isDarkMode
                  ? "/images/mascots/pink-darkmode.svg"
                  : "/images/mascots/pink.svg"
              }
              alt="Pink mascot"
              width={95}
              height={92}
              className="absolute top-[90%] left-[80%]"
            />
          </>
        )}

        <div ref={triggerRef}>
          <Image
            ref={logoRef}
            src={isDarkMode ? "/images/white-logo.svg" : "/images/logo.svg"}
            alt="Asterism"
            width={42}
            height={42}
            className={`transition-transform duration-500 ease-in-out ${
              isLogoFixed
                ? "fixed top-12 left-1/2 transform -translate-x-1/2 z-50"
                : "absolute top-0 left-1/2 transform -translate-x-1/2"
            }`}
          />
        </div>

        <div className="mt-10 md:mt-20 w-full md:w-3/5 text-center">
          <p className="font-tiempos text-4xl">
            We host co-working sessions for you to get started on that{" "}
            <i>thing</i> you&apos;ve been meaning to do.
          </p>
        </div>
      </div>

      {/* START: LANDING PAGE LATTICE SECTION */}
      <div
        id="lattice-section"
        className="h-[fit] bg-[url('../../public/images/left-side-lines.svg')] bg-fill bg-center border-t border-t-[1px] border-t-[#A09D98]"
      >
        <p className="text-[#A09D98] mt-[10px] font-dm-mono">
          HERE, THERE, EVERYWHERE
        </p>
        <div>
          <div className="font-dm-mono text-lg text-center leading-[1] pb-[30px] mx-auto mt-[90px] flex flex-col items-center">
            <Image
              src={isDarkMode ? "/images/white-logo.svg" : "/images/logo.svg"}
              alt="Asterism"
              width={44}
              height={42}
            />
            <p className={`mt-[15px] ${isDarkMode ? "text-white" : ""}`}>
              LATTICE
            </p>
          </div>
          <h1
            className={`font-tiempos text-5xl md:text-6xl text-center leading-[1]tracking-[-1px]  md:tracking-[-2.5px] ${isDarkMode ? "text-white" : ""}`}
          >
            Independently-run nodes around the{" "}
            <span>
              <br></br>
            </span>{" "}
            <span className="italic">world</span> that run sessions of their
            own.
          </h1>
        </div>
        <div className="flex flex-col md:flex-row mx-auto justify-center gap-[10%] py-[50px]">
          <p
            className={`${isDarkMode ? "text-white" : ""} font-inter-variable leading-tight text-center md:text-left`}
          >
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
          <a
            className={`mt-4 md:mt-0 font-dm-mono flex flex-row self-center gap-[8px] uppercase border-[1px] border-[#CFCCC4] border-solid px-[25px] py-[10px] rounded-[95px] ${isDarkMode ? "text-white" : ""}`}
          >
            <Image
              src={isDarkMode ? "/images/white-globe.svg" : "/images/globe.svg"}
              alt="Globe"
              width={24}
              height={24}
            />
            Visit the lattice
          </a>
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
