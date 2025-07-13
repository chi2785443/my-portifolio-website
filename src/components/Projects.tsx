import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Filter,
  Smartphone,
  Globe,
  Wrench,
  Brain,
} from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    { name: "All", icon: Filter },
    { name: "Web Apps", icon: Globe },
    { name: "Mobile Apps", icon: Smartphone },
    { name: "Engineering Tools", icon: Wrench },
    { name: "AI Models", icon: Brain },
  ];

  const projects = [
    {
      title: "DoE Concrete Mixer App",
      description:
        "AI-powered mobile application for optimizing concrete mix designs using Design of Experiments methodology. Reduces material waste and improves concrete quality.",
      category: "Mobile Apps",
      tech: ["React Native", "Python", "TensorFlow", "SQLite"],
      image:
        "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=500",
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "EduFlow LMS",
      description:
        "Comprehensive Learning Management System with real-time collaboration, progress tracking, and AI-powered content recommendations.",
      category: "Web Apps",
      tech: ["Next.js", "NestJS", "PostgreSQL", "Redis"],
      image:
        "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=500",
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "BuildCore Project Manager",
      description:
        "Construction project management platform with resource allocation, timeline tracking, and cost optimization features.",
      category: "Web Apps",
      tech: ["React", "Django", "PostgreSQL", "Docker"],
      image:
        "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=500",
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Pavement Distress Detection",
      description:
        "Computer vision model for automated detection and classification of pavement distresses using deep learning techniques.",
      category: "AI Models",
      tech: ["Python", "OpenCV", "TensorFlow", "MATLAB"],
      image:
        "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=500",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "Church Management System",
      description:
        "Complete church administration platform with member management, event scheduling, and donation tracking capabilities.",
      category: "Web Apps",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.pexels.com/photos/8468/church-pews-benches-religion.jpg?auto=compress&cs=tinysrgb&w=500",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "AutoCAD Automation Scripts",
      description:
        "Collection of automation scripts for AutoCAD to streamline repetitive drafting tasks and improve productivity.",
      category: "Engineering Tools",
      tech: ["AutoLISP", "VBA", "Python", "AutoCAD"],
      image:
        "https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "Structural Analysis Tool",
      description:
        "Web-based structural analysis application for beam and frame calculations with interactive visualization.",
      category: "Engineering Tools",
      tech: ["React", "Python", "NumPy", "Three.js"],
      image:
        "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=500",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "River Ice Monitoring System",
      description:
        "IoT-based monitoring system for tracking river ice formation and movement patterns using sensor networks.",
      category: "AI Models",
      tech: ["Python", "IoT", "Machine Learning", "PostgreSQL"],
      image:
        "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=500",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "Bulldozer Price Prediction",
      description:
        "Developed a time-series model using Random Forest Regressor to predict bulldozer prices with 88.9% accuracy, enabling informed financial planning.",
      category: "AI Models",
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      image:
        "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=500",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "British DoE Mix Design ML Model",
      description:
        "Python-based predictive model using British Standard DOE methodology for concrete mix design with 4.3% mean error. Integrated into a mobile app.",
      category: "AI Models",
      tech: ["Python", "Scikit-learn", "NumPy", "Flutter"],
      image:
        "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=500",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "FutmitePadi Student App",
      description:
        "A Flutter-based mobile app that connects students at FUT Minna with tools like lecture library, secondhand store, and hostel finder.",
      category: "Mobile Apps",
      tech: ["Flutter", "Firebase", "Node.js", "MongoDB"],
      image:
        "https://images.pexels.com/photos/159740/library-la-trobe-study-students.jpg?auto=compress&cs=tinysrgb&w=500",
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "Fintech Crypto Tracker",
      description:
        "Full-stack application for tracking cryptocurrency prices using CoinGecko API. Built for both web and mobile platforms.",
      category: "Fintech Apps",
      tech: ["React", "React Native", "NestJS", "MySQL", "CoinGecko API"],
      image:
        "https://images.pexels.com/photos/6778850/pexels-photo-6778850.jpeg?auto=compress&cs=tinysrgb&w=500",
      github: "#",
      demo: "#",
      featured: false,
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-[#070316] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of innovative solutions spanning engineering, AI, and
              software development
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.name}
                  onClick={() => setActiveFilter(filter.name)}
                  className={`flex items-center space-x-2 px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.name
                      ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg"
                      : "bg-[#111] text-gray-400 hover:bg-[#222] hover:text-white"
                  }`}
                >
                  <Icon size={16} />
                  <span>{filter.name}</span>
                </button>
              );
            })}
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`bg-[#111] border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                  project.featured ? "ring-2 ring-teal-400/30" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 text-sm mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#222] text-teal-400 rounded-full border border-teal-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-1 text-gray-400 hover:text-teal-400 text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-1 text-gray-400 hover:text-teal-400 text-sm"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a
              href="https://github.com/chi2785443" // use your actual GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-blue-700 transition-transform duration-300 hover:scale-105"
            >
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
