import "@/styles/booked_design_system.css";
import { SectionHeader } from "@/components/globalcomponents";
import Image from "next/image";

export default function BookedDesignSystem() {
  return (
    <section className="booked__design-system">
      <div className="content-container">
        <div className="booked__design-system-content">
          <div className="booked__design-system-header">
            <SectionHeader 
              topText="Design for iterative process"
              bottomText="Design System Update"
              description="Making appendments to previous established design system along the way so components on web can be reused."
            />
          </div>
          
          <div className="booked__design-system-image-wrapper">
            <Image
              src="/images/booked/booked-design-system.png"
              alt="Design System Update"
              width={2000}
              height={1500}
              className="booked__design-system-image booked__design-system-image--desktop"
            />
            <Image
              src="/images/booked/booked-design-system-mobile.png"
              alt="Design System Update"
              width={2000}
              height={1500}
              className="booked__design-system-image booked__design-system-image--mobile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

