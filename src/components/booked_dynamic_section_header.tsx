"use client";

import { useEffect, useState } from "react";

export default function BookedDynamicSectionHeader() {
  const [activeSection, setActiveSection] = useState<string>("main");

  useEffect(() => {
    const mainSection = document.querySelector(".booked__research-main");
    const competitorsSection = document.querySelector(".booked__research-competitors");
    const marketSection = document.querySelector(".booked__research-market");

    if (!mainSection || !competitorsSection || !marketSection) return;

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -40% 0px",
      threshold: [0, 0.1, 0.5, 1],
    };

    const sections = [
      { element: mainSection, name: "main" },
      { element: competitorsSection, name: "competitors" },
      { element: marketSection, name: "market" },
    ];

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the section with the highest intersection ratio
      let maxRatio = 0;
      let activeSectionName = "main";

      entries.forEach((entry) => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          const section = sections.find((s) => s.element === entry.target);
          if (section) {
            activeSectionName = section.name;
          }
        }
      });

      // Also check which section is most visible in viewport
      sections.forEach((section) => {
        const rect = section.element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const visibilityRatio = visibleHeight / viewportHeight;

        if (visibilityRatio > 0.3 && visibilityRatio > maxRatio) {
          activeSectionName = section.name;
        }
      });

      setActiveSection(activeSectionName);
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      observer.observe(section.element);
    });

    // Initial check
    const checkInitialSection = () => {
      sections.forEach((section) => {
        const rect = section.element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const visibilityRatio = visibleHeight / viewportHeight;

        if (visibilityRatio > 0.3) {
          setActiveSection(section.name);
        }
      });
    };

    checkInitialSection();

    return () => {
      observer.disconnect();
    };
  }, []);

  const getWordOpacity = (word: string) => {
    if (activeSection === "main" && word === "Us") return 1;
    if (activeSection === "competitors" && word === "Others") return 1;
    if (activeSection === "market" && word === "Market") return 1;
    return 0.6;
  };

  return (
    <div className="section-header-title">
      <p className="text-body section-header-title__top">Competitive Research</p>
      <h2 className="text-section-header section-header-title__bottom">
        <span style={{ opacity: getWordOpacity("Learn") }}>Learn </span>
        <span style={{ opacity: getWordOpacity("about") }}>about </span>
        <span style={{ opacity: getWordOpacity("Us") }}>Us</span>
        <span style={{ opacity: getWordOpacity(",") }}>, </span>
        <span style={{ opacity: getWordOpacity("Others") }}>Others</span>
        <span style={{ opacity: getWordOpacity(",") }}>, </span>
        <span style={{ opacity: getWordOpacity("Market") }}>Market</span>
        <span style={{ opacity: getWordOpacity("...") }}>...</span>
      </h2>
    </div>
  );
}

