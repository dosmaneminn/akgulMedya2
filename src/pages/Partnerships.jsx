import { useEffect } from 'react'
import { useInView } from '../hooks/useInView'
import { Link, useLocation } from 'react-router-dom'
import siteData from '../data/siteData.json'
import WaveBackground from '../components/WaveBackground'
import './Partnerships.css'

function Partnerships() {
    const [heroRef, heroVisible] = useInView({ threshold: 0.1 })
    const [partnersRef, partnersVisible] = useInView({ threshold: 0.1 })
    const [testimonialsRef, testimonialsVisible] = useInView({ threshold: 0.1 })
    const location = useLocation()

    const { hero, partners, cta, testimonials } = siteData.pages.partnerships

    // Scroll to hash anchor on page load
    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash)
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }, 100)
            }
        }
    }, [location.hash])

    // Render star rating
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
        ))
    }

    return (
        <div className="partnerships-page">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className={`partnerships-hero wave-hero ${heroVisible ? 'visible' : ''}`}
            >
                <WaveBackground />
                <div className="container">
                    <div className="partnerships-hero-content">
                        <span className="section-label hero-label-light reveal stagger-1">{hero.label}</span>
                        <h1 className="hero-title-light reveal stagger-2" dangerouslySetInnerHTML={{ __html: hero.title }}></h1>
                        <p className="hero-description-light reveal stagger-3">{hero.description}</p>
                    </div>
                </div>
            </section>

            {/* Partners Grid Section */}
            <section
                id="markalar"
                ref={partnersRef}
                className={`partners-section section ${partnersVisible ? 'visible' : ''}`}
            >
                <div className="container">
                    <div className="section-header">
                        <span className="section-label reveal stagger-1">{partners.label}</span>
                        <h2 className="reveal stagger-2">{partners.title}</h2>
                        <p className="reveal stagger-3">{partners.description}</p>
                    </div>
                    <div className="partners-grid">
                        {partners.items.map((partner, index) => (
                            <div
                                key={index}
                                className={`partner-card reveal stagger-${(index % 3) + 1}`}
                            >
                                <div className="partner-image">
                                    <img
                                        src={partner.image}
                                        alt={partner.name}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    <div className="partner-placeholder" style={{ display: 'none' }}>
                                        <span>{partner.name.charAt(0)}</span>
                                    </div>
                                </div>
                                <span className="partner-name">{partner.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section
                ref={testimonialsRef}
                className={`testimonials-section section ${testimonialsVisible ? 'visible' : ''}`}
            >
                <div className="container">
                    <div className="section-header">
                        <span className="section-label reveal stagger-1">{testimonials.label}</span>
                        <h2 className="reveal stagger-2">{testimonials.title}</h2>
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.items.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`testimonial-card reveal stagger-${index + 1}`}
                            >
                                <div className="testimonial-rating">
                                    {renderStars(testimonial.rating)}
                                </div>
                                <p className="testimonial-content">"{testimonial.content}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="partnerships-cta-section">
                <div className="container">
                    <div className="partnerships-cta-content">
                        <h2>{cta.title}</h2>
                        <p>{cta.description}</p>
                        <Link to="/iletisim" className="btn btn-primary">
                            {cta.button}
                            <span className="btn-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Partnerships
