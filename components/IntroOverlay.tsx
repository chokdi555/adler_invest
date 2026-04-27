"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import LogoIntro from "./LogoIntro";

const SESSION_KEY = "adler-intro-played";

export default function IntroOverlay() {
  const [hidden, setHidden] = useState(false);
  const [shouldSkip, setShouldSkip] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "1") {
      setHidden(true);
    }
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem(SESSION_KEY, "1");

    const overlay = overlayRef.current;
    const introEagle = overlay?.querySelector<SVGSVGElement>("[data-intro-eagle]");
    const introWordmark = overlay?.querySelector<SVGSVGElement>("[data-intro-wordmark]");
    const targetEagle = document.querySelector<SVGSVGElement>("[data-nav-eagle]");

    // Fallback: if anything is missing, just dispatch handoff and unmount.
    if (!overlay || !introEagle || !targetEagle) {
      window.dispatchEvent(new Event("intro-handoff"));
      setHidden(true);
      return;
    }

    const introRect = introEagle.getBoundingClientRect();
    const targetRect = targetEagle.getBoundingClientRect();

    const dx =
      targetRect.left + targetRect.width / 2 - (introRect.left + introRect.width / 2);
    const dy =
      targetRect.top + targetRect.height / 2 - (introRect.top + introRect.height / 2);
    const scale = targetRect.width / introRect.width;

    const tl = gsap.timeline({
      onComplete: () => {
        window.dispatchEvent(new Event("intro-handoff"));
        setHidden(true);
      },
    });

    if (introWordmark) {
      tl.to(
        introWordmark,
        { opacity: 0, duration: 0.35, ease: "power2.in" },
        0
      );
    }

    tl.to(
      introEagle,
      {
        x: dx,
        y: dy,
        scale,
        duration: 0.9,
        ease: "power3.inOut",
      },
      0.05
    );

    tl.to(
      overlay,
      {
        backgroundColor: "rgba(245, 244, 239, 0)",
        duration: 0.5,
        ease: "power2.in",
      },
      0.45
    );
  };

  if (hidden) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] grid place-items-center bg-[#f5f4ef]"
      aria-hidden="true"
    >
      <div className="w-[88vw] max-w-[880px]">
        <LogoIntro skip={shouldSkip} onComplete={handleComplete} />
      </div>
    </div>
  );
}