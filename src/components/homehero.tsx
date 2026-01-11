import "@/styles/home_hero.css";

export default function HomeHero() {
  return (
    <section className="home_hero">

      <div className="home_hero__content">
        <div className="home_hero__content-inner">
          <h2 className="home_hero__kicker text-subheading">I am</h2>
          <h1 className="home_hero__title text-display">Steven Wang</h1>
        </div>
        <h2 className="home_hero__subtitle text-subheading">
          Full-stack Product Designer crafting experiences from visuals to end-to-end flows
        </h2>
      </div>
    </section>
  );
}
