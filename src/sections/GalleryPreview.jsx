import { useEffect, useRef } from "react";
import { Link } from "react-router";

import image3119 from "../assets/images/IMG_3119.webp";
import image3127 from "../assets/images/IMG_3127.webp";
import image3136 from "../assets/images/IMG_3136.webp";
import image7276 from "../assets/images/IMG_7276.webp";
import image7339 from "../assets/images/IMG_7339.webp";
import image7359 from "../assets/images/IMG_7359.webp";

import video3148 from "../assets/videos/IMG_3148.mp4";
import video3158 from "../assets/videos/IMG_3158.mp4";
import video7305 from "../assets/videos/IMG_7305.mp4";
import video7312 from "../assets/videos/IMG_7312.mp4";
import video7373 from "../assets/videos/IMG_7373.mp4";
import video7375 from "../assets/videos/IMG_7375.mp4";
import video7378 from "../assets/videos/IMG_7378.mp4";

import "./GalleryPreview.scss";

const lookbook = [
  {
    src: image3119,
    alt: "Maple and Thyme restaurant",
    className: "mt-lookbook__item--one",
  },
  {
    src: image7276,
    alt: "Maple and Thyme dining space",
    className: "mt-lookbook__item--two",
  },
  {
    src: image3136,
    alt: "Maple and Thyme interior",
    className: "mt-lookbook__item--three",
  },
  {
    src: image3127,
    alt: "Maple and Thyme ambience",
    className: "mt-lookbook__item--four",
  },
  {
    src: image7339,
    alt: "Maple and Thyme restaurant detail",
    className: "mt-lookbook__item--five",
  },
  {
    src: image7359,
    alt: "Maple and Thyme experience",
    className: "mt-lookbook__item--six",
  },
];

const motionItems = [
  { src: video3148, number: "01", label: "The Space" },
  { src: video3158, number: "02", label: "At The Table" },
  { src: video7305, number: "03", label: "Details" },
  { src: video7312, number: "04", label: "The Experience" },
  { src: video7373, number: "05", label: "Inside Maple" },
  { src: video7375, number: "06", label: "The Mood" },
  { src: video7378, number: "07", label: "In Motion" },
];

export default function GalleryPreview() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    const revealElements = section.querySelectorAll("[data-reveal]");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });

    const videos = section.querySelectorAll("video");

    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (!(video instanceof HTMLVideoElement)) return;

          if (entry.isIntersecting) {
            video.play().catch(() => undefined);
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.35,
      },
    );

    videos.forEach((video) => {
      videoObserver.observe(video);
    });

    return () => {
      revealObserver.disconnect();
      videoObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mt-gallery-preview"
      aria-labelledby="gallery-preview-title"
    >
      <div className="mt-gallery-preview__intro" data-reveal>
        <p className="mt-gallery-preview__eyebrow">THE LOOKBOOK</p>

        <div className="mt-gallery-preview__title-row">
          <h2 id="gallery-preview-title">
            A closer look
            <em>inside Maple &amp; Thyme.</em>
          </h2>

          <div className="mt-gallery-preview__intro-copy">
            <p>
              Spaces, details and quiet moments from around the restaurant.
            </p>

            <Link to="/gallery" className="mt-gallery-preview__link">
              <span>Explore gallery</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-lookbook">
        {lookbook.map((item, index) => (
          <figure
            key={item.src}
            className={`mt-lookbook__item ${item.className}`}
            data-reveal
          >
            <div className="mt-lookbook__media">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
              />

              <span
                className="mt-lookbook__mask"
                aria-hidden="true"
              />
            </div>

            <figcaption>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>Maple &amp; Thyme · Jaipur</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-motion">
        <div className="mt-motion__heading" data-reveal>
          <div>
            <p className="mt-motion__eyebrow">IN MOTION</p>

            <h2>
              See the atmosphere
              <em>come alive.</em>
            </h2>
          </div>

          <p className="mt-motion__copy">
            A few moments from inside Maple &amp; Thyme — from the space to
            the table.
          </p>
        </div>

        <div className="mt-motion__rail">
          {motionItems.map((item) => (
            <article
              key={item.src}
              className="mt-motion__item"
              data-reveal
            >
              <div className="mt-motion__media">
                <video
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`Maple and Thyme — ${item.label}`}
                >
                  <source src={item.src} type="video/mp4" />
                </video>

                <div className="mt-motion__shade" />

                <div className="mt-motion__meta">
                  <span>{item.number}</span>
                  <span>{item.label}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-motion__footer" data-reveal>
          <span>07 moments in motion</span>

          <Link to="/gallery" className="mt-gallery-preview__link">
            <span>View all moments</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}