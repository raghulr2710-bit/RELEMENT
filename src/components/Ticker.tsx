import { tickerItems } from '../data';

export default function Ticker() {
  // Duplicate list to achieve a seamless, continuous scroll effect
  const doubleItems = [...tickerItems, ...tickerItems];

  return (
    <div className="bg-g1 py-3.5 overflow-hidden select-none relative z-20 shadow-inner">
      <div className="flex whitespace-nowrap animate-[tick_35s_linear_infinite] hover:[animation-play-state:paused]">
        {doubleItems.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-2.5 px-10 text-[11px] md:text-xs font-bold tracking-wider uppercase text-g5 shrink-0"
          >
            <span className="text-g3 text-sm md:text-base">◆</span>
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes tick {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
