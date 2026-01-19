import { useInView } from '../hooks/useInView'
import ServiceCard from '../components/ServiceCard'
import { Link } from 'react-router-dom'
import siteData from '../data/siteData.json'
import WaveBackground from '../components/WaveBackground'
import './Services.css'

function Services() {
    const [heroRef, heroVisible] = useInView({ threshold: 0.1 })
    const [servicesRef, servicesVisible] = useInView({ threshold: 0.1 })

    const { hero, cta } = siteData.pages.services
    const services = siteData.services

    return (
        <div className="services-page">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className={`services-hero wave-hero ${heroVisible ? 'visible' : ''}`}
            >
                <WaveBackground />
                <div className="container">
                    <div className="services-hero-content">
                        <span className="section-label hero-label-light reveal stagger-1">{hero.label}</span>
                        <h1 className="hero-title-light reveal stagger-2" dangerouslySetInnerHTML={{ __html: hero.title }}></h1>
                        <p className="hero-description-light reveal stagger-3">{hero.description}</p>
                    </div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section
                ref={servicesRef}
                className={`services-grid-section section ${servicesVisible ? 'visible' : ''}`}
            >
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                delay={(index % 4) + 1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta-section">
                <div className="container">
                    <div className="services-cta-content">
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

export default Services
