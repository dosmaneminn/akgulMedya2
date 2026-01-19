import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Partnerships from './pages/Partnerships'
import Contact from './pages/Contact'

function App() {
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
