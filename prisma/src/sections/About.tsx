import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import WordsPullUpMultiStyle from "../components/WordsPullUpMultiStyle";

const BIO =
  "Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.";

function AnimatedLetter({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const charProgress = index / total;
  const opacity = useTransform(
    progress,
    [charProgress - 0.1, charProgress + 0.05],
    [0.2, 1]
  );
  if (char === " ") return <span> </span>;
  return <motion.span style={{ opacity }} className="inline-block">{char}</motion.span>;
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = BIO.split("");

  return (
    <section className="bg-black py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-2xl md:rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 text-center"
          style={{ background: "#101010" }}
        >
          {/* Label */}
          <p className="text-primary text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-8 md:mb-12">
            Visual arts
          </p>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-10 md:mb-14">
            <WordsPullUpMultiStyle
              segments={[
                { text: "I am Marcus Chen,", className: "font-normal" },
                {
                  text: "a self-taught director.",
                  className: "italic font-serif",

                },
                {
                  text: "I have skills in color grading, visual effects, and narrative design.",
                  className: "font-normal",
                },
              ]}
              delay={0}
            />
          </h2>

          {/* Scroll-linked bio */}
          <div ref={ref}>
            <p
              className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto"
              style={{ lineHeight: 1.85, color: "#DEDBC8" }}
            >
              {chars.map((char, i) => (
                <AnimatedLetter
                  key={i}
                  char={char}
                  index={i}
                  total={chars.length}
                  progress={scrollYProgress}
                />
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
