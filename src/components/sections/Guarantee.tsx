"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import GradientText from "@/components/ui/GradientText";

export default function Guarantee() {
  return (
    <section id="garantia" className="py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* Shield icon */}
        <motion.div
          className="flex justify-center mb-6"
          whileInView={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{ background: "rgba(16,185,129,0.1)", border: "2px solid rgba(16,185,129,0.25)" }}
          >
            <ShieldCheck size={40} color="#10b981" />
          </div>
        </motion.div>

        <FadeInSection>
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ color: "#34d399", background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.2)" }}
          >
            Sin riesgo
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            La Garantía Routify
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            Si no funciona, no pagas. Así de simple.
          </p>
        </FadeInSection>

        {/* Guarantee card */}
        <FadeInSection delay={0.15}>
          <div
            className="relative overflow-hidden rounded-3xl p-8 sm:p-12 text-left border border-card-accent"
            style={{ background: "var(--surface-raised)" }}
          >
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ background: "linear-gradient(160deg, rgba(16,185,129,0.05) 0%, transparent 60%)" }}
            />

            {/* Big quote mark */}
            <span
              className="absolute top-4 left-6 text-8xl font-serif leading-none pointer-events-none select-none"
              style={{ color: "rgba(16,185,129,0.08)" }}
            >
              "
            </span>

            <div className="relative">
              <p className="text-white text-lg sm:text-xl leading-relaxed font-medium">
                Si en los primeros{" "}
                <GradientText>30 días</GradientText>{" "}
                Routify no resuelve el{" "}
                <GradientText>80% de las conversaciones de reservas</GradientText>{" "}
                sin intervención humana, el{" "}
                <GradientText>mes 2 es completamente gratis</GradientText>
                . Sin preguntas.
              </p>

              <div className="mt-8 pt-6 border-t border-card flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    R
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Sebastian — Routify</p>
                    <p className="text-zinc-500 text-xs">Fundador & desarrollador</p>
                  </div>
                </div>
                <div
                  className="sm:ml-auto flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
                  style={{ background: "rgba(16,185,129,0.1)", color: "#34d399", border: "1px solid rgba(16,185,129,0.2)" }}
                >
                  <ShieldCheck size={16} />
                  Garantía activa desde el día 1
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3} className="mt-8">
          <p className="text-zinc-600 text-sm">
            Esta garantía aplica si implementamos Routify y en 30 días no alcanza el 80% de automatización.
            <br className="hidden sm:block" />
            En la práctica, los resultados son visibles desde la primera semana.
          </p>
        </FadeInSection>

      </div>
    </section>
  );
}
