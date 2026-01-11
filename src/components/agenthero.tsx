import "@/styles/agent_hero.css";

export default function AgentHero() {
  return (
    <section className="agent__hero">
      <div className="content-container">
        <div className="agent__content">
          <h1 className="text-display agent__title">AI Agent <br /> Research</h1>
          <div className="text-body agent__meta">
            <p className="agent__meta-item">Client Project</p>
            <p className="agent__meta-item">Solo</p>
            <p className="agent__meta-item">Competitor Research</p>
          </div>
        </div>
      </div>
    </section>
  );
}

