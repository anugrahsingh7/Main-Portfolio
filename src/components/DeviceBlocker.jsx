"use client"
import { useEffect, useState } from "react";

const isDesktop = () => {
  if (typeof window === "undefined") return true;
  const ua = navigator.userAgent;
  // Basic user agent check for mobile/tablet
  const isMobileOrTablet = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet|Mobile/i.test(ua);
  // Special case: allow 1024x600
  if (window.innerWidth === 1024 && window.innerHeight === 600) {
    return true;
  }
  // Only block very small screens (e.g., width < 800px)
  const isVerySmallScreen = window.innerWidth < 800;
  return !(isMobileOrTablet || isVerySmallScreen);
};

export default function DeviceBlocker() {
  const [showBlock, setShowBlock] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setShowBlock(!isDesktop());
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  if (!showBlock) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "black",
      color: "white",
      zIndex: 99999,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.5rem",
      textAlign: "center",
      pointerEvents: "none"
    }}>
      <div>
        <strong>This website contains high animation work.</strong>
        <br />
        Please visit it on a laptop or PC for the best experience.
      </div>
    </div>
  );
} 