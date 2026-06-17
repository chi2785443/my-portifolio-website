import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const scrollTo = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-[100dvh] flex items-center relative overflow-hidden bg-[#080808]"
    >
      {/* Static accent glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2dd4bf]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-8 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-0 items-center">

          {/* Left, text */}
          <motion.div
            style={{ y: textY }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Teal accent line */}
            <motion.div
              variants={itemVariants}
              className="w-10 h-px bg-[#2dd4bf] mb-8"
            />

            {/* Roles */}
            <motion.p
              variants={itemVariants}
              className="text-sm font-mono text-[#2dd4bf] tracking-[0.08em] mb-5"
            >
              Civil Engineering&nbsp;&nbsp;/&nbsp;&nbsp;Software Engineering&nbsp;&nbsp;/&nbsp;&nbsp;AI & ML Research
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[1.0] tracking-[-0.03em] text-[#f0f0f0] mb-6"
            >
              Chinedu
              <br />
              Aguwa
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-[#b8b8b8] leading-relaxed max-w-md mb-10"
            >
              Machine learning researcher and software engineer working at the crossroads of civil
              infrastructure, environmental sustainability, and intelligent systems. I publish
              peer-reviewed work on AI driven engineering challenges, and ship production software
              that closes the gap between research and real-world impact.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <MagneticButton
                className="px-7 py-3.5 bg-[#2dd4bf] text-black text-sm font-bold rounded-lg flex items-center gap-2 hover:bg-[#2dd4bf]/90 transition-colors"
                onClick={() => scrollTo('#projects')}
              >
                View Work <ArrowRight size={16} />
              </MagneticButton>

              <MagneticButton
                className="px-7 py-3.5 border border-white/15 text-[#f0f0f0]/70 text-sm font-semibold rounded-lg flex items-center gap-2 hover:border-white/30 hover:text-[#f0f0f0] transition-all"
                href="/Chinedu_Aguwa_CV.pdf"
                download
              >
                <Download size={15} /> Download Resume
              </MagneticButton>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={itemVariants} className="flex items-center gap-5">
              {[
                { icon: Github, href: 'https://github.com/Chi2785443', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/chinedu-aguwa/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:chineduaguwa0@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  data-cursor="link"
                  className="text-[#555] hover:text-[#2dd4bf] transition-colors duration-200"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right, photo */}
          <motion.div
            style={{ y: photoY }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Subtle glow ring */}
              <div className="absolute inset-0 rounded-full border border-[#2dd4bf]/20" />
              <div className="absolute inset-3 rounded-full overflow-hidden border border-[#2dd4bf]/30 shadow-[0_0_60px_rgba(45,212,191,0.08)]">
                <img
                  src="/profile.jpg"
                  alt="Chinedu Aguwa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
