import { motion } from 'motion/react';
import { mineralColumns } from '../data';

export default function Minerals() {
  const getHeaderStyle = (type: 'ev' | 'solar' | 'grid') => {
    switch (type) {
      case 'ev':
        return 'bg-g1/12 border-b-2 border-g1 text-white';
      case 'solar':
        return 'bg-gold/10 border-b-2 border-gold text-white';
      case 'grid':
        return 'bg-g2/10 border-b-2 border-g2 text-white';
    }
  };

  const getSymbolStyle = (type: 'ev' | 'solar' | 'grid') => {
    switch (type) {
      case 'ev':
        return 'bg-g1/15 text-g1';
      case 'solar':
        return 'bg-gold/15 text-gold';
      case 'grid':
        return 'bg-g2/15 text-g2';
    }
  };

  return (
    <section id="minerals" className="px-6 md:px-16 py-24 md:py-32 bg-g5 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-14">
          <div className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest text-g1 mb-4">
            <span className="block w-6 h-[2px] bg-g1" />
            Critical Minerals
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4 text-white">
            Where These Materials
            <br />
            Power Our World
          </h2>
          <p className="text-sm md:text-base font-light text-white/55 max-w-2xl leading-relaxed">
            The same critical minerals recovered by RelementX are the backbone of every major clean energy technology deployed globally today.
          </p>
        </div>

        {/* 3 Columns Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {mineralColumns.map((col, idx) => (
            <motion.div
              key={col.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group bg-white/4 border border-g1/10 rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Col Header with Image Background */}
              <div className="relative h-44 overflow-hidden flex items-end p-6 border-b border-transparent">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${col.type === 'ev'
                      ? '/energystorage.webp'
                      : col.type === 'solar'
                        ? '/solar.webp'
                        : '/enerystoragebox.webp'
                      })`,
                  }}
                />
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent z-10 pointer-events-none" />

                {/* Header text content */}
                <h4 className="relative z-20 text-lg font-black tracking-tight text-white leading-tight max-w-[200px] drop-shadow-md">
                  {col.title}
                </h4>

                {/* Bottom Border Accent Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[3px] z-20 ${col.type === 'ev'
                    ? 'bg-g1'
                    : col.type === 'solar'
                      ? 'bg-gold'
                      : 'bg-g2'
                    }`}
                />
              </div>

              {/* Col Body Elements */}
              <div className="p-6 flex flex-col gap-3.5 bg-g5/60">
                {col.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 px-4 py-3 bg-white/3 border border-white/5 rounded-xl hover:bg-g1/7 transition-colors duration-200 cursor-default"
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-head font-extrabold text-sm ${getSymbolStyle(col.type)} shrink-0`}>
                      {item.symbol === 'Dynamic' ? 'Dy' : item.symbol}
                    </div>
                    <div>
                      <div className="text-xs md:text-sm font-bold text-white leading-none">
                        {item.symbol === 'Dynamic' ? 'Dysprosium' : item.name}
                      </div>
                      <div className="text-[10px] md:text-xs text-white/40 mt-1 leading-none font-light">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom environmental recovery note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-6 md:p-8 bg-g1/5 border border-g1/12 rounded-2xl flex items-start sm:items-center gap-5 shadow-lg shadow-black/10"
        >
          <span className="text-3xl shrink-0 p-3 bg-g1/10 rounded-full">♻️</span>
          <p className="text-xs md:text-sm text-white/55 leading-relaxed font-light">
            <strong className="text-g1 font-semibold">RelementX recovers the EV & energy storage critical minerals</strong> — lithium, cobalt, nickel, and manganese — directly from end-of-life batteries, returning them to the supply chain as battery-grade compounds ready for new cell manufacturing. Every tonne recovered is a tonne that does not need to be mined.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
