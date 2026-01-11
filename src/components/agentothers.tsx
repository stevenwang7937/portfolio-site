"use client";

import "@/styles/agent_others.css";
import { SectionHeader } from "@/components/globalcomponents";
import Image from "next/image";

export default function AgentOthers() {
  return (
    <section className="agent__others">
      <div className="content-container">
        <div className="agent__others-remark">
          <p className="text-body agent__others-remark-label">Remark:</p>
          <p className="text-body agent__others-remark-text">
            On a side note, personally I think this is the best way to use user journey map instead of using it without personal experience or using it for testing design prototypes. This is more evidence-based, with more actual meanings and proven logic behind it, even though it is just one person's experience.
          </p>
        </div>
        <div className="agent__others-header">
          <SectionHeader
            topText="Move 2"
            bottomText="Moving to explore others"
            description="With one of the tools in mind, that allows me to compare and contrast between tools and try my best to categorize them and generate an overall workflow for all categories."
          />
        </div>
        <div className="agent__others-content">
          <div className="agent__others-content-1">
            <h3 className="text-section-subheader agent__others-content-text">Automation</h3>
            <div className="agent__others-content-1-wrapper">
              <Image
                src="/images/agent/icon 4.png"
                alt="Icon 4"
                width={100}
                height={100}
                className="agent__others-content-1-icon-4"
                unoptimized
              />
              <Image
                src="/images/agent/icon 3.png"
                alt="Icon 3"
                width={100}
                height={100}
                className="agent__others-content-1-icon-3"
                unoptimized
              />
              <Image
                src="/images/agent/icon 1.png"
                alt="Icon 1"
                width={100}
                height={100}
                className="agent__others-content-1-icon-1"
                unoptimized
              />
              <p className="text-body agent__others-content-1-text-1">
                Less AI (natural language) More logic building
              </p>
              <p className="text-body agent__others-content-1-text-2">
                More complicated to setup
              </p>
            </div>
          </div>
          <div className="agent__others-content-2">
            <h3 className="text-section-subheader agent__others-content-text">Personal Assistance</h3>
            <div className="agent__others-content-2-wrapper">
              <Image
                src="/images/agent/icon 6.png"
                alt="Icon 6"
                width={100}
                height={100}
                className="agent__others-content-2-icon-6"
                unoptimized
              />
              <Image
                src="/images/agent/icon 2.png"
                alt="Icon 2"
                width={100}
                height={100}
                className="agent__others-content-2-icon-2"
                unoptimized
              />
              <p className="text-body agent__others-content-2-text-1">
                More aspects than just social media management)
              </p>
              <p className="text-body agent__others-content-2-text-2">
                More AI (natural language) Less Integration
              </p>
            </div>
          </div>
          <div className="agent__others-content-3">
            <h3 className="text-section-subheader agent__others-content-text">Project Planning</h3>
            <div className="agent__others-content-3-wrapper">
              <Image
                src="/images/agent/icon 7.png"
                alt="Icon 7"
                width={100}
                height={100}
                className="agent__others-content-3-icon-7"
                unoptimized
              />
              <Image
                src="/images/agent/icon 5.png"
                alt="Icon 5"
                width={100}
                height={100}
                className="agent__others-content-3-icon-5"
                unoptimized
              />
              <p className="text-body agent__others-content-3-text-1">
                Less AI but more integrations
              </p>
              <p className="text-body agent__others-content-3-text-2">
                Aiming for smooth workflow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

