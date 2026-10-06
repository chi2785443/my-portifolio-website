import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Github, Linkedin, CheckCircle, ArrowUpRight } from 'lucide-react';
import emailjs from 'emailjs-com';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const quickLinks = [
  { icon: Mail, label: 'Email me', value: 'chineduaguwaofficial@gmail.com', href: 'mailto:chineduaguwaofficial@gmail.com' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Chi2785443' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/chinedu-aguwa/' },
];

const subjects = ['Engineering Consultation', 'Software Development', 'Research Collaboration', 'Other'];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const fieldClass =
  'w-full rounded-xl border border-[#2a2118]/10 bg-[#2a2118]/[0.05] px-4 py-3 text-sm text-[#2a2118] placeholder:text-[#2a2118]/40 transition-colors focus:border-[#b5546e] focus:bg-white focus:outline-none';

const OWNER_EMAIL = 'chineduaguwaofficial@gmail.com';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSendFailed(false);
    try {
      // `title` and `time` fill the placeholders in the EmailJS template
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { ...formData, title: formData.subject, time: new Date().toLocaleString() },
        PUBLIC_KEY,
      );
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS Error:', err);
      setSendFailed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // If sending fails, let the visitor send the same message from their own mail app
  const fallbackHref = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(
    formData.subject || 'Hello from your portfolio',
  )}&body=${encodeURIComponent(`${formData.message}\n\n${formData.name}\n${formData.email}`)}`;

  return (
    <section id="contact" className="bg-[#080808] px-4 py-16 md:px-8 md:py-24">
      <div
        className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] px-6 py-14 md:rounded-[2.5rem] md:px-14 md:py-20"
        style={{ background: 'linear-gradient(135deg,#6e2840 0%,#b5546e 55%,#f08aa8 100%)' }}
      >
        {/* Decoration */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-[#ffd27a]/20 blur-3xl" />
        <motion.div
          aria-hidden
          animate={{ y: [0, -14, 0], rotate: [-8, 4, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute right-[46%] top-10 hidden h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm lg:flex"
        >
          <Mail size={26} />
        </motion.div>
        <motion.div
          aria-hidden
          animate={{ y: [0, 12, 0], rotate: [6, -6, 6] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="pointer-events-none absolute bottom-16 right-[48%] hidden h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm lg:flex"
        >
          <Send size={22} />
        </motion.div>

        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="text-white"
          >
            <motion.p variants={itemVariants} className="mb-5 text-xs font-mono uppercase tracking-[0.18em] text-white/80">
              Contact
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-[clamp(2.4rem,5.4vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-0.04em]"
            >
              Got a problem worth solving?
              <br />
              <span className="text-[#2a1019]">Let's talk.</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-6 max-w-md text-base leading-relaxed text-white/85">
              A project, a research idea, or a role you think I'd fit. Send me a message and I'll reply myself.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 space-y-3">
              {quickLinks.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between gap-4 rounded-2xl bg-white/15 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  <span className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-white transition-colors group-hover:bg-[#b5546e]">
                      <Icon size={20} />
                    </span>
                    <span>
                      <span className="block text-[11px] font-mono uppercase tracking-[0.1em] text-white/70 transition-colors group-hover:text-[#2a1019]/60">
                        {label}
                      </span>
                      <span className="block text-sm font-semibold text-white transition-colors group-hover:text-[#2a1019]">
                        {value}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight size={18} className="text-white/60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#b5546e]" />
                </a>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-2 rounded-full bg-[#2a1019]/40 px-4 py-2 text-sm font-semibold">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
                </span>
                Open to new projects
              </span>
              <span className="flex items-center gap-2">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white hover:text-[#b5546e]"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </span>
            </motion.div>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[1.75rem] bg-[#fbf6f1] p-6 shadow-[0_30px_80px_rgba(40,10,25,0.45)] md:p-9"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[380px] flex-col items-start justify-center gap-4 text-[#2a2118]"
                >
                  <CheckCircle size={44} className="text-[#b5546e]" />
                  <h3 className="text-3xl font-extrabold tracking-tight">Message sent.</h3>
                  <p className="text-[#2a2118]/70">Thanks. I'll reply as soon as I can, usually within a day.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 text-sm font-semibold text-[#b5546e] underline underline-offset-4"
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
                  className="space-y-5 text-[#2a2118]"
                >
                  <h3 className="text-2xl font-extrabold tracking-tight">Say hello</h3>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {[
                      { id: 'name', label: 'Your name', type: 'text', placeholder: 'Jane Doe' },
                      { id: 'email', label: 'Your email', type: 'email', placeholder: 'jane@example.com' },
                    ].map(({ id, label, type, placeholder }) => (
                      <div key={id}>
                        <label htmlFor={id} className="mb-1.5 block text-xs font-semibold text-[#2a2118]/70">
                          {label}
                        </label>
                        <input
                          type={type}
                          id={id}
                          name={id}
                          value={formData[id as keyof typeof formData]}
                          onChange={handleChange}
                          required
                          className={fieldClass}
                          placeholder={placeholder}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-[#2a2118]/70">What's it about?</label>
                    <div className="flex flex-wrap gap-2">
                      {subjects.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setFormData((p) => ({ ...p, subject: s }))}
                          className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition-all duration-200 ${
                            formData.subject === s
                              ? 'border-[#b5546e] bg-[#b5546e] text-white'
                              : 'border-[#2a2118]/15 text-[#2a2118]/70 hover:border-[#b5546e] hover:text-[#b5546e]'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="subject" value={formData.subject} required />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-[#2a2118]/70">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`${fieldClass} resize-none`}
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex w-full items-center justify-center gap-2 rounded-xl bg-[#2a1019] py-4 text-sm font-bold text-white transition-opacity ${
                      isSubmitting ? 'opacity-60' : 'hover:bg-black'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} /> Send message
                      </>
                    )}
                  </motion.button>

                  {sendFailed && (
                    <div role="alert" className="rounded-xl border border-[#b5546e]/30 bg-[#b5546e]/10 p-4 text-sm text-[#2a2118]">
                      <p className="font-semibold">Sorry, that didn't go through.</p>
                      <p className="mt-1 text-[#2a2118]/70">
                        Your message is still here.{' '}
                        <a href={fallbackHref} className="font-semibold text-[#b5546e] underline underline-offset-4">
                          Send it from your email app
                        </a>{' '}
                        or write to {OWNER_EMAIL}.
                      </p>
                    </div>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
