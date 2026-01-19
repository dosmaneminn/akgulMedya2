import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import Marquee from '../components/Marquee'
import ServiceCard from '../components/ServiceCard'
import './Home.css'

function Home() {
    const [heroRef, heroVisible] = useInView({ threshold: 0.1 })
    const [aboutRef, aboutVisible] = useInView({ threshold: 0.1 })
    const [servicesRef, servicesVisible] = useInView({ threshold: 0.1 })
    const [ctaRef, ctaVisible] = useInView({ threshold: 0.1 })

    const marqueeItems = [
        'Dijital Pazarlama',
        'Sosyal Medya Yönetimi',
        'Web Tasarım',
        'Prodüksiyon',
        'SEO Optimizasyonu',
        'E-Ticaret Çözümleri'
    ]

    const services = [
        {
            icon: '🌐',
            title: 'Kurumsal Web Tasarım',
            description: 'Modern ve kullanıcı dostu web siteleri ile markanızı dijitalde öne çıkarıyoruz.'
        },
        {
            icon: '📱',
            title: 'Sosyal Medya Yönetimi',
            description: 'Etkili sosyal medya stratejileri ile hedef kitlenize ulaşıyoruz.'
        },
        {
            icon: '🎬',
            title: 'Prodüksiyon Hizmeti',
            description: 'Profesyonel video ve fotoğraf çekimleriyle markanızı görselleştiriyoruz.'
        },
        {
            icon: '📈',
            title: 'SEO & Dijital Pazarlama',
            description: 'Arama motorlarında üst sıralara çıkmanızı sağlıyoruz.'
        }
    ]

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className={`hero-section ${heroVisible ? 'visible' : ''}`}
            >
                <div className="hero-background">
                    <div className="hero-gradient"></div>
                    <div className="hero-pattern"></div>
                </div>
                <div className="container hero-content">
                    <div className="hero-text">
                        <span className="hero-label reveal stagger-1">Dijital Ajans</span>
                        <h1 className="hero-title reveal stagger-2">
                            Markanızı <span className="highlight">Dijitalde</span> Zirveye Taşıyoruz
                        </h1>
                        <p className="hero-description reveal stagger-3">
                            Yaratıcı çözümler ve stratejik yaklaşımlarla işletmenizi
                            dijital dünyada bir adım öne çıkarıyoruz.
                        </p>
                        <div className="hero-buttons reveal stagger-4">
                            <Link to="/hizmetlerimiz" className="btn btn-primary">
                                Hizmetlerimiz
                                <span className="btn-arrow">→</span>
                            </Link>
                            <Link to="/iletisim" className="btn btn-secondary">
                                İletişime Geç
                            </Link>
                        </div>
                    </div>
                    <div className="hero-visual reveal stagger-5">
                        <div className="hero-shape hero-shape-1"></div>
                        <div className="hero-shape hero-shape-2"></div>
                        <div className="hero-shape hero-shape-3"></div>
                    </div>
                </div>
                <div className="hero-scroll-indicator">
                    <span>Aşağı Kaydır</span>
                    <div className="scroll-arrow"></div>
                </div>
            </section>

            {/* Marquee Section */}
            <section className="marquee-section">
                <Marquee items={marqueeItems} speed={25} />
                <Marquee items={marqueeItems} speed={30} reverse={true} />
            </section>

            {/* About Preview Section */}
            <section
                ref={aboutRef}
                className={`about-preview-section section ${aboutVisible ? 'visible' : ''}`}
            >
                <div className="container">
                    <div className="about-preview-grid">
                        <div className="about-preview-content">
                            <span className="section-label reveal stagger-1">Hakkımızda</span>
                            <h2 className="reveal stagger-2">
                                Dijital Dönüşümünüzde Yanınızdayız
                            </h2>
                            <p className="reveal stagger-3">
                                AkgulMedya olarak, markaların dijital dünyada güçlü bir
                                varlık oluşturmasına yardımcı oluyoruz. Uzman ekibimiz
                                ile yaratıcı ve stratejik çözümler sunuyoruz.
                            </p>
                            <div className="about-stats reveal stagger-4">
                                <div className="stat-item">
                                    <span className="stat-number">150+</span>
                                    <span className="stat-label">Mutlu Müşteri</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">200+</span>
                                    <span className="stat-label">Tamamlanan Proje</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">5+</span>
                                    <span className="stat-label">Yıllık Deneyim</span>
                                </div>
                            </div>
                            <Link to="/hakkimizda" className="btn btn-primary reveal stagger-5">
                                Daha Fazla Bilgi
                                <span className="btn-arrow">→</span>
                            </Link>
                        </div>
                        <div className="about-preview-visual reveal stagger-3">
                            <div className="visual-card">
                                <div className="visual-icon">🚀</div>
                                <h4>Hızlı & Etkili</h4>
                                <p>Projelerinizi zamanında ve kaliteli teslim ediyoruz.</p>
                            </div>
                            <div className="visual-card">
                                <div className="visual-icon">💡</div>
                                <h4>Yaratıcı Çözümler</h4>
                                <p>Özgün fikirlerle markanızı öne çıkarıyoruz.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview Section */}
            <section
                ref={servicesRef}
                className={`services-preview-section section ${servicesVisible ? 'visible' : ''}`}
            >
                <div className="container">
                    <div className="section-header">
                        <span className="section-label reveal stagger-1">Hizmetlerimiz</span>
                        <h2 className="reveal stagger-2">Neler Yapıyoruz?</h2>
                        <p className="reveal stagger-3">
                            Dijital dünyada başarıya ulaşmanız için ihtiyacınız olan tüm hizmetleri sunuyoruz.
                        </p>
                    </div>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                delay={index + 1}
                            />
                        ))}
                    </div>
                    <div className="services-cta reveal stagger-5">
                        <Link to="/hizmetlerimiz" className="btn btn-secondary">
                            Tüm Hizmetleri Gör
                            <span className="btn-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section
                ref={ctaRef}
                className={`cta-section ${ctaVisible ? 'visible' : ''}`}
            >
                <div className="container">
                    <div className="cta-content">
                        <h2 className="reveal stagger-1">Projenizi Hayata Geçirelim</h2>
                        <p className="reveal stagger-2">
                            Dijital dönüşüm yolculuğunuzda size rehberlik etmek için buradayız.
                        </p>
                        <Link to="/iletisim" className="btn btn-primary reveal stagger-3">
                            Hemen İletişime Geç
                            <span className="btn-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
