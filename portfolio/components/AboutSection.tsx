"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "./animations/AnimatedText";
import WordsPullUp from "./animations/WordsPullUp";

const EASE = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: "10", label: "Months experience" },
  { value: "4", label: "Production projects" },
  { value: "8.4", label: "B.Tech CGPA" },
  { value: "∞", label: "Lines of Python" },
];

export default function AboutSection() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="bg-black py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Card */}
        <div
          className="rounded-2xl md:rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20"
          style={{ background: "#101010" }}
        >
          {/* Label */}
          <motion.p
            className="text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-8 md:mb-12 text-center"
            style={{ color: "rgba(222,219,200,0.5)" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            About me
          </motion.p>

          {/* Main heading */}
          <h2
            className="text-center leading-[0.95] tracking-[-0.03em] mb-10 md:mb-14 mx-auto"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 4rem)",
              color: "#E1E0CC",
              maxWidth: "820px",
            }}
          >
            {/* Line 1 — normal Almarai */}
            <span className="block">
              <WordsPullUp text="I'm Akanksha Powar," delay={0} />
            </span>

            {/* Line 2 — italic Instrument Serif */}
            <span
              className="block mt-1"
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontStyle: "italic",
                color: "rgba(222,219,200,0.6)",
              }}
            >
              <WordsPullUp text="a full-stack developer." delay={0.15} />
            </span>

            {/* Line 3 — normal, smaller */}
            <span
              className="block mt-2"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 2rem)",
                color: "rgba(222,219,200,0.45)",
              }}
            >
              <WordsPullUp
                text="I craft real-time systems, APIs, and interfaces that scale."
                delay={0.3}
              />
            </span>
          </h2>

          {/* Divider */}
          <div
            className="w-12 h-px mx-auto mb-10 md:mb-14"
            style={{ background: "rgba(222,219,200,0.15)" }}
          />

          {/* Scroll-linked bio paragraph */}
          <AnimatedText
            text="Over the last ten months, I have worked at Secret Weapon Trading Solution building scalable real-time fintech applications — REST APIs, WebSocket pipelines, live market data systems, and Keycloak-secured microservices. My stack spans Python, FastAPI, Next.js, PostgreSQL, Redis, and AWS. I care deeply about the craft: clean architecture, fast feedback loops, and systems that hold up under pressure."
            className="text-center mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
            style={{
              color: "#DEDBC8",
              maxWidth: "680px",
              lineHeight: 1.85,
            } as React.CSSProperties}
          />

          {/* Stats grid */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-px mt-16 md:mt-20 rounded-2xl overflow-hidden"
            style={{ background: "rgba(222,219,200,0.06)" }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center justify-center py-8 px-4 text-center"
                style={{ background: "#101010" }}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              >
                <span
                  className="font-bold leading-none mb-2"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    color: "#E1E0CC",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[10px] sm:text-xs tracking-widest uppercase"
                  style={{ color: "rgba(222,219,200,0.4)" }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
