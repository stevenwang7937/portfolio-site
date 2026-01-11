import "@/styles/potsale_vision.css";
import { SectionHeaderTitle } from "@/components/globalcomponents";

export default function PotsaleVision() {
  return (
    <section className="potsale__vision">
      <div className="content-container">
        <div className="potsale__vision-header">
          <SectionHeaderTitle
            topText="Product Vision"
            bottomText="And what impact would this have?"
          />
        </div>
        <div className="potsale__vision-content">
          <div className="potsale__vision-item potsale__vision-item--top-right">
            <h3 className="text-subheading potsale__vision-title">We are <span style={{ color: '#F9B247' }}>local</span>.</h3>
            <p className="text-body potsale__vision-description">
              So we focus more on local artists, enabling richer communication beyond sales. This also enables more delivery methods, making the shipping less of a must in the online selling experience.
            </p>
          </div>
          <div className="potsale__vision-item potsale__vision-item--middle-left">
            <h3 className="text-subheading potsale__vision-title">We believe we should <span style={{ color: '#F9B247' }}>bring everyone in</span>.</h3>
            <p className="text-body potsale__vision-description">
              Enabling all professional and amateurs, from elders to teenagers, the joy of selling and making pottery. Removing friction points in logistics and online set up itself.
            </p>
          </div>
          <div className="potsale__vision-item potsale__vision-item--bottom-center">
            <h3 className="text-subheading potsale__vision-title">And <span style={{ color: '#F9B247' }}>empowering</span> all potters on parts they are less good at.</h3>
            <p className="text-body potsale__vision-description">
              Making impact as a community together, letting more people to appreciate handmade pottery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

