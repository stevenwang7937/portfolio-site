import "@/styles/booked_swot_card.css";

interface BookedSwotCardProps {
  direction: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  title: string;
  content: string;
}

export default function BookedSwotCard({ direction, title, content }: BookedSwotCardProps) {
  return (
    <div className={`booked-swot-card booked-swot-card--${direction}`}>
      <h3 className="booked-swot-card__title">{title}</h3>
      <p className="text-body-no-shadow booked-swot-card__content">{content}</p>
    </div>
  );
}

