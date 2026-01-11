import "@/styles/potsale_incentives.css";
import { SectionHeaderTitle } from "@/components/globalcomponents";
import Image from "next/image";

export default function PotsaleIncentives() {
  return (
    <section className="potsale__incentives">
      <div className="content-container">
        <SectionHeaderTitle
          topText="Incentives"
          bottomText="Where this idea come from?"
        />
        <div className="potsale__incentives-content">
          <div className="potsale__incentives-left">
            <Image
              src="/images/potsale/image 65.png"
              alt="Potter at wheel"
              width={1200}
              height={1600}
              className="potsale__incentives-image"
              unoptimized
            />
          </div>
          <div className="potsale__incentives-middle">
            <Image
              src="/images/potsale/image 62.png"
              alt="Pottery image 1"
              width={1200}
              height={800}
              className="potsale__incentives-middle-image"
              unoptimized
            />
            <Image
              src="/images/potsale/image 64.png"
              alt="Pottery image 2"
              width={1200}
              height={800}
              className="potsale__incentives-middle-image"
              unoptimized
            />
            <Image
              src="/images/potsale/image 66.png"
              alt="Pottery image 3"
              width={1200}
              height={800}
              className="potsale__incentives-middle-image"
              unoptimized
            />
            <Image
              src="/images/potsale/image 67.png"
              alt="Pottery image 4"
              width={1200}
              height={800}
              className="potsale__incentives-middle-image"
              unoptimized
            />
          </div>
          <div className="potsale__incentives-right">
            <h3 className="text-section-subheader potsale__incentives-title">I am a potter.</h3>
            <p className="text-body potsale__incentives-text">
              I have found interest in ceramics since 14 years old and I am still in practice.
            </p>
            <p className="text-body potsale__incentives-text">
              After joining local communities in Waterloo, I have met so many great people which many are elders.
            </p>
          </div>
        </div>
        <div className="potsale__incentives-text-section">
          <p className="text-subheading potsale__incentives-statement">
            During Pandemic, lots of elder people I know are struggling turning pottery business online
          </p>
          <p className="text-subheading potsale__incentives-statement">
            due to
          </p>
          <p className="text-subheading potsale__incentives-statement">
            Complicated E-Commerce Process...
          </p>
        </div>
      </div>
    </section>
  );
}

