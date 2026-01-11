import React from "react";
import "../styles/home_work.css";
import Image from "next/image";
import Link from "next/link";


export default function Homework() {
  return (
    <section className="homework" id="work">
      <div className="homework__inner content-container">
        <div className="homework__header">
          <h2 className="text-display homework__title">My Work</h2>
          <div className="homework__rule" />
        </div>

        <div className="homework__grid">
          {/* 1) Tipping App */}
          <article className="workcard workcard--1">
            <header className="workcard__head">
              <Link href="/tipping" className="text-section-subheader workcard__subtitle">
                <h3>Tipping App</h3>
              </Link>
              <p className="text-body workcard__meta">Mobile App, Internship Work, 2023</p>
            </header>

            <Link href="/tipping" className="workcard__thumb workcard__thumb_1" aria-label="Tipping App thumbnail placeholder">
            </Link>

            <p className="text-body workcard__desc">
              Led design revamp and feature upgrades for a client company&apos;s beta version.
            </p>

            <div className="workcard__underline" />
          </article>

          {/* 2) Booked AI Web App */}
          <article className="workcard workcard--2">
            <header className="workcard__head">
              <Link href="/booked" className="text-section-subheader workcard__subtitle">
                <h3>Booked AI Web App</h3>
              </Link>
              <p className="text-body workcard__meta">Web App, Client Work, 2024</p>
            </header>

            <Link href="/booked" className="workcard__thumb workcard__thumb_2" aria-label="Booked AI Web App thumbnail placeholder">
            
            </Link>

            <p className="text-body workcard__desc">
              Scaled travel-tech AI startup with desktop version web application.
            </p>

            <div className="workcard__underline" />
          </article>

          {/* 3) AI Agent */}
          <article className="workcard workcard--3">
            <header className="workcard__head">
              <Link href="/agent" className="text-section-subheader workcard__subtitle">
                <h3>AI Agent</h3>
              </Link>
              <p className="text-body workcard__meta">UX Research, Client Work, 2025</p>
            </header>

            <Link href="/agent" className="workcard__thumb workcard__thumb_3">
            
            </Link>


            <p className="text-body workcard__desc">
              Conducted a thorough secondary research on current AI agent platforms and business models.
            </p>

            <div className="workcard__underline" />
          </article>

          {/* 4) Opentext */}
          <article className="workcard workcard--4">
            <header className="workcard__head">
              <Link href="/opentext" className="text-section-subheader workcard__subtitle">
                <h3>Opentext</h3>
              </Link>
              <p className="text-body workcard__meta">Design System, Internship Work, 2023</p>
            </header>

            <Link href="/opentext" className="workcard__thumb workcard__thumb_4" aria-label="Opentext thumbnail placeholder">
              
            </Link>

            <p className="text-body workcard__desc">
              Built accessible design system components and icon library.
            </p>

            <div className="workcard__underline" />
          </article>

          {/* 5) Potsale */}
          <article className="workcard workcard--5">
            <header className="workcard__head">
              <Link href="/potsale" className="text-section-subheader workcard__subtitle">
                <h3>Potsale</h3>
              </Link>
              <p className="text-body workcard__meta">Webapp Design, Personal Project, 2023</p>
            </header>

            <Link href="/potsale" className="workcard__thumb workcard__thumb_5" aria-label="Potsale thumbnail placeholder">
              
            </Link>

            <p className="text-body workcard__desc">
              Designed a e-commerce seller dashboard system based on primary research on Waterloo Potters.
            </p>

            <div className="workcard__underline" />
          </article>
        </div>
      </div>
    </section>
  );
}
