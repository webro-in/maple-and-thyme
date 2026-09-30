import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

import heroPoster from "../assets/images/IMG_3119.webp";

import video3148 from "../assets/videos/IMG_3148.mp4";
import video3158 from "../assets/videos/IMG_3158.mp4";
import video7305 from "../assets/videos/IMG_7305.mp4";
import video7312 from "../assets/videos/IMG_7312.mp4";
import video7373 from "../assets/videos/IMG_7373.mp4";
import video7375 from "../assets/videos/IMG_7375.mp4";
import video7378 from "../assets/videos/IMG_7378.mp4";

import "./Hero.scss";

const heroVideos = [
  { src: video3148, position: "50% 61%" },
  { src: video7305, position: "50% 64%" },
  { src: video7373, position: "50% 78%" },
  { src: video7378, position: "50% 63%" },
  { src: video7312, position: "50% 50%" },
  { src: video7375, position: "50% 69%" },

  { src: video3158, position: "50% 48%" },
];

export default function Hero() {
  const videoARef = useRef(null);
  const videoBRef = useRef(null);

  const [activeLayer, setActiveLayer] = useState(0);
  const [videoIndexes, setVideoIndexes] = useState([0, 1]);

  const activeVideoIndex = videoIndexes[activeLayer];

  useEffect(() => {
    const activeVideo =
      activeLayer === 0 ? videoARef.current : videoBRef.current;

    const inactiveVideo =
      activeLayer === 0 ? videoBRef.current : videoARef.current;

    inactiveVideo?.pause();

    if (!activeVideo) return;

    activeVideo.currentTime = 0;

    activeVideo.play().catch(() => undefined);
  }, [activeLayer, videoIndexes]);

  const handleVideoEnd = (endedLayer) => {
    if (endedLayer !== activeLayer) return;

    const nextLayer = endedLayer === 0 ? 1 : 0;

    setVideoIndexes((current) => {
      const updated = [...current];

      updated[endedLayer] =
        (current[nextLayer] + 1) % heroVideos.length;

      return updated;
    });

    setActiveLayer(nextLayer);
  };

  const videoA = heroVideos[videoIndexes[0]];
  const videoB = heroVideos[videoIndexes[1]];

  return (
    <section className="mt-hero" aria-labelledby="hero-title">
      <div className="mt-hero__media" aria-hidden="true">
        <video
          ref={videoARef}
          className={`mt-hero__video ${
            activeLayer === 0 ? "is-active" : ""
          }`}
          src={videoA.src}
          style={{ objectPosition: videoA.position }}
          poster={heroPoster}
          muted
          playsInline
          preload="auto"
          onEnded={() => handleVideoEnd(0)}
        />

        <video
          ref={videoBRef}
          className={`mt-hero__video ${
            activeLayer === 1 ? "is-active" : ""
          }`}
          src={videoB.src}
          style={{ objectPosition: videoB.position }}
          poster={heroPoster}
          muted
          playsInline
          preload="auto"
          onEnded={() => handleVideoEnd(1)}
        />

        <div className="mt-hero__overlay" />
      </div>

      <div className="mt-hero__content">
        <p className="mt-hero__eyebrow">
          RESTAURANT · CAFÉ · GATHERING PLACE
        </p>

        <h1 id="hero-title">
          <span>A place to</span>
          <em>stay a little longer.</em>
        </h1>

        <div className="mt-hero__bottom-content">
          <p className="mt-hero__description">
            Good food, warm conversations and evenings made for more time
            around the table.
          </p>

          <div className="mt-hero__actions">
            <Link to="/reserve" className="mt-hero__primary">
              <span>Reserve a table</span>
              <span aria-hidden="true">↗</span>
            </Link>

            <Link to="/menu" className="mt-hero__secondary">
              <span>Explore menu</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-hero__footer">
        <span className="mt-hero__counter">
          {String(activeVideoIndex + 1).padStart(2, "0")}
          <span>/</span>
          {String(heroVideos.length).padStart(2, "0")}
        </span>

      </div>
    </section>
  );
}