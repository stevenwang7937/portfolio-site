"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import MobileNavbar from "@/components/mobile-navbar";
import Form from "@/components/form";
import "@/styles/contact.css";
import "@/styles/navbar.css";
import "@/styles/mobile-navbar.css";

export default function ContactPage() {
  const [showToast, setShowToast] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("stevenwangdigital@gmail.com");
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);
  return (
    <main className="contact-page">
      <Navbar />
      <MobileNavbar />
      {showToast && (
        <div className="contact-toast">
          <p className="text-body contact-toast__text">copied</p>
        </div>
      )}

      <section className="contact-hero">
        <h1 className="text-display contact-hero__title">Contact me</h1>
        
        <div className="contact-info contact-info--top-left">
          <a 
            href="https://www.linkedin.com/in/stevenwang7937/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-body contact-info__label"
          >
            Connect via LinkedIn
          </a>
          <a 
            href="https://www.linkedin.com/in/stevenwang7937/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body contact-info__handle"
          >
            Steven Wang
          </a>
          
        </div>

        <div className="contact-info contact-info--top-right">
          <p className="text-body contact-info__label">Follow on Twitter</p>
          <a 
            href="https://x.com/permu_ux"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body contact-info__handle"
          >
            @permu_ux
          </a>
        </div>

        <div className="contact-info contact-info--bottom-left">
          <p className="text-body contact-info__label">Send email to</p>
          <div className="contact-info__email-wrapper">
            <a 
              href="mailto:stevenwangdigital@gmail.com"
              className="text-body contact-info__link"
            >
              stevenwangdigital@gmail.com
            </a>
            <button
              onClick={copyEmailToClipboard}
              className="contact-info__copy-button"
              aria-label="Copy email address"
            >
              <Image
                src="/images/contact-copy-icon.svg"
                alt="Copy email"
                width={24}
                height={24}
                className="contact-info__copy-icon"
              />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

