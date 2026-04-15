"use client";

import { motion } from "framer-motion";
import { AlertCircle, Clock, ShieldCheck } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import GradientText from "@/components/ui/GradientText";

const scarcityItems = [
  { icon: AlertCircle, text: "Implementación personalizada de 2–3 semanas por empresa" },
  { icon: Clock,       text: "Onboarding 1:1 con el equipo de Routify incluido" },
  { icon: ShieldCheck, text: "Garantía de 30 días activada desde el primer día" },
];

export default function FinalCTA() {
  return (
    <section id="agendar" className="py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px]"
          style={{ background: "rgba(16,185,129,0.07)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: "linear-gradient(to bottom, transparent, var(--background))" }}
        />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">

        {/* Scarcity badge */}
        <FadeInSection>
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 border border-card-accent text-sm font-semibold"
            style={{ background: "rgba(16,185,129,0.07)", color: "#34d399" }}
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            {/* Pulsing dot */}
            <motion.span
              className="w-2 h-2 rounded-full bg-accent flex-shrink-0"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
            />
            3 lugares disponibles este mes
          </motion.div>
        </FadeInSection>

        {/* Heading */}
        <FadeInSection delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Automatiza tus reservas antes de{" "}
            <GradientText>perder otro cliente</GradientText>
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            La implementación es 100% personalizada: tus rutas, horarios, precios y banco.
            <br className="hidden sm:block" />
            Máximo 3 empresas nuevas por mes.
          </p>
        </FadeInSection>

        {/* Scarcity items */}
        <FadeInSection delay={0.15} className="mb-10">
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
            {scarcityItems.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-zinc-400">
                <Icon size={15} color="#10b981" className="flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Primary CTA */}
        <FadeInSection delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/524438926810?text=Hola%2C%20me%20interesa%20agendar%20una%20llamada%20para%20conocer%20m%C3%A1s%20sobre%20Routify"
              className="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-accent text-white font-bold px-10 py-5 rounded-xl text-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Shimmer */}
              <motion.span
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
                  transform: "translateX(-100%)",
                }}
                animate={{ transform: ["translateX(-100%)", "translateX(200%)"] }}
                transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 3, ease: "linear" }}
              />
              Agenda una llamada de 20 minutos →
            </motion.a>

            <a
              href="#que-incluye"
              className="text-accent text-base font-semibold hover:underline underline-offset-4"
            >
              Ver qué incluye →
            </a>
          </div>
        </FadeInSection>

        {/* Footer disclaimer */}
        <FadeInSection delay={0.35} className="mt-8">
          <p className="text-zinc-600 text-sm">
            Sin contratos de permanencia · Cancela cuando quieras · Garantía de 30 días
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <a href="/terminos" className="text-zinc-700 text-xs hover:text-zinc-500 transition-colors underline underline-offset-2">
              Términos y condiciones
            </a>
            <span className="text-zinc-800 text-xs">·</span>
            <a href="/privacidad" className="text-zinc-700 text-xs hover:text-zinc-500 transition-colors underline underline-offset-2">
              Política de privacidad
            </a>
          </div>
        </FadeInSection>

      </div>
    </section>
  );
}
