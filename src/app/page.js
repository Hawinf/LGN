import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import About from "./components/about/about";
import Product from "./components/product/product";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Product />
      <Contact />
      <Footer />
    </div>
  );
}
