"use client";

import { motion } from "framer-motion";
import GradientText from "@/components/ui/GradientText";

export default function Navbar() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-card"
      style={{ backgroundColor: "rgba(5, 10, 5, 0.85)", backdropFilter: "blur(12px)" }}
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full bg-accent"
            style={{ boxShadow: "0 0 6px #10b981" }}
          />
          <span className="text-xl font-bold tracking-tight">
            <GradientText>Routify</GradientText>
          </span>
        </div>

        {/* CTA */}
        <motion.a
          href="https://wa.me/524438926810?text=Hola%2C%20me%20interesa%20agendar%20una%20llamada%20para%20conocer%20m%C3%A1s%20sobre%20Routify"
          className="hidden sm:inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-xl"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
        >
          Agenda tu llamada →
        </motion.a>

        {/* Mobile CTA */}
        <a
          href="https://wa.me/524438926810?text=Hola%2C%20me%20interesa%20agendar%20una%20llamada%20para%20conocer%20m%C3%A1s%20sobre%20Routify"
          className="sm:hidden text-accent text-sm font-semibold"
        >
          Llamada →
        </a>
      </nav>
    </motion.header>
  );
}
