import "./ZomatoButton.scss";

const ZOMATO_URL = "https://zomato.onelink.me/xqzv/fgqc2lnb";

export default function ZomatoButton() {
  return (
    <a
      href={ZOMATO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="zomato-button"
      aria-label="Order Maple & Thyme on Zomato"
    >
      <span className="zomato-button__dot" />

      <span className="zomato-button__content">
        <small>ORDER ONLINE</small>
        <strong>Order on Zomato</strong>
      </span>

      <span className="zomato-button__arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}