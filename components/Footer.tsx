import { data } from '@/lib/data';
import { FacebookIcon, InstagramIcon } from './Icons';

export function Footer() {
  const { business, socialMedia } = data;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>{business.name}</h3>
            <p>{business.address}</p>
            <p>
              <a href={`tel:${business.phone}`}>{business.phone}</a>
            </p>
          </div>
          <div className="footer-social">
            {socialMedia.facebook && (
              <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
            )}
            {socialMedia.instagram && (
              <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
            )}
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {business.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}