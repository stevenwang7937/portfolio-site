import ProjectNavbar from "@/components/project-navbar";
import MobileNavbar from "@/components/mobile-navbar";
import BookedHero from "@/components/bookedhero";
import BookedIntro from "@/components/bookedintro";
import BookedAbout from "@/components/bookedabout";
import BookedResearch from "@/components/bookedresearch";
import BookedTakeaway from "@/components/bookedtakeaway";
import BookedScope from "@/components/bookedscope";
import BookedFeatures from "@/components/bookedfeatures";
import BookedDesignSystem from "@/components/bookeddesignsystem";
import BookedFurtherExploration from "@/components/bookedfurtherexploration";
import BookedCorporate from "@/components/bookedcorporate";
import BookedResults from "@/components/bookedresults";
import JumpToResult from "@/components/jumptoresult";
import BookedChat from "@/components/bookedchat";
import BookedUserChat from "@/components/bookeduserchat";
import BookedSwotGrid from "@/components/bookedswotgrid";
import "@/styles/navbar.css";
import "@/styles/mobile-navbar.css";
import "@/styles/booked.css";
import { SectionHeader, FeatureDisplayVideo, ProjectTakeaway, ProjectEnding } from "@/components/globalcomponents";

export default function BookedPage() {
  return (
    <main className="booked">
      <ProjectNavbar />
      <MobileNavbar />
      <BookedHero />
      <BookedIntro />
      <BookedAbout />
      <JumpToResult imageSrc="/images/booked/intro-image.png" />
      <BookedResearch />
      <BookedTakeaway />
      <BookedScope />
      <BookedFeatures />
      <BookedDesignSystem />
      <BookedFurtherExploration />
      <BookedCorporate />
      <BookedResults />
      <ProjectTakeaway text="This is the first client project after my graduation. I was fully involved in the startup's fast-paced working flow in iteration and development process. With close work around the CEO and CTO, I was able to produce quality work that matches the pace of industry growth. Seeking more user friendly options in information displaying and interaction, I was also able to see how AI can change the world, also how much it is lacking comparing to a fully autonomous and intuitive agent. This experience doesn't limit only on UI/UX and engineering development process, but also lots of other aspects including marketing, sales growth, contacting investors and growing as a company. This gave me a clearer understanding on how AI startups or startups in any industry are doing. Although I might not have the full time in Australia to see Booked AI's success, I did see a snippet of how everything works." />
      <ProjectEnding nextCaseLink="/agent" />
    </main>
  );
}

