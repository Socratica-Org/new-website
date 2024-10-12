"use client";
import { usePathname } from "next/navigation";
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

  return (
    <>
      {children}
      <Footer />
    </>
  );
}
