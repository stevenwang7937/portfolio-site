"use client";

import { useState } from "react";
import "@/styles/opentext_brief.css";
import { SectionHeader } from "@/components/globalcomponents";
import Image from "next/image";

type ThemeMode = "light" | "dark" | "high-contrast" | "high-contrast-light";

const themeImages: Record<ThemeMode, string> = {
  light: "/images/opentext/Light_theme.png",
  dark: "/images/opentext/dark_theme.png",
  "high-contrast": "/images/opentext/HC_Dark_theme.png",
  "high-contrast-light": "/images/opentext/HC_Light_theme.png",
};

export default function OpentextBrief() {
  const [selectedMode, setSelectedMode] = useState<ThemeMode>("light");

  return (
    <section className="opentext__brief">
      <div className="opentext__brief-container">
        <div className="opentext__brief-left">
          <SectionHeader
            topText="Brief"
            bottomText="The four modes"
            description="For legal and user experience reasons, more and more softwares provide different color modes that users can select based on their own needs."
          />
          <p className="text-body opentext__brief-description">
            <br />
            The four modes in our scope would be:</p>
          <div className="opentext__brief-buttons">
            <button
              className={`opentext__brief-button opentext__brief-button--light ${
                selectedMode === "light" ? "opentext__brief-button--selected" : ""
              }`}
              onClick={() => setSelectedMode("light")}
            >
              Light mode
            </button>
            <button
              className={`opentext__brief-button opentext__brief-button--dark ${
                selectedMode === "dark" ? "opentext__brief-button--selected" : ""
              }`}
              onClick={() => setSelectedMode("dark")}
            >
              Dark mode
            </button>
            <button
              className={`opentext__brief-button opentext__brief-button--high-contrast ${
                selectedMode === "high-contrast" ? "opentext__brief-button--selected" : ""
              }`}
              onClick={() => setSelectedMode("high-contrast")}
            >
              High contrast Dark
            </button>
            <button
              className={`opentext__brief-button opentext__brief-button--high-contrast-light ${
                selectedMode === "high-contrast-light" ? "opentext__brief-button--selected" : ""
              }`}
              onClick={() => setSelectedMode("high-contrast-light")}
            >
              High contrast light
            </button>
          </div>
        </div>
        <div className="opentext__brief-right">
          <Image
            src={themeImages[selectedMode]}
            alt={`${selectedMode} theme`}
            width={1200}
            height={800}
            className="opentext__brief-image"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

