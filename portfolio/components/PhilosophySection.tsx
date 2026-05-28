"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";

export default function PhilosophySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="bg-black py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          Backend{" "}
          <em
            className="italic text-white/40"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            ×
          </em>{" "}
          Full Stack
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Video */}
          <motion.div
            className="rounded-3xl overflow-hidden aspect-[4/3]"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <video
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
              src={VIDEO_URL}
            />
          </motion.div>

          {/* Right: Text blocks */}
          <motion.div
            className="flex flex-col justify-center gap-8"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
                My expertise
              </p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Python · FastAPI · WebSockets · PostgreSQL · Redis · InfluxDB ·
                Microservices · Keycloak · JWT · AWS · CI/CD · Nginx · Next.js ·
                React · TypeScript · TradingView Charts · Socket.IO · Zerodha API ·
                Delta Exchange API · Telegram Bot API
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
                My approach
              </p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                I build production-grade systems with clean architecture and
                fast feedback loops. From real-time market data pipelines
                handling 10,000+ ticks per second to full-stack enterprise
                platforms — I care about systems that hold up under pressure
                and scale without friction.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
