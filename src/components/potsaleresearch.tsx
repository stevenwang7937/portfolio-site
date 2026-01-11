import "@/styles/potsale_research.css";
import { SectionHeader } from "@/components/globalcomponents";
import Image from "next/image";

export default function PotsaleResearch() {
  return (
    <section className="potsale__research">
      <div className="content-container">
        <SectionHeader
          topText="Research"
          bottomText="Further Research"
          description="Conducted 5 user interviews on my potter friends, all having rich in person pottery sales experience in local markets, but struggles in online sales. I also reviewed most used E-Commerce platforms (Etsy, Shopify, etc) as my secondary research."
        />
        <Image
          src="/images/potsale/research-highlights.svg"
          alt="Research highlights"
          width={1162}
          height={844}
          className="potsale__research-image"
          unoptimized
        />
      </div>
    </section>
  );
}

