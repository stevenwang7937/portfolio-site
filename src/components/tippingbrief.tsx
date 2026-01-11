import "@/styles/tipping_brief.css";
import Image from "next/image";
import { CenteredSectionHeader } from "@/components/globalcomponents";

export default function TippingBrief() {
  return (
    <section className="tipping__brief">
      <div className="content-container">
        <div className="tipping__brief-content">
          <div className="tipping__brief-header">
            <CenteredSectionHeader
              topText="Background"
              bottomText="Digital Tipping Solution"
            />
          </div>
          
          <div className="tipping__brief-meta">
            <p className="text-body tipping__brief-meta-item">Client Project at Design Agency</p>
            <p className="text-body tipping__brief-meta-item">2023 Summer, Toronto</p>
          </div>
          
          <div className="tipping__brief-main">
            <div className="tipping__brief-center">
              <div className="tipping__brief-center-top">
                <Image
                  src="/images/tipping/letter-A.png"
                  alt="Ornate letter A"
                  width={158}
                  height={158}
                  className="tipping__brief-letter"
                  unoptimized
                />
                <p className="text-body tipping__brief-intro">
                  S my last coop, I joined Tribal Scale, a Canadian innovation agency. I was handed a client project named "The Tipping App", aiming to build an app for service providers collecting and managing tips on mobile phone.
                </p>
              </div>
              
              <div className="tipping__brief-description">
                <p className="text-body tipping__brief-text">
                  My team is a multi-discipline project team dedicating for one of the client projects. Hence, we work really closely with the clients, our agency engineers and PMs.
                </p>
                <p className="text-body tipping__brief-text">
                  I was co-designing it with another junior designer, and we are both mentored by the lead designer. Although it is only a 3 months project which I didn't stay until the very end of the handoff process due to school terms start, I did participated in most decision making including SOW discussions, design style changes, flow cleanup (which I initiated). All of those are approved by client via weekly meetups and reports.
                </p>
                <p className="text-body tipping__brief-text">
                  The outcome of the project is quite nice. There are more than 20 tasks completed, 100% client approval rate and satisfaction, as well as leading the client to sign another SOW which 2.5x the total income for the agency.
                </p>
              </div>
            </div>
            
            <div className="tipping__brief-images-wrapper">
              <Image
                src="/images/tipping/brief-image-left.png"
                alt="Woman with QR code"
                width={193}
                height={566}
                className="tipping__brief-image-left"
                unoptimized
              />
              <Image
                src="/images/tipping/brief-image-right.png"
                alt="Waiter with QR code"
                width={198}
                height={566}
                className="tipping__brief-image-right"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

