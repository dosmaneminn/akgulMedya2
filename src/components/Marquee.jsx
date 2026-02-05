import './Marquee.css'

function Marquee({ items, speed = 30, reverse = false }) {
    // Duplicate items for seamless infinite loop animation
    const duplicatedItems = [...items, ...items]

    return (
        <div className="marquee-container">
            <div
                className={`marquee-track ${reverse ? 'reverse' : ''}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {duplicatedItems.map((item, index) => (
                    <div key={index} className="marquee-item">
                        <span className="marquee-text">{item}</span>
                        <span className="marquee-separator">✦</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Marquee
