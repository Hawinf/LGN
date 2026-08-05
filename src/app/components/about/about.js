import "./about.css"
import Link from "next/link";

export default function About() {
  return (
    <div>
      <header className="about-section">
        <div className="about-line"></div>
        <h3>PT. LANDSNATURE GLOBAL NUSANTARA</h3>
        <p>Is a trusted Indonesian manufacturer and exporter of
            premium coconut products, specializing in coconut charcoal
            briquettes, coconut milk cream, virgin coconut oil, and other
            coconut-derived products. We deliver high-quality, sustainably
            sourced coconut products to importers, wholesalers, distributors,
            and businesses worldwide.</p>
        <Link href="" className="about-more">&#8618; Learn More</Link>
      </header>
    </div>
  );
}