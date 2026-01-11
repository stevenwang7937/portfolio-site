import "@/styles/booked_intro.css";
import { SectionHeaderTitle } from "@/components/globalcomponents";

export default function BookedIntro() {
  return (
    <section className="booked__intro">
      <div className="content-container">
        <div className="booked__intro-content">
          <div className="booked__intro-header">
            <SectionHeaderTitle 
              topText="Project Brief" 
              bottomText="Booked AI Web Application" 
            />
          </div>
          <div className="booked__intro-main">
            <div className="booked__intro-image">
              <img src="/images/booked/intro-image.png" alt="Booked AI Web Application" />
            </div>
            <div className="booked__intro-text">
              <div className="booked__intro-details">
                <div className="booked__intro-detail">
                  <h3 className="text-subheading booked__intro-label">Main Objective</h3>
                  <p className="text-body booked__intro-value">Design a web application interface based on current mobile app and brand guidelines.</p>
                </div>
                <div className="booked__intro-detail">
                  <h3 className="text-subheading booked__intro-label">My Contribution</h3>
                  <p className="text-body booked__intro-value">Designed Web App MVP and B2B Solution, resulting in a currently-finalizing corporate deal.</p>
                </div>
                <div className="booked__intro-detail">
                  <h3 className="text-subheading booked__intro-label">Team and Role</h3>
                  <p className="text-body booked__intro-value">Working as Lead Designer, working with CEO and CTO.</p>
                </div>
                <div className="booked__intro-detail">
                  <h3 className="text-subheading booked__intro-label">Time Span and result</h3>
                  <p className="text-body booked__intro-value">MVP flows finished in 5 weeks, B2B solution finished in 1 week.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

