import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
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
  const ghostX = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const ghostY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex flex-col min-h-[85dvh] overflow-hidden bg-[#f1ece2] text-[#141414]"
    >
      {/* Soft warm glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[#fff8e8] blur-[120px] pointer-events-none" />

      {/* Ghost name sits behind the portrait */}
      <motion.div
        aria-hidden
        style={{ x: ghostX, y: ghostY }}
        className="absolute inset-x-0 top-[58%] lg:top-[10%] z-0 select-none pointer-events-none"
      >
        <p className="whitespace-nowrap text-center font-extrabold leading-none tracking-[-0.05em] text-[#141414]/[0.07] text-[clamp(4rem,19vw,24rem)]">
          CHINEDU
        </p>
      </motion.div>

      {/* Foreground copy */}
      <motion.div
        style={{ y: textY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 px-6 pt-28 lg:pt-0 lg:absolute lg:inset-x-0 lg:bottom-0 lg:px-12 lg:pb-14 max-w-[1500px] mx-auto w-full lg:flex lg:items-end lg:justify-between"
      >
        <div className="max-w-xl">
          <motion.p
            variants={itemVariants}
            className="text-xs font-mono tracking-[0.2em] text-[#141414]/55 mb-4"
          >
            CHINEDU AGUWA
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-[clamp(3.2rem,7vw,6.2rem)] font-extrabold leading-[0.95] tracking-[-0.04em] mb-5"
          >
            Engineer<span className="text-[#8f3d56]">.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-[#141414]/65 leading-relaxed max-w-sm"
          >
            I build, design and create solutions for businesses, like web and mobile apps and AI for infrastructure.
          </motion.p>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-8 lg:mt-0 flex flex-col gap-5 lg:items-end"
        >
          <div className="flex flex-wrap gap-3">
            <MagneticButton
              className="px-6 py-3.5 bg-[#141414] text-[#f1ece2] text-sm font-bold rounded-full flex items-center gap-2 hover:bg-black transition-colors"
              onClick={() => scrollTo('#projects')}
            >
              Explore work <ArrowRight size={16} />
            </MagneticButton>

            <MagneticButton
              className="px-6 py-3.5 border border-[#141414]/20 bg-white/40 text-[#141414] text-sm font-semibold rounded-full flex items-center gap-2 hover:bg-white/70 transition-colors"
              href="/Chinedu_Aguwa_CV.pdf"
              download
            >
              <Download size={15} /> Resume
            </MagneticButton>
          </div>

          <div className="flex items-center gap-5">
            {[
              { icon: Github, href: 'https://github.com/Chi2785443', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/chinedu-aguwa/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:chineduaguwaofficial@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                data-cursor="link"
                className="text-[#141414]/45 hover:text-[#8f3d56] transition-colors duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Portrait: multiply blend dissolves the photo's white backdrop into the cream */}
      <motion.div
        style={{ y: photoY }}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-auto flex justify-center lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 pointer-events-none"
      >
        <img
          src="/profile.jpg"
          alt="Chinedu Aguwa"
          className="block w-[min(88vw,420px)] lg:w-auto lg:h-[min(70vh,760px)] aspect-square object-cover mix-blend-multiply"
          style={{
            WebkitMaskImage:
              'radial-gradient(ellipse 54% 100% at 50% 100%, #000 45%, transparent 100%)',
            maskImage:
              'radial-gradient(ellipse 54% 100% at 50% 100%, #000 45%, transparent 100%)',
          }}
        />
      </motion.div>
    </section>
  );
}
