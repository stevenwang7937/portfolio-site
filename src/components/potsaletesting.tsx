import "@/styles/potsale_testing.css";
import { SectionHeaderTitle } from "@/components/globalcomponents";
import Image from "next/image";

export default function PotsaleTesting() {
  return (
    <section className="potsale__testing">
      <div className="content-container">
        <SectionHeaderTitle
          topText="Testing"
          bottomText="Feedback & Changes"
        />
        <p className="text-body potsale__testing-text">
          I have conducted usability testings with 4 active sellers in the community, 2 having an online store at the moment, 1 has done online sale before, 1 has not been doing online sale before.
          <br />
          <br />
          The result is quite positive as both features and the dashboard designs have 0% error rate and an average completion time of 4 minutes and 36 seconds for both product upload and bulk upload steps. This is higher than the benchmark 5% error rate and completion time at 6 minutes.
          <br />
          <br />
          Quantitively, the prototype received some really positive feedbacks including
        </p>
        <div className="potsale__testing-quotes">
          <p className="text-section-subheader potsale__testing-quote potsale__testing-quote--1">
            "This is useful; I would actually open up another tool to do this."
          </p>
          <p className="text-section-subheader potsale__testing-quote potsale__testing-quote--2">
            "I think this make better sense than Shopify's flow."
          </p>
          <p className="text-section-subheader potsale__testing-quote potsale__testing-quote--3">
            "I liked how this is going."
          </p>
          <p className="text-section-subheader potsale__testing-quote potsale__testing-quote--4">
            "I can get through this quite fast; I don't need to learn much."
          </p>
        </div>
        <p className="text-body potsale__testing-followup">
          However, the downside is observed as some elders test users would complain about how the dashboard is information dense, which is also hurting readability. Hence, I have made some further changes.
        </p>
        <div className="potsale__testing-changes">
          <h3 className="text-section-subheader potsale__testing-changes-title">Enlarging text for Elders</h3>
          <Image
            src="/images/potsale/testing-change.svg"
            alt="Testing changes"
            width={1200}
            height={800}
            className="potsale__testing-changes-image potsale__testing-changes-image--desktop"
            unoptimized
          />
          <Image
            src="/images/potsale/testing-change-mobile.svg"
            alt="Testing changes"
            width={1200}
            height={800}
            className="potsale__testing-changes-image potsale__testing-changes-image--mobile"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

