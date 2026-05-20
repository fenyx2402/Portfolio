"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const skillGroups = [
  {
    number: "01",
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    number: "02",
    category: "Backend",
    skills: ["FastAPI", "REST APIs", "Socket.IO", "WebSockets", "Microservices", "JWT", "Keycloak"],
  },
  {
    number: "03",
    category: "Frontend",
    skills: ["Next.js", "React.js", "TypeScript", "TradingView Charts", "FullCalendar"],
  },
  {
    number: "04",
    category: "Databases",
    skills: ["PostgreSQL", "Redis", "InfluxDB"],
  },
  {
    number: "05",
    category: "Cloud & DevOps",
    skills: ["AWS", "CI/CD", "Nginx", "Certbot", "SSH", "DNS Config"],
  },
  {
    number: "06",
    category: "Fintech",
    skills: ["Zerodha API", "Delta Exchange API", "Trading Automation", "ATR", "Supertrend"],
  },
];

function SkillCard({
  group,
  index,
  isInView,
}: {
  group: (typeof skillGroups)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      className="rounded-2xl p-6 md:p-8 flex flex-col gap-5 relative overflow-hidden"
      style={{ background: "#111111", border: "1px solid rgba(222,219,200,0.06)" }}
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: EASE }}
    >
      {/* Number */}
      <span
        className="text-[10px] tracking-[0.3em] uppercase font-medium"
        style={{ color: "rgba(222,219,200,0.25)" }}
      >
        {group.number}
      </span>

      {/* Category */}
      <h3
        className="text-base md:text-lg font-semibold tracking-tight"
        style={{ color: "#E1E0CC" }}
      >
        {group.category}
      </h3>

      {/* Divider */}
      <div style={{ height: 1, background: "rgba(222,219,200,0.07)" }} />

      {/* Skill pills */}
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="text-[11px] sm:text-xs px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(222,219,200,0.06)",
              color: "rgba(222,219,200,0.65)",
              border: "1px solid rgba(222,219,200,0.08)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Subtle corner glow */}
      <div
        className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(222,219,200,0.04) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="bg-black py-24 md:py-36 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14 md:mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <motion.p
              className="text-[10px] tracking-[0.25em] uppercase mb-3"
              style={{ color: "rgba(222,219,200,0.4)" }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              Technical skills
            </motion.p>
            <motion.h2
              className="font-semibold tracking-tight leading-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", color: "#E1E0CC" }}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
            >
              What I work with.
            </motion.h2>
          </div>
          <motion.p
            className="text-xs sm:text-sm max-w-xs text-right hidden sm:block"
            style={{ color: "rgba(222,219,200,0.35)", lineHeight: 1.7 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          >
            6 domains · {skillGroups.reduce((a, g) => a + g.skills.length, 0)} technologies
          </motion.p>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
        >
          {skillGroups.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
        >
          {["Python", "FastAPI", "Next.js", "PostgreSQL", "AWS", "Redis"].map((tech) => (
            <span
              key={tech}
              className="text-[10px] sm:text-xs tracking-widest uppercase px-4 py-2 rounded-full"
              style={{
                color: "rgba(222,219,200,0.3)",
                border: "1px solid rgba(222,219,200,0.08)",
              }}
            >
              {tech}
            </span>
          ))}
          <span
            className="text-[10px] sm:text-xs tracking-widest uppercase px-4 py-2"
            style={{ color: "rgba(222,219,200,0.2)" }}
          >
            & more
          </span>
        </motion.div>

      </div>
    </section>
  );
}
