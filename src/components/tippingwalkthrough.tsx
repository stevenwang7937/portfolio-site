import "@/styles/tipping_walkthrough.css";
import TippingBlock from "@/components/tippingblock";
import { CenteredSectionHeader } from "@/components/globalcomponents";
import Image from "next/image";

export default function TippingWalkthrough() {
  return (
    <section className="tipping__walkthrough">
      <div className="content-container">
        <div className="tipping__walkthrough-header">
          <CenteredSectionHeader
            topText="Acquiring more information"
            bottomText="Flow Walkthrough with Client"
            description="What other ways would be better to acquire information faster than consulting our client?"
          />
        </div>
        <div className="tipping__walkthrough-grid">
          <TippingBlock
            type="situation"
            textContent="The first person showing up will be required to set up the shift with tip distribution mechanism, hours, etc. There is also no flow when tipping lead gets off shift."
          />
          <TippingBlock
            type="situation"
            textContent="There is no restrictions in when a person can go on shift or not."
          />
          <TippingBlock
            type="recommendation"
            textContent="Setup Biometrics and restrictions on the organization level to avoid frauds."
          />
          <TippingBlock
            type="recommendation"
            textContent="Tipping lead and employee should see slightly different screens. Allow tipping lead to transition the power to people on shift, in case anything needs editing."
          />
          <TippingBlock
            type="situation"
            textContent="Customers are shown processing fees, given the option to include or not. Then pay. That is confusing and unclear."
          />
          <TippingBlock
            type="situation"
            textContent="Popup messages appear after submission and usually without actionable recommendations"
          />
          <div className="tipping__walkthrough-zoom">
            <Image
              src="/images/tipping/zoom-call.png"
              alt="Zoom call interface"
              width={400}
              height={400}
              className="tipping__walkthrough-zoom-image"
              unoptimized
            />
          </div>
          <TippingBlock
            type="recommendation"
            textContent="including processing fee in tip total amount, as opposed to proving tip amount + processing fee. Shorter flow so that customers can pay more easily."
          />
          <TippingBlock
            type="recommendation"
            textContent="Providing actionable error messages in real time, with context, upon entry of the data. Including helper messages to guide the user."
          />
          
          {/* Vertical chains */}
          <Image
            src="/images/tipping/walkthrough-chain-vertical.png"
            alt=""
            width={50}
            height={200}
            className="tipping__walkthrough-chain vertical-1"
            unoptimized
          />
          <Image
            src="/images/tipping/walkthrough-chain-vertical.png"
            alt=""
            width={50}
            height={200}
            className="tipping__walkthrough-chain vertical-2"
            unoptimized
          />
          <Image
            src="/images/tipping/walkthrough-chain-vertical.png"
            alt=""
            width={50}
            height={200}
            className="tipping__walkthrough-chain vertical-3"
            unoptimized
          />
          <Image
            src="/images/tipping/walkthrough-chain-vertical.png"
            alt=""
            width={50}
            height={200}
            className="tipping__walkthrough-chain vertical-4"
            unoptimized
          />
          
          {/* Horizontal chains */}
 
          <Image
            src="/images/tipping/walkthrough-chain-horizontal.png"
            alt=""
            width={200}
            height={50}
            className="tipping__walkthrough-chain horizontal-2"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

