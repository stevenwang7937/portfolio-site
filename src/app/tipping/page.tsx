import ProjectNavbar from "@/components/project-navbar";
import MobileNavbar from "@/components/mobile-navbar";
import TippingHero from "@/components/tippinghero";
import TippingBrief from "@/components/tippingbrief";
import TippingIntro from "@/components/tippingintro";
import TippingGamePlan from "@/components/tippinggameplan";
import TippingWalkthrough from "@/components/tippingwalkthrough";
import TippingResearch from "@/components/tippingresearch";
import TippingSwot from "@/components/tipingswot";
import TippingFeatures from "@/components/tippingfeatures";
import TippingRevamp from "@/components/tippingrevamp";
import TippingResult from "@/components/tippingresult";
import { ProjectIntroCard, ProjectIntroCards, CenteredSectionHeader, ProjectEnding, ProjectTakeaway } from "@/components/globalcomponents";
import "@/styles/navbar.css";
import "@/styles/mobile-navbar.css";
import "@/styles/tipping_hero.css";
import JumpToResult from "@/components/jumptoresult";

export default function TippingPage() {
  return (
    <main className="tipping">
      <ProjectNavbar />
      <MobileNavbar />
      <TippingHero />
      <ProjectIntroCards
          mainObjectiveText="Help client beta launching a mobile app on UX flows and visuals"
          teamText="Cross-functional Team of 9"
          timelineText="3 Months"
          resultText="2.5x revenue & Successful Beta Launch"
      />
      <TippingBrief />
      <TippingIntro />
      <TippingGamePlan />
      <JumpToResult imageSrc="/images/tipping/tipping-error-image.png" /> 
      <TippingWalkthrough />
      <TippingResearch />
      <TippingSwot />
      <TippingFeatures />
      <TippingRevamp />
      <TippingResult />
      <ProjectTakeaway text="This is the first time working in design agency which is quite a new experience. The work is relatively fast paced and highly dependent on clients. This means it is not necessarily a designer as the final stakeholder.

I learned lots of ways to communicate my thoughts, present my work and negotiate. Great thanks to my mentor Eadaoin, Lance and Krishma at Tribal Scale to introduce me to this new realm that I have not seen before.

This experience doesn’t limit only on UI/UX, but also lots of communication with clients, PM, engineers, as well as presenting outcomes in front of company and client. 

This gave me a clearer understanding on how client project works, fueling me in my later freelancing career. If I can handle this as the main designer, I could take on similar projects on behalf of myself." />
      <ProjectEnding nextCaseLink="/booked" />
    </main>
  );
}

