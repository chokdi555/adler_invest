"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LogoIntroProps {
  /** Called when the animation finishes (after the wordmark fades in). */
  onComplete?: () => void;
  /** Skip the animation entirely and render the final state. */
  skip?: boolean;
}

// Tone (0..1) and final brand color for each triangle.
// 0 = lightest, 1 = darkest — mirrors the original logo's gradient.
const TRIANGLES: { id: string; tone: number; final: string; d: string }[] = [
  { id: "t1", tone: 0.15, final: "#457FFC", d: "M154.544 0L103.071 89.1542H206.018L154.544 0Z" },
  { id: "t2", tone: 0.05, final: "#0E5AFD", d: "M206.004 89.2227L103.057 89.2227L154.53 178.377L206.004 89.2227Z" },
  { id: "t3", tone: 0.30, final: "#0141CB", d: "M205.989 89.1084L154.516 178.263H257.462L205.989 89.1084Z" },
  { id: "t4", tone: 0.45, final: "#0539A9", d: "M257.263 178.148L154.317 178.148L205.79 267.302L257.263 178.148Z" },
  { id: "t5", tone: 0.65, final: "#012778", d: "M154.361 178.217L102.888 267.371H205.834L154.361 178.217Z" },
  { id: "t6", tone: 0.80, final: "#001C59", d: "M154.376 178.148L51.4294 178.148L102.903 267.302L154.376 178.148Z" },
  { id: "t7", tone: 1.00, final: "#000000", d: "M51.4731 178.217L0 267.371H102.946L51.4731 178.217Z" },
];

