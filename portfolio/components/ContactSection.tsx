"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const EASE = [0.16, 1, 0.3, 1] as const;

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
  return (
    <section id="contact" className="bg-black pt-24 md:pt-36 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Big CTA heading */}
        <div className="border-t pb-20 md:pb-28 pt-16 md:pt-20"
          style={{ borderColor: "rgba(222,219,200,0.07)" }}>

          <motion.p
            className="text-[10px] tracking-[0.25em] uppercase mb-6"
            style={{ color: "rgba(222,219,200,0.4)" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            Get in touch
          </motion.p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">

            {/* Left — heading + sub */}
            <div className="max-w-2xl">
              <motion.h2
                className="font-bold tracking-tight leading-[0.9] mb-6"
                style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "#E1E0CC" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              >
                Let&apos;s build
                <br />
                <span style={{ color: "rgba(222,219,200,0.3)" }}>
                  something great.
                </span>
              </motion.h2>

              <motion.p
                className="text-sm md:text-base leading-relaxed max-w-md"
                style={{ color: "rgba(222,219,200,0.45)", lineHeight: 1.8 }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              >
                I&apos;m currently open to full-time roles and freelance projects.
                If you have something in mind — reach out, I reply fast.
              </motion.p>

              {/* Location pill */}
              <motion.div
                className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full"
                style={{
                  border: "1px solid rgba(222,219,200,0.1)",
                  color: "rgba(222,219,200,0.4)",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
              >
                <MapPin size={12} />
                <span className="text-xs tracking-wide">Kolhapur, Maharashtra · Open to remote</span>
              </motion.div>
            </div>

            {/* Right — primary email CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            >
              <a
                href="mailto:powarakanksha9188@gmail.com"
                className="group inline-flex items-center gap-3 bg-primary rounded-full pl-6 pr-2 py-2 font-semibold text-sm md:text-base transition-all duration-300 hover:gap-4"
                style={{ color: "#000" }}
              >
                Say hello
                <span className="bg-black rounded-full w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                  <ArrowRight size={16} style={{ color: "#E1E0CC" }} />
                </span>
              </a>
            </motion.div>

          </div>

          {/* Contact links grid */}
          <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px"
            style={{ background: "rgba(222,219,200,0.06)" }}>
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 p-6 md:p-8 transition-colors duration-300"
                style={{ background: "#000" }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: EASE }}
                whileHover={{ background: "#0a0a0a" } as never}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                  style={{ border: "1px solid rgba(222,219,200,0.1)" }}
                >
                  <link.icon size={15} style={{ color: "rgba(222,219,200,0.5)" }} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] tracking-widest uppercase mb-1"
                    style={{ color: "rgba(222,219,200,0.3)" }}>
                    {link.label}
                  </p>
                  <p className="text-xs sm:text-sm truncate transition-colors duration-300"
                    style={{ color: "rgba(222,219,200,0.65)" }}>
                    {link.value}
                  </p>
                </div>
                <ArrowRight
                  size={14}
                  className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: "rgba(222,219,200,0.5)", transform: "rotate(-45deg)" }}
                />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className="border-t py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(222,219,200,0.07)" }}
        >
          <p className="text-[11px] tracking-widest uppercase"
            style={{ color: "rgba(222,219,200,0.2)" }}>
            © 2025 Akanksha Powar
          </p>
          <p className="text-[11px]"
            style={{ color: "rgba(222,219,200,0.15)" }}>
            Designed &amp; built with Next.js · Tailwind · Framer Motion
          </p>
        </div>

      </div>
    </section>
  );
}
