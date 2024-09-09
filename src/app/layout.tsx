import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from './components/footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Socratica",
  description:
    "We host weekly co-working sessions for you to work on your passion projects with likeminded people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
