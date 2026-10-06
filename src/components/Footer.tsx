import { Github, Linkedin, Mail } from 'lucide-react';

const links = [
  { icon: Github, href: 'https://github.com/Chi2785443', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/chinedu-aguwa/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:chineduaguwaofficial@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808]">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row md:px-8">
        <p className="text-sm text-[#777]">&copy; {new Date().getFullYear()} Chinedu Aguwa</p>
        <div className="flex items-center gap-5">
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="text-[#777] transition-colors duration-200 hover:text-[#e7a3b5]"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
