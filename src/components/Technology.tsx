import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Technology() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const steps = [
    {
      title: 'Blackmass Input',
      desc: 'Feedstock derived from spent battery packs, shredded and ready for processing.',
      emoji: '🔋',
      posClass: 'top-[2%] left-1/2 -translate-x-1/2',
      label: 'Blackmass',
      sublabel: 'Input',
    },
    {
      title: 'Organic Acid Leaching',
      desc: 'Selective dissolution of critical minerals using bio-friendly organic acids.',
      emoji: '⚗️',
      posClass: 'top-1/2 right-[2%] -translate-y-1/2',
      label: 'Organic Acid',
      sublabel: 'Leaching',
    },
    {
      title: 'Proprietary Solution',
      desc: 'Liquid pregnant leach solution containing dissolved metallic complexes.',
      emoji: '🧪',
      posClass: 'bottom-[2%] left-1/2 -translate-x-1/2',
      label: 'Proprietary',
      sublabel: 'Solution',
    },
    {
      title: 'Metal Separation',
      desc: 'Separation of metals through our in – house precipitation process.',
      emoji: '🔬',
      posClass: 'top-1/2 left-[2%] -translate-y-1/2',
      label: 'In-House',
      sublabel: 'Precipitation',
    },
  ];

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered, steps.length]);

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
            In – House Developed.
            <br />
            Environmentally and Economically Efficient process
          </h2>
          <p className="text-sm md:text-base font-light text-mid max-w-2xl leading-relaxed">
            Our proprietary recovery technology is built entirely on Organic acid leaching – No solvent extraction, no toxic reagents, no hazardous discharge. Every process reagent is recovered, recycled, and reused.
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
            className="bg-g5 border border-white/5 rounded-3xl p-8 md:p-14 relative flex flex-col items-center justify-center overflow-hidden min-h-[460px] shadow-xl shadow-g5/20 group lg:sticky lg:top-28 self-start"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Concentric Dashed Rings styled in head */}
            <div className="relative w-full aspect-square max-w-[320px] md:max-w-[360px] mx-auto select-none">
              {/* Inner Ring */}
              <div
                className="absolute top-1/2 left-1/2 pointer-events-none"
                style={{ transform: 'translate(-50%, -50%)' }}
              >
                <div
                  className={`w-[160px] h-[160px] md:w-[180px] md:h-[180px] border border-dashed rounded-full transition-all duration-500 ${
                    isHovered
                      ? 'border-g1/50 scale-105 animate-[spin_10s_linear_infinite]'
                      : 'border-g1/20 animate-[spin_20s_linear_infinite]'
                  }`}
                />
              </div>

              {/* Outer Ring */}
              <div
                className="absolute top-1/2 left-1/2 pointer-events-none"
                style={{ transform: 'translate(-50%, -50%)' }}
              >
                <div
                  className={`w-[260px] h-[260px] md:w-[280px] md:h-[280px] border border-dashed rounded-full transition-all duration-500 ${
                    isHovered
                      ? 'border-g2/50 scale-95 animate-[spin_16s_linear_infinite_reverse]'
                      : 'border-g2/20 animate-[spin_32s_linear_infinite_reverse]'
                  }`}
                />
              </div>

              {/* Center Core Logo box */}
              <div
                className="absolute top-1/2 left-1/2 z-10 pointer-events-none"
                style={{ transform: 'translate(-50%, -50%)' }}
              >
                <div
                  className={`w-24 h-24 rounded-full flex flex-col items-center justify-center text-center shadow-lg transition-all duration-300 ${
                    isHovered
                      ? 'bg-g1 scale-110 shadow-g1/40'
                      : 'bg-g1 scale-100 shadow-g1/25 group-hover:scale-105'
                  }`}
                >
                  <span className="text-2xl transition-transform duration-300">
                    {steps[activeStep].emoji}
                  </span>
                  <span className="text-[9px] md:text-[10px] font-black tracking-widest text-g5 uppercase mt-1">
                    Step {activeStep + 1}
                  </span>
                </div>
              </div>

              {/* Cardinal Process Nodes */}
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={idx}
                    className={`absolute bg-white/7 border backdrop-blur-md shadow-md shadow-black/15 transition-all duration-300 cursor-pointer rounded-xl px-3 py-2 text-center min-w-[110px] md:min-w-[120px] ${
                      step.posClass
                    } ${
                      isActive
                        ? 'border-g1 bg-white/20 scale-105 z-20 shadow-g1/20 shadow-lg'
                        : 'border-g1/20 hover:border-g1/40 hover:bg-white/10'
                    }`}
                    onMouseEnter={() => setActiveStep(idx)}
                    onClick={() => setActiveStep(idx)}
                  >
                    <span className={`text-lg md:text-xl block mb-0.5 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}>
                      {step.emoji}
                    </span>
                    <span className={`text-[9px] md:text-[10px] font-bold leading-snug block uppercase tracking-wider transition-colors duration-300 ${isActive ? 'text-g1' : 'text-white/80'}`}>
                      {step.label}
                      <br />
                      {step.sublabel}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Dynamic Step Detail Box */}
            <div className="mt-8 text-center max-w-[320px] md:max-w-[360px] min-h-[64px] flex flex-col justify-center items-center">
              <span className="text-[11px] md:text-xs text-g1 font-extrabold uppercase tracking-widest block mb-1">
                {steps[activeStep].title}
              </span>
              <p className="text-[10px] md:text-[11px] text-white/50 leading-relaxed font-medium max-w-[280px]">
                {steps[activeStep].desc}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
