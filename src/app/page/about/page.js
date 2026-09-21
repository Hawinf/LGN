
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import "./about.css";

export const metadata = {
  title: "About Us | LANDSNATURE - Indonesian craft products",
  description:
    "Learn about LANDSNATURE, an Indonesian manufacturer and global exporter specializing in premium handcrafted products. We work with skilled local artisans to create authentic Indonesian crafts that combine traditional craftsmanship, quality materials, and contemporary design for customers worldwide.",
};

export default function About() {
  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* =====================================
            HERO
        ===================================== */}

        <section className="about-hero">

          <div className="about-hero-overlay"></div>

          <div className="about-hero-content">

            <span className="about-hero-label">
              ABOUT LANDSNATURE
            </span>

            <h1>
              From the Heart of
              <br />
              <em>Indonesia to the World.</em>
            </h1>

            <p>
              Indonesian craft products
            </p>

          </div>

        </section>


        {/* =====================================
            INTRO
        ===================================== */}

        <section className="about-intro">

          <div className="about-intro-label">
            <span>01</span>
            <span>WHO WE ARE</span>
          </div>

          <div className="about-intro-content">

            <h2>
              Indonesian Origin.
              <br />
              <em>Global Standard.</em>
            </h2>

            <div className="about-intro-text">

              <p>
              Learn about LANDSNATURE, an Indonesian manufacturer and global exporter specializing in premium handcrafted products. We work with skilled local artisans to create authentic Indonesian crafts that combine traditional craftsmanship, quality materials, and contemporary design for customers worldwide.
              </p>

              <p>
              We connect Indonesia’s rich craftsmanship and cultural heritage with international markets through quality products, reliable supply, and thoughtful design.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================
            IMAGE / STORY
        ===================================== */}

        <section className="about-story">

          <div className="about-story-image">

            <Image
              src="/pictures/content-about.jpg"
              alt="Indonesian coconut products"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />

          </div>

          <div className="about-story-content">

            <span className="about-section-label">
              OUR APPROACH
            </span>

            <h2>
              Built around
              <br />
              <em>quality & consistency.</em>
            </h2>

            <p>
            Built on a commitment to quality and consistency, delivering reliable Indonesian products that meet international standards.
            </p>

            <p>
            Driven by quality and consistency, we deliver authentic Indonesian products with reliable standards for global markets.
            </p>

            <p>
            Built around quality, consistency, and authentic Indonesian craftsmanship, creating products made for the global market.
            </p>

          </div>

        </section>


        {/* =====================================
            WHAT WE DO
        ===================================== */}

        <section className="about-business">

          <div className="about-business-heading">

            <span className="about-section-label">
              WHAT WE DO
            </span>

            <h2>
              From raw material
              <br />
              <em>to global market.</em>
            </h2>

          </div>


          <div className="about-business-grid">

            <div className="about-business-item">

              <span>01</span>

              <h3>
                Sourcing
              </h3>

              <p>
              We carefully source high-quality natural materials and authentic Indonesian products from trusted local producers and skilled artisans.
              </p>

            </div>


            <div className="about-business-item">

              <span>02</span>

              <h3>
                Manufacturing
              </h3>

              <p>
                Our products are prepared through controlled
                manufacturing processes with attention to product
                specifications and consistency.
              </p>

            </div>


            <div className="about-business-item">

              <span>03</span>

              <h3>
                Quality
              </h3>

              <p>
                We pay attention to product quality, packaging,
                specifications, and requirements throughout the
                preparation process.
              </p>

            </div>


            <div className="about-business-item">

              <span>04</span>

              <h3>
                Global Export
              </h3>

              <p>
                We serve international buyers looking for reliable
                Indonesian craft products and long-term supply
                partnerships.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================
            PRODUCTS
        ===================================== */}

        <section className="about-products">

          <div className="about-products-inner">

            <div className="about-products-heading">

              <span className="about-section-label">
                OUR PRODUCTS
              </span>

              <h2>
                Premium products
                <br />
                <em>craftsman</em>
              </h2>

            </div>


            <div className="about-products-list">

              <div className="about-product-item">

                <div className="about-product-number">
                  01
                </div>

                <div>
                  <h3>
                    Woven Bag
                  </h3>

                  <p>
                  Handcrafted Indonesian woven bags made from natural materials, combining traditional craftsmanship, durability, and timeless design.
                  </p>
                </div>

              </div>


              <div className="about-product-item">

                <div className="about-product-number">
                  02
                </div>

                <div>
                  <h3>
                  Natural bamboo
                  </h3>

                  <p>
                  Handcrafted from natural bamboo using traditional Indonesian weaving techniques, our woven wall and ceiling panels bring warmth, texture, and natural character to interior spaces. Designed for residential, hospitality, and commercial applications, each piece reflects authentic Indonesian craftsmanship while offering a timeless and distinctive finish.
                  </p>
                </div>

              </div>


              <div className="about-product-item">

                <div className="about-product-number">
                  03
                </div>

                <div>
                  <h3>
                  Authentic Indonesian rattan crafts
                  </h3>

                  <p>
                  Handcrafted from natural rattan by skilled Indonesian artisans, our rattan crafts combine traditional weaving techniques with timeless and functional designs. Each piece showcases the natural beauty and unique character of rattan, making it ideal for home décor, furniture, hospitality, and interior applications.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================
            VALUES
        ===================================== */}

        <section className="about-values">

          <div className="about-values-content">

            <span className="about-section-label">
              OUR VALUES
            </span>

            <h2>
              A partnership
              <br />
              <em>built to last.</em>
            </h2>

            <p>
              We aim to build long-term relationships with our customers
              through clear communication, dependable service, and
              consistent product supply.
            </p>

          </div>


          <div className="about-values-grid">

            <div>
              <span>01</span>
              <h3>Integrity</h3>
              <p>
                Honest communication and transparent business practices
                are at the foundation of every relationship.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Consistency</h3>
              <p>
                We understand the importance of reliable specifications
                and consistent supply for international buyers.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Partnership</h3>
              <p>
                We look beyond individual transactions and aim to
                develop lasting business relationships.
              </p>
            </div>

          </div>

        </section>


        {/* =====================================
            CTA
        ===================================== */}

        <section className="about-cta">

          <div className="about-cta-content">

            <span>
              LET'S WORK TOGETHER
            </span>

            <h2>
              Looking for a reliable
              <br />
              <em>crafts supplier?</em>
            </h2>

            <p>
              Tell us about your product requirements, destination
              market, and quantity. Our team will be happy to discuss
              your inquiry.
            </p>

            <Link
              href="/components/contact"
              className="about-cta-button"
            >
              Contact Us
              <span>→</span>
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
