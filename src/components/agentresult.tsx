"use client";

import "@/styles/agent_result.css";
import { SectionHeader, SectionHeaderTitle } from "@/components/globalcomponents";
import Image from "next/image";

export default function AgentResult() {
  return (
    <section className="agent__result">
      <div className="content-container">
        <div className="agent__result-header">
          <SectionHeader
            topText="Move 4"
            bottomText="Result & Recommendations"
            description="Compiling all results into viable recommendations."
          />
        </div>
        <div className="agent__result-description-frame">
          <p className="text-body agent__result-description-text">
            I always believe user research should go beyond data and visualizations, but offering strategic, vision-led recommendations that move the business forward.
          </p>
        </div>
        <p className="text-description agent__result-footer-text">
          No one would say no to a fresh pair of eyes and I always have something to add.
        </p>
        {/* start of number 1 */}
        <div className="agent__result-advice-wrapper">
          <div className="agent__result-advice-title-wrapper">
            <span className="text-section-header agent__result-advice-number">1.</span>
            <div className="agent__result-advice-title">
              <SectionHeaderTitle
                topText="NICHE"
                bottomText="Start by mastering one clear use case, a niche, then expand."
              />
            </div>
          </div>
          <div className="agent__result-advice-content-wrapper">
            <p className="text-body agent__result-advice-content-text">
              Deliver a few standout features that truly impress, then expand by addressing adjacent needs within the same niche audience.
            </p>
            <video
              src="/images/agent/results/niche-1.mp4"
              className="agent__result-advice-video agent__result-advice-niche-1"
              autoPlay
              loop
              playsInline
              muted
            />
            <p className="text-body agent__result-advice-content-text">
              As an example, Zero is an AI-powered email client that manages your inbox, and that's all it is doing.
              <br />
              <br />
              It could be just adding some AI features into a daily familiar interface.
            </p>
            <video
              src="/images/agent/results/niche-2.mp4"
              className="agent__result-advice-video agent__result-advice-niche-2"
              autoPlay
              loop
              playsInline
              muted
            />
            <p className="text-body agent__result-advice-content-text">
              Or having specific use cases displaying, could mitigate lots of confusion and smooth out the learning curves.
            </p>
            <Image
              src="/images/agent/results/niche-3.jpg"
              alt="Niche 3"
              width={800}
              height={600}
              className="agent__result-advice-image agent__result-advice-niche-3"
              unoptimized
            />
            <Image
              src="/images/agent/results/niche-4.jpg"
              alt="Niche 4"
              width={800}
              height={600}
              className="agent__result-advice-image agent__result-advice-niche-4"
              unoptimized
            />
            <p className="text-body agent__result-advice-content-text">
              If the scope is big, sometimes it is also recommended to break functions to separate agents to handle individual cases, as long as users are well-educated.
            </p>
            <Image
              src="/images/agent/results/niche-5.jpg"
              alt="Niche 5"
              width={800}
              height={600}
              className="agent__result-advice-image agent__result-advice-niche-5"
              unoptimized
            />
            <p className="text-body agent__result-advice-content-text">
              We also do recongize that other platforms might be aiming big and broad, like Google and Zapier for example, but that is not the case for us because we are not trying to be everything to everyone, yet.
            </p>
          </div>
        </div>

        {/* start of number 2 */}
        <div className="agent__result-advice-wrapper">
          <div className="agent__result-advice-title-wrapper">
            <span className="text-section-header agent__result-advice-number">2.</span>
            <div className="agent__result-advice-title">
              <SectionHeaderTitle
                topText="EDUCATION"
                bottomText="People might not be an expert in your field. That is why they need your support."
              />
            </div>
          </div>
          <div className="agent__result-advice-content-wrapper">
            <p className="text-body agent__result-advice-content-text">
            The biggest barrier to adoption is the learning curve. And the level of education resources and care given to the users would determine the level of adoption and promotion.
            <br />
            <br />
            When talking about education, several of the following techniques would be mentioned. Onboarding. Tutorials. Help. (I specifically exclude documentation because that is usually for geeks, not for our target audience.)
            </p>
            <video
              src="/images/agent/results/education-1.mp4"
              className="agent__result-advice-video agent__result-advice-education-1"
              autoPlay
              loop
              playsInline
              muted
            />
            <p className="text-body agent__result-advice-content-text">
              Overall, we are looking at giving users enough examples to learn from, explanations on what the AI is doing and how it is benefiting, give alternatives to what users are prompting.
              <br />
              <br />
              So we can see multiple products using landing pages and onboarding screens as a great way to start things off. 
            </p>
            <video
              src="/images/agent/results/education-2.mp4"
              className="agent__result-advice-video agent__result-advice-education-2"
              autoPlay
              loop
              playsInline
              muted
            />
            <p className="text-body agent__result-advice-content-text">
             Furthermore, nothing explains better than a curated video. Hence, youtube videos are becoming a forefront of education resources comparing to boring documentations and manuals. It is also replacing other platforms like Facebook, Forums and reddit. 
            </p>
            <Image
              src="/images/agent/results/education-3.jpg"
              alt="Education 3"
              width={800}
              height={600}
              className="agent__result-advice-image agent__result-advice-education-3"
              unoptimized
            />
          
            <p className="text-body agent__result-advice-content-text">
             Eventually, we might also want to see other incentives for users to keep learning, creating, and thriving. This could give us more user data and channels to improve the product.
             <br /> 
             <br />
             Hence, sometimes we might see companies offering positions that requires applicants to master the product to do the job. It would be the end goal, but a very promising one.
            </p>
            <Image
              src="/images/agent/results/education-4.jpg"
              alt="Education 4"
              width={800}
              height={600}
              className="agent__result-advice-image agent__result-advice-education-4"
              unoptimized
            />
          </div>
        </div>

        {/* start of number 3 */}
        <div className="agent__result-advice-wrapper">
          <div className="agent__result-advice-title-wrapper">
            <span className="text-section-header agent__result-advice-number">3.</span>
            <div className="agent__result-advice-title">
              <SectionHeaderTitle
                topText="TRUST"
                bottomText="The need to gain trust so that people are willing to give them complicated and impactful tasks."
              />
            </div>
          </div>
          <div className="agent__result-advice-content-wrapper">
            <p className="text-body agent__result-advice-content-text">
            As one of the most trendy topic in tech, AI agents never fail to gain attention. When we look at marketing, companies used conferences, demos, trailers or even blogs and posts to gain mass attention.
            </p>
            <Image
              src="/images/agent/results/trust-1.jpg"
              alt="Trust 1"
              width={800}
              height={600}
              className="agent__result-advice-image agent__result-advice-trust-1"
              unoptimized
            />
            <p className="text-body agent__result-advice-content-text">
            However, retention is the key to success as fads run fast. To gain retention, trust is our best friend.
              <br />
              <br />
              In pre-AI world UX, trust means flows without friction, actions and responses carried out swiftly and accurately.
            </p>
            <video
              src="/images/agent/results/trust-2.mp4"
              className="agent__result-advice-video agent__result-advice-trust-2"
              autoPlay
              loop
              playsInline
              muted
            />
            <p className="text-body agent__result-advice-content-text">
            With AI, people start to get greedy. We want the AI to think with us, sometimes even taking the lead. That's why deep thinking ability becomes a milestone in AI development.
            <br />
            <br />
            If AI fails to do that, We call them “dumb” and confirm that AI cannot replace human, close the window, end of product usage.             </p>
            <video
              src="/images/agent/results/trust-3.mp4"
              className="agent__result-advice-video agent__result-advice-trust-3"
              autoPlay
              loop
              playsInline
              muted
            />
            <p className="text-body agent__result-advice-content-text">
            With agent, the bar would be even higher as most agents are separate products, meaning additional cost on top of ChatGPT or other daily tools. 
            <br />
            <br />
            Extra values need to be seen before full adoption, and it must go above and beyond the classic ones, aka ChatGPT.
            </p>
            <video
              src="/images/agent/results/trust-4.mp4"
              className="agent__result-advice-video agent__result-advice-trust-4"
              autoPlay
              loop
              playsInline
              muted
            />
            <p className="text-body agent__result-advice-content-text">
            There are some proven ways to succeed. Products like Sintra AI would focus on integrations, and UIPath would focus on automation. Those are all some good ways to gain trust by providing extra value than generative AI.
            <br />
            <br />
            However, risks follows as the complexity increases and products fail to deliver and meet the level of expectations as marketed in their websites or blue sky presentations.
            </p>
            
          </div>
        </div>

        {/* TODO: Add the rest of the advice */}

        {/* start of number 4 */}
        <div className="agent__result-advice-wrapper">
          <div className="agent__result-advice-title-wrapper">
            <span className="text-section-header agent__result-advice-number">4.</span>
            <div className="agent__result-advice-title">
              <SectionHeaderTitle
                topText="COMMUNITY"
                bottomText="Build a strong community around your product， and engage."
              />
            </div>
          </div>
          <div className="agent__result-advice-content-wrapper">
            <p className="text-body agent__result-advice-content-text">
            Building a community is a longliving way to do marketing and promoting products, from physical stores to online SaaS. 
            <br />
            <br />
            Usually it means to have a forum or some ways for users to interact with each other regarding the product experience. In online SaaS product's scenario, it would also serve the purpose of customer support and feedback collection.
            </p>
            <video
              src="/images/agent/results/community-1.mp4"
              className="agent__result-advice-video agent__result-advice-community-1"
              autoPlay
              loop
              playsInline
              muted
            />
            <p className="text-body agent__result-advice-content-text">
              However, it doesn't need to stop there. We can also see companies providing communities for geeks to try to make a profit by helping others to use the product. An obvious example would be Framer / Webflow paid templates. By encouraging people to create and sell their own templates, they can make a profit by selling their templates to others; while the product could also increase its popularity and usage, especially when it can attract different types of users, such as entrepreneurs who are not familiar with the product but want to use it.
              <br />
              <br />
              In AI world, we can see a great example such as Notion AI and Relevance AI marketplace. 
            </p>
            <video
              src="/images/agent/results/community-2.mp4"
              className="agent__result-advice-video agent__result-advice-community-2"
              autoPlay
              loop
              playsInline
              muted
            />
            <p className="text-body agent__result-advice-content-text">
              Just like in the video, from marketplace to actual task in line, a few clicks and magic happens. This is what attracts so many people to see AI as life changing. And with a community, your product can replicate this hyper experience.
            </p>
            <video
              src="/images/agent/results/community-3.mp4"
              className="agent__result-advice-video agent__result-advice-community-3"
              autoPlay
              loop
              playsInline
              muted
            />
            <p className="text-body agent__result-advice-content-text">
              And by aligning the goal of the product with the community, we can see a big network effect and that would increase the leverage of the product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

