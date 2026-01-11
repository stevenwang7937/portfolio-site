import ProjectNavbar from "@/components/project-navbar";
import MobileNavbar from "@/components/mobile-navbar";
import OpentextHero from "@/components/opentexthero";
import OpentextBackground from "@/components/opentextbackground";
import OpentextBrief from "@/components/opentextbrief";
import OpentextComponents from "@/components/opentextcomponents";
import OpentextTokens from "@/components/opentexttokens";
import OpentextFollowup from "@/components/opentextfollowup";
import OpentextMemories from "@/components/opentextmemories";
import "@/styles/navbar.css";
import "@/styles/mobile-navbar.css";
import "@/styles/opentext_hero.css";
import "@/styles/opentext_background.css";
import "@/styles/opentext_brief.css";
import "@/styles/opentext_components.css";
import "@/styles/opentext_tokens.css";
import "@/styles/opentext_followup.css";
import "@/styles/opentext_memories.css";
import { ProjectIntroCards, ProjectEnding } from "@/components/globalcomponents";


export default function OpentextPage() {
  return (
    <main className="opentext">
      <ProjectNavbar />
      <MobileNavbar />
      <OpentextHero />
      <ProjectIntroCards
          mainObjectiveText="Establish new modes for design system components"
          teamText="Designer - team of 5"
          timelineText="3 Months"
          resultText="10+ components in 4 modes with mockups and reusable guidelines"
      />
      <OpentextBackground />
      <OpentextBrief />
      <OpentextComponents />
      <OpentextTokens />
      <OpentextFollowup />
      <OpentextMemories />
      {/* Add your content here */}
      <ProjectEnding nextCaseLink="/potsale" />
    </main>
  );
}

