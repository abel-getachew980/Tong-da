import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
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

  const testimonials = [
    { name: 'Travel Addis', rating: 5, avatar: 'TA', textKey: 't1_text' },
    { name: 'Chuang Wu',    rating: 5, avatar: 'CW', textKey: 't2_text' },
    { name: 'Helen Tesfaye',rating: 4, avatar: 'HT', textKey: 't3_text' },
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
                <span className="testi__source">{t('testi_verified')}</span>
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
