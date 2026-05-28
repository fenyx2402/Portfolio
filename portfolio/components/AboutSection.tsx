"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative bg-black pt-32 md:pt-44 pb-10 md:pb-14 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(255,255,255,0.03) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto" ref={ref}>
        <motion.p
          className="text-white/40 text-sm tracking-widest uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.p>
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Turning complex{" "}
          <em
            className="italic text-white/60"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            problems
          </em>{" "}
          into{" "}
          <br className="hidden md:block" />
          systems that{" "}
          <em
            className="italic text-white/60"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            scale, perform, and last.
          </em>
        </motion.h2>
      </div>
    </section>
  );
}
