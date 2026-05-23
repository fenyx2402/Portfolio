import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  containerClassName?: string;
  delay?: number;
}

export default function WordsPullUpMultiStyle({
  segments,
  containerClassName = "",
  delay = 0,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Flatten all words while keeping their per-segment className
  const words: { word: string; className: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      words.push({ word: w, className: seg.className ?? "" });
    });
  });

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${containerClassName}`}>
      {words.map((item, i) => (
        <span key={i} className="overflow-hidden inline-block mr-[0.22em] last:mr-0">
          <motion.span
            className={`inline-block ${item.className}`}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.75,
              delay: delay + i * 0.08,
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
