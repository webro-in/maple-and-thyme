import { useEffect, useRef } from "react";
import { Link } from "react-router";

import { business } from "../data/business";

import contactImage from "../assets/images/IMG_7339.webp";

import "./Contact.scss";

const CONTACT = {
  address:
    "Maple and Thyme, SKIT College Rd, Shivam Nagar, Ramnagariya, Jaipur, Rajasthan 302017",

  email: "info.mapleandthyme@gmail.com",

  instagram:
    "https://www.instagram.com/mapleandthymeofficials/",

  instagramHandle: "@mapleandthymeofficials",

  mapsPlace:
    "https://www.google.com/maps/place/Maple+and+thyme/data=!4m2!3m1!1s0x0:0xb63fba433a936230?sa=X&ved=1t:2428&ictx=111",
};

export default function Contact() {
  const pageRef = useRef(null);

  const encodedAddress = encodeURIComponent(
    CONTACT.address,
  );

  const directionsUrl =
    `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

  const mapEmbedUrl =
    `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  useEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const elements =
      page.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });

      return;
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
        rootMargin: "0px 0px -7% 0px",
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main
      ref={pageRef}
      className="mt-contact"
    >
      {/* =====================================
          INTRO
      ====================================== */}

      <section className="mt-contact__hero">
        <div className="mt-contact__container">
          <div className="mt-contact__meta">
            <span>04</span>
            <span>Find us</span>
          </div>

          <div className="mt-contact__hero-grid">
            <div className="mt-contact__hero-title">
              <p className="mt-contact__eyebrow">
                MAPLE &amp; THYME · JAIPUR
              </p>

              <h1>
                Come by.
                <em>Stay awhile.</em>
              </h1>
            </div>

            <div className="mt-contact__hero-copy">
              <p>
                Good food, familiar faces and a table
                waiting for another conversation.
              </p>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Get directions</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          VISIT
      ====================================== */}

      <section className="mt-contact__visit">
        <div className="mt-contact__container">
          <div className="mt-contact__visit-grid">
            {/* IMAGE */}

            <div
              className="mt-contact__visual"
              data-reveal
            >
              <div className="mt-contact__image">
                <img
                  src={contactImage}
                  alt="Maple and Thyme restaurant"
                />

                <div className="mt-contact__image-overlay" />

                <div className="mt-contact__image-text">
                  <span>
                    MAPLE &amp; THYME
                  </span>

                  <p>
                    Your next table
                    <br />
                    is closer than you think.
                  </p>
                </div>
              </div>

              <div className="mt-contact__image-footer">
                <span>RAMNAGARIYA · JAIPUR</span>

                <span>PURE VEGETARIAN</span>
              </div>
            </div>

            {/* ADDRESS */}

            <div
              className="mt-contact__visit-copy"
              data-reveal
            >
              <div className="mt-contact__section-number">
                01 / VISIT
              </div>

              <p className="mt-contact__eyebrow">
                FIND YOUR WAY
              </p>

              <h2>
                Right around
                <em>the corner.</em>
              </h2>

              <div className="mt-contact__address">
                <span>ADDRESS</span>

                <p>
                  Maple and Thyme
                  <br />
                  SKIT College Rd, Shivam Nagar
                  <br />
                  Ramnagariya, Jaipur
                  <br />
                  Rajasthan 302017
                </p>
              </div>

              <div className="mt-contact__visit-actions">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-contact__primary-link"
                >
                  <span>Get directions</span>
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  href={CONTACT.mapsPlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-contact__text-link"
                >
                  Open Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          MAP
      ====================================== */}

      <section
        className="mt-contact__map-section"
        data-reveal
      >
        <div className="mt-contact__map-heading">
          <div>
            <span>02 / LOCATION</span>

            <h2>
              See exactly
              <em>where we are.</em>
            </h2>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Start directions</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="mt-contact__map">
          <iframe
            src={mapEmbedUrl}
            title="Maple and Thyme location on Google Maps"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-contact__map-footer">
          <span>SKIT COLLEGE ROAD</span>
          <span>RAMNAGARIYA · JAIPUR</span>
        </div>
      </section>

      {/* =====================================
          CONTACT METHODS
      ====================================== */}

      <section className="mt-contact__connect">
        <div className="mt-contact__container">
          <div
            className="mt-contact__connect-heading"
            data-reveal
          >
            <div>
              <span className="mt-contact__section-number">
                03 / CONNECT
              </span>

              <p className="mt-contact__eyebrow">
                TALK TO US
              </p>
            </div>

            <h2>
              However you
              <em>like to reach us.</em>
            </h2>
          </div>

          <div className="mt-contact__contact-list">
            {/* WHATSAPP */}

            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-contact__contact-row"
              data-reveal
            >
              <span className="mt-contact__contact-index">
                01
              </span>

              <div>
                <span className="mt-contact__contact-label">
                  WHATSAPP / CALL
                </span>

                <strong>
                  {business.phone}
                </strong>
              </div>

              <p>
                Reservations, gatherings and
                quick questions.
              </p>

              <span
                className="mt-contact__arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>

            {/* EMAIL */}

            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-contact__contact-row"
              data-reveal
            >
              <span className="mt-contact__contact-index">
                02
              </span>

              <div>
                <span className="mt-contact__contact-label">
                  EMAIL
                </span>

                <strong>
                  {CONTACT.email}
                </strong>
              </div>

              <p>
                Enquiries, collaborations and
                restaurant conversations.
              </p>

              <span
                className="mt-contact__arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>

            {/* INSTAGRAM */}

            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-contact__contact-row"
              data-reveal
            >
              <span className="mt-contact__contact-index">
                03
              </span>

              <div>
                <span className="mt-contact__contact-label">
                  INSTAGRAM
                </span>

                <strong>
                  {CONTACT.instagramHandle}
                </strong>
              </div>

              <p>
                Follow the table, food and
                moments from Maple &amp; Thyme.
              </p>

              <span
                className="mt-contact__arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================
          SMALL FINAL STRIP
      ====================================== */}

      <section className="mt-contact__plan">
        <div
          className="mt-contact__plan-inner"
          data-reveal
        >
          <div>
            <span>
              PLANNING A VISIT?
            </span>

            <h2>
              Save your
              <em>seat at the table.</em>
            </h2>
          </div>

          <div className="mt-contact__plan-links">
            <Link to="/reserve">
              <span>Request a table</span>
              <span aria-hidden="true">↗</span>
            </Link>

            <Link to="/menu">
              Explore the menu
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}