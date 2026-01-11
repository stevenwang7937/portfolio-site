import "@/styles/booked_results.css";
import { SectionHeaderTitle } from "@/components/globalcomponents";

export default function BookedResults() {
  return (
    <section className="booked__results">
      <div className="content-container">
        <div className="booked__results-content">
          <div className="booked__results-header">
            <SectionHeaderTitle 
              topText="Impact & Value"
              bottomText="Results"
            />
          </div>
          
          <div className="booked__results-grid">
            {/* Row 1: Block 1 and 3 */}
            <div className="booked__results-block">
              <h3 className="text-section-subheader booked__results-block-title">
                Scratch to Launch in 2 weeks
              </h3>
              <p className="text-body booked__results-block-text">
                Enabled the launch of the web application in just 2 weeks, allowing the team to be ahead of the investors outreach schedule.
              </p>
            </div>
            
            <div className="booked__results-block booked__results-block--empty"></div>
            
            <div className="booked__results-block">
              <h3 className="text-section-subheader booked__results-block-title">
                1 Incoming Corp Client finalizing
              </h3>
              <p className="text-body booked__results-block-text">
                In all the outreaches, there is an international client interested in our solution and a deal is incoming. Most information is NDA at the moment.
              </p>
            </div>
            
            <div className="booked__results-block booked__results-block--empty"></div>
            
            {/* Row 2: Block 2 and 4 */}
            <div className="booked__results-block booked__results-block--empty"></div>
            
            <div className="booked__results-block">
              <h3 className="text-section-subheader booked__results-block-title">
                50% more outreach on website
              </h3>
              <p className="text-body booked__results-block-text">
                The outreach form on the enterprise page on booked.ai would receive 50%+ more outreaching messages after the launch
              </p>
            </div>
            
            <div className="booked__results-block booked__results-block--empty"></div>
            
            <div className="booked__results-block">
              <h3 className="text-section-subheader booked__results-block-title">
                B2C before, now also B2B
              </h3>
              <p className="text-body booked__results-block-text">
                After seeing possibility in corporate solutions, Booked AI is able to outreach new types and batches clients offering white labeling service.
              </p>
            </div>
            
            {/* Row 3: Block 3 */}
            <div className="booked__results-block booked__results-block--empty"></div>
            
            <div className="booked__results-block booked__results-block--empty"></div>
            
            <div className="booked__results-block">
              <h3 className="text-section-subheader booked__results-block-title">
                Foundation to 3 new features
              </h3>
              <p className="text-body booked__results-block-text">
                The web application provides a platform and structure to incoming new travel planning features.
              </p>
            </div>
            
            <div className="booked__results-block booked__results-block--empty"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

