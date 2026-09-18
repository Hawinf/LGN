import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import About from "./components/about/about";
import Product from "./components/product/Product";
import ProductCard from "./components/product/ProductCard";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Why from "./components/why/why";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Product />
      <Footer />
    </div>
  );
}
