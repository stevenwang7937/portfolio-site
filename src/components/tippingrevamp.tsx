import "@/styles/tipping_revamp.css";
import { CenteredSectionHeader } from "@/components/globalcomponents";
import Image from "next/image";

export default function TippingRevamp() {
  return (
    <section className="tipping__revamp">
      <div className="content-container">
        <CenteredSectionHeader
          topText="Changing the Aesthetic"
          bottomText="Visual Revamp - How we address"
        />
        <div className="tipping__revamp-content">
          <h2 className="text-section-subheader tipping__revamp-title">
            For Professional Theme, We...
          </h2>
          <div className="tipping__revamp-items">
            <div className="tipping__revamp-item">
              <Image
                src="/images/tipping/revamp-1-1.svg"
                alt="Use Larger card designs"
                width={300}
                height={300}
                className="tipping__revamp-image"
                unoptimized
              />
              <p className="text-body tipping__revamp-text">
                Use Larger card designs
              </p>
            </div>
            <Image
              src="/images/tipping/Arrow.svg"
              alt=""
              width={60}
              height={60}
              className="tipping__revamp-arrow"
              unoptimized
            />
            <div className="tipping__revamp-item">
              <Image
                src="/images/tipping/revamp-1-2.svg"
                alt="Consistency throughout app"
                width={300}
                height={300}
                className="tipping__revamp-image"
                unoptimized
              />
              <p className="text-body tipping__revamp-text">
                Consistency throughout app
              </p>
            </div>
            <Image
              src="/images/tipping/Arrow.svg"
              alt=""
              width={60}
              height={60}
              className="tipping__revamp-arrow"
              unoptimized
            />
            <div className="tipping__revamp-item">
              <Image
                src="/images/tipping/revamp-1-3.svg"
                alt="Fix Contrast Issues"
                width={300}
                height={300}
                className="tipping__revamp-image"
                unoptimized
              />
              <p className="text-body tipping__revamp-text">
                Fix Contrast Issues
              </p>
            </div>
          </div>
        </div>
        <div className="tipping__revamp-visual">
          <Image
            src="/images/tipping/revamp-1-visual.svg"
            alt="Visual revamp illustration"
            width={1200}
            height={600}
            className="tipping__revamp-visual-image tipping__revamp-visual-image--desktop"
            unoptimized
          />
          <Image
            src="/images/tipping/revamp-1-visual-mobile.svg"
            alt="Visual revamp illustration mobile"
            width={750}
            height={1500}
            className="tipping__revamp-visual-image tipping__revamp-visual-image--mobile"
            unoptimized
          />
        </div>
        <div className="tipping__revamp-content">
          <h2 className="text-section-subheader tipping__revamp-title">
            For a better visual experience, We...
          </h2>
          <div className="tipping__revamp-items">
            <div className="tipping__revamp-item">
              <Image
                src="/images/tipping/revamp-2-1.svg"
                alt="Remove high saturation colors"
                width={300}
                height={300}
                className="tipping__revamp-image"
                unoptimized
              />
              <p className="text-body tipping__revamp-text">
                Remove high saturation colors
              </p>
            </div>
            <Image
              src="/images/tipping/Arrow.svg"
              alt=""
              width={60}
              height={60}
              className="tipping__revamp-arrow"
              unoptimized
            />
            <div className="tipping__revamp-item">
              <Image
                src="/images/tipping/revamp-2-2.svg"
                alt="Use a grey palette for background"
                width={300}
                height={300}
                className="tipping__revamp-image"
                unoptimized
              />
              <p className="text-body tipping__revamp-text">
                Use a grey palette for background
              </p>
            </div>
            <Image
              src="/images/tipping/Arrow.svg"
              alt=""
              width={60}
              height={60}
              className="tipping__revamp-arrow"
              unoptimized
            />
            <div className="tipping__revamp-item">
              <Image
                src="/images/tipping/revamp-2-3.svg"
                alt="Only use bright colors to highlight"
                width={300}
                height={300}
                className="tipping__revamp-image"
                unoptimized
              />
              <p className="text-body tipping__revamp-text">
                Only use bright colors to <span className="tipping__revamp-highlight">highlight</span>
              </p>
            </div>
          </div>
        </div>
        <div className="tipping__revamp-visual">
          <Image
            src="/images/tipping/revamp-2-visual.svg"
            alt="Visual revamp illustration"
            width={1200}
            height={600}
            className="tipping__revamp-visual-image tipping__revamp-visual-image--desktop"
            unoptimized
          />
          <Image
            src="/images/tipping/revamp-2-visual-mobile.svg"
            alt="Visual revamp illustration mobile"
            width={750}
            height={1500}
            className="tipping__revamp-visual-image tipping__revamp-visual-image--mobile"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

