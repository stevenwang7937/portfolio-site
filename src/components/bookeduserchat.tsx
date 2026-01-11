import "@/styles/booked_user_chat.css";
import Image from "next/image";

interface BookedUserChatProps {
  text: string;
}

export default function BookedUserChat({ text }: BookedUserChatProps) {
  return (
    <div className="booked-user-chat">
      <div className="booked-user-chat__icon-container">
        <Image
          src="/images/booked/booked-user-icon.svg"
          alt=""
          width={20}
          height={20}
          className="booked-user-chat__icon"
        />
      </div>
      <p className="text-body-black-no-shadow booked-user-chat__text">{text}</p>
    </div>
  );
}

