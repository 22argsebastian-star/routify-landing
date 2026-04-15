"use client";

import { motion, type Variants } from "framer-motion";
import { MessageCircle, Clock, AlertCircle, User } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GradientText from "@/components/ui/GradientText";

const costs = [
  {
    icon: MessageCircle,
    label: "2 personas atendiendo WhatsApp 8 hrs/día",
    target: 18000,
    description: "Sueldo + prestaciones de encargados que solo contestan mensajes repetitivos.",
  },
  {
    icon: Clock,
    label: "Reservas perdidas por respuesta lenta",
    target: 28000,
    description: "15% de clientes que preguntan ya reservaron con otra empresa antes de que respondas.",
  },
  {
    icon: AlertCircle,
    label: "No-shows sin recordatorio",
    target: 25200,
    description: "1.5 lugares vacíos por van por día × $280. Ingresos que ya no puedes recuperar.",
  },
  {
    icon: User,
    label: "Tiempo del dueño en cuentas manuales",
    target: 6000,
    description: "2 hrs/día reconciliando pagos, verificando comprobantes y cuadrando el Excel.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Problem() {
  return (
    <section id="problema" className="py-24 px-4 sm:px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <FadeInSection className="text-center mb-16">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ color: "#f87171", background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.2)" }}
          >
            El problema
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Tu negocio está perdiendo dinero.{" "}
            <span className="text-zinc-400">Cada. Día.</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">
            No lo ves porque está repartido en salarios, clientes perdidos y horas
            de trabajo manual. Pero los números no mienten.
          </p>
        </FadeInSection>

        {/* Cost cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {costs.map(({ icon: Icon, label, target, description }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="border border-card rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: "var(--surface-raised)" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(248,113,113,0.1)" }}
                >
                  <Icon size={20} color="#f87171" />
                </div>
                <p className="text-zinc-400 text-sm leading-snug pt-0.5">{label}</p>
              </div>
              <AnimatedCounter
                target={target}
                prefix="$"
                suffix=" MXN/mes"
                className="text-2xl sm:text-3xl font-black text-white"
              />
              <p className="text-zinc-600 text-xs leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Total */}
        <FadeInSection delay={0.2} className="mt-6">
          <div
            className="rounded-2xl p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            style={{
              background: "linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(16,185,129,0.02) 100%)",
              border: "1px solid rgba(16,185,129,0.3)",
            }}
          >
            <div>
              <p className="text-zinc-400 text-sm uppercase tracking-widest font-semibold mb-1">
                Total de pérdidas mensuales
              </p>
              <p className="text-zinc-500 text-xs mt-2">
                Suma de los 4 problemas anteriores, calculada para una empresa de 8 vans.
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <AnimatedCounter
                target={77200}
                prefix="$"
                suffix=" MXN/mes"
                duration={2.5}
                className="text-4xl sm:text-5xl font-black"
                // eslint-disable-next-line react/no-children-prop
              />
              <p className="text-zinc-400 text-sm mt-1">
                <GradientText>($926,400 MXN al año)</GradientText>
              </p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3} className="mt-6 text-center">
          <p className="text-zinc-500 text-sm">
            El dueño está pagando casi{" "}
            <span className="text-white font-semibold">$1 millón de pesos al año</span>{" "}
            por hacer estas cosas manualmente.
            <br className="hidden sm:block" />
            Y ni siquiera lo sabe porque lo ve como "gastos normales del negocio."
          </p>
        </FadeInSection>

      </div>
    </section>
  );
}
