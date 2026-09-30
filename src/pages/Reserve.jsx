import { useMemo, useState } from "react";
import { business } from "../data/business";

import reserveImage from "../assets/images/IMG_7359.webp";

import "./Reserve.scss";

/* =========================================
   TODAY - JAIPUR / INDIA
========================================= */

function jaipurToday() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const value = (type) =>
    parts.find((part) => part.type === type)?.value;

  return `${value("year")}-${value("month")}-${value("day")}`;
}

/* =========================================
   DATE FORMAT
========================================= */

function formatDate(date) {
  if (!date) return "";

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date(`${date}T12:00:00+05:30`));
}

/* =========================================
   12 HOUR -> 24 HOUR
========================================= */

function convertTo24Hour(hour, ampm) {
  let hour24 = Number(hour);

  if (ampm === "AM") {
    hour24 = hour24 === 12 ? 0 : hour24;
  }

  if (ampm === "PM") {
    hour24 = hour24 === 12 ? 12 : hour24 + 12;
  }

  return String(hour24).padStart(2, "0");
}

/* =========================================
   RESERVE PAGE
========================================= */

export default function Reserve() {
  const [feedback, setFeedback] = useState("");
  const [request, setRequest] = useState(null);

  const minimumDate = useMemo(() => jaipurToday(), []);

  /* =========================================
     PREPARE WHATSAPP REQUEST
  ========================================= */

  function prepareRequest(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") ?? "").trim();

    const phone = String(form.get("phone") ?? "")
      .replace(/\s+/g, "")
      .trim();

    const guests = String(form.get("guests") ?? "");

    const date = String(form.get("date") ?? "");

    const hour = String(form.get("hour") ?? "");

    const ampm = String(form.get("ampm") ?? "");

    const occasion = String(
      form.get("occasion") ?? "",
    ).trim();

    const notes = String(
      form.get("notes") ?? "",
    ).trim();

    /* NAME */

    if (!name) {
      setRequest(null);
      setFeedback("Please enter your name.");
      return;
    }

    /* PHONE */

    if (!/^[+0-9]{10,15}$/.test(phone)) {
      setRequest(null);
      setFeedback(
        "Please enter a valid phone number.",
      );
      return;
    }

    /* DATE */

    if (!date) {
      setRequest(null);
      setFeedback(
        "Please select your preferred date.",
      );
      return;
    }

    /* TIME */

    if (!hour || !ampm) {
      setRequest(null);
      setFeedback(
        "Please select your preferred time.",
      );
      return;
    }

    /* CONVERT TIME FOR VALIDATION */

    const hour24 = convertTo24Hour(hour, ampm);

    const requestedAt = new Date(
      `${date}T${hour24}:00:00+05:30`,
    );

    /* FUTURE DATE / TIME CHECK */

    if (
      !Number.isFinite(requestedAt.getTime()) ||
      requestedAt <= new Date()
    ) {
      setRequest(null);

      setFeedback(
        "Please choose a future date and time.",
      );

      return;
    }

    /* DISPLAY FORMATS */

    const formattedDate = formatDate(date);

    const formattedTime =
      `${String(hour).padStart(2, "0")}:00 ${ampm}`;

    /* WHATSAPP MESSAGE */

    const message = [
      "Hello Maple & Thyme,",
      "",
      "I would like to request a table reservation.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Guests: ${guests}`,
      `Date: ${formattedDate}`,
      `Time: ${formattedTime}`,
      `Occasion: ${occasion || "Not specified"}`,
      `Special Request: ${notes || "None"}`,
      "",
      "Please confirm availability for this reservation.",
    ].join("\n");

    setRequest({
      name,
      phone,
      guests,
      date: formattedDate,
      time: formattedTime,
      occasion,
      notes,
      message,
    });

    setFeedback(
      "Your reservation request is ready. Continue on WhatsApp to send it.",
    );
  }

  /* =========================================
     RESET RESULT WHEN FORM CHANGES
  ========================================= */

  function resetFeedback() {
    setFeedback("");
    setRequest(null);
  }

  /* =========================================
     WHATSAPP LINK
  ========================================= */

  const whatsappHref = request
    ? `${business.whatsapp}${
        business.whatsapp.includes("?")
          ? "&"
          : "?"
      }text=${encodeURIComponent(request.message)}`
    : business.whatsapp;

  return (
    <main className="mt-reserve">
      {/* =====================================
          INTRO
      ====================================== */}

      <section className="mt-reserve__intro">
        <div className="mt-reserve__intro-inner">
          <div className="mt-reserve__meta">
            <span>05</span>
            <span>Reservations</span>
          </div>

          <div className="mt-reserve__intro-grid">
            <div>
              <p className="mt-reserve__eyebrow">
                A PLACE AT THE TABLE
              </p>

              <h1>
                Make time
                <em>for together.</em>
              </h1>
            </div>

            <div className="mt-reserve__intro-copy">
              <p>
                A catch-up, a celebration or simply
                an evening worth making time for.
              </p>

              <span>
                REQUEST YOUR TABLE BELOW
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          RESERVATION
      ====================================== */}

      <section className="mt-reserve__booking">
        <div className="mt-reserve__booking-inner">
          {/* =================================
              IMAGE
          ================================== */}

          <aside className="mt-reserve__visual">
            <div className="mt-reserve__image">
              <img
                src={reserveImage}
                alt="Dining at Maple and Thyme"
              />

              <div className="mt-reserve__image-overlay" />

              <div className="mt-reserve__image-copy">
                <span>MAPLE &amp; THYME</span>

                <p>
                  Your table.
                  <br />
                  Your evening.
                </p>
              </div>
            </div>

            <div className="mt-reserve__visual-footer">
              <span>Jagatpura · Jaipur</span>

              <span>Pure vegetarian</span>
            </div>
          </aside>

          {/* =================================
              FORM
          ================================== */}

          <div className="mt-reserve__form-area">
            <div className="mt-reserve__form-heading">
              <span>01 / YOUR DETAILS</span>

              <h2>
                Request
                <em>a table.</em>
              </h2>

              <p>
                Complete the details below and send
                your request through WhatsApp.
              </p>
            </div>

            <form
              className="mt-reserve__form"
              onSubmit={prepareRequest}
              onInput={resetFeedback}
            >
              <div className="mt-reserve__fields">
                {/* NAME */}

                <label>
                  <span>Your name</span>

                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={100}
                    placeholder="Full name"
                    required
                  />
                </label>

                {/* PHONE */}

                <label>
                  <span>Phone number</span>

                  <input
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={15}
                    placeholder="+91 98765 43210"
                    required
                  />
                </label>

                {/* GUESTS */}

                <label>
                  <span>Guests</span>

                  <select
                    name="guests"
                    defaultValue="2"
                  >
                    {Array.from(
                      { length: 12 },
                      (_, index) => index + 1,
                    ).map((count) => (
                      <option
                        key={count}
                        value={count}
                      >
                        {count}{" "}
                        {count === 1
                          ? "guest"
                          : "guests"}
                      </option>
                    ))}

                    <option value="13+">
                      13+ guests
                    </option>
                  </select>
                </label>

                {/* DATE */}

                <label>
                  <span>Preferred date</span>

                  <input
                    name="date"
                    type="date"
                    min={minimumDate}
                    required
                  />
                </label>

                {/* TIME */}

                <label className="mt-reserve__time-group">
                  <span>Preferred time</span>

                  <div className="mt-reserve__time-selects">
                    <select
                      name="hour"
                      defaultValue=""
                      required
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select time
                      </option>

                      {Array.from(
                        { length: 12 },
                        (_, index) => index + 1,
                      ).map((hour) => (
                        <option
                          key={hour}
                          value={hour}
                        >
                          {String(hour).padStart(
                            2,
                            "0",
                          )}
                          :00
                        </option>
                      ))}
                    </select>

                    <select
                      name="ampm"
                      defaultValue=""
                      required
                      aria-label="AM or PM"
                    >
                      <option
                        value=""
                        disabled
                      >
                        AM / PM
                      </option>

                      <option value="AM">
                        AM
                      </option>

                      <option value="PM">
                        PM
                      </option>
                    </select>
                  </div>
                </label>

                {/* OCCASION */}

                <label>
                  <span>Occasion</span>

                  <select
                    name="occasion"
                    defaultValue=""
                  >
                    <option value="">
                      Select occasion
                    </option>

                    <option value="Casual dining">
                      Casual dining
                    </option>

                    <option value="Birthday">
                      Birthday
                    </option>

                    <option value="Anniversary">
                      Anniversary
                    </option>

                    <option value="Date">
                      Date
                    </option>

                    <option value="Family gathering">
                      Family gathering
                    </option>

                    <option value="Business meeting">
                      Business meeting
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </label>
              </div>

              {/* SPECIAL REQUEST */}

              <label className="mt-reserve__notes">
                <span>
                  Special request
                  <small>Optional</small>
                </span>

                <textarea
                  name="notes"
                  rows={4}
                  maxLength={500}
                  placeholder="Seating preference, celebration details or anything else we should know..."
                />
              </label>

              {/* SUBMIT */}

              <div className="mt-reserve__submit-row">
                <button type="submit">
                  <span>
                    Prepare reservation
                  </span>

                  <span aria-hidden="true">
                    ↗
                  </span>
                </button>

                <p>
                  Sending this form does not
                  automatically confirm your
                  reservation.
                </p>
              </div>
            </form>

            {/* FEEDBACK */}

            {feedback && (
              <p
                className="mt-reserve__feedback"
                role="status"
              >
                {feedback}
              </p>
            )}

            {/* =================================
                READY TO SEND
            ================================== */}

            {request && (
              <section className="mt-reserve__ready">
                <div className="mt-reserve__ready-heading">
                  <div>
                    <span>
                      02 / READY TO SEND
                    </span>

                    <h3>Your request</h3>
                  </div>

                  <strong>✓</strong>
                </div>

                <dl>
                  <div>
                    <dt>Name</dt>
                    <dd>{request.name}</dd>
                  </div>

                  <div>
                    <dt>Guests</dt>
                    <dd>{request.guests}</dd>
                  </div>

                  <div>
                    <dt>Date</dt>
                    <dd>{request.date}</dd>
                  </div>

                  <div>
                    <dt>Time</dt>
                    <dd>{request.time}</dd>
                  </div>
                </dl>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-reserve__whatsapp"
                >
                  <span>
                    Continue on WhatsApp
                  </span>

                  <span aria-hidden="true">
                    ↗
                  </span>
                </a>

                <p>
                  Your table is confirmed only after
                  Maple &amp; Thyme replies with
                  availability.
                </p>
              </section>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}