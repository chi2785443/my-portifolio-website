import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const experiences = [
  {
    num: '01',
    title: 'Civil Engineering Graduate Intern',
    company: 'Urban Shelter Limited',
    location: 'Abuja, Nigeria (On-site)',
    period: 'Sept 2025 – Present',
    type: 'Full-time',
    description: 'Structural analysis, design, and detailing of residential and commercial buildings across multiple active Abuja project sites, with hands-on site supervision.',
    achievements: [
      'Contribute to structural analysis, design, and detailing of proposed residential and commercial structures using industry-standard software across multiple active Abuja sites',
      'Participate in periodic site supervision to monitor construction progress, verify structural compliance, and liaise between design and site teams on technical issues',
    ],
  },
  {
    num: '02',
    title: 'Environmental Sustainability Software Engineer',
    company: 'EDAT Climate Data and Analytics',
    location: 'Houston, Texas (Remote)',
    period: 'Apr 2025 – Present',
    type: 'Part-time',
    description: 'Led backend architecture of a production-grade carbon accounting platform covering Scope 1, 2, and 3 emissions, running concurrently with civil engineering internship.',
    achievements: [
      'Engineered a full-stack carbon accounting platform: Scope 1, 2, 3 emissions tracking with GWP conversions (AR5 100-year basis) across stationary combustion, mobile combustion, fugitive emissions, purchased electricity, renewable energy, and CHP activities',
      'Built a waste accounting module aligned with EPA WARM v16, 61 material types, 6 management pathways (source reduction, recycling, landfilling, combustion, composting, anaerobic digestion), with full GHG, energy, labour, wages, and tax factor tracking',
      'Designed Django ORM models for 10+ activity types; engineered async task pipelines (Django + Celery) for batch emissions processing, GWP computations, and scheduled reporting',
      'Collaborated on Next.js / ShadCN UI dashboards for interactive Scope-level emissions breakdowns and trend analysis',
      'Researched EPA, DEFRA, and IPCC emission factor methodologies to inform calculation logic across all accounting modules',
    ],
  },
  {
    num: '03',
    title: 'Full Stack Developer',
    company: 'Eagle AI Labs',
    location: 'Dubai, UAE (Remote)',
    period: 'Dec 2024 – Mar 2025',
    type: 'Contract',
    description: 'Designed and shipped a crypto token platform backend with NestJS and PostgreSQL, including tokenomics logic and RAG-based AI features, within a 3-month contract.',
    achievements: [
      'Designed scalable REST APIs with NestJS and PostgreSQL for a crypto token platform supporting high-throughput transaction processing and secure data management',
      'Engineered tokenomics logic: rewards distribution systems, token vesting schedules, and secure multi-currency wallet management modules',
      'Integrated RAG-based AI features for intelligent user assistance alongside multiple third-party crypto market APIs into a unified analytics dashboard',
    ],
  },
  {
    num: '04',
    title: 'Mobile Developer',
    company: 'SureData Consulting Ltd',
    location: 'Tilbury, UK (Remote)',
    period: 'Feb 2024 – Nov 2024',
    type: 'Contract',
    description: 'Architected and shipped ChapelMate, a full-featured church management system, to both app stores, while concurrently delivering enhancements on two other live mobile products.',
    achievements: [
      'Architected and shipped ChapelMate (church management system) for iOS and Android with React Native + Expo, successfully published on the Google Play Store and Apple App Store',
      'Built the ChapelMate backend on Ubuntu using Node.js, Express, and PostgreSQL: JWT authentication, RESTful API architecture, relational schema design, and real-time data synchronisation',
      'Implemented contribution tracking, PayPal payments, and push notification systems for church administrators',
      'Delivered feature enhancements for CallUp247 (Flutter business communication app) and Kint (Flutter health management app) with API integrations',
    ],
  },
  {
    num: '05',
    title: 'Structural & Civil Engineering Intern',
    company: 'Geo-Aries Consult',
    location: 'Lagos, Nigeria (Remote)',
    period: 'Nov 2023 – Sept 2024',
    type: 'Intern',
    description: 'Executed structural analysis, design, and detailing for 13+ residential and commercial buildings across Lagos and Abuja, running concurrently with mobile development work.',
    achievements: [
      'Executed structural analysis, design, detailing, and production of structural drawings for 13+ residential and commercial buildings across Lagos and Abuja',
      'Managed concurrent project deliverables remotely, coordinating with senior engineers to meet design standards and client specifications across multiple simultaneous projects',
    ],
  },
  {
    num: '06',
    title: 'Mobile & Full Stack Developer Intern',
    company: 'Exinn Digital Technology',
    location: 'Maputo, Mozambique (Remote)',
    period: 'Nov 2023 – Jan 2024',
    type: 'Intern',
    description: 'Built a full-stack medical web app and a patient-facing mobile app with an AI powered chatbot and clinical note generator using Google Gemini.',
    achievements: [
      'Developed a full-stack medical web application for nursing mothers using TypeScript, React, NestJS, Supabase, and MongoDB, covering authentication, clinical content delivery, and personalised health guidance',
      'Built and integrated a patient-facing mobile application in React Native with an AI powered chatbot and a clinical note generator leveraging Google Gemini generative AI to reduce documentation time',
    ],
  },
  {
    num: '07',
    title: 'Students Industrial Work Experience (SIWES)',
    company: 'El-Tojjie and Associates',
    location: 'Abuja, Nigeria (On-site)',
    period: 'Sept 2023 – Feb 2024',
    type: 'SIWES',
    description: 'Conducted structural integrity assessments for 50+ buildings and geotechnical investigations on 5 construction sites across Abuja.',
    achievements: [
      'Conducted structural integrity assessments for 50+ existing buildings, evaluating load-bearing elements, identifying deficiencies, and supervising remedial works across 3 active construction sites',
      'Performed geotechnical site investigations on 5 proposed construction sites, Dynamic Cone Penetration Tests (DCPT), triaxial shear strength tests, and compaction tests, to characterise subsurface conditions for foundation design',
    ],
  },
  {
    num: '08',
    title: 'Software Developer Intern',
    company: 'Scholarly Pathways',
    location: 'Nigeria (Remote)',
    period: 'Aug 2021 – Jun 2023',
    type: 'Intern',
    description: 'Designed, built, and maintained a WordPress-based scholarship discovery platform with SEO and AdSense monetisation over a 22-month engagement.',
    achievements: [
      'Designed, developed, and deployed a WordPress-based scholarship news and updates platform with full SEO optimisation via Google Search Console to drive organic traffic growth',
      'Integrated Google AdSense monetisation, enabling the platform to generate revenue while serving scholarship discovery content to undergraduate students across Nigeria',
      'Maintained and iterated the platform over a 22-month engagement, content architecture, plugin configuration, and performance optimisation',
    ],
  },
];

