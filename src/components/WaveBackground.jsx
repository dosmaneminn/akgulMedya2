import { useRef, useEffect, useCallback } from 'react'
import './WaveBackground.css'

function WaveBackground() {
    const canvasRef = useRef(null)
    const mouseX = useRef(0.5)
    const animationFrame = useRef(null)
    const time = useRef(0)

    const colors = [
        '#22C55E', // Modern Green Primary
        '#4ADE80', // Lighter Green
        '#16A34A', // Darker Green
        '#86EFAC', // Very Light
        '#15803D', // Very Dark
    ]

    const handleMouseMove = useCallback((e) => {
        const rect = canvasRef.current?.getBoundingClientRect()
        if (rect) {
            mouseX.current = e.clientX / window.innerWidth
        }
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        const drawWave = (yOffset, amplitude, frequency, color, phaseShift) => {
            ctx.beginPath()
            ctx.moveTo(0, canvas.height)

            for (let x = 0; x <= canvas.width; x += 5) {
                // Mouse interaction affects wave position
                const mouseInfluence = (mouseX.current - 0.5) * 100
                const y = yOffset +
                    Math.sin((x + time.current * 0.5 + mouseInfluence) * frequency + phaseShift) * amplitude +
                    Math.sin((x + time.current * 0.3) * frequency * 0.5) * amplitude * 0.5
                ctx.lineTo(x, y)
            }

            ctx.lineTo(canvas.width, canvas.height)
            ctx.closePath()
            ctx.fillStyle = color
            ctx.fill()
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Draw multiple wave layers
            drawWave(canvas.height * 0.4, 60, 0.003, colors[0] + '40', 0)
            drawWave(canvas.height * 0.5, 50, 0.004, colors[1] + '50', 1)
            drawWave(canvas.height * 0.55, 45, 0.005, colors[2] + '60', 2)
            drawWave(canvas.height * 0.6, 40, 0.006, colors[3] + '70', 3)
            drawWave(canvas.height * 0.65, 35, 0.007, colors[4] + '80', 4)

            time.current += 1
            animationFrame.current = requestAnimationFrame(animate)
        }

        animate()

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current)
            }
        }
    }, [handleMouseMove])

    return (
        <div className="wave-background">
            <canvas ref={canvasRef} className="wave-canvas" />
            <div className="wave-overlay"></div>
        </div>
    )
}

export default WaveBackground
