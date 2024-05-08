import React from "react";
import TopBar from "./components/topbar";
import DoodleSwitcher from "./components/doodle-switcher";

export default function Home() {

  return (
    <div className="bg-primary min-h-screen min-w-full flex flex-col">
      <TopBar />
      <div className="container mx-auto max-w-screen-xl px-6">
        <DoodleSwitcher />
      </div>
      {/* <h1>Socratica</h1> */}
    </div>
  );
}
