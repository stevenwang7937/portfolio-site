import "@/styles/booked_research.css";
import BookedDynamicSectionHeader from "@/components/booked_dynamic_section_header";
import { SectionHeaderTitle } from "@/components/globalcomponents";
import BookedChat from "./bookedchat";
import BookedUserChat from "./bookeduserchat";
import BookedSwotGrid from "./bookedswotgrid";
import Image from "next/image";

export default function BookedResearch() {
  return (
    <section className="booked__research">
      <div className="content-container">
        <div className="booked__research-content">
          <div className="booked__research-header">
            <BookedDynamicSectionHeader />
          </div>
          
          <div className="booked__research-main">
            <div className="booked__research-main-header">
              <SectionHeaderTitle 
                topText="About Us" 
                bottomText="Our Edge" 
              />
            </div>
            
            <div className="booked__research-columns">
              <div className="booked__research-column">
                <h3 className="text-subheading booked__research-column-title">What We Offer</h3>
                <div className="booked__research-cards">
                  <BookedChat text="Focusing on intention, not operation. We search flights based on users asks, from preferred time periods to favorite airlines or alliances." />
                  <BookedChat text="Make changes with ease, just like assigning AI agents to sort things out for you." />
                  <BookedChat text="Automatically finding the best hotel and airline tickets that would fit around the itinerary, instead of the other way around, allowing more time and focus on things that matter." />
                </div>
              </div>
              
              <div className="booked__research-column">
                <h3 className="text-subheading booked__research-column-title">What Users Want</h3>
                <div className="booked__research-cards">
                  <div className="booked__research-user-card">
                    <BookedUserChat text="A booking system that knows their travel habits when booking, generating the best booking options." />
                    <p className="booked__research-delivered">Delivered</p>
                  </div>
                  <div className="booked__research-user-card">
                    <BookedUserChat text="More flexibility in booking options, such as multi-city flights and flexible dates." />
                    <p className="booked__research-delivered">Delivered</p>
                  </div>
                  <div className="booked__research-user-card">
                    <BookedUserChat text="Most trip plannings orbits around hotel bookings and flight bookings. That is rarely taken into considerations, even with travel agents." />
                    <p className="booked__research-delivered">Delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="booked__research-competitors">
            <div className="booked__research-competitors-header">
              <SectionHeaderTitle 
                topText="About Others (Layla, Mindtrip)" 
                bottomText="Competitors Analysis" 
              />
            </div>
            
            <div className="booked__research-competitors-grid">
              <BookedSwotGrid />
            </div>
          </div>
          
          <div className="booked__research-market">
            <div className="booked__research-market-left">
              <div className="booked__research-market-left-header">
                <SectionHeaderTitle 
                  topText="About Market" 
                  bottomText="Hopes and" 
                />
              </div>
              
              <div className="booked__research-market-left-content">
                <p className="text-body">
                  It notes that the travel market is a late adopter of the AI wave, indicating "great potentials for market."
                </p>
                <p className="text-body">
                  It describes travel planning and booking as a "troublesome topic" that AI can solve.
                </p>
                <p className="text-body">
                  It highlights the booming Online Travel Agency (OTA) industry, driven by tech innovation, which gives people freedom to plan trips without traditional travel agents.
                </p>
                <p className="text-body">
                  The next wave is coming soon. And it would be with AI.
                </p>
              </div>
              
              <div className="booked__research-market-left-image">
                <Image
                  src="/images/booked/market-graph.png"
                  alt="Market trends graph showing AI Travel, Human Travel Agents, and OTA from 2024 to 2030"
                  width={800}
                  height={600}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
            
            <div className="booked__research-market-right">
              <h2 className="text-section-header booked__research-market-right-title">Concerns</h2>
              <div className="booked__research-market-right-content">
                <p className="text-body">
                  Multiple KOLs in AI industry express concerns and questions for the AI industry at this moment to solve complex problems in travel industry.
                </p>
                <p className="text-body">
                  Great human resources are still implemented, such as customer services for airlines, manual ticket checkers and tour guiding, security, as well as restaurant's open times etc., suggesting these are potential pain points or areas where AI might struggle with emergency incidents on trip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

