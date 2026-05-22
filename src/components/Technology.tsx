import { motion } from 'motion/react';

export default function Technology() {
  const pillars = [
    {
      icon: '🌿',
      title: '100% Organic Process',
      desc: 'Our recovery route uses only organic-based reagents — no mineral acids in hazardous concentrations, no toxic solvents, no heavy metal discharge. Safe for people, safe for the environment.',
    },
    {
      icon: '♻️',
      title: 'Reagent Recovery & Reuse',
      desc: 'All process reagents are extracted, purified, and cycled back into the process — forming a true closed loop. This eliminates reagent waste and dramatically reduces operating costs.',
    },
    {
      icon: '🚫2', // 🚫 representation
      title: 'No Solvent Extraction',
      desc: 'Unlike conventional hydrometallurgy, our process requires no organic solvent extraction trains — eliminating the highest-cost, highest-risk element of traditional battery recycling.',
    },
    {
      icon: '🎯',
      title: '>95% Material Yield',
      desc: 'Our process extracts more than 95% of recoverable critical minerals from every batch — ensuring maximum value from every tonne of feedstock processed.',
    },
    {
      icon: '✅',
      title: 'Built to Standards',
      desc: 'Plant design, equipment selection, and process validation follow recognised industrial and environmental standards — ensuring safe, reliable, and compliant operations at every scale.',
    },
  ];

  return (
    <section id="technology" className="px-6 md:px-16 py-24 md:py-32 bg-light relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest text-g3 mb-4">
            <span className="block w-6 h-[2px] bg-g3" />
            Our Technology
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight tracking-tight mb-4">
            In-House Developed.
            <br />
            Organically Driven.
          </h2>
          <p className="text-sm md:text-base font-light text-mid max-w-2xl leading-relaxed">
            Our proprietary recovery technology is built entirely on organic chemistry — no solvents, no toxic reagents, no hazardous discharge. Every process reagent is recovered, recycled, and reused.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Pillars List */}
          <div className="flex flex-col gap-4">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-5 items-start p-5 bg-white rounded-xl border border-black/5 hover:translate-x-1.5 hover:shadow-lg hover:shadow-g3/5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-g4 to-g3 flex items-center justify-center text-lg shadow-md shadow-g3/10 shrink-0">
                  {pillar.icon === '🚫2' ? '🚫' : pillar.icon}
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-ink mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs md:text-sm text-mid leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Concentric Circle Loop Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className=" bg-g5 border border-white/5 rounded-3xl p-8 md:p-14 relative flex flex-col items-center justify-center overflow-hidden min-h-[460px] shadow-xl shadow-g5/20 group lg:sticky lg:top-28 self-start"
          >
            {/* Concentric Dashed Rings styled in head */}
            <div className="relative w-full aspect-square max-w-[320px] md:max-w-[360px] mx-auto select-none">
              {/* Inner Ring */}
              <div
                className="absolute top-1/2 left-1/2 w-[160px] h-[160px] md:w-[180px] md:h-[180px] border border-dashed border-g1/20 rounded-full animate-[spin_20s_linear_infinite]"
                style={{ transform: 'translate(-50%, -50%)' }}
              />

              {/* Outer Ring */}
              <div
                className="absolute top-1/2 left-1/2 w-[260px] h-[260px] md:w-[280px] md:h-[280px] border border-dashed border-g2/20 rounded-full animate-[spin_32s_linear_infinite_reverse]"
                style={{ transform: 'translate(-50%, -50%)' }}
              />

              {/* Center Core Logo box */}
              <div
                className="absolute top-1/2 left-1/2 w-24 h-24 bg-g1 rounded-full flex flex-col items-center justify-center text-center shadow-lg shadow-g1/25 z-10 transition-transform duration-300 group-hover:scale-105"
                style={{ transform: 'translate(-50%, -50%)' }}
              >
                <span className="text-2xl">♻️</span>
                <span className="text-[9px] md:text-[10px] font-black tracking-widest text-g5 uppercase mt-1">
                  Closed Loop
                </span>
              </div>

              {/* Cardinal Process Nodes */}
              {/* TOP Node */}
              <div className="absolute top-[2%] left-1/2 -translate-x-1/2 bg-white/7 border border-g1/20 rounded-xl px-3.5 py-2.5 text-center backdrop-blur-md min-w-[100px] md:min-w-[110px] shadow-md shadow-black/15 group-hover:bg-white/10 transition-colors">
                <span className="text-lg md:text-xl block mb-0.5">🔋</span>
                <span className="text-[9px] md:text-[10px] font-bold text-white/80 leading-snug block uppercase tracking-wider">
                  Spent
                  <br />
                  Battery Input
                </span>
              </div>

              {/* RIGHT Node */}
              <div className="absolute top-1/2 right-[2%] -translate-y-1/2 bg-white/7 border border-g1/20 rounded-xl px-3.5 py-2.5 text-center backdrop-blur-md min-w-[100px] md:min-w-[110px] shadow-md shadow-black/15 group-hover:bg-white/10 transition-colors">
                <span className="text-lg md:text-xl block mb-0.5">⚗️</span>
                <span className="text-[9px] md:text-[10px] font-bold text-white/80 leading-snug block uppercase tracking-wider">
                  Organic
                  <br />
                  Extraction
                </span>
              </div>

              {/* BOTTOM Node */}
              <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 bg-white/7 border border-g1/20 rounded-xl px-3.5 py-2.5 text-center backdrop-blur-md min-w-[100px] md:min-w-[110px] shadow-md shadow-black/15 group-hover:bg-white/10 transition-colors">
                <span className="text-lg md:text-xl block mb-0.5">🏆</span>
                <span className="text-[9px] md:text-[10px] font-bold text-white/80 leading-snug block uppercase tracking-wider">
                  Battery-Grade
                  <br />
                  Products
                </span>
              </div>

              {/* LEFT Node */}
              <div className="absolute top-1/2 left-[2%] -translate-y-1/2 bg-white/7 border border-g1/20 rounded-xl px-3.5 py-2.5 text-center backdrop-blur-md min-w-[100px] md:min-w-[110px] shadow-md shadow-black/15 group-hover:bg-white/10 transition-colors">
                <span className="text-lg md:text-xl block mb-0.5">🔄</span>
                <span className="text-[9px] md:text-[10px] font-bold text-white/80 leading-snug block uppercase tracking-wider">
                  Reagent
                  <br />
                  Recovery
                </span>
              </div>
            </div>

            <div className="mt-8 text-center text-xs text-white/35 tracking-wider uppercase font-semibold">
              Fully closed-loop organic recovery process
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
