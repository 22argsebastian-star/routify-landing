"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function FadeInSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  const offsets = {
    up:    { x: 0,   y: 28 },
    left:  { x: -28, y: 0  },
    right: { x: 28,  y: 0  },
    none:  { x: 0,   y: 0  },
  };

  const { x, y } = offsets[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
