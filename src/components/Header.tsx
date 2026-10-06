import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Research', href: '#research' },
];

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Header({ heroLight = true }: { heroLight?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  // The hero is light; the pill flips to a dark glass style once past it
  const [onLight, setOnLight] = useState(heroLight);
  useMotionValueEvent(scrollY, 'change', (y) => {
    const next = heroLight && y < window.innerHeight - 80;
    setOnLight((prev) => (prev === next ? prev : next));
  });

  const pill = onLight
    ? 'bg-white/60 border-[#141414]/10 text-[#141414] shadow-[0_8px_30px_rgba(60,40,30,0.08)]'
    : 'bg-[#141414]/70 border-white/10 text-[#f1e4dc] shadow-[0_8px_30px_rgba(0,0,0,0.4)]';
  const link = onLight ? 'text-[#141414]/60 hover:text-[#141414]' : 'text-[#f1e4dc]/60 hover:text-[#f1e4dc]';

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <nav
          className={`pointer-events-auto flex w-full max-w-3xl items-center justify-between rounded-full border py-2 pl-2 pr-2 backdrop-blur-xl transition-colors duration-300 ${pill}`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo('#hero')}
            className="flex items-center gap-2.5 rounded-full pr-3 group"
            aria-label="Back to top"
          >
            <span className="pl-3 text-sm font-semibold">Chinedu Aguwa</span>
          </button>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 hover:bg-current/5 ${link}`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollTo('#contact')}
              className="rounded-full bg-[#8f3d56] px-5 py-2.5 text-sm font-semibold text-[#fbf3ee] transition-colors hover:bg-[#a34862]"
            >
              Contact me
            </button>
            <button
              className={`flex h-10 w-10 items-center justify-center rounded-full md:hidden ${link}`}
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-[#141414] px-8 pt-28 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col">
              {[...navItems, { name: 'Contact', href: '#contact' }].map((item, i) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  onClick={() => {
                    scrollTo(item.href);
                    setIsOpen(false);
                  }}
                  className="border-b border-white/5 py-4 text-left text-2xl font-semibold text-[#f1e4dc]/70 transition-colors hover:text-[#c4607c]"
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
