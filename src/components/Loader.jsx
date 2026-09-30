import { useEffect, useState } from "react";
import "./Loader.scss";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let animationFrame;
    let leaveTimer;
    let hideTimer;

    document.body.classList.add("is-loading");

    const start = performance.now();
    const duration = 1350;

    const animate = (time) => {
      const elapsed = time - start;

      const raw = Math.min(
        elapsed / duration,
        1,
      );

      /*
        Smooth progress:
        fast initially,
        slower near 100.
      */
      const eased =
        1 - Math.pow(1 - raw, 3);

      const value = Math.min(
        Math.floor(eased * 100),
        100,
      );

      setProgress(value);

      if (raw < 1) {
        animationFrame =
          requestAnimationFrame(animate);

        return;
      }

      setProgress(100);

      leaveTimer = window.setTimeout(() => {
        setLeaving(true);

        document.body.classList.remove(
          "is-loading",
        );
      }, 220);

      hideTimer = window.setTimeout(() => {
        setHidden(true);
      }, 1150);
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);

      clearTimeout(leaveTimer);
      clearTimeout(hideTimer);

      document.body.classList.remove(
        "is-loading",
      );
    };
  }, []);

  if (hidden) return null;

  const counter = String(progress).padStart(
    3,
    "0",
  );

  return (
    <div
      className={`site-loader ${
        leaving ? "is-leaving" : ""
      }`}
      aria-hidden="true"
    >
      <div className="site-loader__center">
        {/* BRAND */}

        <div className="site-loader__brand">
          <span>Maple</span>

          <em>&amp;</em>

          <span>Thyme</span>
        </div>

        {/* PROGRESS LINE */}

        <div className="site-loader__track">
          <span
            className="site-loader__fill"
            style={{
              transform: `scaleX(${
                progress / 100
              })`,
            }}
          />
        </div>

        {/* COUNTER */}

        <div className="site-loader__count">
          {counter}
        </div>
      </div>

      {/* SMALL DETAILS */}

      <div className="site-loader__corner site-loader__corner--left">
        JAIPUR · INDIA
      </div>

      <div className="site-loader__corner site-loader__corner--right">
        EST. 2026
      </div>
    </div>
  );
}