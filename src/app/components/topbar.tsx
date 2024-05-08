import NavBar from "./navbar";

export default function TopBar() {
  return (
    <div className="w-full flex justify-between items-center mt-5 px-5 relative">

      <div className="flex space-x-4">
        <img src="/images/logo.svg" alt="Socratica" className="w-8 h-8" />
        <h2 className="text-2xl font-tiempos">Socratica</h2>
      </div>

      <h2 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-tiempos">
        For the love of <i>making.</i>
      </h2>

      <div>
        <NavBar />
      </div>
    </div>
  );
}
