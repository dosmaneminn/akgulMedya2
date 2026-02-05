import { useEffect, useRef, useState, useMemo } from 'react'

export function useInView({ threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = {}) {
    const ref = useRef(null)
    const [isInView, setIsInView] = useState(false)

    const observerOptions = useMemo(() => ({
        threshold,
        rootMargin,
    }), [threshold, rootMargin])

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                    // Once visible, stop observing (animate only once)
                    observer.unobserve(element)
                }
            },
            observerOptions
        )

        observer.observe(element)

        return () => {
            observer.unobserve(element)
        }
    }, [observerOptions])

    return [ref, isInView]
}

export default useInView
