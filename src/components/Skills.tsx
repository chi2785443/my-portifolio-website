import React from "react";
import {
  Code,
  Wrench,
  Brain,
  Database,
  Palette,
  Globe,
  MessageCircle,
  Settings,
  Smartphone,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-indigo-500 to-blue-600",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Dart", level: 85 },
        { name: "Go", level: 75 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "SQL", level: 85 },
      ],
    },
    {
      title: "Frontend Development",
      icon: Globe,
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Bootstrap", level: 80 },
        { name: "Sass", level: 80 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "from-green-500 to-teal-600",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "NestJS", level: 85 },
        { name: "Django", level: 80 },
        { name: "FastAPI", level: 85 },
        { name: "Firebase", level: 80 },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-yellow-500 to-orange-600",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
      ],
    },
    {
      title: "Mobile App Development",
      icon: Smartphone,
      color: "from-pink-500 to-rose-600",
      skills: [
        { name: "React Native", level: 90 },
        { name: "Flutter", level: 85 },
        { name: "Dart", level: 85 },
        { name: "Expo", level: 80 },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "Scikit-learn", level: 85 },
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 90 },
        { name: "OpenCV", level: 80 },
        { name: "MATLAB", level: 75 },
        { name: "Jupyter", level: 85 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: Settings,
      color: "from-teal-500 to-blue-600",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 80 },
        { name: "Redis", level: 75 },
        { name: "Linux", level: 85 },
        { name: "CI/CD", level: 75 },
        { name: "Expo", level: 80 },
      ],
    },
    {
      title: "Engineering Tools",
      icon: Wrench,
      color: "from-amber-500 to-orange-600",
      skills: [
        { name: "AutoCAD", level: 95 },
        { name: "Civil 3D", level: 90 },
        { name: "ProtaStructure", level: 85 },
        { name: "Robot Structural", level: 80 },
        { name: "STAAD Pro", level: 70 },
      ],
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      color: "from-pink-500 to-red-600",
      skills: [
        { name: "Figma", level: 85 },
        { name: "UI/UX Design", level: 80 },
        { name: "Responsive Design", level: 90 },
        { name: "Prototyping", level: 75 },
        { name: "Design Systems", level: 80 },
        { name: "User Research", level: 70 },
      ],
    },
    {
      title: "Soft Skills",
      icon: MessageCircle,
      color: "from-gray-500 to-gray-700",
      skills: [
        { name: "Teamwork", level: 95 },
        { name: "Effective Communication", level: 90 },
        { name: "Creativity", level: 90 },
        { name: "Research Skills", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "Leadership", level: 85 },
        { name: "Analytical Thinking", level: 90 },
        { name: "Self-Improvement", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit spanning traditional engineering and
              modern technology
            </p>
          </div>

          {/* Skill Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-teal-500/50 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02]"
                >
                  {/* Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-300 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-teal-400 font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Career Metrics */}
          <div className="mt-20 bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/30 p-10 rounded-2xl">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-white mb-2">
                Professional Highlights
              </h3>
              <p className="text-gray-400">
                Key metrics and achievements across my career
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-400">5+</div>
                <p className="text-gray-400 mt-1">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">20+</div>
                <p className="text-gray-400 mt-1">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">15+</div>
                <p className="text-gray-400 mt-1">Technologies Mastered</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">100+</div>
                <p className="text-gray-400 mt-1">Students Mentored</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
