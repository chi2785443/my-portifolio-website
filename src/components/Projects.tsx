import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink, Github, Filter, Smartphone,
  Globe, Wrench, Brain, ArrowUpRight, ChevronLeft, ChevronRight,
} from 'lucide-react';

const filters = [
  { name: 'All', icon: Filter },
  { name: 'Web Apps', icon: Globe },
  { name: 'Mobile Apps', icon: Smartphone },
  { name: 'Engineering Tools', icon: Wrench },
  { name: 'AI Models', icon: Brain },
];

const categoryAccent: Record<string, string> = {
  'AI Models':         '#a78bfa',
  'Web Apps':          '#38bdf8',
  'Mobile Apps':       '#ff6b9d',
  'Engineering Tools': '#fbbf24',
};

// Bright card backdrops, one per category
const categoryTint: Record<string, string> = {
  'AI Models':         '#d8ccff',
  'Web Apps':          '#bfe3ff',
  'Mobile Apps':       '#ffc6da',
  'Engineering Tools': '#ffe3a3',
};

/* ─── SVG Illustrations ──────────────────────────────────────── */

function ConcreteIllustration({ accent }: { accent: string }) {
  const particles: [number, number, number][] = [
    [40,35,16],[120,28,12],[196,42,18],[70,78,9],
    [152,72,14],[218,88,10],[30,112,13],[102,118,18],
    [172,124,11],[57,148,9],[138,143,15],[208,138,12],
  ];
  const smalls: [number,number][] = [
    [88,50],[162,44],[28,68],[186,64],[113,97],[240,58],[75,132],[230,112],[12,93],
  ];
  return (
    <svg viewBox="0 0 260 165" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {particles.map(([cx,cy,r],i) => (
        <circle key={i} cx={cx} cy={cy} r={r}
          fill={i===1 ? accent+'1a' : 'rgba(255,255,255,0.04)'}
          stroke={i===1 ? accent : 'rgba(255,255,255,0.09)'} strokeWidth="1" />
      ))}
      {smalls.map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="4.5" fill="rgba(255,255,255,0.06)" />
      ))}
      <line x1="120" y1="28" x2="196" y2="42" stroke={accent} strokeWidth="0.75" strokeOpacity="0.4" strokeDasharray="3 2"/>
      <line x1="120" y1="28" x2="40"  y2="35" stroke={accent} strokeWidth="0.75" strokeOpacity="0.4" strokeDasharray="3 2"/>
      <line x1="120" y1="28" x2="152" y2="72" stroke={accent} strokeWidth="0.75" strokeOpacity="0.4" strokeDasharray="3 2"/>
      <text x="10" y="160" fontSize="8" fontFamily="monospace" fill="rgba(255,255,255,0.18)" letterSpacing="2.5">AGGREGATE · MIX DESIGN</text>
    </svg>
  );
}

function EduCoreIllustration({ accent }: { accent: string }) {
  const states = [2,2,1,0,0, 2,2,2,1,0, 1,2,2,2,0];
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {Array.from({length:3}).map((_,row) =>
        Array.from({length:5}).map((_,col) => {
          const s = states[row*5+col];
          const x = 18+col*52, y = 18+row*50;
          return (
            <g key={`${row}-${col}`}>
              <rect x={x} y={y} width="44" height="36" rx="4"
                fill={s===2 ? accent+'18' : s===1 ? accent+'08' : 'rgba(255,255,255,0.03)'}
                stroke={s===2 ? accent : s===1 ? accent+'60' : 'rgba(255,255,255,0.07)'} strokeWidth="1" />
              {s===2 && (
                <path d={`M${x+11} ${y+18} L${x+18} ${y+25} L${x+31} ${y+12}`}
                  stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              )}
              {s===1 && (
                <>
                  <rect x={x+8} y={y+26} width="28" height="3" rx="1.5" fill={accent+'30'}/>
                  <rect x={x+8} y={y+26} width="15" height="3" rx="1.5" fill={accent}/>
                </>
              )}
            </g>
          );
        })
      )}
      <circle cx="252" cy="152" r="18" stroke="rgba(255,255,255,0.07)" strokeWidth="3" fill="none"/>
      <path d="M252 134 A18 18 0 0 1 265.6 161" stroke={accent} strokeWidth="3" strokeLinecap="round" fill="none"/>
      <text x="244" y="157" fontSize="9" fontFamily="monospace" fill={accent} fontWeight="bold">73%</text>
      <text x="10" y="176" fontSize="8" fontFamily="monospace" fill="rgba(255,255,255,0.18)" letterSpacing="2.5">LEARNING MODULES</text>
    </svg>
  );
}

