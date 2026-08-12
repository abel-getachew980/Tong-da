import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function Stars({ count }) {
  return (
    <div className="testi__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill={i < count ? '#C9A84C' : 'none'} color={i < count ? '#C9A84C' : '#ccc'} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { t } = useLanguage();

  const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/ca4YEwNP6WqgYViE6';
  const TRIPADVISOR_URL = 'https://www.tripadvisor.com/Hotel_Review-g293791-d25286720-Reviews-Tong_Da_Hotel-Addis_Ababa.html';
  const TRIP_COM_URL = 'https://www.trip.com/hotels/addis-ababa-hotel-detail-101234398/tong-da-hotel/';

  const testimonials = [
    {
      name: 'Travel Addis',
      rating: 5,
      avatar: 'TA',
      textKey: 't1_text',
      sourceKey: 'testi_google_maps_review',
      url: GOOGLE_REVIEWS_URL,
    },
    {
      name: 'Chuang Wu',
      rating: 5,
      avatar: 'CW',
      textKey: 't2_text',
      sourceKey: 'testi_google_maps_review',
      url: GOOGLE_REVIEWS_URL,
    },
    {
      name: 'Helen Tesfaye',
      rating: 4,
      avatar: 'HT',
      textKey: 't3_text',
      sourceKey: 'testi_google_maps_review',
      url: GOOGLE_REVIEWS_URL,
    },
    {
      name: 'Verified Guest',
      rating: 5,
      avatar: 'VG',
      textKey: 't4_text',
      sourceKey: 'testi_tripadvisor_review',
      url: TRIPADVISOR_URL,
    },
    {
      name: 'Business Traveller',
      rating: 5,
      avatar: 'BT',
      textKey: 't5_text',
      sourceKey: 'testi_trip_com_review',
      url: TRIP_COM_URL,
    },
  ];

  const prev = () => setActive(a => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive(a => (a + 1) % testimonials.length);

  return (
    <section className="testi" id="testimonials">
      <div className="container testi__inner">
        <div className="testi__left">
          <p className="section-label">{t('testi_label')}</p>
          <h2 className="section-title light">{t('testi_title')}</h2>
          <div className="divider" />
          <p className="testi__sub">{t('testi_sub')}</p>
          <div className="testi__avg">
            <span className="testi__avg-num">4.7</span>
            <div>
              <Stars count={5} />
              <span className="testi__avg-label">{t('testi_avg_label')}</span>
            </div>
          </div>

          <div className="testi__platforms">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="testi__platform-btn"
            >
              <span>📍 {t('testi_btn_google')}</span>
              <ExternalLink size={13} />
            </a>
            <a
              href={TRIPADVISOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="testi__platform-btn"
            >
              <span>🦉 {t('testi_btn_tripadvisor')}</span>
              <ExternalLink size={13} />
            </a>
            <a
              href={TRIP_COM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="testi__platform-btn"
            >
              <span>✈️ {t('testi_btn_trip_com')}</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        <div className="testi__right">
          <div className="testi__card">
            <Stars count={testimonials[active].rating} />
            <blockquote className="testi__quote">
              "{t(testimonials[active].textKey)}"
            </blockquote>
            <div className="testi__author">
              <div className="testi__avatar">{testimonials[active].avatar}</div>
              <div>
                <strong className="testi__name">{testimonials[active].name}</strong>
                <a
                  href={testimonials[active].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="testi__source-link"
                >
                  {t(testimonials[active].sourceKey)} <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>

          <div className="testi__controls">
            <button className="testi__btn" onClick={prev} aria-label="Previous review">
              <ChevronLeft size={20} />
            </button>
            <div className="testi__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testi__dot${active === i ? ' testi__dot--active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
            <button className="testi__btn" onClick={next} aria-label="Next review">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
