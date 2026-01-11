import "@/styles/booked_about.css";

export default function BookedAbout() {
  return (
    <section className="booked__about">
      <div className="content-container">
        <div className="booked__about-content">
          <div className="booked__about-left">
            <div className="booked__about-logo">
              <img src="/images/booked/booked-logo.svg" alt="Booked AI Logo" />
            </div>
            <div className="booked__about-text">
              <p className="booked__about-description">
                Booked AI is a AI travel agent company in Melbourne aiming to revolutionize travel industry.
              </p>
              <p className="booked__about-fact">
                Interesting fact: I got to know this amazing group by literally walking into every coworking space and trying to hand physical resume copies :&gt;
              </p>
            </div>
          </div>
          <div className="booked__about-right">
            <p className="text-subheading booked__about-label">Client's Ask</p>
            <h2 className="text-section-subheader booked__about-title">
              Design a web application interface for the current mobile product.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

