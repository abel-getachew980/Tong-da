import { MapPin, Clock, Navigation, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function InstaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

export default function Location() {
  const { t } = useLanguage();

  const info = [
    {
      icon: <MapPin size={20} />,
      labelKey: 'loc_address_label',
      valueKey: 'loc_address_value',
      link: 'https://maps.app.goo.gl/ca4YEwNP6WqgYViE6',
      linkTextKey: 'loc_directions',
    },
    {
      icon: <Navigation size={20} />,
      labelKey: 'loc_pluscode_label',
      value: 'XQQJ+X84',
    },
    {
      icon: <Clock size={20} />,
      labelKey: 'loc_checkin_label',
      valueKey: 'loc_checkin_value',
    },
    {
      icon: <Phone size={20} />,
      labelKey: 'loc_airport_label',
      valueKey: 'loc_airport_value',
    },
  ];

  return (
    <section className="location" id="location">
      <div className="container">
        <div className="location__header">
          <p className="section-label">{t('location_label')}</p>
          <h2 className="section-title">{t('location_title')}</h2>
          <div className="divider" />
          <p className="location__intro">{t('location_intro')}</p>
        </div>

        <div className="location__grid">
          <div className="location__map-wrap">
            <iframe
              title="Tong Da Hotel location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.2764452698203!2d38.80085!3d9.01485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b58be38045%3A0x41c8fe73e79a3da2!2sTong%20Da%20Hotel!5e0!3m2!1sen!2set!4v1699000000000!5m2!1sen!2set"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href="https://maps.app.goo.gl/ca4YEwNP6WqgYViE6"
              target="_blank"
              rel="noopener noreferrer"
              className="location__map-btn btn-primary"
            >
              <Navigation size={16} />
              {t('loc_maps_btn')}
            </a>
          </div>

          <div className="location__info">
            {info.map((item, i) => (
              <div className="location__info-item" key={i}>
                <span className="location__info-icon">{item.icon}</span>
                <div>
                  <span className="location__info-label">{t(item.labelKey)}</span>
                  <p className="location__info-value">
                    {item.value ?? t(item.valueKey)}
                  </p>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="location__info-link">
                      {t(item.linkTextKey)} →
                    </a>
                  )}
                </div>
              </div>
            ))}

            <div className="location__social">
              <a
                href="https://www.instagram.com/tong.da.hotel?igsh=aHltM3pvcDF2NXNs"
                target="_blank"
                rel="noopener noreferrer"
                className="location__insta"
              >
                <InstaIcon />
                <span>@tong.da.hotel</span>
              </a>
            </div>

            <a
              href="https://maps.app.goo.gl/ca4YEwNP6WqgYViE6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary location__book-btn"
            >
              {t('loc_book_btn')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
