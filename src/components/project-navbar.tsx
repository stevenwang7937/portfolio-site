"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavItem = { label: string; href: string; external?: boolean };

const navItems: NavItem[] = [
  { label: "Work", href: "/#work" },
  { label: "Life", href: "/#life" },
  { label: "Thoughts", href: "https://permudesignplus.substack.com/", external: true },
  { label: "Resume", href: "https://drive.google.com/file/d/13_1aW9XneKwxkDbRQ05j_iQks9hP4qgn/view?usp=sharing", external: true },
];

// Tune these:
const STICK_AT = 260;   // nav becomes stuck after this scrollY
const UNSTICK_AT = 120; // nav becomes floating again below this scrollY

export default function ProjectNavbar() {
  const [isStuck, setIsStuck] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;

      setIsStuck((prev) => {
        if (!prev && y > STICK_AT) return true;     // stick
        if (prev && y < UNSTICK_AT) return false;   // unstick
        return prev;                                // no change
      });

      ticking.current = false;
    };

    const onScroll = () => {
      // throttle to animation frames (prevents spam)
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(update);
    };

    // initial state
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${isStuck ? "nav--stuck" : "nav--floating"}`}>
      <div className="nav__inner">
        <div className="nav__links">
          {navItems.map((item) => 
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                className="nav__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href} className="nav__link">
                {item.label}
              </Link>
            )
          )}
        </div>

        <Link href="/contact" className="nav__cta">
          Contact Me
        </Link>
      </div>
    </nav>
  );
}

