import "@/styles/booked_scope.css";
import { SectionHeaderTitle } from "@/components/globalcomponents";

export default function BookedScope() {
  return (
    <section className="booked__scope">
      <div className="content-container">
        <div className="booked__scope-content">
          <div className="booked__scope-header">
            <SectionHeaderTitle 
              topText="Problem Definition" 
              bottomText="Our Scope & Gameplan" 
            />
          </div>
          
          <div className="booked__scope-main">
            <div className="booked__scope-section booked__scope-mvp">
              <h3 className="booked__scope-section-title">MVP</h3>
              <ul className="booked__scope-list">
                <li className="booked__scope-item">A web interface containing all existing features</li>
                <li className="booked__scope-item">Enabling fast and efficient trip planning and modification</li>
                <li className="booked__scope-item">Clear and excessive information display to keep users aware of progress and trip details</li>
              </ul>
            </div>
            
            <div className="booked__scope-section booked__scope-explorations">
              <h3 className="booked__scope-section-title">Explorations</h3>
              <ul className="booked__scope-list">
                <li className="booked__scope-item">B2B SaaS interface for corporate trip plannings</li>
                <li className="booked__scope-item">Contains all current features</li>
                <li className="booked__scope-item">
                  Add relevant features like
                  <ul className="booked__scope-sublist">
                    <li className="booked__scope-subitem">Approval Flows</li>
                    <li className="booked__scope-subitem">Budget Summary</li>
                  </ul>
                </li>
                <li className="booked__scope-item">MVP to showcase to potential corporate clients and investors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

