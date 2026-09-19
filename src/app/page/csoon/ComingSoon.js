
import Link from "next/link";
import "./ComingSoon.css";

export default function ComingSoon() {
  return (
    <main className="coming-soon">

      <div className="coming-soon-overlay"></div>

      <div className="coming-soon-content">

        <div className="coming-soon-brand">
          <h2>LANDSNATURE</h2>
          <span>GLOBAL NUSANTARA</span>
        </div>

        <div className="coming-soon-line"></div>

        <p className="coming-soon-label">
          SOMETHING NEW IS COMING
        </p>

        <h1>
          Our Website
          <br />
          <em>is Coming Soon</em>
        </h1>

        <p className="coming-soon-description">
          We are currently preparing our new website.
          <br />
          Discover our premium Indonesian coconut products
          and global export solutions soon.
        </p>

        <Link
          href="/"
          className="coming-soon-button"
        >
          Back to Home
        </Link>

      </div>

      <div className="coming-soon-footer">
        <span>INDONESIA</span>
        <span>•</span>
        <span>GLOBAL EXPORT</span>
      </div>

    </main>
  );
}
