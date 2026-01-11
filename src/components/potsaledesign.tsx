import "@/styles/potsale_design.css";
import { FeatureDisplayVideo, SectionHeaderTitle } from "@/components/globalcomponents";

export default function PotsaleDesign() {
  return (
    <section id="result" className="potsale__design">
      <div className="content-container">
        <SectionHeaderTitle
          topText="Prototype Iterations"
          bottomText="Design"
        />
      </div>
      <div className="potsale__design-content">
          <FeatureDisplayVideo
            title="Upload Widgets"
            description="Empowers sellers by generating more accurate description and better images for E-commerce while uploading new products"
            videoSrc="/images/potsale/potsale-upload.mp4"
          />
          <FeatureDisplayVideo
            title="Bulk Upload"
            description="Help easing off the workload to upload items one by one"
            videoSrc="/images/potsale/potsale-bulk.mp4"
          />
          
        </div>
    </section>
  );
}

