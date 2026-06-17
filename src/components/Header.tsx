import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Research', href: '#research' },
  { name: 'Contact', href: '#contact' },
];

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.92]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.08]);

  return (
    <>
      <motion.header
        className="fixed top-0 w-full z-50"
        style={{
          backgroundColor: `rgba(8,8,8,${bgOpacity.get()})`,
          backdropFilter: 'blur(20px)',
        }}
      >
        <motion.div
          className="absolute inset-x-0 bottom-0 h-px bg-white"
          style={{ opacity: borderOpacity }}
        />

        <nav className="max-w-[1400px] mx-auto px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#hero')}
            className="flex items-center gap-2.5 group"
            data-cursor="link"
          >
            <span className="w-8 h-8 rounded-sm bg-[#2dd4bf] flex items-center justify-center text-black text-sm font-extrabold leading-none">
              CA
            </span>
            <span className="text-sm font-semibold text-[#f0f0f0]/80 group-hover:text-[#f0f0f0] transition-colors duration-200">
              Chinedu Aguwa
            </span>
          </button>

          {/* Desktop Nav */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
              >
                <button
                  onClick={() => scrollTo(item.href)}
                  className="relative text-sm text-[#8a8a8a] hover:text-[#f0f0f0] transition-colors duration-200 group py-1"
                  data-cursor="link"
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 h-px bg-[#2dd4bf]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    style={{ originX: 0, width: '100%' }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#f0f0f0] p-1"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            data-cursor="button"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden bg-[#080808] flex flex-col pt-24 px-8"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.32, 0, 0.67, 0] }}
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <button
                    onClick={() => { scrollTo(item.href); setIsOpen(false); }}
                    className="w-full text-left py-4 text-2xl font-semibold text-[#f0f0f0]/70 hover:text-[#2dd4bf] transition-colors duration-200 border-b border-white/5"
                    data-cursor="link"
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