function BuildCoreIllustration({ accent }: { accent: string }) {
  const gridCols = [40,90,140,190,240];
  const gridRows = [20,52,84,116,148];
  const highlighted = new Set(['40-52','90-52','40-84','90-84']);
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="26" y="38" width="116" height="62" rx="2" fill={accent+'08'} stroke={accent+'25'} strokeWidth="0.75"/>
      {gridRows.map(y => (
        <line key={y} x1="15" y1={y} x2="265" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="0.75"/>
      ))}
      {gridCols.map(x => (
        <line key={x} x1={x} y1="15" x2={x} y2="155" stroke="rgba(255,255,255,0.05)" strokeWidth="0.75"/>
      ))}
      {gridCols.flatMap(cx => gridRows.map(cy => {
        const k = `${cx}-${cy}`;
        const hi = highlighted.has(k);
        return (
          <circle key={k} cx={cx} cy={cy} r={hi ? 4 : 2.5}
            fill={hi ? accent : 'rgba(255,255,255,0.14)'}/>
        );
      }))}
      <rect x="174" y="112" width="88" height="22" rx="3"
        fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75"/>
      <text x="179" y="127" fontSize="8.5" fontFamily="monospace" fill={accent} letterSpacing="1">CO2 4.2 t/m2</text>
      <text x="10" y="176" fontSize="8" fontFamily="monospace" fill="rgba(255,255,255,0.18)" letterSpacing="2.5">BoQ · EMBODIED CARBON</text>
    </svg>
  );
}

function PavementIllustration({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="10" y="10" width="260" height="152" rx="4"
        fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.75"/>
      {[46,82,118,154,190,226].map(x => (
        <line key={x} x1={x} y1="10" x2={x} y2="162" stroke="rgba(255,255,255,0.05)" strokeWidth="0.75"/>
      ))}
      <path d="M62 48 L78 58 L70 74 L85 84" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M78 58 L88 63 L93 55" stroke="rgba(255,255,255,0.22)" strokeWidth="1" strokeLinecap="round"/>
      <path d="M142 88 L158 100 L150 120 L164 130 L172 122" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M202 44 L210 54 L222 52 L217 66" stroke="rgba(255,255,255,0.24)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="50" y="38" width="52" height="54" rx="2" stroke={accent} strokeWidth="1.5" fill="none" strokeDasharray="4 3"/>
      <rect x="132" y="80" width="52" height="58" rx="2" stroke={accent+'aa'} strokeWidth="1.5" fill="none" strokeDasharray="4 3"/>
      <rect x="50" y="27" width="48" height="13" rx="2" fill={accent+'20'}/>
      <text x="55" y="38" fontSize="8" fontFamily="monospace" fill={accent} letterSpacing="0.5">CRACK 94%</text>
      <circle cx="252" cy="26" r="6" fill={accent+'30'} stroke={accent} strokeWidth="1.25"/>
      <line x1="252" y1="32" x2="252" y2="42" stroke={accent} strokeWidth="1.25"/>
      <text x="10" y="174" fontSize="8" fontFamily="monospace" fill="rgba(255,255,255,0.18)" letterSpacing="2.5">CNN · DISTRESS DETECTION</text>
    </svg>
  );
}

