import Link from 'next/link';
import { data } from '@/lib/data';

export function Header() {
  const { business, actions } = data;

  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="logo">
          {business.name.toUpperCase()}
        </Link>
        <nav className="main-nav">
          <a href="/#about">About</a>
          <a href="/#offers">Offers</a>
          <a href="/#gallery">Gallery</a>
          <a href="/#contact">Contact</a>
        </nav>
        {actions.orderOnlineUrl && (
          <a href={actions.orderOnlineUrl} className="button primary" target="_blank" rel="noopener noreferrer">
            Order Online
          </a>
        )}
      </div>
    </header>
  );
}