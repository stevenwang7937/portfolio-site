import "@/styles/opentext_followup.css";
import { SectionHeader } from "@/components/globalcomponents";
import Image from "next/image";

export default function OpentextFollowup() {
  return (
    <section className="opentext__followup">
      <div className="content-container">
        <div className="opentext__followup-left">
          <SectionHeader
            topText="Takeaway"
            bottomText="Carrying the knowledge with me"
            description="For legal and user experience reasons, more and more softwares provide different color modes that users can select based on their own needs."
          />
          <div className="opentext__followup-left-content">
            <Image
              src="/images/opentext/followup-left.png"
              alt="Followup left"
              width={1200}
              height={800}
              className="opentext__followup-left-image"
              unoptimized
            />
            <p className="text-body">Freelancing Project</p>
          </div>
        </div>
        <div className="opentext__followup-right">
          <Image
            src="/images/opentext/followup-right.png"
            alt="Followup right"
            width={1200}
            height={800}
            className="opentext__followup-right-image"
            unoptimized
          />
          <p className="text-body">Personal Digital Product Setup</p>
        </div>
      </div>
    </section>
  );
}

