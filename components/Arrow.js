"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Arrow({ hovered, initialColor = "black" }) {
  const pathRef = useRef(null);
  const accentColor = "#4447a9"; // Define the accent color

  useEffect(() => {
    if (pathRef.current) {
      gsap.set(pathRef.current, { fill: initialColor }); // Set initial color

      if (hovered) {
        gsap.to(pathRef.current, {
          fill: accentColor,
          duration: 0.2,
          ease: "power2.out",
        });
      } else {
        gsap.to(pathRef.current, {
          fill: initialColor,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    }
  }, [hovered, initialColor]); // Re-run effect when hovered or initialColor changes

  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={pathRef} // Attach ref to the path element
        d="M19.8333 25.5C22.9627 25.5 25.5 22.9627 25.5 19.8333V5.66667C25.5 2.53725 22.9627 0 19.8333 0H5.66667C2.53725 0 0 2.53725 0 5.66667V19.8333C0 22.9627 2.53725 25.5 5.66667 25.5H19.8333ZM8.5 18.4167C8.13733 18.4167 7.75909 18.2948 7.48142 18.0186C6.92892 17.4647 6.92892 16.5353 7.48142 15.9814L13.1481 10.3148L9.91667 7.08333H18.4167V15.5833L15.1852 12.3519L9.51857 18.0186C9.24232 18.2948 8.86267 18.4167 8.5 18.4167Z"
        fill="black"
      />
    </svg>
  );
}
