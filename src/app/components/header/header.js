import './header.css'
import Link from "next/link";

export default function Header() {
    return (
        <header className='Section-header'>
            <h1>Earthly heritage timeless beauty</h1>
            <p>We bring the authentic beauty of Indonesia ceramics and handcrafts to the world, where nature and craftmanship meet</p>
            <Link href='/' className='header-inquiry'>Explore Our Collection</Link>
        </header>
    );
  }