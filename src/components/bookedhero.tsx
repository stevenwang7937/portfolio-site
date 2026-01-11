import "@/styles/booked_hero.css";

export default function BookedHero() {
  return (
    <section className="booked__hero">
      <div className="content-container">
        <div className="booked__content">
          <h1 className="text-display booked__title">Booked AI<br />Web App</h1>
          <div className="text-body booked__meta">
            <p className="booked__meta-item">Internship</p>
            <p className="booked__meta-item">Lead Designer - team of 3</p>
            <p className="booked__meta-item">AI Product Web Application</p>
          </div>
        </div>
      </div>
    </section>
  );
}

