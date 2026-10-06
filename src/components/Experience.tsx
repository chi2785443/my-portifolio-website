import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronDown, Code2, HardHat } from 'lucide-react';

const experiences = [
  {
    num: '01',
    title: 'Senior AI & Sustainability Platform Engineer',
    company: 'EDAT Climate Data and Analytics',
    location: 'Houston, Texas (Remote)',
    period: 'Apr 2026',
    type: 'Promoted',
    description: 'After a year on the platform I was asked to lead new sustainability features, and I now own the architecture, deployment and production readiness for my areas.',
    achievements: [
      'Leading development of new reporting, benchmarking and ESG data management modules',
      'Built AI forecasting and anomaly detection for energy, waste and emissions data',
      'Designed the APIs and data structures that bring finance, metering, supply chain and audit data into one platform',
      'Join customer demos and technical calls, and turn what customers ask for into engineering work',
    ],
  },
  {
    num: '02',
    title: 'Civil Engineering Graduate Intern',
    company: 'Urban Shelter Limited',
    location: 'Abuja, Nigeria (On-site)',
    period: 'Sept 2025',
    type: 'Full-time',
    description: 'Structural design work on residential and commercial buildings across active sites in Abuja.',
    achievements: [
      'Analyse, design and detail proposed residential and commercial structures with industry-standard software',
      'Visit sites regularly to check progress and structural compliance, and sort out technical issues between the design and site teams',
    ],
  },
  {
    num: '03',
    title: 'Environmental Sustainability Software Engineer',
    company: 'EDAT Climate Data and Analytics',
    location: 'Houston, Texas (Remote)',
    period: 'Apr 2025 – Apr 2026',
    type: 'Part-time',
    description: 'I led the backend of a production carbon accounting platform covering Scope 1, 2 and 3 emissions.',
    achievements: [
      'Built the Django backend that models stationary and mobile combustion, fugitive emissions, purchased electricity, renewables, water and EPA WARM v16 waste accounting, with 10+ activity-type models feeding one emission record system',
      'Stored versioned GWP results as CO₂, CH₄, N₂O and CO₂e',
      'Set up async pipelines with Django and Celery for large batch emissions runs, scheduled reports and AI-based classification and validation of incoming data',
      'Helped build the Next.js and ShadCN dashboards for Scope-level emissions and trends',
    ],
  },
  {
    num: '04',
    title: 'Full Stack Developer',
    company: 'Eagle AI Labs',
    location: 'Dubai, UAE (Remote)',
    period: 'Dec 2024 – Mar 2025',
    type: 'Contract',
    description: 'Built the backend and analytics dashboard for a crypto token platform in a three-month contract.',
    achievements: [
      'Designed REST APIs in NestJS and PostgreSQL, including rewards distribution, token vesting schedules and multi-currency wallets',
      'Added RAG-based AI assistance for users, and pulled several crypto market APIs (prices, portfolio tracking) into one dashboard',
    ],
  },
  {
    num: '05',
    title: 'Mobile Developer',
    company: 'SureData Consulting Ltd',
    location: 'Tilbury, UK (Remote)',
    period: 'Feb 2024 – Nov 2024',
    type: 'Contract',
    description: 'I built ChapelMate, a church management app, and got it onto both app stores.',
    achievements: [
      'Built ChapelMate for iOS and Android with React Native and Expo, plus a Node.js, Express and PostgreSQL backend on Ubuntu with JWT auth and real-time sync',
      'Added contribution tracking, PayPal payments and push notifications so church admins can run membership and finances in one place',
      'Shipped feature work for CallUp247 (Flutter messaging app) and Kint (Flutter health app handling patient data)',
    ],
  },
  {
    num: '06',
    title: 'Structural & Civil Engineering Intern',
    company: 'Geo-Aries Consult',
    location: 'Lagos, Nigeria (Remote)',
    period: 'Nov 2023 – Sept 2024',
    type: 'Intern',
    description: 'Structural design and drawings for 13+ residential and commercial buildings in Lagos and Abuja, alongside my mobile development work.',
    achievements: [
      'Did the analysis, design, detailing and structural drawings for 13+ buildings',
      'Worked remotely with senior engineers to hit design standards and client requirements across several projects at once',
    ],
  },
  {
    num: '07',
    title: 'Mobile & Full Stack Developer Intern',
    company: 'Exinn Digital Technology',
    location: 'Maputo, Mozambique (Remote)',
    period: 'Nov 2023 – Jan 2024',
    type: 'Intern',
    description: 'Worked on a medical web app and a patient mobile app with AI features.',
    achievements: [
      'Built a web app for nursing mothers with TypeScript, React, NestJS, Supabase and MongoDB: sign-in, clinical content and health guidance based on the user\'s own data',
      'Built a React Native patient app with an AI chatbot for doctor and patient chats, and a Gemini-based tool that drafts clinical notes from those conversations',
    ],
  },
  {
    num: '08',
    title: 'Students Industrial Work Experience (SIWES)',
    company: 'El-Tojjie and Associates',
    location: 'Abuja, Nigeria (On-site)',
    period: 'Sept 2023 – Feb 2024',
    type: 'SIWES',
    description: 'Hands-on structural and geotechnical work on sites around Abuja.',
    achievements: [
      'Assessed the structural condition of 50+ existing buildings, flagged problems and supervised repairs on 3 active sites',
      'Ran geotechnical investigations on 5 proposed sites, including dynamic cone penetration, triaxial shear and compaction tests, to inform foundation design',
    ],
  },
  {
    num: '09',
    title: 'Software Engineering Trainer',
    company: 'A-Z New Age Tutor',
    location: 'Nigeria (On-site)',
    period: 'Jun 2023 – Oct 2023',
    type: 'Part-time',
    description: 'I taught five undergraduates software engineering over four months.',
    achievements: [
      'Wrote and delivered the curriculum: Python, JavaScript, React, Node.js and a first look at machine learning',
      'Used project-based exercises, and every student finished a working end-to-end project',
    ],
  },
  {
    num: '10',
    title: 'Software Developer Intern',
    company: 'Scholarly Pathways',
    location: 'Nigeria (Remote)',
    period: 'Aug 2021 – Jun 2023',
    type: 'Intern',
    description: 'I built and ran a scholarship news site for Nigerian undergraduates for 22 months.',
    achievements: [
      'Designed, built and launched the WordPress site, with SEO and Google Search Console to get it indexed',
      'Added Google AdSense so the site earned revenue as well as helping students',
      'Kept it going over 22 months: content structure, plugins and performance',
    ],
  },
];

