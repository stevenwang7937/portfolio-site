import "@/styles/home_footer.css";

export default function HomeFooter() {
  return (
    <section className="home_footer">
      <div className="home_footer__inner">
        <div className="home_footer__content">
          <p className="text-body home_footer__text home_footer__text--strikethrough">
            Made with love by Steven.
          </p>
          <p className="text-body home_footer__text">
            I very much enjoyed this process of expressing myself. Thank you for viewing.
          </p>
        </div>

        <div className="home_footer__acknowledgement">
          <p className="text-body home_footer__label">Special Acknowledgement:</p>
          <p className="text-body home_footer__text">
            Inspiration by National Gallery Victoria in Melbourne, Yayoi Kusama and French Impressionist.
          </p>
        </div>

        <div className="home_footer__rights">
          <p className="text-body home_footer__text">All rights reserved</p>
        </div>
      </div>
    </section>
  );
}

