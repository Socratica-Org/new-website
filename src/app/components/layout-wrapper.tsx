"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase";
import Footer from "./footer";

export default function LayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isMapPage = pathname === "/map";

  if (isMapPage) {
    return <>{children}</>;
  }

  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "page_view", { page: "home" });
    }
  }, []);

  return (
    <>
      {children}
      <Footer />
    </>
  );
}
