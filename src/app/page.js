import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Product from "./components/product/Product";
import Contact from "./components/contact/page";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div>
      {/* <ComingSoon /> */}
      <Navbar />
      <Header />
      <Product isHome={true} />
      <Contact isHome={true} />
      <Footer />
    </div>
  );
}
