"use client";

import { useState } from "react";
import products from "@/data/dataProduk";
import ProductCard from "./ProductCard";
import "./product.css";

export default function Product() {

  const [category, setCategory] = useState("All");
  const [material, setMaterial] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    ...new Set(
      products.map((product) => product.category)
    ),
  ];

  const materials = [
    "All",
    ...new Set(
      products.map((product) => product.material)
    ),
  ];

  const filteredProducts = products.filter((product) => {

    const categoryMatch =
      category === "All" ||
      product.category === category;

    const materialMatch =
      material === "All" ||
      product.material === material;

    const searchMatch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    let priceMatch = true;

    if (priceRange === "under1000") {
      priceMatch = product.price < 1000;
    }

    if (priceRange === "1000-1500") {
      priceMatch =
        product.price >= 1000 &&
        product.price <= 1500;
    }

    if (priceRange === "1500-2000") {
      priceMatch =
        product.price > 1500 &&
        product.price <= 2000;
    }

    if (priceRange === "above2000") {
      priceMatch = product.price > 2000;
    }

    return (
      categoryMatch &&
      materialMatch &&
      priceMatch &&
      searchMatch
    );
  });

  return (
    <section className="product-section">

      <div className="product-heading">

        <div>

          <span>OUR COLLECTION</span>

          <h1>Premium Products</h1>

          <p>
            Explore our premium Indonesian coconut
            products manufactured for global markets.
          </p>

        </div>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="product-search"
        />

      </div>


      <div className="product-container">

        {/* FILTER */}

        <aside className="product-filter">

          <div className="filter-group">

            <h3>Category</h3>

            {categories.map((item) => (

              <label key={item}>

                <input
                  type="radio"
                  name="category"
                  checked={category === item}
                  onChange={() => setCategory(item)}
                />

                {item}

              </label>

            ))}

          </div>


          <div className="filter-group">

            <h3>Material</h3>

            {materials.map((item) => (

              <label key={item}>

                <input
                  type="radio"
                  name="material"
                  checked={material === item}
                  onChange={() => setMaterial(item)}
                />

                {item}

              </label>

            ))}

          </div>


          <div className="filter-group">

            <h3>Price Range</h3>

            <label>

              <input
                type="radio"
                name="price"
                checked={priceRange === "All"}
                onChange={() => setPriceRange("All")}
              />

              All Price

            </label>


            <label>

              <input
                type="radio"
                name="price"
                checked={priceRange === "under1000"}
                onChange={() => setPriceRange("under1000")}
              />

              Under $1000

            </label>


            <label>

              <input
                type="radio"
                name="price"
                checked={priceRange === "1000-1500"}
                onChange={() => setPriceRange("1000-1500")}
              />

              $1000 - $1500

            </label>


            <label>

              <input
                type="radio"
                name="price"
                checked={priceRange === "1500-2000"}
                onChange={() => setPriceRange("1500-2000")}
              />

              $1500 - $2000

            </label>


            <label>

              <input
                type="radio"
                name="price"
                checked={priceRange === "above2000"}
                onChange={() => setPriceRange("above2000")}
              />

              Above $2000

            </label>

          </div>

        </aside>


        {/* PRODUCT */}

        <div className="product-content">

          <div className="product-result">

            {filteredProducts.length} Products

          </div>


          <div className="product-grid">

            {filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>


          {filteredProducts.length === 0 && (

            <div className="no-product">

              No products found.

            </div>

          )}

        </div>

      </div>

    </section>
  );
}