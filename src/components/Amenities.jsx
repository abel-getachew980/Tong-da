import gymImg from '../assets/gym.webp';
import { Wifi, Car, Dumbbell, Sparkles, Coffee, Utensils, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Amenities() {
  const { t } = useLanguage();

  const amenities = [
    { icon: <Wifi size={28} />,      titleKey: 'am1_title', descKey: 'am1_desc' },
    { icon: <Car size={28} />,       titleKey: 'am2_title', descKey: 'am2_desc' },
    { icon: <Dumbbell size={28} />,  titleKey: 'am3_title', descKey: 'am3_desc' },
    { icon: <Sparkles size={28} />,  titleKey: 'am4_title', descKey: 'am4_desc' },
    { icon: <Coffee size={28} />,    titleKey: 'am6_title', descKey: 'am6_desc' },
    { icon: <Utensils size={28} />,  titleKey: 'am7_title', descKey: 'am7_desc' },
    { icon: <Building2 size={28} />, titleKey: 'am8_title', descKey: 'am8_desc' },
  ];

  return (
    <section className="amenities" id="amenities">
      <div className="amenities__inner">
        <div className="amenities__panel">
          <div className="amenities__panel-content">
            <p className="section-label">{t('amenities_label')}</p>
            <h2 className="section-title light">{t('amenities_title')}</h2>
            <div className="divider" />
            <p className="amenities__panel-text">{t('amenities_body')}</p>
            <div className="amenities__gym-img">
              <img src={gymImg} alt="Hotel fitness centre" loading="lazy" />
              <div className="amenities__gym-overlay">
                <span>{t('amenities_gym_overlay')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="amenities__grid-wrap">
          <div className="amenities__grid">
            {amenities.map((a, i) => (
              <div className="amenities__card" key={i}>
                <span className="amenities__icon">{a.icon}</span>
                <h3 className="amenities__card-title">{t(a.titleKey)}</h3>
                <p className="amenities__card-desc">{t(a.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
