import "@/styles/potsale_painpoints.css";
import { SectionHeaderTitle } from "@/components/globalcomponents";

export default function PotsalePainpoints() {
  return (
    <section className="potsale__painpoints">
      <div className="content-container">
        <SectionHeaderTitle
          topText="Highlights"
          bottomText="Pain Points"
        />
        <div className="potsale__painpoints-content">
          <div className="potsale__painpoints-left">
            <h3 className="text-subheading potsale__painpoints-title">Unfamiliarity with E-Commerce</h3>
            <ul className="potsale__painpoints-list">
              <li className="text-body potsale__painpoints-item">Shipping is expensive & risky for pots</li>
              <li className="text-body potsale__painpoints-item">Unreasonable customer refunds</li>
              <li className="text-body potsale__painpoints-item">Don't know how to stand out among all pottery products</li>
            </ul>
          </div>
          <p className="text-subheading potsale__painpoints-center-text">Unpleasant Experience with <br /> Online Pottery Sale</p>
          <div className="potsale__painpoints-right">
            <h3 className="text-subheading potsale__painpoints-title">Amount of Work Needed</h3>
            <ul className="potsale__painpoints-list">
              <li className="text-body potsale__painpoints-item">Uploading takes too long</li>
              <li className="text-body potsale__painpoints-item">Bulk Uploading doesn't ease off load</li>
              <li className="text-body potsale__painpoints-item">Constant content management takes time, but won't guarantee payback</li>
            </ul>
          </div>
        </div>
        <div className="potsale__painpoints-bottom">
          <p className="text-subheading potsale__painpoints-bottom-text">Lack of Satisfaction</p>
          <ul className="potsale__painpoints-bottom-list">
            <li className="text-body potsale__painpoints-bottom-item">Lack of customer relationship</li>
            <li className="text-body potsale__painpoints-bottom-item">Worries bad experience for customers</li>
            <li className="text-body potsale__painpoints-bottom-item">Fear of making errors along the way, resulting in nuances.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

