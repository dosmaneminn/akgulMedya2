import { useInView } from '../hooks/useInView'
import { Link } from 'react-router-dom'
import './Partnerships.css'

function Partnerships() {
    const [heroRef, heroVisible] = useInView({ threshold: 0.1 })
    const [partnersRef, partnersVisible] = useInView({ threshold: 0.1 })

    // Örnek partner listesi
    const partners = [
        { name: 'Partner 1', color: '#A8D5BA' },
        { name: 'Partner 2', color: '#7CB899' },
        { name: 'Partner 3', color: '#5BA17F' },
        { name: 'Partner 4', color: '#C5E8D3' },
        { name: 'Partner 5', color: '#4A8A6B' },
        { name: 'Partner 6', color: '#A8D5BA' },
        { name: 'Partner 7', color: '#7CB899' },
        { name: 'Partner 8', color: '#5BA17F' },
        { name: 'Partner 9', color: '#C5E8D3' },
        { name: 'Partner 10', color: '#4A8A6B' },
        { name: 'Partner 11', color: '#A8D5BA' },
        { name: 'Partner 12', color: '#7CB899' }
    ]

    return (
        <div className="partnerships-page">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className={`partnerships-hero ${heroVisible ? 'visible' : ''}`}
            >
                <div className="partnerships-hero-bg">
                    <div className="partnerships-hero-gradient"></div>
                </div>
                <div className="container">
                    <div className="partnerships-hero-content">
                        <span className="section-label reveal stagger-1">İşbirliklerimiz</span>
                        <h1 className="reveal stagger-2">
                            Güçlü <span className="highlight">İş Ortaklıkları</span>
                        </h1>
                        <p className="reveal stagger-3">
                            Birlikte çalıştığımız değerli markalar ve başarılı projelerimiz
                        </p>
                    </div>
                </div>
            </section>

            {/* Partners Grid Section */}
            <section
                ref={partnersRef}
                className={`partners-section section ${partnersVisible ? 'visible' : ''}`}
            >
                <div className="container">
                    <div className="section-header">
                        <span className="section-label reveal stagger-1">Referanslarımız</span>
                        <h2 className="reveal stagger-2">Çalıştığımız Markalar</h2>
                        <p className="reveal stagger-3">
                            Güvenilir iş ortaklarımızla birlikte başarılı projeler gerçekleştirdik
                        </p>
                    </div>
                    <div className="partners-grid">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className={`partner-card reveal stagger-${(index % 4) + 1}`}
                            >
                                <div
                                    className="partner-logo"
                                    style={{ backgroundColor: partner.color }}
                                >
                                    <span>{partner.name.charAt(0)}</span>
                                </div>
                                <span className="partner-name">{partner.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="partnerships-stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <span className="stat-number">150+</span>
                            <span className="stat-label">Mutlu Müşteri</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">200+</span>
                            <span className="stat-label">Tamamlanan Proje</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Yıllık Deneyim</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">%98</span>
                            <span className="stat-label">Müşteri Memnuniyeti</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="partnerships-cta-section">
                <div className="container">
                    <div className="partnerships-cta-content">
                        <h2>Siz de İş Ortaklarımız Arasına Katılın</h2>
                        <p>Birlikte harika işler başarabiliriz.</p>
                        <Link to="/iletisim" className="btn btn-primary">
                            İletişime Geç
                            <span className="btn-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Partnerships
