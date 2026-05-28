"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "powarakanksha9188@gmail.com",
    href: "mailto:powarakanksha9188@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Akupowar2403",
    href: "https://github.com/Akupowar2403",
  },
  {
    icon: Linkedin,
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
