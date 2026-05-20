"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WordsPullUp from "./animations/WordsPullUp";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { y: 24, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, delay, ease: EASE },
});

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-black overflow-hidden flex flex-col">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(222,219,200,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Noise overlay */}
      <div className="noise-overlay absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay" />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* Main content — bottom aligned */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-6 md:px-10 pb-10 md:pb-14">
        <div className="max-w-7xl mx-auto grid grid-cols-12 items-end gap-4">

          {/* Left — giant name */}
          <div className="col-span-12 lg:col-span-8">
            {/* Role label */}
            <motion.p
              className="text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-4 md:mb-6"
              style={{ color: "rgba(222,219,200,0.5)" }}
              {...fadeUp(0.1)}
            >
              Software Developer · Full Stack · Python Backend
            </motion.p>

            {/* Giant name */}
            <h1
              className="font-bold leading-[0.85] tracking-[-0.04em]"
              style={{
                fontSize: "clamp(4rem, 14vw, 13rem)",
                color: "#E1E0CC",
              }}
            >
              <WordsPullUp text="Akanksha" delay={0.15} />
              <br />
              <span className="inline-flex flex-wrap">
                <span className="overflow-hidden inline-block">
                  <motion.span
                    className="inline-block"
                    style={{ color: "rgba(222,219,200,0.25)" }}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.75, delay: 0.23, ease: EASE }}
                  >
                    Powar
                  </motion.span>
                </span>
              </span>
            </h1>
          </div>

          {/* Right — description + CTA */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 lg:pb-3">
            <motion.p
              className="text-xs sm:text-sm leading-relaxed"
              style={{ color: "rgba(222,219,200,0.55)", lineHeight: 1.7 }}
              {...fadeUp(0.5)}
            >
              Building scalable real-time systems — fintech platforms, market
              data pipelines, and full-stack applications that move fast and hold
              up under pressure.
            </motion.p>

            {/* CTA Button */}
            <motion.div {...fadeUp(0.65)}>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 bg-primary rounded-full pl-5 pr-1 py-1 font-medium text-sm transition-all duration-300 hover:gap-3"
                style={{ color: "#000" }}
              >
                View my work
                <span className="bg-black rounded-full w-9 h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight size={15} style={{ color: "#E1E0CC" }} />
                </span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom meta row */}
        <div className="max-w-7xl mx-auto mt-8 flex items-center justify-between">
          <motion.p
            className="text-[10px] sm:text-xs tracking-widest uppercase"
            style={{ color: "rgba(222,219,200,0.3)" }}
            {...fadeUp(0.8)}
          >
            Based in Sangli, Maharashtra · Open to remote
          </motion.p>
          <motion.div
            className="flex items-center gap-1"
            style={{ color: "rgba(222,219,200,0.3)" }}
            {...fadeUp(0.85)}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs tracking-widest uppercase">
              Available for hire
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
