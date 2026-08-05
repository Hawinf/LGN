import Link from 'next/link';
import './contact.css'

export default function Contact() {
  return (
    <div className='container-contact'>
      <div className='card-contact'>
        <h2>Looking for a trusted supplier of premium coconut products?</h2>
        <p> We're here to help. Whether you're an importer, wholesaler, distributor, retailer, or manufacturer, LANDSNATURE is ready to provide high-quality coconut charcoal briquettes, coconut milk & cream, Virgin Coconut Oil (VCO), RBD Coconut Oil, and other coconut-based products. Contact our team today to discuss your product requirements, request a quotation, or explore long-term business partnerships. We are committed to delivering reliable export solutions and exceptional customer service worldwide.</p>
        <Link href=''>Request a Quote</Link>
      </div>
      <div className='card-detail'>
        <h2>CONTACT US</h2>
        <p>📍 Pekalongan, Central Java Indonesia</p>
        <p><Link href=''>📧 Emailsales@landsnature.com</Link></p>
        <p>📞 Phone +62 851-8053-6776 | Indonesia</p>
        <p>&emsp;&nbsp;Phone +971 50 684 1998 | Dubai, AE</p>
      </div>
    </div>
  );
}
