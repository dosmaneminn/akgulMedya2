import { useInView } from '../hooks/useInView'
import { Link } from 'react-router-dom'
import siteData from '../data/siteData.json'
import './Partnerships.css'

function Partnerships() {
    const [heroRef, heroVisible] = useInView({ threshold: 0.1 })
    const [partnersRef, partnersVisible] = useInView({ threshold: 0.1 })

    const { hero, partners, cta } = siteData.pages.partnerships

    return (
        <div className="partnerships-page">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className={`partnerships-hero ${heroVisible ? 'visible' : ''}`}
            >
                <div className="partnerships-hero-bg">
                    <div className="partnerships-hero-gradient"></div>
                </div>
                <div className="container">
                    <div className="partnerships-hero-content">
                        <span className="section-label reveal stagger-1">{hero.label}</span>
                        <h1 className="reveal stagger-2" dangerouslySetInnerHTML={{ __html: hero.title }}></h1>
                        <p className="reveal stagger-3">{hero.description}</p>
                    </div>
                </div>
            </section>

            {/* Partners Grid Section */}
            <section
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
