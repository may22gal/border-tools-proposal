'use client';
import { motion } from 'framer-motion';
import { Globe, Lock, TrendingUp, Search, LayoutGrid, BookOpen, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const reasons = [
  { icon: Lock, title: 'Control Total', desc: 'Sin comisiones. Sin reglas de terceros. El negocio y el cliente son 100% de Border Tools.' },
  { icon: Globe, title: 'Presencia Permanente', desc: 'Una URL propia que siempre puede ser encontrada en Google — a diferencia de un perfil de marketplace.' },
  { icon: TrendingUp, title: 'Escalabilidad', desc: 'Agrega productos, categorías y páginas sin límites artificiales de plataforma.' },
  { icon: LayoutGrid, title: 'Catálogo Organizado', desc: 'Por marca, oficio, precio o tipo de kit. Una experiencia de compra clara y profesional.' },
  { icon: BookOpen, title: 'Confianza de Marca', desc: 'Un sitio propio comunica seriedad. El cliente siente que compra a un negocio real, no a un vendedor anónimo.' },
  { icon: Search, title: 'SEO y Visibilidad', desc: 'Cada página del catálogo puede posicionarse en Google para búsquedas específicas de herramientas.' },
];

const seoItems = [
  { label: 'Indexación de productos', desc: 'Cada combo y herramienta con su propia página optimizada para búsqueda.' },
  { label: 'Visibilidad en Google', desc: 'Aparecer cuando alguien busca "taladro Milwaukee Juárez" o "combo herramientas carpintero".' },
  { label: 'Ranking por categoría', desc: 'Posicionarse para términos de búsqueda específicos por oficio, marca y región.' },
  { label: 'Búsqueda local', desc: 'Aparecer en Google Maps y búsquedas locales para clientes cerca de la tienda física.' },
];

export default function WebsiteStrategy() {
  return (
    <section id="website" className="py-24 border-b border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mb-14"
        >
          <p className="section-eyebrow">06 — Estrategia Web</p>
          <h2 className="section-title mb-4">
            Por qué un Sitio<br /><span className="text-gold">Propio Importa</span>
          </h2>
          <p className="text-zinc-400 max-w-xl leading-relaxed font-light">
            Mercado Libre es un canal de venta. El sitio propio es la base digital de Border Tools —
            donde el negocio tiene identidad, control y visibilidad a largo plazo.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.07 } }, hidden: {} }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-16"
        >
          {reasons.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={fadeUp} className="card-base card-hover group">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Icon size={17} className="text-blue-400" />
              </div>
              <h3 className="text-sm font-semibold text-zinc-200 mb-1.5">{title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-light">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* SEO subsection */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.03] overflow-hidden"
        >
          <div className="px-6 py-5 border-b border-blue-500/10">
            <div className="flex items-center gap-3">
              <Search size={18} className="text-blue-400" />
              {/* SEO as blue clickable-style text */}
              <h3 className="font-condensed font-bold text-2xl uppercase">
                <span className="text-blue-400 underline decoration-blue-400/40 cursor-pointer hover:text-blue-300 transition-colors">
                  SEO
                </span>
                {' '}— Posicionamiento en Google
              </h3>
            </div>
          </div>

          <div className="p-6">
            <p className="text-sm text-zinc-300 leading-relaxed mb-6 max-w-2xl font-light">
              Estrategia de optimización diseñada para que Border Tools aparezca en Google cuando
              los clientes buscan herramientas, combos, marcas y equipos especializados —
              sin pagar por cada clic.
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              {seoItems.map(({ label, desc }) => (
                <div key={label} className="flex items-start gap-3 bg-white/[0.03] rounded-xl p-4 border border-white/[0.05]">
                  <CheckCircle2 size={14} className="text-blue-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-zinc-200 mb-0.5">{label}</p>
                    <p className="text-xs text-zinc-500 font-light leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 p-4 rounded-lg bg-blue-500/[0.06] border border-blue-500/20">
              <p className="text-xs text-blue-200/70 font-light leading-relaxed">
                <strong className="text-blue-300 font-semibold">Resultado esperado a 6 meses:</strong>{' '}
                Border Tools apareciendo en las primeras páginas de Google para búsquedas como
                &quot;herramientas Milwaukee en Juárez&quot;, &quot;combo herramientas eléctricas México&quot; y
                &quot;kit soldador profesional&quot; — tráfico orgánico sin costo por clic.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
