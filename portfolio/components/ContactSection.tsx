"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "powarakanksha9188@gmail.com",
    href: "mailto:powarakanksha9188@gmail.com",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/Akupowar2403",
    href: "https://github.com/Akupowar2403",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/akanksha-powar",
    href: "https://linkedin.com/in/akanksha-powar",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative bg-black py-28 md:py-40 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(255,255,255,0.03) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto" ref={ref}>
        <motion.p
          className="text-white/40 text-sm tracking-widest uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Get in touch
        </motion.p>

        <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-20 leading-[1.05]"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Let&apos;s build
          <br />
          <em className="italic text-white/50">something great.</em>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col gap-5">
            <p className="text-white/60 text-base md:text-lg leading-relaxed">
              Open to full-time roles, freelance projects, and interesting
              collaborations — Python backend, full-stack, or anything
              real-time. Let&apos;s talk.
            </p>
            <div className="flex items-center gap-2 text-white/30 text-sm">
              <MapPin size={13} />
              <span>Kolhapur, Maharashtra · Open to remote</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-white/30 text-sm">Available for hire</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {links.map(({ icon: Icon, label, value, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="liquid-glass rounded-2xl px-5 py-4 flex items-center justify-between group hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Icon
                    size={16}
                    className="text-white/40 group-hover:text-white/80 transition-colors shrink-0"
                  />
                  <div>
                    <p className="text-white/30 text-[10px] tracking-widest uppercase mb-0.5">
                      {label}
                    </p>
                    <p className="text-white/70 group-hover:text-white text-sm transition-colors">
                      {value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={15}
                  className="text-white/20 group-hover:text-white/50 transition-colors shrink-0"
                />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-white/20 text-xs tracking-widest uppercase">
            © 2025 Akanksha Powar · Kolhapur, India
          </p>
          <p
            className="text-white/20 text-sm italic"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Built with Next.js, Tailwind CSS &amp; Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}
