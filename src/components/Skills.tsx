import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Code2, Layers, Server, Smartphone, Brain, Database, Cloud, Ruler, Leaf, HardHat, FlaskConical,
  type LucideIcon,
} from 'lucide-react';

const skillDomains: { domain: string; icon: LucideIcon; tags: string[] }[] = [
  { domain: 'Languages', icon: Code2, tags: ['Python', 'C++', 'MATLAB', 'JavaScript', 'TypeScript', 'Dart', 'Go', 'SQL'] },
  { domain: 'Frontend', icon: Layers, tags: ['React', 'Next.js', 'Tailwind CSS', 'ShadCN UI', 'Bootstrap', 'Sass'] },
  { domain: 'Backend', icon: Server, tags: ['Django', 'Django REST Framework', 'Node.js', 'Express', 'NestJS', 'FastAPI', 'Celery'] },
  { domain: 'Mobile', icon: Smartphone, tags: ['React Native', 'Flutter', 'Expo', 'TensorFlow Lite'] },
  { domain: 'AI / ML', icon: Brain, tags: ['TensorFlow', 'Scikit-Learn Pipelines', 'Pandas', 'NumPy', 'OpenCV', 'CNN', 'ANN', 'Random Forest', 'Feature Engineering', 'Cross-validation', 'RAG pipelines', 'Jupyter', 'MATLAB', 'Joblib'] },
  { domain: 'Databases', icon: Database, tags: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Supabase', 'Neon'] },
  { domain: 'DevOps & Tools', icon: Cloud, tags: ['Git/GitHub', 'Docker', 'AWS', 'Azure', 'Ubuntu Server', 'CI/CD'] },
  { domain: 'Engineering', icon: Ruler, tags: ['AutoCAD', 'Civil 3D', 'Revit (BIM)', 'Prota-Structure', 'Autodesk Robot', 'Orion', 'Manual Design Calculations', 'QGIS', 'ArcGIS'] },
  { domain: 'Construction', icon: HardHat, tags: ['Primavera P6', 'MS Project', 'Inventory Management', 'Site Supervision'] },
  { domain: 'Sustainability', icon: Leaf, tags: ['EPA WARM v16', 'DEFRA Emission Factors', 'IPCC GWP', 'LCA', 'Scope 1/2/3', 'Embodied Carbon', 'GHG Protocol'] },
  { domain: 'Research', icon: FlaskConical, tags: ['Research writing and peer-reviewed publication', 'Experimental design and lab testing', 'Technical documentation', 'Statistical analysis', 'Data visualisation'] },
];

// Brand logos for the tools that have one
const logos: Record<string, string> = {
  "Python": "https://cdn.simpleicons.org/python/3776AB",
  "C++": "https://cdn.simpleicons.org/cplusplus/00599C",
  "JavaScript": "https://cdn.simpleicons.org/javascript/F7DF1E",
  "TypeScript": "https://cdn.simpleicons.org/typescript/3178C6",
  "Dart": "https://cdn.simpleicons.org/dart/0175C2",
  "Go": "https://cdn.simpleicons.org/go/00ADD8",
  "React": "https://cdn.simpleicons.org/react/61DAFB",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs/ffffff",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "ShadCN UI": "https://cdn.simpleicons.org/shadcnui/ffffff",
  "Bootstrap": "https://cdn.simpleicons.org/bootstrap/7952B3",
  "Sass": "https://cdn.simpleicons.org/sass/CC6699",
  "Django": "https://cdn.simpleicons.org/django/ffffff",
  "Django REST Framework": "https://cdn.simpleicons.org/django/ffffff",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs/5FA04E",
  "Express": "https://cdn.simpleicons.org/express/ffffff",
  "NestJS": "https://cdn.simpleicons.org/nestjs/E0234E",
  "FastAPI": "https://cdn.simpleicons.org/fastapi/009688",
  "Celery": "https://cdn.simpleicons.org/celery/37814A",
  "React Native": "https://cdn.simpleicons.org/react/61DAFB",
  "Flutter": "https://cdn.simpleicons.org/flutter/02569B",
  "Expo": "https://cdn.simpleicons.org/expo/ffffff",
  "TensorFlow Lite": "https://cdn.simpleicons.org/tensorflow/FF6F00",
  "TensorFlow": "https://cdn.simpleicons.org/tensorflow/FF6F00",
  "Scikit-Learn": "https://cdn.simpleicons.org/scikitlearn/F7931E",
  "Scikit-Learn Pipelines": "https://cdn.simpleicons.org/scikitlearn/F7931E",
  "Pandas": "https://cdn.simpleicons.org/pandas/ffffff",
  "NumPy": "https://cdn.simpleicons.org/numpy/ffffff",
  "OpenCV": "https://cdn.simpleicons.org/opencv/5C3EE8",
  "Jupyter": "https://cdn.simpleicons.org/jupyter/F37626",
  "PostgreSQL": "https://cdn.simpleicons.org/postgresql/4169E1",
  "MongoDB": "https://cdn.simpleicons.org/mongodb/47A248",
  "MySQL": "https://cdn.simpleicons.org/mysql/4479A1",
  "Firebase": "https://cdn.simpleicons.org/firebase/DD2C00",
  "Supabase": "https://cdn.simpleicons.org/supabase/3FCF8E",
  "Neon": "https://cdn.simpleicons.org/neon/34D59A",
  "Git/GitHub": "https://cdn.simpleicons.org/git/F03C2E",
  "Docker": "https://cdn.simpleicons.org/docker/2496ED",
  "Ubuntu Server": "https://cdn.simpleicons.org/ubuntu/E95420",
  "CI/CD": "https://cdn.simpleicons.org/githubactions/2088FF",
  "AutoCAD": "https://cdn.simpleicons.org/autocad/ffffff",
  "Civil 3D": "https://cdn.simpleicons.org/autodesk/ffffff",
  "Revit (BIM)": "https://cdn.simpleicons.org/autodeskrevit/186BFF",
  "Autodesk Robot": "https://cdn.simpleicons.org/autodesk/ffffff",
  "QGIS": "https://cdn.simpleicons.org/qgis/589632",
  "ArcGIS": "https://cdn.simpleicons.org/arcgis/2C7AC3",
  "MATLAB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
  "Azure": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
};

// Badges fan out in an arc above the open toolbox
const N = skillDomains.length;
const badgePos = skillDomains.map((_, i) => {
  const theta = Math.PI - (Math.PI / (N - 1)) * i;
  return { x: 260 + 215 * Math.cos(theta), y: 268 - 185 * Math.sin(theta) };
});

function Toolbox({
  open, selected, onSelect,
}: { open: boolean; selected: number; onSelect: (i: number) => void }) {
  return (
    <svg viewBox="0 0 520 440" className="h-auto w-full" role="img" aria-label="An open toolbox with my skill areas flying out of it">
      <defs>
        <linearGradient id="tb-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a34862" />
          <stop offset="1" stopColor="#5c2335" />
        </linearGradient>
        <linearGradient id="tb-lid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#b5546e" />
          <stop offset="1" stopColor="#8a3650" />
        </linearGradient>
        <linearGradient id="tb-metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f1e9de" />
          <stop offset="1" stopColor="#a79d8d" />
        </linearGradient>
        <radialGradient id="tb-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ff8fb0" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ff8fb0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="260" cy="412" rx="170" ry="14" fill="#000" opacity="0.45" />

      {/* Glow spilling out of the box */}
      <motion.ellipse
        cx="260" cy="262" rx="230" ry="120" fill="url(#tb-glow)"
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      />

      {/* Open lid, standing up behind the box */}
      <motion.g
        style={{ originX: 0.5, originY: 1 }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: open ? 1 : 0, opacity: open ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 110, damping: 14, delay: 0.1 }}
      >
        <rect x="150" y="140" width="220" height="118" rx="14" fill="url(#tb-lid)" />
        <rect x="162" y="152" width="196" height="94" rx="8" fill="none" stroke="#fff" strokeOpacity="0.18" strokeWidth="2" />
      </motion.g>

      {/* Dark inside of the box */}
      <rect x="122" y="252" width="276" height="26" rx="8" fill="#1a0d12" />

      {/* Skill badges, rising out of the box */}
      {skillDomains.map(({ domain, icon: Icon }, i) => {
        const { x, y } = badgePos[i];
        const active = i === selected;
        return (
          <motion.g
            key={domain}
            initial={{ x: 260 - x, y: 268 - y, scale: 0.2, opacity: 0 }}
            animate={open ? { x: 0, y: 0, scale: 1, opacity: 1 } : { x: 260 - x, y: 268 - y, scale: 0.2, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 90, damping: 12, delay: open ? 0.45 + i * 0.09 : 0 }}
          >
            <motion.g
              animate={{ y: [0, -7, 0], scale: active ? 1.25 : 1 }}
              transition={{
                y: { duration: 3 + (i % 3) * 0.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 },
                scale: { type: 'spring', stiffness: 200, damping: 14 },
              }}
              style={{ cursor: 'pointer' }}
              onClick={() => onSelect(i)}
              onMouseEnter={() => onSelect(i)}
            >
              <circle cx={x} cy={y} r="34" fill={active ? '#8f3d56' : '#1c1625'} stroke={active ? '#ffd1de' : '#b5546e'} strokeOpacity={active ? 1 : 0.55} strokeWidth="2" />
              {active && <circle cx={x} cy={y} r="42" fill="none" stroke="#ff8fb0" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="4 5" />}
              <Icon x={x - 15} y={y - 15} size={30} stroke="#fff" strokeWidth={1.8} />
            </motion.g>
          </motion.g>
        );
      })}

      {/* Front of the toolbox */}
      <rect x="110" y="268" width="300" height="135" rx="16" fill="url(#tb-body)" />
      <rect x="110" y="268" width="300" height="16" rx="8" fill="#fff" opacity="0.14" />
      <line x1="122" y1="338" x2="398" y2="338" stroke="#2b0f19" strokeOpacity="0.55" strokeWidth="2" />
      <rect x="215" y="352" width="90" height="12" rx="6" fill="url(#tb-metal)" />
      <rect x="215" y="300" width="90" height="12" rx="6" fill="url(#tb-metal)" />
      {/* Corner brackets */}
      {[116, 386].map((cx) => (
        <g key={cx}>
          <rect x={cx - 6} y="270" width="24" height="26" rx="5" fill="url(#tb-metal)" />
          <rect x={cx - 6} y="376" width="24" height="26" rx="5" fill="url(#tb-metal)" />
        </g>
      ))}
      <circle cx="260" cy="326" r="5" fill="#2b0f19" opacity="0.5" />

      {/* Closed lid, which lifts away once the box is open */}
      <motion.g
        initial={false}
        animate={{ y: open ? -34 : 0, opacity: open ? 0 : 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <rect x="104" y="236" width="312" height="36" rx="14" fill="url(#tb-lid)" />
        <rect x="104" y="236" width="312" height="10" rx="6" fill="#fff" opacity="0.16" />
        <path d="M212 238 q48 -46 96 0" fill="none" stroke="url(#tb-metal)" strokeWidth="8" strokeLinecap="round" />
      </motion.g>
    </svg>
  );
}

export default function Skills() {
  const [selected, setSelected] = useState(0);
  const [touched, setTouched] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { once: true, amount: 0.35 });
  const current = skillDomains[selected];

  const pick = (i: number) => {
    setTouched(true);
    setSelected(i);
  };

  // Cycle through the tools until the visitor takes over
  useEffect(() => {
    if (!inView || touched) return;
    const t = setInterval(() => setSelected((s) => (s + 1) % N), 3200);
    return () => clearInterval(t);
  }, [inView, touched]);

  return (
    <section id="skills" className="relative overflow-hidden bg-[#080808] py-32">
      <div className="pointer-events-none absolute -right-40 top-40 h-[480px] w-[480px] rounded-full bg-[#b5546e]/[0.07] blur-[140px]" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-3 text-xs font-mono uppercase tracking-[0.15em] text-[#b5546e]">Toolbox</p>
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-[#f0f0f0] md:text-5xl">Skills</h2>
        </motion.div>

        {/* The toolbox */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div ref={stageRef} className="mx-auto w-full max-w-[560px]">
            <Toolbox open={inView} selected={selected} onSelect={pick} />
          </div>

          <div>
            <p className="mb-4 text-xs font-mono uppercase tracking-[0.12em] text-[#888]">
              Pick a tool from the box
            </p>
            <div className="mb-6 flex flex-wrap gap-2">
              {skillDomains.map(({ domain, icon: Icon }, i) => (
                <button
                  key={domain}
                  onClick={() => pick(i)}
                  className={`flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                    i === selected
                      ? 'border-[#b5546e] bg-[#b5546e]/15 text-[#f6d3dd]'
                      : 'border-white/10 text-[#a0a0a0] hover:border-white/30 hover:text-[#f0f0f0]'
                  }`}
                >
                  <Icon size={14} />
                  {domain}
                </button>
              ))}
            </div>

            <div className="min-h-[220px] rounded-2xl border border-white/[0.08] bg-[#141414] p-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.domain}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8f3d56] text-white">
                      <current.icon size={20} />
                    </span>
                    <h3 className="text-xl font-extrabold tracking-tight text-[#f0f0f0]">{current.domain}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {current.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.6, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 16, delay: i * 0.05 }}
                        className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 font-mono text-[13px] text-[#d4d4d4]"
                      >
                        {logos[tag] && (
                          <img src={logos[tag]} alt="" loading="lazy" className="h-4 w-4 shrink-0 object-contain" />
                        )}
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
