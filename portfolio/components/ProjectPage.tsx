"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/projects";

const EASE = [0.16, 1, 0.3, 1] as const;

function fade(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  };
}

export default function ProjectPage({ project }: { project: Project }) {
  const statusColor =
    project.status === "live"
      ? "#4ade80"
      : project.status === "in-progress"
      ? "#facc15"
      : "rgba(222,219,200,0.4)";

  return (
    <main className="bg-black min-h-screen" style={{ color: "#E1E0CC" }}>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col overflow-hidden">
        {/* Video background */}
        {project.videoUrl && (
          <>
            <video
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 0.35 }}
              autoPlay
              loop
              muted
              playsInline
              src={project.videoUrl}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
          </>
        )}

        {/* Nav bar */}
        <div className="relative z-10 flex items-center justify-between px-6 md:px-10 pt-8 pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
            style={{ color: "rgba(222,219,200,0.7)" }}
          >
            <ArrowLeft size={15} />
            Back to portfolio
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
              style={{ color: "rgba(222,219,200,0.7)" }}
            >
              GitHub <ArrowUpRight size={14} />
            </a>
          )}
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-10 pb-16 md:pb-20 max-w-6xl mx-auto w-full">
          <motion.p className="text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color: "rgba(222,219,200,0.45)" }} {...fade(0.05)}>
            {project.category}
          </motion.p>

          <motion.h1
            className="font-bold leading-[0.9] tracking-[-0.03em] mb-6"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)", color: "#E1E0CC", fontFamily: "'Instrument Serif', serif" }}
            {...fade(0.1)}
          >
            {project.name}
          </motion.h1>

          <motion.p
            className="text-sm md:text-base leading-relaxed max-w-2xl mb-8"
            style={{ color: "rgba(222,219,200,0.6)" }}
            {...fade(0.18)}
          >
            {project.tagline}
          </motion.p>

          {/* Stack pills */}
          <motion.div className="flex flex-wrap gap-2" {...fade(0.26)}>
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] sm:text-xs tracking-wide px-3 py-1 rounded-full"
                style={{ background: "rgba(222,219,200,0.08)", color: "rgba(222,219,200,0.7)", border: "1px solid rgba(222,219,200,0.12)" }}
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights bar */}
      <section className="border-y px-6 md:px-10 py-0" style={{ borderColor: "rgba(222,219,200,0.07)", background: "#101010" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x" style={{ divideColor: "rgba(222,219,200,0.07)" }}>
          {[
            { label: "Status", value: project.status.charAt(0).toUpperCase() + project.status.slice(1) },
            ...project.highlights,
          ].map((h) => (
            <div key={h.label} className="py-6 px-4 md:px-8 text-center">
              <p className="text-[10px] tracking-widest uppercase mb-1.5" style={{ color: "rgba(222,219,200,0.35)" }}>
                {h.label}
              </p>
              <p
                className="text-sm md:text-base font-medium"
                style={{ color: h.label === "Status" ? statusColor : "#E1E0CC" }}
              >
                {h.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-32 space-y-24 md:space-y-36">

        {/* Problem / Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <p className="text-[10px] tracking-[0.25em] uppercase mb-5" style={{ color: "rgba(222,219,200,0.35)" }}>
              The Problem
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(222,219,200,0.65)" }}>
              {project.problem}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <p className="text-[10px] tracking-[0.25em] uppercase mb-5" style={{ color: "rgba(222,219,200,0.35)" }}>
              The Solution
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(222,219,200,0.65)" }}>
              {project.solution}
            </p>
          </motion.div>
        </div>

        {/* Features grid */}
        <div>
          <motion.p
            className="text-[10px] tracking-[0.25em] uppercase mb-10"
            style={{ color: "rgba(222,219,200,0.35)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Features
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ background: "rgba(222,219,200,0.06)" }}>
            {project.features.map((feat, i) => (
              <motion.div
                key={feat.title}
                className="p-8 md:p-10"
                style={{ background: "#0a0a0a" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              >
                <h3 className="text-base md:text-lg font-medium mb-5" style={{ color: "#E1E0CC" }}>
                  {feat.title}
                </h3>
                <ul className="space-y-3">
                  {feat.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={13} className="mt-1 shrink-0" style={{ color: "#DEDBC8" }} />
                      <span className="text-sm leading-relaxed" style={{ color: "rgba(222,219,200,0.55)" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="text-[10px] tracking-[0.25em] uppercase mb-6" style={{ color: "rgba(222,219,200,0.35)" }}>
            Architecture
          </p>
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "#101010", border: "1px solid rgba(222,219,200,0.06)" }}>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(222,219,200,0.6)", fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}>
              &ldquo;{project.architecture}&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t" style={{ borderColor: "rgba(222,219,200,0.07)" }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ background: "#DEDBC8", color: "#000" }}
            >
              <ExternalLink size={14} /> View live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ border: "1px solid rgba(222,219,200,0.2)", color: "rgba(222,219,200,0.8)" }}
            >
              GitHub <ArrowUpRight size={14} />
            </a>
          )}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70 ml-auto"
            style={{ color: "rgba(222,219,200,0.45)" }}
          >
            <ArrowLeft size={14} /> Back to portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
