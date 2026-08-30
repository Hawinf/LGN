import Image from "next/image";
import './why.css'
export default function Why() {
  return (
    <div className="container-why">
      <h1>Why Us ?</h1>
      <div className="section-why">
        <div className="card-item">
            <Image 
            className="card-logo"
            src="/pictures/deal.png"
            alt="Instagram"
            width={30}
            height={30} />
            <h2>Consistent Quality</h2>
            <p>We prioritize reliable quality and consistency across every order, helping you maintain customer trust and protect your brand reputation.</p>
        </div>
        <div className="card-item">
            <Image 
            className="card-logo"
            src="/pictures/flexibility.png"
            alt="Instagram"
            width={30}
            height={30} />
            <h2>Flexible Solutions</h2>
            <p>From product selection to packaging and specifications, we offer flexible solutions that can be adapted to your market and business needs.</p>
        </div>
        <div className="card-item">
            <Image 
            className="card-logo"
            src="/pictures/supply-chain-management.png"
            alt="Instagram"
            width={30}
            height={30} />
            <h2>Reliable Supply</h2>
            <p>Count on dependable sourcing and smooth order management to keep your business supplied and ready to meet customer demand.</p>
        </div>
        <div className="card-item">
            <Image 
            className="card-logo"
            src="/pictures/service.png"
            alt="Instagram"
            width={30}
            height={30} />
            <h2>Long-Term Partnership</h2>
            <p>We don't just focus on individual orders. We aim to build lasting partnerships that support your business growth and create value over time.</p>
        </div>
      </div>
    </div>
  );
}
