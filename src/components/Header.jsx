import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router";

import "./Header.scss";

const links = [
  { label: "Home", to: "/", number: "01" },
  { label: "About", to: "/about", number: "02" },
  { label: "Menu", to: "/menu", number: "03" },
  { label: "Gallery", to: "/gallery", number: "04" },
  { label: "Contact", to: "/contact", number: "05" },
];

export default function Header() {
  const { pathname } = useLocation();

  const toggleRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const [isSolid, setIsSolid] = useState(
    pathname !== "/",
  );

  /* =========================
     HEADER ON SCROLL
  ========================= */

  useEffect(() => {
    const updateHeader = () => {
      setIsSolid(
        pathname !== "/" ||
          window.scrollY > 30,
      );
    };

    updateHeader();

    window.addEventListener(
      "scroll",
      updateHeader,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateHeader,
      );
    };
  }, [pathname]);

  /* =========================
     CLOSE MENU ON ROUTE CHANGE
  ========================= */

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  /* =========================
     MOBILE MENU
  ========================= */

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow =
      document.body.style.overflow;

    const main =
      document.getElementById("main-content");

    const footer =
      document.querySelector(".site-footer");

    document.body.style.overflow = "hidden";

    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");

    const focusTimer = window.setTimeout(() => {
      document
        .querySelector(
          "#mobile-navigation a",
        )
        ?.focus();
    }, 80);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);

        window.setTimeout(() => {
          toggleRef.current?.focus();
        }, 0);

        return;
      }

      if (event.key !== "Tab") return;

      const focusable = [
        toggleRef.current,
        ...document.querySelectorAll(
          "#mobile-navigation a",
        ),
      ].filter(Boolean);

      if (!focusable.length) return;

      const currentIndex =
        focusable.indexOf(
          document.activeElement,
        );

      const direction =
        event.shiftKey ? -1 : 1;

      const nextIndex =
        (
          currentIndex +
          direction +
          focusable.length
        ) % focusable.length;

      event.preventDefault();

      focusable[nextIndex]?.focus();
    };

    const handleResize = () => {
      if (window.innerWidth > 950) {
        setIsOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    window.addEventListener(
      "resize",
      handleResize,
    );

    return () => {
      clearTimeout(focusTimer);

      document.body.style.overflow =
        previousOverflow;

      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );

      window.removeEventListener(
        "resize",
        handleResize,
      );
    };
  }, [isOpen]);

  return (
    <>
      {/* =========================
          HEADER
      ========================= */}

      <header
        className={[
          "site-header",
          isSolid ? "is-solid" : "",
          isOpen ? "is-menu-open" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="site-header__inner">
          {/* BRAND */}

          <NavLink
            to="/"
            className="site-header__brand"
            aria-label="Maple and Thyme home"
            onClick={() => setIsOpen(false)}
          >
            <span className="site-header__brand-main">
              Maple
              <em>&amp;</em>
              Thyme
            </span>

            <small>
              JAIPUR · INDIA
            </small>
          </NavLink>

          {/* DESKTOP NAV */}

          <nav
            className="site-header__links"
            aria-label="Main navigation"
          >
            {links.map(
              ({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={({
                    isActive,
                  }) =>
                    isActive
                      ? "is-active"
                      : ""
                  }
                >
                  {label}
                </NavLink>
              ),
            )}
          </nav>

          {/* RESERVE */}

          <NavLink
            to="/reserve"
            className={({ isActive }) =>
              `site-header__reserve ${
                isActive
                  ? "is-active"
                  : ""
              }`
            }
          >
            <span>Reserve</span>

            <span aria-hidden="true">
              ↗
            </span>
          </NavLink>

          {/* MOBILE TOGGLE */}

          <button
            ref={toggleRef}
            className={`site-header__toggle ${
              isOpen ? "is-open" : ""
            }`}
            type="button"
            aria-label={
              isOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() =>
              setIsOpen(
                (current) => !current,
              )
            }
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* =========================
          MOBILE NAVIGATION
      ========================= */}

      <div
        id="mobile-navigation"
        className={`mobile-navigation ${
          isOpen ? "is-open" : ""
        }`}
        aria-hidden={!isOpen}
      >
        <div className="mobile-navigation__inner">
          <div className="mobile-navigation__top">
            <span>Explore</span>

            <span>
              Maple &amp; Thyme
            </span>
          </div>

          <nav
            className="mobile-navigation__links"
            aria-label="Mobile navigation"
          >
            {links.map(
              ({
                label,
                to,
                number,
              }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  tabIndex={
                    isOpen ? 0 : -1
                  }
                  className={({
                    isActive,
                  }) =>
                    isActive
                      ? "is-active"
                      : ""
                  }
                  onClick={() =>
                    setIsOpen(false)
                  }
                >
                  <span>{number}</span>

                  <strong>
                    {label}
                  </strong>

                  <span
                    className="mobile-navigation__arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </NavLink>
              ),
            )}
          </nav>

          <div className="mobile-navigation__bottom">
            <NavLink
              to="/reserve"
              tabIndex={
                isOpen ? 0 : -1
              }
              className="mobile-navigation__reserve"
              onClick={() =>
                setIsOpen(false)
              }
            >
              <span>
                Request a table
              </span>

              <span aria-hidden="true">
                ↗
              </span>
            </NavLink>

            <div className="mobile-navigation__meta">
              <span>
                RAMNAGARIYA · JAIPUR
              </span>

              <span>
                PURE VEGETARIAN
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}