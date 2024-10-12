import React from "react";
import Image from "next/image";
import Globe from "../../../public/images/white-globe.svg";
import InstagramLogo from "../../../public/images/instagram-logo.svg";
import TwitterLogo from "../../../public/images/twitter-logo.svg";
import YoutubeLogo from "../../../public/images/youtube-logo.svg";
import ArrowUpRight from "../../../public/images/black-right-arrow.svg";
import CircleWavyCheck from "../../../public/images/CircleWavyCheck.svg";

interface NodeProps {
  id: string;
  name: string;
  date: string;
  location: string;
  lumaLink: string;
  joinLink: string;
  websiteLink: string;
  instagramLink: string;
  twitterLink: string;
  youtubeLink: string;
  imageSrc?: string;
}

export default function Node({
  id,
  name,
  date,
  location,
  lumaLink,
  joinLink,
  websiteLink,
  instagramLink,
  twitterLink,
  youtubeLink,
  imageSrc,
}: NodeProps) {
  return (
    <div id={id} className="flex flex-col">
      <div className="w-full text-left pl-2">
        <h1 className="text-3xl md:text-5xl text-white font-normal font-tiempos">
          {name}
        </h1>
        <div className="mb-4">
          <p className="font-sf-mono text-sm text-[#A09D98]">{location}</p>
        </div>
        <div className="flex items-center gap-2.5 mb-8">
          <a href={joinLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-primary py-2 px-4 rounded-full text-[#2A2928] text-sm font-mono border-2 border-primary flex items-center justify-center">
              <Image
                src={ArrowUpRight}
                alt="Join"
                width={12}
                height={12}
                className="mr-2"
              />
              JOIN
            </button>
          </a>
          {[
            {
              link: websiteLink,
              icon: Globe,
              alt: "Website",
              borderColor: "border-white",
            },
            {
              link: instagramLink,
              icon: InstagramLogo,
              alt: "Instagram",
              borderColor: "border-[#bf6f9f]",
            },
            {
              link: twitterLink,
              icon: TwitterLogo,
              alt: "Twitter",
              borderColor: "border-[#649AEA]",
            },
            {
              link: youtubeLink,
              icon: YoutubeLogo,
              alt: "Youtube",
              borderColor: "border-[#d94221]",
            },
          ].map(({ link, icon, alt, borderColor }) => (
            <a
              key={alt}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex justify-center items-center w-[38px] h-[38px] p-[5px] border-2 ${borderColor} rounded-full overflow-hidden`}
            >
              <Image src={icon} alt={alt} className="w-4/5 h-auto" />
            </a>
          ))}
        </div>
      </div>

      {lumaLink ? (
        <iframe
          title={name}
          src={lumaLink}
          className="w-full md:w-[400px] h-[500px] rounded-lg mb-5 bg-[#F4F5F6] border-2 border-[#CFCCC4]"
          style={{ margin: "0 auto" }}
          aria-hidden="false"
        />
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt="socratica node preview"
          width={400}
          height={350}
          className="w-full md:w-[400px] h-[500px] rounded-lg mb-5 bg-[#F4F5F6] border-2 border-[#CFCCC4]"
          style={{ objectFit: "cover", margin: "0 auto" }}
        />
      ) : (
        <div></div>
      )}

      <div className="flex items-center mt-4 pl-2">
        <button className=" py-1 px-3 rounded-full text-xs md:text-sm text-white font-mono border-2 border-dashed border-[#CFCCC4] flex items-center">
          <Image
            src={CircleWavyCheck}
            alt="Date"
            width={24}
            height={24}
            className="mr-2"
          />
          {date}
        </button>
      </div>
    </div>
  );
}
