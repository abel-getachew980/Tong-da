import { MapPin, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function InstaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();

  const navItems = [
    { key: 'nav_home',         href: '#home' },
    { key: 'nav_about',        href: '#about' },
    { key: 'nav_rooms',        href: '#rooms' },
    { key: 'nav_amenities',    href: '#amenities' },
    { key: 'nav_dining',       href: '#dining' },
    { key: 'nav_testimonials', href: '#testimonials' },
    { key: 'nav_location',     href: '#location' },
  ];

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-chi">通达</span>
            <span className="footer__logo-en">TONG DA HOTEL</span>
          </div>
          <p className="footer__tagline" style={{ whiteSpace: 'pre-line' }}>
            {t('footer_tagline')}
          </p>
          <a
            href="https://www.instagram.com/tong.da.hotel?igsh=aHltM3pvcDF2NXNs"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__insta"
            aria-label="Instagram"
          >
            <InstaIcon />
            <span>@tong.da.hotel</span>
          </a>
        </div>

        <div className="footer__links-col">
          <h4 className="footer__col-title">{t('footer_quicklinks')}</h4>
          <nav>
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="footer__link">
                {t(item.key)}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer__links-col">
          <h4 className="footer__col-title">{t('footer_contact')}</h4>
          <div className="footer__contact">
            <MapPin size={15} />
            <span style={{ whiteSpace: 'pre-line' }}>{t('footer_address')}</span>
          </div>
          <p className="footer__contact-text">{t('footer_pluscode')}</p>
          <p className="footer__contact-text">{t('footer_airport')}</p>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© {new Date().getFullYear()} {t('hotel_name')}. {t('footer_rights')}</p>
        <button
          className="footer__top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