function StructuralIllustration({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="30" y="72" width="220" height="12" rx="2"
        fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
      <polygon points="30,84 20,104 40,104"
        fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
      <line x1="16" y1="107" x2="44" y2="107" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <polygon points="250,84 240,104 260,104"
        fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
      <circle cx="244" cy="108" r="3" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
      <circle cx="256" cy="108" r="3" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
      <line x1="236" y1="112" x2="264" y2="112" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      {[58,88,118,148,178,208].map(x => (
        <g key={x}>
          <line x1={x} y1="40" x2={x} y2="70" stroke={accent} strokeWidth="1.25"/>
          <path d={`M${x-4} 62 L${x} 72 L${x+4} 62`} fill={accent}/>
        </g>
      ))}
      <line x1="48" y1="40" x2="224" y2="40" stroke={accent} strokeWidth="1.25"/>
      <path d="M30 122 Q140 158 250 122" stroke={accent} strokeWidth="1.5" fill="none"/>
      <path d="M30 122 Q140 158 250 122 L250 122 L30 122" fill={accent+'10'}/>
      <text x="148" y="158" fontSize="8" fontFamily="monospace" fill={accent} textAnchor="middle">Mmax</text>
      <line x1="30"  y1="118" x2="30"  y2="168" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" strokeDasharray="3 2"/>
      <line x1="250" y1="118" x2="250" y2="168" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" strokeDasharray="3 2"/>
      <line x1="30"  y1="165" x2="250" y2="165" stroke="rgba(255,255,255,0.1)"  strokeWidth="0.75"/>
      <text x="140" y="175" fontSize="8" fontFamily="monospace" fill="rgba(255,255,255,0.22)" textAnchor="middle">6.0 m</text>
    </svg>
  );
}

function LineChartIllustration({ accent }: { accent: string }) {
  const pts: [number,number][] = [[30,130],[68,112],[105,94],[140,108],[175,78],[210,62],[248,72]];
  const d = pts.map(([x,y],i) => `${i===0?'M':'L'}${x} ${y}`).join(' ');
  const area = d + ` L${pts[pts.length-1][0]} 148 L${pts[0][0]} 148 Z`;
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {[60,90,120].map(y => (
        <line key={y} x1="18" y1={y} x2="265" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="0.75"/>
      ))}
      <path d={area} fill={accent+'0f'}/>
      <path d={d} stroke={accent} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      {pts.map(([x,y],i) => (
        <g key={i}>
          {i===pts.length-1 && <circle cx={x} cy={y} r="7" fill={accent+'1a'}/>}
          <circle cx={x} cy={y} r="3.5" fill="#0d0d0d" stroke={accent} strokeWidth="1.5"/>
        </g>
      ))}
      <rect x="190" y="50" width="62" height="15" rx="2" fill={accent+'18'}/>
      <text x="195" y="61" fontSize="8.5" fontFamily="monospace" fill={accent} letterSpacing="0.5">R2 = 0.91</text>
      <text x="10" y="176" fontSize="8" fontFamily="monospace" fill="rgba(255,255,255,0.18)" letterSpacing="2.5">PREDICTION · REGRESSION</text>
    </svg>
  );
}

function CandleIllustration({ accent }: { accent: string }) {
  type C = {x:number;o:number;c:number;h:number;l:number};
  const candles: C[] = [
    {x:30,o:120,c:95,h:86,l:128},{x:62,o:95,c:75,h:66,l:102},
    {x:94,o:75,c:100,h:64,l:108},{x:126,o:100,c:85,h:79,l:110},
    {x:158,o:85,c:60,h:52,l:90},{x:190,o:60,c:88,h:48,l:94},
    {x:222,o:88,c:70,h:62,l:96},{x:254,o:70,c:48,h:40,l:78},
  ];
  const vols = [10,18,14,8,20,16,12,22];
  return (
    <svg viewBox="0 0 284 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {[55,85,115].map(y => (
        <line key={y} x1="14" y1={y} x2="275" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="0.75"/>
      ))}
      {candles.map((c,i) => {
        const bull = c.c < c.o;
        const col = bull ? accent : 'rgba(244,63,94,0.75)';
        const top = Math.min(c.o,c.c), bot = Math.max(c.o,c.c);
        return (
          <g key={i}>
            <rect x={c.x-8} y={140} width="16" height={vols[i]} rx="1"
              fill={bull ? accent+'1a' : 'rgba(255,255,255,0.05)'}/>
            <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke={col} strokeWidth="1"/>
            <rect x={c.x-8} y={top} width="16" height={Math.max(bot-top,2)} rx="1"
              fill={bull ? accent+'2a' : 'rgba(244,63,94,0.12)'} stroke={col} strokeWidth="1"/>
          </g>
        );
      })}
      <text x="10" y="176" fontSize="8" fontFamily="monospace" fill="rgba(255,255,255,0.18)" letterSpacing="2.5">OHLC · PRICE ACTION</text>
    </svg>
  );
}

