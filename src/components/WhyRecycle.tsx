import { motion } from 'motion/react';
import { whyCards } from '../data';

export default function WhyRecycle() {
  return (
    <section id="why" className="px-6 md:px-16 py-24 md:py-32 bg-sand relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none bg-radial from-g3/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest text-g3 mb-4">
            <span className="block w-6 h-[2px] bg-g3" />
            The Mission
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight tracking-tight">
            Why Critical Material
            <br />
            Recovery Matters
          </h2>
        </div>

        {/* Vision Statement Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="relative bg-g5 rounded-3xl p-8 md:p-14 overflow-hidden mb-16 shadow-xl shadow-g5/20 group"
        >
          {/* Big Quote marks decoration */}
          <span className="absolute top-1 left-6 md:left-12 font-serif text-[10rem] md:text-[14rem] text-g1/8 select-none leading-none select-none">
            “
          </span>

          <div className="relative z-10">
            <p className="font-serif italic text-base md:text-xl md:leading-relaxed text-white/85 max-w-4xl">
              We understand that the future is not just about extraction — it is about{' '}
              <em className="not-italic text-g1 font-head font-semibold tracking-tight">
                sustainable recovery without harming the environment.
              </em>{' '}
              At RelementX Energy, we believe responsible recovery of critical materials will become one of the
              foundations for the next era of human progress and clean technology. By securing and circularising
              critical resources, we are building a more resilient, sustainable, and energy-secure future.
            </p>
            <div className="mt-6 text-xs md:text-sm font-semibold tracking-wider text-g1 uppercase">
              — RelementX Energy, Vision Statement
            </div>
          </div>
        </motion.div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyCards.map((card, idx) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative bg-white rounded-2xl p-8 border border-black/5 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-g3/10 transition-all duration-300 overflow-hidden group hover:border-g2/20"
            >
              <span className="absolute top-6 right-6 font-head text-3xl font-black text-g3/6 group-hover:text-g3/15 transition-colors duration-300">
                {card.num}
              </span>
              <span className="text-4xl mb-6 block transform group-hover:scale-110 origin-left transition-transform duration-300">
                {card.icon}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-ink mb-3 group-hover:text-g3 transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-mid leading-relaxed font-light">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
