import Image from "next/image";
import Link from "next/link";
import products from "@/data/dataProduk";
import "./ProductDetail.css";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";

export default async function ProductDetail({ params }) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return (
      <>
        <Navbar />

        <main className="product-not-found">
          <h1>Product Not Found</h1>

          <p>
            The product you are looking for does not exist.
          </p>

          <Link href="/products">
            ← Back to Products
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="product-detail">

        {/* IMAGE */}

        <div className="product-detail-image">

          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />

        </div>


        {/* INFORMATION */}

        <div className="product-detail-info">

          <span className="product-detail-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <p className="product-detail-description">
            {product.shortDescription}
          </p>


          <div className="product-detail-meta">

            <div>
              <span>Material</span>
              <strong>{product.material}</strong>
            </div>

            <div>
              <span>Price</span>
              <strong>{product.priceLabel}</strong>
            </div>

          </div>


          <p className="product-detail-full">
            {product.description ||
              product.shortDescription}
          </p>


          <div className="product-detail-actions">

            <Link
              href="/contact"
              className="product-contact-button"
            >
              Request a Quote →
            </Link>

            <Link
              href="/"
              className="product-back-button"
            >
              ← Back to Products
            </Link>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}