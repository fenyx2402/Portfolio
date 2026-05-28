"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WordsPullUp from "./animations/WordsPullUp";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";

const EASE = [0.16, 1, 0.3, 1] as const;

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#skills" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
  { label: "Hire me", href: "mailto:powarakanksha9188@gmail.com" },
];

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="h-screen p-4 md:p-6 bg-black">
      <div ref={ref} className="relative h-full rounded-2xl md:rounded-[2rem] overflow-hidden">

        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={VIDEO_URL}
        />

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* Navbar — centered pill hanging from top */}
        <div className="absolute top-0 left-0 right-0 flex justify-center z-20">
          <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 md:py-3">
            <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[10px] sm:text-xs md:text-sm transition-colors whitespace-nowrap"
                    style={{ color: "rgba(225,224,204,0.8)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(225,224,204,0.8)")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom content — 12-column grid */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-4 md:px-8 pb-6 md:pb-10">
          <div className="grid grid-cols-12 items-end gap-4">

            {/* Left — giant name */}
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="font-medium leading-[0.85] tracking-[-0.07em]"
                style={{ color: "#E1E0CC" }}
              >
                <span className="block text-[22vw] sm:text-[20vw] md:text-[18vw] lg:text-[16vw] xl:text-[15vw]">
                  <WordsPullUp text="Akanksha" showAsterisk delay={0} />
                </span>
                <span
                  className="block text-[22vw] sm:text-[20vw] md:text-[18vw] lg:text-[16vw] xl:text-[15vw]"
                  style={{ color: "rgba(222,219,200,0.35)" }}
                >
                  <WordsPullUp text="Powar" delay={0.1} />
                </span>
              </h1>
            </div>

            {/* Right — description + CTA */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 lg:pb-3">
              {/* Role tag */}
              <motion.p
                className="text-[10px] tracking-[0.2em] uppercase"
                style={{ color: "rgba(222,219,200,0.45)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
              >
                Software Developer · Python · Full Stack
              </motion.p>

              {/* Description */}
              <motion.p
                className="text-xs sm:text-sm md:text-base"
                style={{ color: "rgba(222,219,200,0.7)", lineHeight: 1.2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              >
                Building scalable real-time systems — fintech platforms, market
                data pipelines, and full-stack applications that move fast and
                hold up under pressure.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
              >
                <a
                  href="#skills"
                  className="group inline-flex items-center gap-2 hover:gap-3 rounded-full pl-5 pr-1 py-1 font-medium text-sm sm:text-base transition-all duration-300"
                  style={{ background: "#DEDBC8", color: "#000" }}
                >
                  View my work
                  <span
                    className="rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0"
                    style={{ background: "#000" }}
                  >
                    <ArrowRight size={15} style={{ color: "#E1E0CC" }} />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Bottom meta row */}
          <div className="mt-6 flex items-center justify-between">
            <motion.p
              className="text-[10px] tracking-widest uppercase"
              style={{ color: "rgba(222,219,200,0.3)" }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9, ease: EASE }}
            >
              Based in Kolhapur, Maharashtra · Open to remote
            </motion.p>
            <motion.div
              className="flex items-center gap-1.5"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.0, ease: EASE }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] tracking-widest uppercase" style={{ color: "rgba(222,219,200,0.3)" }}>
                Available for hire
              </span>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
