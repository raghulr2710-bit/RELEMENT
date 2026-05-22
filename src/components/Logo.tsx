import { useState, useEffect } from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const [mounted, setMounted] = useState(false);
  const [usePngFallback, setUsePngFallback] = useState(false);
  const [pngLoadingError, setPngLoadingError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sizeConfigs = {
    sm: {
      height: 'h-7',
      iconWidth: 'w-6 h-6',
      logoUrl: '/logo.png',
      textClass: 'text-sm md:text-base',
      energyClass: 'text-[9px] tracking-[0.15em] ml-1.5',
      sparkPosition: '-top-3.5 right-11',
      sparkSize: 'w-3 h-3',
    },
    md: {
      height: 'h-10 md:h-12',
      iconWidth: 'w-8 h-8 md:w-9 md:h-9',
      logoUrl: '/logo.png',
      textClass: 'text-lg md:text-xl',
      energyClass: 'text-[11px] md:text-xs tracking-[0.2em] ml-2',
      sparkPosition: '-top-4 right-[3.25rem] md:right-14',
      sparkSize: 'w-3.5 h-3.5',
    },
    lg: {
      height: 'h-16 md:h-20',
      iconWidth: 'w-12 h-12 md:w-14 md:h-14',
      logoUrl: '/logo.png',
      textClass: 'text-2xl md:text-3xl',
      energyClass: 'text-sm md:text-base tracking-[0.2em] ml-3',
      sparkPosition: '-top-5 right-20 md:right-24',
      sparkSize: 'w-4.5 h-4.5',
    },
  };

  const config = sizeConfigs[size];

  // Generate unique mask id to avoid SVG namespace clashes
  const maskId = `x-mask-${size}-${mounted ? 'client' : 'server'}`;

  // If a PNG image is placed at /logo.png, we display it directly!
  // If we encounter a loading error (e.g. no /logo.png found or broken), we gracefully fall back to our gorgeous SVG.
  if (usePngFallback && !pngLoadingError) {
    return (
      <img
        src={config.logoUrl}
        alt="RelementX Energy Logo"
        className={`${config.height} object-contain`}
        onError={() => setPngLoadingError(true)}
        referrerPolicy="no-referrer"
      />
    );
  }

  return (
    <div className="flex items-center gap-2 select-none font-sans relative group">
      {/* Invisible test image to check if a real PNG has been uploaded at /logo.png */}
      {!pngLoadingError && !usePngFallback && (
        <img
          src={config.logoUrl}
          className="hidden"
          onLoad={() => setUsePngFallback(true)}
          onError={() => setPngLoadingError(true)}
          alt=""
          referrerPolicy="no-referrer"
        />
      )}

      {/* Styled Yellow Lightning X Icon matching the mockup */}
      <svg
        viewBox="0 0 100 100"
        className={`${config.iconWidth} shrink-0 filter drop-shadow-[0_2px_8px_rgba(247,213,1,0.25)] transition-transform duration-300 group-hover:scale-105`}
        aria-hidden="true"
      >
        <defs>
          <mask id={maskId}>
            {/* White base keeps everything painted */}
            <rect x="0" y="0" width="100" height="100" fill="white" />
            {/* Black cutout creates the sharp diagonal lightning bolt gap */}
            <path
              d="M 68 8 L 32 54 L 54 54 L 30 92 L 68 46 L 46 46 Z"
              fill="black"
            />
          </mask>
        </defs>
        {/* The X shape (Two rotated bold intersecting bars) */}
        <g mask={`url(#${maskId})`} fill="#F7D501">
          <rect x="35" y="10" width="30" height="80" rx="14" transform="rotate(45 50 50)" />
          <rect x="35" y="10" width="30" height="80" rx="14" transform="rotate(-45 50 50)" />
        </g>
      </svg>

      {/* Branding Typography and sparkles */}
      {showText && (
        <div className="flex flex-col justify-center relative leading-none">
          {/* Neon green lightning spark floating directly above the 'X' */}
          <div className={`absolute ${config.sparkPosition} animate-bounce opacity-90 transition-all duration-300 group-hover:translate-y-[-2px]`}>
            <svg
              viewBox="0 0 24 24"
              className={`${config.sparkSize} fill-[#10B981] stroke-none transform rotate-12`}
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>

          <div className={`${config.textClass} font-black tracking-tight flex items-baseline`}>
            <span className="font-light text-white tracking-tight">Relement</span>
            <span className="text-[#F7D501] font-extrabold">X</span>
            <span className={`font-medium text-white/50 uppercase ${config.energyClass}`}>
              ENERGY
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
