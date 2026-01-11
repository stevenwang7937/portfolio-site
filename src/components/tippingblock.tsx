import "@/styles/tipping_block.css";
import Image from "next/image";

interface TippingBlockProps {
  type: "situation" | "recommendation";
  textContent: string;
}

export default function TippingBlock({ type, textContent }: TippingBlockProps) {
  const letterImage = type === "situation" ? "/images/tipping/letter-S.png" : "/images/tipping/letter-R.png";
  const headerText = type === "situation" ? "ituation" : "ecommendations";

  // For recommendations, split by periods to create bullet points
  const renderContent = () => {
    if (type === "recommendation") {
      // Split by periods and filter out empty strings
      const bullets = textContent
        .split(/\.\s+/)
        .map(bullet => bullet.trim())
        .filter(bullet => bullet.length > 0)
        .map(bullet => bullet.endsWith('.') ? bullet : bullet + '.');
      
      return (
        <ul className="tipping__block-list">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-description tipping__block-list-item">
              {bullet}
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <p className="text-description tipping__block-text">{textContent}</p>
      );
    }
  };

  return (
    <div className="tipping__block">
      <Image
        src={letterImage}
        alt={type === "situation" ? "S" : "R"}
        width={80}
        height={80}
        className="tipping__block-letter"
        unoptimized
      />
      <div className="tipping__block-header">
        <span className="tipping__block-header-text">{headerText}</span>
      </div>
      <div className="tipping__block-content">
        {renderContent()}
      </div>
    </div>
  );
}

