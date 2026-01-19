import { useInView } from '../hooks/useInView'
import { Link } from 'react-router-dom'
import './About.css'

function About() {
    const [heroRef, heroVisible] = useInView({ threshold: 0.1 })
    const [storyRef, storyVisible] = useInView({ threshold: 0.1 })
    const [whyUsRef, whyUsVisible] = useInView({ threshold: 0.1 })
    const [valuesRef, valuesVisible] = useInView({ threshold: 0.1 })

    const whyUsItems = [
        {
            icon: '🎯',
            title: 'Stratejik Yaklaşım',
            description: 'Her projeye özel stratejiler geliştiriyor, hedeflerinize uygun çözümler sunuyoruz.'
        },
        {
            icon: '💡',
            title: 'Yaratıcı Ekip',
            description: 'Deneyimli ve yaratıcı ekibimiz ile özgün fikirler üretiyoruz.'
        },
        {
            icon: '🚀',
            title: 'Hızlı Teslimat',
            description: 'Projelerinizi zamanında ve kaliteli bir şekilde teslim ediyoruz.'
        },
        {
            icon: '📊',
            title: 'Ölçülebilir Sonuçlar',
            description: 'Veriye dayalı yaklaşımlarla başarıyı ölçüyor ve raporluyoruz.'
        },
        {
            icon: '🤝',
            title: 'İş Ortaklığı',
            description: 'Müşterilerimizle uzun vadeli iş ortaklıkları kuruyoruz.'
        },
        {
            icon: '🔒',
            title: 'Güvenilirlik',
            description: 'Tüm projelerimizde şeffaflık ve güvenilirliği ön planda tutuyoruz.'
        }
    ]

    const values = [
        { icon: '✨', title: 'Yenilikçilik', description: 'Sürekli gelişen teknolojileri takip ediyor ve uyguluyoruz.' },
        { icon: '🎨', title: 'Yaratıcılık', description: 'Özgün tasarımlar ve fikirlerle fark yaratıyoruz.' },
        { icon: '💪', title: 'Profesyonellik', description: 'Her projede en yüksek kalite standartlarını sağlıyoruz.' },
        { icon: '❤️', title: 'Tutku', description: 'İşimizi sevgiyle ve tutkuyla yapıyoruz.' }
    ]

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className={`about-hero ${heroVisible ? 'visible' : ''}`}
            >
                <div className="about-hero-bg">
                    <div className="about-hero-gradient"></div>
                    <div className="about-hero-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="about-hero-content">
                        <span className="section-label reveal stagger-1">Hakkımızda</span>
                        <h1 className="reveal stagger-2">
                            Dijital Dünyada <span className="highlight">Güçlü</span> Bir Varlık
                        </h1>
                        <p className="reveal stagger-3">
                            AkgulMedya olarak, markaların dijital dünyada başarılı olmaları için
                            gereken tüm hizmetleri sunuyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section
                ref={storyRef}
                className={`story-section section ${storyVisible ? 'visible' : ''}`}
            >
                <div className="container">
                    <div className="story-grid">
                        <div className="story-content">
                            <span className="section-label reveal stagger-1">Hikayemiz</span>
                            <h2 className="reveal stagger-2">Dijital Yolculuğumuz</h2>
                            <p className="reveal stagger-3">
                                AkgulMedya, dijital pazarlama ve web tasarım alanında uzmanlaşmış
                                bir ajans olarak yola çıktı. Amacımız, işletmelerin dijital
                                dünyada güçlü bir varlık oluşturmasına yardımcı olmaktır.
                            </p>
                            <p className="reveal stagger-4">
                                Uzman ekibimiz, yaratıcı tasarımlar, etkili pazarlama stratejileri
                                ve modern teknolojiler kullanarak müşterilerimize en iyi
                                sonuçları sunmak için çalışmaktadır.
                            </p>
                            <div className="story-stats reveal stagger-5">
                                <div className="story-stat">
                                    <span className="stat-number">5+</span>
                                    <span className="stat-text">Yıllık Deneyim</span>
                                </div>
                                <div className="story-stat">
                                    <span className="stat-number">150+</span>
                                    <span className="stat-text">Mutlu Müşteri</span>
                                </div>
                                <div className="story-stat">
                                    <span className="stat-number">200+</span>
                                    <span className="stat-text">Tamamlanan Proje</span>
                                </div>
                            </div>
                        </div>
                        <div className="story-visual reveal stagger-3">
                            <div className="story-image-placeholder">
                                <div className="placeholder-icon">🏢</div>
                                <span>AkgulMedya</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section
                ref={whyUsRef}
                className={`why-us-section section ${whyUsVisible ? 'visible' : ''}`}
            >
                <div className="container">
                    <div className="section-header">
                        <span className="section-label reveal stagger-1">Neden Biz?</span>
                        <h2 className="reveal stagger-2">Neden AkgulMedya?</h2>
                        <p className="reveal stagger-3">
                            Bizi farklı kılan özelliklerimizi keşfedin
                        </p>
                    </div>
                    <div className="why-us-grid">
                        {whyUsItems.map((item, index) => (
                            <div
                                key={index}
                                className={`why-us-card reveal stagger-${(index % 3) + 1}`}
                            >
                                <div className="why-us-icon">{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section
                ref={valuesRef}
                className={`values-section section ${valuesVisible ? 'visible' : ''}`}
            >
                <div className="container">
                    <div className="section-header">
                        <span className="section-label reveal stagger-1">Değerlerimiz</span>
                        <h2 className="reveal stagger-2">Temel Değerlerimiz</h2>
                    </div>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className={`value-card reveal stagger-${index + 1}`}
                            >
                                <div className="value-icon">{value.icon}</div>
                                <h4>{value.title}</h4>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta-section">
                <div className="container">
                    <div className="about-cta-content">
                        <h2>Projeniz İçin Hazırız</h2>
                        <p>Dijital dönüşüm yolculuğunuzda yanınızda olmak istiyoruz.</p>
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

export default About