function PhoneIllustration({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="85" y="8" width="110" height="168" rx="14"
        fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5"/>
      <rect x="91" y="24" width="98" height="138" rx="5" fill="rgba(0,0,0,0.3)"/>
      <rect x="122" y="15" width="36" height="7" rx="3.5" fill="rgba(255,255,255,0.08)"/>
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x="98" y={42+i*26} width="11" height="11" rx="3"
            fill={i===0 ? accent+'2a' : 'rgba(255,255,255,0.05)'}
            stroke={i===0 ? accent : 'rgba(255,255,255,0.08)'} strokeWidth="0.75"/>
          <rect x="116" y={44+i*26} width="56" height="3.5" rx="1.75" fill="rgba(255,255,255,0.1)"/>
          <rect x="116" y={50+i*26} width="36" height="3" rx="1.5" fill="rgba(255,255,255,0.05)"/>
        </g>
      ))}
      <rect x="91" y="146" width="98" height="16" fill="rgba(255,255,255,0.04)"/>
      {[106,140,174].map(x => (
        <circle key={x} cx={x} cy="154" r="4.5"
          fill={x===140 ? accent : 'rgba(255,255,255,0.12)'}/>
      ))}
      <text x="10" y="177" fontSize="8" fontFamily="monospace" fill="rgba(255,255,255,0.18)" letterSpacing="2.5">MOBILE · STUDENT PLATFORM</text>
    </svg>
  );
}

function NeuralNetIllustration({ accent }: { accent: string }) {
  const L0: [number,number][] = [[50,45],[50,90],[50,135]];
  const L1: [number,number][] = [[135,30],[135,68],[135,106],[135,144]];
  const L2: [number,number][] = [[218,60],[218,120]];
  const activated = new Set(['135-68','135-106','218-60']);
  const edges: [number,number,number,number][] = [
    ...L0.flatMap(([x1,y1]) => L1.map(([x2,y2]): [number,number,number,number] => [x1,y1,x2,y2])),
    ...L1.flatMap(([x1,y1]) => L2.map(([x2,y2]): [number,number,number,number] => [x1,y1,x2,y2])),
  ];
  const allNodes = [...L0,...L1,...L2];
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {edges.map(([x1,y1,x2,y2],i) => {
        const hi = activated.has(`${x2}-${y2}`);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={hi ? accent : 'rgba(255,255,255,0.07)'}
            strokeWidth={hi ? '0.9' : '0.75'} strokeOpacity={hi ? 0.55 : 1}/>
        );
      })}
      {allNodes.map(([cx,cy]) => {
        const k = `${cx}-${cy}`;
        const hi = activated.has(k);
        const isOut = L2.some(([x,y]) => x===cx && y===cy);
        return (
          <circle key={k} cx={cx} cy={cy} r={isOut ? 10 : 8}
            fill={hi ? accent+'22' : 'rgba(255,255,255,0.05)'}
            stroke={hi ? accent : 'rgba(255,255,255,0.14)'}
            strokeWidth={hi ? '1.5' : '1'}/>
        );
      })}
      {[['50','INPUT'],['135','HIDDEN'],['218','OUTPUT']].map(([x,lbl]) => (
        <text key={lbl} x={x} y="168" fontSize="7" fontFamily="monospace"
          fill="rgba(255,255,255,0.2)" textAnchor="middle" letterSpacing="1">{lbl}</text>
      ))}
      <rect x="232" y="50" width="40" height="14" rx="2" fill={accent+'18'}/>
      <text x="236" y="61" fontSize="7.5" fontFamily="monospace" fill={accent} letterSpacing="0.5">94.2%</text>
      <text x="10" y="177" fontSize="8" fontFamily="monospace" fill="rgba(255,255,255,0.18)" letterSpacing="2.5">CNN · CLASSIFICATION</text>
    </svg>
  );
}

