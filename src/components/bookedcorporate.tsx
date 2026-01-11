import "@/styles/booked_corporate.css";
import { FeatureDisplayVideo } from "@/components/globalcomponents";

export default function BookedCorporate() {
  return (
    <section className="booked__corporate">
      <div className="content-container">
        <div className="booked__corporate-content">
          <FeatureDisplayVideo 
            title="Corporate Solution"
            description="Designing a flow for corporate users to use Booked AI to manage company travels."
            videoSrc="/images/booked/booked-corp.mp4"
          />
          
          <FeatureDisplayVideo 
            title="Partnership page on website"
            description="Designing a website page for potential corporate clients to outreach for partnerships."
            videoSrc="/images/booked/booked-partner.mp4"
          />
          
          <p className="text-section-subheader booked__corporate-link">
            Check out <a href="https://www.booked.ai/partner" target="_blank" rel="noopener noreferrer">https://www.booked.ai/partner</a>
          </p>
        </div>
      </div>
    </section>
  );
}

