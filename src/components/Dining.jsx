import diningImg from '../assets/Dining.jpg';
import dining2Img from '../assets/Dining2.jpg';
import food1 from '../assets/Food 1.webp';
import exterior3 from '../assets/Exterior 3.webp';
import { UtensilsCrossed, Coffee, Wine, Sunrise } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Dining() {
  const { t } = useLanguage();

  const outlets = [
    {
      icon: <UtensilsCrossed size={22} />,
      nameKey: 'd1_name', floorKey: 'd1_floor', descKey: 'd1_desc', tagKey: 'd1_tag',
      img: diningImg,
    },
    {
      icon: <Sunrise size={22} />,
      nameKey: 'd2_name', floorKey: 'd2_floor', descKey: 'd2_desc', tagKey: 'd2_tag',
      img: food1,
    },
    {
      icon: <Wine size={22} />,
      nameKey: 'd3_name', floorKey: 'd3_floor', descKey: 'd3_desc', tagKey: 'd3_tag',
      img: exterior3,
    },
    {
      icon: <Coffee size={22} />,
      nameKey: 'd4_name', floorKey: 'd4_floor', descKey: 'd4_desc', tagKey: 'd4_tag',
      img: dining2Img,
    },
  ];

  return (
    <section className="dining" id="dining">
      <div className="container">
        <div className="dining__header">
          <p className="section-label">{t('dining_label')}</p>
          <h2 className="section-title">{t('dining_title')}</h2>
          <div className="divider" />
          <p className="dining__intro">{t('dining_intro')}</p>
        </div>

        <div className="dining__grid">
          {outlets.map((o, i) => (
            <article className="dining__card" key={i}>
              <div className="dining__card-img">
                <img src={o.img} alt={t(o.nameKey)} loading="lazy" />
                <span className="dining__card-tag">{t(o.tagKey)}</span>
              </div>
              <div className="dining__card-body">
                <div className="dining__card-meta">
                  <span className="dining__card-icon">{o.icon}</span>
                  <span className="dining__card-floor">{t(o.floorKey)}</span>
                </div>
                <h3 className="dining__card-name">{t(o.nameKey)}</h3>
                <p className="dining__card-desc">{t(o.descKey)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
