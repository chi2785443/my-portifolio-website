import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const paper = {
  title: 'Development of a Simplified Methodology for British DoE Concrete Mix Design Procedure Using Python',
  journal: 'Nile Journal of Engineering and Applied Science',
  year: '2025',
  link: 'https://doi.org/10.5455/njeas.238594',
};

// Inner outline of the tube, used to clip the liquid
const TUBE = 'M62 40 L62 372 Q62 436 100 436 Q138 436 138 372 L138 40 Z';

const bubbles = [
  { x: 84, size: 5, delay: 0, dur: 4.2 },
  { x: 108, size: 7, delay: 1.1, dur: 5.1 },
  { x: 96, size: 4, delay: 2.2, dur: 3.8 },
  { x: 120, size: 6, delay: 0.6, dur: 4.7 },
  { x: 90, size: 3, delay: 3.1, dur: 3.5 },
];

function TestTube({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 200 480" className="h-auto w-full" role="img" aria-label="A test tube filling with liquid">
      <defs>
        <clipPath id="tube-clip">
          <path d={TUBE} />
        </clipPath>
        <linearGradient id="liquid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff8fb0" />
          <stop offset="0.6" stopColor="#b5546e" />
          <stop offset="1" stopColor="#6e2840" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0.22" />
          <stop offset="0.35" stopColor="#fff" stopOpacity="0.04" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.14" />
        </linearGradient>
        <radialGradient id="tube-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ff8fb0" stopOpacity="0.45" />
          <stop offset="1" stopColor="#ff8fb0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Glow behind the glass */}
      <motion.ellipse
        cx="100" cy="320" rx="95" ry="130" fill="url(#tube-glow)"
        initial={{ opacity: 0 }}
        animate={{ opacity: filled ? 1 : 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      />

      {/* Liquid, clipped to the tube */}
      <g clipPath="url(#tube-clip)">
        <motion.g
          initial={{ y: 330 }}
          animate={{ y: filled ? 0 : 330 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          {/* Drifting wave on the surface */}
          <motion.path
            d="M-100 170 q25 -12 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 L400 480 L-100 480 Z"
            fill="url(#liquid)"
            animate={{ x: [0, 100] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
          />
          {/* Bubbles */}
          {bubbles.map((b, i) => (
            <motion.circle
              key={i}
              cx={b.x}
              r={b.size}
              fill="#fff"
              fillOpacity="0.45"
              initial={{ cy: 420, opacity: 0 }}
              animate={{ cy: [420, 190], opacity: [0, 0.8, 0] }}
              transition={{ duration: b.dur, repeat: Infinity, delay: b.delay, ease: 'easeOut' }}
            />
          ))}
        </motion.g>
      </g>

      {/* Glass */}
      <path d={TUBE} fill="url(#glass)" stroke="#fff" strokeOpacity="0.4" strokeWidth="3" />
      <path d="M72 60 L72 360" stroke="#fff" strokeOpacity="0.35" strokeWidth="4" strokeLinecap="round" />
      {/* Rim */}
      <rect x="52" y="30" width="96" height="14" rx="7" fill="#fff" fillOpacity="0.2" stroke="#fff" strokeOpacity="0.5" strokeWidth="2" />

      {/* Measurement ticks */}
      {[110, 160, 210, 260, 310, 360].map((y, i) => (
        <g key={y}>
          <line x1="138" x2={i % 2 === 0 ? 152 : 146} y1={y} y2={y} stroke="#fff" strokeOpacity="0.45" strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}

      {/* Stand */}
      <ellipse cx="100" cy="452" rx="62" ry="9" fill="#000" opacity="0.45" />
    </svg>
  );
}

export default function Research() {
  const stageRef = useRef<HTMLDivElement>(null);
  const filled = useInView(stageRef, { once: true, amount: 0.4 });

  return (
    <section id="research" className="relative overflow-hidden bg-[#0f0f0f] py-14">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#b5546e]/[0.08] blur-[130px]" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="mb-3 text-xs font-mono uppercase tracking-[0.15em] text-[#b5546e]">Academic</p>
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-[#f0f0f0] md:text-5xl">Research</h2>
        </motion.div>

        <div className="grid items-center gap-8 lg:grid-cols-[200px_1fr] lg:gap-14">
          <div ref={stageRef} className="mx-auto w-full max-w-[120px] lg:max-w-[160px]">
            <TestTube filled={filled} />
          </div>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl text-base leading-relaxed text-[#c8c8c8]"
            >
              I like solving problems. Give me something slow, broken or still done by hand and I won't rest
              until I've found a better way. I stick with it, test it, verify it, and then make it available so
              other people can use it. If you're working on something like that, let's talk.
            </motion.p>

            {/* The published paper */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="mb-4 text-xs font-mono uppercase tracking-[0.12em] text-[#b5546e]/80">Published paper</p>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block max-w-2xl rounded-2xl border border-white/[0.08] bg-[#141414] p-5 transition-colors hover:border-[#b5546e]/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-base font-bold leading-snug text-[#f0f0f0] transition-colors group-hover:text-[#e7a3b5]">
                    {paper.title}
                  </p>
                  <ExternalLink size={16} className="mt-1 shrink-0 text-[#888] transition-colors group-hover:text-[#b5546e]" />
                </div>
                <p className="mt-3 font-mono text-xs text-[#a0a0a0]">
                  {paper.journal} · {paper.year}
                </p>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
