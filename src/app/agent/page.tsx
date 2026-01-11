import ProjectNavbar from "@/components/project-navbar";
import MobileNavbar from "@/components/mobile-navbar";
import AgentHero from "@/components/agenthero";
import AgentBrief from "@/components/agentbrief";
import AgentOwnExperience from "@/components/agentownexperience";
import AgentUserJourneyMap from "@/components/agentuserjourneymap";
import AgentOthers from "@/components/agentothers";
import AgentQuantitative from "@/components/agentquantitative";
import AgentData from "@/components/agentdata";
import AgentFeatureList from "@/components/agentfeaturelist";
import AgentResult from "@/components/agentresult";
import "@/styles/navbar.css";
import "@/styles/mobile-navbar.css";
import "@/styles/agent_hero.css";
import { ProjectIntroCards, ProjectEnding } from "@/components/globalcomponents";


export default function AgentPage() {
  return (
    <main className="agent">
      <ProjectNavbar />
      <MobileNavbar />
      <AgentHero />
      <ProjectIntroCards
          mainObjectiveText="Help client understand their competitors in AI agent market"
          teamText="Solo"
          timelineText="2 Weeks"
          resultText="5 page report for 6 competitors with recommendations"
      />
      <AgentBrief />
      <AgentOwnExperience />
      <AgentUserJourneyMap />
      <AgentOthers />
      <AgentQuantitative />
      <AgentData />
      <AgentFeatureList />
      <AgentResult />
      <ProjectEnding nextCaseLink="/opentext" />
    </main>
  );
}

