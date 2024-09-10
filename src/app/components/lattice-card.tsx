import React from "react";
import Image from "next/image";

interface LatticeCardProps {
  imageURL: string;
  nodeName: string;
  nodeCity: string;
  nodeCountry: string;
}

const LatticeCard: React.FC<LatticeCardProps> = ({
  imageURL,
  nodeName,
  nodeCity,
  nodeCountry,
}) => {
  return (
    <div
      className="relative h-[320px] w-[230px] border border-gray-300 shadow-lg rounded-lg overflow-hidden cursor-pointer"
      style={{
        backgroundImage: `radial-gradient(49.09% 75.09% at 98.95% 54.34%, rgba(251, 248, 239, 0.00) 0%, rgba(251, 248, 239, 0.72) 36.5%, rgba(0, 0, 0, 0.46) 100%), url(${imageURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Overlay Section */}
      <div className="absolute inset-0 bg-black bg-opacity-5 flex flex-col justify-between p-4">
        <div className="flex justify-between">
          <p className="text-white font-light">{nodeCountry}</p>
          <Image
            src="/images/white-logo.svg"
            alt="White Asterism"
            width={27}
            height={26}
          />
        </div>
        <div>
          <p className="text-sm text-[#FFF] opacity-65 font-medium">
            {nodeCity}
          </p>
          <p className="font-tiempos text-[#ffffff] text-2xl mt-[10px] tracking-[-0.64px] font-light">
            {nodeName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatticeCard;
