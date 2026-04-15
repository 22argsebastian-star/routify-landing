"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import GradientText from "@/components/ui/GradientText";

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-zinc-400"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.18 }}
        />
      ))}
    </div>
  );
}

const chatSteps = [
  { type: "user",   text: "Hola! ¿Tienen lugares para Morelia–CDMX mañana a las 6am?" },
  { type: "typing" },
  { type: "bot",    text: "¡Hola! Sí, tenemos 4 lugares disponibles. ¿Para cuántas personas?" },
  { type: "user",   text: "Para 2. ¿Cuánto cuesta?" },
  { type: "typing" },
  { type: "bot",    text: "Son $280 MXN por persona. Te envío el link de pago ahora mismo 🔗" },
  { type: "bot",    text: "✅ Pago recibido. Tu recibo ya está en tu WhatsApp. ¡Buen viaje!" },
];

function WhatsAppMockup() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const delays = [600, 1200, 2000, 2800, 3400, 4200, 5200];

    delays.forEach((delay, i) => {
      const t = setTimeout(() => {
        setVisibleSteps((prev) => [...prev, i]);
      }, delay);
      timeoutsRef.current.push(t);
    });

    // Loop: reset after 9s
    const reset = setTimeout(() => {
      setVisibleSteps([]);
    }, 9000);
    timeoutsRef.current.push(reset);

    return () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };
  }, [visibleSteps.length === 0 ? 0 : undefined]);

  // Re-trigger when reset clears all
  useEffect(() => {
    if (visibleSteps.length === 0 && timeoutsRef.current.length === 0) {
      const delays = [600, 1200, 2000, 2800, 3400, 4200, 5200];
      delays.forEach((delay, i) => {
        const t = setTimeout(() => {
          setVisibleSteps((prev) => [...prev, i]);
        }, delay);
        timeoutsRef.current.push(t);
      });
      const reset = setTimeout(() => {
        setVisibleSteps([]);
        timeoutsRef.current = [];
      }, 9000);
      timeoutsRef.current.push(reset);
    }
  }, [visibleSteps]);

  return (
    <div className="relative flex items-center justify-center">
      {/* Glow behind phone */}
      <div
        className="absolute w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(16, 185, 129, 0.08)" }}
      />

      {/* Phone frame */}
      <div
        className="relative w-64 sm:w-72 rounded-[3rem] border-4 border-zinc-700 shadow-2xl overflow-hidden"
        style={{ background: "#111", height: 520 }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#111] rounded-b-2xl z-10" />

        {/* Status bar */}
        <div className="flex justify-between px-6 pt-2 pb-1 text-[10px] text-zinc-500">
          <span>9:41</span>
          <span>▲▲▲ 100%</span>
        </div>

        {/* Chat screen */}
        <div className="flex flex-col h-full" style={{ background: "#0a1628" }}>
          {/* Chat header */}
          <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#1f2c34" }}>
            <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              R
            </div>
            <div>
              <p className="text-white text-sm font-semibold leading-none">Routify</p>
              <p className="text-xs mt-0.5" style={{ color: "#34d399" }}>en línea</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-hidden flex flex-col gap-2 px-3 py-3">
            <AnimatePresence>
              {chatSteps.map((step, i) => {
                if (!visibleSteps.includes(i)) return null;

                if (step.type === "typing") {
                  return (
                    <motion.div
                      key={`typing-${i}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="self-start rounded-2xl rounded-tl-sm"
                      style={{ background: "#1f2c34" }}
                    >
                      <TypingDots />
                    </motion.div>
                  );
                }

                if (step.type === "user") {
                  return (
                    <motion.div
                      key={`user-${i}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="self-end max-w-[85%] rounded-2xl rounded-tr-sm px-3 py-2 text-xs text-white"
                      style={{ background: "#005c4b" }}
                    >
                      {step.text}
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={`bot-${i}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="self-start max-w-[85%] rounded-2xl rounded-tl-sm px-3 py-2 text-xs text-white"
                    style={{ background: "#1f2c34" }}
                  >
                    {step.text}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Input bar */}
          <div
            className="flex items-center gap-2 px-3 py-2 mx-2 mb-3 rounded-full"
            style={{ background: "#1f2c34" }}
          >
            <span className="text-xs text-zinc-500 flex-1">Escribe un mensaje...</span>
            <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
              <span className="text-white text-[10px]">↑</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left: Text */}
        <div className="flex flex-col gap-6">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-card-accent"
              style={{ color: "#34d399", background: "rgba(16,185,129,0.07)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent"
                style={{ boxShadow: "0 0 5px #10b981" }}
              />
              Automatización para transporte terrestre
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 }}
          >
            Tu encargado contesta{" "}
            <GradientText>400 WhatsApp</GradientText>{" "}
            al día. Routify los contesta todos —{" "}
            <GradientText>en 10 segundos, a las 3am</GradientText>
            , sin equivocarse.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
          >
            Routify automatiza las reservas, verifica los pagos y llena tus vans —
            todo por WhatsApp, sin que tu equipo toque el teléfono.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.65 }}
          >
            <motion.a
              href="https://wa.me/524438926810?text=Hola%2C%20me%20interesa%20agendar%20una%20llamada%20para%20conocer%20m%C3%A1s%20sobre%20Routify"
              className="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-8 py-4 rounded-xl text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Shimmer */}
              <motion.span
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
                  transform: "translateX(-100%)",
                }}
                animate={{ transform: ["translateX(-100%)", "translateX(200%)"] }}
                transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 3, ease: "linear" }}
              />
              Agenda una llamada de 20 minutos →
            </motion.a>

            <motion.a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 border border-card-accent text-accent font-semibold px-8 py-4 rounded-xl text-base hover:bg-[rgba(16,185,129,0.07)] transition-colors"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver cómo funciona →
            </motion.a>
          </motion.div>

          {/* Social proof micro-line */}
          <motion.p
            className="text-xs text-zinc-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Sin contratos de permanencia · Live en 72 horas · Garantía de 30 días
          </motion.p>
        </div>

        {/* Right: WhatsApp Mockup */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        >
          <WhatsAppMockup />
        </motion.div>

      </div>
    </section>
  );
}
