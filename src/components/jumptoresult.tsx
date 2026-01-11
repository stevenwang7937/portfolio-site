"use client";

import "@/styles/jumptoresult.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface JumpToResultProps {
  imageSrc?: string;
}

export default function JumpToResult({ imageSrc }: JumpToResultProps) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    const resultElement = document.getElementById("result");
    if (resultElement) {
      const startPosition = window.pageYOffset;
      const targetPosition = resultElement.offsetTop;
      const distance = targetPosition - startPosition;
      const duration = 500; // 500ms
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
    }
  };

  useEffect(() => {
    // Check if in mobile mode (width <= 490px)
    const isMobile = window.innerWidth <= 490;
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const titleElement = titleRef.current;
    if (titleElement && imageSrc) {
      titleElement.addEventListener("mousemove", handleMouseMove);
      titleElement.addEventListener("mouseenter", () => setIsHovering(true));
      titleElement.addEventListener("mouseleave", () => {
        setIsHovering(false);
      });

      return () => {
        titleElement.removeEventListener("mousemove", handleMouseMove);
        titleElement.removeEventListener("mouseenter", () => setIsHovering(true));
        titleElement.removeEventListener("mouseleave", () => setIsHovering(false));
      };
    }
  }, [imageSrc]);

  return (
    <section className="jumptoresult">
      <div className="jumptoresult__inner">
        <div className="jumptoresult__header">
          <div className="jumptoresult__rule" />
          <div className="jumptoresult__question-wrapper">
            <p className="text-body jumptoresult__question">Can't Wait?</p>
            
          <div className="jumptoresult__title-wrapper">
            <Image
              src="/portfolio-side-b/side-b-icon.svg"
              alt=""
              width={40}
              height={40}
              className="jumptoresult__icon"
            />
            <h2 
              ref={titleRef}
              className="text-display jumptoresult__title"
              onClick={handleClick}
            >
              Straight to result
            </h2>
            <Image
              src="/portfolio-side-b/side-b-icon.svg"
              alt=""
              width={40}
              height={40}
              className="jumptoresult__icon"
            />
          </div>
          </div>
          <div className="jumptoresult__rule" />
        </div>
      </div>
      {imageSrc && isHovering && mousePosition && (
        <span 
          className="jumptoresult__hover-image"
          style={{
            left: `${mousePosition.x + 20}px`,
            top: `${mousePosition.y + 20}px`,
          }}
        >
          <Image
            src={imageSrc}
            alt=""
            width={160}
            height={160}
            className="jumptoresult__hover-image-inner"
          />
        </span>
      )}
    </section>
  );
}

