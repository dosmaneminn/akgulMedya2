import { useInView } from '../hooks/useInView'
import { Link } from 'react-router-dom'
import siteData from '../data/siteData.json'
import WaveBackground from '../components/WaveBackground'
import Icon from '../components/Icon'
import './About.css'

function About() {
    const [heroRef, heroVisible] = useInView({ threshold: 0.1 })
    const [storyRef, storyVisible] = useInView({ threshold: 0.1 })
    const [whyUsRef, whyUsVisible] = useInView({ threshold: 0.1 })
    const [valuesRef, valuesVisible] = useInView({ threshold: 0.1 })

    const { hero, story, whyUs, values, cta } = siteData.pages.about

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className={`about-hero wave-hero ${heroVisible ? 'visible' : ''}`}
            >
                <WaveBackground />
                <div className="container">
                    <div className="about-hero-content">
                        <span className="section-label hero-label-light reveal stagger-1">{hero.label}</span>
                        <h1 className="hero-title-light reveal stagger-2" dangerouslySetInnerHTML={{ __html: hero.title }}></h1>
                        <p className="hero-description-light reveal stagger-3">{hero.description}</p>
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
                            <span className="section-label reveal stagger-1">{story.label}</span>
                            <h2 className="reveal stagger-2">{story.title}</h2>
                            {story.items.map((item, index) => (
                                <p key={index} className={`reveal stagger-${index + 3}`}>
                                    {item}
                                </p>
                            ))}
                        </div>
                        <div className="story-visual reveal stagger-3">
                            <div className="story-image-placeholder">
                                <Icon name="briefcase" size={48} strokeWidth={1.5} />
                                <span>{siteData.siteInfo.name}</span>
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
                        <span className="section-label reveal stagger-1">{whyUs.label}</span>
                        <h2 className="reveal stagger-2">{whyUs.title}</h2>
                        <p className="reveal stagger-3">{whyUs.description}</p>
                    </div>
                    <div className="why-us-grid">
                        {whyUs.items.map((item, index) => (
                            <div
                                key={index}
                                className={`why-us-card reveal stagger-${(index % 3) + 1}`}
                            >
                                <div className="why-us-icon">
                                    <Icon name={item.icon} size={32} strokeWidth={1.5} />
                                </div>
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
                        <span className="section-label reveal stagger-1">{values.label}</span>
                        <h2 className="reveal stagger-2">{values.title}</h2>
                    </div>
                    <div className="values-grid">
                        {values.items.map((value, index) => (
                            <div
                                key={index}
                                className={`value-card reveal stagger-${index + 1}`}
                            >
                                <div className="value-icon">
                                    <Icon name={value.icon} size={32} strokeWidth={1.5} />
                                </div>
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
                        <h2>{cta.title}</h2>
                        <p>{cta.description}</p>
                        <Link to="/iletisim" className="btn btn-primary">
                            {cta.button}
                            <span className="btn-arrow">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
