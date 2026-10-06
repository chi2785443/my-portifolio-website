import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Code2, FlaskConical, HardHat, ArrowDown } from 'lucide-react';

const phrases = [
  'Building intelligent systems that last',
  'Turning research into working software',
  'Civil engineering meets machine learning',
];

const corners = [
  { word: 'ENGINEER', pos: 'top-28 left-6 lg:top-[24%] lg:left-[7%]' },
  { word: 'RESEARCHER', pos: 'top-28 right-6 lg:top-[28%] lg:right-[7%]' },
  { word: 'DEVELOPER', pos: 'bottom-28 left-6 lg:bottom-[24%] lg:left-[9%]' },
  { word: 'BUILDER', pos: 'bottom-28 right-6 lg:bottom-[22%] lg:right-[8%]' },
];

const whatIDo = [
  { icon: HardHat, title: 'Engineer', desc: 'Civil infrastructure & sustainability', tint: 'bg-rose-200 text-rose-600' },
  { icon: Code2, title: 'Builder', desc: 'Production web & ML software', tint: 'bg-indigo-200 text-indigo-600' },
  { icon: FlaskConical, title: 'Researcher', desc: 'Peer-reviewed AI for engineering', tint: 'bg-amber-200 text-amber-700' },
];

function useTyping(list: string[]) {
  const [text, setText] = useState('');
  useEffect(() => {
    let i = 0;
    let n = 0;
    let deleting = false;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const full = list[i];
      n += deleting ? -1 : 1;
      setText(full.slice(0, n));
      let delay = deleting ? 25 : 55;
      if (!deleting && n === full.length) {
        deleting = true;
        delay = 1600;
      } else if (deleting && n === 0) {
        deleting = false;
        i = (i + 1) % list.length;
        delay = 350;
      }
      t = setTimeout(tick, delay);
    };
    t = setTimeout(tick, 600);
    return () => clearTimeout(t);
  }, [list]);
  return text;
}

function Barcode() {
  return (
    <div
      aria-hidden
      className="h-7 w-24 opacity-70"
      style={{
        backgroundImage:
          'repeating-linear-gradient(90deg,#2b1f45 0 2px,transparent 2px 4px,#2b1f45 4px 5px,transparent 5px 8px,#2b1f45 8px 11px,transparent 11px 13px)',
      }}
    />
  );
}

export default function IdCardSection() {
  const [flipped, setFlipped] = useState(false);
  const typed = useTyping(phrases);
  const x = useMotionValue(0);
  const tilt = useTransform(x, [-220, 0, 220], [-14, 0, 14]);

  return (
    <section
      id="identity"
      className="relative min-h-[100dvh] overflow-hidden text-[#f7d5e5]"
      style={{
        background:
          'radial-gradient(ellipse 60% 55% at 50% 45%, #342a63 0%, #1d1739 55%, #120e26 100%)',
      }}
    >
      {/* Corner words */}
      {corners.map(({ word, pos }, i) => (
        <motion.span
          key={word}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
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
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 70, damping: 11, delay: 0.2 }}
            className="relative flex flex-col items-center pointer-events-auto cursor-grab"
            data-cursor="button"
          >
            {/* Strap */}
            <div className="h-[clamp(70px,13vh,130px)] w-7 bg-gradient-to-b from-[#e9b6cc] to-[#f4c9dc] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]" />
            {/* Clip */}
            <div className="-mt-0.5 h-5 w-12 rounded-md bg-gradient-to-b from-[#d8dbe6] to-[#9da2b5] shadow-md" />
            <div className="-mt-1 h-3 w-7 rounded-b-full bg-[#7c8196]" />

            {/* Card (flips) */}
            <div className="mt-1 [perspective:1200px]">
              <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 16 }}
                className="relative h-[clamp(340px,52vh,470px)] w-[clamp(230px,62vw,310px)] [transform-style:preserve-3d]"
              >
                {/* Front */}
                <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-white/30 bg-gradient-to-br from-[#ffc7d9] via-[#f7a9c4] to-[#f58fb0] p-3.5 shadow-[0_30px_80px_rgba(0,0,0,0.5)] [backface-visibility:hidden]">
                  <div className="h-[58%] overflow-hidden rounded-2xl bg-[#f3eef0]">
                    <img
                      src="/profile.jpg"
                      alt="Chinedu Aguwa"
                      draggable={false}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-3 flex items-end justify-between">
                    <div>
                      <p className="text-[clamp(1.7rem,6vw,2.4rem)] font-extrabold leading-none tracking-tight text-[#2b1f45]">
                        CHINEDU
                      </p>
                      <p className="mt-1.5 text-[11px] leading-snug font-semibold text-[#2b1f45]/75">
                        Software Engineer
                        <br />
                        ML Researcher
                      </p>
                    </div>
                    <p className="font-serif text-xl italic text-[#2b1f45]/60">Aguwa</p>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="rounded-full bg-[#2b1f45]/10 px-3 py-1 text-[10px] font-semibold text-[#2b1f45]/75">
                      Tap to flip
                    </span>
                    <Barcode />
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-white/40 bg-gradient-to-b from-[#f1e9f8] to-[#d9cdea] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.5)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <p className="text-sm font-bold text-[#2b1f45]">What I do</p>
                  <div className="mt-4 space-y-3">
                    {whatIDo.map(({ icon: Icon, title, desc, tint }) => (
                      <div key={title} className="flex items-center gap-3 rounded-xl bg-white/70 p-3">
                        <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${tint}`}>
                          <Icon size={18} />
                        </span>
                        <div>
                          <p className="text-sm font-bold text-[#2b1f45] leading-tight">{title}</p>
                          <p className="text-[11px] leading-snug text-[#2b1f45]/65">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 font-serif text-lg italic leading-snug text-[#2b1f45]/70">
                    Building things that last.
                  </p>
                  <div className="absolute bottom-5 left-5">
                    <Barcode />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Typing line */}
      <div className="absolute bottom-8 left-6 right-6 z-10 flex items-end justify-between lg:bottom-10 lg:left-[7%] lg:right-[7%]">
        <p className="font-mono text-xs text-[#f7d5e5]/80 sm:text-sm">
          {typed}
          <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-[#f7d5e5]" />
        </p>
        <button
          onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden items-center gap-2 text-xs text-[#f7d5e5]/70 hover:text-[#f7d5e5] sm:flex"
          data-cursor="link"
        >
          Scroll <ArrowDown size={14} />
        </button>
      </div>
    </section>
  );
}
