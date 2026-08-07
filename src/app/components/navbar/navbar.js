"use client";

import { useState,useEffect } from "react";import './navbar.css'
import Link from "next/link";

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
    <header>
        
        <nav className="Section-navbar">
            <div className="Navbar-left">
                <Link href='/'>
                    <h3>LANDSNATURE</h3>
                    <h5>Global Nusantara</h5>
                </Link>
            </div>
            
            <div
                className="menu-toggle"
                onClick={() => setToggleMenu(!toggleMenu)}
                >
                {toggleMenu ? "✕" : "☰"}
            </div>
        </nav>
    
        <div className={toggleMenu ? "Navbar-right active" : "Navbar-right"}>
            <ul className="nav-links">

                <li>
                    <Link href="/" onClick={() => setToggleMenu(false)}>
                        About
                    </Link>
                </li>

                <li>
                    <Link href="/" onClick={() => setToggleMenu(false)}>
                        Products
                    </Link>
                </li>

                <li>
                    <Link href="/" onClick={() => setToggleMenu(false)}>
                        Contact
                    </Link>
                </li>

            <p className="nav-copyright">
                © 2026 PT. Landsnature Global Nusantara
            </p>

            </ul>
        </div>
    </header>
    );
  }