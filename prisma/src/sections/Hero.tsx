import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WordsPullUp from "../components/WordsPullUp";

const EASE = [0.16, 1, 0.3, 1] as const;

const navLinks = ["Our story", "Collective", "Workshops", "Programs", "Inquiries"];

export default function Hero() {
  return (
    <section className="h-screen p-4 md:p-6 bg-black">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">

        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none z-10" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10 pointer-events-none" />

        {/* Fallback dark bg in case video fails */}
        <div className="absolute inset-0 bg-[#1a1a1a] -z-10" />

        {/* Navbar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30">
          <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
            <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[10px] sm:text-xs md:text-sm transition-colors duration-200"
                    style={{ color: "rgba(225,224,204,0.8)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(225,224,204,0.8)")}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Hero content — bottom aligned */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 md:px-8 pb-6 md:pb-10">
          <div className="grid grid-cols-12 items-end gap-4">

            {/* Left — giant heading */}
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="font-medium leading-[0.85] tracking-[-0.07em] text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUp text="Prisma" delay={0} showAsterisk />
              </h1>
            </div>

            {/* Right — description + CTA */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 pb-2">
              <motion.p
                className="text-primary/70 text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              >
                Prisma is a worldwide network of visual artists, filmmakers and
                storytellers bound not by place, status or labels but by passion
                and hunger to unlock potential through our unique perspectives.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
              >
                <button className="group inline-flex items-center gap-2 hover:gap-3 bg-primary rounded-full pl-5 pr-1 py-1 font-medium text-sm sm:text-base text-black transition-all duration-300">
                  Join the lab
                  <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                    <ArrowRight size={15} style={{ color: "#E1E0CC" }} />
                  </span>
                </button>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
