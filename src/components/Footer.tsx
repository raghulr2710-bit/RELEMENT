import { MouseEvent } from 'react';
import Logo from './Logo';

interface FooterProps {}

export default function Footer({}: FooterProps) {
  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 85;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-g5 px-6 md:px-16 py-12 md:py-16 text-white flex flex-col md:flex-row justify-between items-center gap-6 border-t border-g1/8 select-none">
      {/* Brand logo */}
      <a href="#" className="flex items-center select-none" onClick={(e) => handleScrollTo(e, '#root')}>
        <Logo size="sm" />
      </a>

      {/* Quick Links */}
      <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 list-none">
        {[
          { label: 'Why Recycle', href: '#why' },
          { label: 'Products', href: '#products' },
          { label: 'Technology', href: '#technology' },
          { label: 'Investors', href: '#invest' },
          { label: 'FAQ', href: '#faq' },
        ].map((link, idx) => (
          <li key={idx}>
            <a
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-xs md:text-sm text-white/35 hover:text-g1 duration-200 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Copyright */}
      <div className="text-[10px] md:text-xs text-white/20 text-center md:text-right">
        &copy; {new Date().getFullYear()} RelementX Energy. All rights reserved.
      </div>
    </footer>
  );
}
