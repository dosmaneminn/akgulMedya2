import { useInView } from '../hooks/useInView'
import ServiceCard from '../components/ServiceCard'
import { Link } from 'react-router-dom'
import './Services.css'

function Services() {
    const [heroRef, heroVisible] = useInView({ threshold: 0.1 })
    const [servicesRef, servicesVisible] = useInView({ threshold: 0.1 })

    const services = [
        {
            icon: '🌐',
            title: 'Kurumsal Web Tasarım',
            description: 'Modern, responsive ve kullanıcı dostu web siteleri tasarlıyoruz. SEO uyumlu altyapı ile arama motorlarında üst sıralara çıkmanızı sağlıyoruz.'
        },
        {
            icon: '📈',
            title: 'SEO & Dijital Pazarlama',
            description: 'Arama motoru optimizasyonu, Google Ads ve dijital reklam kampanyaları ile markanızın görünürlüğünü artırıyoruz.'
        },
        {
            icon: '📱',
            title: 'Sosyal Medya Yönetimi',
            description: 'Instagram, Facebook, Twitter ve LinkedIn hesaplarınızı profesyonel olarak yönetiyor, içerik üretiyoruz.'
        },
        {
            icon: '🎬',
            title: 'Prodüksiyon Hizmeti',
            description: 'Profesyonel video çekimi, kurgu, animasyon ve fotoğraf hizmetleri ile markanızı görselleştiriyoruz.'
        },
        {
            icon: '🛒',
            title: 'E-Ticaret Çözümleri',
            description: 'Online mağaza kurulumu, ödeme entegrasyonları ve e-ticaret yönetimi konularında destek veriyoruz.'
        },
        {
            icon: '💼',
            title: 'Marka Danışmanlığı',
            description: 'Logo tasarımı, kurumsal kimlik ve marka stratejisi oluşturma konularında profesyonel danışmanlık sunuyoruz.'
        },
        {
            icon: '✍️',
            title: 'İçerik Üretimi',
            description: 'Blog yazıları, sosyal medya içerikleri ve reklam metinleri ile markanızın sesini oluşturuyoruz.'
        },
        {
            icon: '📊',
            title: 'Analiz & Raporlama',
            description: 'Detaylı performans analizleri ve raporlamalar ile stratejilerinizi veriye dayalı optimize ediyoruz.'
        }
    ]

    return (
        <div className="services-page">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className={`services-hero ${heroVisible ? 'visible' : ''}`}
            >
                <div className="services-hero-bg">
                    <div className="services-hero-gradient"></div>
                </div>
                <div className="container">
                    <div className="services-hero-content">
                        <span className="section-label reveal stagger-1">Hizmetlerimiz</span>
                        <h1 className="reveal stagger-2">
                            Dijital <span className="highlight">Çözümlerimiz</span>
                        </h1>
                        <p className="reveal stagger-3">
                            İşletmenizin dijital dünyada başarılı olması için ihtiyacınız olan
                            tüm hizmetleri sunuyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section
                ref={servicesRef}
                className={`services-grid-section section ${servicesVisible ? 'visible' : ''}`}
            >
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                delay={(index % 4) + 1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta-section">
                <div className="container">
                    <div className="services-cta-content">
                        <h2>Projeniz İçin Hazırız</h2>
                        <p>Hangi hizmet size uygun olursa olsun, size özel çözümler sunmak için buradayız.</p>
                        <Link to="/iletisim" className="btn btn-primary">
                            Hemen İletişime Geç
                            <span className="btn-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
