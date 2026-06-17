import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 150, damping: 18, mass: 0.5 });
  const ringY = useSpring(dotY, { stiffness: 150, damping: 18, mass: 0.5 });
  const ringScale = useMotionValue(1);
  const dotScale = useMotionValue(1);
  const isVisible = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!isVisible.current) isVisible.current = true;
    };

    const handleEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const cursor = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (cursor === 'link' || cursor === 'button') {
        ringScale.set(1.8);
        dotScale.set(0.4);
      }
    };

    const handleLeave = () => {
      ringScale.set(1);
      dotScale.set(1);
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseenter', handleEnter, true);
    document.addEventListener('mouseleave', handleLeave, true);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseenter', handleEnter, true);
      document.removeEventListener('mouseleave', handleLeave, true);
    };
  }, [dotX, dotY, ringScale, dotScale]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998]" aria-hidden>
      {/* Ring */}
      <motion.div
        className="absolute rounded-full border border-[#2dd4bf]/60"
        style={{
          width: 32,
          height: 32,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          scale: ringScale,
        }}
      />
      {/* Dot */}
      <motion.div
        className="absolute rounded-full bg-[#2dd4bf]"
        style={{
          width: 6,
          height: 6,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          scale: dotScale,
        }}
      />
    </div>
  );
}
