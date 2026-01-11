"use client";

import { useEffect, useRef } from "react";
import "@/styles/agent_user_journey_map.css";
import { SectionHeaderTitle } from "@/components/globalcomponents";
import Image from "next/image";

export default function AgentUserJourneyMap() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Check if in mobile mode (width <= 490px)
    const isMobile = window.innerWidth <= 490;
    if (isMobile) return;

    const img = new window.Image();
    img.src = "/images/agent/user-journey-map-background.png";
    
    img.onload = () => {
      // Check again in case window was resized during image load
      if (window.innerWidth <= 490) return;
      
      const aspectRatio = img.height / img.width;
      const viewportWidth = window.innerWidth;
      const calculatedHeight = viewportWidth * aspectRatio;
      section.style.height = `${calculatedHeight}px`;
      section.style.setProperty('--bg-image-height', `${calculatedHeight}px`);
    };

    // Handle window resize
    const handleResize = () => {
      // Skip height calculation in mobile mode
      if (window.innerWidth <= 490) return;
      
      const aspectRatio = img.height / img.width;
      const viewportWidth = window.innerWidth;
      const calculatedHeight = viewportWidth * aspectRatio;
      if (section) {
        section.style.height = `${calculatedHeight}px`;
        section.style.setProperty('--bg-image-height', `${calculatedHeight}px`);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section ref={sectionRef} className="agent__user-journey-map">
      <div className="content-container">
        <div className="agent__user-journey-map-content">
          <div className="agent__user-journey-map-header">
            <SectionHeaderTitle
              topText="Move 2"
              bottomText="User Journey Map"
            />
          </div>
          <Image
            src="/images/agent/user-journey-map-background.png"
            alt="User journey map"
            width={1200}
            height={800}
            className="agent__user-journey-map-image--mobile"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

