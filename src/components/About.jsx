import exterior1 from '../assets/Exterior 1.jpg';
import exterior2 from '../assets/Exterior 2.jpg';
import { MapPin, Clock, Star, Wifi } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const highlights = [
    { icon: <Star size={20} />, title: t('about_h1_title'), text: t('about_h1_text') },
    { icon: <MapPin size={20} />, title: t('about_h2_title'), text: t('about_h2_text') },
    { icon: <Clock size={20} />, title: t('about_h3_title'), text: t('about_h3_text') },
    { icon: <Wifi size={20} />, title: t('about_h4_title'), text: t('about_h4_text') },
  ];

  return (
    <section className="about" id="about">
      <div className="container about__grid">
        <div className="about__images">
          <div className="about__img about__img--main">
            <img src={exterior1} alt="Tong Da Hotel exterior" loading="lazy" />
          </div>
          <div className="about__img about__img--secondary">
            <img src={exterior2} alt="Tong Da Hotel building" loading="lazy" />
            <div className="about__img-badge">
              <span className="about__img-badge-num">65</span>
              <span className="about__img-badge-text">{t('about_badge_text')}</span>
            </div>
          </div>
        </div>

        <div className="about__text">
          <p className="section-label">{t('about_label')}</p>
          <h2 className="section-title">{t('about_title')}</h2>
          <div className="divider" />
          <p className="about__body">{t('about_body1')}</p>
          <p className="about__body">{t('about_body2')}</p>

          <div className="about__highlights">
            {highlights.map((h, i) => (
              <div className="about__highlight" key={i}>
                <span className="about__highlight-icon">{h.icon}</span>
                <div>
                  <strong>{h.title}</strong>
                  <p>{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
