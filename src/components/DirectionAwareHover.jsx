import { useState } from 'react'
import './DirectionAwareHover.css'

function DirectionAwareHover({
    children,
    imageUrl,
    className = '',
}) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className={`dah-container ${className} ${isHovered ? 'dah-hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Image with blur on hover */}
            <div
                className="dah-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />

            {/* Gradient overlay */}
            <div className="dah-gradient" />

            {/* Content at bottom */}
            <div className="dah-content">
                {/* Title - slides up on hover */}
                <div className="dah-title">
                    <h3>{children.title}</h3>
                </div>

                {/* Description - fades in from below */}
                <div className="dah-description">
                    <p>{children.description}</p>
                </div>
            </div>
        </div>
    )
}

export default DirectionAwareHover
