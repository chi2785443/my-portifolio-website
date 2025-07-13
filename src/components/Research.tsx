import React from "react";
import {
  BookOpen,
  Microscope,
  Zap,
  Building,
  FileText,
  ExternalLink,
  Droplet,
  PenTool,
  BarChart4,
} from "lucide-react";

const Research = () => {
  const researchAreas = [
    {
      title: "Pavement Distress Detection with CNN",
      icon: Zap,
      description:
        "Developed a Python-based convolutional neural network model to detect pavement distress from images using OpenCV and mobile camera input. Applied to real-world dataset from Kaduna, Nigeria.",
      status: "Ongoing",
      color: "from-purple-500 to-pink-600",
      publications: 1,
      keywords: ["Computer Vision", "CNN", "OpenCV", "Infrastructure"],
    },
    {
      title: "Bulldozer Price Prediction Model",
      icon: BarChart4,
      description:
        "Created a time-series Random Forest model to predict bulldozer sale prices from 1990–2015 data, achieving 88.9% accuracy. Focus on regression and EDA techniques in supervised learning.",
      status: "Completed",
      color: "from-slate-600 to-gray-700",
      publications: 1,
      keywords: ["Machine Learning", "EDA", "Time Series", "Random Forest"],
    },
    {
      title: "British DoE Concrete Mix Design Optimization",
      icon: PenTool,
      description:
        "Developed a Python-based predictive model using British DOE methodology for concrete mix ratio estimation. Validated with lab data and deployed in a mobile application for civil engineers.",
      status: "Published",
      color: "from-orange-500 to-amber-600",
      publications: 1,
      keywords: [
        "Concrete Design",
        "ML in Civil Engineering",
        "DoE Method",
        "Python",
      ],
    },
    {
      title: "Water Quality Forecasting Using ANN",
      icon: Droplet,
      description:
        "Built an ANN model using MATLAB to forecast water quality parameters like pH and chlorine based on geographic data. Achieved 91.2% accuracy using data from Shiroro and surrounding regions.",
      status: "Completed",
      color: "from-teal-500 to-cyan-700",
      publications: 1,
      keywords: ["Water Quality", "ANN", "MATLAB", "Environmental Engineering"],
    },
    {
      title: "Civil Infrastructure Health Monitoring",
      icon: Building,
      description:
        "IoT-based monitoring systems for real-time assessment of structural health and predictive maintenance.",
      status: "In Progress",
      color: "from-green-500 to-teal-600",
      publications: 0,
      keywords: ["IoT", "Structural Health", "Predictive Analytics", "Sensors"],
    },
    {
      title: "AI in Civil Engineering",
      icon: BookOpen,
      description:
        "Integration of artificial intelligence and machine learning techniques in traditional civil engineering practices.",
      status: "Ongoing",
      color: "from-amber-500 to-orange-600",
      publications: 3,
      keywords: [
        "Machine Learning",
        "Engineering Automation",
        "Digital Transformation",
        "AI Applications",
      ],
    },
  ];

  const publications = [
    {
      title:
        "Development of a Simplified Methodology for British DoE Concrete Mix Design Procedure Using Python",
      journal: "Nile Journal of Engineering and Applied Science",
      year: "2025",
      type: "Research Paper",
      status: "Published",
      link: "https://doi.org/10.5455/njeas.238594",
    },
    {
      title: "Machine Learning Approaches for Pavement Distress Classification",
      journal: "Journal of Infrastructure Engineering",
      year: "2023",
      type: "Research Paper",
      status: "under review",
      link: "",
    },
    {
      title: "IoT-Based Monitoring Systems for Bridge Health Assessment",
      journal: "Smart Infrastructure Conference",
      year: "2023",
      type: "Conference Paper",
      status: "Presented",
      link: "",
    },
  ];

  return (
    <section id="research" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Research & Innovation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Advancing the frontiers of engineering through cutting-edge
              research and innovative solutions
            </p>
          </div>

          {/* Research Areas */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {researchAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-teal-400 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${area.color}`}
                      >
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {area.title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              area.status === "Published"
                                ? "bg-green-500/20 text-green-400"
                                : area.status === "Ongoing"
                                ? "bg-blue-500/20 text-blue-400"
                                : "bg-amber-500/20 text-amber-400"
                            }`}
                          >
                            {area.status}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {area.publications} publication
                            {area.publications !== 1 ? "s" : ""}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {area.keywords.map((keyword, keyIndex) => (
                      <span
                        key={keyIndex}
                        className="px-3 py-1 bg-gray-700/80 text-teal-300 text-sm rounded-full border border-teal-400/40"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Publications Section */}
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="text-teal-400" size={28} />
              <h3 className="text-2xl font-bold text-white">
                Recent Publications
              </h3>
            </div>

            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg border border-gray-600 hover:border-teal-400 transition-colors duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {pub.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center space-x-1">
                          <BookOpen size={14} />
                          <span>{pub.journal}</span>
                        </span>
                        <span>{pub.year}</span>
                        <span className="px-2 py-1 bg-gray-700 text-teal-400 rounded-full">
                          {pub.type}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center space-x-3">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          pub.status === "Published"
                            ? "bg-green-500/20 text-green-400"
                            : pub.status === "Presented"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-amber-500/20 text-amber-400"
                        }`}
                      >
                        {pub.status}
                      </span>
                      {pub.link ? (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Open publication"
                          className="text-teal-400 hover:text-teal-300 transition-colors duration-200"
                        >
                          <ExternalLink size={16} />
                        </a>
                      ) : (
                        <span className="text-gray-500 text-xs italic">
                          Coming soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Interests */}
          <div className="mt-16 bg-gradient-to-r from-teal-500/10 to-blue-500/10 p-8 rounded-xl border border-teal-400/30">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Current Research Interests
              </h3>
              <p className="text-gray-400">
                Areas of active investigation and future research directions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Microscope className="text-white" size={24} />
                </div>
                <h4 className="text-white font-semibold mb-2">
                  Climate Engineering
                </h4>
                <p className="text-gray-400 text-sm">
                  Adaptation strategies for climate change impacts
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="text-white" size={24} />
                </div>
                <h4 className="text-white font-semibold mb-2">
                  Smart Infrastructure
                </h4>
                <p className="text-gray-400 text-sm">
                  IoT and AI-enabled infrastructure systems
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Building className="text-white" size={24} />
                </div>
                <h4 className="text-white font-semibold mb-2">
                  Sustainable Design
                </h4>
                <p className="text-gray-400 text-sm">
                  Eco-friendly construction methodologies
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h4 className="text-white font-semibold mb-2">Digital Twins</h4>
                <p className="text-gray-400 text-sm">
                  Virtual modeling of physical infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
