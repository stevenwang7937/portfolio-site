"use client";

import { useEffect, useRef } from "react";
import "@/styles/agent_brief.css";
import Image from "next/image";
import { SectionHeaderTitle } from "@/components/globalcomponents";

export default function AgentBrief() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Check if in mobile mode (width <= 490px)
    const isMobile = window.innerWidth <= 490;
    if (isMobile) return;

    const img = new window.Image();
    img.src = "/images/agent/brief-background.png";
    
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
    <section ref={sectionRef} className="agent__brief">
      <div className="content-container">
        <div className="agent__brief-content">
          <div className="agent__brief-header">
            <SectionHeaderTitle
              topText="Project Brief"
              bottomText="Clients' Ask"
            />
          </div>
          
          <div className="agent__brief-main">
            <p className="text-section-subheader agent__brief-text">
              Perform a competitor analysis on all AI agent tools now in the market.
            </p>
            
            <div className="agent__brief-icons">
              <Image
                src="/images/agent/icon 1.png"
                alt="Icon 1"
                width={100}
                height={100}
                className="agent__brief-icon"
                unoptimized
              />
              <Image
                src="/images/agent/icon 2.png"
                alt="Icon 2"
                width={100}
                height={100}
                className="agent__brief-icon"
                unoptimized
              />
              <Image
                src="/images/agent/icon 3.png"
                alt="Icon 3"
                width={100}
                height={100}
                className="agent__brief-icon"
                unoptimized
              />
              <Image
                src="/images/agent/icon 4.png"
                alt="Icon 4"
                width={100}
                height={100}
                className="agent__brief-icon"
                unoptimized
              />
              <Image
                src="/images/agent/icon 5.png"
                alt="Icon 5"
                width={100}
                height={100}
                className="agent__brief-icon"
                unoptimized
              />
              <Image
                src="/images/agent/icon 6.png"
                alt="Icon 6"
                width={100}
                height={100}
                className="agent__brief-icon"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

