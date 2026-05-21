'use client';
import { motion } from 'framer-motion';
import { Database, RefreshCw, Globe, LayoutDashboard, Store, Smartphone, Link2, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const systems = [
  {
    icon: Globe,
    title: 'Sitio Web Propio',
    desc: 'Punto central de la presencia digital. Catálogo, contacto, branding y SEO. Propiedad 100% de Border Tools.',
  },
  {
    icon: Database,
    title: 'Inventario Centralizado',
    desc: 'Un solo sistema que sincroniza stock entre tienda física, web, Mercado Libre y futuros canales.',
  },
  {
    icon: RefreshCw,
    title: 'Sincronización en Tiempo Real',
    desc: 'Actualizaciones automáticas de stock. Si se vende en tienda, se refleja en digital. Sin sobreventas.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard Operacional',
    desc: 'Vista consolidada de ventas, inventario, canales y métricas clave — todo en un solo lugar.',
  },
  {
    icon: Store,
    title: 'Integración Marketplace',
    desc: 'Publicaciones de Mercado Libre conectadas al sistema central. Gestión sin duplicar trabajo.',
  },
  {
    icon: Smartphone,
    title: 'Coordinación Operativa',
    desc: 'Flujos de trabajo para atención, pedidos y logística. La tienda física y el canal digital operan como uno.',
  },
];

const channels = [
  { name: 'Tienda Física', color: '#3a7d4e', status: 'Activo' },
  { name: 'Sitio Web', color: '#2d6fb5', status: 'Por construir' },
  { name: 'Mercado Libre', color: '#c8a84b', status: 'Optimizar' },
  { name: 'Facebook Marketplace', color: '#4a4a8f', status: 'Fase 1' },
  { name: 'eBay USA', color: '#6b4c8f', status: 'Fase 1' },
  { name: 'Amazon USA', color: '#8f4c2a', status: 'Fase 2' },
];

const benefits = [
  'Eliminar sobreventas entre canales',
  'Reducir tiempo operativo por canal',
  'Actualizaciones de precio centralizadas',
  'Visibilidad total del inventario disponible',
  'Base escalable para agregar nuevos canales',
  'Reportes y métricas consolidadas',
];

export default function Infrastructure() {
  return (
    <section id="infraestructura" className="py-24 border-b border-white/[0.05] bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="mb-14"
        >
          <p className="section-eyebrow">05 — Infraestructura Digital</p>
          <h2 className="section-title mb-4">
            Sistemas &<br /><span className="text-gold">Operaciones</span>
          </h2>
          <p className="text-zinc-400 max-w-xl leading-relaxed font-light">
            La infraestructura digital es la diferencia entre un negocio que escala y uno que
            se ahoga en procesos manuales. El objetivo es construirla bien desde el inicio.
          </p>
        </motion.div>

        {/* System cards */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.07 } }, hidden: {} }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-16"
        >
          {systems.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={fadeUp} className="card-base card-hover group">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Icon size={17} className="text-blue-400" />
              </div>
              <h3 className="text-sm font-semibold text-zinc-200 mb-1.5">{title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-light">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Centralized inventory diagram */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="rounded-2xl border border-white/[0.07] bg-bg-tertiary overflow-hidden mb-10"
        >
          <div className="px-6 py-5 border-b border-white/[0.06]">
            <p className="text-[10px] tracking-[3px] uppercase text-zinc-500 mb-1">Sistema Central</p>
            <h3 className="font-condensed font-bold text-xl text-zinc-100 uppercase">
              Inventario Unificado — Todos los Canales
            </h3>
          </div>

          <div className="p-6">
            {/* Central hub */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl blur-xl opacity-20 bg-gold" />
                <div className="relative border-2 border-gold/40 bg-gold/[0.06] rounded-2xl px-8 py-4 text-center">
                  <Database size={20} className="text-gold mx-auto mb-1" />
                  <p className="font-condensed font-bold text-sm text-gold uppercase tracking-wider">
                    Sistema de Inventario Central
                  </p>
                  <p className="text-[10px] text-zinc-500 mt-0.5">Supabase / Base de datos propia</p>
                </div>
              </div>
            </div>

            {/* Channels */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {channels.map((ch) => (
                <div key={ch.name} className="bg-bg-card border border-white/[0.06] rounded-xl p-4 text-center">
                  <div
                    className="w-2 h-2 rounded-full mx-auto mb-2"
                    style={{ background: ch.color }}
                  />
                  <p className="text-xs font-semibold text-zinc-300 mb-1">{ch.name}</p>
                  <span
                    className="text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded"
                    style={{
                      background: `${ch.color}20`,
                      color: ch.color,
                    }}
                  >
                    {ch.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Connection lines note */}
            <p className="text-[10px] text-zinc-600 text-center mt-4">
              Todos los canales sincronizados al inventario central — actualizaciones en tiempo real
            </p>
          </div>
        </motion.div>

        {/* Benefits + tech stack */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="card-base"
          >
            <p className="text-[10px] tracking-[3px] uppercase text-zinc-500 mb-4">Beneficios operativos</p>
            <ul className="space-y-2.5">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2.5">
                  <CheckCircle2 size={14} className="text-green-400 shrink-0" />
                  <span className="text-sm text-zinc-300 font-light">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="card-base"
          >
            <p className="text-[10px] tracking-[3px] uppercase text-zinc-500 mb-4">Stack tecnológico propuesto</p>
            <div className="space-y-3">
              {[
                { name: 'Next.js / Vercel', role: 'Sitio web + hosting gratuito', tier: 'Free' },
                { name: 'Supabase', role: 'Base de datos + inventario', tier: 'Free tier' },
                { name: 'Shopify (opcional)', role: 'Ecommerce gestionado', tier: '$39/mes' },
                { name: 'GitHub', role: 'Control de versiones + CI/CD', tier: 'Free' },
                { name: 'Meta Business', role: 'Ads y catálogo de productos', tier: 'Por uso' },
              ].map(({ name, role, tier }) => (
                <div key={name} className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-0">
                  <div>
                    <p className="text-sm font-semibold text-zinc-200">{name}</p>
                    <p className="text-xs text-zinc-500 font-light">{role}</p>
                  </div>
                  <span className="text-[10px] text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded">{tier}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Link2 size={12} className="text-gold" />
              <p className="text-[11px] text-gold/80 font-light">
                Infraestructura digital de bajo costo y alta escalabilidad
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
