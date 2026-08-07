import { ChevronDown } from 'lucide-react';
import entranceImg from '../assets/Entrance.webp';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${entranceImg})` }}
        aria-hidden="true"
      />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__content">
        <p className="hero__tag">
          <span className="hero__tag-line" />
          {t('hero_location')}
        </p>
        <h1 className="hero__title">
          通达酒店<br />
          <span>Tong Da Hotel</span>
        </h1>
        <p className="hero__subtitle">{t('hero_subtitle')}</p>
        <div className="hero__cta">
          <a href="#rooms" className="btn-primary">{t('hero_cta_rooms')}</a>
          <a href="#amenities" className="btn-outline">{t('hero_cta_amenities')}</a>
        </div>

        <div className="hero__badges">
          <div className="hero__badge">
            <span className="hero__badge-num">65</span>
            <span className="hero__badge-label">{t('hero_badge_rooms')}</span>
          </div>
          <div className="hero__badge-divider" />
          <div className="hero__badge">
            <span className="hero__badge-num">4–5★</span>
            <span className="hero__badge-label">{t('hero_badge_rating')}</span>
          </div>
          <div className="hero__badge-divider" />
          <div className="hero__badge">
            <span className="hero__badge-num">~2.4km</span>
            <span className="hero__badge-label">{t('hero_badge_airport')}</span>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
