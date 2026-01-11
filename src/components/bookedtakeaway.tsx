import "@/styles/booked_takeaway.css";
import { SectionHeaderTitle } from "@/components/globalcomponents";

export default function BookedTakeaway() {
  return (
    <section className="booked__takeaway">
      <div className="content-container">
        <div className="booked__takeaway-content">
          <div className="booked__takeaway-header">
            <SectionHeaderTitle 
              topText="Research Outcome" 
              bottomText="Main Takeaways" 
            />
          </div>
          
          <div className="booked__takeaway-item booked__takeaway-item-1">
            <svg className="booked__takeaway-line" viewBox="0 0 1 100" preserveAspectRatio="none">
              <line x1="0" y1="0" x2="0" y2="100" stroke="rgba(255, 255, 255, 1)" strokeWidth="1" vectorEffect="non-scaling-stroke"/>
            </svg>
            <div className="booked__takeaway-item-inner booked__takeaway-item-inner-1">
              <h3 className="booked__takeaway-item-title">
                Larger screen = more possibility for content
              </h3>
              <div className="booked__takeaway-item-content">
                <p className="booked__takeaway-text">
                  Meaningful content! Content that can <span className="booked__takeaway-highlight">help drive travel decisions</span>
                </p>
                <p className="booked__takeaway-text">
                  Opportunity for additional features like searching and planning so that users can take control.
                </p>
              </div>
            </div>
          </div>
          
          <div className="booked__takeaway-item booked__takeaway-item-2">
            <svg className="booked__takeaway-line" viewBox="0 0 1 100" preserveAspectRatio="none">
              <line x1="0" y1="0" x2="0" y2="100" stroke="rgba(255, 255, 255, 1)" strokeWidth="1" vectorEffect="non-scaling-stroke"/>
            </svg>
            <div className="booked__takeaway-item-inner booked__takeaway-item-inner-2">
              <h3 className="booked__takeaway-item-title">
                Build for Trust
              </h3>
              <div className="booked__takeaway-item-content">
                <p className="booked__takeaway-text">
                  Show excessive information, repeat users' inputs, double-triple check.
                </p>
                <p className="booked__takeaway-text">
                  Make navigation easy so that users <span className="booked__takeaway-highlight">won't ever think about clicking back button</span> on browser.
                </p>
              </div>
            </div>
          </div>
          
          <div className="booked__takeaway-item booked__takeaway-item-3">
            <svg className="booked__takeaway-line" viewBox="0 0 1 100" preserveAspectRatio="none">
              <line x1="0" y1="0" x2="0" y2="100" stroke="rgba(255, 255, 255, 1)" strokeWidth="1" vectorEffect="non-scaling-stroke"/>
            </svg>
            <div className="booked__takeaway-item-inner booked__takeaway-item-inner-3">
              <h3 className="booked__takeaway-item-title">
                Expand!
              </h3>
              <div className="booked__takeaway-item-content">
                <p className="booked__takeaway-text">
                  AI is a core to unlimitedness, grasp all opportunities that can improve people's experience.
                </p>
                <p className="booked__takeaway-text">
                  Have an established system for further expansion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

