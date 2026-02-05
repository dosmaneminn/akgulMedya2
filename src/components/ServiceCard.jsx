import DirectionAwareHover from './DirectionAwareHover'
import './ServiceCard.css'

function ServiceCard({ title, description, image, delay = 1 }) {
    return (
        <div
            className="service-card-wrapper"
            style={{ animationDelay: `${delay * 0.1}s` }}
        >
            <DirectionAwareHover
                imageUrl={image}
                className="service-direction-card"
            >
                {{
                    title: title,
                    description: description
                }}
            </DirectionAwareHover>
        </div>
    )
}

export default ServiceCard
