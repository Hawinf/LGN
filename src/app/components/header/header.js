import './header.css'
import Link from "next/link";

export default function Header() {
    return (
        <header className='Section-header'>
            <h1>Premium Coconut Products Manufacturer & Global Exporter from Indonesia</h1>
            <Link href="" className='header-inquiry'>Contact</Link>
        </header>
    );
  }