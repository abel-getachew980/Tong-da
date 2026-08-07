import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { key: 'nav_home',         href: '#home' },
    { key: 'nav_about',        href: '#about' },
    { key: 'nav_rooms',        href: '#rooms' },
    { key: 'nav_amenities',    href: '#amenities' },
    { key: 'nav_dining',       href: '#dining' },
    { key: 'nav_testimonials', href: '#testimonials' },
    { key: 'nav_location',     href: '#location' },
  ];

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#home" className="navbar__logo">
          <span className="navbar__logo-chi">通达</span>
          <span className="navbar__logo-en">TONG DA HOTEL</span>
        </a>

        <nav className={`navbar__links${open ? ' navbar__links--open' : ''}`}>
          {links.map(l => (
            <a key={l.key} href={l.href} className="navbar__link" onClick={() => setOpen(false)}>
              {t(l.key)}
            </a>
          ))}
          <a href="#location" className="btn-primary navbar__book" onClick={() => setOpen(false)}>
            {t('nav_book')}
          </a>

          {/* Language toggle */}
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
            aria-label="Switch language"
          >
            <span className={lang === 'en' ? 'lang-toggle__opt lang-toggle__opt--active' : 'lang-toggle__opt'}>EN</span>
            <span className="lang-toggle__divider">|</span>
            <span className={lang === 'am' ? 'lang-toggle__opt lang-toggle__opt--active' : 'lang-toggle__opt'}>አማ</span>
          </button>
        </nav>

        <div className="navbar__right">
          {/* Language toggle (desktop visible outside mobile menu) */}
          <button
            className="lang-toggle lang-toggle--desktop"
            onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
            aria-label="Switch language"
          >
            <span className={lang === 'en' ? 'lang-toggle__opt lang-toggle__opt--active' : 'lang-toggle__opt'}>EN</span>
            <span className="lang-toggle__divider">|</span>
            <span className={lang === 'am' ? 'lang-toggle__opt lang-toggle__opt--active' : 'lang-toggle__opt'}>አማ</span>
          </button>

          <button
            className="navbar__hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
