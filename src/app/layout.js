// app/layout.js
"use client"
import "./globals.css";
import Cursor from "@/components/Cursor";
import { useEffect, useState } from "react";
import MobileWarning from "@/components/MobileWarning";

export default function RootLayout({ children }) {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const isLandscape = window.innerWidth > window.innerHeight; // Check landscape mode
      const isLargeScreen = window.innerWidth >= 1024 && window.innerHeight >= 600; // Ensures it's a reasonable desktop size
      const userAgent = navigator.userAgent;
      const isIpadPro = /iPad.*OS.*\s([\d_]+)/.test(userAgent); // Detect iPad Pro

      // Check if device is desktop (wide enough screen) and in landscape mode but exclude iPad Pro
      setIsDesktop(
        isLargeScreen && isLandscape && !isIpadPro
      );
    };

    handleResize(); // Initial check on load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Anugrah singh logo-modified (1).png" />
        <title>Anugrah Singh - Professional Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Cursor />
        {!isDesktop ? (
          <MobileWarning />
        ) : (
          children // Show the regular content for desktop or allowed devices
        )}
      </body>
    </html>
  );
}