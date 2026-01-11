"use client";

import "@/styles/opentext_components.css";
import { SectionHeader } from "@/components/globalcomponents";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function OpentextComponents() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 490);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="opentext__components">
      <div className="content-container">
        <SectionHeader
          topText="Brief"
          bottomText="Various Components"
          description="For legal and user experience reasons, more and more softwares provide different color modes that users can select based on their own needs. The four modes in our scope would be:"
        />
        <div className="opentext__component-list">
          <div className="opentext__component-buttons">
            <div className="opentext__component-name">
              <p className="text-body">Buttons</p>
            </div>
            <div className="opentext__component-content">
              <Image
                src={isMobile ? "/images/opentext/component-buttons-mobile.svg" : "/images/opentext/component-buttons.svg"}
                alt="Buttons components"
                width={1200}
                height={800}
                className="opentext__component-image"
                unoptimized
              />
            </div>
          </div>
          <div className="opentext__component-labels">
            <div className="opentext__component-name">
              <p className="text-body">Labels</p>
            </div>
            <div className="opentext__component-content">
              <Image
                src="/images/opentext/component-labels.svg"
                alt="Labels components"
                width={1200}
                height={800}
                className="opentext__component-image"
                unoptimized
              />
            </div>
          </div>
          <div className="opentext__component-breadcrumbs">
            <div className="opentext__component-name">
              <p className="text-body">Breadcrumbs</p>
            </div>
            <div className="opentext__component-content">
              <Image
                src="/images/opentext/component-breadcrumbs.svg"
                alt="Breadcrumbs components"
                width={1200}
                height={800}
                className="opentext__component-image"
                unoptimized
              />
            </div>
          </div>
          <div className="opentext__component-menus">
            <div className="opentext__component-name">
              <p className="text-body">Menus</p>
            </div>
            <div className="opentext__component-content">
              <Image
                src="/images/opentext/component-menus.svg"
                alt="Menus components"
                width={1200}
                height={800}
                className="opentext__component-image"
                unoptimized
              />
            </div>
          </div>
          <div className="opentext__component-paginations">
            <div className="opentext__component-name">
              <p className="text-body">Paginations</p>
            </div>
            <div className="opentext__component-content">
              <Image
                src={isMobile ? "/images/opentext/component-pagination-mobile.svg" : "/images/opentext/component-pagination.svg"}
                alt="Paginations components"
                width={1200}
                height={800}
                className="opentext__component-image"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

