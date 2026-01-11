import "@/styles/opentext_memories.css";
import { SectionHeader } from "@/components/globalcomponents";
import Image from "next/image";

export default function OpentextMemories() {
  return (
    <section className="opentext__memories">
      <div className="content-container">
        <div className="opentext__memories-left">
          <Image
            src="/images/opentext/CARD_2.png"
            alt="Card 2"
            width={1200}
            height={800}
            className="opentext__memories-card"
            unoptimized
          />
          <Image
            src="/images/opentext/CARD_4.png"
            alt="Card 4"
            width={1200}
            height={800}
            className="opentext__memories-card"
            unoptimized
          />
        </div>
        <div className="opentext__memories-middle">
          <SectionHeader
            topText="Memories"
            bottomText="Summary of my journey"
            description="For legal and user experience reasons, more and more softwares provide different color modes that users can select based on their own needs."
          />
          <Image
            src="/images/opentext/CARD_middle.png"
            alt="Card middle"
            width={1200}
            height={800}
            className="opentext__memories-card-middle"
            unoptimized
          />
        </div>
        <div className="opentext__memories-right">
          <Image
            src="/images/opentext/CARD_1.png"
            alt="Card 1"
            width={1200}
            height={800}
            className="opentext__memories-card"
            unoptimized
          />
          <Image
            src="/images/opentext/CARD_3.png"
            alt="Card 3"
            width={1200}
            height={800}
            className="opentext__memories-card"
            unoptimized
          />
        </div>
      </div>
      <div className="opentext__memories-mobile-grid">
        <Image
          src="/images/opentext/CARD_1.png"
          alt="Card 1"
          width={1200}
          height={800}
          className="opentext__memories-card"
          unoptimized
        />
        <Image
          src="/images/opentext/CARD_2.png"
          alt="Card 2"
          width={1200}
          height={800}
          className="opentext__memories-card"
          unoptimized
        />
        <Image
          src="/images/opentext/CARD_3.png"
          alt="Card 3"
          width={1200}
          height={800}
          className="opentext__memories-card"
          unoptimized
        />
        <Image
          src="/images/opentext/CARD_4.png"
          alt="Card 4"
          width={1200}
          height={800}
          className="opentext__memories-card"
          unoptimized
        />
      </div>
    </section>
  );
}

