import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowRight } from 'lucide-react';

interface Particle {
  id: number;
  size: number;
  color: string;
  left: number;
  duration: number;
  delay: number;
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = ['#F7D501', '#5EC47A', '#2A8C50', '#D4A843'];
    const initialParticles = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      size: Math.random() * 5 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      left: Math.random() * 100,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 8,
    }));
    setParticles(initialParticles);
  }, []);

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
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
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 py-28 md:py-36 overflow-hidden bg-gradient-to-br from-g5 via-[#0F2A1A] to-[#1A4030] select-none"
    >
      {/* Absolute particle container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute bottom-0 rounded-full opacity-0 animate-[float-particle_linear_infinite]"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              left: `${p.left}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Styled inline animation for floating particles */}
      <style>{`
        @keyframes float-particle {
          0% { transform: translateY(10vh) scale(0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-105vh) scale(1.5); opacity: 0; }
        }
      `}</style>

      {/* Hexagonal grid absolute overlay */}
      <div
        className="absolute right-0 top-0 w-full md:w-[55%] h-full opacity-6 pointer-events-none mix-blend-screen bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V17L28 1l28 16v33L28 66z' fill='none' stroke='%23F7D501' stroke-width='0.8'/%3E%3Cpath d='M28 100L0 84V51l28-17 28 17v33L28 100z' fill='none' stroke='%23F7D501' stroke-width='0.8'/%3E%3C/svg%3E")`,
          backgroundSize: '56px 100px',
        }}
      />

      <div className="relative z-10 max-w-5xl">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 border border-g1/30 rounded-full mb-8 bg-g5/40 backdrop-blur-sm"
        >
          <span className="w-2 h-2 bg-g1 rounded-full animate-ping" />
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-g1 uppercase">
            Critical Material Recovery · Battery Grade Purity · Zero Waste
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-8xl font-black leading-[0.98] tracking-tight text-white mb-6"
        >
          Recovering <em className="not-italic text-g1">Critical</em>
          <br />
          Minerals for a
          <br />
          <span className="outline-word select-none font-black block md:inline md:ml-4">Cleaner</span> Future
        </motion.h1>

        {/* Description paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm md:text-lg font-light leading-relaxed text-white/60 max-w-xl mb-10"
        >
          RelementX Energy recovers battery-grade lithium, cobalt, nickel, and manganese compounds from end-of-life batteries — using an entirely organic, solvent-free, zero-waste process developed in-house.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap gap-4 mb-20"
        >
          <button
            onClick={() => handleScrollTo('#products')}
            className="flex items-center gap-2 px-8 py-4 bg-g1 hover:bg-[#D4F7DC] text-g5 font-bold rounded-full cursor-pointer transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-g1/15 hover:shadow-g1/30"
          >
            Explore Products
            <ArrowDown className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleScrollTo('#technology')}
            className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-g1/35 hover:border-g1 text-g1 hover:bg-g1/10 font-bold rounded-full cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
          >
            Our Technology
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Stats segment */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10 pt-8 border-t border-white/10"
        >
          {[
            { value: '>95%', label: 'Material Yield' },
            { value: '100%', label: 'Organic Process' },
            { value: 'Zero', label: 'Toxic Waste' },
            { value: 'Battery', label: 'Grade Purity' },
            { value: 'Custom', label: 'Process Design' },
          ].map((stat, idx) => (
            <div key={idx} className="group">
              <div className="text-2xl md:text-4xl font-extrabold text-g1 tracking-tight duration-300 group-hover:scale-105 origin-left">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs font-semibold tracking-wider text-white/40 uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
