import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowRight, Hexagon, Leaf, Recycle, Sprout, Settings } from 'lucide-react';

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
          <span className="select-none font-black block md:inline md:ml-4">Cleaner</span> Future
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
      </div>

      {/* Stats segment */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 w-full pt-12 border-t border-white/10 grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0"
      >
        {[
          {
            icon: (
              <div className="relative w-12 h-12 mb-4 flex items-center justify-center text-g1">
                <Hexagon className="w-12 h-12 absolute stroke-[1.8]" />
                <Leaf className="w-6 h-6 absolute stroke-[1.8]" />
              </div>
            ),
            value: '>95%',
            label: 'Material Yield',
          },
          {
            icon: <Recycle className="w-12 h-12 text-g1 mb-4 stroke-[1.8]" />,
            value: '100%',
            label: 'Organic Process',
          },
          {
            icon: <Sprout className="w-12 h-12 text-g1 mb-4 stroke-[1.8]" />,
            value: 'Zero',
            label: 'Toxic Waste',
          },
          {
            icon: (
              <svg
                className="w-12 h-12 text-g1 mb-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="7" y="5" width="10" height="15" rx="2" />
                <path d="M10 5V2.5h4V5" />
                <line x1="9.5" y1="16.5" x2="14.5" y2="16.5" />
                <line x1="9.5" y1="12.5" x2="14.5" y2="12.5" />
                <line x1="9.5" y1="8.5" x2="14.5" y2="8.5" />
              </svg>
            ),
            value: 'Battery',
            label: 'Grade Purity',
          },
          {
            icon: <Settings className="w-12 h-12 text-g1 mb-4 stroke-[1.8]" />,
            value: 'Custom',
            label: 'Process Design',
          },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="group flex flex-col items-center text-center px-4 py-4 lg:border-r lg:border-white/10 lg:last:border-r-0"
          >
            {stat.icon}
            <div className="text-2xl md:text-4xl font-extrabold text-g1 tracking-tight duration-300 group-hover:scale-105 uppercase">
              {stat.value}
            </div>
            <div className="text-[10px] md:text-xs font-semibold tracking-wider text-white/50 uppercase mt-2">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
