import { business } from "../data/business";

import "./QuickContactBar.scss";

export default function QuickContactBar() {
  const phone = business.phone ?? "";
  const whatsapp = business.whatsapp ?? "";

  const phoneHref = phone
    ? `tel:${phone.replace(/[^\d+]/g, "")}`
    : "#";

  const whatsappMessage = encodeURIComponent(
    "Hi Maple & Thyme, I would like to make an enquiry.",
  );

  const whatsappHref = whatsapp
    ? `${whatsapp}${whatsapp.includes("?") ? "&" : "?"}text=${whatsappMessage}`
    : "#";

  return (
    <div
      className="quick-contact"
      aria-label="Quick contact options"
    >
      <a
        href={phoneHref}
        className="quick-contact__call"
        aria-label={`Call Maple & Thyme${phone ? ` at ${phone}` : ""}`}
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M6.6 10.8c1.5 3 3.9 5.4 6.9 6.9l2.3-2.3c.3-.3.7-.4 1.1-.2 1.2.4 2.5.7 3.8.7.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11 21 3 13 3 3.3c0-.6.4-1 1-1h3.1c.6 0 1 .4 1 1 0 1.3.2 2.6.7 3.8.1.4 0 .8-.3 1.1l-1.9 2.6Z" />
        </svg>

        <span>Call</span>
      </a>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="quick-contact__whatsapp"
        aria-label="Message Maple & Thyme on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2a9.8 9.8 0 0 0-8.4 14.9L2 22l5.2-1.5A10 10 0 1 0 12 2Zm0 18.2a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.9.9-3-.2-.3A8.1 8.1 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.2l-.8 1c-.2.2-.3.2-.6.1a6.5 6.5 0 0 1-1.9-1.2 7 7 0 0 1-1.3-1.6c-.1-.2 0-.4.1-.5l.4-.5.3-.4c.1-.2.1-.3 0-.5l-.8-2c-.2-.5-.5-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.4-.6 1.6-1.1.2-.6.2-1 .2-1.1 0-.2-.2-.3-.5-.4Z" />
        </svg>

        <span>WhatsApp</span>
      </a>
    </div>
  );
}