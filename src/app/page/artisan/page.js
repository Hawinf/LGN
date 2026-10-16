
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import "./artisan.css";
import Link from "next/link";
import Image from "next/image";

const artisans = [
  {
    id: 1,
    name: "Pak Asrikan",
    location: "Central Java, Indonesia",
    specialty: "THE RESILIENCE OF TIMBER",
    image: "/pictures/artist-asrikan.jpeg",
    experience: "30+ Years of Craftsmanship",
    story:
      "True mastery is never given, it is carved out of patience, hardship, and the courage to start over. For Pak Asrikan, a master woodworker whose hands possess legendary skills, every piece of furniture he creates is a testament to survival. As a young man, he spent years understanding the temperament of timber, practicing until his hands grew calloused and his vision sharp.",
  },
  {
    id: 2,
    name: "Pak Erwin",
    location: "Central Java, Indonesia",
    specialty: "THE HANDS THAT SHAPE THE STONE",
    image: "/pictures/artist-erwin.jpeg",
    experience: "20+ Years of Craftsmanship",
    story:
      "If you look at a beautifully carved stone, you might only see a finished product. But for Erwin, every indentation and texture tells the story of a long, dusty journey that began over two decades ago. In 2001, under the blistering sun, he started as a humble construction laborer (kuli bangunan) in Jakarta, breaking raw stones for a living.",
  },
  {
    id: 3,
    name: "Santi & Dewi",
    location: "Central Java, Indonesia",
    specialty: "THE SOUL OF BAMBOO",
    image: "/pictures/artist-santi.jpeg",
    experience: "15+ Years of Craftsmanship",
    story:
      "If you were to ask Santi and Dewi when their love for weaving began, the honest answer is since they were children. Growing up, we weren’t introduced to bamboo weaving because of its high artistic value, all we knew was that our lives depended on it. Our school tuition and daily food were supported by this ancestral rhythm.",
  },
];

export default function ArtisansPage() {
  return (
    <>
      <Navbar />

      <main className="artisan-page">
        {/* HERO */}
        <section className="artisan-hero">
          <div className="artisan-hero-overlay" />

          <div className="artisan-hero-content">
            <span className="artisan-eyebrow">
              THE PEOPLE BEHIND THE CRAFT
            </span>

            <h1>
              Our Artisans,
              <br />
              Their Stories.
            </h1>

            <p>
              Behind every handmade piece is a person, a tradition,
              and a story worth sharing. Meet the skilled hands
              bringing Indonesian craftsmanship to life.
            </p>

            <a href="#artisan-stories" className="artisan-hero-link">
              DISCOVER THEIR STORIES <span>↓</span>
            </a>
          </div>

          <div className="artisan-hero-caption">
            HANDMADE IN INDONESIA
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="artisan-intro">
          <div className="artisan-intro-label">
            <span>01</span>
            <span>OUR PHILOSOPHY</span>
          </div>

          <div className="artisan-intro-content">
            <h2>
              Every piece has a story.
              <br />
              Every artisan leaves a mark.
            </h2>

            <p>
              At LANDSNATURE, we believe that meaningful craftsmanship
              begins with people. Behind our rattan products, woven
              creations, and handcrafted furniture are artisans whose
              skills have been shaped by experience, patience, and
              generations of knowledge.
            </p>

            <p>
              We celebrate the individuals behind each creation,
              preserving traditional techniques while bringing
              Indonesian craftsmanship to homes around the world.
            </p>
          </div>
        </section>

        {/* ARTISAN STORIES */}
        <section
          className="artisan-stories"
          id="artisan-stories"
        >
          <div className="artisan-section-heading">
            <div>
              <span className="artisan-eyebrow">
                HANDS THAT CREATE
              </span>
              <h2>Meet Our Artisans</h2>
            </div>

            <p>
              Different skills, unique stories, and one shared
              commitment to quality.
            </p>
          </div>

          <div className="artisan-grid">
            {artisans.map((artisan, index) => (
              <article
                className="artisan-card"
                key={artisan.id}
              >
                <div className="artisan-card-image">
                  <img
                    src={artisan.image}
                    alt={`${artisan.name}, ${artisan.specialty} artisan`}
                    loading={index === 0 ? "eager" : "lazy"}
                  />

                  <span className="artisan-card-number">
                    0{artisan.id}
                  </span>
                </div>

                <div className="artisan-card-content">
                  <span className="artisan-location">
                    {artisan.location}
                  </span>

                  <h3>{artisan.name}</h3>

                  <span className="artisan-specialty">
                    {artisan.specialty}
                  </span>

                  <div className="artisan-card-divider" />

                  <p>{artisan.story}</p>

                  <span className="artisan-experience">
                    {artisan.experience}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CRAFTSMANSHIP */}
        <section className="artisan-craft">
          <div className="artisan-craft-image">
            <Image
              width={400}
              height={400}
              src="/pictures/craftprocess.jpeg"
              alt="An artisan carefully crafting a handmade product"
              loading="lazy"
            ></Image>
          </div>

          <div className="artisan-craft-content">
            <span className="artisan-eyebrow">
              MADE WITH PURPOSE
            </span>

            <h2>
              Tradition in our hands.
              <br />
              Quality in every detail.
            </h2>

            <p>
              From carefully weaving natural rattan to shaping
              solid wood into beautiful furniture, our artisans
              bring dedication and precision to every stage
              of the process.
            </p>

            <p>
              We believe that true quality is not only seen in
              the finished product, but also in the care, skill,
              and thought behind its creation.
            </p>

            <div className="artisan-values">
              <div>
                <span>01</span>
                <h4>Skilled Hands</h4>
                <p>Knowledge built through years of practice.</p>
              </div>

              <div>
                <span>02</span>
                <h4>Thoughtful Making</h4>
                <p>Attention to materials, details, and finish.</p>
              </div>

              <div>
                <span>03</span>
                <h4>Lasting Quality</h4>
                <p>Craftsmanship made for everyday living.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="artisan-cta">
          <span className="artisan-eyebrow">
            CRAFTED IN INDONESIA
          </span>

          <h2>
            Every craft begins
            <br />
            with a pair of hands.
          </h2>

          <p>
            Discover our collections and the people who make
            Indonesian craftsmanship special.
          </p>

          <Link href="/page/productpage" className="artisan-cta-button">
            EXPLORE OUR COLLECTION <span>↗</span>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
