'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const milestones = [
  { phase: 'Hoy', title: 'Base sólida', desc: 'Tienda física + Mercado Libre activo + experiencia en herramientas americanas' },
  { phase: 'Fase 1', title: 'Infraestructura Digital', desc: 'Sitio web propio + inventario centralizado + Mercado Libre optimizado' },
  { phase: 'Fase 2', title: 'Expansión Controlada', desc: 'Facebook MKT + eBay USA + Meta Ads escalando + contenido activo' },
  { phase: 'Fase 3', title: 'Operación Cross-Border', desc: 'Amazon USA + Walmart MKT + marca digital reconocida en ambos mercados' },
];

export default function FinalVision() {
  return (
    <>
      {/* VISION */}
      <section id="vision" className="py-28 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(200,168,75,0.04) 0%, transparent 65%)',
          }}
        />
        <div className="absolute inset-0 grid-bg opacity-50" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="section-eyebrow justify-center">13 — Visión Final</p>
            <h2
              className="font-condensed font-bold uppercase leading-[0.92] text-zinc-100 mb-6"
              style={{ fontSize: 'clamp(42px, 6vw, 76px)' }}
            >
              De Tienda Física<br />a{' '}
              <span className="text-gold">Operación Digital</span><br />
              Cross-Border
            </h2>
            <p className="text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
              Border Tools está posicionado para evolucionar de una tienda física de herramientas
              a una operación de comercio digital escalable entre México y USA —
              con sistemas propios, presencia digital sólida y una marca que genera confianza
              en ambos mercados.
            </p>
          </motion.div>

          {/* Milestone timeline */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
            className="grid md:grid-cols-4 gap-4 mb-16"
          >
            {milestones.map(({ phase, title, desc }, i) => (
              <motion.div
                key={phase}
                variants={fadeUp}
                className="relative"
              >
                {/* Connector line */}
                {i < milestones.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-full w-full h-px bg-gradient-to-r from-gold/30 to-transparent z-0" />
                )}
                <div className="relative z-10 card-base hover:border-gold/20 transition-colors group">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-green-400' : i === milestones.length - 1 ? 'bg-gold' : 'bg-zinc-500'}`} />
                    <span className="text-[10px] font-semibold tracking-[2px] uppercase text-zinc-500">{phase}</span>
                  </div>
                  <h4 className="font-condensed font-bold text-base text-zinc-100 uppercase mb-1.5">{title}</h4>
                  <p className="text-xs text-zinc-500 font-light leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Final statement */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="text-center"
          >
            <div className="inline-block border border-gold/20 bg-gold/[0.04] rounded-2xl px-10 py-8 max-w-2xl">
              <p className="text-lg text-zinc-200 leading-relaxed font-light mb-4">
                Con la estrategia correcta, los sistemas adecuados y la ejecución disciplinada,
                Border Tools puede ser el referente de herramientas americanas en el mercado
                digital de México y USA.
              </p>
              <p className="text-sm text-gold/80 font-light">
                El momento de construirlo es ahora.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] py-12 bg-bg-primary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-condensed font-bold text-lg tracking-[3px] uppercase text-gold mb-1">
                Border<span className="text-zinc-500 mx-1">·</span>Tools
              </p>
              <p className="text-xs text-zinc-600 font-light">Plan de Expansión Digital 2025–2026</p>
            </div>

            <div className="text-center hidden md:block">
              <p className="text-xs text-zinc-600 font-light">
                Preparado y presentado por
              </p>
              <p className="text-sm font-semibold text-zinc-300">Mayra Galván</p>
              <p className="text-xs text-gold/70">Ecommerce & Digital Operations Consultant</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#hero"
                className="text-[10px] tracking-[2px] uppercase text-zinc-500 hover:text-zinc-300 flex items-center gap-1.5 transition-colors"
              >
                Volver al inicio
                <ArrowUpRight size={11} />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-[11px] text-zinc-700 font-light">
              © 2025 Mayra Galván — Propuesta confidencial para Border Tools
            </p>
            <p className="text-[11px] text-zinc-700 font-light">
              Documento sujeto a revisión y negociación
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
