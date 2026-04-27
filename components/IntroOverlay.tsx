"use client";

import { useEffect, useState } from "react";
import LogoIntro from "./LogoIntro";

const SESSION_KEY = "adler-intro-played";

export default function IntroOverlay() {
  const [hidden, setHidden] = useState(false);
  const [fading, setFading] = useState(false);
  const [shouldSkip, setShouldSkip] = useState(false);

  useEffect(() => {
    // Check session flag client-side only.
    if (sessionStorage.getItem(SESSION_KEY) === "1") {
      setHidden(true);
    }
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setFading(true);
    setTimeout(() => setHidden(true), 280);
  };

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-[#f5f4ef] transition-opacity duration-300 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="w-[88vw] max-w-[880px]">
        <LogoIntro skip={shouldSkip} onComplete={handleComplete} />
      </div>
    </div>
  );
}