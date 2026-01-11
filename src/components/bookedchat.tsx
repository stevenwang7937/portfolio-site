import "@/styles/booked_chat.css";
import Image from "next/image";

interface BookedChatProps {
  text: string;
}

export default function BookedChat({ text }: BookedChatProps) {
  return (
    <div className="booked-chat">
      <div className="booked-chat__icon-container">
        <Image
          src="/images/booked/booked-text-icon.svg"
          alt=""
          width={16}
          height={16}
          className="booked-chat__icon"
        />
      </div>
      <p className="text-body-no-shadow booked-chat__text">{text}</p>
    </div>
  );
}

