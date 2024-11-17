"use client";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { isMobile } from "react-device-detect";
import Image from "next/image";
import Topbar from "./components/topbar";
import MobileNavbar from "./components/mobile-navbar";
import DoodleSwitcher from "./components/doodle-switcher";
import LatticeCard from "./components/lattice-card";
import Mascots from "./components/mascots";
import { locations } from "./map/locations";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLogoFixed, setIsLogoFixed] = useState(false);
  const [isJoinHovered, setIsJoinHovered] = useState(false);

  const firstAsterismRef = useRef<HTMLDivElement>(null);
  const secondAsterismRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const latticeSection = document.getElementById("lattice-section");
      if (latticeSection) {
        const rect = latticeSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const visibleHeight =
          Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const visiblePercentage = (visibleHeight / viewportHeight) * 100;

        setIsDarkMode(visiblePercentage >= 20);
      }

      const firstAsterism = firstAsterismRef.current;
      const secondAsterism = secondAsterismRef.current;

      if (firstAsterism && secondAsterism) {
        const firstRect = firstAsterism.getBoundingClientRect();
        const secondRect = secondAsterism.getBoundingClientRect();

        const hasPassedFirst = firstRect.top <= 50;
        const hasPassedSecond = secondRect.top <= 50;

        if (hasPassedFirst && !hasPassedSecond) {
          setIsLogoFixed(true);
        } else {
          setIsLogoFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`transition-colors duration-500 ${
        isDarkMode ? "bg-off-black" : "bg-primary"
      } min-h-screen min-w-full flex flex-col px-4 md:px-10`}
    >
      {!isMobile && <Topbar isDarkMode={isDarkMode} isHeaderVisible={true} />}
      {isMobile && (
        <div className="flex justify-between items-center py-4">
          <DoodleSwitcher />
          <MobileNavbar />
        </div>
      )}

      <div className="flex flex-col justify-center mt-16 md:mt-8">
        {!isMobile && <DoodleSwitcher />}
        {/* <DoodleSwitcher /> */}
        <Suspense fallback={"Loading video"}>
          <video
            poster="data:image/webp;base64,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"
            preload="metadata"
            autoPlay
            loop
            muted
            playsInline
            // controls
            controlsList="nofullscreen"
            className="mt-0 md:mt-4 rounded-2xl"
            style={{
              objectFit: "cover",
              aspectRatio: isMobile ? "7/8" : "16/9",
            }}
          >
            {/* <source src="/landing-video.mov" type="video/mp4" /> */}
            <source src="/videos/landing-video.webm" type="video/webm" />
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
              className="bg-black text-white rounded-full flex items-center px-6 py-3 hover:bg-grey hover:text-black transition-colors duration-300 ease-in-out uppercase font-dm-mono"
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
              Attend a Session
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
        <div className="mt-16 flex flex-row space-x-6">
          <div className="w-1/2">
            <Image
              src="/images/symposium-w24.svg"
              alt="Symposium Winter 2024"
              width={670}
              height={670}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,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"
              className="rounded-3xl w-full"
            />
          </div>
          <div className="w-1/2 flex flex-col">
            <div className="flex flex-row space-x-6">
              <div className="w-1/2">
                <Image
                  src="/images/socratica-s24.svg"
                  alt="Socratica Summer 2024"
                  width={325}
                  height={478}
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,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"
                  className="rounded-3xl w-full"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="/images/kickoff-f23.svg"
                  alt="Kickoff Fall 2023"
                  width={325}
                  height={478}
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,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"
                  className="rounded-3xl w-full"
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
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRlwGAABXRUJQVlA4WAoAAAAgAAAAXgIAXwIASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggbgQAAPBmAJ0BKl8CYAI+7XayVqmnJCOgCIkwHYlpbuFnSVSv5DnoeqDz+CAz/6f6beX4AJ9XiFOhDdMMx96XG49LjfU1ATK3OC0kMwmYTMJZGOamgQKyAnGX/INXnJdgatDDMJmFPKHP8SI7/GQjjMXndHJlI09XgFTi6q/Uzkc0Ir1U9Jloe0RLbT4BqQ1qzfAgWXHBFu0H4/H4pADrtPO4uX7FFUjVbUOwFMeAEEpGGUbZbtuPT+0ucC5nySsYr04uODEEo+SVVPtF48CyARj8dORJq5nDZe0H9Vut6qSt23HtFgGYadwGMC5nyODj0tT5FGXbcewHu445uL9Z5jqCyAabJ1AGjl3imUKBrtuQGXvj8fjwLIBi5fZEJx1RWuZL0Afj8fj8UgCCUiYMqCyARjnKqOQYoZoUPzbtuPaLx8PpFSNZfUFkAxfrVLowDk0BN+w2A+SRrPkacdtx7PTkgIndxaMlfXYgkdVDI6uay6dEu249npjqCyFvbpXolP2q6LtmdMVkzg3rcaQGluAxgWjmjfVAPe17NGPxQ7oIK5nyAid3AYwESV1mXXc+Oq3bYrfU31PkdSQndwGmfkq6mnpwvA3tdQocEZTtF4+/MdQZoXCZW5g82egncQ+31OMtOOpITu5ENGSvELeF5lbm5g63OcKa9npjsLAD+3QOyo9lx/boHZUfH9Tmq5v1qNfo9lx/boHZUey4/t0DxflbtuNLcOQeXiFxg8ytzfGxbngBA5wHCbqagJlbcLzK3NzB1u0H0QVtrueOsy8QqSAmVuYPMrlVb5f8vfS431NQAZyagJhS1ATjL/l/yY5NQEytuF5lbm5g624bC3CZfS0rrMvEAOgJlbcLzKJaShKRlQmTUBMrNICZW5g8ys0gKAu2qbZzFxvpz9zfU0bW+nP3OAC12HdTUBMoloCZW3C8ytzgtVWrcU6moCZRLQEytuF5lDgH7AUeZ3UyV4hbwvMrc3MHW5vqcWtCPmwrzK3NzB1ub6c/c3J8DFRzOX3h6sy8QqSAmVuYPMrMTFEPXqUM414hcbmDrc305+5uZSW/5h1oUZXWZeES1ATKzSAmFMfND5X5RMRbm+pcmN9TT0j6bAAA/vE/J3B63mhPZptk/BfoU9HcorcIgmyypv+6FbuFJsiT1rpdXpX5gOkOG4Dw5a+XkJ2QwV3rEtxi+fbA+aADqzjUQCVUEl6wHvUzxTW+GGoGE19t8NsKUo6m5sVxh0PReJrF6nppVuhcrf6HUm4p1fZjSwXMsraF4r58J6aq4UFqGkcnDh0RStnSu5CpbX4iwcZLAzcVGm84Ece9lcPnksxrqLDankoK8vxZuP9yCQ7uIHsGK/azyC1eEt8EWubkAl+sW8HhNcsb6iw2Un5e2BCg3LESBWAsU0fWmmD1HRv+BwPvZn6oXtS5J6b+Cuv4EfCcapQdZ4IPvHBLcgAAC1caCYgFMYaB5y5kgSOaTrgER3nlNgMTy5GAw4pbvyDJOGYA7bSsGBhLwBAAAA=="
            className="rounded-3xl"
          />
          <div className="flex flex-row space-x-4 mt-4">
            <div className="w-1/2">
              <Image
                src="/images/socratica-s24.svg"
                alt="Socratica Summer 2024"
                width={325}
                height={478}
                placeholder="blur"
                blurDataURL="data:image/webp;base64,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"
                className="rounded-3xl"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/images/kickoff-f23.svg"
                alt="Kickoff Fall 2023"
                width={325}
                height={478}
                placeholder="blur"
                blurDataURL="data:image/webp;base64,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"
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      )}

      <div className="my-24 mb-48 md:my-52 md:mb-64 flex flex-col justify-center items-center relative">
        <div ref={firstAsterismRef}>
          <Image
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
          <p
            className={`font-tiempos text-4xl ${isDarkMode ? "text-white" : ""}`}
          >
            We host co-working sessions for you to get started on that{" "}
            <i>thing</i> you&apos;ve been meaning to do.
          </p>

          <div className="flex justify-center mt-10">
            <a
              href="https://lu.ma/socratica"
              target="_blank"
              className="bg-black text-white rounded-full flex items-center px-6 py-3 hover:bg-grey hover:text-black transition-colors duration-300 ease-in-out uppercase font-dm-mono"
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
              Join Us
            </a>
          </div>
        </div>

        {/* <div className="flex flex-row">
        </div> */}
        <Mascots isDarkMode={isDarkMode} />
      </div>

      {/* START: LANDING PAGE LATTICE SECTION */}
      <div
        id="lattice-section"
        className="will-change-scroll h-[fit] bg-[url('../../public/images/left-side-lines.svg')] bg-fill bg-center border-t border-t-[1px] border-t-[#A09D98]"
      >
        <p className="text-[#A09D98] mt-[10px] font-dm-mono">
          HERE, THERE, EVERYWHERE
        </p>
        <div>
          <div className="font-dm-mono text-lg text-center leading-[1] pb-[30px] mx-auto mt-[90px] flex flex-col items-center">
            <Image
              ref={secondAsterismRef}
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
            className={`font-tiempos text-5xl md:text-6xl text-center leading-[1] tracking-[-1px]  md:tracking-[-2.5px] ${isDarkMode ? "text-white" : ""}`}
          >
            Independently-run nodes around the{" "}
            <span>
              <br className="hidden lg:inline"></br>
            </span>{" "}
            <span className="italic">world</span> that run sessions of their
            own.
          </h1>
        </div>
        <div className="flex flex-col md:flex-row mx-auto justify-center gap-[10%] py-[20px] sm:py-[35px] md:py-[50px]">
          <p
            className={`${isDarkMode ? "text-white" : ""} font-inter-variable leading-tight text-center md:text-left`}
          >
            <span className="text-[#A09D98]">
              We’re based in Waterloo, but{" "}
            </span>
            our friends of{" "}
            <span>
              <br className="hidden sm:inline"></br>
            </span>{" "}
            Socratica{" "}
            <span className="text-[#A09D98]">
              exist all over the world as part of the
            </span>{" "}
            <span>
              <br className="hidden sm:inline"></br>
            </span>
            <a href="/map" target="_blank" className="h:underline">
              Socratica Lattice.
            </a>
          </p>
          <a
            href="/map"
            target="_blank"
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
            {locations
              .filter((node) => node.imageSrc)
              .map((node, index) => (
                // blank div for space at start of card list
                <div key={index} className="flex-shrink-0 min-w-[200px]">
                  <LatticeCard
                    imageURL={node.imageSrc}
                    nodeName={node.name}
                    nodeCity={node.nodeCity}
                    nodeCountry={node.nodeCountry}
                    nodeId={node.id}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* END: LANDING PAGE LATTICE SECTION */}

      {/* <PlayProvider>
        <CanMoveElement>
          <div>
            <Image
              src="/images/mascots/light-blue.svg"
              alt="Light blue mascot"
              width={273}
              height={175}
              // className="absolute top-[-45%] left-[7%]"
            />
          </div>
        </CanMoveElement>
      </PlayProvider> */}
    </div>
  );
}
