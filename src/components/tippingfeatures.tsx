import "@/styles/tipping_features.css";
import { FeatureDisplayVideo, CenteredSectionHeader } from "@/components/globalcomponents";

export default function TippingFeatures() {
  return (
    <section id="result" className="tipping__features">
      <div className="content-container">
        <div className="tipping__features-header">
          <CenteredSectionHeader
            topText="Design Features"
            bottomText="Design Features"
          />
        </div>
        <div className="tipping__features-content">
          <FeatureDisplayVideo
            title="Start a Shift"
            description="Service providers would be able to set up the team's shifts for today with ease in management and great accuracy."
            videoSrc="/images/tipping/tipping-shift.mp4"
          />
          <FeatureDisplayVideo
            title="End Shift"
            description="Tipping lead would end the shift by transfering the responsibility to other team members, or continue to lead even if they are off shift."
            videoSrc="/images/tipping/tipping-end.mp4"
          />
          <FeatureDisplayVideo
            title="Biometics Restriction"
            description="Verify service provider's geographic location when they want to start shift"
            videoSrc="/images/tipping/tipping-error.mp4"
          />
        </div>
      </div>
    </section>
  );
}

