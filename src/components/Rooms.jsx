import { useState } from 'react';
import room1 from '../assets/room 1.jpeg';
import room2 from '../assets/room 2.jpeg';
import interior from '../assets/Interior.jpeg';
import { BedDouble, BedSingle, ShieldCheck, Blinds, Wifi, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Rooms() {
  const [active, setActive] = useState(0);
  const { t } = useLanguage();

  const rooms = [
    {
      id: 1,
      type: t('room1_type'),
      configurations: t('room1_config'),
      img: room1,
      description: t('room1_desc'),
      features: ['feat_soundproofing', 'feat_blackout', 'feat_safe', 'feat_slippers', 'feat_wifi'],
    },
    {
      id: 2,
      type: t('room2_type'),
      configurations: t('room2_config'),
      img: room2,
      description: t('room2_desc'),
      features: ['feat_soundproofing', 'feat_blackout', 'feat_safe', 'feat_slippers', 'feat_wifi'],
    },
    {
      id: 3,
      type: t('room3_type'),
      configurations: t('room3_config'),
      img: interior,
      description: t('room3_desc'),
      features: ['feat_soundproofing', 'feat_blackout', 'feat_safe', 'feat_slippers', 'feat_wifi'],
    },
    {
      id: 4,
      type: t('room4_type'),
      configurations: t('room4_config'),
      img: room1,
      description: t('room4_desc'),
      features: ['feat_floorplan', 'feat_living', 'feat_soundproofing', 'feat_blackout', 'feat_safe', 'feat_slippers', 'feat_wifi'],
    },
  ];

  const featureIcons = {
    feat_soundproofing: <BedDouble size={14} />,
    feat_blackout:      <Blinds size={14} />,
    feat_safe:          <Lock size={14} />,
    feat_slippers:      <BedSingle size={14} />,
    feat_wifi:          <Wifi size={14} />,
    feat_floorplan:     <ShieldCheck size={14} />,
    feat_living:        <ShieldCheck size={14} />,
  };

  const room = rooms[active];

  return (
    <section className="rooms" id="rooms">
      <div className="container">
        <div className="rooms__header">
          <p className="section-label">{t('rooms_label')}</p>
          <h2 className="section-title">{t('rooms_title')}</h2>
          <div className="divider" />
          <p className="rooms__intro">{t('rooms_intro')}</p>
        </div>

        <div className="rooms__tabs" role="tablist">
          {rooms.map((r, i) => (
            <button
              key={r.id}
              className={`rooms__tab${active === i ? ' rooms__tab--active' : ''}`}
              onClick={() => setActive(i)}
              role="tab"
              aria-selected={active === i}
            >
              {r.type}
            </button>
          ))}
        </div>

        <div className="rooms__detail">
          <div className="rooms__img-wrap">
            <img src={room.img} alt={room.type} />
          </div>
          <div className="rooms__info">
            <p className="rooms__config">{room.configurations}</p>
            <h3 className="rooms__name">{room.type}</h3>
            <p className="rooms__desc">{room.description}</p>

            <ul className="rooms__features">
              {room.features.map(fKey => (
                <li key={fKey}>
                  <span className="rooms__feat-icon">{featureIcons[fKey] || <ShieldCheck size={14} />}</span>
                  {t(fKey)}
                </li>
              ))}
            </ul>

            <a href="https://maps.app.goo.gl/ca4YEwNP6WqgYViE6" target="_blank" rel="noopener noreferrer" className="btn-primary">
              {t('rooms_cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
