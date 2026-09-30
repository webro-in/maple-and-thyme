import { useEffect, useRef, useState } from "react";
import "./Gallery.scss";

import img3103 from "../assets/images/IMG_3103.webp";
import img3107 from "../assets/images/IMG_3107.webp";
import img3110 from "../assets/images/IMG_3110.webp";
import img3111 from "../assets/images/IMG_3111.webp";
import img3112 from "../assets/images/IMG_3112.webp";
import img3117 from "../assets/images/IMG_3117.webp";
import img3118 from "../assets/images/IMG_3118.webp";
import img3119 from "../assets/images/IMG_3119.webp";
import img3120 from "../assets/images/IMG_3120.webp";
import img3121 from "../assets/images/IMG_3121.webp";
import img3124 from "../assets/images/IMG_3124.webp";
import img3127 from "../assets/images/IMG_3127.webp";
import img3128 from "../assets/images/IMG_3128.webp";
import img3129 from "../assets/images/IMG_3129.webp";
import img3131 from "../assets/images/IMG_3131.webp";
import img3133 from "../assets/images/IMG_3133.webp";
import img3135 from "../assets/images/IMG_3135.webp";
import img3136 from "../assets/images/IMG_3136.webp";
import img3137 from "../assets/images/IMG_3137.webp";
import img3139 from "../assets/images/IMG_3139.webp";
import img3140 from "../assets/images/IMG_3140.webp";
import img3141 from "../assets/images/IMG_3141.webp";
import img3159 from "../assets/images/IMG_3159.webp";
import img3160 from "../assets/images/IMG_3160.webp";
import img3162 from "../assets/images/IMG_3162.webp";
import img3164 from "../assets/images/IMG_3164.webp";

import img7264 from "../assets/images/IMG_7264.webp";
import img7266 from "../assets/images/IMG_7266.webp";
import img7270 from "../assets/images/IMG_7270.webp";
import img7271 from "../assets/images/IMG_7271.webp";
import img7273 from "../assets/images/IMG_7273.webp";
import img7276 from "../assets/images/IMG_7276.webp";
import img7277 from "../assets/images/IMG_7277.webp";
import img7279 from "../assets/images/IMG_7279.webp";
import img7282 from "../assets/images/IMG_7282.webp";
import img7283 from "../assets/images/IMG_7283.webp";
import img7286 from "../assets/images/IMG_7286.webp";
import img7295 from "../assets/images/IMG_7295.webp";
import img7298 from "../assets/images/IMG_7298.webp";

import img7339 from "../assets/images/IMG_7339.webp";
import img7343 from "../assets/images/IMG_7343.webp";
import img7344 from "../assets/images/IMG_7344.webp";
import img7345 from "../assets/images/IMG_7345.webp";
import img7359 from "../assets/images/IMG_7359.webp";

const galleryImages = [
  img3119, // 08 - IMG_3119.webp
  img3107, // 02 - IMG_3107.webp
  img3111, // 04 - IMG_3111.webp
  img3112, // 05 - IMG_3112.webp
  img3117, // 06 - IMG_3117.webp
  img3118, // 07 - IMG_3118.webp
  img3120, // 09 - IMG_3120.webp
  img3121, // 10 - IMG_3121.webp
  img3133, // 16 - IMG_3133.webp
  img3135, // 17 - IMG_3135.webp
  img3136, // 18 - IMG_3136.webp
  img3137, // 19 - IMG_3137.webp
  img3139, // 20 - IMG_3139.webp
  img3140, // 21 - IMG_3140.webp
  img3141, // 22 - IMG_3141.webp
  img3159, // 23 - IMG_3159.webp
  img3160, // 24 - IMG_3160.webp
  img3162, // 25 - IMG_3162.webp
  img3164, // 26 - IMG_3164.webp

  img7264, // 27 - IMG_7264.webp
  img7266, // 28 - IMG_7266.webp
  img7270, // 29 - IMG_7270.webp
  img7271, // 30 - IMG_7271.webp
  img7273, // 31 - IMG_7273.webp
  img7276, // 32 - IMG_7276.webp
  img7277, // 33 - IMG_7277.webp
  img7279, // 34 - IMG_7279.webp
  img7282, // 35 - IMG_7282.webp
  img7283, // 36 - IMG_7283.webp
  img7286, // 37 - IMG_7286.webp
  img7295, // 38 - IMG_7295.webp
  img7298, // 39 - IMG_7298.webp

  img7339, // 40 - IMG_7339.webp
  img7343, // 41 - IMG_7343.webp
  img7344, // 42 - IMG_7344.webp
  img7345, // 43 - IMG_7345.webp
  img7359, // 44 - IMG_7359.webp
];

