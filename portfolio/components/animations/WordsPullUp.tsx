"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface WordsPullUpProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function WordsPullUp({ text, className = "", delay = 0 }: WordsPullUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block mr-[0.25em] last:mr-0">
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
      ))}
    </span>
  );
}
