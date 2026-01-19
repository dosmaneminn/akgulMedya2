import useInView from '../hooks/useInView'
import Icon from './Icon'
import './ServiceCard.css'

function ServiceCard({ icon, title, description, delay = 1 }) {
    const [cardRef, isInView] = useInView({ threshold: 0.1 })

    return (
        <div
            ref={cardRef}
            className={`service-card ${isInView ? 'visible' : ''}`}
            style={{ transitionDelay: `${delay * 0.1}s` }}
        >
            <div className="service-card-icon">
                <Icon name={icon} size={32} strokeWidth={1.5} />
            </div>
            <h3 className="service-card-title">{title}</h3>
            <p className="service-card-description">{description}</p>
            <div className="service-card-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </div>
        </div>
    )
}

export default ServiceCard

