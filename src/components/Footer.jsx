import { Link } from "react-router";

import { business } from "../data/business";

import "./Footer.scss";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Menu", to: "/menu" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const CONTACT = {
  address:
    "Maple and Thyme, SKIT College Rd, Shivam Nagar, Ramnagariya, Jaipur, Rajasthan 302017",

  email: "info.mapleandthyme@gmail.com",

  instagram:
    "https://www.instagram.com/mapleandthymeofficials/",

  instagramHandle: "@mapleandthymeofficials",
};

export default function Footer() {
  const directionsUrl =
    `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      CONTACT.address,
    )}`;

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="site-footer">
      {/* =====================================
          RESERVATION CTA
      ====================================== */}

      <section className="site-footer__cta">
        <div className="site-footer__inner">
          <p className="site-footer__eyebrow">
            COME TOGETHER AT MAPLE &amp; THYME
          </p>

          <div className="site-footer__cta-row">
            <h2>
              Make time for
              <em>one more moment.</em>
            </h2>

            <Link
              to="/reserve"
              className="site-footer__reserve"
            >
              <span>Request a table</span>

              <span aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================
          FOOTER BASE
      ====================================== */}

      <section className="site-footer__base">
        <div className="site-footer__inner">
          <div className="site-footer__columns">
            {/* BRAND */}

            <div className="site-footer__brand">
              <Link
                to="/"
                className="site-footer__brand-name"
              >
                Maple
                <span>&amp;</span>
                Thyme
              </Link>

              <p>
                Good food. Warm conversations.
                <br />
                Time well spent.
              </p>

              <span className="site-footer__location-tag">
                RAMNAGARIYA · JAIPUR
              </span>
            </div>

            {/* EXPLORE */}

            <nav
              className="site-footer__navigation"
              aria-label="Footer navigation"
            >
              <span className="site-footer__label">
                EXPLORE
              </span>

              {links.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                >
                  <span>{label}</span>
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </nav>

            {/* VISIT */}

            <div className="site-footer__visit">
              <span className="site-footer__label">
                FIND US
              </span>

              <address>
                SKIT College Rd,
                <br />
                Shivam Nagar,
                <br />
                Ramnagariya, Jaipur
                <br />
                Rajasthan 302017
              </address>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__inline-link"
              >
                <span>Get directions</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* CONTACT */}

            <div className="site-footer__contact">
              <span className="site-footer__label">
                SAY HELLO
              </span>

              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                {business.phone}
              </a>

              <a href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>

              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  {CONTACT.instagramHandle}
                </span>

                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* =================================
              BOTTOM
          ================================== */}

          <div className="site-footer__bottom">
            <span>
              © {new Date().getFullYear()} Maple &amp; Thyme
            </span>

            <span className="site-footer__bottom-message">
              MADE FOR MOMENTS THAT LAST
            </span>

            <button
              type="button"
              onClick={scrollToTop}
            >
              <span>Back to top</span>
              <span aria-hidden="true">↑</span>
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
}