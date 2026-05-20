"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    number: "01",
    title: "TrendEdge",
    subtitle: "Real-Time Trading Platform",
    description:
      "Live market data streaming platform with WebSocket communication, automated options/equity trading logic, ATR/Supertrend calculations, and responsive trading dashboards.",
    tags: ["Python", "FastAPI", "Socket.IO", "Zerodha API", "PostgreSQL", "Next.js"],
    highlight: true,
  },
  {
    number: "02",
    title: "SpaceTime",
    subtitle: "Market Data Processing Platform",
    description:
      "Microservices-based real-time market data system with Redis Pub/Sub pipelines, TradingView candlestick charts, and full AWS deployment with CI/CD and Nginx.",
    tags: ["Python", "Redis", "InfluxDB", "PostgreSQL", "Next.js", "Microservices", "AWS"],
    highlight: false,
  },
  {
    number: "03",
    title: "Company Management System",
    subtitle: "Web & Desktop Enterprise Platform",
    description:
      "Full-featured enterprise platform built as both a web app and a native desktop application. Includes project management, finance, invoicing, expense reporting, and scheduling. The desktop app (Electron) features a real-time messaging system, desktop push notifications via Socket.IO, and a system tray integration for background operation.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Next.js", "Keycloak", "Electron", "Socket.IO", "FullCalendar"],
    highlight: false,
  },
  {
    number: "04",
    title: "Delta Exchange Bot",
    subtitle: "Trading Automation System",
    description:
      "Automated multi-symbol trading system with Telegram bot notifications, real-time monitoring, and scalable backend architecture for strategy execution.",
    tags: ["Python", "FastAPI", "Delta Exchange API", "Telegram Bot API"],
    highlight: true,
  },
];

function ProjectCard({
  project,
  index,
  isInView,
  large = false,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
  large?: boolean;
}) {
  return (
    <motion.div
      className="group relative rounded-2xl p-7 md:p-9 flex flex-col justify-between overflow-hidden cursor-default"
      style={{
        background: "#0e0e0e",
        border: "1px solid rgba(222,219,200,0.07)",
        minHeight: large ? "320px" : "260px",
      }}
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: EASE }}
      whileHover={{ borderColor: "rgba(222,219,200,0.18)" }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(222,219,200,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <span
          className="text-[10px] tracking-[0.3em] uppercase font-medium"
          style={{ color: "rgba(222,219,200,0.25)" }}
        >
          {project.number}
        </span>

        {/* Arrow link */}
        <motion.div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300"
          style={{ border: "1px solid rgba(222,219,200,0.12)" }}
          whileHover={{ scale: 1.1, borderColor: "rgba(222,219,200,0.4)" }}
        >
          <ArrowRight
            size={13}
            style={{
              color: "rgba(222,219,200,0.5)",
              transform: "rotate(-45deg)",
            }}
          />
        </motion.div>
      </div>

      {/* Title block */}
      <div className="flex-1">
        <h3
          className="font-semibold tracking-tight leading-tight mb-1"
          style={{
            fontSize: large ? "clamp(1.4rem, 2.5vw, 2rem)" : "clamp(1.1rem, 2vw, 1.5rem)",
            color: "#E1E0CC",
          }}
        >
          {project.title}
        </h3>
        <p
          className="text-xs sm:text-sm mb-4"
          style={{ color: "rgba(222,219,200,0.35)", fontStyle: "italic" }}
        >
          {project.subtitle}
        </p>
        <p
          className="text-xs sm:text-sm leading-relaxed"
          style={{ color: "rgba(222,219,200,0.5)", lineHeight: 1.75 }}
        >
          {project.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full"
            style={{
              background: "rgba(222,219,200,0.05)",
              color: "rgba(222,219,200,0.45)",
              border: "1px solid rgba(222,219,200,0.07)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="bg-black py-24 md:py-36 px-6 md:px-10">
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
              Selected work
            </motion.p>
            <motion.h2
              className="font-semibold tracking-tight leading-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", color: "#E1E0CC" }}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
            >
              Things I&apos;ve built.
            </motion.h2>
          </div>

          <motion.a
            href="https://github.com/Akupowar2403"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden sm:inline-flex items-center gap-2 text-xs sm:text-sm"
            style={{ color: "rgba(222,219,200,0.4)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            whileHover={{ color: "#E1E0CC" } as never}
          >
            View GitHub
            <ArrowRight size={14} style={{ transform: "rotate(-45deg)" }} />
          </motion.a>
        </div>

        {/* Asymmetric grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">

          {/* Row 1: large left (7 cols) + small right (5 cols) */}
          <div className="md:col-span-7">
            <ProjectCard project={projects[0]} index={0} isInView={isInView} large />
          </div>
          <div className="md:col-span-5">
            <ProjectCard project={projects[1]} index={1} isInView={isInView} />
          </div>

          {/* Row 2: small left (5 cols) + large right (7 cols) */}
          <div className="md:col-span-5">
            <ProjectCard project={projects[2]} index={2} isInView={isInView} />
          </div>
          <div className="md:col-span-7">
            <ProjectCard project={projects[3]} index={3} isInView={isInView} large />
          </div>

        </div>

        {/* Footer note */}
        <motion.p
          className="mt-10 text-center text-[11px] sm:text-xs"
          style={{ color: "rgba(222,219,200,0.2)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
        >
          All projects built at Secret Weapon Trading Solution Pvt. Limited
        </motion.p>

      </div>
    </section>
  );
}
