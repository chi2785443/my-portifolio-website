import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import MagneticButton from './ui/MagneticButton';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'chineduaguwa0@gmail.com', href: 'mailto:chineduaguwa0@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+234 810 547 1046', href: 'tel:+2348105471046' },
  { icon: MapPin, label: 'Location', value: 'Abuja, Nigeria', href: '#' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Chi2785443' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/chinedu-aguwa/' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/2348105471046' },
];

const subjects = ['Engineering Consultation', 'Software Development', 'Research Collaboration', 'Other'];

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS Error:', err);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-8">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.15em] text-[#2dd4bf] mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-[#f0f0f0]">
            Let's Work Together
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left, contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="space-y-8"
          >
            <motion.p variants={itemVariants} className="text-[#c0c0c0] leading-relaxed max-w-sm">
              I'm always excited to discuss new opportunities, engineering consulting, software development, or research collaboration. Feel free to reach out.
            </motion.p>

            {/* Contact rows */}
            <motion.div variants={itemVariants} className="space-y-0">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  data-cursor="link"
                  className="flex items-center gap-4 py-4 border-b border-white/5 last:border-0 group"
                >
                  <Icon size={15} className="text-[#2dd4bf] shrink-0" />
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.1em] text-[#888] mb-0.5">{label}</p>
                    <p className="text-[#f0f0f0] text-sm group-hover:text-[#2dd4bf] transition-colors duration-200">{value}</p>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-cursor="link"
                  className="text-[#888] hover:text-[#2dd4bf] transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>

            {/* Availability */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-[#c0c0c0]">Available for new projects</span>
            </motion.div>
          </motion.div>

          {/* Right, form */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col items-start justify-center h-full gap-4 py-12"
                >
                  <CheckCircle size={32} className="text-[#2dd4bf]" />
                  <h3 className="text-xl font-bold text-[#f0f0f0]">Message sent.</h3>
                  <p className="text-[#b8b8b8] text-sm">I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    data-cursor="button"
                    className="text-xs font-mono text-[#888] hover:text-[#2dd4bf] transition-colors mt-2"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="border-l-2 border-[#2dd4bf]/30 pl-8 space-y-8"
                >
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { id: 'name', label: 'Full Name', type: 'text', required: true },
                      { id: 'email', label: 'Email Address', type: 'email', required: true },
                    ].map(({ id, label, type, required }) => (
                      <motion.div
                        key={id}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                      >
                        <label htmlFor={id} className="block text-[10px] font-mono uppercase tracking-[0.12em] text-[#b8b8b8] mb-2">
                          {label}
                        </label>
                        <input
                          type={type}
                          id={id}
                          name={id}
                          value={formData[id as keyof typeof formData]}
                          onChange={handleChange}
                          required={required}
                          className="w-full bg-transparent border-b border-white/25 pb-2 text-[#f0f0f0] text-sm placeholder:text-[#666] focus:border-[#2dd4bf] focus:outline-none transition-colors duration-200"
                          placeholder={id === 'name' ? 'Your full name' : 'your@email.com'}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Subject pills */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <label className="block text-[10px] font-mono uppercase tracking-[0.12em] text-[#b8b8b8] mb-3">Subject</label>
                    <div className="flex flex-wrap gap-2">
                      {subjects.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setFormData((p) => ({ ...p, subject: s }))}
                          data-cursor="button"
                          className="text-xs px-3 py-1.5 rounded-full border transition-all duration-200"
                          style={{
                            borderColor: formData.subject === s ? 'rgba(45,212,191,0.5)' : 'rgba(255,255,255,0.08)',
                            color: formData.subject === s ? '#2dd4bf' : '#b8b8b8',
                            backgroundColor: formData.subject === s ? 'rgba(45,212,191,0.08)' : 'transparent',
                          }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="subject" value={formData.subject} required />
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                  >
                    <label htmlFor="message" className="block text-[10px] font-mono uppercase tracking-[0.12em] text-[#b8b8b8] mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-transparent border-b border-white/25 pb-2 text-[#f0f0f0] text-sm placeholder:text-[#666] focus:border-[#2dd4bf] focus:outline-none transition-colors duration-200 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </motion.div>

                  {/* Submit */}
                  <MagneticButton
                    type="submit"
                    className={`w-full py-4 bg-[#2dd4bf] text-black font-bold text-sm rounded-lg flex items-center justify-center gap-2 transition-opacity ${isSubmitting ? 'opacity-60' : 'hover:opacity-90'}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} /> Send Message
                      </>
                    )}
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
