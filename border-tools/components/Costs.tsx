'use client';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const costs = [
  {
    item: 'Shopify (Plan Básico)',
    monthly: '~$39 USD/mes',
    monthly_mx: '≈ $680 MXN/mes',
    annual: '~$468 USD/año',
    notes: 'Incluye carrito, pagos, inventario básico',
    type: 'Opcional',
    typeColor: 'text-blue-400 border-blue-400/30 bg-blue-400/10',
    priority: 'media',
  },
  {
    item: 'Dominio propio (.com / .mx)',
    monthly: '$25–50 MXN/mes',
    monthly_mx: '$300–600 MXN/año',
    annual: '$300–600 MXN/año',
    notes: 'GoDaddy, Namecheap o equivalente',
    type: 'Esencial',
    typeColor: 'text-gold border-gold/30 bg-gold/10',
    priority: 'alta',
  },
  {
    item: 'Meta Ads (prueba inicial)',
    monthly: '$100–300 MXN/día',
    monthly_mx: '$3,000–9,000 MXN/mes',
    annual: 'Variable + escalable',
    notes: 'Presupuesto de prueba. Escalar según ROI',
    type: 'Recomendado',
    typeColor: 'text-gold border-gold/30 bg-gold/10',
    priority: 'alta',
  },
  {
    item: 'Mercado Ads',
    monthly: 'Variable',
    monthly_mx: 'Por producto',
    annual: 'Solo en combos de alto margen',
    notes: 'Iniciar selectivamente, no en todo el catálogo',
    type: 'Selectivo',
    typeColor: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
    priority: 'media',
  },
  {
    item: 'Hosting — Vercel',
    monthly: '$0',
    monthly_mx: '$0',
    annual: 'Free tier para sitio estático/Next.js',
    notes: 'Sin costo para tráfico inicial',
    type: 'Gratis',
    typeColor: 'text-green-400 border-green-400/30 bg-green-400/10',
    priority: 'incluido',
  },
  {
    item: 'GitHub',
    monthly: '$0',
    monthly_mx: '$0',
    annual: 'Control de versiones gratuito',
    notes: 'Repositorio del sitio y el código',
    type: 'Gratis',
    typeColor: 'text-green-400 border-green-400/30 bg-green-400/10',
    priority: 'incluido',
  },
  {
    item: 'Supabase (base de datos)',
    monthly: '$0',
    monthly_mx: '$0',
    annual: 'Free tier — hasta 500MB',
    notes: 'Ideal para inventario inicial',
    type: 'Gratis',
    typeColor: 'text-green-400 border-green-400/30 bg-green-400/10',
    priority: 'incluido',
  },
];

const principles = [
  { icon: TrendingUp, text: 'Bajo riesgo: iniciar con inversión mínima viable' },
  { icon: CheckCircle2, text: 'Escalable: cada peso invertido debe demostrarse' },
  { icon: DollarSign, text: 'Gradual: crecer en base a resultados, no estimaciones' },
  { icon: AlertCircle, text: 'Operacionalmente realista: sin costos ocultos ni sorpresas' },
];

export default function Costs() {
  return (
    <section id="costos" className="py-24 border-b border-white/[0.05] bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mb-14"
        >
          <p className="section-eyebrow">11 — Costos Estimados</p>
          <h2 className="section-title mb-4">
            Inversión Inicial<br /><span className="text-gold">Realista 2025–2026</span>
          </h2>
          <p className="text-zinc-400 max-w-xl leading-relaxed font-light">
            Infraestructura digital de bajo costo y alta escalabilidad.
            El objetivo es arrancar con el mínimo necesario y escalar conforme lleguen resultados.
          </p>
        </motion.div>

        {/* Cost table */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="rounded-2xl border border-white/[0.07] overflow-hidden mb-10"
        >
          {/* Table header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-bg-tertiary border-b border-white/[0.06]">
            <p className="col-span-4 text-[10px] font-semibold tracking-wider uppercase text-zinc-500">Concepto</p>
            <p className="col-span-3 text-[10px] font-semibold tracking-wider uppercase text-zinc-500">Costo</p>
            <p className="col-span-3 text-[10px] font-semibold tracking-wider uppercase text-zinc-500 hidden md:block">Notas</p>
            <p className="col-span-2 text-[10px] font-semibold tracking-wider uppercase text-zinc-500">Tipo</p>
          </div>

          {/* Rows */}
          {costs.map((cost, i) => (
            <motion.div
              key={cost.item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors"
            >
              <div className="col-span-4">
                <p className="text-sm font-semibold text-zinc-200">{cost.item}</p>
                <p className="text-xs text-zinc-600 font-light mt-0.5">{cost.monthly_mx}</p>
              </div>
              <div className="col-span-3">
                <p className="text-sm font-semibold text-gold">{cost.monthly}</p>
              </div>
              <div className="col-span-3 hidden md:block">
                <p className="text-xs text-zinc-500 font-light leading-relaxed">{cost.notes}</p>
              </div>
              <div className="col-span-2">
                <span className={`tag border text-[9px] ${cost.typeColor}`}>{cost.type}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="card-base border-gold/20 bg-gold/[0.03]"
          >
            <p className="text-[10px] tracking-[3px] uppercase text-gold/70 mb-3">Resumen de inversión mínima</p>
            <div className="space-y-2">
              {[
                { label: 'Arranque digital (dominio + hosting)', val: '~$600 MXN' },
                { label: 'Meta Ads primer mes (bajo)', val: '~$3,000 MXN' },
                { label: 'Shopify (si aplica)', val: '~$680 MXN/mes' },
                { label: 'Herramientas de gestión (stack básico)', val: '$0 (free tiers)' },
              ].map(({ label, val }) => (
                <div key={label} className="flex justify-between items-start gap-4 py-1.5 border-b border-white/[0.04] last:border-0">
                  <span className="text-xs text-zinc-400 font-light flex-1">{label}</span>
                  <span className="text-xs font-semibold text-zinc-200 shrink-0">{val}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-2 mt-1">
                <span className="text-sm font-semibold text-zinc-200">Total arranque estimado</span>
                <span className="font-condensed font-bold text-xl text-gold">~$4,300 MXN</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="card-base"
          >
            <p className="text-[10px] tracking-[3px] uppercase text-zinc-500 mb-3">Principios de inversión</p>
            <div className="space-y-3">
              {principles.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={14} className="text-gold shrink-0" />
                  <p className="text-sm text-zinc-300 font-light">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 p-3 rounded-lg bg-green-500/[0.06] border border-green-500/20">
              <p className="text-xs text-green-300/80 font-light">
                El stack tecnológico base (Vercel + GitHub + Supabase) es completamente
                gratuito en etapas iniciales. El costo real de arranque es principalmente
                publicidad y dominio.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
