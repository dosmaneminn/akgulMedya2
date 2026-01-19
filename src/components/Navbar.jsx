import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import siteData from '../data/siteData.json'

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMenuOpen(false)
    }, [location])

    const navLinks = siteData.navigation

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <Link to="/" className="navbar-logo">
                    <img src="/images/logo.png" alt="AkgulMedya" className="logo-img" />
                </Link>

                <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link to="/iletisim" className="btn btn-primary">
                        İletişime Geç
                    </Link>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
