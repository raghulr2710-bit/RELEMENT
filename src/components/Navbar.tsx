import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mail } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(true); // Default to dark background as in standard HTML
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle nav background solidness when scrolling down
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(true); // Restricting to match standard 'scrolled' look of homepage
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Why Recycle', href: '#why', id: 'why' },
    { label: 'Products', href: '#products', id: 'products' },
    { label: 'Technology', href: '#technology', id: 'technology' },
    { label: 'Scalability', href: '#scale', id: 'scale' },
    { label: 'Investors', href: '#invest', id: 'invest' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 85;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        id="mainnav"
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-16 transition-all duration-300 ${
          isScrolled
            ? 'bg-g5/95 backdrop-blur-md border-b border-g1/15 shadow-lg shadow-g5/30'
            : 'bg-transparent'
        }`}
      >
        <a href="#" className="flex items-center select-none group" onClick={(e) => handleLinkClick(e, '#root')}>
          <Logo size="md" />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? 'text-g1 hover:text-white'
                      : 'text-white/65 hover:text-g1'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Contact/CTA Button */}
        <div className="hidden md:block">
          <a
            href="mailto:info@relementx.com"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-g1 hover:bg-[#D4F7DC] text-g5 text-xs font-extrabold tracking-wider uppercase rounded-full transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-g1/10 hover:shadow-g1/25"
          >
            <Mail className="w-3.5 h-3.5" />
            Contact Us
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white/80 hover:text-g1 transition-colors rounded-lg focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-[69px] left-0 right-0 z-40 bg-g5/98 border-b border-g1/15 backdrop-blur-xl px-8 py-6 flex flex-col gap-6 md:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-sm font-bold tracking-wider uppercase py-2 border-b border-white/5 transition-colors ${
                      isActive ? 'text-g1' : 'text-white/70 hover:text-g1'
                    }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
            </div>
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              href="mailto:info@relementx.com"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-g1 hover:bg-[#D4F7DC] text-g5 text-xs font-black tracking-wider uppercase rounded-full transition-all duration-200"
            >
              <Mail className="w-3.5 h-3.5" />
              Contact Us
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
