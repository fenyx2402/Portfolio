"use client";

import { useRef, useEffect } from "react";
import { Globe, ArrowRight, Mail } from "lucide-react";

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadingOutRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animFrame = 0;

    const fade = (from: number, to: number, onDone?: () => void) => {
      cancelAnimationFrame(animFrame);
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / 500, 1);
        video.style.opacity = String(from + (to - from) * t);
        if (t < 1) {
          animFrame = requestAnimationFrame(tick);
        } else {
          onDone?.();
        }
      };
      animFrame = requestAnimationFrame(tick);
    };

    const handleCanPlay = () => {
      video.play().catch(() => {});
      fade(0, 1);
    };

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const remaining = video.duration - video.currentTime;
      if (remaining <= 0.55 && !fadingOutRef.current) {
        fadingOutRef.current = true;
        const current = parseFloat(video.style.opacity) || 1;
        fade(current, 0);
      }
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      fadingOutRef.current = false;
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
        fade(0, 1);
      }, 100);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <section className="min-h-screen bg-black overflow-hidden relative flex flex-col">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        style={{ opacity: 0 }}
        muted
        autoPlay
        playsInline
        preload="auto"
        src={VIDEO_URL}
      />

      {/* Navbar */}
      <div className="relative z-20 px-6 py-6">
        <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <span
              className="text-white font-semibold text-lg"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              AP
            </span>
            <div className="hidden md:flex items-center gap-8 ml-8">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white text-sm font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Akupowar2403"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm font-medium hidden md:block"
            >
              GitHub
            </a>
            <a
              href="mailto:powarakanksha9188@gmail.com"
              className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
        <p className="text-white/50 text-xs md:text-sm tracking-widest uppercase mb-6">
          Software Developer · Python Backend · Full Stack
        </p>
        <h1
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white tracking-tight mb-8"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Akanksha Powar
        </h1>
        <div className="max-w-xl w-full space-y-6">
          <p className="text-white/70 text-sm md:text-base leading-relaxed px-4">
            Building scalable real-time systems — fintech platforms, market data
            pipelines, and full-stack applications that move fast and hold up
            under pressure.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="#projects"
              className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors inline-flex items-center gap-2"
            >
              View my work <ArrowRight size={16} />
            </a>
            <a
              href="mailto:powarakanksha9188@gmail.com"
              className="bg-white rounded-full px-8 py-3 text-black text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* Social icons */}
      <div className="relative z-10 flex justify-center gap-4 pb-12">
        <a
          href="https://github.com/Akupowar2403"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <GithubIcon size={20} />
        </a>
        <a
          href="https://linkedin.com/in/akanksha-powar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <LinkedinIcon size={20} />
        </a>
        <a
          href="mailto:powarakanksha9188@gmail.com"
          aria-label="Email"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <Mail size={20} />
        </a>
        <a
          href="https://portfolio.fenyxn.in"
          aria-label="Website"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <Globe size={20} />
        </a>
      </div>
    </section>
  );
}
