import { useInView } from '../hooks/useInView'
import ServiceCard from '../components/ServiceCard'
import { Link } from 'react-router-dom'
import siteData from '../data/siteData.json'
import './Services.css'

function Services() {
    const [servicesRef, servicesVisible] = useInView({ threshold: 0.1 })

    const { cta } = siteData.pages.services
    const services = siteData.services

    return (
        <div className="services-page">
            {/* Services Grid Section - Starts Directly */}
            <section
                ref={servicesRef}
                className={`services-grid-section section services-main ${servicesVisible ? 'visible' : ''}`}
            >
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                image={service.image}
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
