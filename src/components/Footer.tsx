import React from "react";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Research", href: "#research" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand/Intro */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-teal-400 mb-4">
                Chinedu Aguwa
              </h2>
              <p className="mb-6 leading-relaxed max-w-md">
                Civil Engineer, AI Developer, and Software Engineer passionate
                about bridging traditional engineering with cutting-edge
                technology to build innovative solutions for tomorrow's
                challenges.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Chi2785443"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-teal-400 transition transform hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/chinedu-aguwa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-teal-400 transition transform hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:neduaguwa443@gmail.com"
                  aria-label="Email"
                  className="hover:text-teal-400 transition transform hover:scale-110"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="hover:text-teal-400 transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-2">
                <p>neduaguwa443@gmail.com</p>
                <p>+234 810 547 1046</p>
                <p>Abuja, Nigeria</p>
              </div>
              <div className="mt-4 flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm">
                  Available for projects
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span>Built with</span>
              <Heart className="text-red-500" size={16} />
              <span>by Chinedu Aguwa</span>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm">
                © {new Date().getFullYear()} Chinedu Aguwa. All rights reserved.
              </p>
              <button
                onClick={scrollToTop}
                className="p-2 bg-gray-800 text-teal-400 rounded-lg hover:bg-gray-700 transition transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
