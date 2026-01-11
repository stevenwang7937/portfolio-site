"use client";

import "@/styles/form.css";
import Image from "next/image";
import CustomSelect from "./CustomSelect";
import { useState } from "react";

export default function Form() {
  const [workType, setWorkType] = useState("");
  const [skills, setSkills] = useState("");

  const workTypeOptions = [
    { value: "ui-ux", label: "UI/UX Project" },
    { value: "website", label: "Website" },
    { value: "design system", label: "Design System" },
    { value: "user-research", label: "User Research / Design Audit" },
    { value: "brand-design", label: "Brand Design" },
    { value: "coffee-chats", label: "Coffee Chats" },
    { value: "tarot-reading", label: "Tarot Reading" },
    { value: "pottery-request", label: "Pottery Request (coming soon)", disabled: true },
  ];

  const skillsOptions = [
    { value: "design", label: "design" },
    { value: "design-dev", label: "design + development" },
    { value: "revamp", label: "revamp" },
    { value: "reports", label: "reports" },
    { value: "talk", label: "some time to talk" },
  ];
  return (
    <section className="form">
      <div className="form__inner">
        <h2 className="text-display form__title">Work with me?</h2>
        
        <div className="form__container">
          <Image
            src="/images/form/form-stamp.png"
            alt=""
            width={120}
            height={120}
            className="form__stamp"
          />
          
          <form className="form__form">
            {/* Row 1: From + Name */}
            <div className="form__row">
              <span className="text-subheading form__text">From</span>
              <input
                type="text"
                placeholder="Name"
                className="text-subheading form__input form__input--name"
              />
            </div>

            {/* Row 2: I would like to get a quote on + Type of Work dropdown + that requires */}
            <div className="form__row">
              <span className="text-subheading form__text">I would like to get a quote on</span>
              <CustomSelect
                options={workTypeOptions}
                placeholder="Type of Work"
                value={workType}
                onChange={setWorkType}
                className="form__select--work"
                id="work-type-select"
              />
              <span className="text-subheading form__text">that requires</span>
            </div>

            {/* Row 3: Skills dropdown + . My email is: + Email input */}
            <div className="form__row">
              <CustomSelect
                options={skillsOptions}
                placeholder="Scope"
                value={skills}
                onChange={setSkills}
                id="skills-select"
              />
              <span className="text-subheading form__text">. My email is:</span>
              <input
                type="email"
                placeholder="Email"
                className="text-subheading form__input"
              />
            </div>

            {/* Row 4: I also want to mention */}
            <div className="form__row">
              <span className="text-subheading form__text">I also want to mention</span>
            </div>

            {/* Row 5: Message textarea */}
            <div className="form__row">
              <textarea
                placeholder="Message"
                className="text-subheading form__textarea"
              />
            </div>

            <button type="submit" className="text-display form__button">
              Send &gt;
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

