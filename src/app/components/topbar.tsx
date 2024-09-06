import MobileNavbar from "./mobile-navbar";

export default function TopBar() {
  return (
    <div className="w-full flex justify-between items-center mt-12 px-10 relative">

      <h2 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-tiempos">
        For the love of <i>making.</i>
      </h2>

      {/* <div>
        <MobileNavbar />
      </div> */}
    </div>
  );
}
