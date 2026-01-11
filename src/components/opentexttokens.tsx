import "@/styles/opentext_tokens.css";
import { SectionHeaderTitle } from "@/components/globalcomponents";
import Image from "next/image";

interface TokensSubheaderProps {
  topText: string;
  bottomText: string;
}

function TokensSubheader({ topText, bottomText }: TokensSubheaderProps) {
  return (
    <div className="opentext__tokens-subheader">
      <p className="text-subheading opentext__tokens-subheader__top">{topText}</p>
      <p className="text-body opentext__tokens-subheader__bottom">{bottomText}</p>
    </div>
  );
}

export default function OpentextTokens() {
  return (
    <section className="opentext__tokens">
      <div className="content-container">
        <div className="opentext__tokens-left">
          <SectionHeaderTitle
            topText="Tokens"
            bottomText="Making Design into Systems"
          />
          <div className="opentext__tokens-content">
            <TokensSubheader
              topText="Semantic tokens"
              bottomText="Applied colors to common areas and modes"
            />
            <Image
              src="/images/opentext/tokens-left-1.svg"
              alt="Tokens left 1"
              width={1200}
              height={800}
              className="opentext__tokens-image"
              unoptimized
            />
            <Image
              src="/images/opentext/tokens-left-2.svg"
              alt="Tokens left 2"
              width={1200}
              height={800}
              className="opentext__tokens-image"
              unoptimized
            />
          </div>
          <div className="opentext__tokens-content">
            <TokensSubheader
              topText="Naming"
              bottomText="We are having a simplified naming system due to our product is SaaS and the brand is using quite limited color palettes. Hence, lots of colors are reused and we can suffice the seemingly large system with a manageable number of namies."
            />
            <Image
              src="/images/opentext/tokens-left-3.svg"
              alt="Tokens left 3"
              width={1200}
              height={800}
              className="opentext__tokens-image opentext__tokens-image--narrow"
              unoptimized
            />
          </div>
        </div>
        <div className="opentext__tokens-right">
          <div className="opentext__tokens-content opentext__tokens-content--right">
            <TokensSubheader
              topText="Core Tokens"
              bottomText="Main palette"
            />
            <Image
              src="/images/opentext/tokens-right-1.svg"
              alt="Core Tokens"
              width={1200}
              height={800}
              className="opentext__tokens-image opentext__tokens-image--right"
              unoptimized
            />
          </div>
          <div className="opentext__tokens-content opentext__tokens-content--right">
            <TokensSubheader
              topText="Component tokens"
              bottomText="Applied colors to components"
            />
            <Image
              src="/images/opentext/tokens-right-2.svg"
              alt="Component tokens 2"
              width={1200}
              height={800}
              className="opentext__tokens-image opentext__tokens-image--right-full"
              unoptimized
            />
            <Image
              src="/images/opentext/tokens-right-3.svg"
              alt="Component tokens 3"
              width={1200}
              height={800}
              className="opentext__tokens-image opentext__tokens-image--right-full"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}

