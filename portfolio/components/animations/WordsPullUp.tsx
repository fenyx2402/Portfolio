"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface WordsPullUpProps {
  text: string;
  className?: string;
  delay?: number;
  showAsterisk?: boolean;
}

export default function WordsPullUp({
  text,
  className = "",
  delay = 0,
  showAsterisk = false,
}: WordsPullUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <span
            key={i}
            className="relative inline-block mr-[0.2em] last:mr-0"
          >
            {/* clip wrapper — must not clip the asterisk */}
            <span className="overflow-hidden inline-block">
              <motion.span
                className="inline-block"
                initial={{ y: "100%", opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
                transition={{
                  duration: 0.75,
                  delay: delay + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            </span>

            {/* Superscript asterisk on the last word */}
            {isLast && showAsterisk && (
              <motion.span
                className="absolute pointer-events-none"
                style={{ top: "0.65em", right: "-0.28em", fontSize: "0.31em", color: "inherit" }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: delay + words.length * 0.08 + 0.1 }}
              >
                *
              </motion.span>
            )}
          </span>
        );
      })}
    </span>
  );
}
