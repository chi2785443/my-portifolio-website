import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Research', href: '#research' },
  { name: 'Contact', href: '#contact' },
];

const scrollTo = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-8 py-10">

        {/* Row 1, brand + socials */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
        >
          <button
            onClick={() => scrollTo('#hero')}
            className="flex items-center gap-2.5"
            data-cursor="link"
          >
            <span className="w-7 h-7 rounded-sm bg-[#2dd4bf] flex items-center justify-center text-black text-xs font-extrabold">
              CA
            </span>
            <span className="text-sm font-semibold text-[#f0f0f0]/60">Chinedu Aguwa</span>
          </button>

          <div className="flex items-center gap-5">
            {[
              { icon: Github, href: 'https://github.com/Chi2785443', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/chinedu-aguwa/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:neduaguwa443@gmail.com', label: 'Email' },
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
                <Icon size={17} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Row 2, copyright + nav + back to top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/5"
        >
          <p className="text-xs text-[#555]">
            &copy; {new Date().getFullYear()} Chinedu Aguwa. All rights reserved.
          </p>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {quickLinks.map(({ name, href }) => (
              <button
                key={name}
                onClick={() => scrollTo(href)}
                data-cursor="link"
                className="text-xs text-[#555] hover:text-[#f0f0f0] transition-colors duration-200"
              >
                {name}
              </button>
            ))}
          </nav>

          {/* Back to top */}
          <div className="relative">
            <motion.button
              onClick={() => scrollTo('#hero')}
              whileHover="hover"
              className="relative p-2.5 text-[#555] hover:text-[#2dd4bf] transition-colors"
              aria-label="Scroll to top"
              data-cursor="button"
            >
              <motion.span
                variants={{ hover: { scale: 1, opacity: 1 }, initial: { scale: 0, opacity: 0 } }}
                initial="initial"
                className="absolute inset-0 rounded-full bg-[#2dd4bf]/10"
              />
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
