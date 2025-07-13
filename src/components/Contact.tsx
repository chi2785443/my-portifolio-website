import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import emailjs from "emailjs-com";
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "neduaguwa443@gmail.com",
      href: "mailto:neduaguwa443@gmail.com",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 810 547 1046",
      href: "tel:+2348105471046",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Abuja, Nigeria",
      href: "#",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Chi2785443",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chinedu-aguwa/",
      color: "hover:text-blue-400",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/2348105471046",
      color: "hover:text-green-400",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-6" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how we can
              collaborate on your next project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get In Touch
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities—whether it's
                  engineering consulting, software development, or research
                  collaboration. Feel free to reach out.
                </p>
              </div>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    aria-label={info.label}
                    className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-teal-400 transition-all duration-300 transform hover:scale-105"
                  >
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${info.color}`}
                    >
                      <Icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </a>
                );
              })}

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Connect With Me
                </h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-gray-800 rounded-lg border border-gray-700 text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 p-6 rounded-xl border border-teal-400/30">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Current Availability
                </h4>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-semibold">
                    Available for new projects
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  I typically respond within 24 hours. For urgent matters, feel
                  free to call or message via WhatsApp.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-green-400">
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-400 text-sm font-semibold mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-400 text-sm font-semibold mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-400 text-sm font-semibold mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-teal-400 focus:outline-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="engineering">
                      Engineering Consultation
                    </option>
                    <option value="software">Software Development</option>
                    <option value="research">Research Collaboration</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-400 text-sm font-semibold mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
