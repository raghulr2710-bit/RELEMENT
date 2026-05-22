import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { productFamilies } from '../data';

export default function Products() {
  const [activeTab, setActiveTab] = useState<string>('li');

  const activeFamily = productFamilies.find((f) => f.id === activeTab);

  const handleScrollToCTA = () => {
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
    <section id="products" className="px-6 md:px-16 py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest text-g3 mb-4">
            <span className="block w-6 h-[2px] bg-g3" />
            Product Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight tracking-tight mb-4">
            Battery-Grade Products,
            <br />
            Tailored to Your Needs
          </h2>
          <p className="text-sm md:text-base font-light text-mid max-w-2xl leading-relaxed">
            Our process is engineered around customer specifications. We produce a full range of battery-grade compounds across four critical metal families.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2.5 mt-10 border-b border-black/5 pb-6">
          {productFamilies.map((family) => (
            <button
              key={family.id}
              onClick={() => setActiveTab(family.id)}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                activeTab === family.id
                  ? 'bg-g4 text-white hover:bg-g4/95 shadow-md shadow-g4/20'
                  : 'bg-white border border-black/10 text-mid hover:bg-g4 hover:text-white hover:border-g4'
              }`}
            >
              {family.name}
            </button>
          ))}
        </div>

        {/* Dynamic Products Grid Panel */}
        <div className="mt-8 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              {activeFamily?.products.map((product, pIdx) => (
                <div
                  key={pIdx}
                  className="relative group border border-black/7 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-g3/10 hover:border-g2 overflow-hidden bg-white cursor-default"
                >
                  {/* Decorative pure CSS line */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-g2 to-g1 opacity-80 group-hover:opacity-100 transition-opacity" />

                  <div className="font-head text-2xl font-black text-g3 tracking-tight mb-3 group-hover:scale-105 transition-transform duration-300 origin-left">
                    {product.symbol}
                  </div>
                  <div className="text-sm font-bold text-ink mb-2 leading-tight">
                    {product.name}
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-[9px] md:text-[10px] font-bold tracking-wider uppercase text-g3 mt-4">
                    <span className="w-1.5 h-1.5 bg-g2 rounded-full" />
                    {product.grade}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Custom refinement note footer banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mt-16 p-8 md:p-12 bg-gradient-to-br from-g5 to-[#1A4030] rounded-3xl flex flex-col md:flex-row gap-6 md:gap-14 items-start md:items-center justify-between shadow-xl shadow-g5/20 group"
        >
          <div className="max-w-xl">
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3">
              Process Designed Around You
            </h3>
            <p className="text-xs md:text-sm text-white/60 leading-relaxed font-light">
              Every customer has different feedstock and product requirements. We engineer our recovery process specifically to your battery chemistry and target compound — delivering exactly the specification you need, at battery-grade purity, every time.
            </p>
          </div>
          <button
            onClick={handleScrollToCTA}
            className="px-6 py-3.5 bg-g1 hover:bg-[#D4F7DC] text-g5 font-extrabold text-xs tracking-wider uppercase rounded-full cursor-pointer transition-all duration-200 shrink-0 transform group-hover:-translate-y-0.5"
          >
            Discuss Your Requirements →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
