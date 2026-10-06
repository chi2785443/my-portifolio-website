import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { Code2, FlaskConical, HardHat } from 'lucide-react';

const corners = [
  { word: 'ENGINEER', pos: 'top-28 left-6 lg:top-[24%] lg:left-[7%]' },
  { word: 'RESEARCHER', pos: 'top-28 right-6 lg:top-[28%] lg:right-[7%]' },
  { word: 'DEVELOPER', pos: 'bottom-28 left-6 lg:bottom-[24%] lg:left-[9%]' },
  { word: 'DESIGNER', pos: 'bottom-28 right-6 lg:bottom-[22%] lg:right-[8%]' },
];

const whatIDo = [
  { icon: HardHat, title: 'Engineer & designer', desc: 'Designing safe, solid structures', tint: 'bg-rose-200 text-rose-700' },
  { icon: Code2, title: 'Developer', desc: 'Building web and mobile software', tint: 'bg-stone-300 text-stone-700' },
  { icon: FlaskConical, title: 'Researcher', desc: 'Applying AI and ML to infrastructure', tint: 'bg-red-200 text-red-800' },
];

function Barcode({ color = '#2b1f45' }: { color?: string }) {
  return (
    <div
      aria-hidden
      className="h-7 w-24 opacity-70"
      style={{
        backgroundImage:
          `repeating-linear-gradient(90deg,${color} 0 2px,transparent 2px 4px,${color} 4px 5px,transparent 5px 8px,${color} 8px 11px,transparent 11px 13px)`,
      }}
    />
  );
}

export default function IdCardSection() {
  const sectionRef = useRef<HTMLElement>(null);
  // Observe the section, not the badge: the badge starts offscreen and would never intersect
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [flipped, setFlipped] = useState(false);
  const x = useMotionValue(0);
  const tilt = useTransform(x, [-220, 0, 220], [-14, 0, 14]);

  return (
    <section
      id="identity"
      ref={sectionRef}
      className="relative min-h-[100dvh] lg:min-h-[80dvh] overflow-hidden text-[#f1e4dc]"
      style={{
        background:
          'radial-gradient(ellipse 60% 55% at 50% 45%, #2e2a2c 0%, #1a1819 55%, #0f0e0f 100%)',
      }}
    >
      {/* Corner words */}
      {corners.map(({ word, pos }, i) => (
        <motion.span
          key={word}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute z-10 select-none font-extrabold tracking-tight text-[clamp(1.3rem,4.6vw,4.2rem)] leading-none [text-shadow:0_4px_24px_rgba(0,0,0,0.35)] ${pos}`}
        >
          {word}
        </motion.span>
      ))}

      {/* Lanyard + badge */}
      <div className="absolute inset-x-0 top-0 z-20 flex justify-center pointer-events-none">
        {/* Idle sway around the top pivot */}
        <motion.div
          style={{ transformOrigin: 'top center' }}
          animate={{ rotate: [-1.6, 1.6, -1.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            dragSnapToOrigin
            style={{ x, rotate: tilt, transformOrigin: 'top center' }}
            onTap={() => setFlipped((f) => !f)}
            whileTap={{ cursor: 'grabbing' }}
            initial={{ y: -520 }}
            animate={{ y: inView ? 0 : -520 }}
            transition={{ type: 'spring', stiffness: 70, damping: 11, delay: 0.2 }}
            className="relative flex flex-col items-center pointer-events-auto cursor-grab"
            data-cursor="button"
          >
            {/* Strap */}
            <div className="h-[clamp(70px,13vh,130px)] w-7 bg-gradient-to-b from-[#7a2e45] to-[#9c4560] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]" />
            {/* Clip */}
            <div className="-mt-0.5 h-5 w-12 rounded-md bg-gradient-to-b from-[#d8dbe6] to-[#9da2b5] shadow-md" />
            <div className="-mt-1 h-3 w-7 rounded-b-full bg-[#7c8196]" />

            {/* Card (flips) */}
            <div className="mt-1 [perspective:1200px]">
              <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 16 }}
                className="relative h-[clamp(390px,56vh,520px)] w-[clamp(230px,62vw,310px)] [transform-style:preserve-3d]"
              >
                {/* Front */}
                <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-white/30 bg-gradient-to-br from-[#a34862] via-[#8a3650] to-[#6e2840] p-3.5 shadow-[0_30px_80px_rgba(0,0,0,0.5)] [backface-visibility:hidden]">
                  <div className="h-[66%] overflow-hidden rounded-2xl bg-[#f3eef0]">
                    <img
                      src="/id-photo.jpg"
                      alt="Chinedu Aguwa"
                      draggable={false}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-3 flex items-end justify-between">
                    <div>
                      <p className="text-[clamp(1.35rem,5.2vw,1.7rem)] font-extrabold leading-none tracking-tight text-[#fbf3ee]">
                        CHINEDU AGUWA
                      </p>
                      <p className="mt-1.5 text-[11px] leading-snug font-semibold text-[#f6ebe4]/80">
                        Software Engineer
                        <br />
                        ML Researcher
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold text-[#f6ebe4]/80">
                      Tap to flip
                    </span>
                    <Barcode color="#f6ebe4" />
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-white/40 bg-gradient-to-b from-[#f6f1ec] to-[#e4dad2] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.5)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <p className="text-sm font-bold text-[#2b1f45]">What I do</p>
                  <div className="mt-3 space-y-2">
                    {whatIDo.map(({ icon: Icon, title, desc, tint }) => (
                      <div key={title} className="flex items-center gap-3 rounded-xl bg-white/70 p-2.5">
                        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${tint}`}>
                          <Icon size={16} />
                        </span>
                        <div>
                          <p className="text-[13px] font-bold leading-tight text-[#2b1f45]">{title}</p>
                          <p className="text-[11px] leading-snug text-[#2b1f45]/65">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-sm font-bold text-[#2b1f45]">About me</p>
                  <p className="mt-1.5 text-[12px] leading-snug text-[#2b1f45]/75">
                    A civil engineer who couldn't stop building software, now working where buildings, code and AI
                    meet.
                  </p>
                  <div className="mt-3">
                    <Barcode />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
