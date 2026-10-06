import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const stats = [
  { value: '4.79', unit: '/5.0', label: 'CGPA, First Class Honours' },
  { value: '5+', unit: 'yrs', label: 'Writing software for real users' },
  { value: '13+', unit: '', label: 'Structures' },
  { value: '44+', unit: '', label: 'Projects' },
];

const achievements = [
  { title: 'Top 100 Africa Future Leaders', detail: 'One of 100 chosen from across the continent', year: '2025' },
  { title: 'Published in the Nile Journal', detail: 'Concrete mix design, automated with Python', year: '2025' },
  { title: "Vice-Chancellor's List", detail: 'FUT Minna, twice in a row', year: '2022, 2023' },
  { title: 'PTDF National Scholarship', detail: 'Covered four years of my degree', year: '2021–24' },
];

const coreValues = ['Innovation', 'Excellence', 'Leadership', 'Impact'];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const group = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};


function DiplomaScroll({ item, index }: { item: typeof achievements[0]; index: number }) {
  const [open, setOpen] = useState(true);
  const roll =
    'relative h-11 rounded-full shadow-[0_6px_14px_rgba(0,0,0,0.45)] bg-[linear-gradient(180deg,#d8c8a8_0%,#fbf4e4_38%,#efe3c9_62%,#cdb994_100%)]';

  return (
    <motion.div variants={reveal} className="self-start">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group block w-full text-left"
      >
        {/* Top roll */}
        <div className={roll}>
          <span className="absolute inset-y-0 left-0 w-3 rounded-l-full bg-black/10" />
          <span className="absolute inset-y-0 right-0 w-3 rounded-r-full bg-black/10" />
          <span className="absolute left-6 top-1/2 -translate-y-1/2 font-mono text-xs font-bold text-[#6b5a3c]">
            {String(index + 1).padStart(2, '0')}
          </span>
          {/* Ribbon, tied around the closed scroll */}
          <motion.span
            animate={{ opacity: open ? 0 : 1, scaleY: open ? 0.6 : 1 }}
            className="absolute -top-1 bottom-[-4px] left-1/2 w-7 -translate-x-1/2 bg-gradient-to-r from-[#7a2e45] via-[#a34862] to-[#7a2e45] shadow-md"
          >
            <span className="absolute -bottom-2 left-0 h-3 w-3.5 origin-top-left rotate-12 bg-[#7a2e45] [clip-path:polygon(0_0,100%_0,50%_100%)]" />
            <span className="absolute -bottom-2 right-0 h-3 w-3.5 origin-top-right -rotate-12 bg-[#7a2e45] [clip-path:polygon(0_0,100%_0,50%_100%)]" />
          </motion.span>
          {!open && (
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[11px] font-semibold text-[#6b5a3c] opacity-0 transition-opacity group-hover:opacity-100">
              Unroll
            </span>
          )}
        </div>

        {/* Paper */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="paper"
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mx-3 overflow-hidden bg-[#f6eedc] shadow-[inset_0_8px_10px_-8px_rgba(0,0,0,0.35),inset_0_-8px_10px_-8px_rgba(0,0,0,0.3)]"
            >
              <div className="relative px-5 pb-7 pt-6 text-[#2a2118]">
                <p className="font-mono text-xs text-[#8f3d56]">{item.year}</p>
                <p className="mt-2 font-serif text-xl font-bold leading-tight">{item.title}</p>
                <p className="mt-2 text-sm leading-snug text-[#2a2118]/70">{item.detail}</p>
                {/* Wax seal */}
                <span className="absolute bottom-3 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#8f3d56] text-[10px] font-bold text-[#fbf3ee] shadow-md">
                  CA
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom roll, only once the scroll is open */}
        {open && <div className={`${roll} -mt-px`} />}
      </button>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#080808] py-32">
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#b5546e]/[0.07] blur-[140px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-8">
        {/* Stats strip */}
        <motion.div
          variants={group}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 border-y border-white/10 lg:grid-cols-4"
        >
          {stats.map(({ value, unit, label }, i) => (
            <motion.div
              key={label}
              variants={reveal}
              className={`py-8 pr-6 ${i > 0 ? 'lg:border-l lg:border-white/10 lg:pl-8' : ''} ${i % 2 === 1 ? 'border-l border-white/10 pl-6 lg:pl-8' : ''}`}
            >
              <p className="text-5xl font-extrabold leading-none tracking-[-0.04em] text-[#f0f0f0] md:text-6xl">
                {value}
                <span className="ml-1 text-lg font-semibold text-[#b5546e]">{unit}</span>
              </p>
              <p className="mt-3 max-w-[16rem] text-xs leading-snug text-[#888]">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Story + education */}
        <motion.div
          variants={group}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid gap-6 lg:grid-cols-12"
        >
          <motion.div
            variants={reveal}
            className="rounded-2xl border border-white/[0.07] bg-[#0f0f0f] p-8 lg:col-span-7 lg:p-10"
          >
            <p className="mb-6 text-xs font-mono uppercase tracking-[0.12em] text-[#888]">About me</p>
            <div className="space-y-5 leading-relaxed text-[#c0c0c0]">
              <p>
                I'm Chinedu, a civil engineer who couldn't stop building software. These days I work in the gap
                between the two, trying to make buildings and infrastructure a bit smarter and a bit greener.
              </p>
              <p>
                As a software engineer, I've been writing code for over five years. I build backends and APIs
                with Python, Django, NestJS and Node, web frontends with React and Next.js, and mobile apps with
                React Native and Flutter. I've shipped a mobile app to both app stores, built carbon accounting
                tools, and I'm working on my own platform that ties Bills of Quantities to embodied carbon.
              </p>
              <p>
                As a civil engineering graduate, I finished with a first class, 4.79 out of 5. I do structural
                analysis, design and detailing, site supervision and structural drawings, along with geotechnical
                testing and building assessments. I've helped design 13+ structures and assessed 50+ existing
                buildings, which is why my software cares about what actually happens on a site.
              </p>
              <p>
                As a researcher into AI and ML, I use Python, TensorFlow and Scikit-Learn on real civil
                engineering problems. I automated concrete mix design and published a paper on it. If you're working on something like
                that, or just want to argue about whether AI can really make buildings greener, say hi.
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <motion.div
              variants={reveal}
              className="rounded-2xl bg-gradient-to-br from-[#8f3d56] to-[#5c2335] p-8 text-[#fbf3ee]"
            >
              <div className="mb-8 flex items-center gap-3">
                <GraduationCap size={20} />
                <span className="text-xs font-mono uppercase tracking-[0.12em] opacity-75">Education</span>
              </div>
              <h3 className="text-2xl font-extrabold leading-tight tracking-tight">B.Eng Civil Engineering</h3>
              <p className="mt-2 text-sm opacity-90">Federal University of Technology, Minna</p>
              <p className="mt-1 text-xs opacity-70">First Class Honours · CGPA 4.79/5.0</p>
              <p className="mt-6 font-mono text-xs opacity-60">Sept 2018 – Jan 2025</p>
            </motion.div>

            <motion.div
              variants={reveal}
              className="rounded-2xl border border-white/[0.07] bg-[#0f0f0f] p-8"
            >
              <p className="mb-5 text-xs font-mono uppercase tracking-[0.12em] text-[#888]">Core values</p>
              <div className="flex flex-wrap gap-2.5">
                {coreValues.map((v) => (
                  <span
                    key={v}
                    className="rounded-full border border-[#b5546e]/30 bg-[#b5546e]/10 px-4 py-2 text-sm font-semibold text-[#e7a3b5]"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Achievements, as diploma scrolls */}
        <motion.div
          variants={group}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16"
        >
          <motion.div variants={reveal} className="mb-8 flex items-baseline justify-between gap-4">
            <p className="text-xs font-mono uppercase tracking-[0.12em] text-[#888]">Along the way</p>
            <p className="text-xs text-[#666]">Click a scroll to roll it up</p>
          </motion.div>
          <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item, i) => (
              <DiplomaScroll key={item.title} item={item} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
