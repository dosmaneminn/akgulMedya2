import { useMemo, useRef, useEffect, useState, useCallback } from 'react'
import './WaveBackground.css'

// Generate random particles once
function generateParticles(count) {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,          // % position
        y: Math.random() * 100,
        size: 2 + Math.random() * 3,      // 2-5px
        opacity: 0.3 + Math.random() * 0.5, // 0.3-0.8
        duration: 15 + Math.random() * 25, // 15-40s animation
        delay: Math.random() * -20,        // stagger start
        driftX: 10 + Math.random() * 30,   // how far it floats in X (px)
        driftY: 10 + Math.random() * 20,   // how far it floats in Y (px)
    }))
}

// Calculate distance between two points
function distance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
}

function WaveBackground() {
    const containerRef = useRef(null)
    const svgRef = useRef(null)
    const particleRefs = useRef([])
    const [isMobile, setIsMobile] = useState(false)

    // Responsive: fewer particles on mobile
    const particleCount = isMobile ? 25 : 50

    const particles = useMemo(
        () => generateParticles(particleCount),
        [particleCount]
    )

    // Detect mobile on mount
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Draw connection lines between nearby particles
    const updateLines = useCallback(() => {
        const svg = svgRef.current
        const container = containerRef.current
        if (!svg || !container) return

        const rect = container.getBoundingClientRect()
        const maxDist = isMobile ? 100 : 150 // connection distance threshold in px
        const dots = particleRefs.current

        // Get current positions of all particle dots
        const positions = []
        for (let i = 0; i < dots.length; i++) {
            const el = dots[i]
            if (!el) continue
            const dotRect = el.getBoundingClientRect()
            positions.push({
                x: dotRect.left - rect.left + dotRect.width / 2,
                y: dotRect.top - rect.top + dotRect.height / 2,
            })
        }

        // Build SVG line elements
        let lines = ''
        for (let i = 0; i < positions.length; i++) {
            for (let j = i + 1; j < positions.length; j++) {
                const dist = distance(
                    positions[i].x, positions[i].y,
                    positions[j].x, positions[j].y
                )
                if (dist < maxDist) {
                    const opacity = (1 - dist / maxDist) * 0.25
                    lines += `<line x1="${positions[i].x}" y1="${positions[i].y}" x2="${positions[j].x}" y2="${positions[j].y}" stroke="rgba(167,243,208,${opacity})" stroke-width="1"/>`
                }
            }
        }

        svg.innerHTML = lines
    }, [isMobile])

    // Update lines on an interval (lightweight, no rAF loop)
    useEffect(() => {
        // Initial draw after CSS animations settle
        const initialTimeout = setTimeout(updateLines, 500)
        const interval = setInterval(updateLines, 2500)

        return () => {
            clearTimeout(initialTimeout)
            clearInterval(interval)
        }
    }, [updateLines])

    return (
        <div className="particle-bg" ref={containerRef}>
            {/* Gradient background handled by CSS */}

            {/* SVG layer for connection lines */}
            <svg
                ref={svgRef}
                className="particle-lines"
                aria-hidden="true"
            />

            {/* Particle dots */}
            {particles.map((p) => (
                <div
                    key={p.id}
                    ref={(el) => { particleRefs.current[p.id] = el }}
                    className="particle-dot"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        opacity: p.opacity,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                        '--drift-x': `${p.driftX}px`,
                        '--drift-y': `${p.driftY}px`,
                    }}
                />
            ))}

            {/* Subtle radial glow spots */}
            <div className="particle-glow particle-glow-1" />
            <div className="particle-glow particle-glow-2" />
            <div className="particle-glow particle-glow-3" />

            {/* Dark overlay at bottom for text readability */}
            <div className="particle-overlay" />
        </div>
    )
}

export default WaveBackground
