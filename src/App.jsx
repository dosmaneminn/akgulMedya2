import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Partnerships from './pages/Partnerships'
import Contact from './pages/Contact'
import siteData from './data/siteData.json'

function App() {
    useEffect(() => {
        // Apply colors from JSON to CSS variables
        const root = document.documentElement
        const colors = siteData.colors

        Object.entries(colors).forEach(([key, value]) => {
            // Convert camelCase to kebab-case for CSS variables
            const cssVar = '--' + key.replace(/([A-Z])/g, '-$1').toLowerCase()
            root.style.setProperty(cssVar, value)
        })
    }, [])

    return (
        <div className="app">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hakkimizda" element={<About />} />
                    <Route path="/hizmetlerimiz" element={<Services />} />
                    <Route path="/isbirliklerimiz" element={<Partnerships />} />
                    <Route path="/iletisim" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
