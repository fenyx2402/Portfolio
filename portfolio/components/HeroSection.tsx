"use client";

import { useRef, useEffect } from "react";
import { Globe, ArrowRight, Camera, Share2 } from "lucide-react";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4";

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
            <Globe size={24} className="text-white" />
            <span className="text-white font-semibold text-lg">Asme</span>
            <div className="hidden md:flex items-center gap-8 ml-8">
              {["Features", "Pricing", "About"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/80 hover:text-white text-sm font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-white text-sm font-medium">Sign Up</button>
            <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
        <h1
          className="text-7xl md:text-8xl lg:text-9xl text-white tracking-tight whitespace-nowrap mb-8"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Know it then <em className="italic">all</em>.
        </h1>
        <div className="max-w-xl w-full space-y-4">
          <div className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent text-white placeholder:text-white/40 text-base outline-none"
            />
            <button className="bg-white rounded-full p-3 text-black shrink-0">
              <ArrowRight size={20} />
            </button>
          </div>
          <p className="text-white text-sm leading-relaxed px-4">
            Stay updated with the latest news and insights. Subscribe to our
            newsletter today and never miss out on exciting updates.
          </p>
          <div className="flex justify-center">
            <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors">
              Read the manifesto
            </button>
          </div>
        </div>
      </div>

      {/* Social icons */}
      <div className="relative z-10 flex justify-center gap-4 pb-12">
        <button
          aria-label="Instagram"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <Camera size={20} />
        </button>
        <button
          aria-label="Twitter"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <Share2 size={20} />
        </button>
        <button
          aria-label="Globe"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <Globe size={20} />
        </button>
      </div>
    </section>
  );
}
