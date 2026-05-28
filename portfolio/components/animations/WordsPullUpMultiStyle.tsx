"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Segment {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
}

export default function WordsPullUpMultiStyle({
  segments,
  className = "",
}: WordsPullUpMultiStyleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Flatten all words while preserving per-segment className/style
  const allWords: { word: string; className?: string; style?: React.CSSProperties }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((word) => {
      if (word) allWords.push({ word, className: seg.className, style: seg.style });
    });
  });

  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap justify-center gap-x-[0.28em] gap-y-[0.1em] ${className}`}
    >
      {allWords.map((item, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className={`inline-block ${item.className ?? ""}`}
            style={item.style}
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{
              duration: 0.75,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
