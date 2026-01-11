import "@/styles/tipping_research.css";
import Image from "next/image";

export default function TippingResearch() {
  return (
    <section className="tipping__research">
      <div className="content-container">
        <div className="tipping__research-content">
          <div className="tipping__research-text">
            <p className="text-body">
              We also conducted interviews with service providers in the industry. By seeing how they operate, how their reports are like, how they are splitting and managing tips as a team, gave us more inspirations on how to better design our app.
            </p>
          </div>
          <Image
            src="/images/tipping/research-background.png"
            alt="Research background"
            width={1200}
            height={800}
            className="tipping__research-image--mobile"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