const WORDMARK_PATH =
  "M283.8 200L322.04 88H342.84L380.44 200H366.2L332.76 97.92H332.12L297.88 200H283.8ZM302.68 164.96L306.52 154.08H357.24L361.08 164.96H302.68ZM421.003 201.92C413.323 201.92 406.656 200.107 401.003 196.48C395.456 192.747 391.136 187.733 388.043 181.44C385.056 175.147 383.563 168.107 383.563 160.32C383.563 152.533 385.056 145.493 388.043 139.2C391.136 132.907 395.616 127.947 401.483 124.32C407.349 120.587 414.443 118.72 422.763 118.72C430.123 118.72 436.149 120.267 440.843 123.36C445.643 126.453 449.323 129.92 451.883 133.76V88H465.323V200H454.123L452.843 184.8H452.203C449.963 188.64 447.189 191.84 443.883 194.4C440.683 196.853 437.163 198.72 433.323 200C429.483 201.28 425.376 201.92 421.003 201.92ZM424.203 190.24C429.749 190.24 434.549 189.013 438.603 186.56C442.763 184 445.963 180.48 448.203 176C450.443 171.52 451.563 166.293 451.563 160.32C451.563 154.347 450.443 149.12 448.203 144.64C445.963 140.16 442.763 136.693 438.603 134.24C434.549 131.68 429.749 130.4 424.203 130.4C418.656 130.4 413.856 131.68 409.803 134.24C405.749 136.693 402.603 140.16 400.363 144.64C398.229 149.12 397.163 154.347 397.163 160.32C397.163 166.293 398.229 171.52 400.363 176C402.603 180.48 405.749 184 409.803 186.56C413.856 189.013 418.656 190.24 424.203 190.24ZM480.513 200V88H493.953V200H480.513ZM544.165 201.92C536.592 201.92 529.872 200.213 524.005 196.8C518.138 193.28 513.498 188.427 510.085 182.24C506.778 175.947 505.125 168.64 505.125 160.32C505.125 151.893 506.778 144.587 510.085 138.4C513.392 132.213 517.978 127.413 523.845 124C529.818 120.48 536.698 118.72 544.485 118.72C552.272 118.72 558.938 120.48 564.485 124C570.032 127.413 574.298 131.947 577.285 137.6C580.272 143.147 581.765 149.227 581.765 155.84C581.765 156.907 581.765 158.08 581.765 159.36C581.765 160.533 581.712 161.867 581.605 163.36H515.205V152.96H568.485C568.165 145.387 565.712 139.52 561.125 135.36C556.645 131.2 550.992 129.12 544.165 129.12C539.578 129.12 535.312 130.133 531.365 132.16C527.418 134.187 524.218 137.227 521.765 141.28C519.418 145.333 518.245 150.453 518.245 156.64V161.12C518.245 167.733 519.472 173.227 521.925 177.6C524.378 181.973 527.578 185.28 531.525 187.52C535.578 189.653 539.792 190.72 544.165 190.72C549.712 190.72 554.352 189.44 558.085 186.88C561.818 184.32 564.538 180.8 566.245 176.32H579.525C578.138 181.227 575.845 185.6 572.645 189.44C569.445 193.28 565.445 196.32 560.645 198.56C555.952 200.8 550.458 201.92 544.165 201.92ZM591.431 200V120.64H603.271L604.551 137.92H605.191C607.858 132.16 610.471 127.947 613.031 125.28C615.591 122.507 618.525 120.747 621.831 120C625.245 119.147 629.458 118.72 634.471 118.72V132.8H630.951C626.685 132.8 622.898 133.387 619.591 134.56C616.285 135.627 613.565 137.227 611.431 139.36C609.298 141.493 607.645 144.213 606.471 147.52C605.405 150.72 604.871 154.507 604.871 158.88V200H591.431ZM674.575 200V88H688.015V200H674.575ZM701.588 200V120.64H713.428L714.708 133.12H715.348C718.121 128.747 721.748 125.28 726.228 122.72C730.708 120.053 736.094 118.72 742.388 118.72C748.468 118.72 753.801 120 758.388 122.56C762.974 125.013 766.494 128.853 768.948 134.08C771.508 139.2 772.788 145.707 772.788 153.6V200H759.348V155.04C759.348 146.827 757.588 140.64 754.068 136.48C750.548 132.32 745.481 130.24 738.868 130.24C734.281 130.24 730.174 131.36 726.548 133.6C723.028 135.84 720.201 139.093 718.068 143.36C716.041 147.52 715.028 152.693 715.028 158.88V200H701.588ZM807.593 200L779.113 120.64H793.193L815.913 189.28H816.553L839.433 120.64H853.193L824.713 200H807.593ZM896.978 201.92C889.404 201.92 882.684 200.213 876.818 196.8C870.951 193.28 866.311 188.427 862.898 182.24C859.591 175.947 857.938 168.64 857.938 160.32C857.938 151.893 859.591 144.587 862.898 138.4C866.204 132.213 870.791 127.413 876.658 124C882.631 120.48 889.511 118.72 897.298 118.72C905.084 118.72 911.751 120.48 917.298 124C922.844 127.413 927.111 131.947 930.098 137.6C933.084 143.147 934.578 149.227 934.578 155.84C934.578 156.907 934.578 158.08 934.578 159.36C934.578 160.533 934.524 161.867 934.418 163.36H868.018V152.96H921.298C920.978 145.387 918.524 139.52 913.938 135.36C909.458 131.2 903.804 129.12 896.978 129.12C892.391 129.12 888.124 130.133 884.178 132.16C880.231 134.187 877.031 137.227 874.578 141.28C872.231 145.333 871.058 150.453 871.058 156.64V161.12C871.058 167.733 872.284 173.227 874.738 177.6C877.191 181.973 880.391 185.28 884.338 187.52C888.391 189.653 892.604 190.72 896.978 190.72C902.524 190.72 907.164 189.44 910.898 186.88C914.631 184.32 917.351 180.8 919.058 176.32H932.338C930.951 181.227 928.658 185.6 925.458 189.44C922.258 193.28 918.258 196.32 913.458 198.56C908.764 200.8 903.271 201.92 896.978 201.92ZM974.964 201.92C968.67 201.92 963.017 200.853 958.004 198.72C952.99 196.48 948.937 193.387 945.844 189.44C942.857 185.387 940.99 180.64 940.244 175.2H954.004C954.644 177.867 955.71 180.48 957.204 183.04C958.804 185.493 961.044 187.52 963.924 189.12C966.91 190.72 970.644 191.52 975.124 191.52C978.964 191.52 982.11 190.987 984.564 189.92C987.017 188.747 988.83 187.253 990.004 185.44C991.284 183.52 991.924 181.44 991.924 179.2C991.924 176.427 991.124 174.187 989.524 172.48C987.924 170.773 985.577 169.333 982.484 168.16C979.497 166.88 975.924 165.653 971.764 164.48C968.564 163.52 965.31 162.507 962.004 161.44C958.697 160.267 955.657 158.88 952.884 157.28C950.217 155.68 948.03 153.6 946.324 151.04C944.724 148.48 943.924 145.28 943.924 141.44C943.924 137.173 945.097 133.333 947.444 129.92C949.79 126.507 953.097 123.787 957.364 121.76C961.737 119.733 966.857 118.72 972.724 118.72C981.15 118.72 988.03 120.8 993.364 124.96C998.804 129.12 1001.95 135.147 1002.8 143.04H989.524C989.097 138.56 987.39 135.147 984.404 132.8C981.524 130.347 977.577 129.12 972.564 129.12C967.657 129.12 963.87 130.187 961.204 132.32C958.644 134.453 957.364 137.12 957.364 140.32C957.364 142.453 958.004 144.213 959.284 145.6C960.564 146.987 962.59 148.213 965.364 149.28C968.244 150.24 971.87 151.413 976.244 152.8C981.15 154.293 985.79 155.947 990.164 157.76C994.644 159.573 998.27 161.973 1001.04 164.96C1003.92 167.84 1005.36 171.787 1005.36 176.8C1005.47 181.707 1004.24 186.08 1001.68 189.92C999.23 193.653 995.71 196.587 991.124 198.72C986.644 200.853 981.257 201.92 974.964 201.92ZM1042.95 200C1038.15 200 1033.99 199.253 1030.47 197.76C1026.95 196.267 1024.23 193.76 1022.31 190.24C1020.5 186.613 1019.59 181.76 1019.59 175.68V130.24H1005.83V120.64H1019.59L1021.19 101.6H1033.03V120.64H1056.39V130.24H1033.03V175.68C1033.03 181.227 1034.04 184.96 1036.07 186.88C1038.1 188.693 1041.67 189.6 1046.79 189.6H1055.11V200H1042.95Z";

