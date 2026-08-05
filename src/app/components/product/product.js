import "./product.css"
import Image from "next/image";
import Link from "next/link";

export default function Product() {
  return (
    <div className="container-product">
        <div className="long-line"></div>
        <h1 className="product-tittle">OUR PRODUCTS</h1>
        <p>We are committed to delivering premium coconut products manufactured from carefully selected Indonesian coconuts and produced under strict international quality standards. Our product portfolio includes high-quality coconut charcoal briquettes, coconut milk & cream, Virgin Coconut Oil (VCO), Refined, Bleached & Deodorized (RBD) Coconut Oil, and other coconut-derived products designed to meet the diverse needs of global industries. With a strong focus on quality, sustainability, and reliable export services, we supply importers, wholesalers, distributors, retailers, and manufacturers worldwide. Whether for food and beverage, cosmetics, hospitality, energy, or industrial applications, our coconut products are trusted for their exceptional quality, consistency, and sustainable sourcing.</p>
        <div className="section-product">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <Image
                        className="product-frame"
                        src="/pictures/charcoal.jpg"
                        alt="Header"
                        width={300}
                        height={300} 
                    />
                    </div>
                    <div className="flip-card-back">
                        <h1>Charcoal</h1>
                        <p>Our premium coconut charcoal briquettes are manufactured from 100% natural coconut shells, providing a clean, long-lasting, and eco-friendly fuel solution. Designed for shisha, hookah, barbecue, and industrial applications.</p>
                        <Link href=''>More Product &#8690;</Link>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <Image
                        className="product-frame"
                        src="/pictures/header.jpg"
                        alt="Header"
                        width={300}
                        height={300} />
                    </div>
                    <div className="flip-card-back">
                        <h1>Coconut Milk & Cream</h1>
                        <p>Manufactured under strict quality control and international food safety standards, we provide reliable coconut ingredients to importers, distributors, wholesalers, and food manufacturers worldwide.</p>
                        <Link href=''>More Product &#8690;</Link>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <Image
                        className="product-frame"
                        src="/pictures/header.jpg"
                        alt="Header"
                        width={300}
                        height={300} />
                    </div>
                    <div className="flip-card-back">
                        <h1>Coconut Oil – VCO & RBD</h1>
                        <p>A trusted Indonesian manufacturer and global exporter of premium Virgin Coconut Oil and Refined, Bleached & Deodorized Coconut Oil.</p>
                        <Link href=''>More Product &#8690;</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}






