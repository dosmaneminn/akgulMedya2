import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import Marquee from '../components/Marquee'
import ServiceCard from '../components/ServiceCard'
import Icon from '../components/Icon'
import siteData from '../data/siteData.json'
import './Home.css'

function Home() {
    const [heroRef, heroVisible] = useInView({ threshold: 0.1 })
    const [aboutRef, aboutVisible] = useInView({ threshold: 0.1 })
    const [servicesRef, servicesVisible] = useInView({ threshold: 0.1 })
    const [ctaRef, ctaVisible] = useInView({ threshold: 0.1 })

    const { hero, marquee, aboutPreview, servicesPreview, cta } = siteData.pages.home
    const services = siteData.services.slice(0, 4) // Show first 4 services

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className={`hero-section ${heroVisible ? 'visible' : ''}`}
            >
                <div className="hero-background">
                    <div className="hero-gradient"></div>
                    <div className="hero-pattern"></div>
                </div>
                <div className="container hero-content">
                    <div className="hero-text">
                        <span className="hero-label reveal stagger-1">{hero.label}</span>
                        <h1 className="hero-title reveal stagger-2" dangerouslySetInnerHTML={{ __html: hero.title }}></h1>
                        <p className="hero-description reveal stagger-3">
                            {hero.description}
                        </p>
                        <div className="hero-buttons reveal stagger-4">
                            <Link to="/hizmetlerimiz" className="btn btn-primary">
                                {hero.button1}
                                <span className="btn-arrow">→</span>
                            </Link>
                            <Link to="/iletisim" className="btn btn-secondary">
                                {hero.button2}
                            </Link>
                        </div>
                    </div>
                    <div className="hero-visual reveal stagger-5">
                        <div className="hero-shape hero-shape-1"></div>
                        <div className="hero-shape hero-shape-2"></div>
                        <div className="hero-shape hero-shape-3"></div>
                    </div>
                </div>
                <div className="hero-scroll-indicator">
                    <span>Aşağı Kaydır</span>
                    <div className="scroll-arrow"></div>
                </div>
            </section>

            {/* Marquee Section */}
            <section className="marquee-section">
                <Marquee items={marquee} speed={25} />
                <Marquee items={marquee} speed={30} reverse={true} />
            </section>

            {/* About Preview Section */}
            <section
                ref={aboutRef}
                className={`about-preview-section section ${aboutVisible ? 'visible' : ''}`}
            >
                <div className="container">
                    <div className="about-preview-grid">
                        <div className="about-preview-content">
                            <span className="section-label reveal stagger-1">{aboutPreview.label}</span>
                            <h2 className="reveal stagger-2">{aboutPreview.title}</h2>
                            <p className="reveal stagger-3">{aboutPreview.description}</p>
                            <Link to="/hakkimizda" className="btn btn-primary reveal stagger-4">
                                {aboutPreview.button}
                                <span className="btn-arrow">→</span>
                            </Link>
                        </div>
                        <div className="about-preview-visual reveal stagger-3">
                            {aboutPreview.cards.map((card, index) => (
                                <div key={index} className="visual-card">
                                    <div className="visual-icon">
                                        <Icon name={card.icon} size={28} strokeWidth={1.5} />
                                    </div>
                                    <h4>{card.title}</h4>
                                    <p>{card.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview Section */}
            <section
                ref={servicesRef}
                className={`services-preview-section section ${servicesVisible ? 'visible' : ''}`}
            >
                <div className="container">
                    <div className="section-header">
                        <span className="section-label reveal stagger-1">{servicesPreview.label}</span>
                        <h2 className="reveal stagger-2">{servicesPreview.title}</h2>
                        <p className="reveal stagger-3">{servicesPreview.description}</p>
                    </div>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                delay={index + 1}
                            />
                        ))}
                    </div>
                    <div className="services-cta reveal stagger-5">
                        <Link to="/hizmetlerimiz" className="btn btn-secondary">
                            {servicesPreview.button}
                            <span className="btn-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section
                ref={ctaRef}
                className={`cta-section ${ctaVisible ? 'visible' : ''}`}
            >
                <div className="container">
                    <div className="cta-content">
                        <h2 className="reveal stagger-1">{cta.title}</h2>
                        <p className="reveal stagger-2">{cta.description}</p>
                        <Link to="/iletisim" className="btn btn-primary reveal stagger-3">
                            {cta.button}
                            <span className="btn-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