function getIllustration(key: string, accent: string) {
  switch (key) {
    case 'concrete':     return <ConcreteIllustration accent={accent} />;
    case 'lms':          return <EduCoreIllustration accent={accent} />;
    case 'buildcore':    return <BuildCoreIllustration accent={accent} />;
    case 'pavement':     return <PavementIllustration accent={accent} />;
    case 'structural':   return <StructuralIllustration accent={accent} />;
    case 'chart-line':   return <LineChartIllustration accent={accent} />;
    case 'chart-candle': return <CandleIllustration accent={accent} />;
    case 'phone':        return <PhoneIllustration accent={accent} />;
    default:             return <NeuralNetIllustration accent={accent} />;
  }
}

/* ─── Project Data ───────────────────────────────────────────── */

const projects = [
  {
    title: 'DoE Concrete Mixer App',
    description: 'A mobile app that does the British DoE concrete mix design for you. I turned the method’s charts into equations, and the results stay within 3% of the manual calculations.',
    category: 'Mobile Apps', illustration: 'concrete',
    tech: ['React Native', 'Python', 'TensorFlow', 'SQLite'],
    github: 'https://github.com/chi2785443/doe-concrete-mix-design-app', demo: '', featured: true,
  },
  {
    title: 'EduCore LMS',
    description: 'A SaaS platform for schools and education agencies to run day-to-day operations, communication and analytics in one place.',
    category: 'Web Apps', illustration: 'lms',
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/chi2785443/educore-mobile', demo: '', featured: true,
  },
  {
    title: 'BuildCore',
    description: 'A construction management platform that connects Bills of Quantities to embodied carbon and LCA data, and suggests lower-carbon materials on the way to net-zero.',
    category: 'Web Apps', illustration: 'buildcore',
    tech: ['React', 'Django', 'PostgreSQL', 'Docker'],
    github: '', demo: '', featured: true,
  },
  {
    title: 'Pavement Distress Detection',
    description: 'A CNN trained on 30,000 pavement photos to spot cracks and potholes. It runs on the phone with TensorFlow Lite, tags each find with GPS and maps it on Google Maps.',
    category: 'AI Models', illustration: 'pavement',
    tech: ['TensorFlow Lite', 'Flutter', 'FastAPI', 'OpenCV'],
    github: 'https://github.com/chi2785443/pavement-distress-detector-flutter-app', demo: '', featured: false,
  },
  {
    title: 'Structural Analysis Tool',
    description: 'A desktop app for reinforced concrete design to BS8110. It designs beams, columns, slabs and pad foundations with step-by-step calculations and shear force and bending moment charts.',
    category: 'Engineering Tools', illustration: 'structural',
    tech: ['Tauri', 'React', 'TypeScript', 'BS8110'],
    github: 'https://github.com/chi2785443/structcore', demo: '', featured: false,
  },
  {
    title: 'Bulldozer Price Prediction',
    description: 'A Random Forest that predicts bulldozer sale prices from 1990 to 2015 auction data. It scored R² = 0.889 on data it hadn’t seen.',
    category: 'AI Models', illustration: 'chart-line',
    tech: ['Python', 'Pandas', 'Scikit-Learn', 'Matplotlib'],
    github: '', demo: '', featured: false,
  },
  {
    title: 'British DoE Mix Design ML',
    description: 'A Random Forest trained on 712 real concrete mix records to predict aggregate-to-cement ratios. R² = 0.91, MAE = 0.08, and stable under 5-fold cross-validation.',
    category: 'AI Models', illustration: 'concrete',
    tech: ['Python', 'Scikit-Learn', 'NumPy', 'Joblib'],
    github: 'https://github.com/chi2785443/concrete-mix-ratio-ml', demo: '', featured: false,
  },
  {
    title: 'FutmitePadi Student App',
    description: 'A Flutter app for students at my university, FUT Minna: connect, study and prepare for exams, with a lecture library, a secondhand marketplace and a hostel finder.',
    category: 'Mobile Apps', illustration: 'phone',
    tech: ['Flutter', 'Firebase', 'Node.js', 'MongoDB'],
    github: 'https://github.com/chi2785443/futmitepadi', demo: '', featured: false,
  },
  {
    title: 'Fintech Crypto Tracker',
    description: 'Live cryptocurrency prices from the CoinGecko API, on web and mobile.',
    category: 'Web Apps', illustration: 'chart-candle',
    tech: ['React', 'React Native', 'NestJS', 'MySQL'],
    github: 'https://github.com/chi2785443/crypto-place-website', demo: '', featured: false,
  },
];

