import React from "react";
import { User, GraduationCap, Award, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950 text-gray-200">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#14b8a6] via-[#3b82f6] to-[#e11d48] bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#14b8a6] to-[#3b82f6] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <User className="text-[#14b8a6]" size={24} />
                <h3 className="text-2xl font-semibold">My Journey</h3>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                I’m a first-class Civil Engineering graduate with a strong
                foundation in structural design, construction, and environmental
                engineering, now merging that expertise with a deep passion for
                software development and AI/ML research. With over 5 years of
                hands-on experience, I specialize in building solutions that
                bridge the gap between traditional engineering and modern
                technology.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                My work spans intelligent infrastructure tools and next-gen
                educational platforms. I built an ML-powered concrete mix design
                app to automate civil engineering processes, and I’m currently
                developing BuildCore – a comprehensive construction management
                software using Django and BIM-based tracking. I also created
                FutMiTePadi and Padimi – mobile apps focused on learning and
                self-growth – and I'm building EduFlow, a SaaS platform for
                schools powered by NestJS and PostgreSQL.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                I’m passionate about solving real-world problems through AI,
                automation, and scalable software. I thrive in projects that
                combine analytical thinking, engineering insight, and full-stack
                development. I’ve also led teams and mentored young engineers,
                fostering a collaborative, impact-driven mindset.
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center space-x-2 bg-[#111] px-4 py-2 rounded-lg border border-gray-700">
                  <MapPin className="text-[#14b8a6]" size={16} />
                  <span>Abuja, Nigeria</span>
                </div>
                <div className="flex items-center space-x-2 bg-[#111] px-4 py-2 rounded-lg border border-gray-700">
                  <Award className="text-[#14b8a6]" size={16} />
                  <span>5+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Education & Achievements */}
            <div className="space-y-8">
              <div className="bg-[#111] p-6 rounded-xl border border-gray-700 hover:border-[#14b8a6] shadow transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="text-[#14b8a6]" size={24} />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#14b8a6]">
                    B.Eng Civil Engineering
                  </h4>
                  <p className="text-gray-300">
                    Federal University of Technology, Minna
                  </p>
                  <p className="text-gray-500 text-sm">2018 – 2024</p>
                </div>
              </div>

              <div className="bg-[#111] p-6 rounded-xl border border-gray-700 hover:border-[#3b82f6] shadow transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="text-[#3b82f6]" size={24} />
                  <h3 className="text-xl font-semibold">Key Achievements</h3>
                </div>
                <ul className="space-y-2 pl-2">
                  {[
                    "President, NICESA FUTMinna",
                    "BuildCore solution",
                    "AI & Software Development Specialist",
                    "Research in concrete mixed design",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#3b82f6] rounded-full mt-2"></div>
                      <p className="text-gray-300">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#14b8a6]/10 to-[#3b82f6]/10 p-6 rounded-xl border border-[#14b8a6]/30">
                <h3 className="text-lg font-semibold mb-4">Core Values</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#14b8a6]">
                      Innovation
                    </div>
                    <div className="text-sm text-gray-400">
                      Forward Thinking
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#3b82f6]">
                      Excellence
                    </div>
                    <div className="text-sm text-gray-400">Quality Driven</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#a855f7]">
                      Leadership
                    </div>
                    <div className="text-sm text-gray-400">Team Builder</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#f59e0b]">
                      Impact
                    </div>
                    <div className="text-sm text-gray-400">
                      Solution Focused
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
