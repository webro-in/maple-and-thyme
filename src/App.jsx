import { useEffect } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Reserve from "./pages/Reserve";

import "./styles/pages.scss";

const pageTitles = {
  "/": "Good food. Good company.",
  "/about": "Our story",
  "/menu": "Menu",
  "/gallery": "Gallery",
  "/contact": "Visit us",
  "/reserve": "Plan your visit",
};

function NotFound() {
  return (
    <main className="site-start">
      <span className="eyebrow">
        404 / A little detour
      </span>

      <h1>This table isn’t here.</h1>

      <p>
        Let’s get you back to a familiar place.
      </p>

      <Link to="/">
        Back to home ↗
      </Link>
    </main>
  );
}

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = `${
      pageTitles[pathname] ?? "Page not found"
    } | Maple & Thyme`;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    const timer = window.setTimeout(() => {
      document
        .getElementById("main-content")
        ?.focus({
          preventScroll: true,
        });
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <>
      {/* GLOBAL LOADER */}
      <Loader key={pathname} />

      {/* ACCESSIBILITY */}
      <a
        className="skip-link"
        href="#main-content"
      >
        Skip to content
      </a>

      {/* HEADER */}
      <Header />

      {/* PAGES */}
      <div
        id="main-content"
        tabIndex={-1}
      >
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/menu"
            element={<Menu />}
          />

          <Route
            path="/gallery"
            element={<Gallery />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/reserve"
            element={<Reserve />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}