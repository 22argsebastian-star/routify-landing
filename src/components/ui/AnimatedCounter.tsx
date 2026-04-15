"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frameId: number;
    let cancelled = false;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    function tick(now: number) {
      if (cancelled) return;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    }

    frameId = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frameId);
    };
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString("es-MX")}
      {suffix}
    </span>
  );
}
