import { useEffect, useRef } from "react";
import { Link } from "react-router";

import image3119 from "../assets/images/IMG_3119.webp";
import image7276 from "../assets/images/IMG_7276.webp";
import image7339 from "../assets/images/IMG_7339.webp";
import image7359 from "../assets/images/IMG_7359.webp";

import "./About.scss";

const values = [
  {
    number: "01",
    title: "Food to gather around",
    description:
      "A table feels better when there is something worth sharing.",
  },
  {
    number: "02",
    title: "Time well spent",
    description:
      "Long conversations, unhurried afternoons and one more moment together.",
  },
  {
    number: "03",
    title: "A place in Jaipur",
    description:
      "A warm setting for familiar faces, new conversations and everyday occasions.",
  },
];

export default function About() {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;

    if (!page) return undefined;

    const elements = page.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main ref={pageRef} className="mt-about">
      {/* =========================
          INTRO
      ========================= */}

      <section
        className="mt-about__hero"
        aria-labelledby="about-title"
      >
        <div className="mt-about__hero-inner">
          <div className="mt-about__hero-meta">
            <span>01</span>
            <span>Our story</span>
          </div>

          <p className="mt-about__eyebrow">
            MAPLE &amp; THYME · JAIPUR
          </p>

          <div className="mt-about__hero-grid">
            <h1 id="about-title">
              Made for moments
              <em>that ask you to stay.</em>
            </h1>

            <div className="mt-about__hero-copy">
              <p>
                Maple &amp; Thyme is a place to slow down, settle in
                and enjoy the people around you.
              </p>

              <Link to="/menu" className="mt-about__text-link">
                <span>Explore the menu</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          STORY
      ========================= */}

      <section className="mt-about__story">
        <div className="mt-about__story-inner">
          <div
            className="mt-about__story-media"
            data-reveal
          >
            <div className="mt-about__image-reveal">
              <img
                src={image3119}
                alt="Maple and Thyme restaurant ambience"
                loading="eager"
                decoding="async"
              />

              <span
                className="mt-about__image-mask"
                aria-hidden="true"
              />
            </div>

            <div className="mt-about__image-caption">
              <span>Maple &amp; Thyme</span>
              <span>Jaipur</span>
            </div>
          </div>

          <div
            className="mt-about__story-copy"
            data-reveal
          >
            <p className="mt-about__eyebrow">
              THE MAPLE &amp; THYME WAY
            </p>

            <h2>
              A little less hurry.
              <em>A little more here.</em>
            </h2>

            <div className="mt-about__prose">
              <p>
                Some conversations deserve another cup. Some evenings
                deserve another hour.
              </p>

              <p>
                That feeling sits at the heart of Maple &amp; Thyme —
                good food on the table, a comfortable place to settle
                and enough time to enjoy the people you came with.
              </p>

              <p>
                Come for a catch-up, a celebration or simply a pause
                in the middle of the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          VALUES
      ========================= */}

      <section className="mt-about__values">
        <div className="mt-about__values-inner">
          <div
            className="mt-about__values-heading"
            data-reveal
          >
            <p className="mt-about__eyebrow">
              ROOM FOR THE EVERYDAY
            </p>

            <h2>
              The little things
              <em>matter.</em>
            </h2>
          </div>

          <div className="mt-about__value-grid">
            {values.map((value) => (
              <article
                key={value.number}
                data-reveal
              >
                <span className="mt-about__value-number">
                  {value.number}
                </span>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          EXPERIENCE
      ========================= */}

      <section className="mt-about__experience">
        <div className="mt-about__experience-inner">
          <div
            className="mt-about__experience-copy"
            data-reveal
          >
            <p className="mt-about__eyebrow">
              THE EXPERIENCE
            </p>

            <h2>
              More than a meal.
              <em>A reason to linger.</em>
            </h2>

            <p>
              From quieter afternoons to longer evenings, the space is
              designed around one simple idea — make people feel
              comfortable enough to stay.
            </p>

            <Link to="/gallery" className="mt-about__text-link">
              <span>See the gallery</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="mt-about__experience-gallery">
            <figure
              className="mt-about__experience-image mt-about__experience-image--large"
              data-reveal
            >
              <div className="mt-about__image-reveal">
                <img
                  src={image7276}
                  alt="Dining space at Maple and Thyme"
                  loading="lazy"
                  decoding="async"
                />

                <span
                  className="mt-about__image-mask"
                  aria-hidden="true"
                />
              </div>
            </figure>

            <figure
              className="mt-about__experience-image mt-about__experience-image--small"
              data-reveal
            >
              <div className="mt-about__image-reveal">
                <img
                  src={image7339}
                  alt="Interior detail at Maple and Thyme"
                  loading="lazy"
                  decoding="async"
                />

                <span
                  className="mt-about__image-mask"
                  aria-hidden="true"
                />
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* =========================
          CLOSING IMAGE
      ========================= */}

      <section
        className="mt-about__moment"
        data-reveal
      >
        <div className="mt-about__moment-image">
          <img
            src={image7359}
            alt="An evening at Maple and Thyme"
            loading="lazy"
            decoding="async"
          />

          <div className="mt-about__moment-shade" />

          <div className="mt-about__moment-copy">
            <span>MAPLE &amp; THYME</span>

            <p>
              Good food.
              <br />
              Good company.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          RESERVATION CTA
      ========================= */}

    
    </main>
  );
}