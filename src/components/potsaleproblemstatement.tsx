import "@/styles/potsale_problemstatement.css";
import { SectionHeaderTitle } from "@/components/globalcomponents";

export default function PotsaleProblemStatement() {
  return (
    <section className="potsale__problemstatement">
      <div className="content-container">
        <SectionHeaderTitle
          topText="Problem Statement"
          bottomText="Solution"
        />
        <div className="potsale__problemstatement-content">
          <p className="text-section-header potsale__problemstatement-text">
            Build a platform that allows Kitchener/Waterloo Region potters to sell products online with less effort, additional help and trust.
          </p>
        </div>
      </div>
    </section>
  );
}

