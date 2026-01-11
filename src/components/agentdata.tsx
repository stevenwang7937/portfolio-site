"use client";

import "@/styles/agent_data.css";
import { SectionHeader } from "@/components/globalcomponents";
import Image from "next/image";

export default function AgentData() {
  const images = [
    { src: "/images/agent/data/image 19.png", alt: "Data image 19" },
    { src: "/images/agent/data/image 23.png", alt: "Data image 23" },
    { src: "/images/agent/data/image 24.png", alt: "Data image 24" },
    { src: "/images/agent/data/image 31.png", alt: "Data image 31" },
    { src: "/images/agent/data/image 39.png", alt: "Data image 39" },
    { src: "/images/agent/data/image 46.png", alt: "Data image 46" },
    { src: "/images/agent/data/image 52.png", alt: "Data image 52" },
    { src: "/images/agent/data/image 62.png", alt: "Data image 62" },
    { src: "/images/agent/data/image 75.png", alt: "Data image 75" },
  ];

  return (
    <section className="agent__data">
      <div className="content-container">
        <div className="agent__data-header">
          <SectionHeader
            topText="Move 3"
            bottomText="Qualitative Research Data Gathering"
            description="Then we will focus on authentic user feedback posted on Youtube, LinkedIn, Reddit, and other feedback platforms."
          />
        </div>
        <div className="agent__data-images">
          {images.map((image, index) => (
            <div key={index} className={`agent__data-image-wrapper agent__data-image-${index + 1}`}>
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="agent__data-image"
                unoptimized
              />
            </div>
          ))}
        </div>
        <p className="text-body agent__data-description">
          From here, we observe all kinds of needs, complaints, but also praises and encouragement.
            <br /> 
            <br />
          There will be bias as some of the content might be paid, but since we are doing product competitor analysis, not commercial competitor analysis, these paid comments still provide an edge as they outline real live features that company would like to promote from the mouths of the influencers.
        </p>
        <div className="agent__data-takeaways-wrapper">
          <Image
            src="/images/agent/data-takeaways.png"
            alt="Data takeaways"
            width={1200}
            height={800}
            className="agent__data-takeaways-image"
            unoptimized
          />
        </div>
        <p className="text-body agent__data-takeaways-text">
          These are some key insights on what consumers would need from an AI agent, which is the core of the research.
        </p>
      </div>
    </section>
  );
}

