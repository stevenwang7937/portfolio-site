import "@/styles/tipping_intro.css";
import Image from "next/image";
import { CenteredSectionHeader } from "@/components/globalcomponents";

export default function TippingIntro() {
  return (
    <section className="tipping__intro">
      <div className="content-container">
        <div className="tipping__intro-content">
          <div className="tipping__intro-left">
            <CenteredSectionHeader
              topText="Current Progress"
              bottomText="Issues with the Current App"
            />
            <div className="tipping__intro-left-text">
              <p className="text-body">
                The client reached out to us after they have received the work from another designer team. The initial thought was to do a visual revamp and some code base cleanup for the beta launch of the application.
              </p>
              <p className="text-body">
                However, with the provided files, after a usability walkthrough, some key screens are missing when a service provider would like to start his/her shift. On a design level, this would results in bugs and unaddressed edge cases that would result in users getting stuck, which damages trust on both service providers, customers and many other parties involved.
              </p>
              <p className="text-body">
                Hence, I made the recommendation to prioritize flow cleanup before visual revamping, allowing engineering to establish a stable backend, before making any front end changes which risk being repeated work.
              </p>
              <p className="text-body">
                Fortunately, the client agreed the proposal and we moved on to a more challenging task than what SOW agreed.
              </p>
            </div>
          </div>
          
          <div className="tipping__intro-right">
            <div className="tipping__intro-right-left">
              <Image
                src="/images/tipping/tipping-intro-1.png"
                alt="Tipping intro image 1"
                width={400}
                height={600}
                className="tipping__intro-image"
                unoptimized
              />
              <p className="text-body tipping__intro-text">
                The provided screens have saturated colors as backgrounds during some key frames, as well as simple cards which might cause trust issues with users.
              </p>
            </div>
            
            <div className="tipping__intro-right-right">
              <p className="text-body tipping__intro-text">
                There are missing states (error states, logic gaps, unconsidered edge cases) around the whole flow which is presented in the old file.
              </p>
              <Image
                src="/images/tipping/tipping-intro-2.png"
                alt="Tipping intro image 2"
                width={400}
                height={600}
                className="tipping__intro-image"
                unoptimized
              />
              <Image
                src="/images/tipping/tipping-intro-3.png"
                alt="Tipping intro image 3"
                width={400}
                height={600}
                className="tipping__intro-image"
                unoptimized
              />
              <p className="text-body tipping__intro-text">
                The screens are presented in piles which it took us some time to analyze the actual flow, get them organized and recognize the use of each repeated screen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

