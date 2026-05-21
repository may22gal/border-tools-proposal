'use client';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Camera, MessageSquare, TrendingUp, Shield, Globe, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const mlTactics = [
  { icon: Star, title: 'Posicionamiento Premium', desc: 'Apuntar a la categoría Premium/Full cuando el volumen lo justifique, no solo competir en precio clásico.' },
  { icon: Camera, title: 'Imágenes Profesionales', desc: 'Fotos de producto con fondo blanco, en uso, y de combos completos. La primera imagen vende o no vende.' },
  { icon: MessageSquare, title: 'Respuesta Rápida', desc: 'Tiempo de respuesta bajo 1 hora en horario laboral. La reputación en ML depende fuertemente de esto.' },
  { icon: TrendingUp, title: 'Publicidad Selectiva', desc: 'Mercado Ads en combos y productos de alto margen — no en todo el catálogo. ROI primero.' },
  { icon: ShoppingCart, title: 'Combos como Core', desc: 'Publicar combos exclusivos que no se encuentren en otras tiendas. Precio difícil de igualar.' },
  { icon: Shield, title: 'Construcción de Reputación', desc: 'Mínimo de devoluciones, envíos correctos y reviews positivas. La reputación es el activo principal en ML.' },
];

const phase1 = [
  { channel: 'Sitio Web Propio', role: 'Base digital, SEO, catálogo completo', status: 'Construir primero', color: 'text-blue-400', border: 'border-blue-500/30' },
  { channel: 'Facebook Marketplace USA', role: 'Ventas locales sin necesidad de LLC, acceso a compradores americanos', status: 'Iniciar', color: 'text-blue-400', border: 'border-blue-500/30' },
  { channel: 'eBay USA', role: 'Marketplace con menor barrera de entrada, ideal para iniciar exportación', status: 'Iniciar', color: 'text-blue-400', border: 'border-blue-500/30' },
];

const phase2 = [
  { channel: 'Amazon USA', role: 'Mayor volumen y credibilidad — requiere estructura legal y mayor operación', status: 'Fase 2', color: 'text-gold', border: 'border-gold/30' },
  { channel: 'Walmart Marketplace', role: 'Canal en crecimiento, menos saturado que Amazon para herramientas', status: 'Fase 2', color: 'text-gold', border: 'border-gold/30' },
];

export default function MarketStrategy() {
  return (
    <>
      {/* MERCADO LIBRE MEXICO */}
      <section id="mercados" className="py-24 border-b border-white/[0.05] bg-bg-secondary">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="mb-14"
          >
            <p className="section-eyebrow">07 — Estrategia de Marketplace</p>
            <h2 className="section-title mb-4">
              Mercado Libre<br /><span className="text-gold">Estrategia MX</span>
            </h2>
            <p className="text-zinc-400 max-w-xl leading-relaxed font-light">
              El objetivo no es ser el más barato. El objetivo es ser el más confiable,
              el mejor presentado y el que ofrece mayor valor percibido en el mercado.
            </p>
          </motion.div>

          {/* Strategy positioning */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="grid md:grid-cols-2 gap-4 mb-10"
          >
            {/* What not to do */}
            <div className="card-base border-red-500/20 bg-red-500/[0.03]">
              <p className="text-[10px] tracking-[3px] uppercase text-red-400/70 mb-3">Estrategia a evitar</p>
              <div className="space-y-2">
                {['Competir solo por precio más bajo', 'Publicar sin imágenes profesionales', 'Ignorar preguntas y mensajes', 'Publicar catálogo genérico sin diferenciación'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <AlertTriangle size={12} className="text-red-400/60 shrink-0" />
                    <span className="text-sm text-zinc-500 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What to do */}
            <div className="card-base border-green-500/20 bg-green-500/[0.03]">
              <p className="text-[10px] tracking-[3px] uppercase text-green-400/70 mb-3">Estrategia Border Tools</p>
              <div className="space-y-2">
                {['Posicionamiento por confianza y especialización', 'Combos únicos con alta percepción de valor', 'Respuesta rápida y atención profesional', 'Imágenes premium y títulos optimizados'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-green-400 shrink-0" />
                    <span className="text-sm text-zinc-300 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tactics */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.07 } }, hidden: {} }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {mlTactics.map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp} className="card-base card-hover group">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-muted flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon size={15} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-200 mb-1">{title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed font-light">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* USA EXPANSION */}
      <section id="expansion" className="py-24 border-b border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="mb-14"
          >
            <p className="section-eyebrow">08 — Expansión USA</p>
            <h2 className="section-title mb-4">
              Estrategia de<br /><span className="text-gold">Expansión USA</span>
            </h2>
            <p className="text-zinc-400 max-w-xl leading-relaxed font-light">
              La expansión al mercado americano se ejecuta en fases, protegiendo la operación
              actual mientras se construye la infraestructura correcta. Sin riesgos innecesarios.
            </p>
          </motion.div>

          {/* Phases */}
          <div className="space-y-8">

            {/* Phase 1 */}
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.03] overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-blue-500/10 flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-400">1</span>
                </div>
                <div>
                  <p className="text-[10px] tracking-[3px] uppercase text-blue-400/70">Fase 1 — Inmediato</p>
                  <h3 className="font-condensed font-bold text-lg text-zinc-100 uppercase">
                    Infraestructura Inicial + Canales de Bajo Riesgo
                  </h3>
                </div>
              </div>
              <div className="p-6 space-y-3">
                {phase1.map((ch) => (
                  <div key={ch.channel} className={`flex items-start gap-4 p-4 rounded-xl border ${ch.border} bg-white/[0.02]`}>
                    <Globe size={16} className={`${ch.color} mt-0.5 shrink-0`} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-semibold text-zinc-200">{ch.channel}</p>
                        <span className={`text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded border ${ch.border} ${ch.color}`}>
                          {ch.status}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 font-light mt-0.5">{ch.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Arrow */}
            <div className="flex justify-center">
              <ArrowRight size={20} className="text-zinc-700 rotate-90" />
            </div>

            {/* Phase 2 */}
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              className="rounded-2xl border border-gold/20 bg-gold/[0.03] overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-gold/10 flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-gold/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-gold">2</span>
                </div>
                <div>
                  <p className="text-[10px] tracking-[3px] uppercase text-gold/70">Fase 2 — Una vez consolidada Fase 1</p>
                  <h3 className="font-condensed font-bold text-lg text-zinc-100 uppercase">
                    Marketplaces Principales USA
                  </h3>
                </div>
              </div>
              <div className="p-6 space-y-3">
                {phase2.map((ch) => (
                  <div key={ch.channel} className={`flex items-start gap-4 p-4 rounded-xl border ${ch.border} bg-white/[0.02]`}>
                    <Globe size={16} className={`${ch.color} mt-0.5 shrink-0`} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-semibold text-zinc-200">{ch.channel}</p>
                        <span className={`text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded border ${ch.border} ${ch.color}`}>
                          {ch.status}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 font-light mt-0.5">{ch.role}</p>
                    </div>
                  </div>
                ))}
                <div className="mt-2 p-3 rounded-lg bg-gold/[0.05] border border-gold/15">
                  <p className="text-xs text-zinc-400 font-light">
                    <strong className="text-zinc-300 font-semibold">Nota estratégica:</strong>{' '}
                    Amazon y Walmart requieren estructura legal americana (LLC/EIN) y cumplimiento de
                    políticas de vendedor. La Fase 2 se inicia cuando la infraestructura digital y
                    operacional esté consolidada — sin apresurar procesos legales innecesarios.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
