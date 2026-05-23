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
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <span key={i} className="overflow-hidden inline-block mr-[0.22em] last:mr-0">
            <motion.span
              className="inline-block relative"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.75,
                delay: delay + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
              {showAsterisk && isLast && (
                <span
                  className="absolute text-[0.31em]"
                  style={{ top: "0.65em", right: "-0.3em" }}
                >
                  *
                </span>
              )}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
