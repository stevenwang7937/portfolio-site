import ProjectNavbar from "@/components/project-navbar";
import MobileNavbar from "@/components/mobile-navbar";
import PotsaleHero from "@/components/potsalehero";
import PotsaleIncentives from "@/components/potsaleincentives";
import PotsaleResearch from "@/components/potsaleresearch";
import PotsalePainpoints from "@/components/potsalepainpoints";
import PotsaleProblemStatement from "@/components/potsaleproblemstatement";
import PotsaleVision from "@/components/potsalevision";
import PotsaleDesign from "@/components/potsaledesign";
import PotsaleTesting from "@/components/potsaletesting";
import "@/styles/navbar.css";
import "@/styles/mobile-navbar.css";
import "@/styles/potsale_hero.css";
import "@/styles/potsale_incentives.css";
import "@/styles/potsale_research.css";
import "@/styles/potsale_painpoints.css";
import "@/styles/potsale_problemstatement.css";
import "@/styles/potsale_vision.css";
import "@/styles/potsale_design.css";
import "@/styles/potsale_testing.css";
import { ProjectEnding, ProjectIntroCards, ProjectTakeaway } from "@/components/globalcomponents";
import JumpToResult from "@/components/jumptoresult";

export default function PotsalePage() {
  return (
    <main className="potsale">
      <ProjectNavbar />
      <MobileNavbar />
      <PotsaleHero />
      <ProjectIntroCards
          mainObjectiveText="Help encourage potters to online sale by removing friction"
          teamText="Solo"
          timelineText="3 Months"
          resultText="Prototype that gets 100% task success rate in testing"
      />
      <PotsaleIncentives />
      <JumpToResult imageSrc="/images/potsale/potsale-upload-image.png" /> 
      <PotsaleResearch />
      <PotsalePainpoints />
      <PotsaleProblemStatement />
      <PotsaleVision />
      <PotsaleDesign />
      <PotsaleTesting />
      <ProjectTakeaway text="This is actually the second personal passion project out of my university days, completed in full user-centered design approach individually. 

Usually for this type of projects, I gained the most learning. Not at the exact moment, but more after a period of time (right now when I am writing this). I can find my flaws and biases in my researches, the immature dashboard design that I was so proud of before.

These observations reminds me of my learnings along the way. By just thinking about the questions “what’s wrong about this design / step?”, I was able to become a better designer. I would always remember the passion I had when doing this project, the hopes to change the current situation for my elders friends who are so talented in pottery. And never say never, it might be live one day. 

Special thanks to Waterloo Potter’s Workshop’s great support in this project." />
      <ProjectEnding nextCaseLink="/booked" />
      {/* Add your content here */}
    </main>
  );
}

