"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import WordsPullUpMultiStyle from "./animations/WordsPullUpMultiStyle";
import { projects } from "@/lib/projects";

const CARD_EASE = [0.22, 1, 0.36, 1] as const;

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

interface FeatureCard {
  number: string;
  title: string;
  icon: string;
  items: string[];
}

const cards: FeatureCard[] = [
  {
    number: "01",
    title: "Python Backend.",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
    items: [
      "FastAPI · WebSockets · REST APIs",
      "Redis Pub/Sub · NumPy vectorized pipelines",
      "InfluxDB v3 · PostgreSQL · Microservices",
      "Message batching · Backpressure handling",
      "Keycloak JWT auth · Token refresh logic",
      "Multi-threading · Async event loops",
    ],
  },
  {
    number: "02",
    title: "Frontend & Charts.",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
    items: [
      "Next.js · React · TypeScript",
      "TradingView Lightweight Charts",
      "Candle · Smoothing · Volume · Spike charts",
      "Socket.IO · Event bus architecture",
      "State managers · Dark/light theme system",
      "Fully responsive mobile layouts",
    ],
  },
  {
    number: "03",
    title: "Fintech & Trading.",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
    items: [
      "Zerodha KiteTicker · Delta Exchange API",
      "Supertrend · ATR · SMA · EMA · ZLMA",
      "Space-Time Reversal Indicator (v1–v4)",
      "Options chain · Auto strike selection",
      "Forward testing · Live order execution",
      "Telegram Bot · WhatsApp API integration",
    ],
  },
];

function FeatureCard({ card, delay }: { card: FeatureCard; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full"
      style={{ background: "#212121" }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: CARD_EASE }}
    >
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={card.icon} alt="" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg mb-6 object-cover" />
        <div className="flex items-start justify-between gap-2 mb-6">
          <h3 className="text-base sm:text-lg md:text-xl font-medium leading-snug" style={{ color: "#E1E0CC" }}>
            {card.title}
          </h3>
          <span className="text-[10px] tracking-widest shrink-0 mt-1" style={{ color: "rgba(222,219,200,0.3)" }}>
            {card.number}
          </span>
        </div>
        <ul className="space-y-3">
          {card.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <Check size={13} className="mt-0.5 shrink-0" style={{ color: "#DEDBC8" }} />
              <span className="text-xs sm:text-sm leading-snug text-gray-400">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href="#contact"
        className="inline-flex items-center gap-1.5 mt-8 text-xs sm:text-sm font-medium transition-opacity hover:opacity-80"
        style={{ color: "rgba(222,219,200,0.6)" }}
      >
        Learn more <ArrowRight size={13} style={{ transform: "rotate(-45deg)" }} />
      </Link>
    </motion.div>
  );
}

const projectListItems = [
  {
    slug: "laboratory-management-system",
    name: "Laboratory Management System",
    stack: "Python · FastAPI · Next.js · PostgreSQL · Keycloak · WhatsApp API · Docker",
    desc: "Production-deployed lab platform with patient tracking, automated WhatsApp notifications, and Keycloak RBAC on GCP.",
    status: "live" as const,
  },
  {
    slug: "trendedge",
    name: "TrendEdge",
    stack: "Python · FastAPI · Next.js · Socket.IO · Zerodha API · PostgreSQL",
    desc: "Real-time trading platform — Supertrend signals, automated strike selection, sub-second data streaming at 2+ req/sec.",
    status: "completed" as const,
  },
  {
    slug: "spacetime",
    name: "SpaceTime",
    stack: "Python · FastAPI · Redis · InfluxDB · PostgreSQL · Microservices · TradingView",
    desc: "Market data platform ingesting 10,000+ ticks/sec from DTN live feed via Redis Pub/Sub and multi-chart event bus.",
    status: "completed" as const,
  },
  {
    slug: "company-management-system",
    name: "Company Management System",
    stack: "Python · FastAPI · Next.js · Keycloak · PostgreSQL · FullCalendar",
    desc: "Enterprise platform — project management, finance, invoicing, expense tracking, RBAC via Keycloak.",
    status: "completed" as const,
  },
  {
    slug: "delta-exchange-automation",
    name: "Delta Exchange Automation",
    stack: "Python · FastAPI · WebSockets · Telegram Bot · Delta Exchange API",
    desc: "Multi-symbol automated trading system with real-time monitoring, signal processing, and Telegram alerts.",
    status: "completed" as const,
  },
];

export default function FeaturedSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const videoRef = useRef(null);
  const videoInView = useInView(videoRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative min-h-screen bg-black py-24 md:py-36 px-6 md:px-10 overflow-hidden">
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <WordsPullUpMultiStyle
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-snug"
              segments={[
                { text: "Real skills, built in", style: { color: "#E1E0CC" } },
                { text: "production.", style: { color: "#E1E0CC" } },
              ]}
            />
          </motion.div>
          <motion.p
            className="mt-4 text-lg sm:text-xl md:text-2xl font-normal text-gray-500"
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            From 10,000+ ticks/sec pipelines to full-stack trading platforms.
          </motion.p>
        </div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:h-[520px]">
          <motion.div
            ref={videoRef}
            className="rounded-2xl md:rounded-3xl overflow-hidden relative lg:col-span-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={videoInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: CARD_EASE }}
          >
            <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline src={VIDEO_URL} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              <p className="text-sm md:text-base font-medium" style={{ color: "#E1E0CC" }}>
                Your code,<br />production-ready.
              </p>
            </div>
          </motion.div>
          {cards.map((card, i) => (
            <FeatureCard key={card.number} card={card} delay={(i + 1) * 0.15} />
          ))}
        </div>

        {/* Projects list */}
        <div id="projects" className="mt-20 md:mt-28">
          <motion.p
            className="text-[10px] tracking-[0.25em] uppercase mb-10"
            style={{ color: "rgba(222,219,200,0.4)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.p>

          <div className="space-y-0">
            {projectListItems.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex flex-col md:flex-row md:items-center justify-between py-7 border-t transition-colors"
                  style={{ borderColor: "rgba(222,219,200,0.07)" }}
                >
                  <div className="flex items-start gap-6">
                    <span className="text-[11px] tracking-widest mt-1 shrink-0 tabular-nums" style={{ color: "rgba(222,219,200,0.2)" }}>
                      0{i + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-base md:text-lg font-medium group-hover:opacity-70 transition-opacity" style={{ color: "#E1E0CC" }}>
                          {project.name}
                        </h4>
                        {project.status === "live" && (
                          <span className="inline-flex items-center gap-1.5 text-[10px] tracking-widest uppercase" style={{ color: "#4ade80" }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Live
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] sm:text-xs tracking-wide mb-2" style={{ color: "rgba(222,219,200,0.3)" }}>
                        {project.stack}
                      </p>
                      <p className="text-xs sm:text-sm leading-relaxed max-w-lg text-gray-500">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="mt-4 md:mt-0 shrink-0 opacity-20 group-hover:opacity-60 transition-opacity"
                    style={{ color: "#E1E0CC" }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
