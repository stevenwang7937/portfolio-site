import "@/styles/tipping_result.css";
import { CenteredSectionHeader } from "@/components/globalcomponents";
import TippingResultBlock from "@/components/tippingresultblock";

export default function TippingResult() {
  return (
    <section className="tipping__result">
      <div className="content-container">
        <CenteredSectionHeader
          topText="What we have acheived"
          bottomText="Results"
        />
        <div className="tipping__result-content">
          <TippingResultBlock
            title="100%"
            bottomText="Total tickets accepted rate"
          />
          <TippingResultBlock
            title="27"
            bottomText={<>Completed<br />Tickets</>}
          />
          <TippingResultBlock
            title="21 out of 27"
            bottomText="Client agrees on first draft"
          />
          <TippingResultBlock
            title="2"
            bottomText="Extra contact signed"
          />
          <TippingResultBlock
            title="+180%"
            bottomText="In generated revenue"
          />
          <TippingResultBlock
            title="18"
            bottomText="Items in SOW addressed"
          />
        </div>
      </div>
    </section>
  );
}

