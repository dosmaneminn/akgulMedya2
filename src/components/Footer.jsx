import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import siteData from '../data/siteData.json'
import Icon from './Icon'
import './Footer.css'

function Footer() {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <img src="/images/logo-yazisiz.png" alt="AkgulMedya" className="footer-logo-img" />
                        </Link>
                        <p>{siteData.siteInfo.description}</p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4 className="footer-title">Hızlı Erişim</h4>
                        <div className="footer-links">
                            {siteData.navigation.map((link) => (
                                <Link key={link.path} to={link.path}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div className="footer-section">
                        <h4 className="footer-title">Hizmetlerimiz</h4>
                        <div className="footer-links">
                            {siteData.services.slice(0, 5).map((service) => (
                                <Link key={service.id} to="/hizmetlerimiz">
                                    {service.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="footer-section">
                        <h4 className="footer-title">İletişim</h4>
                        <div className="footer-links">
                            <a href={siteData.contact.email.link}>{siteData.contact.email.content}</a>
                            <a href={siteData.contact.phone.link}>{siteData.contact.phone.content}</a>
                            <a href={siteData.contact.whatsapp.link} className="whatsapp-link">
                                <Icon name="whatsapp" size={16} /> WhatsApp
                            </a>
                            <span>{siteData.contact.address.content}</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} {siteData.siteInfo.name}. Tüm hakları saklıdır.</p>
                    <div className="footer-social">
                        {siteData.social.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                title={social.name}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon name={social.icon} size={20} strokeWidth={1.5} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

