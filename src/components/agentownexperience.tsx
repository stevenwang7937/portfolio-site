import "@/styles/agent_own_experience.css";
import Image from "next/image";
import { SectionHeaderTitle } from "@/components/globalcomponents";

export default function AgentOwnExperience() {
  return (
    <section className="agent__own-experience">
      <Image
        src="/images/agent/own-experience-2.png"
        alt="Own experience workflow"
        width={800}
        height={1200}
        className="agent__own-experience-image agent__own-experience-image--desktop"
        unoptimized
      />
      <div className="content-container">
      <div className="agent__own-experience-header">
            <SectionHeaderTitle
              topText="Move 1"
              bottomText="Start with Own Experience"
            />
          </div>
          <Image
            src="/images/agent/own-experience-2.png"
            alt="Own experience workflow"
            width={800}
            height={1200}
            className="agent__own-experience-image agent__own-experience-image--mobile"
            unoptimized
          />
        <div className="agent__own-experience-content">
         
          
          <div className="agent__own-experience-text">
            <p className="text-body">
              Usually I would start a research task with something I have personally used. This would give a starting point for
            </p>
            <ul className="agent__own-experience-list">
              <li className="text-body">How does the overall flow might look like? What problems are the product wanting to solve?</li>
              <li className="text-body">Which questions users might care about?</li>
              <li className="text-body">What emotions do I have when going through the product? What are some personal road blockers.</li>
            </ul>
            <p className="text-body">
              Among all products, I have used relay.app, an application focusing on RPA process (Robotic Process Automation) with the support of AI.
            </p>
            <p className="text-body">
              For example, the flow in the image on the left took me around 30 minutes to figure out and test, parsing all LinkedIn job board alerts to a designated page on notion for me to apply to jobs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

