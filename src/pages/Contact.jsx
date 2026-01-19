import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import siteData from '../data/siteData.json'
import Icon from '../components/Icon'
import './Contact.css'

function Contact() {
    const [heroRef, heroVisible] = useInView({ threshold: 0.1 })
    const [formRef, formVisible] = useInView({ threshold: 0.1 })
    const [infoRef, infoVisible] = useInView({ threshold: 0.1 })

    const { hero, form, info } = siteData.pages.contact
    const contact = siteData.contact
    const socialLinks = siteData.social

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
                        <span className="section-label reveal stagger-1">{hero.label}</span>
                        <h1 className="reveal stagger-2" dangerouslySetInnerHTML={{ __html: hero.title }}>
                        </h1>
                        <p className="reveal stagger-3">
                            {hero.description}
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
                            <h2 className="reveal stagger-1">{form.title}</h2>
                            <p className="reveal stagger-2">
                                {form.description}
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
                                            {form.button}
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
                            <h2 className="reveal stagger-1">{info.title}</h2>
                            <p className="reveal stagger-2">
                                {info.description}
                            </p>

                            <div className="contact-info-list">
                                {Object.values(contact).map((item, index) => (
                                    <div
                                        key={index}
                                        className={`contact-info-item reveal stagger-${index + 1}`}
                                    >
                                        <div className="info-icon"><Icon name={item.icon} size={24} strokeWidth={1.5} /></div>
                                        <div className="info-content">
                                            <h4>{item.title}</h4>
                                            {item.link ? (
                                                <a href={item.link}>{item.content}</a>
                                            ) : (
                                                <p>{item.content}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="social-links reveal stagger-5">
                                <h4>{info.socialTitle}</h4>
                                <div className="social-icons">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            className="social-icon"
                                            title={social.name}
                                        >
                                            <Icon name={social.icon} size={22} strokeWidth={1.5} />
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
