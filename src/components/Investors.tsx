import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { investorCards } from '../data';

export default function Investors() {
  const handleScrollToContact = () => {
    const target = document.querySelector('#contact');
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 85;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="invest"
      className="px-6 md:px-16 py-24 md:py-32 text-center bg-gradient-to-br from-g5 to-[#0F2A1A] text-white relative overflow-hidden"
    >
      {/* Absolute gold radial light vector */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_50%,rgba(184,240,200,0.06),transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-g1 tracking-widest block text-center mb-4">
          For Investors
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight max-w-2xl mx-auto mb-4">
          Partner with the Future of
          <br />
          Critical Material Recovery
        </h2>
        <p className="text-sm md:text-base font-light text-white/50 max-w-lg mx-auto leading-relaxed mb-14">
          We are seeking strategic investors and industry partners to accelerate the scale-up of our technology and expand our operational capacity across India.
        </p>

        {/* 4 Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {investorCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/4 border border-g1/12 rounded-2xl p-6.5 text-left max-w-[245px] hover:bg-g1/6 hover:border-g1/30 duration-300"
            >
              <span className="text-3xl mb-4 block">{card.icon}</span>
              <h4 className="text-xs md:text-sm font-bold text-g1 tracking-wide mb-2">
                {card.title}
              </h4>
              <p className="text-[11px] md:text-xs text-white/45 leading-relaxed font-light">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Investor query links */}
        <div>
          <p className="text-xs text-white/45 mb-4 uppercase tracking-widest font-semibold">
            Investor enquiries welcome
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={handleScrollToContact}
              className="w-full sm:w-auto px-8 py-3.5 bg-g1 hover:bg-[#D4F7DC] text-g5 font-extrabold text-xs tracking-wider uppercase rounded-full transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Invest With Us ↗
            </button>
            <a
              href="mailto:info@relementx.com?subject=Strategic Investor Enquiry — RelementX"
              className="w-full sm:w-auto px-6 py-3.5 bg-g1/8 hover:bg-g1/15 border border-g1/25 text-g1 font-extrabold text-xs tracking-wider uppercase rounded-full transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              info@relementx.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