function ExperienceRow({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-white/5 last:border-0"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start md:items-center gap-6 py-6 text-left group"
        data-cursor="button"
      >
        {/* Number */}
        <motion.span
          animate={{ color: open ? '#2dd4bf' : 'rgba(45,212,191,0.2)' }}
          className="text-4xl md:text-5xl font-extrabold font-mono leading-none shrink-0 w-16 transition-colors duration-200"
        >
          {exp.num}
        </motion.span>

        {/* Main info */}
        <div className="flex-1 min-w-0">
          <p className="text-[#2dd4bf] text-xs font-mono uppercase tracking-[0.08em] mb-1">{exp.company}</p>
          <h3 className="text-[#f0f0f0] font-bold text-lg leading-tight group-hover:text-[#2dd4bf] transition-colors duration-200">
            {exp.title}
          </h3>
        </div>

        {/* Right, date + type + chevron */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <span className="text-xs font-mono text-[#888] border border-white/10 rounded-full px-3 py-1">{exp.type}</span>
          <span className="text-sm text-[#888]">{exp.period}</span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-[#888]"
          >
            <ChevronDown size={16} />
          </motion.div>
        </div>
      </button>

      {/* Accordion body */}
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
            <div className="pb-6 pl-0 md:pl-22 md:ml-22 ml-0 flex flex-col md:flex-row gap-8">
              <div className="md:ml-[88px] flex-1">
                <p className="text-[#c0c0c0] text-sm leading-relaxed mb-5">{exp.description}</p>
                <div className="space-y-2">
                  {exp.achievements.map((a, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#2dd4bf] shrink-0" />
                      <p className="text-[#c0c0c0] text-sm">{a}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:ml-auto shrink-0 text-left md:text-right">
                <p className="text-xs text-[#888] font-mono">{exp.location}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start center', 'end center'] });
  const lineScaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <section id="experience" ref={sectionRef} className="py-32 bg-[#0f0f0f] relative">
      {/* Scroll-driven vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 hidden lg:block" />
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-px bg-[#2dd4bf]/40 hidden lg:block origin-top"
        style={{ scaleY: lineScaleY }}
      />

      <div className="max-w-[1400px] mx-auto px-8">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.15em] text-[#2dd4bf] mb-3">Career</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-[#f0f0f0]">
            Experience
          </h2>
        </motion.div>

        <div>
          {experiences.map((exp, i) => (
            <ExperienceRow key={exp.num} exp={exp} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
