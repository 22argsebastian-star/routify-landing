import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — Routify",
  description: "Política de privacidad y tratamiento de datos personales de Routify.",
};

export default function PrivacidadPage() {
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
            Política de Privacidad
          </h1>
          <p className="text-zinc-500 text-sm">Última actualización: 14 de abril de 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-zinc-400 leading-relaxed">

          <section>
            <h2 className="text-white text-xl font-bold mb-3">1. Responsable del tratamiento</h2>
            <p>
              <strong className="text-white">Routify</strong>, operado por Sebastián Álvarez, es el responsable del tratamiento de los datos personales recopilados a través de este sitio web y del servicio de automatización de WhatsApp.
            </p>
            <p className="mt-2">Contacto: <a href="https://wa.me/524438926810" className="text-accent hover:underline">+52 443 892 6810</a></p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">2. Datos que recopilamos</h2>
            <p>Routify puede recopilar los siguientes datos:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
              <li><strong className="text-white">Datos del negocio cliente:</strong> nombre de la empresa, nombre del responsable, número de WhatsApp, rutas y precios de operación</li>
              <li><strong className="text-white">Datos de clientes finales (pasajeros):</strong> número de teléfono de WhatsApp, nombre, ruta y fecha de viaje, información de pago (referencia de transferencia, últimos dígitos de cuenta)</li>
              <li><strong className="text-white">Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas en este sitio (sin identificación personal)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">3. Finalidad del tratamiento</h2>
            <p>Los datos recopilados se utilizan exclusivamente para:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
              <li>Gestionar y confirmar reservas de transporte</li>
              <li>Verificar comprobantes de pago</li>
              <li>Enviar recordatorios y notificaciones relacionadas con el viaje</li>
              <li>Generar reportes operativos para el negocio cliente</li>
              <li>Validar la identidad del pasajero al momento de abordar (checklist del conductor)</li>
              <li>Mejorar y mantener el servicio de automatización</li>
            </ul>
            <p className="mt-2">
              Los datos <strong className="text-white">no</strong> serán vendidos, cedidos ni compartidos con terceros para fines publicitarios.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">4. Base legal del tratamiento</h2>
            <p>
              El tratamiento se realiza con base en el consentimiento del titular al proporcionar sus datos para realizar una reserva, así como en la ejecución del contrato de servicio entre Routify y el negocio cliente, conforme a la <strong className="text-white">Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong> y su reglamento vigente en México.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">5. Uso de WhatsApp (Meta)</h2>
            <p>
              Routify utiliza la API de WhatsApp Business (Meta) para enviar y recibir mensajes. Los mensajes transmitidos están sujetos a las{" "}
              <a href="https://www.whatsapp.com/legal/privacy-policy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                Políticas de Privacidad de WhatsApp / Meta
              </a>
              . Routify no almacena el contenido de conversaciones más allá de lo necesario para gestionar la reserva activa.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">6. Conservación de datos</h2>
            <p>
              Los datos de reservas se conservan durante 12 meses a partir de la fecha del viaje para efectos de soporte y auditoría. Transcurrido ese plazo, los datos son eliminados de forma segura.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">7. Derechos ARCO</h2>
            <p>
              Conforme a la LFPDPPP, los titulares de datos personales tienen derecho a:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
              <li><strong className="text-white">Acceso:</strong> conocer qué datos personales tenemos sobre usted</li>
              <li><strong className="text-white">Rectificación:</strong> corregir datos inexactos o incompletos</li>
              <li><strong className="text-white">Cancelación:</strong> solicitar la eliminación de sus datos</li>
              <li><strong className="text-white">Oposición:</strong> oponerse al tratamiento de sus datos para fines específicos</li>
            </ul>
            <p className="mt-2">
              Para ejercer cualquiera de estos derechos, contacte a Routify vía WhatsApp al <a href="https://wa.me/524438926810" className="text-accent hover:underline">+52 443 892 6810</a>. Responderemos en un plazo máximo de 20 días hábiles.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">8. Seguridad de los datos</h2>
            <p>
              Routify implementa medidas técnicas y organizativas razonables para proteger los datos personales contra acceso no autorizado, pérdida, destrucción o alteración. El acceso a los datos está restringido al equipo operativo de Routify.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">9. Cookies y rastreo</h2>
            <p>
              Este sitio web no utiliza cookies de rastreo de terceros ni herramientas de publicidad conductual. Únicamente se pueden utilizar cookies técnicas esenciales para el funcionamiento del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">10. Cambios a esta política</h2>
            <p>
              Routify puede actualizar esta Política de Privacidad. Los cambios serán publicados en esta página con la fecha de actualización. Se recomienda revisarla periódicamente.
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">¿Tienes dudas sobre el manejo de tus datos?</p>
          <a
            href="https://wa.me/524438926810?text=Hola%2C%20tengo%20una%20duda%20sobre%20la%20pol%C3%ADtica%20de%20privacidad%20de%20Routify"
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
