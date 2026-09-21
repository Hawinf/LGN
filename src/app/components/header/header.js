"use client";

import "./header.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-label">INDONESIAN CRAFTSMANSHIP</p>

        <h1>
          Authentic Indonesian
          <span>Craft Products</span>
        </h1>

        <p className="hero-description">
          Discover premium handcrafted products made in Indonesia,
          combining traditional craftsmanship, natural materials,
          and timeless design for the global market.
        </p>

        <div className="hero-buttons">
          <Link href="/page/productpage" className="hero-btn primary">
            Explore Products
          </Link>

          <Link href="/components/contact" className="hero-btn secondary">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="hero-bottom">
        <span>HANDCRAFTED IN INDONESIA</span>
        <span className="hero-line"></span>
        <span>GLOBAL EXPORT</span>
      </div>
    </header>
  );
}