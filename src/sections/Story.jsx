import { useEffect, useRef } from "react";
import { Link } from "react-router";

import storyDetail from "../assets/images/IMG_3119.webp";

import "./Story.scss";

export default function Story() {
  const imageRef = useRef(null);

  useEffect(() => {
    const element = imageRef.current;

    if (!element) return undefined;

    if (!("IntersectionObserver" in window)) {
      element.classList.add("is-visible");
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        element.classList.add("is-visible");
        observer.disconnect();
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="story"
      className="mt-story"
      aria-labelledby="story-title"
    >
      <div className="mt-story__inner">
        <div className="mt-story__copy">
          <div className="mt-story__meta">
            <span>01</span>
            <span>Our story</span>
          </div>

          <p className="mt-story__eyebrow">
            A PLACE TO COME TOGETHER
          </p>

          <h2 id="story-title">
            The best moments happen
            <em>around a table.</em>
          </h2>

          <div className="mt-story__body">
            <p>
              Some conversations deserve another cup. Some evenings deserve
              another hour.
            </p>

            <p>
              Maple &amp; Thyme is a place to slow down, settle in and enjoy
              the people you came with.
            </p>
          </div>

          <Link to="/about" className="mt-story__link">
            <span>Discover our story</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div
          ref={imageRef}
          className="mt-story__visual"
        >
          <figure className="mt-story__main-image">
            <div className="mt-story__image-reveal">
              <img
                src={storyDetail}
                alt="Dining ambience at Maple and Thyme"
                loading="lazy"
                decoding="async"
              />

              <span
                className="mt-story__reveal-mask"
                aria-hidden="true"
              />
            </div>

            <figcaption>
              <span>Maple &amp; Thyme</span>
              <span>Jaipur</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}