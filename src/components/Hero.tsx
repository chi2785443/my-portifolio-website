import React from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  FileText,
  Download,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a] text-gray-200"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#111111] to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23374151%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10" />
      </div>

      {/* Floating Background Circles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#14b8a6]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#e11d48]/10 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 mt-20">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Profile Image */}
          <div className="mb-12 relative">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#14b8a6] to-[#3b82f6] p-1 animate-spin">
                <div className="w-full h-full rounded-full bg-[#0a0a0a]"></div>
              </div>
              <div
                className="absolute inset-2 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#e11d48] p-1 animate-spin"
                style={{
                  animationDirection: "reverse",
                  animationDuration: "3s",
                }}
              >
                <div className="w-full h-full rounded-full bg-[#0a0a0a]"></div>
              </div>
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Chinedu Aguwa - Civil Engineer & Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent Bubbles */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#14b8a6] to-[#3b82f6] rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#e11d48] to-pink-500 rounded-full animate-bounce delay-300 shadow-lg"></div>
              <div className="absolute top-0 -left-8 w-4 h-4 bg-gradient-to-r from-[#3b82f6] to-[#14b8a6] rounded-full animate-bounce delay-700 shadow-lg"></div>
            </div>
          </div>

          {/* Animated Name */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#aececa] via-[#85a4d6] to-[#e68ca0] bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Chinedu Aguwa
          </motion.h1>

          {/* Roles */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="px-6 py-3 bg-black/60 backdrop-blur text-[#14b8a6] font-semibold rounded-full border border-[#14b8a6]/30 hover:border-[#14b8a6]/50 transition-all duration-300">
              Civil Engineering Graduate
            </span>
            <span className="px-6 py-3 bg-black/60 backdrop-blur text-[#3b82f6] font-semibold rounded-full border border-[#3b82f6]/30 hover:border-[#3b82f6]/50 transition-all duration-300">
              AI Researcher
            </span>
            <span className="px-6 py-3 bg-black/60 backdrop-blur text-[#e11d48] font-semibold rounded-full border border-[#e11d48]/30 hover:border-[#e11d48]/50 transition-all duration-300">
              Software Engineer
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            I design and build modern web and mobile applications that bring
            ideas to life, from student platforms like Futmitepadi (700+ users)
            to enterprise-level systems.
            <span className="bg-gradient-to-r from-[#14b8a6] to-[#3b82f6] bg-clip-text text-transparent font-semibold">
              {" "}
              Where engineering and AI meets innovation, one line of code, one
              app, one solution at a time.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <button
                onClick={() => scrollToSection("#projects")}
                className="group px-8 py-4 bg-gradient-to-r from-[#14b8a6] to-[#3b82f6] text-white font-semibold rounded-xl hover:from-[#0dd] hover:to-[#1a9cf5] transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Explore My Work</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <button
                onClick={() => scrollToSection("#contact")}
                className="group px-8 py-4 border-2 border-[#14b8a6] text-[#14b8a6] font-semibold rounded-xl hover:bg-[#14b8a6] hover:text-black transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center space-x-2"
              >
                <span>Let's Collaborate</span>
                <Mail
                  size={20}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
              </button>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <a
                href="/Chinedu_Aguwa_CV.pdf"
                download
                className="group px-8 py-4 bg-black border border-gray-700 text-gray-300 font-semibold rounded-xl hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Download
                  size={20}
                  className="group-hover:-translate-y-1 transition-transform duration-300"
                />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center space-x-8 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="https://github.com/Chi2785443"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-black border border-gray-700 rounded-xl text-gray-400 hover:text-[#14b8a6] hover:border-[#14b8a6] transition-all duration-300 transform hover:scale-110"
            >
              <Github
                size={24}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/chinedu-aguwa/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-black border border-gray-700 rounded-xl text-gray-400 hover:text-[#3b82f6] hover:border-[#3b82f6] transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin
                size={24}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
            </a>
            <a
              href="mailto:neduaguwa443@gmail.com"
              className="group p-4 bg-black border border-gray-700 rounded-xl text-gray-400 hover:text-[#14b8a6] hover:border-[#14b8a6] transition-all duration-300 transform hover:scale-110"
            >
              <Mail
                size={24}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
            </a>
            <a
              href="#"
              className="group p-4 bg-black border border-gray-700 rounded-xl text-gray-400 hover:text-[#e11d48] hover:border-[#e11d48] transition-all duration-300 transform hover:scale-110"
            >
              <FileText
                size={24}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("#about")}
            className="group animate-bounce text-[#14b8a6] hover:text-[#e11d48] transition-colors duration-300"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm font-medium">Scroll to explore</span>
              <ChevronDown
                size={32}
                className="group-hover:translate-y-1 transition-transform duration-300"
              />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
