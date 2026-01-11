import "@/styles/booked_features.css";
import { SectionHeaderTitle, FeatureDisplayVideo } from "@/components/globalcomponents";

export default function BookedFeatures() {
  return (
    <section id="result" className="booked__features">
      <div className="content-container">
        <div className="booked__features-content">
          <div className="booked__features-header">
            <SectionHeaderTitle 
              topText="Design Features" 
              bottomText="Design Features" 
            />
          </div>
          
          <div className="booked__features-videos">
            <FeatureDisplayVideo 
              title="Mobile Result UI"
              description="Designing a flow to display and give user three options that AI came up with."
              videoSrc="/images/booked/booked-mobile.mp4"
            />
            
            <FeatureDisplayVideo 
              title="Web App Booking"
              description="Designing a flow to display and give user three options that AI came up with."
              videoSrc="/images/booked/booked-webapp.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

