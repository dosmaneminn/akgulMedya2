import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import './Contact.css'

function Contact() {
    const [heroRef, heroVisible] = useInView({ threshold: 0.1 })
    const [formRef, formVisible] = useInView({ threshold: 0.1 })
    const [infoRef, infoVisible] = useInView({ threshold: 0.1 })

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simüle edilmiş form gönderimi
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        })

        // 3 saniye sonra mesajı kaldır
        setTimeout(() => setIsSubmitted(false), 3000)
    }

    const contactInfo = [
        {
            icon: '📍',
            title: 'Adres',
            content: 'İstanbul, Türkiye',
            link: null
        },
        {
            icon: '📧',
            title: 'E-posta',
            content: 'info@akgulmedya.com',
            link: 'mailto:info@akgulmedya.com'
        },
        {
            icon: '📱',
            title: 'Telefon',
            content: '+90 (555) 123 45 67',
            link: 'tel:+905551234567'
        },
        {
            icon: '🕐',
            title: 'Çalışma Saatleri',
            content: 'Pazartesi - Cuma: 09:00 - 18:00',
            link: null
        }
    ]

    const socialLinks = [
        { icon: '📸', name: 'Instagram', url: '#' },
        { icon: '👍', name: 'Facebook', url: '#' },
        { icon: '🐦', name: 'Twitter', url: '#' },
        { icon: '💼', name: 'LinkedIn', url: '#' }
    ]

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className={`contact-hero ${heroVisible ? 'visible' : ''}`}
            >
                <div className="contact-hero-bg">
                    <div className="contact-hero-gradient"></div>
                </div>
                <div className="container">
                    <div className="contact-hero-content">
                        <span className="section-label reveal stagger-1">İletişim</span>
                        <h1 className="reveal stagger-2">
                            Bizimle <span className="highlight">İletişime</span> Geçin
                        </h1>
                        <p className="reveal stagger-3">
                            Projeleriniz hakkında konuşmak, sorularınızı yanıtlamak veya
                            teklif almak için bize ulaşın.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-content-section section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div
                            ref={formRef}
                            className={`contact-form-wrapper ${formVisible ? 'visible' : ''}`}
                        >
                            <h2 className="reveal stagger-1">Mesaj Gönderin</h2>
                            <p className="reveal stagger-2">
                                Formu doldurarak bize ulaşabilirsiniz. En kısa sürede size dönüş yapacağız.
                            </p>

                            {isSubmitted && (
                                <div className="form-success">
                                    ✓ Mesajınız başarıyla gönderildi!
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="contact-form reveal stagger-3">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Ad Soyad *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Adınız Soyadınız"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">E-posta *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="ornek@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone">Telefon</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+90 (___) ___ __ __"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Konu *</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Konu seçiniz</option>
                                            <option value="web-tasarim">Web Tasarım</option>
                                            <option value="sosyal-medya">Sosyal Medya</option>
                                            <option value="seo">SEO & Dijital Pazarlama</option>
                                            <option value="produksiyon">Prodüksiyon</option>
                                            <option value="diger">Diğer</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Mesajınız *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder="Projeniz hakkında bize bilgi verin..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary submit-btn"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="spinner"></span>
                                            Gönderiliyor...
                                        </>
                                    ) : (
                                        <>
                                            Mesaj Gönder
                                            <span className="btn-arrow">→</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div
                            ref={infoRef}
                            className={`contact-info-wrapper ${infoVisible ? 'visible' : ''}`}
                        >
                            <h2 className="reveal stagger-1">İletişim Bilgileri</h2>
                            <p className="reveal stagger-2">
                                Bize doğrudan ulaşmak için aşağıdaki iletişim bilgilerini kullanabilirsiniz.
                            </p>

                            <div className="contact-info-list">
                                {contactInfo.map((info, index) => (
                                    <div
                                        key={index}
                                        className={`contact-info-item reveal stagger-${index + 1}`}
                                    >
                                        <div className="info-icon">{info.icon}</div>
                                        <div className="info-content">
                                            <h4>{info.title}</h4>
                                            {info.link ? (
                                                <a href={info.link}>{info.content}</a>
                                            ) : (
                                                <p>{info.content}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="social-links reveal stagger-5">
                                <h4>Sosyal Medya</h4>
                                <div className="social-icons">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            className="social-icon"
                                            title={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
