'use client';
import { motion } from 'framer-motion';
import { ArrowDown, TrendingUp, Globe, BarChart3 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const stats = [
  { value: '2 Mercados', label: 'México · USA', icon: Globe },
  { value: 'Fase 1→3', label: 'Plan por etapas', icon: TrendingUp },
  { value: '360°', label: 'Estrategia digital', icon: BarChart3 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-gradient-radial from-gold-muted via-transparent to-transparent"
        style={{ background: 'radial-gradient(ellipse 55% 45% at 75% 35%, rgba(200,168,75,0.055) 0%, transparent 65%)' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 45% 55% at 15% 75%, rgba(45,111,181,0.04) 0%, transparent 55%)' }}
      />
      {/* Diagonal accent line */}
      <div
        className="absolute top-0 right-0 w-px h-full opacity-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #c8a84b, transparent)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              className="section-eyebrow"
              custom={0} variants={fadeUp} initial="hidden" animate="show"
            >
              Plan de Expansión Digital 2025–2026
            </motion.div>

            <motion.h1
              className="font-condensed font-bold uppercase leading-[0.92] tracking-tight text-zinc-100 mb-4"
              style={{ fontSize: 'clamp(52px, 7.5vw, 92px)' }}
              custom={1} variants={fadeUp} initial="hidden" animate="show"
            >
              Border<br />
              <span className="text-gold">Tools</span><br />
              Digital
            </motion.h1>

            <motion.p
              className="text-base text-zinc-400 max-w-md leading-relaxed font-light mb-8"
              custom={2} variants={fadeUp} initial="hidden" animate="show"
            >
              Estrategia profesional de crecimiento en ecommerce y expansión a
              mercados de México y USA — construida para escalar con control,
              sin depender de agencias externas.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 mb-12"
              custom={3} variants={fadeUp} initial="hidden" animate="show"
            >
              <a href="#analisis" className="btn-gold">Ver Estrategia</a>
              <a href="#expansion" className="btn-outline">Plan de Expansión</a>
              <a href="#colaboracion" className="btn-outline">Colaboración</a>
            </motion.div>

            {/* Consultant tag */}
            <motion.div
              className="flex items-center gap-3 border-l-2 border-gold/40 pl-4"
              custom={4} variants={fadeUp} initial="hidden" animate="show"
            >
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-zinc-500">Presentado por</p>
                <p className="text-sm font-semibold text-zinc-200">Mayra Galván</p>
                <p className="text-xs text-gold/80">Ecommerce & Digital Operations Consultant</p>
              </div>
            </motion.div>
          </div>

          {/* Right: dashboard preview mock */}
          <motion.div
            custom={2} variants={fadeUp} initial="hidden" animate="show"
            className="hidden lg:block"
          >
            <DashboardPreview />
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          custom={5} variants={fadeUp} initial="hidden" animate="show"
          className="mt-16 grid grid-cols-3 gap-4 border-t border-white/[0.06] pt-8"
        >
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={value} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gold-muted flex items-center justify-center shrink-0">
                <Icon size={15} className="text-gold" />
              </div>
              <div>
                <p className="font-condensed font-bold text-lg text-zinc-100 leading-tight">{value}</p>
                <p className="text-[11px] text-zinc-500 uppercase tracking-wider">{label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
      >
        <span className="text-[9px] tracking-[3px] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function DashboardPreview() {
  const bars = [55, 72, 60, 85, 78, 92, 88];
  return (
    <div className="relative">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-2xl blur-2xl opacity-20"
        style={{ background: 'radial-gradient(ellipse at center, #c8a84b 0%, transparent 70%)' }}
      />
      <div className="relative bg-bg-card border border-white/[0.08] rounded-2xl overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
          <div>
            <p className="text-[10px] tracking-[2px] uppercase text-zinc-500">Dashboard Operacional</p>
            <p className="text-sm font-semibold text-zinc-200 mt-0.5">Border Tools — Vista General</p>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-gold/40" />
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-3 gap-px bg-white/[0.04] border-b border-white/[0.06]">
          {[
            { label: 'Mercado Libre', val: 'Activo', color: 'text-green-400' },
            { label: 'Tienda Física', val: 'Base', color: 'text-blue-400' },
            { label: 'USA Digital', val: 'Fase 1', color: 'text-gold' },
          ].map((k) => (
            <div key={k.label} className="bg-bg-tertiary px-4 py-3">
              <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">{k.label}</p>
              <p className={`text-sm font-bold font-condensed ${k.color}`}>{k.val}</p>
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div className="px-5 py-4">
          <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-3">Crecimiento proyectado — Ventas</p>
          <div className="flex items-end gap-1.5 h-20">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  background: i === bars.length - 1
                    ? 'linear-gradient(to top, #c8a84b, #e8c96a)'
                    : `rgba(200,168,75,${0.15 + i * 0.07})`,
                }}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.8 + i * 0.07, duration: 0.5, ease: 'easeOut' }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1.5">
            {['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'].map((m) => (
              <span key={m} className="text-[9px] text-zinc-600 flex-1 text-center">{m}</span>
            ))}
          </div>
        </div>

        {/* Channel tags */}
        <div className="px-5 pb-4 flex gap-2">
          {['Mercado Libre', 'Website', 'Facebook MKT', 'eBay'].map((ch, i) => (
            <span
              key={ch}
              className="text-[9px] tracking-wider uppercase px-2 py-0.5 rounded border"
              style={{
                borderColor: i === 0 ? 'rgba(200,168,75,0.4)' : 'rgba(255,255,255,0.08)',
                color: i === 0 ? '#c8a84b' : '#6b7280',
              }}
            >
              {ch}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
