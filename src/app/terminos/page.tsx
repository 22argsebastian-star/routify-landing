import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones — Routify",
  description: "Términos y condiciones del servicio de automatización de reservas Routify.",
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navbar simple */}
      <header className="border-b border-card sticky top-0 z-50" style={{ backgroundColor: "rgba(5, 10, 5, 0.9)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" style={{ boxShadow: "0 0 6px #10b981" }} />
            <span className="text-white font-bold text-lg tracking-tight">Routify</span>
          </Link>
          <Link href="/" className="text-zinc-400 text-sm hover:text-white transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-10">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ color: "#34d399", background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.2)" }}
          >
            Legal
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Términos y Condiciones
          </h1>
          <p className="text-zinc-500 text-sm">Última actualización: 14 de abril de 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-zinc-400 leading-relaxed">

          <section>
            <h2 className="text-white text-xl font-bold mb-3">1. Identificación del prestador del servicio</h2>
            <p>
              Routify es un servicio de automatización de reservas y comunicación por WhatsApp para empresas de transporte terrestre, operado por <strong className="text-white">Sebastián Álvarez</strong>, con domicilio en Morelia, Michoacán, México.
            </p>
            <p className="mt-2">Contacto: <a href="https://wa.me/524438926810" className="text-accent hover:underline">+52 443 892 6810</a></p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">2. Aceptación de los términos</h2>
            <p>
              Al contratar o utilizar los servicios de Routify, el cliente acepta expresamente estos Términos y Condiciones. Si el cliente no está de acuerdo con alguna de las disposiciones aquí contenidas, deberá abstenerse de contratar o utilizar el servicio.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">3. Descripción del servicio</h2>
            <p>Routify ofrece:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
              <li>Agente de reservas automatizado via WhatsApp, disponible 24/7</li>
              <li>Verificación automática de comprobantes de pago</li>
              <li>Generación de links de pago personalizados</li>
              <li>Recordatorios automáticos anti no-shows</li>
              <li>Generación de códigos QR para verificación de abordaje</li>
              <li>Reportes diarios automáticos</li>
              <li>Implementación personalizada según las rutas, horarios y precios del cliente</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">4. Condiciones de contratación</h2>
            <p>
              La contratación del servicio se formaliza mediante acuerdo verbal o escrito entre Routify y el cliente. El precio se determina de forma personalizada según el volumen de operaciones y el valor generado para el negocio.
            </p>
            <p className="mt-2">
              El servicio no tiene contratos de permanencia forzosa. El cliente puede cancelar en cualquier momento mediante aviso previo de 15 días naturales.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">5. Garantía del servicio</h2>
            <p>
              Routify ofrece una <strong className="text-white">garantía de 30 días</strong>: si en los primeros 30 días el sistema no resuelve el 80% de las conversaciones de reservas sin intervención humana, el mes 2 es completamente gratuito, sin preguntas ni condiciones adicionales.
            </p>
            <p className="mt-2">
              Esta garantía aplica únicamente si Routify ha sido implementado correctamente y el cliente ha proporcionado toda la información necesaria (rutas, precios, horarios, datos bancarios).
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">6. Obligaciones del cliente</h2>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
              <li>Proporcionar información veraz y actualizada sobre su operación</li>
              <li>Notificar cambios en rutas, precios u horarios con suficiente anticipación</li>
              <li>Designar un contacto responsable para el proceso de implementación</li>
              <li>No utilizar el servicio para actividades ilegales o fraudulentas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">7. Limitación de responsabilidad</h2>
            <p>
              Routify no será responsable por interrupciones del servicio de WhatsApp (Meta), fallas en pasarelas de pago externas, o pérdidas ocasionadas por información incorrecta proporcionada por el cliente.
            </p>
            <p className="mt-2">
              La responsabilidad total de Routify frente al cliente no podrá exceder el monto pagado por el último mes de servicio.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">8. Propiedad intelectual</h2>
            <p>
              Todos los sistemas, flujos, automatizaciones y código desarrollados por Routify son propiedad exclusiva de Routify. El cliente tiene derecho de uso del servicio mientras esté vigente la relación contractual.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">9. Modificaciones</h2>
            <p>
              Routify se reserva el derecho de modificar estos Términos y Condiciones. Los cambios serán notificados al cliente con al menos 15 días de anticipación vía WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">10. Jurisdicción</h2>
            <p>
              Cualquier controversia derivada de la prestación del servicio se resolverá bajo las leyes vigentes de los Estados Unidos Mexicanos, en la ciudad de Morelia, Michoacán.
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">¿Tienes dudas? Escríbenos directamente.</p>
          <a
            href="https://wa.me/524438926810?text=Hola%2C%20tengo%20una%20duda%20sobre%20los%20t%C3%A9rminos%20y%20condiciones%20de%20Routify"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ background: "rgba(16,185,129,0.1)", color: "#34d399", border: "1px solid rgba(16,185,129,0.25)" }}
          >
            Contactar por WhatsApp →
          </a>
        </div>
      </div>
    </main>
  );
}
