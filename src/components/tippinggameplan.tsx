import "@/styles/tipping_gameplan.css";
import Image from "next/image";
import { CenteredSectionHeader } from "@/components/globalcomponents";

export default function TippingGamePlan() {
  return (
    <section className="tipping__gameplan">
      <div className="content-container">
        <CenteredSectionHeader
          topText="How we approach"
          bottomText="Our Game Plan"
        />
        <div className="tipping__gameplan-image-wrapper">
          <Image
            src="/images/tipping/game-plan.svg"
            alt="Game Plan"
            width={1200}
            height={800}
            className="tipping__gameplan-image tipping__gameplan-image--desktop"
            unoptimized
          />
          <Image
            src="/images/tipping/game-plan-mobile.svg"
            alt="Game Plan"
            width={261}
            height={972}
            className="tipping__gameplan-image tipping__gameplan-image--mobile"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

