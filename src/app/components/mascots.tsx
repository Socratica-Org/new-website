import Image from "next/image";
import { isMobile } from "react-device-detect";
import dynamic from "next/dynamic";

const PlayProvider = dynamic(
  () => {
    if (typeof window !== "undefined") {
      return import("@playhtml/react").then((mod) => mod.PlayProvider);
    } else {
      return Promise.resolve(() => <></>);
    }
  },
  { ssr: false },
);

const CanMoveElement = dynamic(
  () => import("@playhtml/react").then((mod) => mod.CanMoveElement),
  { ssr: false },
);

const desktopMascots = [
  {
    srcLight: "/images/mascots/light-blue.svg",
    srcDark: "/images/mascots/light-blue-darkmode.svg",
    alt: "Light blue mascot",
    width: 246,
    height: 157.5,
  },
  {
    srcLight: "/images/mascots/green.svg",
    srcDark: "/images/mascots/green-darkmode.svg",
    alt: "Green mascot",
    width: 153.9,
    height: 126,
  },
  {
    srcLight: "/images/mascots/blue.svg",
    srcDark: "/images/mascots/blue-darkmode.svg",
    alt: "Blue mascot",
    width: 171.9,
    height: 135,
  },
  {
    srcLight: "/images/mascots/orange.svg",
    srcDark: "/images/mascots/orange-darkmode.svg",
    alt: "Orange mascot",
    width: 171.9,
    height: 135,
  },
  {
    srcLight: "/images/mascots/beige.svg",
    srcDark: "/images/mascots/beige-darkmode.svg",
    alt: "Beige mascot",
    width: 98.1,
    height: 122.4,
  },
  {
    srcLight: "/images/mascots/yellow.svg",
    srcDark: "/images/mascots/yellow-darkmode.svg",
    alt: "Yellow mascot",
    width: 165.6,
    height: 161.1,
  },
  {
    srcLight: "/images/mascots/purple.svg",
    srcDark: "/images/mascots/purple-darkmode.svg",
    alt: "Purple mascot",
    width: 150.3,
    height: 126,
  },
  {
    srcLight: "/images/mascots/grey.svg",
    srcDark: "/images/mascots/grey-darkmode.svg",
    alt: "Grey mascot",
    width: 87.3,
    height: 88.2,
  },
  {
    srcLight: "/images/mascots/pink.svg",
    srcDark: "/images/mascots/pink-darkmode.svg",
    alt: "Pink mascot",
    width: 116.1,
    height: 110.7,
  },
];

const mobileMascots = [
  {
    srcLight: "/images/mascots/light-blue.svg",
    srcDark: "/images/mascots/light-blue-darkmode.svg",
    alt: "Light blue mascot",
    width: 90,
    height: 73.8,
    className: "absolute top-[-8%] left-[0%]",
  },
  {
    srcLight: "/images/mascots/green.svg",
    srcDark: "/images/mascots/green-darkmode.svg",
    alt: "Green mascot",
    width: 90,
    height: 73.8,
    className: "absolute top-[-25%] left-[20%]",
  },
  {
    srcLight: "/images/mascots/blue.svg",
    srcDark: "/images/mascots/blue-darkmode.svg",
    alt: "Blue mascot",
    width: 90,
    height: 73.8,
    className: "absolute top-[-12%] left-[60%]",
  },
  {
    srcLight: "/images/mascots/orange.svg",
    srcDark: "/images/mascots/orange-darkmode.svg",
    alt: "Orange mascot",
    width: 81,
    height: 67.5,
    className: "absolute top-[-2%] left-[82%]",
  },
  {
    srcLight: "/images/mascots/beige.svg",
    srcDark: "/images/mascots/beige-darkmode.svg",
    alt: "Beige mascot",
    width: 72,
    height: 58.5,
    className: "absolute top-[90%] left-[0%]",
  },
  {
    srcLight: "/images/mascots/yellow.svg",
    srcDark: "/images/mascots/yellow-darkmode.svg",
    alt: "Yellow mascot",
    width: 108,
    height: 103.5,
    className: "absolute top-[110%] left-[18%]",
  },
  {
    srcLight: "/images/mascots/purple.svg",
    srcDark: "/images/mascots/purple-darkmode.svg",
    alt: "Purple mascot",
    width: 81,
    height: 72.9,
    className: "absolute top-[100%] left-[50%]",
  },
  {
    srcLight: "/images/mascots/grey.svg",
    srcDark: "/images/mascots/grey-darkmode.svg",
    alt: "Grey mascot",
    width: 72,
    height: 70.2,
    className: "absolute top-[130%] left-[67%]",
  },
  {
    srcLight: "/images/mascots/pink.svg",
    srcDark: "/images/mascots/pink-darkmode.svg",
    alt: "Pink mascot",
    width: 85.5,
    height: 82.8,
    className: "absolute top-[90%] left-[80%]",
  },
];

const DesktopMascots = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <PlayProvider>
    {desktopMascots.map((mascot, index) => (
      <CanMoveElement key={index}>
        <div style={{ width: mascot.width, height: mascot.height }}>
          <Image
            src={isDarkMode ? mascot.srcDark : mascot.srcLight}
            alt={mascot.alt}
            width={mascot.width}
            height={mascot.height}
          />
        </div>
      </CanMoveElement>
    ))}
  </PlayProvider>
);

// Mobile Mascots Component
const MobileMascots = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <>
    {mobileMascots.map((mascot, index) => (
      <Image
        key={index}
        src={isDarkMode ? mascot.srcDark : mascot.srcLight}
        alt={mascot.alt}
        width={mascot.width}
        height={mascot.height}
        className={mascot.className}
      />
    ))}
  </>
);

export default function Mascots({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className="flex flex-row">
      {isMobile ? (
        <MobileMascots isDarkMode={isDarkMode} />
      ) : (
        <DesktopMascots isDarkMode={isDarkMode} />
      )}
    </div>
  );
}