// Engineering roles ride below the road, software roles above it
const civilRoles = new Set(['02', '06', '08']);

// Newest on the left, heading back in time to the right
const stops = experiences;
const COL = 330;

function Sign({ icon: Icon, label, arrow }: { icon: typeof Code2; label: string; arrow: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border-2 border-white/80 bg-[#7a2e45] px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
      <Icon size={14} /> {label} <span aria-hidden>{arrow}</span>
    </span>
  );
}

function StopCard({
  exp, civil, active, open, onSelect,
}: { exp: typeof experiences[0]; civil: boolean; active: boolean; open: boolean; onSelect: () => void }) {
  const tag = civil
    ? 'text-[#e6c79a] border-[#e6c79a]/30 bg-[#e6c79a]/10'
    : 'text-[#e7a3b5] border-[#b5546e]/30 bg-[#b5546e]/10';
  return (
    <button
      onClick={onSelect}
      aria-expanded={open}
      className={`relative w-[300px] rounded-2xl border bg-[#141414] p-5 text-left transition-all duration-300 ${
        active ? 'border-[#b5546e]/60 shadow-[0_0_40px_rgba(181,84,110,0.15)]' : 'border-white/[0.07] hover:border-white/25'
      }`}
    >
      {/* Connector to the road */}
      <span
        className={`absolute left-1/2 h-6 w-px -translate-x-1/2 ${civil ? '-top-6' : '-bottom-6'} ${
          active ? 'bg-[#b5546e]' : 'bg-[#b5546e]/40'
        }`}
      />
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-[0.08em] ${tag}`}>
          {civil ? 'Engineering' : 'Software'}
        </span>
        <span className="text-xs font-mono text-[#888]">{exp.period}</span>
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold leading-tight tracking-tight text-[#f0f0f0]">{exp.title}</h3>
          <p className="mt-1 text-sm text-[#b5546e]">{exp.company}</p>
        </div>
        <motion.span animate={{ rotate: open ? 180 : 0 }} className="mt-0.5 shrink-0 text-[#888]">
          <ChevronDown size={18} />
        </motion.span>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-sm leading-relaxed text-[#c8c8c8]">{exp.description}</p>
            <ul className="mt-3 space-y-2">
              {exp.achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[#a0a0a0]">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#b5546e]" />
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function Experience() {
  const [sel, setSel] = useState(0);
  const [openStops, setOpenStops] = useState<Set<string>>(new Set());
  const toggle = (num: string) =>
    setOpenStops((prev) => {
      const next = new Set(prev);
      if (next.has(num)) next.delete(num);
      else next.add(num);
      return next;
    });
  const scrollRef = useRef<HTMLDivElement>(null);
  const x = sel * COL + COL / 2;

  // Keep the selected stop centred in view
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: Math.max(0, x - el.clientWidth / 2), behavior: 'smooth' });
  }, [x]);

  return (
    <section id="experience" className="relative overflow-hidden bg-[#0f0f0f] py-32">
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <p className="mb-3 text-xs font-mono uppercase tracking-[0.15em] text-[#b5546e]">Career</p>
            <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-[#f0f0f0] md:text-5xl">The road so far</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#a0a0a0] md:text-base">
              One road, two lanes. Software runs above it and engineering below. Click a stop to open it and see what I did there.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setSel((v) => Math.max(0, v - 1))}
              disabled={sel === 0}
              aria-label="Newer role"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#141414] text-[#f0f0f0] transition-colors hover:border-[#b5546e]/60 disabled:opacity-30"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => setSel((v) => Math.min(stops.length - 1, v + 1))}
              disabled={sel === stops.length - 1}
              aria-label="Older role"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8f3d56] text-white transition-colors hover:bg-[#a34862] disabled:opacity-30"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        <div className="mb-6 flex flex-wrap gap-3">
          <Sign icon={Code2} label="Software" arrow="↑" />
        </div>
      </div>

      {/* Horizontal road */}
      <div
        ref={scrollRef}
        className="overflow-x-auto pb-4 pl-6 md:pl-[max(2rem,calc((100vw-1400px)/2+2rem))] [mask-image:linear-gradient(to_right,transparent,#000_40px,#000_calc(100%-40px),transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div
          className="mx-auto grid px-0"
          style={{
            width: stops.length * COL,
            gridTemplateColumns: `repeat(${stops.length}, ${COL}px)`,
            gridTemplateRows: 'auto 72px auto',
          }}
        >
          {/* The road */}
          <div className="relative z-0 self-center" style={{ gridColumn: '1 / -1', gridRow: 2 }}>
            <div className="h-9 rounded-full border-y-2 border-white/10 bg-gradient-to-r from-[#181818] via-[#121212] to-[#181818]" />
            <div className="absolute inset-x-3 top-1/2 h-0.5 -translate-y-1/2 bg-[repeating-linear-gradient(to_right,#4a4a4a_0_14px,transparent_14px_28px)]" />
            <motion.div
              initial={false}
              animate={{ width: x }}
              transition={{ type: 'spring', stiffness: 70, damping: 18 }}
              className="absolute left-3 top-1/2 h-0.5 -translate-y-1/2 overflow-hidden bg-[repeating-linear-gradient(to_right,#d4607f_0_14px,transparent_14px_28px)]"
            />
            <motion.div
              initial={false}
              animate={{ left: x }}
              transition={{ type: 'spring', stiffness: 70, damping: 18 }}
              className="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
            >
              <span className="absolute inset-0 -m-2 animate-ping rounded-full bg-[#b5546e]/40" />
              <span className="relative block h-5 w-5 rounded-full border-2 border-white bg-[#b5546e] shadow-[0_0_24px_rgba(181,84,110,0.9)]" />
            </motion.div>
          </div>

          {stops.map((exp, i) => {
            const civil = civilRoles.has(exp.num);
            const active = i === sel;
            return (
              <div key={exp.num} className="contents">
                <button
                  onClick={() => setSel(i)}
                  aria-label={`${exp.title}, ${exp.period}`}
                  className="relative z-10 flex items-center justify-center self-center"
                  style={{ gridColumn: i + 1, gridRow: 2 }}
                >
                  <span
                    className={`block h-3.5 w-3.5 rounded-full border-2 transition-colors ${
                      active ? 'border-transparent bg-transparent' : 'border-[#b5546e] bg-[#0f0f0f] hover:bg-[#b5546e]'
                    }`}
                  />
                </button>
                <motion.div
                  initial={{ opacity: 0, y: civil ? 24 : -24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.05 * (i % 4), ease: [0.16, 1, 0.3, 1] }}
                  className={`flex justify-center ${civil ? 'items-start pt-6' : 'items-end pb-6'}`}
                  style={{ gridColumn: i + 1, gridRow: civil ? 3 : 1 }}
                >
                  <StopCard
                    exp={exp}
                    civil={civil}
                    active={active}
                    open={openStops.has(exp.num)}
                    onSelect={() => {
                      setSel(i);
                      toggle(exp.num);
                    }}
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Engineering lane label sits below the road */}
      <div className="relative mx-auto mt-6 max-w-[1400px] px-6 md:px-8">
        <Sign icon={HardHat} label="Engineering" arrow="↓" />
      </div>
    </section>
  );
}
