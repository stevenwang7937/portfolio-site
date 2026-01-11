import "@/styles/potsale_hero.css";

export default function PotsaleHero() {
  return (
    <section className="potsale__hero">
      <div className="content-container">
        <div className="potsale__content">
          <h1 className="text-display potsale__title">Potsale</h1>
          <div className="text-body potsale__meta">
            <p className="potsale__meta-item">Personal Project</p>
            <p className="potsale__meta-item">Solo</p>
            <p className="potsale__meta-item">E-commerce Seller Dashboard Design</p>
          </div>
        </div>
      </div>
    </section>
  );
}

