"use client";

import { motion, type Variants } from "framer-motion";
import { Smartphone, Bot, CheckCircle } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Cliente escribe por WhatsApp",
    description:
      "Tu cliente manda un mensaje preguntando por disponibilidad, precio o una reserva. A cualquier hora, cualquier día.",
  },
  {
    number: "02",
    icon: Bot,
    title: "Routify responde, reserva y cobra",
    description:
      "En menos de 10 segundos, Routify confirma la van, agenda la fecha, genera el link de pago y verifica el comprobante.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Tú recibes el dinero y el resumen",
    description:
      "Te llega una notificación con el resumen de la reserva y el pago confirmado. Tu equipo no tocó el teléfono.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <FadeInSection className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ color: "#34d399", background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.2)" }}
          >
            Cómo funciona
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Así de simple.
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-xl mx-auto">
            Tres pasos. Ninguno requiere que tu equipo toque el teléfono.
          </p>
        </FadeInSection>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — visible on md+ */}
          <div
            className="hidden md:block absolute top-[52px] left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.4), transparent)" }}
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {steps.map(({ number, icon: Icon, title, description }) => (
              <motion.div
                key={number}
                variants={itemVariants}
                className="flex flex-col items-center text-center px-4"
              >
                {/* Step circle */}
                <motion.div
                  className="relative mb-6 flex items-center justify-center w-[104px] h-[104px]"
                  whileInView={{ scale: [0.8, 1.06, 1] }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {/* Outer ring */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ border: "2px solid rgba(16,185,129,0.25)" }}
                  />
                  {/* Inner circle */}
                  <div
                    className="w-20 h-20 rounded-full flex flex-col items-center justify-center gap-1"
                    style={{ background: "rgba(16,185,129,0.08)" }}
                  >
                    <Icon size={22} color="#10b981" />
                    <span
                      className="font-mono text-xs font-bold"
                      style={{ color: "rgba(16,185,129,0.6)" }}
                    >
                      {number}
                    </span>
                  </div>
                </motion.div>

                <h3 className="text-white font-bold text-lg mb-3 leading-snug">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom note */}
        <FadeInSection delay={0.3} className="mt-14 text-center">
          <div
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl border border-card"
            style={{ background: "var(--surface-raised)" }}
          >
            <span className="text-2xl">⏱️</span>
            <p className="text-zinc-400 text-sm">
              <span className="text-white font-semibold">Live en 72 horas.</span>{" "}
              Sin contratos. Sin configuración técnica de tu parte.
            </p>
          </div>
        </FadeInSection>

      </div>
    </section>
  );
}
