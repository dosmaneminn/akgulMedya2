import { useState } from 'react'
import { motion } from 'framer-motion'

function DirectionAwareHover({
    children,
    imageUrl,
    className = '',
}) {
    const [isHovered, setIsHovered] = useState(false)

    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '320px',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
    }

    const imageStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    const gradientStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)',
        pointerEvents: 'none',
    }

    const contentStyle = {
        position: 'absolute',
        bottom: '24px',
        left: '24px',
        right: '24px',
        zIndex: 2,
    }

    return (
        <div
            className={className}
            style={containerStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Image with blur on hover */}
            <motion.div
                style={imageStyle}
                animate={{
                    filter: isHovered ? 'blur(4px) brightness(0.5)' : 'blur(0px) brightness(0.75)',
                    scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.35 }}
            />

            {/* Gradient overlay */}
            <div style={gradientStyle} />

            {/* Content at bottom */}
            <div style={contentStyle}>
                {/* Title - slides up on hover */}
                <motion.div
                    animate={{
                        y: isHovered ? -8 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <h3 style={{
                        fontSize: '1.4rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        margin: 0,
                        textShadow: '0 2px 10px rgba(0,0,0,0.6)',
                    }}>
                        {children.title}
                    </h3>
                </motion.div>

                {/* Description - fades in from below */}
                <motion.div
                    initial={{ opacity: 0, y: 15, height: 0 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 15,
                        height: isHovered ? 'auto' : 0,
                        marginTop: isHovered ? 10 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <p style={{
                        fontSize: '0.9rem',
                        lineHeight: 1.5,
                        color: 'rgba(255,255,255,0.9)',
                        margin: 0,
                        textShadow: '0 1px 5px rgba(0,0,0,0.5)',
                    }}>
                        {children.description}
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default DirectionAwareHover
