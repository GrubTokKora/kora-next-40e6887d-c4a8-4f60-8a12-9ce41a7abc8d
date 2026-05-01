import { HeroSlider } from '@/components/HeroSlider';
import { data } from '@/lib/data';

function formatHours(hours: Record<string, string>): { day: string; times: string }[] {
  return Object.entries(hours).map(([day, times]) => ({ day, times }));
}

export default function Home() {
  const { business, hero, branding, offers, gallery, hours } = data;
  const formattedHours = formatHours(hours);

  return (
    <>
      <HeroSlider images={hero.backgroundImages} title={hero.title} subtitle={hero.subtitle} />

      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">{branding.description.tagline}</h2>
          <p>{branding.description.summary}</p>
        </div>
      </section>

      {offers.length > 0 && (
        <section id="offers" className="section section-alt">
          <div className="container">
            <h2 className="section-title">Our Offers</h2>
            <div className="offers-grid">
              {offers.map((offer, index) => (
                <div key={index} className="card offer-card">
                  <h3>{offer.title}</h3>
                  <p>{offer.description}</p>
                  {offer.terms && <small className="terms">{offer.terms}</small>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {gallery.length > 0 && (
        <section id="gallery" className="section">
          <div className="container">
            <h2 className="section-title">Gallery</h2>
            <div className="gallery-grid">
              {gallery.map((image, index) => (
                <img key={index} src={image} alt={`${business.name} gallery image ${index + 1}`} loading="lazy" />
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="contact" className="section section-alt">
        <div className="container contact-grid">
          <div className="contact-details">
            <h2 className="section-title">Contact &amp; Hours</h2>
            <p><strong>{business.name}</strong></p>
            <p>{business.address}</p>
            <p><a href={`tel:${business.phone}`}>{business.phone}</a></p>
          </div>
          <div className="hours-details card">
            <h3>Opening Hours</h3>
            <ul>
              {formattedHours.map(({ day, times }) => (
                <li key={day}>
                  <span>{day}</span>
                  <span>{times.replace(/, /g, ' & ')}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}