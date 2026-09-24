"use client";

import { motion, type Variants } from "framer-motion";
import { Zap, Bell, ClipboardCheck, BarChart3, Check, ChevronDown } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import GradientText from "@/components/ui/GradientText";

const coreFeatures = [
  "Responde instantáneamente a cualquier hora, todos los días",
  "Guía al cliente hasta completar su reserva paso a paso",
  "Genera link de pago personalizado con tu logo",
  "Verifica automáticamente cada comprobante bancario",
  "Detecta y rechaza comprobantes falsos",
  "Manda el recibo oficial en PDF",
  "Re-ofrece cancelaciones a la lista de espera",
  "Solo escala al humano en emergencias reales",
];

const tiers = [
  {
    icon: Bell,
    tag: "Activo en 48 hrs",
    title: "Recordatorios Pre-Viaje Anti No-Shows",
    description:
      "24 horas antes y 2 horas antes del viaje, cada pasajero recibe un WhatsApp automático. Si no confirma, tú lo sabes con tiempo para vender ese lugar.",
    value: "$8,000 MXN/mes",
  },
  {
    icon: ClipboardCheck,
    tag: "Bonus 1",
    title: "Checklist de Abordaje para el Chofer",
    description:
      "El chofer abre su panel en el celular y ve la lista de pasajeros del viaje con un toque. Marca quién abordó y el sistema detecta automáticamente quién no se presentó. Sin papeles, sin encargado verificando — el conductor gestiona todo solo.",
    value: "$6,000 MXN",
  },
  {
    icon: BarChart3,
    tag: "Bonus 2",
    title: "Reporte Diario Automático",
    description:
      "Cada noche a las 9pm recibes en WhatsApp: reservas del día, ingresos cobrados, ocupación por ruta y pagos sin verificar.",
    value: "$4,000 MXN",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhatIsIncluded() {
  return (
    <section id="que-incluye" className="py-24 px-4 sm:px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <FadeInSection className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ color: "#34d399", background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.2)" }}
          >
            Lo que obtienes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Todo lo que necesitas para{" "}
            <GradientText>automatizar tus reservas</GradientText>
          </h2>
        </FadeInSection>

        <div className="flex flex-col gap-4">

          {/* Core card — featured */}
          <FadeInSection>
            <motion.div
              className="relative overflow-hidden rounded-2xl p-8 border border-card-accent"
              style={{ background: "var(--surface-raised)" }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              {/* Glow */}
              <div
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl pointer-events-none"
                style={{ background: "rgba(16,185,129,0.06)" }}
              />

              {/* CORE badge */}
              <span
                className="absolute top-5 right-5 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-accent text-white"
              >
                CORE
              </span>

              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(16,185,129,0.12)" }}
                >
                  <Zap size={24} color="#10b981" />
                </div>
                <div>
                  <h3 className="text-white text-2xl font-black">Agente de Reservas 24/7</h3>
                  <p className="text-zinc-500 text-sm mt-0.5">Tu negocio nunca más pierde una reserva por falta de respuesta</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {coreFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check size={14} color="#10b981" className="mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-400 text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-card">
                <span className="text-zinc-500 text-sm">Valor mensual</span>
                <span className="text-3xl font-black" style={{ color: "#10b981" }}>
                  $25,000 MXN
                </span>
              </div>
            </motion.div>
          </FadeInSection>

          {/* Secondary tiers */}
          <motion.div
            className="flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {tiers.map(({ icon: Icon, tag, title, description, value }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                className="rounded-xl p-5 sm:p-6 border border-card flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6"
                style={{ background: "var(--surface-raised)" }}
              >
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(16,185,129,0.08)" }}
                  >
                    <Icon size={22} color="#10b981" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-white font-bold text-base leading-snug">{title}</span>
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ color: "#34d399", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}
                      >
                        {tag}
                      </span>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 sm:text-right">
                  <span className="text-xl font-black" style={{ color: "#10b981" }}>{value}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Total row + bridge to Pricing */}
          <FadeInSection delay={0.2}>
            <div
              className="rounded-2xl border border-card-accent overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(16,185,129,0.01) 100%)" }}
            >
              {/* Value stack */}
              <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest font-semibold mb-1">
                    Si contratarías cada cosa por separado en el mercado
                  </p>
                  <p className="text-white font-bold text-lg">Valor total del paquete</p>
                </div>
                <div className="sm:text-right">
                  <p className="text-4xl font-black">
                    <GradientText>$43,000 MXN</GradientText>
                  </p>
                  <p className="text-zinc-500 text-sm mt-0.5">valor mensual generado</p>
                </div>
              </div>

              {/* Bridge */}
              <div
                className="px-6 py-5 border-t border-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                style={{ background: "rgba(16,185,129,0.04)" }}
              >
                <div>
                  <p className="text-white font-bold text-lg">
                    Routify{" "}
                    <span style={{ color: "#34d399" }}>no</span>{" "}
                    te cobra $43,000 MXN al mes.
                  </p>
                  <p className="text-zinc-400 text-sm mt-1">
                    Nuestro modelo es diferente — ve cómo cobramos realmente.
                  </p>
                </div>
                <a
                  href="#precios"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm flex-shrink-0 transition-opacity hover:opacity-80"
                  style={{ background: "rgba(16,185,129,0.12)", color: "#34d399", border: "1px solid rgba(16,185,129,0.3)" }}
                >
                  Ver precios
                  <ChevronDown size={16} />
                </a>
              </div>
            </div>
          </FadeInSection>

        </div>
      </div>
    </section>
  );
}