const getCardClass = (index) => {
  const pattern = [
    "featured",
    "portrait",
    "standard",
    "wide",
    "portrait",
    "standard",
    "tall",
    "wide",
    "standard",
    "portrait",
    "large",
    "standard",
  ];

  return pattern[index % pattern.length];
};

export default function Gallery() {
  const pageRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedImage =
    selectedIndex !== null ? galleryImages[selectedIndex] : null;

  useEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const elements = page.querySelectorAll("[data-reveal]");

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
        threshold: 0.08,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === galleryImages.length - 1 ? 0 : current + 1,
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === 0 ? galleryImages.length - 1 : current - 1,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <main ref={pageRef} className="mt-gallery">
      <section className="mt-gallery__hero">
        <div className="mt-gallery__hero-inner">
          <p className="mt-gallery__eyebrow">
            THE GALLERY · MAPLE &amp; THYME
          </p>

          <div className="mt-gallery__hero-grid">
            <h1>
              Moments from
              <em>around the table.</em>
            </h1>

            <div className="mt-gallery__hero-copy">
              <p>
                A collection of spaces, details and moments from inside Maple
                &amp; Thyme.
              </p>

              <div className="mt-gallery__count">
                <strong>44</strong>
                <span>photographs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mt-gallery__collection"
        aria-label="Maple and Thyme gallery"
      >
        <div className="mt-gallery__collection-head">
          <span>01</span>
          <span>The collection</span>
          <span>Jaipur · India</span>
        </div>

        <div className="mt-gallery__grid">
          {galleryImages.map((src, index) => (
            <figure
              key={src}
              className={`mt-gallery__item mt-gallery__item--${getCardClass(
                index,
              )}`}
              data-reveal
            >
              <button
                type="button"
                className="mt-gallery__button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Open gallery image ${index + 1}`}
              >
                <div className="mt-gallery__media">
                  <img
                    src={src}
                    alt={`Maple and Thyme gallery ${index + 1}`}
                    loading={index < 4 ? "eager" : "lazy"}
                    decoding="async"
                  />

                  <span
                    className="mt-gallery__reveal-mask"
                    aria-hidden="true"
                  />

                  <span
                    className="mt-gallery__open"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
              </button>

              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <span>
                  Maple &amp; Thyme
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-gallery__closing" data-reveal>
        <p>END OF THE COLLECTION</p>

        <h2>
          Come for the food.
          <em>Stay for the feeling.</em>
        </h2>

        <span>Maple &amp; Thyme · Jaipur</span>
      </section>

      {selectedImage && (
        <div
          className="mt-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery image ${selectedIndex + 1}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedIndex(null);
            }
          }}
        >
          <button
            type="button"
            className="mt-lightbox__close"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close gallery"
          >
            <span>Close</span>
            <strong>×</strong>
          </button>

          <button
            type="button"
            className="mt-lightbox__nav mt-lightbox__nav--prev"
            onClick={showPrevious}
            aria-label="Previous image"
          >
            ←
          </button>

          <figure className="mt-lightbox__figure">
            <img
              src={selectedImage}
              alt={`Maple and Thyme photograph ${selectedIndex + 1}`}
            />

            <figcaption>
              <span>
                {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                {galleryImages.length}
              </span>

              <span>Maple &amp; Thyme · Jaipur</span>
            </figcaption>
          </figure>

          <button
            type="button"
            className="mt-lightbox__nav mt-lightbox__nav--next"
            onClick={showNext}
            aria-label="Next image"
          >
            →
          </button>
        </div>
      )}
    </main>
  );
}