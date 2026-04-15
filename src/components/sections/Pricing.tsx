"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import GradientText from "@/components/ui/GradientText";

const factors = [
  "Tamaño de tu operación (número de vans y rutas)",
  "Volumen actual de reservas por WhatsApp por día",
  "Cuánto generamos o ahorramos para tu negocio",
];

export default function Pricing() {
  return (
    <section id="precios" className="py-24 px-4 sm:px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <FadeInSection className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ color: "#34d399", background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.2)" }}
          >
            Precios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Ganamos cuando{" "}
            <GradientText>tú ganas</GradientText>
          </h2>
        </FadeInSection>

        {/* Pricing card */}
        <FadeInSection delay={0.1}>
          <motion.div
            className="max-w-2xl mx-auto rounded-3xl p-8 sm:p-12 border border-card-accent text-center"
            style={{ background: "var(--surface-raised)" }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-zinc-500 text-xs uppercase tracking-widest font-semibold mb-6">
              ¿Cuánto cuesta?
            </p>

            <p className="text-white text-xl sm:text-2xl font-bold leading-snug mb-3">
              Depende del tamaño de tu operación.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed mb-3">
              No cobramos precio fijo. Calculamos juntos cuánto te genera Routify
              y cobramos una fracción de eso.
            </p>

            <p className="text-2xl sm:text-3xl font-black mt-6 mb-8">
              <GradientText>Si no te genera dinero, no nos pagas.</GradientText>
            </p>

            {/* Separator */}
            <div className="w-16 h-px mx-auto mb-8" style={{ background: "rgba(16,185,129,0.3)" }} />

            {/* What determines price */}
            <p className="text-zinc-500 text-sm uppercase tracking-widest font-semibold mb-5">
              Lo que determina el precio
            </p>
            <div className="flex flex-col gap-3 text-left max-w-sm mx-auto mb-10">
              {factors.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <Check size={16} color="#10b981" className="mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-400 text-sm">{f}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="https://wa.me/524438926810?text=Hola%2C%20me%20interesa%20agendar%20una%20llamada%20para%20conocer%20m%C3%A1s%20sobre%20Routify"
              className="inline-flex items-center gap-2 bg-accent text-white font-bold px-10 py-4 rounded-xl text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Calcular cuánto me genera Routify →
            </motion.a>

            <p className="text-zinc-600 text-xs mt-4">
              Llamada de 20 minutos · Sin compromiso · Resultado inmediato
            </p>
          </motion.div>
        </FadeInSection>

      </div>
    </section>
  );
}
