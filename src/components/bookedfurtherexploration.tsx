import "@/styles/booked_further_exploration.css";
import { SectionHeader } from "@/components/globalcomponents";
import BookedChat from "@/components/bookedchat";

export default function BookedFurtherExploration() {
  return (
    <section className="booked__further-exploration">
      <div className="content-container">
        <div className="booked__further-exploration-content">
          <div className="booked__further-exploration-header">
            <SectionHeader 
              topText="New Opportunities"
              bottomText="Further Explorations"
              description="With this web application setup, we would not only be able to give everyday consumer a better experience, but also opens doors to corporate travel solution as a software service."
            />
          </div>
          
          <div className="booked__further-exploration-main">
            <h3 className="text-subheading booked__further-exploration-title">
              Main Corporate Pain Points
            </h3>
            
            <div className="booked__further-exploration-chatboxes">
              <div className="booked__further-exploration-chatbox booked__further-exploration-chatbox-1">
                <BookedChat text="Complex Approval Flows exist in legacy systems" />
              </div>
              
              <div className="booked__further-exploration-chatbox booked__further-exploration-chatbox-2">
                <BookedChat text="Disconnection between travel booking system with corporate management system" />
              </div>
              
              <div className="booked__further-exploration-chatbox booked__further-exploration-chatbox-3">
                <BookedChat text="Wants to save time in searching for flights and accommodation options" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

