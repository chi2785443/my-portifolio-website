import { motion, useScroll } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#b5546e] origin-left z-[9999] pointer-events-none"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
