"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { isMobile } from "react-device-detect";

const doodles = [
  {
    src: "/images/doodles/doodle1.svg",
    title: '"Little Guys", by Aileen Luo',
  },
  {
    src: "/images/doodles/doodle2.svg",
    title: '"Project Block"',
  },
  {
    src: "/images/doodles/doodle4.png",
    title: '"MS Paint", by HudZah',
  },
  {
    src: "/images/doodles/socratica-big.svg",
    title: "Big Socratica Doodle",
  },
];

const MobileContent = ({ switchDoodle, currentDoodle }: any) => {
  return (
    <div className="absolute top-2 left-2">
      <button
        onClick={switchDoodle}
        className="absolute inset-0 opacity-0 cursor-pointer"
        aria-label="Switch doodle"
      />

      <Image
        id="socraticaLogo"
        src={currentDoodle.src}
        alt={currentDoodle.title}
        width={200}
        height={200}
        quality={100}
        priority
      />
    </div>
  );
};

const DesktopContent = ({ switchDoodle, currentDoodle }: any) => {
  return (
    <div className="flex flex-col items-center relative -mb-24 md:mb-0 -mt-16 md:mt-0">
      <button
        onClick={switchDoodle}
        className="absolute inset-0 opacity-0 cursor-pointer"
        aria-label="Switch doodle"
      />

      <Image
        id="socraticaLogo"
        src={currentDoodle.src}
        alt={currentDoodle.title}
        className="h-[325px] w-auto object-contain"
        height={325}
        width={325}
        quality={100}
        priority
      />
    </div>
  );
};

export default function DoodleSwitcher() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(Math.floor(Math.random() * doodles.length));
  }, []);

  const switchDoodle = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % doodles.length);
  };

  const currentDoodle = doodles[currentIndex];

  return (
    <>
      {isMobile ? (
        <MobileContent
          switchDoodle={switchDoodle}
          currentDoodle={currentDoodle}
        />
      ) : (
        <DesktopContent
          switchDoodle={switchDoodle}
          currentDoodle={currentDoodle}
        />
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const userAgent = req.headers["user-agent"] || "";
  const isMobile = /mobile/i.test(userAgent);
  return { props: { isMobile } };
};
