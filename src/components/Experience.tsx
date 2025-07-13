import React, { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion, useInView } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Environmental Sustainability Software Engineer",
      company: "EDAT Climate Data and Analytics",
      location: "Houston, Texas (Remote)",
      period: "Apr 2025 - Present",
      type: "Part-time",
      description:
        "Developed a web application for comprehensive carbon calculations and accounting with wide-ranging applications in sustainability.",
      achievements: [
        "Built platform for environmental carbon accounting",
        "Contributed to business plans and sustainability proposals",
        "Executed complex calculations in environmental engineering domains",
      ],
      color: "from-emerald-600 to-green-700",
    },
    {
      title: "Mobile Application & Backend Developer",
      company: "SureData Consulting LTD",
      location: "Tilbury, UK (Remote)",
      period: "Mar 2025 - May 2025",
      type: "Contract",
      description:
        "Developed a mobile application and backend system for church activity and member management using modern technologies.",
      achievements: [
        "Built React Native mobile app with Expo for church operations",
        "Integrated Node.js/Express backend with PostgreSQL and Ubuntu",
        "Handled complete church operation modules and API logic",
      ],
      color: "from-indigo-600 to-purple-700",
    },
    {
      title: "Software Engineering Trainer",
      company: "A-Z New Age Tutor",
      location: "Nigeria (Onsite)",
      period: "Oct 2024 – May 2025",
      type: "Part-time",
      description:
        "Delivered practical training sessions to undergraduate students in core software engineering and AI concepts.",
      achievements: [
        "Trained 5 students in Python, JavaScript, and ML applications",
        "Taught modern JavaScript frameworks and LLM integration",
        "Mentored students on real-world engineering challenges",
      ],
      color: "from-yellow-500 to-amber-600",
    },
    {
      title: "Mobile Application Developer",
      company: "Exinn Digital Technology",
      location: "Maputo, Mozambique (Remote)",
      period: "Dec 2024 – Mar 2025",
      type: "Contract",
      description:
        "Developed medical applications to support maternal care and clinical documentation using modern web and mobile stacks.",
      achievements: [
        "Built React/NestJS/Supabase app for nursing mothers",
        "Created mobile app with chatbot and clinical note generator",
        "Integrated Gemini AI model for healthcare support",
      ],
      color: "from-rose-600 to-pink-700",
    },
    {
      title: "AI / ML Researcher",
      company: "Federal University of Technology Minna",
      location: "Minna, Nigeria (Onsite)",
      period: "Jan 2024 – Sept 2024",
      type: "Research",
      description:
        "Conducted applied AI and machine learning research focused on civil engineering and medical predictions.",
      achievements: [
        "Built ML models for time-series price and heart disease prediction",
        "Developed AI for concrete mix design and mobile integration",
        "Used Python, TensorFlow, and Flutter for end-to-end development",
      ],
      color: "from-cyan-600 to-blue-700",
    },
    {
      title: "Freelance Developer",
      company: "Referrals and Upwork",
      location: "Remote",
      period: "Mar 2020 – Sept 2023",
      type: "Freelance",
      description:
        "Built multiple mobile and web applications for clients in fintech, real estate, and transport industries.",
      achievements: [
        "Built ride-booking mobile app with great user experience",
        "Developed full-stack crypto fintech app using CoinGecko API",
        "Improved tenant management with custom RESTful APIs",
      ],
      color: "from-gray-600 to-slate-700",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#0a0a0a] text-gray-200">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A journey through engineering excellence and software innovation
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-500 to-blue-600 rounded-full"></div>

            <div className="space-y-14">
              {experiences.map((exp, index) => {
                const direction = index % 2 === 0 ? 1 : -1;
                const ref = useRef(null);
                const isInView = useInView(ref, {
                  once: true,
                  margin: "-50px",
                });

                return (
                  <motion.div
                    ref={ref}
                    key={index}
                    className={`relative flex flex-col md:flex-row items-start md:items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    initial={{ opacity: 0, x: direction * 80 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full border-4 border-[#0a0a0a] z-10"></div>

                    {/* Content */}
                    <div
                      className={`ml-16 md:ml-0 md:w-5/12 ${
                        index % 2 === 0
                          ? "md:mr-auto md:pr-8"
                          : "md:ml-auto md:pl-8"
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-[#111] p-6 rounded-xl border border-gray-700 hover:border-teal-500 transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        <div className="mb-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Briefcase className="text-teal-400" size={20} />
                            <span
                              className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${exp.color} text-white`}
                            >
                              {exp.type}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white">
                            {exp.title}
                          </h3>
                          <p className="text-teal-400 font-semibold">
                            {exp.company}
                          </p>
                          <div className="flex items-center space-x-4 text-gray-400 text-sm mt-1">
                            <span className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>{exp.period}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <MapPin size={14} />
                              <span>{exp.location}</span>
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                          {exp.description}
                        </p>

                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-teal-400">
                            Key Achievements:
                          </h4>
                          {exp.achievements.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-start space-x-2"
                            >
                              <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2"></div>
                              <p className="text-gray-400 text-sm">{item}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 p-8 rounded-xl border border-teal-400/30">
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to Work Together?
              </h3>
              <p className="text-gray-400 mb-6">
                Let's discuss how my experience can contribute to your next
                project.
              </p>
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
