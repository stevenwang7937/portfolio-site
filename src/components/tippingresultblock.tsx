import "@/styles/tipping_result_block.css";

interface TippingResultBlockProps {
  title: string;
  bottomText: string | React.ReactNode;
}

export default function TippingResultBlock({ title, bottomText }: TippingResultBlockProps) {
  return (
    <div className="tipping__result-block">
      <h2 className="text-display tipping__result-block-title">{title}</h2>
      <p className="text-section-subheader tipping__result-block-bottom">{bottomText}</p>
    </div>
  );
}

