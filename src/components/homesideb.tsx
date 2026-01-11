import "@/styles/home_sideb.css";
import Image from "next/image";

export default function HomeSideB() {
  return (
    <section id="life" className="home_sideb">
      <div className="home_sideb__inner">
        <div className="home_sideb__header">
          <div className="home_sideb__rule" />
          <div className="home_sideb__question-wrapper">
            <p className="text-body home_sideb__question">Want to see more?</p>
            
          <div className="home_sideb__title-wrapper">
            <Image
              src="/portfolio-side-b/side-b-icon.svg"
              alt=""
              width={40}
              height={40}
              className="home_sideb__icon"
            />
            <h2 className="text-display home_sideb__title">My Side B</h2>
            <Image
              src="/portfolio-side-b/side-b-icon.svg"
              alt=""
              width={40}
              height={40}
              className="home_sideb__icon"
            />
          </div>
          </div>
          <div className="home_sideb__rule" />
        </div>

        <ul className="home_sideb__list">
          <li>
            <div className="home_sideb__item-bar" data-gallery="blog">
              <span className="text-subheading home_sideb__item">I blog.</span>
            </div>
            {/* Mobile gallery - Blog */}
            <div className="home_sideb__gallery-mobile home_sideb__gallery-mobile--blog">
              <div className="home_sideb__gallery-image">
                <Image
                  src="/portfolio-side-b/blog-1.png"
                  alt=""
                  width={300}
                  height={400}
                  className="home_sideb__gallery-img"
                />
              </div>
              <div className="home_sideb__gallery-image">
                <Image
                  src="/portfolio-side-b/blog-2.png"
                  alt=""
                  width={300}
                  height={400}
                  className="home_sideb__gallery-img"
                />
              </div>
              <div className="home_sideb__gallery-image">
                <Image
                  src="/portfolio-side-b/blog-3.png"
                  alt=""
                  width={300}
                  height={400}
                  className="home_sideb__gallery-img"
                />
              </div>
            </div>
          </li>
          <li>
            <div className="home_sideb__item-bar" data-gallery="tarot">
              <span className="text-subheading home_sideb__item">I read Tarot.</span>
            </div>
            {/* Mobile gallery - Tarot */}
            <div className="home_sideb__gallery-mobile home_sideb__gallery-mobile--tarot">
              <div className="home_sideb__gallery-image">
                <Image
                  src="/portfolio-side-b/tarot-1.png"
                  alt=""
                  width={300}
                  height={400}
                  className="home_sideb__gallery-img"
                />
              </div>
              <div className="home_sideb__gallery-image">
                <Image
                  src="/portfolio-side-b/tarot-2.png"
                  alt=""
                  width={300}
                  height={400}
                  className="home_sideb__gallery-img"
                />
              </div>
              <div className="home_sideb__gallery-image">
                <Image
                  src="/portfolio-side-b/tarot-3.png"
                  alt=""
                  width={300}
                  height={400}
                  className="home_sideb__gallery-img"
                />
              </div>
            </div>
          </li>
          <li>
            <div className="home_sideb__item-bar" data-gallery="pottery">
              <span className="text-subheading home_sideb__item">I do pottery.</span>
            </div>
            {/* Mobile gallery - Pottery */}
            <div className="home_sideb__gallery-mobile home_sideb__gallery-mobile--pottery">
              <div className="home_sideb__gallery-image">
                <Image
                  src="/portfolio-side-b/pottery-1.png"
                  alt=""
                  width={300}
                  height={400}
                  className="home_sideb__gallery-img"
                />
              </div>
              <div className="home_sideb__gallery-image">
                <Image
                  src="/portfolio-side-b/pottery-2.png"
                  alt=""
                  width={300}
                  height={400}
                  className="home_sideb__gallery-img"
                />
              </div>
              <div className="home_sideb__gallery-image">
                <Image
                  src="/portfolio-side-b/pottery-3.png"
                  alt=""
                  width={300}
                  height={400}
                  className="home_sideb__gallery-img"
                />
              </div>
            </div>
          </li>
          <li>
            <div className="home_sideb__item-bar" data-gallery="illos">
              <span className="text-subheading home_sideb__item">I draw illustrations.</span>
            </div>
            {/* Mobile gallery - Illustrations */}
            <div className="home_sideb__gallery-mobile home_sideb__gallery-mobile--illos">
              <div className="home_sideb__gallery-image">
                <Image
                  src="/portfolio-side-b/illos-1.png"
                  alt=""
                  width={300}
                  height={400}
                  className="home_sideb__gallery-img"
                />
              </div>
              <div className="home_sideb__gallery-image">
                <Image
                  src="/portfolio-side-b/illos-2.png"
                  alt=""
                  width={300}
                  height={400}
                  className="home_sideb__gallery-img"
                />
              </div>
              <div className="home_sideb__gallery-image">
                <Image
                  src="/portfolio-side-b/illos-3.png"
                  alt=""
                  width={300}
                  height={400}
                  className="home_sideb__gallery-img"
                />
              </div>
            </div>
          </li>
          <li>
            <div className="home_sideb__item-bar" data-gallery="none">
              <span className="text-subheading home_sideb__item">
                I develop my own products. <span className="home_sideb__coming-soon">(Coming soon)</span>
              </span>
            </div>
          </li>
          <li>
            <div className="home_sideb__item-bar" data-gallery="freelance">
              <span className="text-subheading home_sideb__item">I do freelance.</span>
            </div>
            {/* Mobile gallery - Freelance */}
            <div className="home_sideb__gallery-mobile home_sideb__gallery-mobile--freelance">
              <div className="home_sideb__gallery-image">
                <Image
                  src="/portfolio-side-b/freelance-1.png"
                  alt=""
                  width={300}
                  height={400}
                  className="home_sideb__gallery-img"
                />
              </div>
              <div className="home_sideb__gallery-image">
                <Image
                  src="/portfolio-side-b/freelance-2.png"
                  alt=""
                  width={300}
                  height={400}
                  className="home_sideb__gallery-img"
                />
              </div>
              <div className="home_sideb__gallery-image">
                <Image
                  src="/portfolio-side-b/freelance-3.png"
                  alt=""
                  width={300}
                  height={400}
                  className="home_sideb__gallery-img"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* Image gallery that appears on hover - Blog */}
      <div className="home_sideb__gallery home_sideb__gallery--blog">
        <div className="home_sideb__gallery-image">
          <Image
            src="/portfolio-side-b/blog-1.png"
            alt=""
            width={300}
            height={400}
            className="home_sideb__gallery-img"
          />
        </div>
        <div className="home_sideb__gallery-image">
          <Image
            src="/portfolio-side-b/blog-2.png"
            alt=""
            width={300}
            height={400}
            className="home_sideb__gallery-img"
          />
        </div>
        <div className="home_sideb__gallery-image">
          <Image
            src="/portfolio-side-b/blog-3.png"
            alt=""
            width={300}
            height={400}
            className="home_sideb__gallery-img"
          />
        </div>
      </div>

      {/* Image gallery - Tarot */}
      <div className="home_sideb__gallery home_sideb__gallery--tarot">
        <div className="home_sideb__gallery-image">
          <Image
            src="/portfolio-side-b/tarot-1.png"
            alt=""
            width={300}
            height={400}
            className="home_sideb__gallery-img"
          />
        </div>
        <div className="home_sideb__gallery-image">
          <Image
            src="/portfolio-side-b/tarot-2.png"
            alt=""
            width={300}
            height={400}
            className="home_sideb__gallery-img"
          />
        </div>
        <div className="home_sideb__gallery-image">
          <Image
            src="/portfolio-side-b/tarot-3.png"
            alt=""
            width={300}
            height={400}
            className="home_sideb__gallery-img"
          />
        </div>
      </div>

      {/* Image gallery - Pottery */}
      <div className="home_sideb__gallery home_sideb__gallery--pottery">
        <div className="home_sideb__gallery-image">
          <Image
            src="/portfolio-side-b/pottery-1.png"
            alt=""
            width={300}
            height={400}
            className="home_sideb__gallery-img"
          />
        </div>
        <div className="home_sideb__gallery-image">
          <Image
            src="/portfolio-side-b/pottery-2.png"
            alt=""
            width={300}
            height={400}
            className="home_sideb__gallery-img"
          />
        </div>
        <div className="home_sideb__gallery-image">
          <Image
            src="/portfolio-side-b/pottery-3.png"
            alt=""
            width={300}
            height={400}
            className="home_sideb__gallery-img"
          />
        </div>
      </div>

      {/* Image gallery - Illustrations */}
      <div className="home_sideb__gallery home_sideb__gallery--illos">
        <div className="home_sideb__gallery-image">
          <Image
            src="/portfolio-side-b/illos-1.png"
            alt=""
            width={300}
            height={400}
            className="home_sideb__gallery-img"
          />
        </div>
        <div className="home_sideb__gallery-image">
          <Image
            src="/portfolio-side-b/illos-2.png"
            alt=""
            width={300}
            height={400}
            className="home_sideb__gallery-img"
          />
        </div>
        <div className="home_sideb__gallery-image">
          <Image
            src="/portfolio-side-b/illos-3.png"
            alt=""
            width={300}
            height={400}
            className="home_sideb__gallery-img"
          />
        </div>
      </div>

      {/* Image gallery - Freelance */}
      <div className="home_sideb__gallery home_sideb__gallery--freelance">
        <div className="home_sideb__gallery-image">
          <Image
            src="/portfolio-side-b/freelance-1.png"
            alt=""
            width={300}
            height={400}
            className="home_sideb__gallery-img"
          />
        </div>
        <div className="home_sideb__gallery-image">
          <Image
            src="/portfolio-side-b/freelance-2.png"
            alt=""
            width={300}
            height={400}
            className="home_sideb__gallery-img"
          />
        </div>
        <div className="home_sideb__gallery-image">
          <Image
            src="/portfolio-side-b/freelance-3.png"
            alt=""
            width={300}
            height={400}
            className="home_sideb__gallery-img"
          />
        </div>
      </div>
    </section>
  );
}

