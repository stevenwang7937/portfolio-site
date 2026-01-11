"use client";

import "@/styles/agent_featurelist.css";
import { SectionHeader } from "@/components/globalcomponents";
import Image from "next/image";

export default function AgentFeatureList() {
  return (
    <section className="agent__featurelist">
      <div className="content-container">
        <div className="agent__featurelist-header">
          <SectionHeader
            topText="Move 3"
            bottomText="Feature List"
            description="Providing a feature list of all competitors, categorized into different parts of an AI agent."
          />
        </div>
      </div>
      <div className="agent__featurelist-image-wrapper">
        <Image
          src="/images/agent/feature-list.png"
          alt="Feature list"
          width={1920}
          height={1080}
          className="agent__featurelist-image"
          unoptimized
        />
      </div>
    </section>
  );
}

