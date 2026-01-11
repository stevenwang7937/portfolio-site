import "@/styles/booked_swot_grid.css";
import BookedSwotCard from "@/components/bookedswotcard";

export default function BookedSwotGrid() {
  return (
    <div className="booked-swot-grid">
      <div className="booked-swot-grid__line booked-swot-grid__line--vertical"></div>
      <div className="booked-swot-grid__line booked-swot-grid__line--horizontal"></div>
      
      <BookedSwotCard 
        direction="top-left"
        title="Strength"
        content="Our competitors have hands-on experience in the travel industry, serving travellers from start to end. This firsthand knowledge of workflows and pain points gives them a clearer understanding of the problem space."
      />
      <BookedSwotCard 
        direction="top-right"
        title="Weakness"
        content="The problem space still faces challenges. There are some fundamental things like travellers' emotions or chaos that AI model nowadays would not be able to best solve."
      />
      <BookedSwotCard 
        direction="bottom-left"
        title="Opportunity"
        content="Our competitors have not yet conquered all pain points in travel yet. In other words, the current AI solutions still feels like a ChatGPT in a different interface. Most solutions don't have booking capabilities which WE HAVE."
      />
      <BookedSwotCard 
        direction="bottom-right"
        title="Threat"
        content="The industry is developing at an extraordinary speed, With all those investments, companies like Layla would have the resources to map out the features faster than us."
      />
    </div>
  );
}