/* ─── Card ───────────────────────────────────────────────────── */

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const accent = categoryAccent[project.category] ?? '#ff6b9d';
  const tint = categoryTint[project.category] ?? '#ffc6da';
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: Math.min(index, 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group flex w-[300px] shrink-0 snap-start flex-col rounded-[28px] p-3 shadow-[0_18px_40px_rgba(120,60,90,0.12)] sm:w-[360px]"
      style={{ backgroundColor: tint }}
    >
      {/* Illustration tile */}
      <div className="flex h-32 items-center justify-center rounded-[20px] bg-[#1c1625] px-4 py-3 sm:h-36">
        {getIllustration(project.illustration, accent)}
      </div>

      <div className="flex flex-1 flex-col px-3 pb-2 pt-4 text-[#1c1625]">
        <span className="mb-2 w-fit rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em]">
          {project.category}
        </span>
        <h3 className="mb-1.5 text-lg font-extrabold leading-tight tracking-tight">{project.title}</h3>
        <p className="mb-3 line-clamp-2 flex-1 text-[13px] leading-relaxed text-[#1c1625]/70">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full bg-[#1c1625]/10 px-2.5 py-1 text-[11px] font-semibold">
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-[#1c1625] px-4 py-2 text-xs font-bold text-white transition-transform hover:scale-105"
            >
              <Github size={13} /> View on GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-white/70 px-4 py-2 text-xs font-bold transition-colors hover:bg-white"
            >
              <ExternalLink size={13} /> Live demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Section ────────────────────────────────────────────────── */

export default function Projects() {
  const [active, setActive] = useState('All');
  const railRef = useRef<HTMLDivElement>(null);
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  const scrollRail = (dir: 1 | -1) =>
    railRef.current?.scrollBy({ left: dir * 380, behavior: 'smooth' });

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-10 text-[#1c1625]"
      style={{ background: 'linear-gradient(180deg,#fbd7e5 0%,#f9e1ea 45%,#fbe9dc 100%)' }}
    >
      {/* Bright colour blobs */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#c9b8ff]/60 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-[#ffd27a]/60 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#9fd8ff]/50 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-center"
        >
          <h2 className="text-[clamp(2.2rem,5.5vw,4.2rem)] font-extrabold leading-none tracking-[-0.04em]">
            Selected work
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#1c1625]/65">
            Web platforms, mobile apps, engineering tools and ML models, from civil infrastructure to
            intelligent systems.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-5 flex flex-wrap justify-center gap-2">
          {filters.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setActive(name)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                active === name
                  ? 'bg-[#1c1625] text-white'
                  : 'bg-white/60 text-[#1c1625]/70 hover:bg-white'
              }`}
            >
              <Icon size={13} />
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Rail */}
      <div className="relative">
        <div
          ref={railRef}
          key={active}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-5 pt-2 [scroll-padding-inline:1.5rem] md:px-[max(2rem,calc((100vw-1400px)/2+2rem))] md:[scroll-padding-inline:max(2rem,calc((100vw-1400px)/2+2rem))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-1 flex max-w-[1400px] items-center justify-between px-6 md:px-8">
        <div className="flex gap-2">
          <button
            onClick={() => scrollRail(-1)}
            aria-label="Scroll left"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 transition-colors hover:bg-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scrollRail(1)}
            aria-label="Scroll right"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1c1625] text-white transition-transform hover:scale-105"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <a
          href="https://github.com/chi2785443"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-white/70 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white"
        >
          View all on GitHub <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}
