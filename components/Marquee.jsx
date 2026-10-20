const WORDS = ["Bibz_Stitches", "Bespoke", "Stylish", "Timeless"];

// repeated so the row is always wider than the screen
const ITEMS = [...WORDS, ...WORDS, ...WORDS];

// four-point sparkle star
function Star() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 text-[#E2B54A] md:h-6 md:w-6"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0Q13 11 24 12Q13 13 12 24Q11 13 0 12Q11 11 12 0Z" />
    </svg>
  );
}

export default function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {ITEMS.map((word, i) => (
        <div key={i} className="flex items-center gap-10">
          <span className="whitespace-nowrap font-serif text-2xl font-bold uppercase tracking-[0.2em] text-[#7B2285] md:text-3xl">
            {word}
          </span>
          <Star />
        </div>
      ))}
    </div>
  );

  return (
    <div
      aria-hidden="true"
      className="group overflow-hidden border-y border-[#7B2285]/15 bg-white py-3"
    >
      <style>{`
        @keyframes marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
        }
      `}</style>

      <div className="marquee-track flex w-max animate-[marquee_30s_linear_infinite] will-change-transform [backface-visibility:hidden] group-hover:[animation-play-state:paused]">
        {row}
        {row}
      </div>
    </div>
  );
}