// HSL → HEX
function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const c = l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return Math.round(255 * c).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function toneToLightness(tone: number): number {
  const lightest = 62;
  const darkest = 8;
  return lightest + (darkest - lightest) * tone;
}

export default function LogoIntro({ onComplete, skip = false }: LogoIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);

  // Keep the latest onComplete in a ref so we don't re-run the effect
  // when the parent passes a new function reference each render.
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tris = Array.from(container.querySelectorAll<SVGPathElement>(".tri"));
    const wordmark = container.querySelector<SVGPathElement>(".wordmark");
    const buildOrder = TRIANGLES.map((t) =>
      container.querySelector<SVGPathElement>(`#${t.id}`)
    ).filter((el): el is SVGPathElement => el !== null);

    // Respect reduced-motion: jump to the final state.
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (skip || prefersReduced) {
      tris.forEach((el, i) => {
        el.setAttribute("fill", TRIANGLES[i].final);
        el.style.opacity = "1";
        el.style.transform = "scale(1)";
      });
      if (wordmark) wordmark.style.opacity = "1";
      onCompleteRef.current?.();
      return;
    }

    const state = { hue: 0 };

    const paintFromHue = () => {
      tris.forEach((el) => {
        const tone = parseFloat(el.dataset.tone ?? "0");
        const L = toneToLightness(tone);
        const S = 85 - tone * 15;
        el.setAttribute("fill", hslToHex(((state.hue % 360) + 360) % 360, S, L));
      });
    };

    // gsap.context scopes everything for clean teardown when component unmounts.
    const ctx = gsap.context(() => {
      paintFromHue();

      const tl = gsap.timeline({
        onComplete: () => onCompleteRef.current?.(),
      });

      // PHASE 1 — Build-up.
      const buildDuration = 2.2;
      const stagger = buildDuration / buildOrder.length;

      tl.to(state, {
        hue: 300,
        duration: buildDuration,
        ease: "none",
        onUpdate: paintFromHue,
      }, 0);

      buildOrder.forEach((el, i) => {
        tl.fromTo(el,
          { opacity: 0, scale: 0.55 },
          { opacity: 1, scale: 1, duration: 0.45, ease: "power3.out" },
          i * stagger
        );
      });

      // PHASE 2 — Smooth full-rainbow loop.
      tl.to(state, {
        hue: "+=420",
        duration: 3.4,
        ease: "sine.inOut",
        onUpdate: paintFromHue,
      }, ">-0.2");

      // PHASE 3 — Settle into brand colors.
      buildOrder.forEach((el) => {
        const finalColor = TRIANGLES.find((t) => t.id === el.id)?.final ?? "#000";
        tl.to(el, {
          fill: finalColor,
          duration: 1.5,
          ease: "power2.inOut",
        }, "<");
      });

      // PHASE 4 — Wordmark.
      tl.to(".wordmark", {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      }, ">-0.4");
    }, container);

    return () => ctx.revert();
  }, [skip]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full"
    >
      <svg
        data-intro-eagle
        viewBox="0 0 258 268"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="w-[42vw] max-w-[180px] md:w-auto md:h-32 lg:h-40 h-auto overflow-visible shrink-0"
        aria-hidden="true"
      >
        {TRIANGLES.map((t) => (
          <path
            key={t.id}
            id={t.id}
            className="tri opacity-0 [transform-box:fill-box] [transform-origin:center]"
            data-tone={t.tone}
            data-final={t.final}
            d={t.d}
          />
        ))}
      </svg>
      <svg
        data-intro-wordmark
        viewBox="283 88 773 113"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="w-full max-w-[480px] md:max-w-[640px] md:w-auto md:h-16 lg:h-20 h-auto overflow-visible"
        aria-hidden="true"
      >
        <path className="wordmark opacity-0" fill="#0a0a0a" d={WORDMARK_PATH} />
      </svg>
    </div>
  );
}