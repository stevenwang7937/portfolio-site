"use client";

import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import "@/styles/feature_display_video.css";
import "@/styles/project_takeaway.css";
import "@/styles/project_ending.css";
import "@/styles/project_intro_card.css";
import "@/styles/project_intro_cards.css";
import "@/styles/scroll_to_top.css";
import "@/styles/centered_section_header.css";

interface SectionHeaderTitleProps {
  topText: string;
  bottomText: string;
}

interface SectionHeaderProps {
  topText: string;
  bottomText: string;
  description: string;
}

export function SectionHeaderTitle({ topText, bottomText }: SectionHeaderTitleProps) {
  return (
    <div className="section-header-title">
      <p className="text-description section-header-title__top">{topText}</p>
      <h2 className="text-section-header section-header-title__bottom">{bottomText}</h2>
    </div>
  );
}

export function SectionHeader({ topText, bottomText , description}: SectionHeaderProps) {
  return (
    <div className="section-header">
      <SectionHeaderTitle topText={topText} bottomText={bottomText} />
      <p className="text-body section-header__description">{description}</p>
    </div>
  );
}

interface CenteredSectionHeaderProps {
  topText: string;
  bottomText: string;
  description?: string;
}

export function CenteredSectionHeader({ topText, bottomText, description }: CenteredSectionHeaderProps) {
  return (
    <div className="centered-section-header">
      <p className="text-description centered-section-header__top">{topText}</p>
      <h2 className="text-section-header centered-section-header__bottom">{bottomText}</h2>
      {description && (
        <p className="text-body centered-section-header__description">{description}</p>
      )}
    </div>
  );
}

interface FeatureDisplayVideoProps {
  title: string;
  description: string;
  videoSrc: string;
}

export function FeatureDisplayVideo({ title, description, videoSrc }: FeatureDisplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((error) => {
              // Autoplay was prevented, which is fine
              console.log("Autoplay prevented:", error);
            });
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // Play when 50% of video is visible
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="feature-display-video">
      
        <div className="feature-display-video-content">
          <h2 className="text-section-subheader feature-display-video-title">{title}</h2>
          <p className="text-body feature-display-video-description">{description}</p>
          <div className="feature-display-video-wrapper">
            <video 
              ref={videoRef}
              className="feature-display-video-element"
              src={videoSrc}
              controls
              playsInline
              loop
              muted
            />
          </div>
        </div>
      
    </section>
  );
}

interface ProjectTakeawayProps {
  text: string;
}

export function ProjectTakeaway({ text }: ProjectTakeawayProps) {
  return (
    <section className="project-takeaway">
      <div className="content-container">
        <div className="project-takeaway-content">
          <div className="project-takeaway-header">
            <SectionHeaderTitle 
              topText="Reflection & Learnings"
              bottomText="Takeaways"
            />
          </div>
          
          <div className="project-takeaway-content-box">
            <p className="text-body project-takeaway-text">{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProjectEndingProps {
  nextCaseLink: string;
}

export function ProjectEnding({ nextCaseLink }: ProjectEndingProps) {
  return (
    <section className="project-ending">
      <div className="content-container">
        <div className="project-ending-content">
          <h2 className="text-section-header project-ending-title">
            Seeing something you like?
          </h2>
          
          <div className="project-ending-card-wrapper">
            <Image
              src="/images/name-card.svg"
              alt="Steven Wang - Designer"
              width={858}
              height={540}
              className="project-ending-card"
              priority
            />
            <Link 
              href="/contact" 
              className="project-ending-card-button-link"
              aria-label="Get In Touch"
            />
          </div>
          
          <Link href={nextCaseLink} className="text-section-header project-ending-bottom-link">
            Next Case Study →
          </Link>
        </div>
      </div>
    </section>
  );
}

interface ProjectIntroCardProps {
  contentText: string;
  iconSrc?: string;
  title?: string;
}

export function ProjectIntroCard({ contentText, iconSrc = "/images/project-intro-timeline.png", title = "Timeline" }: ProjectIntroCardProps) {
  return (
    <div className="project-intro-card">
      <div className="project-intro-card-icon-wrapper">
        <Image
          src={iconSrc}
          alt={`${title} icon`}
          width={100}
          height={100}
          className="project-intro-card-icon"
          unoptimized
        />
      </div>
      <div className="project-intro-card-content">
        <h3 className="text-section-subheader project-intro-card-title">
          {title}
        </h3>
        <p className="text-body project-intro-card-text">
          {contentText}
        </p>
      </div>
    </div>
  );
}

interface ProjectIntroCardsProps {
  mainObjectiveText: string;
  teamText: string;
  timelineText: string;
  resultText: string;
}

export function ProjectIntroCards({ mainObjectiveText, teamText, timelineText, resultText }: ProjectIntroCardsProps) {
  return (
    <div className="project-intro-cards-wrapper">
      <div className="content-container">
        <div className="project-intro-cards">
          <div className="project-intro-cards-item">
            <ProjectIntroCard
              contentText={mainObjectiveText}
              iconSrc="/images/project-intro-main-objective.png"
              title="Main Objective"
            />
          </div>
          <div className="project-intro-cards-item">
            <ProjectIntroCard
              contentText={teamText}
              iconSrc="/images/project-intro-team.png"
              title="Team"
            />
          </div>
          <div className="project-intro-cards-item">
            <ProjectIntroCard
              contentText={timelineText}
              iconSrc="/images/project-intro-timeline.png"
              title="Timeline"
            />
          </div>
          <div className="project-intro-cards-item">
            <ProjectIntroCard
              contentText={resultText}
              iconSrc="/images/project-intro-result.png"
              title="Result"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ScrollToTop() {
  const pathname = usePathname();
  
  // Hide scroll to top button on contact page
  if (pathname === "/contact") {
    return null;
  }

  const handleClick = () => {
    const startPosition = window.pageYOffset;
    const targetPosition = 0;
    const distance = targetPosition - startPosition;
    const duration = 800; // 800ms
    let startTime: number | null = null;

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <button 
      className="scroll-to-top"
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <div className="scroll-to-top__background">
        <svg 
          className="scroll-to-top__arrow"
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M12 5L19 12L17.59 13.41L12 7.83L6.41 13.41L5 12L12 5Z" 
            fill="white"
          />
        </svg>
      </div>
    </button>
  );
}

