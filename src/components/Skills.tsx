import { motion } from 'framer-motion';
import AnimatedCounter from './ui/AnimatedCounter';

const metrics = [
  { target: 5, suffix: '+', label: 'Years Experience' },
  { target: 30, suffix: '+', label: 'Projects Completed' },
  { target: 2, suffix: '', label: 'Published / Under-Review Papers' },
  { target: 180, suffix: '+', label: 'Students Taught' },
];

const skillDomains = [
  {
    domain: 'Languages',
    tags: ['Python', 'JavaScript', 'TypeScript', 'Dart', 'Go', 'SQL'],
  },
  {
    domain: 'Frontend',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'ShadCN UI', 'Bootstrap', 'Sass'],
  },
  {
    domain: 'Backend',
    tags: ['Django', 'Django REST Framework', 'Node.js', 'Express', 'NestJS', 'FastAPI', 'Celery'],
  },
  {
    domain: 'Mobile',
    tags: ['React Native', 'Flutter', 'Expo', 'TensorFlow Lite'],
  },
  {
    domain: 'AI / ML',
    tags: ['TensorFlow', 'Scikit-Learn', 'Pandas', 'NumPy', 'OpenCV', 'MATLAB', 'Random Forest', 'CNN', 'Joblib'],
  },
  {
    domain: 'Databases',
    tags: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Supabase', 'Neon'],
  },
  {
    domain: 'DevOps & Tools',
    tags: ['Git/GitHub', 'Docker', 'AWS', 'Azure', 'Ubuntu Server', 'CI/CD'],
  },
  {
    domain: 'Engineering',
    tags: ['AutoCAD', 'Civil 3D', 'Revit (BIM)', 'Prota-Structure', 'Robot Structural', 'Manual Calculations', 'GIS'],
  },
  {
    domain: 'Sustainability',
    tags: ['EPA WARM v16', 'DEFRA Emission Factors', 'IPCC GWP', 'LCA', 'Scope 1/2/3', 'Embodied Carbon', 'GHG Protocol'],
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-8">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.15em] text-[#2dd4bf] mb-3">Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-[#f0f0f0]">
            Skills & Expertise
          </h2>
        </motion.div>

        {/* Metric tiles */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {metrics.map(({ target, suffix, label }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="bg-[#141414] border border-white/7 rounded-xl p-6"
            >
              <div className="text-5xl font-extrabold text-[#2dd4bf] tracking-[-0.03em] mb-2">
                <AnimatedCounter target={target} suffix={suffix} />
              </div>
              <p className="text-sm text-[#b8b8b8]">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill domain rows */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {skillDomains.map(({ domain, tags }) => (
            <motion.div
              key={domain}
              variants={itemVariants}
              className="flex flex-col sm:flex-row sm:items-start gap-4 pb-8 border-b border-white/5 last:border-0"
            >
              <div className="w-36 shrink-0 pt-1">
                <span className="text-xs font-mono uppercase tracking-[0.1em] text-[#2dd4bf]/70">{domain}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ borderColor: 'rgba(45,212,191,0.6)', color: '#f0f0f0' }}
                    className="text-[13px] font-mono px-3 py-1.5 border border-white/15 rounded-full text-[#c8c8c8] transition-colors duration-200"
                    data-cursor="link"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
