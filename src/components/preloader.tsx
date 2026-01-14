"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Mapping of pathname to hero image path
const HERO_IMAGES: Record<string, string> = {
  "/": "/images/home_hero_bg.png",
  "/opentext": "/images/opentext/hero.png",
  "/agent": "/images/agent/agent-hero-background.png",
  "/booked": "/images/booked/hero.png",
  "/tipping": "/images/home-work/home-work-tipping.png",
  "/potsale": "/images/home-work/home-work-potsale.png",
};

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Reset loading state when pathname changes
    setIsLoading(true);
    setIsFading(false);

    const startTime = Date.now();
    const MIN_DELAY = 150; // Very short minimum delay (150ms) - only for uncached content
    let heroImageLoaded = false;
    let isHidden = false;
    let fadeTimeout: NodeJS.Timeout | null = null;
    let heroImageTimeout: NodeJS.Timeout | null = null;
    let checkInterval: NodeJS.Timeout | null = null;

    // Function to hide preloader with fade
    const hidePreloader = () => {
      if (isHidden) return;
      isHidden = true;
      setIsFading(true);
      // Remove from DOM after fade completes
      fadeTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 300); // Match transition duration
    };

    // Get hero image path for current page
    const heroImagePath = HERO_IMAGES[pathname];

    // Function to check if we should hide preloader
    const checkAndHide = () => {
      if (isHidden) return true;
      
      const elapsed = Date.now() - startTime;
      
      // If hero image is loaded and minimum delay has passed, hide preloader
      if (heroImageLoaded && elapsed >= MIN_DELAY) {
        hidePreloader();
        return true;
      }
      
      // If things load very quickly (cached), don't show preloader at all
      if (elapsed < MIN_DELAY && heroImageLoaded) {
        // Content is cached and loaded instantly - hide immediately without showing
        isHidden = true;
        setIsLoading(false);
        return true;
      }
      
      return false;
    };

    // Preload hero image
    if (heroImagePath) {
      const heroImg = new Image();
      
      const handleHeroLoad = () => {
        heroImageLoaded = true;
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          if (!checkAndHide()) {
            // If not hidden yet, set up periodic check
            checkInterval = setInterval(() => {
              if (checkAndHide()) {
                if (checkInterval) clearInterval(checkInterval);
              }
            }, 50);
          }
        }, 50);
      };
      
      heroImg.onload = handleHeroLoad;
      
      heroImg.onerror = () => {
        // If hero image fails to load, still proceed after minimum delay
        heroImageLoaded = true;
        setTimeout(() => {
          if (!checkAndHide()) {
            checkInterval = setInterval(() => {
              if (checkAndHide()) {
                if (checkInterval) clearInterval(checkInterval);
              }
            }, 50);
          }
        }, 50);
      };
      
      heroImg.src = heroImagePath;
      
      // Check if image is already cached
      if (heroImg.complete) {
        handleHeroLoad();
      }
    } else {
      // No hero image for this page, hide after short delay
      setTimeout(() => {
        hidePreloader();
      }, MIN_DELAY);
    }

    // Fallback: ensure preloader hides after maximum delay (safety net)
    heroImageTimeout = setTimeout(() => {
      hidePreloader();
    }, 3000); // Maximum 3 seconds

    // Cleanup
    return () => {
      if (fadeTimeout) clearTimeout(fadeTimeout);
      if (heroImageTimeout) clearTimeout(heroImageTimeout);
      if (checkInterval) clearInterval(checkInterval);
    };
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#090909",
        zIndex: 9999,
        pointerEvents: "none",
        opacity: isFading ? 0 : 1,
        transition: "opacity 300ms ease-out",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p className="text-body">loading...</p>
    </div>
  );
}
