"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type NavItem = { label: string; href: string; external?: boolean };

const navItems: NavItem[] = [
  { label: "Work", href: "/#work" },
  { label: "Life", href: "/#life" },
  { label: "Thoughts", href: "https://permudesignplus.substack.com/", external: true },
  { label: "Resume", href: "https://drive.google.com/file/d/13_1aW9XneKwxkDbRQ05j_iQks9hP4qgn/view?usp=sharing", external: true },
];

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Handle window resize to show/hide mobile navbar
  useEffect(() => {
    const checkScreenSize = () => {
      setIsVisible(window.innerWidth <= 490);
      if (window.innerWidth > 490) {
        setIsOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu when clicking outside or on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <nav className="mobile-nav">
      {/* Hamburger Button */}
      <button
        className={`mobile-nav__toggle ${isOpen ? "mobile-nav__toggle--open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div className="mobile-nav__toggle-background">
          <span className="mobile-nav__toggle-line"></span>
          <span className="mobile-nav__toggle-line"></span>
          <span className="mobile-nav__toggle-line"></span>
        </div>
      </button>

      {/* Dropdown Panel */}
      <div className={`mobile-nav__panel ${isOpen ? "mobile-nav__panel--open" : ""}`}>
        <div className="mobile-nav__panel-content">
          <div className="mobile-nav__links">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="mobile-nav__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mobile-nav__link"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <Link
            href="/contact"
            className="mobile-nav__cta"
            onClick={handleLinkClick}
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="mobile-nav__backdrop"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}

