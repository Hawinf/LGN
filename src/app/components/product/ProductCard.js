import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">

      <Link href={`/products/${product.slug}`}>

        <div className="product-image">

          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />

        </div>

        <div className="product-info">

          <span className="product-category">
            {product.category}
          </span>

          <h2>{product.name}</h2>

          <p>{product.shortDescription}</p>

          <div className="product-bottom">

            <span>{product.priceLabel}</span>

            <span className="view-product">
              View Product →
            </span>

          </div>

        </div>

      </Link>

    </article>
  );
}