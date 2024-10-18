import Node from "./node";
import { X } from "lucide-react";
import { Location } from "../types";

const overlayStyle = {
  background: "rgba(0, 0, 0, 0.74)",
  backdropFilter: "blur(2px)",
  WebkitBackdropFilter: "blur(2px)",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "opacity 300ms ease-in-out, transform 300ms ease-in-out",
  opacity: 1,
  transform: "translateX(0)",
  zIndex: 1000,
  position: "absolute" as const,
  top: "50%",
  // right: "2.5%",
  // width: "450px",
  // height: "760px",
  marginTop: "-387px",
  overflowY: "auto" as const,
};

export default function Popup({
  location,
  onClose,
}: {
  location: Location;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed top-1/2 transform -translate-y-1/2 z-50 bg-primary p-4 rounded-xl shadow-lg w-[90%] h-[80%] md:w-[450px] md:h-[760px] right-5 md:right-5 md:translate-x-0"
      style={overlayStyle}
    >
      <button onClick={onClose} className="absolute top-5 right-5 text-white">
        <X size={24} />
      </button>
      <Node
        id={location.id}
        name={location.name}
        date={location.date}
        location={location.location.toUpperCase()}
        lumaLink={location.lumaLink}
        imageSrc={location.imageSrc}
        joinLink={location.joinLink}
        websiteLink={location.websiteLink}
        instagramLink={location.instagramLink}
        twitterLink={location.twitterLink}
        youtubeLink={location.youtubeLink}
      />
    </div>
  );
}
