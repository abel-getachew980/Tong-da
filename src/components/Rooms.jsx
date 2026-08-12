import { useState } from 'react';
import stdSingle from '../assets/Standard single room.webp';
import stdTwin from '../assets/Standard twin room.webp';
import eliteSingle from '../assets/Elite single room.webp';
import eliteTwin from '../assets/Elite twin room.webp';
import { BedDouble, BedSingle, ShieldCheck, Blinds, Wifi, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Rooms() {
  const [active, setActive] = useState(0);
  const { t } = useLanguage();

  const rooms = [
    {
      id: 1,
      typeKey: 'room_std_single_type',
      configKey: 'room_std_single_config',
      descKey: 'room_std_single_desc',
      price: '$140',
      img: stdSingle,
      features: ['feat_soundproofing', 'feat_blackout', 'feat_safe', 'feat_slippers', 'feat_wifi'],
    },
    {
      id: 2,
      typeKey: 'room_std_twin_type',
      configKey: 'room_std_twin_config',
      descKey: 'room_std_twin_desc',
      price: '$144',
      img: stdTwin,
      features: ['feat_soundproofing', 'feat_blackout', 'feat_safe', 'feat_slippers', 'feat_wifi'],
    },
    {
      id: 3,
      typeKey: 'room_elite_single_type',
      configKey: 'room_elite_single_config',
      descKey: 'room_elite_single_desc',
      price: '$149',
      img: eliteSingle,
      features: ['feat_soundproofing', 'feat_blackout', 'feat_safe', 'feat_slippers', 'feat_wifi'],
    },
    {
      id: 4,
      typeKey: 'room_elite_twin_type',
      configKey: 'room_elite_twin_config',
      descKey: 'room_elite_twin_desc',
      price: '$158',
      img: eliteTwin,
      features: ['feat_soundproofing', 'feat_blackout', 'feat_safe', 'feat_slippers', 'feat_wifi'],
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
              {t(r.typeKey)}
            </button>
          ))}
        </div>

        <div className="rooms__detail">
          <div className="rooms__img-wrap">
            <img src={room.img} alt={t(room.typeKey)} />
            <div className="rooms__price-tag">
              {room.price}
              <small>{t('rooms_night')}</small>
            </div>
          </div>
          <div className="rooms__info">
            <p className="rooms__config">{t(room.configKey)}</p>
            <h3 className="rooms__name">{t(room.typeKey)}</h3>
            <p className="rooms__desc">{t(room.descKey)}</p>

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
