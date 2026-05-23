import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import WordsPullUpMultiStyle from "../components/WordsPullUpMultiStyle";

const EASE = [0.22, 1, 0.36, 1] as const;

const featureCards = [
  {
    type: "video",
    videoSrc:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4",
    bottomText: "Your creative canvas.",
  },
  {
    type: "feature",
    number: "01",
    title: "Project Storyboard.",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
    items: [
      "Visual timeline for every project phase",
      "Drag-and-drop scene sequencing",
      "Collaborative annotation tools",
      "Export to PDF or video reel",
    ],
  },
  {
    type: "feature",
    number: "02",
    title: "Smart Critiques.",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
    items: [
      "AI-powered visual analysis",
      "Timestamped creative notes",
      "Integrated tool suggestions",
    ],
  },
  {
    type: "feature",
    number: "03",
    title: "Immersion Capsule.",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
    items: [
      "One-tap notification silencing",
      "Curated ambient soundscapes",
      "Auto-sync with your schedule",
    ],
  },
];

export default function Features() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <section className="min-h-screen bg-black py-20 md:py-32 px-4 md:px-6 relative">
      {/* Noise background */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: "Studio-grade workflows for visionary creators.",
                  className: "text-primary block",
                },
              ]}
              delay={0}
            />
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: "Built for pure vision. Powered by art.",
                  className: "text-gray-500",
                },
              ]}
              delay={0.2}
            />
          </h2>
        </div>

        {/* 4-col card grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[480px] gap-3 sm:gap-2 md:gap-1"
        >
          {featureCards.map((card, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl overflow-hidden"
              style={{ background: card.type === "video" ? "#000" : "#212121" }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.65, delay: i * 0.15, ease: EASE }}
            >
              {card.type === "video" ? (
                <>
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={card.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  {/* fallback */}
                  <div className="absolute inset-0 bg-[#1a1a1a] -z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-sm md:text-base font-medium" style={{ color: "#E1E0CC" }}>
                      {card.bottomText}
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex flex-col h-full p-5 md:p-6 min-h-[280px] lg:min-h-0">
                  {/* Icon */}
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover mb-4"
                  />

                  {/* Number + Title */}
                  <div className="mb-4">
                    <span
                      className="text-[10px] tracking-[0.25em] uppercase"
                      style={{ color: "rgba(222,219,200,0.35)" }}
                    >
                      {card.number}
                    </span>
                    <h3
                      className="text-sm md:text-base font-medium mt-1"
                      style={{ color: "#E1E0CC" }}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Checklist */}
                  <ul className="flex flex-col gap-2.5 flex-1">
                    {card.items!.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check
                          size={13}
                          className="text-primary flex-shrink-0 mt-0.5"
                        />
                        <span className="text-gray-400 text-xs leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn more */}
                  <div className="mt-5">
                    <button
                      className="inline-flex items-center gap-1.5 text-xs text-primary/70 hover:text-primary transition-colors duration-200"
                    >
                      Learn more
                      <ArrowRight
                        size={12}
                        style={{ transform: "rotate(-45deg)" }}
                      />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
