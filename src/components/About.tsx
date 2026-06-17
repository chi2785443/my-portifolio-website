import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award } from 'lucide-react';

const coreValues = [
  { num: '01', name: 'Innovation', sub: 'Forward Thinking' },
  { num: '02', name: 'Excellence', sub: 'Quality Driven' },
  { num: '03', name: 'Leadership', sub: 'Team Builder' },
  { num: '04', name: 'Impact', sub: 'Solution Focused' },
];

const achievements = [
  'Published Researcher, Nile Journal of Engineering and Applied Science (2025)',
  'PTDF National Scholar, Federal Government of Nigeria (2021–2024)',
  'Top 100 Africa Future Leaders, Class of 2025',
  'President, NICESA FUT Minna, led 900+ civil engineering students',
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-8">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.15em] text-[#2dd4bf] mb-3">Background</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-[#f0f0f0]">
            Engineering meets code.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left, bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-6"
          >
            {[
              `I'm a first-class Civil Engineering graduate (CGPA 4.79/5.0, Top 2 in department) who crossed into software engineering and AI/ML research, spending 5+ years building production systems and applied research tools concurrently with structural design and site supervision work.`,
              `My published research converted the British DoE concrete mix design procedure into a validated Python algorithm, now in the Nile Journal of Engineering and Applied Science (2025). A second paper on CNN-based pavement distress detection across 30,000 labelled images is under review. On the software side, I've shipped full-stack platforms across carbon accounting (Django, Celery, EPA WARM v16), crypto tokenomics (NestJS), and mobile app stores (React Native, Flutter).`,
              `I'm currently a Civil Engineering Graduate Intern at Urban Shelter Limited while simultaneously developing BuildCore, a construction management platform integrating Bills of Quantities with embodied carbon accounting and AI driven material substitution toward net-zero targets.`,
            ].map((para, i) => (
              <motion.p key={i} variants={itemVariants} className="text-[#c0c0c0] leading-relaxed">
                {para}
              </motion.p>
            ))}

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
              <span className="flex items-center gap-2 text-sm text-[#888]">
                <MapPin size={13} className="text-[#2dd4bf]" /> Abuja, Nigeria
              </span>
              <span className="flex items-center gap-2 text-sm text-[#888]">
                <Award size={13} className="text-[#2dd4bf]" /> 5+ Years Experience
              </span>
            </motion.div>
          </motion.div>

          {/* Right, education, achievements, values */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-10"
          >
            {/* Education card */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
              className="bg-[#141414] border border-white/7 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap size={18} className="text-[#2dd4bf]" />
                <span className="text-xs font-mono uppercase tracking-[0.1em] text-[#888]">Education</span>
              </div>
              <h4 className="text-[#2dd4bf] font-semibold mb-1">B.Eng Civil Engineering</h4>
              <p className="text-[#f0f0f0] text-sm">Federal University of Technology, Minna</p>
              <p className="text-[#b8b8b8] text-xs mt-1">CGPA 4.79/5.0 · First Class Honours · Top 2 in department</p>
              <p className="text-[#888] text-sm mt-1 font-mono">Sept 2018 – Jan 2025</p>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemVariants}>
              <p className="text-xs font-mono uppercase tracking-[0.1em] text-[#888] mb-4">Key Achievements</p>
              <div className="space-y-0">
                {achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 py-3 border-b border-white/5 last:border-0">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#2dd4bf] shrink-0" />
                    <p className="text-[#c0c0c0] text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div variants={itemVariants}>
              <p className="text-xs font-mono uppercase tracking-[0.1em] text-[#888] mb-5">Core Values</p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {coreValues.map(({ num, name, sub }, i) => (
                  <motion.div
                    key={num}
                    initial={{ clipPath: 'inset(0 100% 0 0)' }}
                    whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-mono text-[#2dd4bf]/50">{num}</span>
                      <span className="font-bold text-[#f0f0f0]">{name}</span>
                    </div>
                    <p className="text-xs text-[#888] mt-0.5">{sub}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
