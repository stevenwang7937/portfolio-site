import "@/styles/opentext_background.css";
import { SectionHeaderTitle } from "@/components/globalcomponents";
import Image from "next/image";

export default function OpentextBackground() {
  return (
    <section className="opentext__background">
      <div className="opentext__background-container">
        <div className="opentext__background-left">
          <div className="opentext__background-header">
            <SectionHeaderTitle 
              topText="Background"
              bottomText="OpenText Design System Revamping Project"
            />
          </div>
          <div className="opentext__background-content">
            <div className="opentext__background-content-left">
              <Image
                src="/images/opentext/background-office.png"
                alt="OpenText Waterloo office"
                width={400}
                height={400}
                className="opentext__background-office-image"
                unoptimized
              />
              <h3 className="text-section-subheader opentext__background-office-title">
                OpenText | Waterloo office
              </h3>
              <p className="text-body opentext__background-office-text">
                OpenText is a top 10 global B2B SaaS software company focusing on business information management.
              </p>
            </div>
            <div className="opentext__background-content-right">
              <p className="text-body opentext__background-description">
              I joined the design system team as an intern helping out with polishing the new modes for user preference and accessibility reasons in the Europe.

                <br />
                <br />
                Team: 2 Senior Designer, 1 Art Direction, 2 Design Interns
                <br />
                <br />
                Main Contribution: 
                <br />
                • 12 design components in 4 modes
                <br />
                • Guideline refinement for 9 components
                <br />
                • Explorations in most up-to-date design system setup methods
              </p>
            </div>
          </div>
        </div>
        <div className="opentext__background-right">
          <Image
            src="/images/opentext/background-visual.png"
            alt="OpenText design system visual"
            width={800}
            height={1000}
            className="opentext__background-visual-image"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

