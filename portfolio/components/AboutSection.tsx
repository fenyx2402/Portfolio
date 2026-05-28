"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "./animations/AnimatedText";
import WordsPullUpMultiStyle from "./animations/WordsPullUpMultiStyle";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function AboutSection() {
  const labelRef = useRef(null);
  const labelInView = useInView(labelRef, { once: true, margin: "-50px" });

  return (
    <section id="about" className="bg-black py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl md:rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20" style={{ background: "#101010" }}>

          {/* Label */}
          <motion.p
            ref={labelRef}
            className="text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-8 md:mb-12 text-center"
            style={{ color: "rgba(222,219,200,0.5)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={labelInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
          >
            Software Developer
          </motion.p>

          {/* Multi-style pull-up heading */}
          <h2
            className="text-center leading-[0.95] tracking-[-0.02em] mb-10 md:mb-14 mx-auto"
            style={{ fontSize: "clamp(1.6rem, 4.5vw, 3.75rem)", maxWidth: "820px" }}
          >
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: "I am Akanksha Powar,",
                  className: "font-normal",
                  style: { color: "#E1E0CC" },
                },
                {
                  text: "a software developer.",
                  className: "font-normal",
                  style: {
                    fontFamily: '"Instrument Serif", serif',
                    fontStyle: "italic",
                    color: "rgba(222,219,200,0.55)",
                  },
                },
                {
                  text: "I build real-time systems that scale.",
                  className: "font-normal",
                  style: { color: "rgba(222,219,200,0.4)", fontSize: "0.72em" },
                },
              ]}
            />
          </h2>

          {/* Divider */}
          <div className="w-12 h-px mx-auto mb-10 md:mb-14" style={{ background: "rgba(222,219,200,0.12)" }} />

          {/* Scroll-linked animated bio */}
          <AnimatedText
            text="Over the last year, I have worked at Secret Weapon Trading Solution building scalable real-time fintech applications — REST APIs handling 2+ requests per second, WebSocket pipelines processing 10,000+ ticks per second, and Keycloak-secured microservices on AWS. My stack spans Python, FastAPI, Next.js, PostgreSQL, Redis, and InfluxDB. I care deeply about clean architecture, fast feedback loops, and systems that hold up under pressure."
            className="text-center mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
            style={{
              color: "#DEDBC8",
              maxWidth: "680px",
              lineHeight: 1.85,
            } as React.CSSProperties}
          />

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px mt-16 md:mt-20 rounded-2xl overflow-hidden"
            style={{ background: "rgba(222,219,200,0.06)" }}
          >
            {[
              { value: "10+", label: "Months experience" },
              { value: "4", label: "Production projects" },
              { value: "8.14", label: "B.Tech CGPA" },
              { value: "10K+", label: "Ticks per second" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center justify-center py-8 px-4 text-center"
                style={{ background: "#101010" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              >
                <span
                  className="font-bold leading-none mb-2"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#E1E0CC" }}
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
