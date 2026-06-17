import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, BookOpen, Microscope, Zap, Building } from 'lucide-react';

const researchAreas = [
  {
    num: '01',
    title: 'British DoE Concrete Mix Design Procedure Using Python',
    status: 'Published',
    publications: 1,
    description: 'Developed a Python algorithm automating the British DoE concrete mix design procedure by converting empirical charts and interpolation tables into linear and polynomial equations, eliminating manual computation error. Validated against manual DoE calculations and published datasets across multiple design examples, percentage errors ranged from 0.65% to 3.0%, with a mean absolute error of 4.3%. Resulted in a peer-reviewed publication in the Nile Journal of Engineering and Applied Science (2025). DOI: 10.5455/njeas.238594',
    keywords: ['Python', 'British DoE Method', 'Concrete Mix Design', 'Algorithm Development'],
  },
  {
    num: '02',
    title: 'Pavement Distress Detection Using Deep Learning',
    status: 'Under Review',
    publications: 1,
    description: 'Collaborative research using images collected in Kaduna, Nigeria. Designed and trained a Convolutional Neural Network on a dataset of 30,000 labelled pavement images, achieving distress classification across multiple failure types. Built a mobile application integrating the exported TensorFlow Lite model with real-time GPS tagging, detection logging, and Google Maps visualisation of historical distress locations. Demonstrates the viability of deep learning for scalable, low-cost pavement condition monitoring in infrastructure-constrained environments. Under review, 2026.',
    keywords: ['CNN', 'TensorFlow Lite', 'OpenCV', 'FastAPI', 'Google Maps SDK', 'Infrastructure'],
  },
  {
    num: '03',
    title: 'Concrete Mix Design Using Machine Learning',
    status: 'Completed',
    publications: 0,
    description: 'Case study of Shiroro, Dama, and Gidan Mangoro communities, Niger State. Developed a Random Forest ensemble model trained on 712 real-world mix design records to simultaneously predict concrete mix ratios. Benchmarked four algorithms (Linear Regression, Decision Tree, Random Forest, XGBoost). Random Forest achieved R² = 0.91 and MAE = 0.08, confirmed stable via 5-fold cross-validation. Fine fraction (importance: 0.31) and paste volume (0.18) identified as dominant predictors.',
    keywords: ['Random Forest', 'Scikit-Learn', 'Cross-Validation', 'Feature Engineering', 'Civil Engineering'],
  },
  {
    num: '04',
    title: 'BuildCore, Sustainable Construction Management Platform',
    status: 'Ongoing',
    publications: 0,
    description: 'Developing BuildCore, a construction management platform integrating Bills of Quantities (BoQ) with embodied carbon accounting to quantify project emissions and potential carbon credit generation. Constructing an extensible material database incorporating lifecycle assessment (LCA) metrics and AI/ML optimisation models for adaptive material selection aligned with net-zero construction targets. Designing an intelligent material substitution framework recommending lower-carbon alternatives guided by performance, cost, and environmental constraints.',
    keywords: ['Django', 'React Native', 'LCA', 'Embodied Carbon', 'AI Optimisation', 'Net-Zero'],
  },
];

const publications = [
  {
    title: 'Development of a Simplified Methodology for British DoE Concrete Mix Design Procedure Using Python',
    journal: 'Nile Journal of Engineering and Applied Science',
    year: '2025',
    type: 'Research Paper',
    status: 'Published',
    link: 'https://doi.org/10.5455/njeas.238594',
  },
  {
    title: 'Pavement Distress Detection Using Deep Learning',
    journal: 'Under Review',
    year: '2026',
    type: 'Research Paper',
    status: 'Under Review',
    link: '',
  },
];

const interests = [
  { icon: Microscope, label: 'AI in Civil Engineering', sub: 'ML and deep learning for infrastructure assessment' },
  { icon: Zap, label: 'Carbon Accounting', sub: 'Embodied carbon quantification and net-zero construction' },
  { icon: Building, label: 'Sustainable Design', sub: 'LCA-driven material selection and BoQ optimisation' },
  { icon: BookOpen, label: 'Computer Vision', sub: 'CNN-based defect detection for road and structural assets' },
];

const statusDot: Record<string, string> = {
  Published: 'bg-green-400',
  Ongoing: 'bg-[#2dd4bf]',
  Completed: 'bg-[#2dd4bf]',
  'In Progress': 'bg-amber-400',
  'Under Review': 'bg-amber-400',
  Presented: 'bg-[#2dd4bf]',
};

function ResearchRow({ area, index }: { area: typeof researchAreas[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-white/5 last:border-0"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start md:items-center gap-6 py-5 text-left group"
        data-cursor="button"
      >
        <span className="text-2xl font-extrabold font-mono text-[#888] group-hover:text-[#2dd4bf]/60 transition-colors shrink-0 w-10">
          {area.num}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${statusDot[area.status] ?? 'bg-[#555]'}`} />
            <span className="text-xs font-mono text-[#b8b8b8]">{area.status}</span>
          </div>
          <h3 className="text-[#f0f0f0] font-semibold group-hover:text-[#2dd4bf] transition-colors duration-200">
            {area.title}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[#888] shrink-0"
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 ml-16">
              <p className="text-[#c0c0c0] text-sm leading-relaxed mb-4">{area.description}</p>
              <div className="flex flex-wrap gap-2">
                {area.keywords.map((k) => (
                  <span key={k} className="text-[11px] font-mono px-2.5 py-1 border border-white/15 rounded-full text-[#a0a0a0]">{k}</span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Research() {
  return (
    <section id="research" className="py-32 bg-[#0f0f0f]">
      <div className="max-w-[1400px] mx-auto px-8">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.15em] text-[#2dd4bf] mb-3">Academic</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-[#f0f0f0]">
            Research & Innovation
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16">

          {/* Research accordion */}
          <div>
            {researchAreas.map((area, i) => (
              <ResearchRow key={area.num} area={area} index={i} />
            ))}
          </div>

          {/* Publications + interests */}
          <div className="space-y-10">

            {/* Publications */}
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.1em] text-[#2dd4bf]/70 mb-5">Publications</p>
              <div className="space-y-0">
                {publications.map((pub, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="py-4 border-b border-white/5 last:border-0"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[#f0f0f0] text-sm font-medium leading-snug mb-2">{pub.title}</p>
                        <p className="text-xs text-[#a0a0a0] font-mono">{pub.journal} · {pub.year}</p>
                      </div>
                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="link"
                          className="text-[#888] hover:text-[#2dd4bf] transition-colors shrink-0 mt-0.5"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${statusDot[pub.status] ?? 'bg-[#555]'}`} />
                      <span className="text-xs text-[#b8b8b8]">{pub.status}</span>
                      <span className="text-xs text-[#a0a0a0] border border-white/15 rounded-full px-2 py-0.5 font-mono">{pub.type}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Research interests */}
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.1em] text-[#2dd4bf]/70 mb-5">Research Interests</p>
              <div className="grid grid-cols-2 gap-4">
                {interests.map(({ icon: Icon, label, sub }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-[#141414] border border-white/5 rounded-xl p-4"
                  >
                    <Icon size={16} className="text-[#2dd4bf] mb-3" />
                    <p className="text-[#f0f0f0] text-sm font-semibold mb-1">{label}</p>
                    <p className="text-xs text-[#a0a0a0] leading-snug">{sub}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
