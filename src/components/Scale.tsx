import { motion } from 'motion/react';
import { scalabilityCards } from '../data';

export default function Scale() {
  const getCardStyles = (type: 'green' | 'light' | 'mid') => {
    switch (type) {
      case 'green':
        return 'bg-g5 text-white border border-white/5';
      case 'light':
        return 'bg-light text-ink border border-black/6';
      case 'mid':
        return 'bg-g4 text-white border border-white/5';
    }
  };

  const getNumStyle = (type: 'green' | 'light' | 'mid') => {
    switch (type) {
      case 'green':
        return 'text-g1';
      case 'light':
        return 'text-g3';
      case 'mid':
        return 'text-white';
    }
  };

  const getTitleStyle = (type: 'green' | 'light' | 'mid') => {
    switch (type) {
      case 'green':
        return 'text-g1';
      case 'light':
        return 'text-ink';
      case 'mid':
        return 'text-g1';
    }
  };

  const getDescStyle = (type: 'green' | 'light' | 'mid') => {
    switch (type) {
      case 'green':
        return 'text-white/60';
      case 'light':
        return 'text-mid';
      case 'mid':
        return 'text-white/60';
    }
  };

  return (
    <section id="scale" className="px-6 md:px-16 py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest text-g3 mb-4">
            <span className="block w-6 h-[2px] bg-g3" />
            Scalability
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight tracking-tight mb-4">
            Technology Built to Scale
          </h2>
          <p className="text-sm md:text-base font-light text-mid max-w-2xl leading-relaxed">
            We are actively scaling our in-house technology from laboratory validation to full industrial deployment — with a process architecture designed for modular, customer-specific expansion.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scalabilityCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`rounded-2xl p-8 md:p-10 shadow-lg justify-between flex flex-col min-h-[300px] hover:-translate-y-1.5 transition-transform duration-300 ${getCardStyles(
                card.styleType
              )}`}
            >
              <div>
                <div className={`font-head text-3xl md:text-4xl font-extrabold tracking-tight mb-6 ${getNumStyle(card.styleType)}`}>
                  {card.label}
                </div>
                <h3 className={`text-base md:text-lg font-bold mb-3 ${getTitleStyle(card.styleType)}`}>
                  {card.title}
                </h3>
              </div>
              <p className={`text-xs md:text-sm leading-relaxed font-light ${getDescStyle(card.styleType)}`}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
