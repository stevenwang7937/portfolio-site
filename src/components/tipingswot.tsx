import "@/styles/tipping_swot.css";
import { CenteredSectionHeader } from "@/components/globalcomponents";
import Image from "next/image";

export default function TippingSwot() {
  return (
    <section className="tipping__swot">
      <div className="content-container">
        <div className="tipping__swot-header">
          <CenteredSectionHeader
            topText="Empathy Journey Continued"
            bottomText="SWOT Analysis"
          />
        </div>
        
        <div className="tipping__swot-strength">
          <div className="tipping__swot-title-wrapper">
            <Image
              src="/images/tipping/letter-S.png"
              alt="S"
              width={100}
              height={100}
              className="tipping__swot-letter"
              unoptimized
            />
            <h3 className="tipping__swot-title">Strength</h3>
          </div>
          <p className="text-body tipping__swot-content">
            We gave the opportunities for SMB teams to manage their employees tipping situation. By giving the tip management part to service providers, it offloads management cost on companies, but also giving service providers more control on something that they should control.
          </p>
        </div>
        
        <div className="tipping__swot-weakness">
          <div className="tipping__swot-title-wrapper">
            <Image
              src="/images/tipping/letter-W.png"
              alt="W"
              width={100}
              height={100}
              className="tipping__swot-letter"
              unoptimized
            />
            <h3 className="tipping__swot-title">Weakness</h3>
          </div>
          <p className="text-body tipping__swot-content">
            The main weakness in the current model is the integration. Lots of companies would have an integrated system on shifts, salary, tips, and human resources. The autonomous fashion of our app might challenge that mode.
          </p>
        </div>
        
        <div className="tipping__swot-opportunities">
          <div className="tipping__swot-title-wrapper">
            <Image
              src="/images/tipping/letter-O.png"
              alt="O"
              width={100}
              height={100}
              className="tipping__swot-letter"
              unoptimized
            />
            <h3 className="tipping__swot-title">Opportunity</h3>
          </div>
          <p className="text-body tipping__swot-content">
            Acting as a digital tipping app, the app pushes another wave in digitalization of tipping culture. This would allow customers to directly give the tips to service providers, no need to worry about restaurants might take any part of the tip.
          </p>
        </div>
        
        <div className="tipping__swot-threat">
          <div className="tipping__swot-title-wrapper">
            <Image
              src="/images/tipping/letter-T.png"
              alt="T"
              width={100}
              height={100}
              className="tipping__swot-letter"
              unoptimized
            />
            <h3 className="tipping__swot-title">Threat</h3>
          </div>
          <p className="text-body tipping__swot-content">
            We mainly worry about the adoption of the method, as well as the learning curve for service providers to self-manage their tips. That is why it is more crucial to have a smooth and guided path.
          </p>
        </div>
      </div>
    </section>
  );
}

